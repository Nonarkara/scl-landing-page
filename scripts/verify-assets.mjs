import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const repoRoot = process.cwd();
const programPath = path.join(repoRoot, 'src/data/program.js');
const logoBarPath = path.join(repoRoot, 'src/components/LogoBar.jsx');

function fail(message) {
  console.error(`ERROR: ${message}`);
  process.exitCode = 1;
}

function extractStringArray(source, variableName) {
  const pattern = new RegExp(`const\s+${variableName}\s*=\s*\[(.*?)\];`, 's');
  const match = source.match(pattern);
  if (!match) return [];
  return [...match[1].matchAll(/'([^']+)'/g)].map((item) => item[1]);
}

const programSource = readFileSync(programPath, 'utf8');
const logoBarSource = readFileSync(logoBarPath, 'utf8');

const photosMoreNames = extractStringArray(programSource, 'photosMoreNames');
const galleryFeaturedNames = extractStringArray(programSource, 'galleryFeaturedNames');
const narrativeNames = [...programSource.matchAll(/fromMore\('([^']+)'\)/g)].map((match) => match[1]);
const galleryExcludedNames = extractStringArray(programSource, 'galleryExcludedNames');
const logoPaths = [...logoBarSource.matchAll(/`\$\{B\}([^`]+)`/g)].map((match) => match[1]);

const duplicateNarrative = [...new Set(narrativeNames.filter((name, index) => narrativeNames.indexOf(name) !== index))];
if (duplicateNarrative.length > 0) {
  fail(`Narrative photo overlap found: ${duplicateNarrative.join(', ')}`);
}

const narrativeSet = new Set(narrativeNames);
const excludedSet = new Set(galleryExcludedNames);
const galleryNames = [
  ...galleryFeaturedNames,
  ...photosMoreNames.filter((name) => !galleryFeaturedNames.includes(name) && !excludedSet.has(name)),
];
const galleryOverlap = galleryNames.filter((name) => narrativeSet.has(name));
if (galleryOverlap.length > 0) {
  fail(`Gallery overlaps narrative set: ${[...new Set(galleryOverlap)].join(', ')}`);
}

for (const name of new Set([...photosMoreNames, ...narrativeNames])) {
  const photoPath = path.join(repoRoot, 'public', 'Photos More', name);
  if (!existsSync(photoPath)) {
    fail(`Missing photo asset: public/Photos More/${name}`);
  }
}

for (const relativePath of logoPaths) {
  const logoPath = path.join(repoRoot, 'public', relativePath);
  if (!existsSync(logoPath)) {
    fail(`Missing logo asset: public/${relativePath}`);
  }
}

if (process.exitCode) {
  process.exit(process.exitCode);
}

console.log(`Verified ${new Set(photosMoreNames).size} Photos More assets.`);
console.log(`Narrative photo set: ${narrativeSet.size} unique files.`);
console.log(`Gallery photo set: ${galleryNames.length} unique files, with no narrative overlap.`);
console.log(`Verified ${logoPaths.length} logo assets.`);

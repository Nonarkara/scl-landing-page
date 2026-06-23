import { existsSync, readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const repoRoot = process.cwd();
const programPath = path.join(repoRoot, 'src/data/program.js');
const logoBarPath = path.join(repoRoot, 'src/components/LogoBar.jsx');
const mediaExtensions = new Set(['.avif', '.gif', '.jpg', '.jpeg', '.png', '.svg', '.webp']);

function fail(message) {
  console.error(`ERROR: ${message}`);
  process.exitCode = 1;
}

function extractStringArray(source, variableName) {
  const pattern = new RegExp(String.raw`const\s+${variableName}\s*=\s*\[(.*?)\];`, 's');
  const match = source.match(pattern);
  if (!match) return [];
  return [...match[1].matchAll(/'([^']+)'/g)].map((item) => item[1]);
}

function walkFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    if (['.git', 'dist', 'node_modules'].includes(entry.name)) return [];
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return walkFiles(fullPath);
    return fullPath;
  });
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
const excludedSet = new Set([...narrativeNames, ...galleryExcludedNames]);
const galleryNames = [
  ...galleryFeaturedNames,
  ...photosMoreNames.filter((name) => !galleryFeaturedNames.includes(name) && !excludedSet.has(name)),
];
const galleryOverlap = galleryNames.filter((name) => narrativeSet.has(name));
if (galleryOverlap.length > 0) {
  fail(`Gallery overlaps narrative set: ${[...new Set(galleryOverlap)].join(', ')}`);
}

for (const name of new Set([...photosMoreNames, ...narrativeNames])) {
  const photoPath = path.join(repoRoot, 'public', 'Photos', name);
  if (!existsSync(photoPath)) {
    fail(`Missing photo asset: public/Photos/${name}`);
  }
}

for (const relativePath of logoPaths) {
  const logoPath = path.join(repoRoot, 'public', relativePath);
  if (!existsSync(logoPath)) {
    fail(`Missing logo asset: public/${relativePath}`);
  }
}

const sourceText = walkFiles(repoRoot)
  .filter((filePath) => !filePath.includes(`${path.sep}public${path.sep}`))
  .map((filePath) => readFileSync(filePath, 'utf8'))
  .join('\n');

const unusedMedia = walkFiles(path.join(repoRoot, 'public'))
  .filter((filePath) => mediaExtensions.has(path.extname(filePath).toLowerCase()))
  .map((filePath) => path.relative(path.join(repoRoot, 'public'), filePath).replaceAll(path.sep, '/'))
  .filter((relativePath) => {
    const baseName = path.basename(relativePath);
    const encodedRelativePath = relativePath.split('/').map(encodeURIComponent).join('/');
    const encodedBaseName = encodeURIComponent(baseName);
    const stem = baseName.replace(/\.[^.]+$/, '');
    const candidates = [relativePath, encodedRelativePath, baseName, encodedBaseName];

    if (relativePath.startsWith('alumni/')) {
      candidates.push(stem);
    }

    return !candidates.some((candidate) => sourceText.includes(candidate));
  });

if (unusedMedia.length > 0) {
  fail(`Unused public media assets: ${unusedMedia.join(', ')}`);
}

if (process.exitCode) {
  process.exit(process.exitCode);
}

console.log(`Verified ${new Set(photosMoreNames).size} Photos assets.`);
console.log(`Narrative photo set: ${narrativeSet.size} unique files.`);
console.log(`Gallery photo set: ${galleryNames.length} unique files, with no narrative overlap.`);
console.log(`Verified ${logoPaths.length} logo assets.`);

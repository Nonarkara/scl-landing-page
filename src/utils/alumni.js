const standaloneTitles = new Set(['ว่าที่', 'Mr.', 'Mrs.', 'Ms.']);

const roleKeywordPattern =
  /^(กรรมการ|ผู้|รอง|หัวหน้า|อาจารย์|นายก|เลขานุการ|ที่ปรึกษา|ประธาน|บริษัท|สำนักงาน|สำนัก|องค์การ|มหาวิทยาลัย|กระทรวง|เทศบาล|การไฟฟ้า|โรงพยาบาล|กรม|กอง|ฝ่าย|Global|Chief)/;

export function normalizeVisibleText(value = '') {
  return value
    .replace(/\u00a0/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/\(\s+/g, '(')
    .replace(/\s+\)/g, ')')
    .trim();
}

export function normalizeSearchText(value = '') {
  return normalizeVisibleText(value)
    .normalize('NFKC')
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, '');
}

function isLikelyRoleToken(token = '') {
  return roleKeywordPattern.test(token);
}

function isLikelyCompleteName(value = '') {
  const cleaned = normalizeVisibleText(value);
  if (!cleaned) return false;

  const tokens = cleaned.split(' ').filter(Boolean);
  if (tokens.length < 2 || tokens.length > 4) return false;

  return !tokens.some(isLikelyRoleToken);
}

function guessDisplayName(person, sourceLine) {
  const fallbackName = normalizeVisibleText(person.name);
  if (isLikelyCompleteName(fallbackName)) {
    return fallbackName;
  }

  const tokens = sourceLine.split(' ').filter(Boolean);
  if (!tokens.length) {
    return fallbackName || sourceLine;
  }

  const tokenCount =
    standaloneTitles.has(tokens[0]) || tokens[0].endsWith('.') ? 3 : 2;

  return tokens.slice(0, tokenCount).join(' ');
}

export function buildAlumniEntries(alumniData) {
  return Object.entries(alumniData).flatMap(([batch, people]) =>
    people.map((person, index) => {
      const sourceLine = normalizeVisibleText(
        person.original_line ||
          [person.name, person.organization].filter(Boolean).join(' ')
      );
      const displayName = guessDisplayName(person, sourceLine);
      const detail = normalizeVisibleText(
        sourceLine.startsWith(displayName)
          ? sourceLine.slice(displayName.length)
          : person.organization || sourceLine
      );

      const sector = classifySector(sourceLine);
      return {
        id: `${batch}-${index}`,
        batch: Number(batch),
        displayName,
        detail: detail || sourceLine,
        sourceLine,
        sector,
        searchIndex: normalizeSearchText(
          [
            sourceLine,
            person.name,
            person.organization,
            displayName,
            detail,
            `batch ${batch}`,
            `scl ${batch}`,
          ].join(' ')
        ),
      };
    })
  );
}

export function groupEntriesByBatch(entries) {
  return entries.reduce((accumulator, entry) => {
    const existing = accumulator[entry.batch] || [];
    accumulator[entry.batch] = [...existing, entry];
    return accumulator;
  }, {});
}

// Sector classification based on Thai organization keywords
// OCR artifacts like "จ ากัด" (จำกัด), "ส านักงาน" (สำนักงาน) are handled
const SECTOR_RULES = [
  {
    sector: 'academic',
    patterns: [/มหาวิทยาลัย/, /อาจารย์/, /ศาสตราจารย์/, /วิทยาลัย/, /สถาบัน.*วิจัย/],
  },
  {
    sector: 'stateEnterprise',
    patterns: [
      /การไฟฟ้า/, /การประปา/, /โทรคมนาคมแห่งชาติ/,
      /ธนาคาร.*แห่งประเทศไทย/, /องค์การ.*โทรศัพท์/,
      /ไปรษณีย์ไทย/, /การรถไฟ/, /รถไฟฟ้า/,
    ],
  },
  {
    sector: 'public',
    patterns: [
      /เทศบาล/, /องค์การบริหารส่วน/, /กระทรวง/, /กรม[^ร]/, /จังหวัด/,
      /ผู้ว่าราชการ/, /นายกเทศมนตรี/, /ปลัดเทศบาล/,
      /ส\s?า\s?นักงาน(?!.*บริษัท)/, /สภาพัฒนา/, /ราชการ/,
      /กอง.*ยุทธศาสตร์/, /นักวิเคราะห์นโยบาย/,
    ],
  },
  {
    sector: 'private',
    patterns: [/บริษัท/, /จ\s?า\s?กัด/, /CEO/, /Chief/, /กรรมการผู้จัดการ/],
  },
];

export function classifySector(sourceLine = '') {
  const text = sourceLine.replace(/\s+/g, ' ');
  for (const rule of SECTOR_RULES) {
    if (rule.patterns.some((p) => p.test(text))) {
      return rule.sector;
    }
  }
  return 'other';
}

export const SECTOR_KEYS = ['all', 'public', 'private', 'academic', 'stateEnterprise', 'other'];

export function computeDemographics(entries) {
  const sectorCounts = {};
  for (const entry of entries) {
    sectorCounts[entry.sector] = (sectorCounts[entry.sector] || 0) + 1;
  }
  return {
    total: entries.length,
    sectors: sectorCounts,
    batchCount: new Set(entries.map((e) => e.batch)).size,
  };
}

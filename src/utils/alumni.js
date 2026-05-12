const standaloneTitles = new Set(['ว่าที่', 'Mr.', 'Mrs.', 'Ms.']);

const roleKeywordPattern =
  /^(กรรมการ|ผู้|รอง|หัวหน้า|อาจารย์|นายก|เลขานุการ|ที่ปรึกษา|ประธาน|บริษัท|สำนักงาน|สำนัก|องค์การ|มหาวิทยาลัย|กระทรวง|เทศบาล|การไฟฟ้า|โรงพยาบาล|กรม|กอง|ฝ่าย|Global|Chief)/;

const displayNameCorrections = [
  {
    match: 'ธูปกระจ่าง',
    displayName: 'ตรีลุพธ์ ธูปกระจ่าง',
  },
];

export function normalizeVisibleText(value = '') {
  return value
    .replace(/\u00a0/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/\(\s+/g, '(')
    .replace(/\s+\)/g, ')')
    .trim();
}

export const THAI_PROVINCES = {
  'กรุงเทพมหานคร': [13.7563, 100.5018],
  'กทม': [13.7563, 100.5018],
  'กระบี่': [8.0863, 98.9063],
  'กาญจนบุรี': [14.0228, 99.5328],
  'กาฬสินธุ์': [16.4322, 103.5061],
  'กำแพงเพชร': [16.4828, 99.5227],
  'ขอนแก่น': [16.4322, 102.8236],
  'จันทบุรี': [12.6114, 102.1039],
  'ฉะเชิงเทรา': [13.6904, 101.0780],
  'ชลบุรี': [13.3611, 100.9847],
  'ชัยนาท': [15.1852, 100.1251],
  'ชัยภูมิ': [15.8063, 102.0315],
  'ชุมพร': [10.4930, 99.1800],
  'เชียงราย': [19.9105, 99.8406],
  'เชียงใหม่': [18.7883, 98.9853],
  'ตรัง': [7.5563, 99.6114],
  'ตราด': [12.2428, 102.5175],
  'ตาก': [16.8840, 99.1258],
  'นครนายก': [14.2069, 101.2131],
  'นครปฐม': [13.8140, 100.0373],
  'นครพนม': [17.4054, 104.7788],
  'นครราชสีมา': [14.9799, 102.0978],
  'นครศรีธรรมราช': [8.4304, 99.9631],
  'นครสวรรค์': [15.7051, 100.1388],
  'นนทบุรี': [13.8591, 100.5217],
  'นราธิวาส': [6.4255, 101.8253],
  'น่าน': [18.7756, 100.7730],
  'บึงกาฬ': [18.3605, 103.6520],
  'บุรีรัมย์': [14.9930, 103.1029],
  'ปทุมธานี': [14.0208, 100.5250],
  'ประจวบคีรีขันธ์': [11.8124, 99.7975],
  'ปราจีนบุรี': [14.0510, 101.3734],
  'ปัตตานี': [6.8673, 101.2501],
  'พระนครศรีอยุธยา': [14.3532, 100.5690],
  'พังงา': [8.4501, 98.5283],
  'พัทลุง': [7.6167, 100.0740],
  'พิจิตร': [16.4428, 100.3488],
  'พิษณุโลก': [16.8211, 100.2659],
  'เพชรบุรี': [13.1118, 99.9442],
  'เพชรบูรณ์': [16.4184, 101.1550],
  'แพร่': [18.1446, 100.1403],
  'พะเยา': [19.1664, 99.9018],
  'ภูเก็ต': [7.8804, 98.3922],
  'มหาสารคาม': [16.1855, 103.3007],
  'มุกดาหาร': [16.5436, 104.7235],
  'แม่ฮ่องสอน': [19.3000, 97.9667],
  'ยะลา': [6.5401, 101.2813],
  'ยโสธร': [15.7926, 104.1453],
  'ร้อยเอ็ด': [16.0538, 103.6520],
  'ระนอง': [9.9658, 98.6348],
  'ระยอง': [12.6814, 101.2816],
  'ราชบุรี': [13.5283, 99.8128],
  'ลพบุรี': [14.7995, 100.6534],
  'ลำปาง': [18.2888, 99.4930],
  'ลำพูน': [18.5745, 99.0087],
  'เลย': [17.4860, 101.7223],
  'ศรีสะเกษ': [15.1186, 104.3220],
  'สกลนคร': [17.1664, 104.1486],
  'สงขลา': [7.1898, 100.5954],
  'สตูล': [6.6238, 100.0674],
  'สมุทรปราการ': [13.5991, 100.5968],
  'สมุทรสงคราม': [13.4098, 100.0023],
  'สมุทรสาคร': [13.5475, 100.2736],
  'สระแก้ว': [13.8240, 102.0646],
  'สระบุรี': [14.5289, 100.9101],
  'สิงห์บุรี': [14.8936, 100.4044],
  'สุโขทัย': [17.0055, 99.8227],
  'สุพรรณบุรี': [14.4742, 100.1123],
  'สุราษฎร์ธานี': [9.1333, 99.3333],
  'สุราษรฎร์ธานี': [9.1333, 99.3333], // typo handling
  'สุรินทร์': [14.8818, 103.4936],
  'หนองคาย': [17.8783, 102.7420],
  'หนองบัวลำภู': [17.2023, 102.4411],
  'อ่างทอง': [14.5896, 100.4551],
  'อุดรธานี': [17.4138, 102.7859],
  'อุทัยธานี': [15.3789, 100.0245],
  'อุตรดิตถ์': [17.6201, 100.0993],
  'อุบลราชธานี': [15.2443, 104.8473],
  'อำนาจเจริญ': [15.8597, 104.6258],
  'กทม.': [13.7563, 100.5018]
};

const provinceNames = Object.keys(THAI_PROVINCES).sort((a, b) => b.length - a.length);

export function extractProvince(sourceLine = '') {
  for (const province of provinceNames) {
    if (sourceLine.includes(province)) {
      if (province === 'กทม' || province === 'กทม.') return 'กรุงเทพมหานคร';
      if (province === 'สุราษรฎร์ธานี') return 'สุราษฎร์ธานี';
      return province;
    }
  }
  return null;
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
  const correction = displayNameCorrections.find((item) => sourceLine.includes(item.match));
  if (correction) return correction.displayName;

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
      const province = extractProvince(sourceLine);
      const roleGroup = extractRoleGroup(sourceLine);
      
      return {
        id: `${batch}-${index}`,
        batch: Number(batch),
        displayName,
        detail: detail || sourceLine,
        sourceLine,
        sector,
        province,
        roleGroup,
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

export function extractRoleGroup(sourceLine = '') {
  const text = sourceLine.replace(/\s+/g, ' ');
  if (/ผู้ว่าราชการ/.test(text)) return 'Governors';
  if (/นายกเทศมนตรี|นายกองค์การบริหาร|นายกเมือง/.test(text)) return 'Mayors & Local Leaders';
  if (/CEO|Chief|ประธานเจ้าหน้าที่บริหาร|กรรมการผู้จัดการ/.test(text)) return 'CEOs & MDs';
  if (/ผู้อำนวยการ|ผู้บริหาร|รองผู้อำนวยการ|ผู้อ\s?า\s?นวยการ/.test(text)) return 'Directors & Executives';
  return 'Others';
}

export function computeDemographics(entries) {
  const sectorCounts = {};
  const provinceCounts = {};
  const provinceRoles = {};

  for (const entry of entries) {
    sectorCounts[entry.sector] = (sectorCounts[entry.sector] || 0) + 1;
    if (entry.province) {
      provinceCounts[entry.province] = (provinceCounts[entry.province] || 0) + 1;
      
      if (!provinceRoles[entry.province]) {
        provinceRoles[entry.province] = {};
      }
      if (entry.roleGroup && entry.roleGroup !== 'Others') {
        provinceRoles[entry.province][entry.roleGroup] = (provinceRoles[entry.province][entry.roleGroup] || 0) + 1;
      }
    }
  }
  
  return {
    total: entries.length,
    sectors: sectorCounts,
    provinces: provinceCounts,
    provinceRoles,
    batchCount: new Set(entries.map((e) => e.batch)).size,
  };
}

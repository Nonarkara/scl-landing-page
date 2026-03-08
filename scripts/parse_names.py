import json
import re
import os

thai_nums = '๑๒๓๔๕๖๗๘๙๐'
arab_nums = '1234567890'

# Regex to match names. Need to handle different titles and varying formats.
# Pattern: \d+ [Optional dot] [Title] [Name]
titles_str = r"(นาย|นาง|นางสาว|ดร\.|น\.อ\.|ร\.ต\.อ\.|ผศ\.|รศ\.|นพ\.|พญ\.|แพทย์หญิง|ว่าที่|พ\.อ\.|Mr\.)"
# Sometimes there's no space after the number
pattern = re.compile(rf"^([{thai_nums}{arab_nums}]+)\s*\.?\s*({titles_str}.+)", re.MULTILINE)

final_data = {}

with open("raw_alumni.json", "r", encoding="utf-8") as f:
    raw = json.load(f)

for b in raw:
    b_num = b["batch"]
    text = b["text"]
    
    if b_num == 2:
        with open("batch2_ocr.txt", "r", encoding="utf-8") as f2:
            text = f2.read()
            
    matches = pattern.findall(text)
    
    alumni_list = []
    for m in matches:
        num_str = m[0]
        # m[1] is the title because of the capturing group, so we need to construct the full string.
        # Actually in the regex we had grouped the title, so m[1] is the title and m[2] is the rest? 
        # Wait, the regex is: ({titles_str}.+) -> this captures the title AND the rest in group 2. Group 3 would be just the title.
        full_name_line = m[1].strip()
        
        # Split by a large space to separate name and organization, since PDFs often use large gaps for columns.
        parts = re.split(r'\s{2,}', full_name_line)
        name = parts[0].strip()
        org = parts[1].strip() if len(parts) > 1 else ""
        
        alumni_list.append({
            "name": name,
            "organization": org,
            "original_line": full_name_line
        })
        
    final_data[str(b_num)] = alumni_list
    print(f"Batch {b_num}: Found {len(alumni_list)} people")

os.makedirs("../src/data", exist_ok=True)
with open("../src/data/alumni.json", "w", encoding="utf-8") as f_out:
    json.dump(final_data, f_out, ensure_ascii=False, indent=2)

print("Saved final data to src/data/alumni.json")

import json
from pypdf import PdfReader
import re

files = [
    {"batch": 1, "filename": "batch1.pdf"},
    {"batch": 2, "filename": "batch2.pdf"},
    {"batch": 3, "filename": "batch3.pdf"},
    {"batch": 4, "filename": "batch4.pdf"},
    {"batch": 5, "filename": "batch5.pdf"}
]

results = []

for f in files:
    try:
        reader = PdfReader(f["filename"])
        text = ""
        for page in reader.pages:
            t = page.extract_text()
            if t:
                text += t + "\n"
        
        results.append({
            "batch": f["batch"],
            "text": text
        })
        print(f"Batch {f['batch']} extracted text length: {len(text)}")
        
    except Exception as e:
        print(f"Error parsing batch {f['batch']}: {e}")

with open("raw_alumni.json", "w", encoding="utf-8") as f_out:
    json.dump(results, f_out, ensure_ascii=False, indent=2)

print("Saved to raw_alumni.json")

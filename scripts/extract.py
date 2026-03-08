import requests
from pypdf import PdfReader
import io
import json

batches = [
    {
        "batch": 1,
        "url": "https://www.depa.or.th/storage/app/media/file/Announce-SCL-21042565.pdf"
    },
    {
        "batch": 2,
        "url": "https://www.depa.or.th/storage/app/media/file-announce/Announcement%20of%20the%20list%20of%20people%20who%20are%20eligible%20to%20attend%20the%20training%20Smart%20City%20Leadership%20Program%20_2_20220816.pdf"
    },
    {
        "batch": 3,
        "url": "https://www.depa.or.th/storage/app/media/file-announce/Announcement%20of%20the%20list%20of%20people%20who%20are%20eligible%20to%20attend%20the%20training%20Smart%20City%20Leadership%20Program%20_3_20230426.pdf"
    },
    {
        "batch": 4,
        "url": "https://www.depa.or.th/storage/app/media/file/announcement-smart20city20leadership-program4.pdf"
    },
    {
        "batch": 5,
        "url": "https://www.depa.or.th/storage/app/media/file/AN_ANNOUUNCE_SCL5_31-7-2.pdf"
    }
]

results = []

for b in batches:
    try:
        print(f"Fetching batch {b['batch']}...")
        r = requests.get(b['url'])
        r.raise_for_status()
        
        pdf_file = io.BytesIO(r.content)
        reader = PdfReader(pdf_file)
        
        text = ""
        for page in reader.pages:
            t = page.extract_text()
            if t:
                text += t + "\n"
        
        results.append({
            "batch": b['batch'],
            "text": text
        })
        print(f"Batch {b['batch']} extracted text length: {len(text)}")
    except Exception as e:
        print(f"Error parsing batch {b['batch']}: {e}")

with open("raw_alumni.json", "w", encoding="utf-8") as f:
    json.dump(results, f, ensure_ascii=False, indent=2)

print("Saved to raw_alumni.json")

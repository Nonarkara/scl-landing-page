import fitz  # PyMuPDF
import pytesseract
from PIL import Image
import os

pdf_path = "batch2.pdf"
tessdata_dir = os.path.abspath(".")  # Tell tesseract to look here for tha.traineddata

doc = fitz.open(pdf_path)
text = ""

for page_num in range(len(doc)):
    page = doc.load_page(page_num)
    # increase resolution
    zoom_x = 2.0  
    zoom_y = 2.0  
    mat = fitz.Matrix(zoom_x, zoom_y)
    pix = page.get_pixmap(matrix=mat)
    
    img_path = f"page_{page_num}.png"
    pix.save(img_path)
    
    # Run OCR
    # We use tha+eng to handle Thai mixed with English/Numbers
    custom_config = f'--tessdata-dir "{tessdata_dir}"'
    page_text = pytesseract.image_to_string(Image.open(img_path), lang='tha+eng', config=custom_config)
    text += page_text + "\n"

# Append to raw_alumni.json or write separating
with open("batch2_ocr.txt", "w", encoding="utf-8") as f:
    f.write(text)

print(f"Batch 2 OCR extracted {len(text)} characters.")

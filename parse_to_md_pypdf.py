import PyPDF2
import os

files = {
    "0_The_Onli_Way_final.pdf": ("public/THE_ONLI_WAY.md", "# The Onli Way\n\n## Executive Summary\n\n"),
    "1_The_Market_final.pdf": ("public/THE_MARKET.md", "# The Market\n\n## Executive Summary\n\n"),
    "2_The_Value_final.pdf": ("public/THE_VALUE.md", "# The Value\n\n## Executive Summary\n\n"),
    "3_The_Proof_final.pdf": ("public/THE_PROOF.md", "# The Proof\n\n## Executive Summary\n\n")
}

for pdf_file, (target_file, prefix) in files.items():
    if os.path.exists(pdf_file):
        try:
            with open(pdf_file, 'rb') as file:
                reader = PyPDF2.PdfReader(file)
                text = ''
                for page in reader.pages:
                    text += page.extract_text() + '\n\n'
            
            with open(target_file, "w") as f:
                f.write(prefix + text)
            print(f"Successfully wrote {target_file}")
        except Exception as e:
            print(f"Failed to read {pdf_file}: {e}")

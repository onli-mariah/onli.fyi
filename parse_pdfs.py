import subprocess
import glob

pdfs = glob.glob("*_final.pdf")
for pdf in sorted(pdfs):
    subprocess.run(["npx", "pdf2json", "-f", pdf])
    print(f"Parsed {pdf}")

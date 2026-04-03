import pymupdf4llm
import os

files = {
    "0_The_Onli_Way_final.pdf": ("public/THE_ONLI_WAY.md", "# The Onli Way\n\n## Executive Summary\n\nThe Onli Way is a radical departure from legacy SaaS, Cloud, and Blockchain assumptions.\n\n"),
    "1_The_Market_final.pdf": ("public/THE_MARKET.md", "# The Market\n\n## Executive Summary\n\nMarketplaces dictate the terms of trade. Onli upends those terms entirely.\n\n"),
    "2_The_Value_final.pdf": ("public/THE_VALUE.md", "# The Value\n\n## Executive Summary\n\nOnli demonstrates profound total cost of ownership reductions relative to legacy platforms.\n\n"),
    "3_The_Proof_final.pdf": ("public/THE_PROOF.md", "# The Proof\n\n## Executive Summary\n\nEnterprises and developers demand proof that zero-infrastructure scalability works in practice.\n\n")
}

for pdf_file, (target_file, prefix) in files.items():
    if os.path.exists(pdf_file):
        md_text = pymupdf4llm.to_markdown(pdf_file)
        
        # Write exactly prefix + md_text
        with open(target_file, "w") as f:
            f.write(prefix + md_text)
        print(f"Successfully wrote {target_file}")
    else:
        print(f"Could not find {pdf_file}")


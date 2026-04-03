import re
import os

files = {
    "public/THE_VALUE.md": [
        "The Math",
        "Summary",
        "Small & Medium Business",
        "Mid-Market",
        "Enterprise",
        "Legacy Systems",
        "References"
    ],
    "public/THE_PROOF.md": [
        "Target Platforms",
        "Methodology",
        "Key Assumptions",
        "Use Case Scenarios",
        "Cost Structure Breakdown",
        "Year-Over-Year Costs",
        "References"
    ]
}

for filepath, headers in files.items():
    if not os.path.exists(filepath): continue
    with open(filepath, "r") as f:
        text = f.read()

    for h in headers:
        # Match the header if it occurs at the start of a line or after a newline
        text = re.sub(r'(?m)^(' + re.escape(h) + r')\s*$', r'\n## \1\n', text)
        
    with open(filepath, "w") as f:
        f.write(text)

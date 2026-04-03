import re

files = {
    "public/THE_ONLI_WAY.md": [
        "The Architecture of Friction",
        "The Paradigm Shift: Computational Possession",
        "The Inverted Cost Curve",
        "The Scale of the Opportunity",
        "References"
    ],
    "public/THE_MARKET.md": [
        "The Traditional Model",
        "The New Friction Point",
        "The Root Cause",
        "The Proof",
        "How Onli Fixes This",
        "TAM & Global Reach",
        "References"
    ],
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
    with open(filepath, "r") as f:
        text = f.read()

    for h in headers:
        # If the header exists on a line by itself, replace it with ## Header
        text = re.sub(r'(?m)^(' + re.escape(h) + r')\s*$', r'\n## \1\n', text)
        
    with open(filepath, "w") as f:
        f.write(text)
    
print("Formatted headers for TOC")

import re
import os

with open("The Market.md", "r") as f:
    market_text = f.read()

# Remove 'Vertical X' lines and ensure the actual name is an h2
market_text = re.sub(r'Vertical \d+\n## (.*?)\n', r'## \1\n', market_text)
market_text = re.sub(r'Vertical \d+\r?\n## (.*?)\r?\n', r'## \1\n', market_text)
if "## Executive Summary" not in market_text:
    # After the first blockquote, insert ## Executive Summary
    market_text = re.sub(r'(>.*?\n\n.*?\n\n)', r'\1## Executive Summary\n\n', market_text, count=1)

with open("public/THE_MARKET.md", "w") as f:
    f.write(market_text)


with open("The Proof.md", "r") as f:
    proof_text = f.read()

# Add Executive Summary
if "## Executive Summary" not in proof_text:
    proof_text = re.sub(r'(>.*?\n\n.*?\n\n)', r'\1## Executive Summary\n\n', proof_text, count=1)

# Change platforms to h2
proof_text = proof_text.replace("### AWS Managed Blockchain", "## AWS")
proof_text = proof_text.replace("### Oracle Blockchain Platform", "## Oracle")
proof_text = proof_text.replace("### Paxos", "## Paxos")
proof_text = proof_text.replace("### Onli", "## Onli")

with open("public/THE_PROOF.md", "w") as f:
    f.write(proof_text)


with open("The Value.md", "r") as f:
    value_text = f.read()

# Add Executive Summary
if "## Executive Summary" not in value_text:
    value_text = re.sub(r'(>.*?\n\n.*?\n\n)', r'\1## Executive Summary\n\n', value_text, count=1)

# The user asked for "SMB, mid-market, and enterprise".
# We will just inject these as headers above the Tier Definitions table or similar.
# Actually, the file is organized by Vertical. Let's just suppress the Vertical H2s so they don't clog the TOC,
# and put the requested headers above the Tier definitions.
value_text = re.sub(r'## Micro-Commodities', r'### Micro-Commodities', value_text)
value_text = re.sub(r'## Trade Finance', r'### Trade Finance', value_text)
value_text = re.sub(r'## Cross-Border Payments', r'### Cross-Border Payments', value_text)
value_text = re.sub(r'## Corporate Treasury', r'### Corporate Treasury', value_text)
value_text = re.sub(r'## Tokenized Real-World Assets', r'### Tokenized Real-World Assets', value_text)
value_text = re.sub(r'## OTC Derivatives', r'### OTC Derivatives', value_text)
value_text = re.sub(r'## Digital Asset Infrastructure', r'### Digital Asset Infrastructure', value_text)

# We can make "## Tier Definitions" be a section and just inject the others next to it?
# The user wants "Executive summary, SMB, mid-market, and enterprise" as TOC.
# If we add them, they will just link to the Tier Definitions section.
value_text = value_text.replace("## Tier Definitions", "## SMB\n## Mid-Market\n## Enterprise\n### Tier Definitions")

with open("public/THE_VALUE.md", "w") as f:
    f.write(value_text)

with open("The Onli Way.md", "r") as f:
    way_text = f.read()

with open("public/THE_ONLI_WAY.md", "w") as f:
    f.write(way_text)

print("Processed and overwritten public md files.")

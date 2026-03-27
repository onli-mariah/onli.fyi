# TCO Calculator Data Extraction (December 2025)

## Complete Scenario Data from Report

### Scenario 1: Small Business / Pilot Project
**Assumptions:**
- 1,000 assets issued
- 100,000 transactions/year (500,000 over 5 years)
- 100 GB data/year (500 GB over 5 years)
- 24/7 operations

**5-Year TCO:**
- **Onli:** $230,050
- **AWS Managed Blockchain:** $365,615
- **Oracle Blockchain Platform:** $407,815
- **Ethereum L2:** $455,340

**Cost Multipliers vs. Onli:**
- AWS: 1.6x higher
- Oracle: 1.8x higher
- Ethereum L2: 2.0x higher

### Scenario 2: Mid-Market / Growth Stage
**Assumptions:**
- 10,000 assets issued
- 600,000 transactions/year (3,000,000 over 5 years)
- 500 GB data/year (2.5 TB over 5 years)
- 24/7 operations with higher availability

**5-Year TCO:**
- **Onli:** $230,500
- **AWS Managed Blockchain:** $1,119,662
- **Oracle Blockchain Platform:** $1,323,958
- **Ethereum L2:** $1,139,250

**Cost Multipliers vs. Onli:**
- AWS: 4.9x higher
- Oracle: 5.7x higher
- Ethereum L2: 4.9x higher

### Scenario 3: Enterprise Scale
**Assumptions:**
- 1,000,000 assets issued
- 5,000,000 transactions/year (25,000,000 over 5 years)
- 1 TB data/year (5 TB over 5 years)
- 24/7 operations with enterprise-grade SLAs

**5-Year TCO:**
- **Onli:** $280,000
- **AWS Managed Blockchain:** $3,907,000
- **Oracle Blockchain Platform:** $4,315,000
- **Ethereum L2:** $3,635,000

**Cost Multipliers vs. Onli:**
- AWS: 14.0x higher
- Oracle: 15.4x higher
- Ethereum L2: 13.0x higher

---

## Cost Component Breakdown (Grouped Categories)

### Category 1: Upfront Development Costs
**Components:** Smart Contracts, Security Audit, Integration/Testing, Deployment

| Platform | Small | Medium | Enterprise | Notes |
|----------|-------|--------|------------|-------|
| **Onli** | $0 | $0 | $0 | API-based, no smart contracts needed |
| **AWS** | $48,000 | $165,000 | $475,200 | $15k-$100k dev + $8k audit + $20k integration |
| **Oracle** | $58,000 | $202,000 | $475,200 | $18k-$120k dev + $8k audit + $25k integration |
| **Ethereum L2** | $57,200 | $57,200 | $475,200 | $12k-$80k dev + $12k audit + $25k integration |

**Citations:** [5][6] AI-driven cost analyses (ChatGPT, Claude, Gemini)

### Category 2: Infrastructure Costs
**Components:** Compute, Storage, Network, Database, Node Operation, Monitoring, Security, Backup/DR

| Platform | Small (5-yr) | Medium (5-yr) | Enterprise (5-yr) | Key Drivers |
|----------|--------------|---------------|-------------------|-------------|
| **Onli** | $0 | $0 | $0 | All included in $6k/yr subscription |
| **AWS** | $19,665 | $78,662 | $431,800 | Peer nodes ($2,980), storage growth, CloudWatch |
| **Oracle** | $64,265 | $221,958 | $839,800 | vCPU hours ($52k-$340k), storage ($70.40/TB-mo) |
| **Ethereum L2** | $2,940 | $2,940 | $2,940 | Managed node provider ($49/mo) |

**Citations:** [1][2][3] AWS, Oracle, Ethereum official pricing pages

### Category 3: Transaction Fees
**Components:** Gas fees, transaction processing costs

| Platform | Small (100K tx/yr) | Medium (600K tx/yr) | Enterprise (5M tx/yr) | Formula |
|----------|-------------------|---------------------|----------------------|---------|
| **Onli** | $0 | $0 | $0 | Zero transaction fees |
| **AWS** | $0 | $0 | $0 | Included in compute |
| **Oracle** | $0 | $0 | $0 | Included in compute |
| **Ethereum L2** | $45,000 (5-yr) | $270,000 (5-yr) | $2,250,000 (5-yr) | $0.09/tx × volume |

**Citations:** [4] l2fees.info (December 2025)

### Category 4: Labor & Talent
**Components:** DevOps/SRE, Blockchain Engineers, Training/Maintenance

| Platform | Small (5-yr) | Medium (5-yr) | Enterprise (5-yr) | FTE Requirements |
|----------|--------------|---------------|-------------------|------------------|
| **Onli** | $150,000 | $150,000 | $150,000 | 0.25 FTE junior IT @ $120k |
| **AWS** | $289,750 | $720,000 | $2,400,000 | 0.25-3.0 FTE @ $180k-$220k |
| **Oracle** | $289,750 | $720,000 | $2,900,000 | 0.25-3.0 FTE @ $180k-$220k |
| **Ethereum L2** | $344,000 | $720,000 | $2,750,000 | 0.4-3.0 FTE @ $180k-$220k |

**Citations:** [13][14] Glassdoor and Salary.com 2025 data

### Category 5: Platform Subscription
**Components:** Annual platform fees, membership fees

| Platform | Annual Cost | 5-Year Cost | What's Included |
|----------|-------------|-------------|-----------------|
| **Onli** | $6,000 | $30,000 | Everything (compute, storage, network, auth, orchestration, monitoring, security, backup) |
| **AWS** | Variable | Variable | Pay-as-you-go metered billing |
| **Oracle** | Variable | Variable | Pay-as-you-go metered billing |
| **Ethereum L2** | $588 | $2,940 | Managed node access only |

**Citations:** [1] Onli Corporation official pricing

### Category 6: One-Time Onli Costs
**Components:** Treasury deployment, asset issuance

| Cost Type | Small | Medium | Enterprise | Formula |
|-----------|-------|--------|------------|---------|
| **Treasury** | $50,000 | $50,000 | $50,000 | $50k for 1B genome capacity (one-time) |
| **Asset Issuance** | $50 | $500 | $50,000 | Assets × $0.05 (one-time) |

**Citations:** [1] Onli Corporation official pricing

---

## Calculator Input Parameters

### User-Adjustable Inputs

1. **Assets Issued** (slider: 100 - 10,000,000)
   - Default: 1,000 (small), 10,000 (medium), 1,000,000 (enterprise)

2. **Monthly Transactions** (slider: 1,000 - 10,000,000)
   - Default: 8,333 (small), 50,000 (medium), 416,667 (enterprise)

3. **Analysis Timeframe** (slider: 1-10 years)
   - Default: 5 years

4. **Annual Data Growth** (input: GB/year)
   - Default: 100 GB (small), 500 GB (medium), 1,000 GB (enterprise)

5. **FTE Count** (slider: 0.25 - 5.0 FTE)
   - Suggested ranges by scale:
     - Small: 0.25-0.5 FTE
     - Medium: 0.75-1.5 FTE
     - Enterprise: 2.0-3.0 FTE
   - Onli default: 0.25 FTE (all scales)
   - Blockchain default: 0.25 (small), 1.0 (medium), 2.5 (enterprise)

6. **Smart Contract Complexity** (dropdown: Low/Medium/High)
   - Low: $15k (AWS), $18k (Oracle), $12k (Ethereum)
   - Medium: $50k (AWS), $60k (Oracle), $40k (Ethereum)
   - High: $100k (AWS), $120k (Oracle), $80k (Ethereum)

---

## Calculator Formulas

### Onli Total Cost
```
Upfront Costs:
  Treasury = $50,000 (one-time)
  Asset Issuance = Assets × $0.05 (one-time)

Recurring Costs (Annual):
  Platform Subscription = $6,000
  Labor = FTE_count × $120,000
  
Total 5-Year = Treasury + Asset_Issuance + (Subscription × Years) + (Labor × Years)
```

### AWS Managed Blockchain Total Cost
```
Upfront Costs:
  Smart Contract Dev = $15k-$100k (based on complexity)
  Security Audit = $8,000
  Integration/Testing = $20,000
  Deployment = $5,000

Recurring Infrastructure (Annual):
  Network Membership = $0.30/hr × 8,760 hrs = $2,628
  Peer Nodes = 2 × bc.t3.small × $0.068/hr × 8,760 = $1,192
  Storage = (Initial_GB + (Data_Growth_GB × Year)) × $0.10/GB-month × 12
  Data Written = (Data_Growth_GB / 12) × $0.09/GB
  CloudWatch = $50/month × 12 = $600
  Secrets Manager = $0.40/secret × 10 secrets × 12 = $48
  Backup (S3) = Storage_GB × $0.023/GB-month × 12

Recurring Labor (Annual):
  DevOps/SRE = 0.25 FTE × $145,000
  Blockchain Engineer = FTE_count × $217,000
  Training = $1,200-$1,400/year

Total 5-Year = Upfront + Σ(Infrastructure_Year_N) + Σ(Labor_Year_N)
```

### Oracle Blockchain Platform Total Cost
```
Upfront Costs:
  Smart Contract Dev = $18k-$120k (based on complexity)
  Security Audit = $8,000
  Integration/Testing = $25,000
  Deployment = $7,000

Recurring Infrastructure (Annual):
  Platform Compute = OCPU_count × $0.1075/hr × 8,760 hrs
    (Small: 2 OCPU, Medium: 8 OCPU, Enterprise: 16 OCPU)
  Storage = Storage_GB × $70.40/TB-month ÷ 1024 × 12
  Load Balancer = $0.015/hr × 8,760 = $131

Recurring Labor (Annual):
  DevOps/SRE = 0.25 FTE × $145,000
  Blockchain Engineer = FTE_count × $217,000
  Training = $1,200-$1,600/year

Total 5-Year = Upfront + Σ(Infrastructure_Year_N) + Σ(Labor_Year_N)
```

### Ethereum L2 Total Cost
```
Upfront Costs:
  Smart Contract Dev (ERC-20/721) = $12k-$80k (based on complexity)
  Security Audit = $12,000
  Integration/Wallet Infrastructure = $25,000
  Testing/QA (Testnet) = $8,000
  Deployment Gas (L2) = $200

Recurring Infrastructure (Annual):
  Managed Node Provider = $49/month × 12 = $588

Recurring Transaction Fees (Annual):
  Gas Fees = Monthly_Transactions × 12 × $0.09

Recurring Labor (Annual):
  DevOps/SRE = 0.25 FTE × $145,000
  Blockchain Engineer = FTE_count × $217,000
  Training = $1,200/year

Total 5-Year = Upfront + Σ(Infrastructure_Year_N) + Σ(Gas_Fees_Year_N) + Σ(Labor_Year_N)
```

---

## Hover Box Content (Grouped Categories)

### Upfront Development
**What's included:** Smart contract development, security audits, integration/testing, deployment

**Why it varies:**
- **Onli:** $0 - API-based platform, no smart contracts needed
- **Blockchain:** $48k-$475k - Requires custom smart contract development, professional security audits, extensive testing

**Citations:** [5][6] AI-driven cost analyses

### Infrastructure
**What's included:** Compute, storage, network, database, monitoring, security, backup

**Why it varies:**
- **Onli:** $0 - All included in $6k/yr subscription
- **AWS/Oracle:** $19k-$840k - Metered billing for compute hours, storage growth, network transfer
- **Ethereum L2:** $2.9k - Managed node provider access only

**Citations:** [1][2][3] Official pricing pages

### Transaction Fees
**What's included:** Per-transaction costs (gas fees)

**Why it varies:**
- **Onli:** $0 - Zero transaction fees
- **AWS/Oracle:** $0 - Included in compute costs
- **Ethereum L2:** $45k-$2.25M - $0.09 per transaction (scales with volume)

**Citations:** [4] l2fees.info (December 2025)

### Labor & Talent
**What's included:** DevOps engineers, blockchain specialists, training

**Why it varies:**
- **Onli:** $150k - 0.25 FTE junior IT staff ($120k/yr)
- **Blockchain:** $290k-$2.9M - 0.25-3.0 FTE senior engineers ($180k-$220k/yr)

**Citations:** [13][14] Glassdoor, Salary.com 2025

### Platform Subscription
**What's included:** Base platform access and services

**Why it varies:**
- **Onli:** $30k (5-yr) - Fixed $6k/year, includes everything
- **AWS/Oracle:** Variable - Pay-as-you-go metered billing
- **Ethereum L2:** $2.9k (5-yr) - $49/month managed node access

**Citations:** [1] Onli official pricing

---

## Full Citation List (Bottom of Page)

[1] Onli Corporation Official Pricing Documentation (December 2025)

[2] Amazon Web Services - Managed Blockchain Pricing (https://aws.amazon.com/managed-blockchain/pricing/, accessed December 2025)

[3] Oracle Cloud Infrastructure - Blockchain Platform Pricing (https://www.oracle.com/blockchain/cloud-platform/pricing/, accessed December 2025)

[4] L2 Fees - Real-time Ethereum Layer 2 Transaction Costs (https://l2fees.info, accessed December 2025)

[5] ChatGPT Cost Analysis - Smart Contract Development and Audit Estimates (December 2025)

[6] Claude AI Cost Analysis - Blockchain Platform TCO Assessment (December 2025)

[7] Gartner Research - Blockchain Technology Market Projections ($3.1T by 2030)

[8] Forrester Research - Blockchain Project Failure Rates Study (2024)

[9] IBM TradeLens Shutdown Analysis - $100M+ Investment Writeoff (2022)

[10] Australian Securities Exchange CHESS Replacement Project Abandonment - $170M Spent (2022)

[11] Gemini AI Cost Analysis - Digital Asset Platform Comparison (December 2025)

[12] Enterprise IT Investment Analysis - Standard 5-Year Depreciation Schedules

[13] Glassdoor Salary Data - Blockchain Engineers and DevOps Specialists (2025)

[14] Salary.com Compensation Data - Senior Technical Roles (2025)

[15] Onli White Paper - Possession-Based Digital Asset Architecture

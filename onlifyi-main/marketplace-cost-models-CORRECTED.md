# Digital Asset Marketplace Cost Models (CORRECTED)
## Platform Costs Only - Onli vs Oracle vs Amazon vs Ethereum

**Date:** December 4, 2025

This document provides **platform-only** cost comparisons for building and operating digital asset marketplaces. All subjective costs (development, infrastructure, maintenance, security audits) are excluded to enable pure platform-to-platform comparison.

---

## Cost Scope Definition

**INCLUDED (Platform Costs):**
- Onli: Developer subscription, treasury deployment, genome issuance
- Oracle: Membership fees, peer node costs, storage
- Amazon: Membership fees, peer node costs, storage, data written
- Ethereum: Gas fees for transactions

**EXCLUDED (Subjective Costs):**
- Smart contract/chaincode development
- Frontend marketplace development
- Backend systems development
- Infrastructure (servers, databases, CDN)
- Security audits
- QA/testing
- Maintenance and support
- Developer salaries

---

## Model 1: Small Scale (10,000 Transactions/Month)

### Onli Platform

**Setup (One-time):**
- Developer subscription (Year 1): $6,000
- Treasury deployment (1B genome capacity): $50,000
- **Total Year 1 setup: $56,000**

**Ongoing Operations (Monthly):**
- Developer subscription: $500/month
- Genome issuance (10K genomes × $0.05): $500/month
- Transfers: $0 (FREE)
- **Monthly total: $1,000**

**Annual Costs:**
- Year 1: $56,000 + ($1,000 × 12) = **$68,000**
- Year 2+: $6,000 + ($500 × 12) = **$12,000/year**

**5-Year TCO: $68,000 + ($12,000 × 4) = $116,000**

**Cost per transaction (Year 2+): $12,000 ÷ 120,000 = $0.10**

---

### Oracle Blockchain Platform

**Setup (One-time):**
- Network membership required to operate
- No separate setup fee

**Ongoing Operations (Monthly):**
- Network membership (2 members × $0.4301/hour × 730 hours): $628/month
- Peer nodes (2 × bc.t3.small equivalent × $25/month): $50/month
- Storage (100GB × $0.10): $10/month
- **Monthly total: $688**

**Annual Costs:**
- Year 1: $688 × 12 = **$8,256**
- Year 2+: **$8,256/year**

**5-Year TCO: $8,256 × 5 = $41,280**

**Cost per transaction: $8,256 ÷ 120,000 = $0.07**

---

### Amazon Managed Blockchain

**Setup (One-time):**
- Network membership required to operate
- No separate setup fee

**Ongoing Operations (Monthly):**
- Starter membership (2 members × $0.30/hour × 730): $438/month
- Peer nodes (2 × bc.t3.small × $0.034/hour × 730): $50/month
- Storage (100GB × $0.10): $10/month
- Data written (10K × 1KB × $0.10/GB): $1/month
- **Monthly total: $499**

**Annual Costs:**
- Year 1: $499 × 12 = **$5,988**
- Year 2+: **$5,988/year**

**5-Year TCO: $5,988 × 5 = $29,940**

**Cost per transaction: $5,988 ÷ 120,000 = $0.05**

---

### Ethereum (Layer 2 - Arbitrum)

**Setup (One-time):**
- Contract deployment: $200
- **Total Year 1 setup: $200**

**Ongoing Operations (Monthly):**
- Gas fees (10K × $0.02 L2): $200/month
- Operational gas (contract interactions): $50/month
- **Monthly total: $250**

**Annual Costs:**
- Year 1: $200 + ($250 × 12) = **$3,200**
- Year 2+: $250 × 12 = **$3,000/year**

**5-Year TCO: $3,200 + ($3,000 × 4) = $15,200**

**Cost per transaction: $3,000 ÷ 120,000 = $0.025**

---

### Small Scale Summary (Platform Costs Only)

| Platform | Year 1 | Year 2+ Annual | 5-Year TCO | Cost per TX |
|----------|--------|----------------|------------|-------------|
| Ethereum L2 | $3,200 | $3,000 | **$15,200** | **$0.025** |
| Amazon | $5,988 | $5,988 | $29,940 | $0.05 |
| Oracle | $8,256 | $8,256 | $41,280 | $0.07 |
| Onli | $68,000 | $12,000 | $116,000 | $0.10 |

**Winner: Ethereum Layer 2** (lowest platform costs at small scale)

**Key Insight:** At small scale with 1:1 genome denomination, Onli's upfront treasury cost ($50K) makes it more expensive than competitors. However, Onli provides instant finality and actual possession that competitors cannot match.

---

## Model 2: Medium Scale (1M Transactions/Month)

### Onli Platform (1:1 Denomination)

**Setup (One-time):**
- Developer subscription (Year 1): $6,000
- Treasury deployment (1B genome capacity): $50,000
- **Total Year 1 setup: $56,000**

**Ongoing Operations (Monthly):**
- Developer subscription: $500/month
- Genome issuance (1M genomes × $0.05): $50,000/month
- Transfers: $0 (FREE)
- **Monthly total: $50,500**

**Annual Costs:**
- Year 1: $56,000 + ($50,500 × 12) = **$662,000**
- Year 2+: $6,000 + ($50,000 × 12) = **$606,000/year**

**5-Year TCO: $662,000 + ($606,000 × 4) = $3,086,000**

**Cost per transaction: $606,000 ÷ 12,000,000 = $0.051**

---

### Onli Platform (10:1 Denomination Optimized)

**Setup (One-time):**
- Developer subscription (Year 1): $6,000
- Treasury deployment (1B genome capacity): $50,000
- **Total Year 1 setup: $56,000**

**Ongoing Operations (Monthly):**
- Developer subscription: $500/month
- Genome issuance (100K genomes × $0.05): $5,000/month
- Transfers: $0 (FREE)
- **Monthly total: $5,500**

**Annual Costs:**
- Year 1: $56,000 + ($5,500 × 12) = **$122,000**
- Year 2+: $6,000 + ($5,000 × 12) = **$66,000/year**

**5-Year TCO: $122,000 + ($66,000 × 4) = $386,000**

**Cost per transaction: $66,000 ÷ 12,000,000 = $0.0055**

---

### Oracle Blockchain Platform

**Ongoing Operations (Monthly):**
- Network membership (5 members × $0.4301/hour × 730): $1,570/month
- Peer nodes (10 × bc.m5.large equivalent × $200/month): $2,000/month
- Storage (500GB × $0.10): $50/month
- **Monthly total: $3,620**

**Annual Costs:**
- Year 1: $3,620 × 12 = **$43,440**
- Year 2+: **$43,440/year**

**5-Year TCO: $43,440 × 5 = $217,200**

**Cost per transaction: $43,440 ÷ 12,000,000 = $0.0036**

---

### Amazon Managed Blockchain

**Ongoing Operations (Monthly):**
- Standard membership (5 members × $0.55/hour × 730): $2,008/month
- Peer nodes (10 × bc.m5.large × $0.154/hour × 730): $1,124/month
- Storage (500GB × $0.10): $50/month
- Data written (1M × 1KB × $0.10/GB): $100/month
- **Monthly total: $3,282**

**Annual Costs:**
- Year 1: $3,282 × 12 = **$39,384**
- Year 2+: **$39,384/year**

**5-Year TCO: $39,384 × 5 = $196,920**

**Cost per transaction: $39,384 ÷ 12,000,000 = $0.0033**

---

### Ethereum (Layer 2 - Arbitrum)

**Setup (One-time):**
- Contract deployment: $200

**Ongoing Operations (Monthly):**
- Gas fees (1M × $0.02 L2): $20,000/month
- Operational gas: $500/month
- **Monthly total: $20,500**

**Annual Costs:**
- Year 1: $200 + ($20,500 × 12) = **$246,200**
- Year 2+: $20,500 × 12 = **$246,000/year**

**5-Year TCO: $246,200 + ($246,000 × 4) = $1,230,200**

**Cost per transaction: $246,000 ÷ 12,000,000 = $0.0205**

---

### Medium Scale Summary (Platform Costs Only)

| Platform | Year 1 | Year 2+ Annual | 5-Year TCO | Cost per TX |
|----------|--------|----------------|------------|-------------|
| **Amazon** | $39,384 | $39,384 | **$196,920** | **$0.0033** |
| **Oracle** | $43,440 | $43,440 | $217,200 | $0.0036 |
| **Onli (10:1)** | $122,000 | $66,000 | **$386,000** | **$0.0055** |
| Ethereum L2 | $246,200 | $246,000 | $1,230,200 | $0.0205 |
| Onli (1:1) | $662,000 | $606,000 | $3,086,000 | $0.051 |

**Winner: Amazon Managed Blockchain** (lowest platform costs)

**Key Insight:** With 10:1 denomination optimization, Onli becomes competitive with blockchain platforms while providing instant finality and actual possession. At 1:1 denomination, issuance costs dominate.

---

## Model 3: Enterprise Scale (10M Transactions/Month)

### Onli Platform (1:1 Denomination)

**Setup (One-time):**
- Developer subscription (Year 1): $6,000
- Treasury deployment (10B capacity = 10 treasuries): $500,000
- **Total Year 1 setup: $506,000**

**Ongoing Operations (Monthly):**
- Developer subscription: $500/month
- Genome issuance (10M genomes × $0.05): $500,000/month
- Transfers: $0 (FREE)
- **Monthly total: $500,500**

**Annual Costs:**
- Year 1: $506,000 + ($500,500 × 12) = **$6,512,000**
- Year 2+: $6,000 + ($500,000 × 12) = **$6,006,000/year**

**5-Year TCO: $6,512,000 + ($6,006,000 × 4) = $30,536,000**

**Cost per transaction: $6,006,000 ÷ 120,000,000 = $0.050**

---

### Onli Platform (100:1 Denomination Optimized)

**Setup (One-time):**
- Developer subscription (Year 1): $6,000
- Treasury deployment (1B capacity): $50,000
- **Total Year 1 setup: $56,000**

**Ongoing Operations (Monthly):**
- Developer subscription: $500/month
- Genome issuance (100K genomes × $0.05): $5,000/month
- Transfers: $0 (FREE)
- **Monthly total: $5,500**

**Annual Costs:**
- Year 1: $56,000 + ($5,500 × 12) = **$122,000**
- Year 2+: $6,000 + ($5,000 × 12) = **$66,000/year**

**5-Year TCO: $122,000 + ($66,000 × 4) = $386,000**

**Cost per transaction: $66,000 ÷ 120,000,000 = $0.00055**

---

### Oracle Blockchain Platform

**Ongoing Operations (Monthly):**
- Network membership (14 members × $0.4301/hour × 730): $4,396/month
- Peer nodes (42 × bc.m5.4xlarge equivalent × $1,500/month): $63,000/month
- Storage (5TB × $0.10 × 1024): $512/month
- **Monthly total: $67,908**

**Annual Costs:**
- Year 1: $67,908 × 12 = **$814,896**
- Year 2+: **$814,896/year**

**5-Year TCO: $814,896 × 5 = $4,074,480**

**Cost per transaction: $814,896 ÷ 120,000,000 = $0.0068**

---

### Amazon Managed Blockchain

**Ongoing Operations (Monthly):**
- Standard membership (14 members × $0.55/hour × 730): $5,621/month
- Peer nodes (42 × bc.m5.4xlarge × $1.229/hour × 730): $37,688/month
- Storage (5TB × $0.10 × 1024): $512/month
- Data written (10M × 1KB × $0.10/GB): $1,000/month
- **Monthly total: $44,821**

**Annual Costs:**
- Year 1: $44,821 × 12 = **$537,852**
- Year 2+: **$537,852/year**

**5-Year TCO: $537,852 × 5 = $2,689,260**

**Cost per transaction: $537,852 ÷ 120,000,000 = $0.0045**

---

### Ethereum (Layer 2 - Arbitrum)

**Setup (One-time):**
- Contract deployment: $500 (more complex contracts)

**Ongoing Operations (Monthly):**
- Gas fees (10M × $0.02 L2): $200,000/month
- L1 settlement costs: $50,000/month
- Operational gas: $5,000/month
- **Monthly total: $255,000**

**Annual Costs:**
- Year 1: $500 + ($255,000 × 12) = **$3,060,500**
- Year 2+: $255,000 × 12 = **$3,060,000/year**

**5-Year TCO: $3,060,500 + ($3,060,000 × 4) = $15,300,500**

**Cost per transaction: $3,060,000 ÷ 120,000,000 = $0.0255**

---

### Enterprise Scale Summary (Platform Costs Only)

| Platform | Year 1 | Year 2+ Annual | 5-Year TCO | Cost per TX |
|----------|--------|----------------|------------|-------------|
| **Onli (100:1)** | $122,000 | $66,000 | **$386,000** | **$0.00055** |
| **Amazon** | $537,852 | $537,852 | $2,689,260 | $0.0045 |
| Ethereum L2 | $3,060,500 | $3,060,000 | $15,300,500 | $0.0255 |
| Oracle | $814,896 | $814,896 | $4,074,480 | $0.0068 |
| Onli (1:1) | $6,512,000 | $6,006,000 | $30,536,000 | $0.050 |

**Winner: Onli with 100:1 denomination optimization** (dramatically lowest costs)

**Key Insight:** At enterprise scale with proper denomination, Onli achieves 86% lower costs than Amazon ($386K vs $2.69M) and 97% lower costs than Ethereum ($386K vs $15.3M).

---

## Cross-Scale Comparison

### 5-Year Total Cost of Ownership (Platform Only)

| Platform | Small (10K/mo) | Medium (1M/mo) | Enterprise (10M/mo) |
|----------|----------------|----------------|---------------------|
| Ethereum L2 | **$15,200** | $1,230,200 | $15,300,500 |
| Amazon | $29,940 | **$196,920** | $2,689,260 |
| Oracle | $41,280 | $217,200 | $4,074,480 |
| Onli (1:1) | $116,000 | $3,086,000 | $30,536,000 |
| **Onli (Optimized)** | $116,000 | **$386,000** | **$386,000** |

### Cost Per Transaction (Ongoing)

| Platform | Small | Medium | Enterprise |
|----------|-------|--------|------------|
| **Onli (Optimized)** | $0.10 | **$0.0055** | **$0.00055** |
| Ethereum L2 | **$0.025** | $0.0205 | $0.0255 |
| Amazon | $0.05 | **$0.0033** | $0.0045 |
| Oracle | $0.07 | $0.0036 | $0.0068 |
| Onli (1:1) | $0.10 | $0.051 | $0.050 |

---

## Key Findings

### Denomination is Everything for Onli

Onli's cost structure is dominated by the $0.05 per genome issuance fee. Denomination choice creates orders-of-magnitude cost differences:

**Example: 10M transactions/month**
- **1:1 denomination:** 10M genomes × $0.05 = $500K/month = $6M/year
- **10:1 denomination:** 1M genomes × $0.05 = $50K/month = $600K/year (90% savings)
- **100:1 denomination:** 100K genomes × $0.05 = $5K/month = $66K/year (99% savings)

### Platform Cost Comparison

**Onli:**
- High upfront treasury cost ($50K per 1B genomes)
- Variable issuance costs ($0.05 per genome)
- Zero transfer costs
- **Best at:** Medium-to-enterprise scale with optimized denomination

**Oracle/Amazon:**
- 24/7 fixed membership fees
- Node costs scale with performance needs
- Storage and data costs
- **Best at:** Consistent medium-scale operations

**Ethereum:**
- Low setup costs
- High variable gas fees
- Scales poorly at high volume
- **Best at:** Small scale or applications requiring public blockchain

### Winner by Scale

**Small Scale (10K/month):**
- **Ethereum L2:** $15,200 5-year TCO
- Onli disadvantaged by $50K treasury upfront cost

**Medium Scale (1M/month):**
- **Amazon:** $196,920 (standard)
- **Onli (10:1):** $386,000 (with instant finality + actual possession)

**Enterprise Scale (10M+/month):**
- **Onli (100:1):** $386,000 (86% cheaper than Amazon)
- Massive cost advantage with proper denomination

---

## Strategic Implications

### When Onli Wins

Onli provides dramatic cost advantages when:
1. Transaction volume is medium-to-high (100K+/month)
2. Denomination can be optimized ($10-$1000+ per genome)
3. Actual possession custody is valued
4. Instant finality matters
5. Predictable costs are required

### When Competitors Win

**Ethereum** wins when:
- Small scale (< 50K transactions/month)
- Public blockchain composability required
- DeFi/NFT ecosystem integration essential

**Amazon/Oracle** win when:
- Denomination cannot be optimized (must be 1:1)
- Hyperledger Fabric ecosystem required
- AWS/Oracle cloud integration valued
- Managed infrastructure preferred

---

## Conclusion

When comparing **platform costs only**, Onli's economics are dramatically different than initially analyzed:

1. **Small scale:** Ethereum L2 is cheapest due to Onli's $50K treasury upfront cost
2. **Medium scale:** Amazon is cheapest at standard 1:1 denomination, but Onli with 10:1 optimization is competitive
3. **Enterprise scale:** Onli with 100:1 denomination is 86% cheaper than Amazon and 97% cheaper than Ethereum

**The critical insight:** Onli's $0.05 per genome issuance cost is the same whether the genome is worth $1 or $1,000. Organizations that can increase denomination achieve exponential cost reductions while maintaining instant finality and actual-possession custody that competitors cannot match.

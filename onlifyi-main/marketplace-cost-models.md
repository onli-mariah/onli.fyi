# Digital Asset Marketplace Cost Models
## Comparing Onli vs Oracle vs Amazon vs Ethereum

**Date:** December 4, 2025

This document provides detailed cost models for building and operating digital asset marketplaces across three transaction scales: Small (10K/month), Medium (1M/month), and Enterprise (10M+/month).

---

## Assumptions

### Marketplace Type
- NFT/digital asset marketplace with minting, trading, and escrow functionality
- Supports multiple asset types (NFTs, tokens, commodities)
- Requires user authentication, asset custody, and transaction processing

### Transaction Characteristics
- **Small scale:** 10,000 transactions/month (~333/day)
- **Medium scale:** 1,000,000 transactions/month (~33,333/day)
- **Enterprise scale:** 10,000,000 transactions/month (~333,333/day)

### Cost Categories
1. **Initial Development:** Smart contracts, frontend, backend, integration
2. **Deployment:** Contract deployment, testing, security audits
3. **Ongoing Operations:** Infrastructure, gas fees, maintenance, support

---

## Model 1: Small Scale (10K Transactions/Month)

### Onli Platform

**Initial Development:**
- Developer subscription (annual): $6,000
- Smart contract development: $15,000
- Frontend marketplace: $25,000
- Backend systems: $15,000
- **Total development: $61,000**

**Deployment:**
- Treasury deployment (1B genome capacity): $50,000 (one-time)
- Testing and QA: $3,000
- **Total deployment: $53,000**

**Year 1 Total: $114,000**

**Ongoing Costs (Monthly):**
- Developer subscription: $500/month
- Genome issuance (10K × $0.05): $500/month
- Infrastructure (minimal): $200/month
- Maintenance: $1,000/month
- **Monthly total: $2,200**

**Year 2+ Annual: $26,400 + $6,000 subscription = $32,400**

**5-Year TCO: $114,000 + ($32,400 × 4) = $243,600**

---

### Oracle Blockchain Platform

**Initial Development:**
- Hyperledger Fabric development: $40,000
- Frontend marketplace: $30,000
- Backend integration: $25,000
- Oracle Cloud setup: $10,000
- **Total development: $105,000**

**Deployment:**
- Network setup and configuration: $15,000
- Testing and QA: $8,000
- Security audit: $20,000
- **Total deployment: $43,000**

**Year 1 Total: $148,000**

**Ongoing Costs (Monthly):**
- Network membership (2 members × $0.4301/hour × 730 hours): $628/month
- Peer nodes (2 × bc.t3.small equivalent): $50/month
- Storage (100GB): $10/month
- Oracle Cloud services: $500/month
- Maintenance: $2,000/month
- **Monthly total: $3,188**

**Year 2+ Annual: $38,256**

**5-Year TCO: $148,000 + ($38,256 × 4) = $301,024**

---

### Amazon Managed Blockchain

**Initial Development:**
- Hyperledger Fabric development: $40,000
- Frontend marketplace: $30,000
- Backend integration: $25,000
- AWS setup and CloudFormation: $8,000
- **Total development: $103,000**

**Deployment:**
- Network setup: $12,000
- Testing and QA: $8,000
- Security audit: $20,000
- **Total deployment: $40,000**

**Year 1 Total: $143,000**

**Ongoing Costs (Monthly):**
- Starter membership (2 members × $0.30/hour × 730): $438/month
- Peer nodes (2 × bc.t3.small × $0.034/hour × 730): $50/month
- Storage (100GB × $0.10): $10/month
- Data written (10K × 1KB × $0.10/GB): $1/month
- AWS services (EC2, S3): $300/month
- Maintenance: $2,000/month
- **Monthly total: $2,799**

**Year 2+ Annual: $33,588**

**5-Year TCO: $143,000 + ($33,588 × 4) = $277,352**

---

### Ethereum (Layer 2)

**Initial Development:**
- Smart contracts (Solidity): $20,000
- Frontend marketplace: $30,000
- Backend (indexing, caching): $15,000
- IPFS integration: $7,500
- **Total development: $72,500**

**Deployment:**
- Contract deployment (Arbitrum): $100
- Security audit (basic): $10,000
- Testing and QA: $5,000
- **Total deployment: $15,100**

**Year 1 Total: $87,600**

**Ongoing Costs (Monthly):**
- Infrastructure (Alchemy/Infura): $1,000/month
- Gas fees (10K × $0.02 L2): $200/month
- Operational gas: $100/month
- Maintenance: $2,000/month
- **Monthly total: $3,300**

**Year 2+ Annual: $39,600**

**5-Year TCO: $87,600 + ($39,600 × 4) = $246,000**

---

### Small Scale Summary

| Platform | Year 1 | Year 2+ Annual | 5-Year TCO |
|----------|--------|----------------|------------|
| **Onli** | $114,000 | $32,400 | **$243,600** |
| **Oracle** | $148,000 | $38,256 | $301,024 |
| **Amazon** | $143,000 | $33,588 | $277,352 |
| **Ethereum L2** | $87,600 | $39,600 | $246,000 |

**Winner: Ethereum L2** (lowest TCO, but Onli competitive with better custody model)

---

## Model 2: Medium Scale (1M Transactions/Month)

### Onli Platform

**Initial Development:**
- Developer subscription (annual): $6,000
- Smart contract development: $25,000
- Frontend marketplace (advanced): $40,000
- Backend systems (robust): $30,000
- **Total development: $101,000**

**Deployment:**
- Treasury deployment (1B genome capacity): $50,000
- Security audit: $15,000
- Testing and QA: $8,000
- **Total deployment: $73,000**

**Year 1 Total: $174,000**

**Ongoing Costs (Monthly):**
- Developer subscription: $500/month
- Genome issuance (1M × $0.05): $50,000/month
- Infrastructure: $2,000/month
- Maintenance: $3,000/month
- Support: $2,000/month
- **Monthly total: $57,500**

**Year 2+ Annual: $690,000 + $6,000 subscription = $696,000**

**5-Year TCO: $174,000 + ($696,000 × 4) = $2,958,000**

---

### Oracle Blockchain Platform

**Initial Development:**
- Hyperledger Fabric (production-grade): $80,000
- Frontend marketplace: $50,000
- Backend integration (complex): $45,000
- Oracle Cloud architecture: $20,000
- **Total development: $195,000**

**Deployment:**
- Production network setup: $30,000
- Testing and QA: $15,000
- Comprehensive security audit: $40,000
- **Total deployment: $85,000**

**Year 1 Total: $280,000**

**Ongoing Costs (Monthly):**
- Network membership (5 members × $0.4301/hour × 730): $1,570/month
- Peer nodes (10 × bc.m5.large equivalent × $200/month): $2,000/month
- Storage (500GB): $50/month
- Oracle Cloud services (load balancing, monitoring): $2,000/month
- Maintenance and updates: $5,000/month
- Support team: $3,000/month
- **Monthly total: $13,620**

**Year 2+ Annual: $163,440**

**5-Year TCO: $280,000 + ($163,440 × 4) = $933,760**

---

### Amazon Managed Blockchain

**Initial Development:**
- Hyperledger Fabric (production): $80,000
- Frontend marketplace: $50,000
- Backend integration: $45,000
- AWS architecture: $15,000
- **Total development: $190,000**

**Deployment:**
- Production network setup: $25,000
- Testing and QA: $15,000
- Comprehensive audit: $40,000
- **Total deployment: $80,000**

**Year 1 Total: $270,000**

**Ongoing Costs (Monthly):**
- Standard membership (5 members × $0.55/hour × 730): $2,008/month
- Peer nodes (10 × bc.m5.large × $0.154/hour × 730): $1,124/month
- Storage (500GB × $0.10): $50/month
- Data written (1M × 1KB × $0.10/GB): $100/month
- AWS services: $1,500/month
- Maintenance: $5,000/month
- Support: $3,000/month
- **Monthly total: $12,782**

**Year 2+ Annual: $153,384**

**5-Year TCO: $270,000 + ($153,384 × 4) = $883,536**

---

### Ethereum (Layer 2)

**Initial Development:**
- Smart contracts (advanced features): $40,000
- Frontend marketplace: $60,000
- Backend (robust indexing): $35,000
- IPFS + CDN: $15,000
- **Total development: $150,000**

**Deployment:**
- Contract deployment (Arbitrum): $200
- Comprehensive audit: $35,000
- Testing and QA: $10,000
- **Total deployment: $45,200**

**Year 1 Total: $195,200**

**Ongoing Costs (Monthly):**
- Infrastructure (Alchemy Pro): $4,000/month
- Gas fees (1M × $0.02 L2): $20,000/month
- Operational gas: $1,000/month
- Maintenance: $5,000/month
- Support: $3,000/month
- **Monthly total: $33,000**

**Year 2+ Annual: $396,000**

**5-Year TCO: $195,200 + ($396,000 × 4) = $1,779,200**

---

### Medium Scale Summary

| Platform | Year 1 | Year 2+ Annual | 5-Year TCO |
|----------|--------|----------------|------------|
| Onli | $174,000 | $696,000 | $2,958,000 |
| **Oracle** | $280,000 | $163,440 | **$933,760** |
| **Amazon** | $270,000 | $153,384 | **$883,536** |
| Ethereum L2 | $195,200 | $396,000 | $1,779,200 |

**Winner: Amazon Managed Blockchain** (lowest TCO at this scale)

**Note:** Onli's high issuance costs ($50K/month for 1M genomes) make it expensive at this scale unless denomination is optimized.

---

## Model 3: Enterprise Scale (10M+ Transactions/Month)

### Onli Platform

**Initial Development:**
- Developer subscription: $6,000
- Enterprise smart contracts: $50,000
- Frontend (enterprise features): $100,000
- Backend (high-performance): $80,000
- Multi-region setup: $30,000
- **Total development: $266,000**

**Deployment:**
- Treasury deployment (10B capacity = 10 treasuries): $500,000
- Enterprise security audit: $50,000
- Load testing and QA: $25,000
- **Total deployment: $575,000**

**Year 1 Total: $841,000**

**Ongoing Costs (Monthly):**
- Developer subscription: $500/month
- Genome issuance (10M × $0.05): $500,000/month
- Infrastructure (enterprise): $10,000/month
- Maintenance: $10,000/month
- Support team: $8,000/month
- **Monthly total: $528,500**

**Year 2+ Annual: $6,342,000 + $6,000 subscription = $6,348,000**

**5-Year TCO: $841,000 + ($6,348,000 × 4) = $26,233,000**

---

### Oracle Blockchain Platform

**Initial Development:**
- Enterprise Hyperledger Fabric: $150,000
- Frontend (enterprise): $100,000
- Backend (high-performance): $80,000
- Oracle Cloud enterprise architecture: $50,000
- **Total development: $380,000**

**Deployment:**
- Enterprise network setup: $60,000
- Comprehensive testing: $30,000
- Enterprise audit: $100,000
- **Total deployment: $190,000**

**Year 1 Total: $570,000**

**Ongoing Costs (Monthly):**
- Network membership (14 members × $0.4301/hour × 730): $4,396/month
- Peer nodes (42 × bc.m5.4xlarge equivalent × $1,500/month): $63,000/month
- Storage (5TB): $500/month
- Oracle Cloud services (enterprise): $15,000/month
- Maintenance team: $20,000/month
- Support team: $10,000/month
- **Monthly total: $112,896**

**Year 2+ Annual: $1,354,752**

**5-Year TCO: $570,000 + ($1,354,752 × 4) = $5,989,008**

---

### Amazon Managed Blockchain

**Initial Development:**
- Enterprise Hyperledger Fabric: $150,000
- Frontend (enterprise): $100,000
- Backend (high-performance): $80,000
- AWS enterprise architecture: $40,000
- **Total development: $370,000**

**Deployment:**
- Enterprise network setup: $50,000
- Comprehensive testing: $30,000
- Enterprise audit: $100,000
- **Total deployment: $180,000**

**Year 1 Total: $550,000**

**Ongoing Costs (Monthly):**
- Standard membership (14 members × $0.55/hour × 730): $5,621/month
- Peer nodes (42 × bc.m5.4xlarge × $1.229/hour × 730): $37,688/month
- Storage (5TB × $0.10): $500/month
- Data written (10M × 1KB × $0.10/GB): $1,000/month
- AWS services (enterprise): $10,000/month
- Maintenance team: $20,000/month
- Support team: $10,000/month
- **Monthly total: $84,809**

**Year 2+ Annual: $1,017,708**

**5-Year TCO: $550,000 + ($1,017,708 × 4) = $4,620,832**

---

### Ethereum (Layer 1 + Layer 2 Hybrid)

**Initial Development:**
- Enterprise smart contracts: $80,000
- Frontend (enterprise): $100,000
- Backend (high-performance indexing): $60,000
- Multi-chain infrastructure: $40,000
- Cross-chain bridges: $30,000
- **Total development: $310,000**

**Deployment:**
- Multi-chain deployment: $5,000
- Enterprise audit: $100,000
- Load testing: $25,000
- **Total deployment: $130,000**

**Year 1 Total: $440,000**

**Ongoing Costs (Monthly):**
- Infrastructure (Alchemy Enterprise): $15,000/month
- Gas fees (10M × $0.02 L2): $200,000/month
- L1 settlement costs: $50,000/month
- Operational gas: $10,000/month
- Maintenance team: $20,000/month
- Support team: $10,000/month
- Security monitoring: $5,000/month
- **Monthly total: $310,000**

**Year 2+ Annual: $3,720,000**

**5-Year TCO: $440,000 + ($3,720,000 × 4) = $15,320,000**

---

### Enterprise Scale Summary

| Platform | Year 1 | Year 2+ Annual | 5-Year TCO |
|----------|--------|----------------|------------|
| Onli | $841,000 | $6,348,000 | $26,233,000 |
| Oracle | $570,000 | $1,354,752 | $5,989,008 |
| **Amazon** | $550,000 | $1,017,708 | **$4,620,832** |
| Ethereum | $440,000 | $3,720,000 | $15,320,000 |

**Winner: Amazon Managed Blockchain** (lowest TCO at enterprise scale)

**Critical Note:** Onli's costs scale linearly with transaction count due to $0.05 per genome issuance. At 10M transactions/month, this becomes prohibitively expensive unless genome denomination is dramatically increased (e.g., $100+ per genome to reduce genome count).

---

## Cross-Scale Comparison

### Total Cost of Ownership (5-Year)

| Platform | Small (10K/mo) | Medium (1M/mo) | Enterprise (10M/mo) |
|----------|----------------|----------------|---------------------|
| Onli | $243,600 | $2,958,000 | $26,233,000 |
| Oracle | $301,024 | $933,760 | $5,989,008 |
| Amazon | $277,352 | **$883,536** | **$4,620,832** |
| Ethereum | **$246,000** | $1,779,200 | $15,320,000 |

### Cost Per Transaction (Year 2+)

| Platform | Small | Medium | Enterprise |
|----------|-------|--------|------------|
| Onli | $0.27 | $0.58 | $0.53 |
| Oracle | $0.32 | $0.14 | **$0.11** |
| Amazon | $0.28 | **$0.13** | **$0.08** |
| Ethereum | $0.33 | $0.33 | $0.31 |

---

## Key Findings

### Cost Efficiency by Scale

**Small Scale (10K/month):**
- **Winner: Ethereum Layer 2** ($246K 5-year TCO)
- Onli competitive at $244K
- Blockchain platforms have high fixed costs

**Medium Scale (1M/month):**
- **Winner: Amazon Managed Blockchain** ($884K 5-year TCO)
- Oracle close second at $934K
- Onli becomes expensive due to issuance costs

**Enterprise Scale (10M+/month):**
- **Winner: Amazon Managed Blockchain** ($4.6M 5-year TCO)
- Oracle second at $6.0M
- Onli extremely expensive at $26.2M (needs denomination optimization)

### Cost Drivers

**Onli:**
- Low fixed costs ($6K/year subscription)
- High variable costs ($0.05 per genome)
- **Critical:** Denomination choice dramatically affects costs
- Best for low-volume, high-value transactions

**Oracle:**
- High fixed costs (24/7 membership fees)
- Moderate variable costs
- Expensive at small scale, competitive at enterprise scale

**Amazon:**
- Moderate fixed costs
- Low variable costs
- Best overall TCO at medium-to-enterprise scale

**Ethereum:**
- Low-to-moderate fixed costs
- Moderate variable costs (gas fees)
- Competitive at small scale, expensive at enterprise scale

---

## Recommendations by Use Case

### Choose Onli when:
- Transaction volume < 50K/month
- High-value transactions ($1000+ per transaction)
- Actual possession custody model is critical
- Regulatory compliance requires clear ownership
- Can optimize genome denomination to reduce issuance costs

### Choose Oracle when:
- Enterprise requirements (SLAs, support)
- Existing Oracle infrastructure
- Need for private/permissioned network
- Budget for premium solution

### Choose Amazon when:
- Medium-to-enterprise scale (100K+ transactions/month)
- AWS ecosystem integration
- Need for managed blockchain without high overhead
- Cost optimization is priority

### Choose Ethereum when:
- Small-to-medium scale (< 1M transactions/month)
- Public blockchain benefits (composability, liquidity)
- Large developer ecosystem needed
- Layer 2 solutions acceptable
- DeFi/NFT marketplace with external integrations

---

## Next Steps for Detailed Analysis

1. **Onli denomination optimization:** Model how increasing genome denomination (e.g., $10, $50, $100 per genome) reduces issuance costs
2. **Hybrid approaches:** Evaluate combining platforms (e.g., Onli for custody + Ethereum for discovery)
3. **Revenue modeling:** Calculate break-even points based on marketplace transaction fees
4. **Feature comparison:** Deep dive into custody models, developer experience, and scaling capabilities
5. **Risk analysis:** Evaluate security, regulatory, and operational risks for each platform

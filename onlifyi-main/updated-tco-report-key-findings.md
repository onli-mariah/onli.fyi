# Updated TCO Report Key Findings (December 2025)

## Source Document
OnlivsBlockchainTCO.md.pdf - "The Total Cost of Ownership of Digital Assets: A Comparative Analysis of Onli versus Leading Blockchain Platforms"
Author: Dhryl Anton
By: The Onli Research Team

## Key Methodology Changes

### Labor Costs (Critical Change)
- **Blockchain platforms:** $180,000-$220,000 per FTE (senior blockchain engineers + DevOps)
- **Onli:** $120,000 per FTE (junior IT/operations managers)
- **FTE Requirements:**
  - Small: 0.25 FTE (all platforms)
  - Medium: 0.25-3.0 FTEs (blockchain) vs 0.25 FTE (Onli)
  - Enterprise: 0.25-3.0 FTEs (blockchain) vs 0.25 FTE (Onli)

### Component Pricing (15 Components)

| Component | Onli | AWS | Oracle | Ethereum L2 |
|-----------|------|-----|--------|-------------|
| 1. Compute | Included $6k/yr | bc.m5.large: $0.154/hr | vCPU: $0.1075/hr | Managed Node: $49/mo |
| 2. Storage | Included $6k/yr | $0.10/GB-month | $70.40/TB-month | Included in Node |
| 3. Network | Included $6k/yr | Data Out: ~$0.09/GB | 10TB Free, then ~$0.08/GB | Included in Node |
| 4. Communications | Included $6k/yr | API Gateway: ~$3.50/M calls | API Gateway: ~$3.00/M calls | Included in Node |
| 5. Authentication | Included $6k/yr | AWS IAM/Secrets: ~$0.40/secret | OCI IAM: Included | Self-managed |
| 6. Orchestration | Included $6k/yr | AWS Step Functions: ~$25/M | OCI Functions: ~$0.20/M | Self-managed |
| 7. Transaction Engine | $0.00/tx | Included in Compute | Included in Compute | ~$0.09/tx |
| 8. Database | Included $6k/yr | Amazon QLDB: ~$0.20/M reads | Included in Storage | Self-managed |
| 9. Smart Contracts | N/A (API-based) | $15k-$100k (Dev + Audit) | $18k-$120k (Dev + Audit) | $12k-$80k (Dev + Audit) |
| 10. Node Operation | Included $6k/yr | Included in Compute | Included in Compute | Included in Node Fee |
| 11. Gas Fees | $0.00 | $0.00 | $0.00 | ~$0.09/tx |
| 12. Monitoring | Included $6k/yr | CloudWatch: ~$50/mo | OCI Monitoring: ~$0.01/GB | Datadog/etc: ~$15/host |
| 13. Security | Included $6k/yr | AWS WAF/Shield: ~$20/mo | OCI WAF: ~$1/M requests | Self-managed |
| 14. Backup/DR | Included $6k/yr | S3 Storage: ~$0.023/GB | OCI Storage: ~$0.025/GB | Self-managed |
| 15. Labor/Talent | 0.25 FTE (Junior) | 0.25-3.0 FTEs (Senior) | 0.25-3.0 FTEs (Senior) | 0.25-3.0 FTEs (Senior) |

## Scenario 1: Small Business / Pilot Project

**Assumptions:**
- 1,000 assets issued
- 100,000 transactions/year (500,000 over 5 years)
- 100 GB data/year (500 GB over 5 years)
- 24/7 operations

**5-Year TCO:**
- **Onli:** $230,050
  - Treasury: $50,000 (one-time)
  - Asset Issuance: $50 (one-time)
  - Platform Subscription: $30,000 ($6k/yr × 5)
  - Labor: $150,000 (0.25 FTE × $120k × 5)
  
- **AWS Managed Blockchain:** $365,615
  - Smart Contract Dev: $15,000
  - Security Audit: $8,000
  - Integration/Testing: $20,000
  - Deployment: $5,000
  - Network Membership: $13,140
  - Peer Nodes: $2,980
  - Storage: $1,800
  - Data Written: $25
  - CloudWatch: $1,920
  - Secrets Manager: $1,200
  - Backup: $600
  - Labor: $289,750 (0.25 FTE DevOps @ $145k + 0.1 FTE Blockchain @ $217k)
  - Training: $6,200

- **Oracle Blockchain Platform:** $407,815
  - Smart Contract Dev: $18,000
  - Security Audit: $8,000
  - Integration/Testing: $25,000
  - Deployment: $7,000
  - Platform Compute: $52,360 (2 OCPU @ $0.5971/hr)
  - Storage: $650
  - Load Balancer: $655
  - Labor: $289,750 (0.25 FTE DevOps @ $145k + 0.1 FTE Blockchain @ $217k)
  - Training: $6,400

- **Ethereum L2:** (Need to continue reading for this)

## Key Citations

[1] Onli Corporation official pricing
[2] AWS Managed Blockchain pricing page
[3] Oracle Blockchain Platform pricing page
[4] l2fees.info (December 2025)
[5] ChatGPT cost analysis
[6] Claude AI cost analysis
[7] Gartner Research blockchain projections
[8] Forrester Research 2024 study (90% blockchain failure rate)
[9] IBM TradeLens shutdown ($100M+ investment)
[10] Australian Securities Exchange CHESS abandonment ($170M spent)
[11] Gemini cost analysis
[12] Enterprise IT investment analysis standards
[13] Glassdoor salary data 2025
[14] Salary.com salary data 2025
[15] Onli white paper on possession-based model

## Critical Insights

1. **Labor dominates blockchain TCO** - AWS example shows labor is 79% of total cost ($289,750 out of $365,615)
2. **Onli's fixed cost model** - Year 2-5 costs identical to Year 1 (minus upfront costs), providing absolute predictability
3. **Smart contract costs** - One-time $15k-$120k development + audit costs for blockchain platforms
4. **Ethereum L2 gas fees** - $0.09/tx as of December 2025 (from l2fees.info)
5. **Infrastructure scaling** - AWS/Oracle costs compound as storage grows ($120 → $600 over 5 years for small project)

## Questions for User

1. **Ethereum L2 detailed breakdown** - Need to read remaining pages to get complete Scenario 1 L2 costs
2. **Medium and Enterprise scenarios** - Need full details for Scenario 2 and 3
3. **Calculator hover boxes** - Should I include all 15 component breakdowns in hover tooltips?
4. **Citation format** - How should citations be displayed in hover boxes? (e.g., "[AWS Pricing Page, Dec 2025]")
5. **Labor FTE scaling** - The report shows 0.25 FTE for small, but what triggers scaling to 3.0 FTE for medium/enterprise?

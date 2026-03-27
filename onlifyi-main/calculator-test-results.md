# TCO Calculator Test Results - December 2025

## Test Scenario (Default Parameters)
- **Assets Issued:** 10,000
- **Monthly Transactions:** 50,000
- **Analysis Timeframe:** 5 years
- **Annual Data Growth:** 500 GB
- **Smart Contract Complexity:** Medium ($40k-$60k)
- **FTE Allocations:**
  - Onli: 0.25 FTE
  - AWS: 1.00 FTE
  - Oracle: 1.00 FTE
  - Ethereum L2: 1.00 FTE

## Calculator Results

| Platform | 5-Year TCO | Savings vs Onli |
|----------|------------|-----------------|
| **Onli** | **$230,500** | Baseline |
| AWS Managed Blockchain | $1,387,777 | 83.4% |
| Oracle Blockchain | $1,417,763 | 83.7% |
| Ethereum (L2) | $1,630,390 | 85.9% |

## Detailed Cost Breakdown

### Onli
- Upfront Development: $50,500 (Treasury $50k + Asset Issuance $500)
- Platform Subscription: $30,000 ($6k/year × 5 years)
- Infrastructure: $0
- Transaction Fees: $0
- Labor & Talent: $150,000 (0.25 FTE × $120k/year × 5 years)
- **Total: $230,500**

### AWS Managed Blockchain
- Upfront Development: $83,000 (Smart contract $50k + Audit $8k + Integration $20k + Deployment $5k)
- Platform Subscription: Included in infrastructure
- Infrastructure: $32,027 (Network membership + peer nodes + storage + monitoring)
- Transaction Fees: $0
- Labor & Talent: $1,272,750 (1.0 FTE × $217k/year × 5 years + DevOps)
- **Total: $1,387,777**

### Oracle Blockchain
- Upfront Development: $100,000 (Smart contract $60k + Audit $8k + Integration $25k + Deployment $7k)
- Platform Subscription: Included in infrastructure
- Infrastructure: $44,512 (vCPU compute + storage + load balancer)
- Transaction Fees: $0
- Labor & Talent: $1,273,250 (1.0 FTE × $217k/year × 5 years + DevOps)
- **Total: $1,417,763**

### Ethereum Layer 2
- Upfront Development: $85,200 (Smart contract $40k + Audit $12k + Integration $25k + Testing $8k + Gas $200)
- Platform Subscription: $2,940 ($49/month × 12 months × 5 years)
- Infrastructure: Included in subscription
- Transaction Fees: $270,000 (50k/month × 12 × 5 years × $0.09/tx)
- Labor & Talent: $1,272,250 (1.0 FTE × $217k/year × 5 years + DevOps)
- **Total: $1,630,390**

## Calculator Features Verified

✅ **User-Adjustable Parameters:**
- Assets Issued slider (100 to 10M)
- Monthly Transactions slider (1K to 10M)
- Analysis Timeframe slider (1-10 years)
- Annual Data Growth slider (10-5000 GB)
- Smart Contract Complexity dropdown (Low/Medium/High)
- FTE sliders for all platforms (0.25-5.0 FTE)

✅ **Hover Tooltips with Citations:**
- Each platform column header has info icon with cost structure explanation
- Each cost category row has info icon with "What's included" and "Why it varies"
- All tooltips include superscript citation references

✅ **Grouped Cost Categories:**
- Upfront Development (smart contracts, audits, integration, deployment)
- Platform Subscription (base access fees)
- Infrastructure (compute, storage, network, monitoring)
- Transaction Fees (gas fees for Ethereum L2)
- Labor & Talent (engineers, DevOps, training)

✅ **Citation List:**
- Complete references section at bottom
- 8 cited sources with proper superscript notation
- Disclaimer about December 2025 pricing and variability

## Accuracy Verification

The calculator correctly implements the December 2025 TCO report formulas:

1. **Onli Costs:** Treasury ($50k) + Asset Issuance ($0.05 × assets) + Subscription ($6k/year) + Labor (FTE × $120k/year)
2. **AWS Costs:** Smart contract dev + Audit + Integration + Deployment + Infrastructure (network + nodes + storage) + Labor (FTE × $217k/year + DevOps)
3. **Oracle Costs:** Smart contract dev + Audit + Integration + Deployment + Infrastructure (vCPU + storage + LB) + Labor (FTE × $217k/year + DevOps)
4. **Ethereum L2 Costs:** Smart contract dev + Audit + Integration + Testing + Deployment gas + Node provider ($49/mo) + Gas fees ($0.09/tx) + Labor (FTE × $217k/year + DevOps)

## Status: ✅ VERIFIED AND READY

The calculator is fully functional with:
- Accurate December 2025 pricing
- User-adjustable parameters
- Hover tooltips with grouped cost explanations
- Complete citation references
- Real-time calculation updates
- Professional UI/UX

All features requested have been successfully implemented and tested.

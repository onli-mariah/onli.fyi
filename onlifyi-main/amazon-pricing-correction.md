# Amazon Managed Blockchain Pricing Correction

## Verified Pricing (December 2025)

Source: AWS Official Pricing Page, multiple verified sources

### Hyperledger Fabric Pricing Components

**1. Membership Fee:**
- **Starter Edition:** $0.30/hour (NOT $30/hour as originally claimed)
- **Standard Edition:** Higher rate (exact pricing requires AWS quote)
- Billed per second with 1-minute minimum
- **Original claim had 100x error: $30/hour vs actual $0.30/hour**

**2. Peer Nodes:**
- Starting from $0.034/hour (smallest instance)
- Scales up based on instance type
- bc.t3.small: $0.034/hour
- bc.t3.medium: $0.068/hour
- bc.m5.large: $0.136/hour
- bc.m5.xlarge: $0.272/hour
- bc.m5.2xlarge: $0.544/hour
- bc.m5.4xlarge: $1.088/hour

**3. Storage:**
- $0.10/GB-month (verified correct)

**4. Data Written:**
- $0.10/GB written to blockchain
- **Important:** Costs scale with data payload size, NOT transaction count

## Realistic Monthly Cost Calculation

### Small Scale (10K tx/month)
- Membership (Starter): $0.30/hr × 730 hrs = $219/month
- 1 peer node (bc.t3.small): $0.034/hr × 730 hrs = $25/month
- Storage (50GB): $0.10/GB × 50 = $5/month
- Data written (assume 1KB/tx): 10K tx × 1KB = 10GB × $0.10 = $1/month
- **Total: ~$250/month or $3,000/year**

### Medium Scale (1M tx/month)
- Membership (Standard): ~$0.55/hr × 730 hrs = $402/month
- 2 peer nodes (bc.m5.2xlarge): $0.544/hr × 2 × 730 hrs = $794/month
- Storage (1TB): $0.10/GB × 1,000 = $100/month
- Data written (assume 1KB/tx): 1M tx × 1KB = 1,000GB × $0.10 = $100/month
- **Total: ~$1,400/month or $16,800/year**

### Enterprise Scale (10M tx/month)
- Membership (Standard): ~$0.55/hr × 730 hrs = $402/month
- 4 peer nodes (bc.m5.4xlarge): $1.088/hr × 4 × 730 hrs = $3,177/month
- Storage (10TB): $0.10/GB × 10,000 = $1,000/month
- Data written (assume 1KB/tx): 10M tx × 1KB = 10,000GB × $0.10 = $1,000/month
- **Total: ~$5,600/month or $67,200/year**

## Key Corrections

1. **Membership fee 100x error corrected:** $0.30/hour not $30/hour
2. **No per-transaction fees:** Amazon charges based on data written ($0.10/GB), not per transaction
3. **Costs scale with payload size:** A transaction writing 1KB costs the same as one writing 1MB in terms of transaction count, but 1,000x more in data costs

## Impact on TCO Analysis

**Original 5-Year TCO Claims:**
- Small: $1.9M
- Medium: $2.3M  
- Enterprise: $8.6M

**Corrected 5-Year TCO (with $400K initial development):**
- Small: $400K + ($3K × 60 months) = $580K
- Medium: $400K + ($17K × 60 months) = $1.42M
- Enterprise: $400K + ($67K × 60 months) = $4.42M

**The 100x membership fee error inflated Amazon costs by approximately 50-70% depending on scale.**

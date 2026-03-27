# Oracle Blockchain Platform Research Findings

**Source:** Oracle official pricing page (https://www.oracle.com/blockchain/cloud-platform/pricing/)
**Date:** December 4, 2025

## Pricing Structure

Oracle Blockchain Platform uses a **vCPU-based pricing model** with OCPU (Oracle CPU) billing units.

**Key pricing tiers:**

| Product Tier | vCPU Price | OCPU Price | Unit |
|-------------|-----------|-----------|------|
| Standard | $0.1075/vCPU | $0.215/OCPU | Per hour |
| Enterprise | $0.21505/vCPU | $0.4301/OCPU | Per hour |
| Digital Assets | $0.50805/vCPU | $1.0161/OCPU | Per hour |
| Storage | — | $70.40/TB | Per month |

**Note:** 1 OCPU = 2 vCPUs (for x86-based compute). Most customers are billed in OCPU units.

## Cost Implications

**Enterprise Edition (most common for production):**
- Base cost: $0.4301 per OCPU per hour
- Monthly cost (24/7 operation): $0.4301 × 24 × 30 = **$309.67 per OCPU/month**
- Minimum configuration typically requires 2-4 OCPUs
- **Minimum monthly cost: $619-$1,239** (before storage)

**Storage costs:**
- $70.40 per TB per month
- Additional cost on top of compute

**Annual cost estimate (minimum 2 OCPU Enterprise):**
- Compute: $309.67 × 2 × 12 = **$7,432/year**
- Storage (100GB): $70.40 × 0.1 × 12 = **$845/year**
- **Total minimum: ~$8,277/year** (2 OCPU + 100GB storage)

## Key Features

1. **Predictable budgeting:** vCPU-based pricing model
2. **Cost optimization:** Ability to stop/restart instances when not in use
3. **Dynamic scaling:** Adjust vCPUs and storage up or down via Control Panel
4. **Managed service:** Oracle handles infrastructure, patching, updates

## Next Research Steps

- [ ] Find real-world Oracle Blockchain implementation costs
- [ ] Research developer experience and time-to-market
- [ ] Find transaction throughput limits
- [ ] Research setup/onboarding costs
- [ ] Find case studies with total cost breakdowns


## Case Study: Retraced (Fashion Supply Chain Sustainability)

**Source:** https://www.oracle.com/customers/retraced-case-study/
**Date:** January 25, 2022

### Business Context
- **Company:** Retraced (Oracle for Startups graduate)
- **Industry:** Fashion/Textile Supply Chain Sustainability
- **Use Case:** Transparent supply chain tracking, certification verification
- **Result:** 400% sales growth

### Technical Architecture

**Core Components:**
1. **Oracle Blockchain Platform** (Hyperledger Fabric-based)
   - Tamper-proof certification verification
   - Smart contracts for collaborative validation
   - Blockchain nodes for certification authorities

2. **Oracle Autonomous Transaction Processing**
   - Critical data storage
   - User authentication/authorization

3. **Oracle Autonomous Data Warehouse**
   - Historical blockchain data (via SQL)
   - Business intelligence and analytics
   - Avoids slow smart contract queries

4. **Oracle Kubernetes Engine (OKE)**
   - Microservices orchestration
   - Node.js pods for business logic
   - Auto-scaling for workload distribution

5. **Oracle Load Balancer**
   - Traffic distribution across compute instances

### Developer Experience Insights

**Challenges:**
- **Slow transaction processing:** "Processing transactions on Hyperledger Fabric can take several seconds"
- **Workaround required:** Developed gateway service for "fast, temporary validation" before blockchain confirmation
- **Complex architecture:** Required multiple microservices (notifications, CRON jobs, message posting, email, analytics, data aggregation)
- **Asynchronous processing:** Messages dispatched to queue system, blockchain updates marked as "temporarily accepted and pending blockchain verification"

**Architecture complexity:**
- 6+ separate services required (API, blockchain, tracing, message broker, database, data warehouse)
- Manual integration of certification authority APIs (most don't have public APIs)
- Two-phase commit pattern (temporary acceptance → blockchain verification)

### Key Takeaways

**Pros:**
- Tamper-proof verification
- Flexible onboarding (new companies can participate without manual data integration)
- Built-in Hyperledger Fabric support

**Cons:**
- Slow transaction speeds (several seconds per transaction)
- Complex architecture requiring multiple Oracle services
- Requires workarounds (gateway service) for acceptable user experience
- Asynchronous processing adds complexity
- Need separate data warehouse to avoid slow blockchain queries

**Cost implications:**
- Requires multiple Oracle services: Blockchain Platform + Autonomous DB + Data Warehouse + OKE + Load Balancer
- Each service has separate pricing
- Total cost not disclosed in case study

# Amazon Managed Blockchain Research Findings

**Sources:** 
- AWS official pricing pages (https://aws.amazon.com/managed-blockchain/pricing/)
- TechTarget article (July 18, 2019)
- Seaflux blog post (2025)
- Reddit user experience report

**Date:** December 4, 2025

## Pricing Structure

Amazon Managed Blockchain uses a **pay-as-you-go model** billed per second (1-minute minimum).

### Cost Components

**1. Network Membership Fees (hourly, billed per second)**

| Edition | Membership Rate | Max Members | Max Channels | Max Peer Nodes/Member |
|---------|----------------|-------------|--------------|----------------------|
| Starter | $0.30/hour | 5 | 3 | 2 |
| Standard | $0.55/hour | 14 | 8 | 3 |

**2. Peer Node Costs (Hyperledger Fabric)**

| Instance Type | Cost per Hour | vCPUs | Use Case |
|--------------|---------------|-------|----------|
| bc.t3.small | $0.034 | 2 | Small workloads, testing |
| bc.t3.medium | ~$0.068 | 2 | Medium workloads |
| bc.t3.large | $0.134 | 2 | Larger workloads |
| bc.m5.large | $0.154 | 2 | Production |
| bc.m5.xlarge | $0.307 | 4 | High performance |
| bc.m5.4xlarge | $1.229 | 16 | Enterprise scale |

**3. Storage Costs**
- $0.10 per GB-month for peer node storage

**4. Data Written to Network**
- $0.10 per GB of data written

**5. Data Transfer**
- Standard AWS data transfer rates apply

## Cost Examples

### Example 1: Small Test Network (Hyperledger Fabric)
**Configuration:** 3 Standard Edition members, each with 1 bc.t3.small peer node, 30GB storage, 12MB/hour data written

**Hourly costs:**
- Membership: 3 × $0.55 = $1.65/hour
- Peer nodes: 3 × $0.034 = $0.102/hour
- Storage: 3 × 30GB × $0.10/GB-month ÷ 730 hours = $0.012/hour
- Data written: 3 × 12MB × $0.10/GB = $0.0036/hour
- **Total: ~$1.77/hour**

**Monthly cost:** $1.77 × 730 hours = **$1,292/month**
**Annual cost:** $1,292 × 12 = **$15,504/year**

### Example 2: Production Network (Hyperledger Fabric)
**Configuration:** 5 Standard Edition members, each with 2 bc.m5.large peer nodes, 100GB storage, 50MB/hour data written

**Hourly costs:**
- Membership: 5 × $0.55 = $2.75/hour
- Peer nodes: 5 × 2 × $0.154 = $1.54/hour
- Storage: 5 × 2 × 100GB × $0.10/GB-month ÷ 730 = $0.137/hour
- Data written: 5 × 50MB × $0.10/GB = $0.025/hour
- **Total: ~$4.45/hour**

**Monthly cost:** $4.45 × 730 hours = **$3,249/month**
**Annual cost:** $3,249 × 12 = **$38,988/year**

### Example 3: Ethereum Network
**Configuration:** 4 c5.large nodes, 500GB ledger each, 50M requests/month

**Monthly costs:**
- Peer nodes: 4 × $0.136/hour × 24 × 30 = $391.68
- Storage: 4 × 500GB × $0.10 = $200
- Requests: 50M × $3/million = $150
- **Total: $741.68/month**

**Annual cost:** $741.68 × 12 = **$8,900/year**

## Real-World User Experience

**Reddit report (2024):**
- First-time user accidentally left test network running
- Charged $160+ in short period
- Costs: $0.30/hour membership + $0.034/hour node
- Quote: "I'm kind of shocked... I thought it would be minimal since it was just a test"

**Key insight:** Costs accumulate quickly even for idle/test networks running 24/7.

## Technical Capabilities

### Hyperledger Fabric Support
- **Frameworks:** Hyperledger Fabric 1.2+ (as of 2019, likely updated by 2025)
- **Ledger:** Apache Kafka-based distributed ledger
- **Transaction speed:** "Several seconds" per transaction (per Retraced case study)
- **Integration:** Amazon QLDB for off-chain analytics

### Ethereum Support
- Public and private Ethereum networks
- Standard Ethereum JSON-RPC APIs
- Various instance types (bc.t3, bc.m5, bc.c5)

### Editions Comparison

**Starter Edition:**
- Up to 5 members
- Up to 3 channels
- Up to 2 peer nodes per member
- Instance types: bc.t3.small, bc.t3.medium
- Use case: Testing, small production

**Standard Edition:**
- Up to 14 members
- Up to 8 channels
- Up to 3 peer nodes per member
- Instance types: bc.t3, bc.m5, bc.c5
- Use case: Large-scale production

## Developer Experience

### Pros:
- Fully managed service (AWS handles infrastructure, certificates, authentication)
- CloudFormation templates for simplified setup
- Accessible via AWS Console, CLI, or SDK
- Scalable (add/remove members dynamically)
- Integration with AWS ecosystem (EC2, QLDB, etc.)

### Cons:
- **Slow transaction processing:** "Several seconds" per transaction (Hyperledger Fabric)
- **Complex architecture:** Requires multiple AWS services for production use
- **Limited availability:** Initially only in Northern Virginia region (may have expanded by 2025)
- **Immature service:** Not as mature as flagship AWS offerings (as of 2019)
- **Ongoing costs:** 24/7 billing even for idle networks
- **Learning curve:** Requires blockchain expertise (Hyperledger Fabric, Ethereum)

## Regional Availability

**As of 2019:** Only Northern Virginia (us-east-1)
**Note:** Likely expanded to more regions by 2025, but not confirmed in research

## Cost Comparison Summary

| Configuration | Monthly Cost | Annual Cost |
|--------------|-------------|-------------|
| Minimum (1 Starter member, 1 bc.t3.small node) | ~$250 | ~$3,000 |
| Small test (3 Standard members, 3 bc.t3.small nodes) | ~$1,292 | ~$15,504 |
| Production (5 Standard members, 10 bc.m5.large nodes) | ~$3,249 | ~$38,988 |
| Ethereum (4 c5.large nodes, 500GB each) | ~$742 | ~$8,900 |

## Key Takeaways

**Cost structure:**
- Predictable hourly pricing, but costs accumulate 24/7
- Minimum viable network: ~$3,000/year
- Production networks: $15,000-$40,000+/year
- Storage and data transfer add additional costs

**Performance:**
- Transaction speeds: Several seconds (Hyperledger Fabric)
- Scalability: Limited by edition (5-14 members)
- Requires workarounds for acceptable user experience

**Developer experience:**
- Managed service reduces infrastructure burden
- Still requires blockchain expertise
- Complex multi-service architecture for production
- CloudFormation templates help with setup

**Best for:**
- Organizations already in AWS ecosystem
- Private blockchain networks (Hyperledger Fabric)
- Applications requiring AWS service integration
- Teams with blockchain development expertise

**Not ideal for:**
- Cost-sensitive projects
- High-throughput applications (slow transaction speeds)
- Teams without blockchain expertise
- Applications requiring instant finality

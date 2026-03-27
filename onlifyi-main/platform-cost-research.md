# Platform Cost Research - Digital Asset Marketplace Development

## Oracle Blockchain Platform

### Platform Costs
- **Standard Edition:** $0.1075/vCPU/hour = $0.215/OCPU/hour
- **Enterprise Edition:** $0.21505/vCPU/hour = $0.4301/OCPU/hour
- **Storage:** $70.40/TB/month
- **Scalable:** Can stop/restart instances to reduce costs

### Development Costs (from "Cost of Onli" PDF)
- **Wallet:** ~$100K + 2 months
- **Storefront:** ~$100K + 4 months
- **Exchange:** ~$50K + 1 month
- **ERP System:** ~$300K + 4 months
- **Enterprise Database:** ~$600K + 4 months
- **Orchestration:** ~$350K + 4 months
- **Total Initial Build:** ~$1.5M + 19 months development time

### Transaction Costs
- **$0.75 per transaction** (from Cost of Onli PDF)

### Example Monthly Cost (from Cost of Onli PDF)
For 10,000 transactions/month using 10M coins:
- Transaction Fees: $90,000/month
- Infrastructure Fees: $7,500/month
- Application Costs (Oracle cloud): $64,000/month
- **Monthly Total: $161,500**
- **Annual Total: $1,938,000**

### What Oracle Provides
- Blockchain platform (Hyperledger Fabric-based)
- Node management
- Smart contract deployment
- REST APIs

### What You Must Build/Buy Separately
- Wallet infrastructure
- Frontend UI
- Backend services
- ERP integration
- Database
- Orchestration layer
- Monitoring and analytics
- All application logic

---

## Amazon Managed Blockchain

### Platform Costs (Hyperledger Fabric)

**Membership Fees:**
- Starter Edition: $0.30/hour ($216/month)
- Standard Edition: $0.30/hour ($216/month)

**Peer Node Costs:**
- bc.t3.small: $0.034/hour ($24.48/month)
- bc.t3.medium: $0.068/hour ($48.96/month)
- bc.t3.large: $0.136/hour ($97.92/month)
- bc.c5.2xlarge: $0.544/hour ($391.68/month)

**Storage:**
- $0.10/GB/month per peer node

**Data Written:**
- $0.10/GB

**Requests:**
- $3.00 per million requests

### Example Cost Calculation (from Seaflux)
**Test Network (3 members, 1 peer node each):**
- Membership: 3 × $0.30/hr = $0.90/hr
- Peer Nodes: 3 × $0.034/hr = $0.306/hr
- Storage: 3 × 30GB × $0.10 = $0.027/hr
- Data Written: 3 × 12MB/hr × $0.10/GB = $0.036/hr
- **Total: $1.269/hour = ~$913/month**

**Production Network (4 peer nodes, 500GB each, 50M requests):**
- Peer Nodes: 4 × $0.136/hr × 24hr × 30 days = $391.68/month
- Storage: 4 × 500GB × $0.10 = $200/month
- Requests: 50M × $3/million = $150/month
- **Total: $741.68/month = ~$8,900/year**

### What AWS Provides
- Managed blockchain network
- Peer node infrastructure
- Certificate authority
- Ordering service
- Basic monitoring

### What You Must Build/Buy Separately
- Smart contracts (chaincode)
- Wallet infrastructure
- Frontend application
- Backend APIs
- Database for off-chain data
- Storage for assets (S3, IPFS)
- User authentication
- All business logic
- Monitoring and analytics

### Additional AWS Costs
- EC2 instances for client applications
- S3 storage for assets
- Lambda for serverless functions
- CloudFront for CDN
- RDS/Aurora for databases
- CloudWatch for monitoring

---

## Ethereum / ERC-20 dApp Development

### Development Costs

**By Complexity:**
- **Simple MVP:** $25K-$40K
- **Moderate Complexity:** $40K-$100K
- **Advanced/Complex:** $100K-$400K

**By Phase (from IdeaSoft):**
- Discovery & Planning: $5K-$15K
- UI/UX Design: $10K-$25K
- Smart Contracts & Backend: $15K-$50K
- Frontend & Integrations: $20K-$70K
- QA & Security Audits: $10K-$30K
- Deployment & Maintenance: $5K-$20K/year

**Real Project Example (from Alchemy):**
- Smart Contracts: $35,000
- Game Frontend: $60,000
- Backend Services: $25,000
- Art and Design: $30,000
- **Total: $150,000**

### Smart Contract Costs
- **Basic token contract:** $5K-$15K
- **Complex DeFi contracts:** $25K-$45K
- **NFT marketplace contracts:** $15K-$50K
- **Security audit:** $10K-$30K (mandatory)

### Gas Fees (Transaction Costs)

**Current Rates (December 2025):**
- Average gas price: ~0.072 gwei (very low currently)
- Average transaction fee: ~$0.28/tx

**Historical Context:**
- Gas fees are highly volatile
- During high network congestion: $50-$200+ per transaction
- Layer-2 solutions (Polygon, Arbitrum, Optimism) reduce fees to $0.01-$0.10

**Typical Operations:**
- Simple transfer: 21,000 gas
- Token swap: 100,000-200,000 gas
- NFT mint: 50,000-150,000 gas
- Complex smart contract: 200,000-500,000 gas

### Infrastructure Costs

**Node Infrastructure:**
- Self-hosted Ethereum node: $500-$2,000/month
- Third-party node provider (Infura, Alchemy): $0-$500/month depending on requests

**Cloud Hosting (AWS/GCP/Azure):**
- Backend APIs: $100-$500/month
- Database: $50-$300/month
- Storage (S3/IPFS): $50-$200/month
- CDN: $50-$200/month
- Total: $250-$1,200/month

### Ongoing Costs
- Gas fees for contract interactions
- Node/API provider fees
- Cloud infrastructure
- Monitoring and analytics
- Security updates
- Customer support

### What Ethereum Provides
- Public blockchain network
- Smart contract execution
- Decentralized consensus
- Global accessibility

### What You Must Build
- All smart contracts
- Wallet integration
- Frontend application
- Backend services
- Database
- Storage solution
- User authentication
- Monitoring
- Analytics
- All business logic

---

## Key Insights

### Common Pattern Across All Platforms

**What Platforms Provide:**
- Blockchain infrastructure
- Node management
- Basic APIs

**What You Must Build:**
1. Smart contracts / business logic
2. Wallet infrastructure
3. Frontend UI
4. Backend services
5. Database
6. Storage
7. Authentication
8. Monitoring
9. Analytics
10. All application-specific features

### Cost Breakdown Structure

**Initial Development (Year 1):**
- Smart contracts: $15K-$50K
- Frontend: $20K-$70K
- Backend: $15K-$50K
- Design: $10K-$30K
- Security audits: $10K-$30K
- Testing & QA: $10K-$30K
- **Total: $80K-$260K**

**Ongoing Costs (Annual):**
- Platform fees: varies by platform
- Infrastructure: $3K-$15K/year
- Transaction costs: varies by volume
- Maintenance: $10K-$50K/year
- Monitoring: $5K-$20K/year

### Time to Market
- Simple MVP: 3-4 months
- Moderate complexity: 4-6 months
- Complex platform: 6-12 months
- Oracle (with full stack): 12-19 months

---

## Sources

1. Oracle Blockchain Platform Pricing: https://www.oracle.com/blockchain/cloud-platform/pricing/
2. AWS Managed Blockchain Analysis: https://www.seaflux.tech/blogs/aws-managed-blockchain/
3. dApp Development Costs: https://ideasoft.io/blog/dapp-development-cost-breakdown/
4. The Cost of Onli PDF (internal document)
5. Alchemy Development Guide: https://www.alchemy.com/blog/guide-to-blockchain-app-development-costs
6. NFT Marketplace Architecture: https://medium.com/nftdailydose/nft-marketplace-architecture-dd2abd76f09d


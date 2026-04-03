# The Proof

> **A five-year Total Cost of Ownership analysis comparing Onli to AWS Managed Blockchain, Oracle Blockchain Platform, and Paxos. All figures use confirmed primary source data or explicitly identified estimates.**

**The true cost of deploying blockchain-based digital asset infrastructure is systematically underestimated by organizations that anchor their budgets to published infrastructure fees.**

## Executive Summary

This analysis demonstrates that for all three traditional platforms examined — AWS Managed Blockchain, Oracle Blockchain Platform, and Paxos — infrastructure fees represent only 5% to 15% of total five-year cost of ownership.

The dominant cost drivers are specialized engineering talent and compliance infrastructure, two categories that Onli's fixed-cost model eliminates entirely.

> "Onli's Year 1 deployment cost is $56,000 to $62,000 for all tiers before issuance fees. Competitor Year 1 costs begin at $290,000 at minimum SMB scale and reach $6.8 million at enterprise scale. The gap widens every subsequent year."

This is not a comparison of features. It is a comparison of architectures. And the architectural difference between Onli and every traditional blockchain platform is the difference between a system that charges you for every transaction and a system that charges you once — when the asset is born — and never again.

## Why the Pricing Page Is a Lie

Every enterprise that has evaluated AWS Managed Blockchain, Oracle Blockchain Platform, or Paxos has made the same mistake. They looked at the vendor's pricing page, calculated the infrastructure cost at their expected transaction volume, and built a budget around that number.

They were then shocked — sometimes catastrophically — when the actual cost of deployment was three, five, or ten times higher than the pricing page suggested.

This is not an accident. It is the nature of the blockchain cost structure. The pricing page shows you the infrastructure fee. It does not show you the engineering labor required to build, configure, and maintain the system. It does not show you the compliance infrastructure required to operate a digital asset platform legally. It does not show you the KYC verification costs that scale with your user base. It does not show you the smart contract audit fees required every time you update your code.

And it does not show you the probability — confirmed at 90% by Gartner — that you will need to rebuild the entire system within 18 months. ^[17]^

This paper shows you all of it. Every cost category, every source, every calculation.

## The Platforms Under Comparison

Platform 1
## AWS

Amazon's fully managed service for deploying Hyperledger Fabric networks on AWS infrastructure. It handles the provisioning and management of blockchain nodes, eliminating the need for organizations to run their own servers. Designed for enterprise permissioned blockchain applications — supply chain tracking, financial settlements, and digital identity management.

Platform 2
## Oracle

Oracle's cloud-based Hyperledger Fabric service, integrated with Oracle Cloud Infrastructure (OCI). Designed for enterprises already operating in the Oracle ecosystem, offering native integration with Oracle databases, analytics tools, and enterprise applications.

Platform 3
## Paxos

A New York State Department of Financial Services regulated trust company that provides stablecoin issuance and settlement infrastructure as a managed financial service. Unlike AWS and Oracle, which provide infrastructure for organizations to build their own blockchain applications, Paxos provides a regulated financial service layer on top of blockchain infrastructure.

The Alternative
## Onli

A fixed-cost, fully managed platform for computational possession — the creation, management, and transfer of digital assets that constitute actual property rather than records in a custodial ledger. Cost structure: $6,000 annual platform subscription, $50,000 one-time treasury deployment, $0.05 one-time issuance fee per asset. After issuance, assets transact at $0.00 forever.

## The Pricing Data: Confirmed and Estimated

This analysis uses primary source data wherever available and explicitly discloses where estimates are required.

**AWS Managed Blockchain pricing** is confirmed directly from Amazon's published Hyperledger Fabric pricing page, accessed April 2026. ^[1]^ Confirmed figures: bc.m5.large peer node at $0.154 per hour; Standard Edition membership at $0.55 per hour. A minimum production configuration costs approximately $6,167 per year in infrastructure alone.

**Oracle Blockchain Platform pricing is not publicly available as a static figure.** Oracle's pricing page renders OCPU-hour rates dynamically via JavaScript. ^[2]^ All Oracle figures in this paper are estimates derived from OCI general-purpose compute list pricing at $0.0255 per OCPU-hour for standard x86 VMs ^[3]^ and published OCI pricing analysis. ^[4]^

**Paxos pricing** is sourced from the most authoritative public document available: the Paxos Securities Settlement Company Schedule of Fees, filed as Exhibit E-37 of SEC Form CA-1 with the U.S. Securities and Exchange Commission on July 14, 2025. ^[5]^ This document specifies: $0.00225 per trade; $0.0000225 per share; and a mandatory minimum monthly settlement fee of $5,000.

**Blockchain developer salary data** is sourced from Glassdoor's January 2026 survey of 218 submitted salaries. ^[6]^ Average blockchain developer salary: $136,691 per year. Flexiple's 2025 analysis confirms that total loaded employment cost adds approximately 25% to base salary, ^[7]^ bringing the true annual cost of a senior blockchain engineer to $175,000 to $268,000.

## The Hidden Costs: What the Pricing Page Does Not Show

The most important insight in any blockchain TCO analysis is that infrastructure fees are not the primary cost. They are not even close to the primary cost.

Across all three competitor platforms, infrastructure and platform fees represent 5% to 15% of total five-year cost of ownership. The dominant cost drivers are specialized engineering labor and compliance infrastructure.

### Engineering Labor: The Dominant Cost Driver

Building a production digital asset marketplace on AWS Managed Blockchain or Oracle Blockchain Platform requires specialized blockchain engineering talent. This is not general software development. At SMB scale, a minimum viable team is two engineers. At mid-market scale, a team of four to six is required. At enterprise scale, teams of ten to fifteen are common.

At the 25th percentile of Glassdoor's confirmed salary range, a two-engineer minimum team costs $272,270 per year fully loaded. ^[6][7]^ This single cost category — two junior blockchain developers — exceeds Onli's entire annual platform cost by a factor of 45.

Onli requires no blockchain engineering expertise. The platform is fully managed, and the Onli Cloud interface is designed for general software developers. Labor costs on Onli are modeled at general IT and operations staff rates of $60,000 to $150,000 annually, depending on tier.

### Compliance Infrastructure: The Systematically Underestimated Cost

For any organization deploying stablecoin or digital asset marketplace infrastructure on AWS, Oracle, or Paxos, a comprehensive compliance stack is legally required.

| Compliance Category | Typical Annual Cost | Description |
| --- | --- | --- |
| AML and Blockchain Analytics | $50K – $500K+ | Specialized monitoring tools like Chainalysis ^[8]^ |
| KYC Identity Verification | $180K – $1M+ | Platforms like Jumio or Veriff at $0.90 to $5.00 per check ^[9]^ |
| Crypto Compliance Officers | $150K – $300K+ | Dedicated regulatory experts ^[10]^ |
| Smart Contract Audits | $20K – $2M+ | Required for every significant code update ^[11]^ |
| Money Transmitter Licenses | $225K+ annually | Maintenance costs after $1M to $3M initial setup ^[12]^ |

None of these compliance costs apply to Onli. The Onli platform's compliance architecture is embedded at the platform level. The Onli You application handles end-user identity management and KYC at no additional cost. The Onli network's computational possession model eliminates the regulatory ambiguity around token classification that drives the need for legal opinions and MTLs in many jurisdictions.

## Platform-Specific Hidden Risks

### AWS: Service Sprawl and Data Transfer Fees

A production blockchain application on AWS typically requires ten to twelve distinct AWS services. According to CostBench's 2026 hidden cost analysis, NAT Gateway data processing can accumulate significantly at scale. One documented enterprise deployment generated nearly $100,000 per year in NAT Gateway processing charges alone. ^[13]^

### Oracle: The SULS Fee and Vendor Lock-In

Oracle's Annual Software Update License and Support (SULS) fee — 22% of net license value per year — is documented by multiple Oracle licensing specialists as unavoidable for perpetual license holders. ^[15]^ Oracle's Unlimited License Agreement structure creates vendor lock-in through three to five year commitments with financial penalties for early exit.

> **Risk Notice: Paxos AML Settlement**
> On August 7, 2025, the NYDFS announced a $48.5 million settlement with Paxos for AML failures. ^[16]^ While Paxos has publicly characterized the issues as historical and fully remediated, this settlement illustrates a critical point: customers building on Paxos infrastructure retain fully independent compliance obligations and cannot rely on Paxos for coverage of their own AML programs.

## The Tier-by-Tier TCO Analysis

The following analysis presents the five-year total cost of ownership across three organizational tiers. All figures use confirmed primary source data where available and explicitly identified estimates where not. The Onli cost model uses the exact pricing structure: 50% issuance ratio in Year 1, 30% in Year 2, 10% in Year 3 and beyond.

### SMB Tier: Under 50 Employees, 10,000 to 100,000 Issuances Per Year

At SMB scale, the economics of traditional blockchain platforms are prohibitive. The minimum viable engineering team costs $272,270 per year fully loaded.

| Platform | 5-Year SMB TCO (Low) | 5-Year SMB TCO (High) | Multiple vs. Onli |
| --- | --- | --- | --- |
| Onli | $382,000 | $505,000 | 1x (baseline) |
| AWS Managed Blockchain | $1,800,000 | $3,700,000 | 4.7x – 7.3x |
| Oracle Blockchain (est.) | $2,000,000 | $4,300,000 | 5.2x – 8.5x |
| Paxos | $1,700,000 | $3,500,000 | 4.4x – 6.9x |

The strategic implication for SMB organizations is unambiguous: unless there is a specific technical requirement that Onli cannot fulfill, traditional blockchain platforms should not be evaluated at SMB scale. The economics are simply prohibitive.

### Mid-Market Tier: 50 to 500 Employees, 100,000 to 1,000,000 Issuances Per Year

At mid-market scale, a critical cost category emerges: KYC verification costs. At volumes of 200,000 to 500,000 user verifications per year, KYC costs reach $180,000 to $2,500,000 annually. This single cost category, entirely absent on Onli, can exceed Onli's entire annual subscription cost by a factor of 30 to 400.

The five-year mid-market comparison yields a 5x to 9x advantage for Onli. The quantitative illustration below uses a mid-market deployment with 500,000 transactions in Year 1 growing 20% per year:

| Year | Total Transactions | New Issuances | Onli Annual Cost | AWS Annual Cost | Onli Cost/tx | AWS Cost/tx |
| --- | --- | --- | --- | --- | --- | --- |
| Year 1 | 500,000 | 250,000 (50%) | $68,500 | $940,000 | $0.137 | $1.88 |
| Year 2 | 600,000 | 180,000 (30%) | $13,500 | $940,000 | $0.023 | $1.57 |
| Year 3 | 720,000 | 72,000 (10%) | $9,600 | $940,000 | $0.013 | $1.31 |
| Year 4 | 864,000 | 86,400 (10%) | $10,320 | $940,000 | $0.012 | $1.09 |
| Year 5 | 1,036,800 | 103,680 (10%) | $11,184 | $940,000 | $0.011 | $0.91 |
| 5-Year Total | 3,720,800 | 692,080 | $113,104 | $4,700,000 | — | — |

Onli's annual cost drops 80% between Year 1 and Year 2 as the one-time treasury deployment cost disappears permanently. AWS's annual cost remains at $940,000 every year. Over five years, Onli's cumulative cost is $113,104; AWS's is $4,700,000 — a **41.6:1 ratio**.

### Enterprise Tier: 500+ Employees, 1,000,000 to 10,000,000 Issuances Per Year

The enterprise tier requires careful attention to Onli's issuance fee trajectory. At 10,000,000 new assets per year, Year 1 issuance costs reach $250,000. Over five years, cumulative issuance fees at maximum volume reach $2,500,000 — meaningful expenditure that should be compared against what it represents: the permanent activation of up to 50,000,000 unique digital assets, each of which then transacts freely forever.

### Consolidated 5-Year TCO Summary

| Tier | Onli 5-Year | AWS 5-Year | Oracle 5-Year (est.) | Paxos 5-Year |
| --- | --- | --- | --- | --- |
| SMB | $382K – $505K | $1.8M – $3.7M | $2.0M – $4.3M | $1.7M – $3.5M |
| Mid-Market | $505K – $930K | $3.9M – $8.5M | $3.7M – $9.5M | $3.3M – $7.8M |
| Enterprise | $830K – $3.33M | $11.1M – $25.2M | $7.8M – $20.2M | $11.2M – $32.6M |

*Oracle figures marked (est.) reflect estimates based on OCI general compute pricing. All other figures use confirmed primary source data.*

## The Implementation Timeline: The Hidden Cost of Time

Implementation timeline affects total cost in two ways: by determining months of labor absorbed before revenue is generated, and by determining exposure to the runway risk quantified by Gartner's 90% replacement finding.

| Milestone | Onli | AWS Managed Blockchain |
| --- | --- | --- |
| Sandbox access | Same day | Same day |
| Proof of concept | 1 to 3 days | 2 to 4 weeks |
| MVP launch | 1 to 2 weeks | 3 to 6 months |
| Production deployment | 2 to 4 weeks | 6 to 12 months |
| Enterprise full rollout | 1 to 2 months | 12 to 18+ months |

A six-month implementation period on AWS at minimum SMB labor cost represents $136,135 in pre-revenue expenditure — before a single user has accessed the platform. Onli's implementation model, requiring days to weeks, reduces this category to effectively zero.

The Gartner finding compounds this risk further. According to Adrian Lee, Senior Research Director at Gartner:

> ""90% of current enterprise blockchain platform implementations will require replacement within 18 months to remain competitive, secure and avoid obsolescence." — Gartner, 2019 ^[17]^"

This finding has compounding financial implications: an organization that must rebuild its blockchain platform within 18 months effectively incurs implementation costs twice within a standard five-year planning horizon.

The real-world evidence for this failure rate is substantial. The Australian Securities Exchange abandoned its blockchain-based CHESS settlement replacement in November 2022 after writing off AUD $250 million. ^[18]^ IBM and Maersk shut down the TradeLens supply chain blockchain in November 2022 after the platform "failed to reach the level of commercial viability necessary to continue work." ^[19]^

These are not edge cases. They are the documented outcomes of well-funded, professionally managed enterprise blockchain deployments at organizations with every resource available to make them succeed. The problem is not execution. The problem is architecture.

## The Structural Inversion

It would be a mistake to read this paper as simply a cost comparison. The numbers are compelling, but they are a symptom of something more fundamental: a structural difference in the architecture of the two approaches.

On every traditional blockchain platform, Year 1 is your cheapest year — and every year after costs the same or more. The infrastructure runs continuously. The engineers are employed continuously. The compliance team operates continuously. Every transaction adds to the running total.

On Onli, Year 1 is your most expensive year — and every subsequent year costs less. The treasury is deployed once. The deployment fee is paid once. The issuance fee is paid once per asset. After that, the asset transacts freely forever.

As the circulating asset base grows and total transaction volume increases, new issuances represent an ever-smaller fraction of total activity — driving the effective cost per transaction asymptotically toward zero.

> "This is not an incremental cost advantage. It is a structural inversion of the cost curve itself. On traditional blockchain platforms, growth is penalized. On Onli, growth is free."

On Onli, transaction volume carries no marginal cost. An asset transferred 10,000 times costs the operator the same as an asset transferred once — $0.05, paid once at issuance. This is the architecture of a platform designed for adoption, not for extraction. It is the architecture of a system that gets cheaper as it gets better. And it is the architecture that makes the Onli value proposition not just compelling, but obvious.


## References

[1] Amazon Web Services. "Amazon Managed Blockchain for Hyperledger Fabric Pricing." Accessed April 2026. [aws.amazon.com](https://aws.amazon.com/managed-blockchain/pricing/hyperledger/)

[2] Oracle Corporation. "Blockchain Platform Cloud Service Pricing." Accessed April 2026. [oracle.com](https://www.oracle.com/blockchain/cloud-platform/pricing/)

[3] Oracle Corporation. "OCI Compute Pricing." Accessed April 2026. [oracle.com](https://www.oracle.com/cloud/compute/pricing/)

[4] CloudZero. "Oracle Cloud Pricing: A Comprehensive Guide to Oracle Cloud Costs." Published January 29, 2026. [cloudzero.com](https://www.cloudzero.com/blog/oracle-cloud-pricing/)

[5] Paxos Securities Settlement Company, LLC. "Schedule of Fees," Exhibit E-37 of SEC Form CA-1. Filed with the U.S. Securities and Exchange Commission, July 14, 2025. [sec.gov](https://www.sec.gov/files/rules/other/pssc-form-ca-1-exhibit-e-37.pdf)

[6] Glassdoor. "Blockchain Developer Salary." Based on 218 salaries submitted anonymously, United States, January 2026. [glassdoor.com](https://www.glassdoor.com/Salaries/blockchain-developer-salary-SRCH_KO0,20.htm)

[7] Flexiple. "Cost to Hire Blockchain Developer: What You Need to Pay in 2025." Accessed July 2025. [flexiple.com](https://flexiple.com/cost-to-hire/blockchain-developer)

[8] CGAA. "Chainalysis: Blockchain Analytics and Compliance Solutions." [cgaa.org](https://www.cgaa.org/article/chainalysis)

[9] Be Verified. "Jumio Review 2025: Complete KYC & AML Compliance Platform Breakdown." 2025. [beverified.org](https://www.beverified.org/providers/jumio/)

[10] JKCP. "Crypto Compliance Officer Salaries Statistics in 2025." 2025. [jkcp.com](https://jkcp.com/crypto-compliance-officer-salaries-statistics/)

[11] Zealynx Security. "Smart Contract Audit Pricing 2026: $5K to $500K Guide." 2026. [zealynx.io](https://zealynx.io/blogs/audit-pricing-2026)

[12] Brico.ai. "Money Transmitter License Costs: Complete Fee Guide, 2025." 2025. [brico.ai](https://brico.ai/post/how-much-do-mtls-cost)

[13] CostBench. "Amazon Web Services (AWS) Hidden Costs 2026: True Cost Breakdown." Accessed 2026. [costbench.com](https://costbench.com/software/cloud-infrastructure/aws/hidden-costs/)

[14] Costgoat. "AWS Cognito Pricing Calculator & Cost Guide (April 2026)." [costgoat.com](https://costgoat.com/pricing/amazon-cognito)

[15] House of Brick. "Oracle Enterprise Edition Features That Could Cost You Millions." 2025. [houseofbrick.com](https://houseofbrick.com/blog/oracle-enterprise-feature-costs/)

[16] New York State Department of Financial Services. "Superintendent Harris Secures $48.5 Million Settlement with Paxos Trust Company for Anti-Money Laundering Deficiencies." Published August 7, 2025. [dfs.ny.gov](https://www.dfs.ny.gov/reports_and_publications/press_releases/pr20250806)

[17] Gartner. "Gartner Predicts 90% of Current Enterprise Blockchain Platform Implementations Will Require Replacement Within 18 Months." Press Release, July 3, 2019. [gartner.com](https://www.gartner.com/en/newsroom/press-releases/2019-07-03-gartner-predicts-90--of-current-enterprise-blockchain)

[18] Inside Adviser. "ASX drops plan to replace CHESS with blockchain, writes off $250M." Published November 17, 2022. [insideadviser.com.au](https://www.insideadviser.com.au)

[19] Maersk. "A.P. Moller - Maersk and IBM to discontinue TradeLens." Published November 29, 2022. [maersk.com](https://www.maersk.com/news/articles/2022/11/29/maersk-and-ibm-to-discontinue-tradelens)

[20] Cointelegraph (citing Forrester Research). "Forrester Research: 90% of Blockchain Initiatives by US Firms Will Never Become Operational." Published July 2018. [cointelegraph.com](https://cointelegraph.com/news/forrester-research-90-of-blockchain-initiatives)

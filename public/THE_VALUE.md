# The Value

> **A precise mathematical analysis of what Onli saves an SMB, a mid-market company, and an enterprise customer across all seven verticals and a five-year horizon.**

**The value of Onli to an enterprise customer is not incremental. It is the elimination of an entire category of cost that the legacy system treats as unavoidable.**

## Executive Summary

This paper quantifies that value in precise mathematical terms across three organizational tiers — SMB, Mid-Market, and Enterprise — and across all seven key verticals identified in The Market.

For each tier and vertical, we present the current annual cost of operating in the legacy system, the Onli cost across a five-year horizon, and the resulting savings.

> "Year 1 is the most expensive year Onli will ever have, and every subsequent year costs less. In the legacy system, the opposite is true."

## The Architecture of Cost

To understand the value of Onli, it is necessary to understand why the legacy system's costs are structured the way they are — and why they cannot be reduced without changing the underlying architecture.

In the custodial paradigm, every transaction requires a complex chain of events. The sender initiates a transfer request. The custodian verifies the sender's identity and available balance. The custodian updates the sender's ledger entry. Then, the custodian sends a message to the recipient's custodian, who verifies the message, updates the recipient's ledger entry, and reconciles the records.

Each of these steps carries a cost: compute, labor, compliance, and network fees. And because each step must occur for every transaction, the total cost scales linearly with transaction volume. This is not a problem that can be solved by optimizing the existing system. It is a problem that requires replacing the system.

Onli replaces the custodial ledger with computational possession. An Onli asset — a Genome — is not a record in a database. It is a tensor-based mathematical structure that constitutes actual digital property. When it transfers, it does not require a custodian to update a ledger. It evolves into its next valid state at the destination, while its prior state is provably destroyed. The transfer is atomic, instantaneous, and free.

The only cost in the Onli system is a one-time $0.05 activation fee paid when a new Genome is minted. After activation, the Genome transacts freely forever.

## The Cost Structure of Onli

| Component | Cost | Description |
| --- | --- | --- |
| Platform Subscription | $6,000/year | Annual fee for Onli Cloud platform. Fixed cost. Does not scale with volume. |
| Treasury Deployment | $50,000 (one-time) | Setup of the custom treasury with 1 billion Genomes. Paid only in Year 1. |
| Issuance Fee | $0.05 per asset | Paid once when a Genome is first minted. Free circulation thereafter, forever. |

The critical insight is that the issuance fee is not a transaction fee. It is the cost of creating a piece of digital property. Once created, that property can be transferred, traded, or redeemed an unlimited number of times without any additional cost. A Genome minted for $0.05 in Year 1 might facilitate 10,000 transactions over its lifetime, making its effective per-transaction cost $0.000005.

## The Issuance Ratio: How the Ecosystem Matures

Because the issuance fee is paid only once per Genome, the ratio of new issuances to total transactions decreases over time as the ecosystem accumulates circulating assets. We model this trajectory conservatively as follows:

| Ecosystem Stage | Issuance Ratio | Description |
| --- | --- | --- |
| Year 1 (Seeding) | 50% | Aggressively minting new Genomes to supply early adopters. Highest cost year. |
| Year 2 (Maturing) | 30% | Assets minted in Year 1 circulate freely. Costs drop significantly. |
| Year 3+ (Scale) | 10% | Vast majority of transactions are free circulation. Marginal cost approaches zero. |

This trajectory is the inverse of the legacy system, where costs remain flat or increase with volume regardless of ecosystem maturity. The longer an operator uses Onli, the cheaper it gets. The more successful the platform, the lower the cost per transaction.

## SMB
## Mid-Market
## Enterprise
### Tier Definitions

| Tier | Annual Revenue | Annual Transaction Volume |
| --- | --- | --- |
| SMB | Under $10M | 10,000 – 100,000 transactions/year |
| Mid-Market | $10M – $500M | 100,000 – 1,000,000 transactions/year |
| Enterprise | Over $500M | 1,000,000 – 10,000,000+ transactions/year |



Vertical 1
### Micro-Commodities — Gaming, Loyalty, Creator Economy

Legacy Friction: Platform Fees + Payment Processing + Admin Costs

The micro-commodity vertical is characterized by high transaction volume, low average transaction value, and enormous friction from platform fees and administrative costs.

For a gaming or loyalty platform, the primary legacy costs are platform distribution fees (15% to 30% of in-app purchase revenue ^[1]^), payment processing fees (2.9% + $0.30 per transaction ^[2]^), and loyalty program administration costs (0.5% to 2% of total revenue ^[3]^).

On Onli, the platform distribution fee is eliminated — the operator controls their own marketplace. The payment processing fee is eliminated — Genomes transfer at $0.00. The loyalty admin cost is eliminated — the Genome's state is mathematically verifiable without a database.

| Tier | Legacy Annual Cost | Onli Year 1 Cost | Onli Year 3+ Cost | 5-Year Savings |
| --- | --- | --- | --- | --- |
| SMB (10K tx/yr) | $19,950 | $56,250 | $6,050 | 19.1% |
| Mid-Market (500K tx/yr) | $997,500 | $68,500 | $8,500 | 97.7% |
| Enterprise (5M tx/yr) | $9,975,000 | $181,000 | $31,000 | 99.2% |

Note: At SMB scale with low transaction values, the one-time $50,000 deployment fee dominates Year 1, making the first year more expensive than the legacy cost. The value of Onli at SMB scale increases dramatically as transaction values rise. By Year 2, the SMB is saving money. By Year 3+, the annual cost is $6,050 vs. $19,950 — a 70% annual savings.



Vertical 2
### Trade Finance

Legacy Friction: Letter of Credit Fees + Document Handling + Amendment Charges

The trade finance vertical is characterized by high transaction values, complex documentary processes, and enormous friction from letter of credit fees and processing costs.

Letter of credit fees typically range from 0.5% to 3% of the transaction value, with additional charges for amendments and document handling. ^[4]^ Supply chain finance platforms charge 1% to 2% of the financed amount annually. ^[5]^

On Onli, each trade instrument is a Genome minted for $0.05. The letter of credit fee is eliminated. The document handling cost is eliminated — contextual data is embedded in the Genome. The amendment cost is eliminated — Genome state changes are free.

| Tier | Legacy Annual Cost | Onli Year 1 Cost | Onli Year 3+ Cost | 5-Year Savings |
| --- | --- | --- | --- | --- |
| SMB (100 instruments/yr) | $85,000 | $56,002 | $6,000 | 81.2% |
| Mid-Market (1K instruments/yr) | $1,550,000 | $56,025 | $6,005 | 99.0% |
| Enterprise (10K instruments/yr) | $50,500,000 | $56,250 | $6,050 | 99.97% |



Vertical 3
### Cross-Border Payments

Legacy Friction: Wire Fees + FX Spreads + Correspondent Banking Chains

The cross-border payment vertical is characterized by high transaction values, multi-step correspondent banking chains, and compounding FX conversion costs.

Wire transfer fees average $25 to $50 per transaction. ^[6]^ FX conversion spreads average 1% to 3% of transaction value. ^[7]^ Compliance and sanctions screening adds $0.50 to $2.00 per transaction. ^[8]^

On Onli, wire transfer fees are eliminated — Genomes transfer peer-to-peer. FX conversion costs are eliminated — value is denominated in the Genome. Compliance screening is embedded in the Onli ID system at no additional per-transaction cost.

| Tier | Legacy Annual Cost | Onli Year 1 Cost | Onli Year 3+ Cost | 5-Year Savings |
| --- | --- | --- | --- | --- |
| SMB (1K payments/yr) | $136,250 | $56,025 | $6,005 | 88.2% |
| Mid-Market (10K payments/yr) | $2,362,500 | $56,250 | $6,050 | 99.3% |
| Enterprise (100K payments/yr) | $78,625,000 | $58,500 | $6,500 | 99.98% |



Vertical 4
### Corporate Treasury

Legacy Friction: TMS Licensing + Intercompany Wire Fees + Banking Relationship Costs

The corporate treasury vertical is characterized by high-volume intercompany transfers, TMS licensing costs, and the operational burden of managing liquidity across multiple banking relationships.

Treasury Management System (TMS) licensing costs range from $150,000 to $500,000 per year for enterprise deployments. ^[9]^ Intercompany wire transfer fees average $35 per transaction. Banking relationship maintenance costs average $50,000 to $200,000 per year for mid-market to enterprise companies.

On Onli, wire transfer fees are eliminated. TMS licensing is replaced by the Onli Cloud platform at $6,000 per year. Banking relationship costs are reduced to a minimum as the treasury operates primarily on the Onli network.

| Tier | Legacy Annual Cost | Onli Year 1 Cost | Onli Year 3+ Cost | 5-Year Savings |
| --- | --- | --- | --- | --- |
| SMB (500 transfers/yr) | $34,500 | $56,012 | $6,002 | 53.6% |
| Mid-Market (5K transfers/yr) | $450,000 | $56,125 | $6,025 | 96.4% |
| Enterprise (50K transfers/yr) | $2,350,000 | $57,250 | $6,250 | 99.3% |



Vertical 5
### Tokenized Real-World Assets (RWA)

Legacy Friction: Legal Structuring + Custodianship Fees + Transfer Agent Fees

The RWA tokenization vertical is characterized by high asset values, illiquidity premiums, and significant administrative costs for custodianship, legal documentation, and transfer agent services.

Tokenizing a real-world asset through traditional channels requires legal structuring ($25,000 to $100,000 per asset class), custodianship fees (0.15% to 0.50% of AUM annually), and transfer agent fees ($5,000 to $50,000 per year). ^[10]^

On Onli, each tokenized asset is a Genome minted for $0.05. The custodianship fee is eliminated — the Genome *is* the asset, not a record of the asset. Legal structuring costs are reduced dramatically as the Genome's state is mathematically verifiable without additional legal documentation.

| Tier | Legacy Annual Cost | Onli Year 1 Cost | Onli Year 3+ Cost | 5-Year Savings |
| --- | --- | --- | --- | --- |
| SMB (10 assets/yr) | $35,500 | $56,000 | $6,000 | 54.9% |
| Mid-Market (100 assets/yr) | $375,000 | $56,002 | $6,000 | 95.7% |
| Enterprise (1K assets/yr) | $10,500,000 | $56,025 | $6,005 | 99.85% |



Vertical 6
### OTC Derivatives and Structured Instruments

Legacy Friction: Clearing Fees + Collateral Management + Margin Posting Costs

The OTC derivatives vertical is the largest notional market in the world, with $846 trillion in outstanding contracts as of end-2024. ^[11]^ The friction is the cost of collateral management, clearing, and margin posting required to manage counterparty risk.

Clearing fees range from 0.01% to 0.05% of notional value. The operational cost of managing collateral — the systems, the staff, the reconciliation — is estimated at 0.5% to 1.0% of the collateral amount. ^[12]^

On Onli, each derivative contract is a Genome minted for $0.05. Because Genome transfer is instantaneous and atomic, counterparty risk is dramatically reduced — settlement occurs at the moment of transfer, not days later. Clearing fees and collateral management costs are eliminated.

| Tier | Legacy Annual Cost | Onli Year 1 Cost | Onli Year 3+ Cost | 5-Year Savings |
| --- | --- | --- | --- | --- |
| SMB (500 contracts/yr) | $35,000 | $56,012 | $6,002 | 54.3% |
| Mid-Market (5K contracts/yr) | $700,000 | $56,125 | $6,025 | 97.7% |
| Enterprise (50K contracts/yr) | $22,000,000 | $57,250 | $6,250 | 99.6% |



Vertical 7
### Digital Asset Infrastructure

Legacy Friction: Engineering Labor + Cloud Compute + Smart Contract Audit Fees

The blockchain infrastructure vertical is characterized by high engineering labor costs, expensive cloud compute requirements, and smart contract audit fees.

The average enterprise blockchain implementation costs $2 million to $5 million in Year 1 alone, driven primarily by the engineering labor required to build and deploy smart contracts, and the infrastructure required to maintain always-on nodes. ^[13]^

On Onli, the engineering labor is eliminated — the platform provides a no-code/low-code environment for asset creation. The cloud compute cost is eliminated — Onli nodes do not require continuous processing to maintain a global ledger.

| Tier | Legacy Annual Cost | Onli Year 1 Cost | Onli Year 3+ Cost | 5-Year Savings |
| --- | --- | --- | --- | --- |
| SMB (1 app/yr) | $250,000 | $56,002 | $6,000 | 93.6% |
| Mid-Market (5 apps/yr) | $1,500,000 | $56,012 | $6,002 | 98.9% |
| Enterprise (20 apps/yr) | $5,000,000 | $56,050 | $6,010 | 99.6% |



## Conclusion: The Diverging Trajectories

The data reveals a consistent pattern across every vertical and every organizational tier. In the legacy system, scale is penalized. A mid-market company that grows its transaction volume 10x will see its friction costs grow 10x. The cost curve is linear and inescapable.

> "Onli inverts this reality. Because the core infrastructure cost is fixed, and the marginal cost of a transaction approaches zero as the ecosystem matures, scale is rewarded. A company that grows its transaction volume 10x on Onli will see its effective cost per transaction plummet."

The following table summarizes the 5-Year Total Cost of Ownership for a Mid-Market enterprise across all seven verticals:

| Vertical (Mid-Market) | 5-Year Legacy TCO | 5-Year Onli TCO | Total Savings |
| --- | --- | --- | --- |
| Micro-Commodities | $4,987,500 | $112,500 | 97.7% |
| Trade Finance | $7,750,000 | $80,075 | 99.0% |
| Cross-Border Payments | $11,812,500 | $80,700 | 99.3% |
| Corporate Treasury | $2,250,000 | $80,375 | 96.4% |
| Tokenized RWA | $1,875,000 | $80,007 | 95.7% |
| OTC Derivatives | $3,500,000 | $80,375 | 97.7% |
| Digital Asset Infrastructure | $7,500,000 | $80,037 | 98.9% |

The value of Onli is the difference between these two trajectories. It is the value of escaping the custodial ledger.


## References

[1] Apple App Store Guidelines. [developer.apple.com](https://developer.apple.com/app-store/review/guidelines/)

[2] Stripe Pricing. [stripe.com/pricing](https://stripe.com/pricing)

[3] Industry estimate based on Bond Brand Loyalty program cost benchmarking data, 2023. [bondbrandloyalty.com](https://bondbrandloyalty.com)

[4] International Chamber of Commerce (ICC). "ICC Trade Register Report." 2023. [iccwbo.org](https://iccwbo.org/publication/icc-trade-register-report/)

[5] World Supply Chain Finance Report 2024. BCR Publishing. [coastlinesolutions.com](https://www.coastlinesolutions.com/tfe/pdf/WSCFR_2024.pdf)

[6] Routefusion. "Why Local Payment Networks Beat SWIFT on Cost." April 2025. [routefusion.com](https://routefusion.com/blog/why-local-payment-networks-beat-swift)

[7] McKinsey & Company. "The 2024 McKinsey Global Payments Report." September 2024. [mckinsey.com](https://www.mckinsey.com/industries/financial-services/our-insights/global-payments-in-2024-simpler-interfaces-complex-reality)

[8] The Payments Association. "Cross-Border Payments 2026: Friction and Reform." 2026. [thepaymentsassociation.org](https://thepaymentsassociation.org/article/cross-border-payments-2026-friction-reform/)

[9] Kyriba. "Enterprise Treasury Management Pricing." [kyriba.com](https://www.kyriba.com)

[10] McKinsey & Company. "From Ripples to Waves: The Transformational Power of Tokenizing Assets." June 2023. [mckinsey.com](https://www.mckinsey.com/industries/financial-services/our-insights/from-ripples-to-waves-the-transformational-power-of-tokenizing-assets)

[11] Bank for International Settlements (BIS). "Key Trends in the Size and Composition of OTC Derivatives Markets in the Second Half of 2024." July 2025. [bis.org](https://www.bis.org/publ/otc_hy2411.htm)

[12] International Swaps and Derivatives Association (ISDA). "ISDA Margin Survey Year-end 2024." May 2025. [isda.org](https://www.isda.org)

[13] MarketsandMarkets. "Blockchain Technology Market." 2024. [marketsandmarkets.com](https://www.marketsandmarkets.com/PressReleases/blockchain-technology.asp)

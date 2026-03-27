# Onli Use Case Template and Criteria
## A Comprehensive Guide for Developing New Onli Use Cases

**Author:** Manus AI  
**Date:** November 18, 2025  
**Version:** 1.0

---

## Executive Summary

This document provides a comprehensive template and criteria framework for developing new Onli use cases. It consolidates all architectural context, genome denomination guidelines, revenue model projection formulas, and structural requirements necessary to create accurate, compelling use case analyses for Onli's actual-possession technology platform.

The Onli Protocol represents a fundamental departure from traditional blockchain and banking systems by enabling provably unique digital objects (genomes) that can be possessed, transferred, and verified with millisecond settlement times and minimal cost. Understanding how to properly structure use cases around this technology requires careful attention to genome denomination, cost modeling, and comparative analysis against both blockchain platforms and traditional financial services.

---

## Part 1: Understanding Onli's Core Architecture

### The Fundamental Principle: Actual Possession vs. Ledger Models

Onli operates on a fundamentally different paradigm than both traditional banking and blockchain systems. Rather than maintaining a ledger of account balances or transaction histories, Onli enables **actual possession** of unique digital objects called genomes. This distinction is critical for use case development.

**Key Architectural Principles:**

The Onli Protocol is built on three core primitives that distinguish it from all other digital asset platforms. First, **provably unique genomes** serve as the fundamental unit of value, where each genome is cryptographically unique and cannot be duplicated or forged. Second, **possessable genes** function as identity credentials that enable authentication without passwords, as possession of the gene itself proves identity. Third, **secure vaults** act as personal containers for genomes and genes, providing a unified storage environment that combines mobile and cloud functionality.

The authentication model in Onli eliminates the need for passwords entirely. When a user interacts with an Onli-enabled service, authentication occurs through proving possession of a unique gene within their secure vault, typically using device biometrics. The service never sees the gene itself, only a cryptographically signed response that proves legitimate ownership. This approach is architecturally superior to password-based systems because it is phishing-resistant, eliminates server-side credential storage, and removes the risk of password reuse across services.

Settlement occurs in milliseconds rather than the days required by traditional banking or the minutes to hours common in blockchain systems. This speed is possible because Onli does not rely on distributed consensus mechanisms or correspondent banking networks. Transfers represent actual movement of unique objects between vaults, not updates to a shared ledger.

### Why This Matters for Use Case Development

Understanding these architectural principles is essential because they directly determine the value proposition in any use case. The cost structure, speed advantages, and security benefits all flow from this fundamental design. Use cases that fail to articulate this distinction will not effectively communicate Onli's competitive advantage.

---

## Part 2: The Critical Discovery - Asset-Based Pricing Model

### The Fundamental Pricing Insight

The most critical insight for accurate use case development is that **Onli charges per genome (asset), not per dollar volume**. This distinction fundamentally changes the economics compared to traditional percentage-based fee structures.

**Onli Pricing Structure:**

The cost model consists of three components. The developer access fee is $6,000 annually, providing access to the Onli platform for custom genome creation and appliance development. The treasury minting fee is $50,000 per $1 billion in asset value, charged one-time when initially creating the genome treasury that backs issued genomes. The issuance fee is $0.01 per genome, charged one-time when each genome is minted and issued to a holder.

**Critical Formula:**

```
Number of Genomes = Total Dollar Volume ÷ Genome Denomination
Onli Issuance Cost = Number of Genomes × $0.01
```

This formula is the foundation of all cost calculations in Onli use cases. The genome denomination choice directly determines the number of genomes required, which in turn determines the total cost.

### Why Denomination Matters: Real Examples

The impact of genome denomination can be dramatic. Consider three scenarios with the same total value but different denominations.

**Scenario A: Stablecoin Model ($1 per genome)**
- Total volume: $500 million annually
- Genome denomination: $1
- Number of genomes: 500 million
- Issuance cost: $5 million annually
- Cost as percentage: 1.0%

**Scenario B: Invoice Model ($500 per genome)**
- Total volume: $90.3 billion annually
- Genome denomination: $500
- Number of genomes: 180.6 million
- Issuance cost: $1.806 million annually
- Cost as percentage: 0.002%

**Scenario C: Securities Model ($100,000 per genome)**
- Total volume: $5 billion in assets
- Genome denomination: $100,000
- Number of genomes: 50,000
- Issuance cost: $500 annually
- Cost as percentage: 0.00001%

These examples demonstrate that higher denominations dramatically reduce costs as a percentage of value. This is counterintuitive compared to traditional fee structures where costs scale with dollar volume.

---

## Part 3: Genome Denomination Guidelines

### The Denomination Decision Framework

Choosing the appropriate genome denomination is the most important design decision in any Onli use case. The denomination should reflect the natural unit of value in the specific industry or use case.

**Decision Criteria:**

When determining genome denomination, consider the typical transaction size in the industry. If most transactions involve amounts between $100 and $1,000, a denomination in that range creates intuitive whole-number genome transfers. Evaluate the asset backing structure—if genomes represent fractional ownership of physical assets, the denomination should align with natural ownership units. Consider the transfer frequency, as high-frequency microtransactions may benefit from lower denominations despite higher issuance costs, while infrequent high-value transfers favor higher denominations. Finally, assess the psychological perception, since denominations that create whole numbers in typical transactions feel more natural to users than those requiring many decimal places.

**Industry-Specific Denomination Patterns:**

Different industries naturally align with different denomination structures. In manufacturing and supply chain contexts, invoice-level denominations typically range from $100 to $1,000, matching average purchase order sizes. This creates genomes that represent individual invoices or shipments. For capital markets and securities, share-equivalent denominations range from $100 to $100,000, representing fractional ownership in funds, companies, or asset pools. In agricultural and commodity trading, pallet or container-level denominations range from $1 to $100, representing physical units of goods like pallets, containers, or standardized lots. For real estate applications, fractional ownership denominations range from $1,000 to $100,000, representing shares in property ownership or REIT-like structures. In payment and remittance scenarios, stablecoin-equivalent denominations of $1 to $10 create digital currency substitutes for everyday transactions.

### Common Denomination Mistakes to Avoid

Several pitfalls can undermine use case economics. Using dollar-volume-based thinking by calculating costs as a percentage of total value without considering genome count leads to incorrect projections. Choosing denominations that are too low results in unnecessarily high issuance costs, as seen when using $1 genomes for $500 average transactions. Selecting denominations that are too high creates user confusion, such as requiring users to transact in 0.00234 genome units. Failing to state the denomination assumption explicitly makes it impossible for readers to verify calculations or understand the economic model.

---

## Part 4: Revenue Model Projection Formulas

### The Core Revenue Formula

Every use case must include a clear revenue model that shows how Onli costs translate to savings or revenue generation for the customer.

**Basic Savings Formula:**

```
Annual Savings = Current System Costs - Onli Costs
Payback Period = (Developer Fee + Treasury Fee + Issuance Costs) ÷ Annual Savings
ROI Percentage = (Annual Savings ÷ Total Onli Costs) × 100
```

**Component Breakdown:**

Current system costs must account for all relevant expenses in the existing process. For international payments, include sending bank fees ($25-$50), receiving bank fees ($10-$20), intermediary bank fees ($10-$50 per transaction), and currency conversion markups (1-3% of value). For blockchain alternatives, include gas fees (variable by network), smart contract deployment costs ($200-$2,000), node infrastructure costs (if applicable), and security audit costs ($20,000-$100,000). For trade finance, include letter of credit issuance fees (0.5-2% of value), amendment fees ($75-$150 per change), and correspondent banking fees (variable). For custody services, include basis points on assets under management (2-10 bps annually) and per-transaction settlement fees.

### Advanced Revenue Models

Beyond simple cost savings, Onli enables several revenue generation models. Float revenue can be earned on the difference between genome issuance and redemption, similar to how payment processors earn interest on funds in transit. Premium services can be offered for instant settlement guarantees, enhanced analytics, or white-label solutions. Network effects create value as more participants join the ecosystem, enabling marketplace dynamics and liquidity provision. Reduced spoilage and delays in supply chain applications translate directly to preserved product value and faster working capital cycles.

**Revenue Projection Template:**

```
Year 1 Revenue Model:
- Cost Savings: $X million (vs. current system)
- Float Revenue: $Y million (on $Z billion in circulation)
- Premium Services: $W million (from N enterprise customers)
- Total Year 1 Value: $X + $Y + $W million

Onli Costs Year 1:
- Developer Fee: $6,000
- Treasury Fee: $50,000 per $1B (one-time)
- Issuance Costs: (Genome Count × $0.01)
- Total Onli Costs: $A

Net Benefit Year 1: (Total Value - Total Costs)
Payback Period: (Total Costs ÷ Annual Savings) = B days/months
```

---

## Part 5: Use Case Structure Template

### Required Sections for Every Use Case

A complete Onli use case follows a consistent structure that enables comparison across industries and use cases.

**1. Executive Summary (200-300 words)**

The executive summary should open with a compelling "What if" question that frames the problem and solution. State the industry and specific pain point being addressed, provide the total dollar volume involved annually, present the key cost savings metric (percentage and absolute dollars), and cite the payback period in days or months to demonstrate rapid ROI.

**2. The Challenge (400-600 words)**

This section establishes the current state and its problems. Describe the existing process in detail, including all parties involved and their roles. Quantify current costs with specific dollar amounts and fee structures, citing sources for all figures. Identify pain points such as delays (measured in days), manual reconciliation requirements, intermediary dependencies, and fraud or error risks. Use real-world examples or case studies to illustrate the problem's impact on actual businesses.

**3. The Onli Solution (500-700 words)**

Here you explain how Onli addresses each pain point. Define the genome clearly, specifying its denomination and what it represents (invoice, share, pallet, etc.). Describe the issuance process, explaining who creates genomes, what backs them, and the verification mechanism. Detail the transfer process, showing how genomes move between parties and how settlement occurs. Explain the redemption or burning process if applicable. Present the cost calculation using the correct formula: genomes = volume ÷ denomination, cost = genomes × $0.01. Include a worked example with realistic numbers.

**4. Cost Analysis (300-500 words)**

This section provides detailed financial comparison. Present current system costs broken down by component (fees, delays, errors, etc.). Show Onli costs broken down by component (developer fee, treasury fee, issuance costs). Create a side-by-side comparison table with annual costs for both systems. Calculate the percentage savings and absolute dollar savings. Determine the payback period in days, weeks, or months. State all assumptions explicitly, including transaction volume, average transaction size, and genome denomination.

**5. Implementation Approach (200-400 words)**

Outline a realistic path from pilot to full-scale deployment. Describe the pilot phase with specific scope (e.g., "one supplier, $10M in transactions over 3 months"). Project the scaling timeline to full deployment. Identify integration requirements with existing systems. Note any regulatory or compliance considerations. Estimate the timeline from decision to full implementation.

**6. Conclusion (150-250 words)**

Summarize the key value proposition in one sentence. Restate the primary financial benefit with specific numbers. Highlight the competitive advantage Onli provides. Include a call to action for the reader.

### Supporting Elements

Every use case should include several supporting elements. An interactive calculator allows readers to input their own parameters and see customized results. A comparison table shows Onli versus blockchain platforms versus traditional banking across multiple dimensions. Visual diagrams illustrate the genome lifecycle from issuance through transfer to redemption. Real-world analogies help non-technical readers understand the concept, such as "Onli genomes work like digital bearer bonds" or "Think of it as a digital bill of lading."

---

## Part 6: Validation Checklist

### Pre-Publication Validation

Before finalizing any use case, verify every item on this checklist.

**Genome Design Validation:**

Confirm that genome denomination is clearly defined and justified based on industry norms. Verify that average transaction size is stated as an explicit assumption. Ensure the backing mechanism is explained (what gives the genome its value). Check that the transfer process is described in sufficient detail for readers to understand the workflow.

**Cost Calculation Validation:**

Verify that genome count is calculated correctly using the formula: volume ÷ denomination. Confirm that Onli cost uses the correct formula: genome count × $0.01. Check that all current system costs are cited with sources. Ensure that comparison includes blockchain AND traditional methods, not just one or the other. Verify that all assumptions are stated explicitly and prominently.

**Revenue Model Validation:**

Confirm that the savings calculation is mathematically correct and traceable. Verify that the payback period is realistic and calculated correctly. Check that the ROI percentage is reasonable (typically 100%+ for viable use cases). Ensure that revenue projections beyond cost savings are justified with clear logic.

**Content Quality Validation:**

Verify that all numbers are cited or derived from stated assumptions. Confirm that the calculator implements the same logic as the whitepaper. Check that mobile and desktop experiences are both functional. Ensure that all links point to correct routes and destinations. Verify that domain references use onli.one (not onli.com). Confirm that transaction speeds are stated as milliseconds (not seconds or minutes).

---

## Part 7: Comparative Analysis Requirements

### Blockchain Platform Comparison

Every use case must compare Onli to at least three blockchain platforms across multiple dimensions.

**Required Comparison Platforms:**

The three primary platforms for comparison are Ethereum (the dominant smart contract platform), Polygon (a leading Layer 2 solution), and Solana (a high-performance alternative). For specialized use cases, consider Hyperledger Fabric for enterprise permissioned blockchains or Avalanche for subnet-based architectures.

**Comparison Dimensions:**

The comparison must cover six key dimensions. For subscription and access fees, note that Onli charges $6,000 annually for developer access, while blockchain platforms typically have no subscription but require infrastructure costs. Setup and deployment costs for Onli include a $50,000 per $1B treasury fee (one-time), while Ethereum smart contract deployment costs $200-$2,000, Hyperledger Fabric development costs $30,000-$130,000, and Solana token creation costs $50-$500.

Transaction costs reveal stark differences. Onli charges $0.01 per genome issuance (one-time, zero for subsequent transfers), while Ethereum charges $0.38-$0.44 per transaction (ongoing), Polygon charges $0.0005-$0.01 per transaction (ongoing), and Solana charges $0.00025 per transaction (ongoing). Ongoing maintenance costs for Onli are zero after issuance, while Ethereum has variable gas fees, Polygon has minimal ongoing fees, Solana has minimal ongoing fees, and Hyperledger Fabric requires $100-$1,000+ monthly infrastructure costs.

Compliance and regulatory considerations show that Onli has built-in identity verification through genes, while blockchain platforms require separate KYC/AML processes costing $10,000-$50,000 annually. Go-to-market costs for Onli involve integration with existing systems, while blockchain platforms require developer education, node infrastructure, and often multi-chain strategies.

### Traditional Banking Comparison

Every use case must also compare Onli to relevant traditional banking services.

**Required Banking Services:**

The comparison should cover international wire transfers (SWIFT network), letters of credit and trade finance, custodial and settlement services, and correspondent banking relationships.

**Comparison Dimensions:**

For international wire transfers, traditional banking charges $25-$50 sending fees, $10-$20 receiving fees, $10-$50 intermediary bank fees (per bank), and 1-3% currency conversion markup, with settlement taking 1-5 business days. Onli charges $0.01 per genome issuance (one-time) with millisecond settlement.

Trade finance costs in traditional banking include 0.5-2% of value for letter of credit issuance, $75-$150 per amendment, and weeks for processing. Onli provides instant verification and transfer with only the one-time issuance cost.

Custody services in traditional banking charge 2-10 basis points on AUM annually plus per-transaction fees, while Onli charges only the initial issuance cost with no ongoing custody fees.

---

## Part 8: Common Pitfalls and How to Avoid Them

### Calculation Errors

The most common error is using dollar volume instead of genome count in cost calculations. Always calculate genome count first, then multiply by $0.01. Never calculate Onli costs as a percentage of dollar volume without first determining genome count.

Another frequent mistake is forgetting to state the average transaction size assumption. This is critical because it determines the genome denomination choice and affects the total genome count calculation.

A third error is using the outdated "$0.05 per API call" pricing instead of the correct "$0.01 per genome" model. The issuance fee is per genome, not per API call or transaction.

### Denomination Errors

Choosing a denomination that is too low for the use case results in unnecessarily high issuance costs. For example, using $1 genomes for a supply chain where average invoice size is $500 creates 500 times more genomes than necessary.

Conversely, choosing a denomination that is too high creates user confusion. If users must regularly transact in fractional genomes (0.00234 genomes), the denomination is too high for that use case.

Failing to justify the denomination choice leaves readers wondering why that specific value was selected. Always explain the reasoning based on industry norms, typical transaction sizes, or asset backing structure.

### Comparison Errors

Comparing only to blockchain OR traditional banking, but not both, provides an incomplete picture. Onli's value proposition includes elements of both, so both comparisons are necessary.

Using outdated pricing data for competitors undermines credibility. Always cite sources and dates for all competitive pricing information.

Failing to account for hidden costs in traditional systems (intermediary fees, currency conversion markups, delay costs) makes the comparison less compelling. These hidden costs are often the largest component of traditional system expenses.

### Content Errors

Using absolute language like "perfect," "completely bug-free," or "absolutely beautiful" sets unrealistic expectations. Be specific and honest about what is implemented and what requires further validation.

Failing to test all navigation links before publication creates a poor user experience. Every "Read Whitepaper" and "Calculate Savings" link must work correctly.

Using onli.com instead of onli.one for domain references is incorrect. The canonical domain is onli.one.

Stating transaction speeds in seconds or minutes instead of milliseconds understates Onli's performance advantage. Settlement occurs in milliseconds, not seconds.

---

## Part 9: Example Use Case Archetypes

### Archetype 1: Manufacturing and Supply Chain

**Typical Characteristics:**

This archetype involves business-to-business transactions with invoice-level denominations ranging from $100 to $1,000. Transaction volumes are high-frequency with thousands to millions of transactions annually. The primary pain point is payment delays and reconciliation complexity. Key benefits include working capital improvement and reduced fraud.

**Genome Design Pattern:**

Each genome represents a single invoice or purchase order. Denomination matches average invoice size (e.g., $500). Backing comes from the goods or services represented by the invoice. Transfer occurs at shipment, delivery, or payment milestones.

**Example: GlobalTech Electronics**

GlobalTech operates a global supply chain with $90.3 billion in annual supplier payments. Using $500 OnliCredits (genome denomination), they require 180.6 million genomes annually. At $0.01 per genome, issuance costs are $1.806 million annually. Compared to traditional wire transfer costs of $45-$120 per transaction, savings exceed $8 billion annually. Payback period is measured in hours.

### Archetype 2: Capital Markets and Family Offices

**Typical Characteristics:**

This archetype involves high-value, low-frequency transactions with security-level denominations ranging from $10,000 to $100,000. Transaction volumes are moderate with hundreds to thousands of transactions annually. The primary pain point is illiquidity and high custody costs. Key benefits include fractional ownership and instant settlement.

**Genome Design Pattern:**

Each genome represents fractional ownership in a fund, company, or asset pool. Denomination matches natural ownership units (e.g., $100,000 per genome = 0.01% of a $1B fund). Backing comes from the underlying assets in the portfolio. Transfer enables secondary market liquidity without traditional intermediaries.

**Example: Heritage Capital Family Office**

Heritage Capital manages $5 billion in assets and seeks to create liquidity for limited partner interests. Using $100,000 Heritage Liquidity Coins (HLC), they require 50,000 genomes. At $0.01 per genome, issuance costs are $500 total. Compared to traditional custody fees of 2-10 basis points ($1-5 million annually), savings are dramatic. The secondary market enables instant settlement versus weeks or months for traditional private equity transfers.

### Archetype 3: Agricultural and Trade Finance

**Typical Characteristics:**

This archetype involves physical goods tracking with pallet or container-level denominations ranging from $1 to $100. Transaction volumes are very high-frequency with millions of transactions annually. The primary pain point is trust and verification in international trade. Key benefits include reduced fraud and eliminated letter of credit costs.

**Genome Design Pattern:**

Each genome represents a physical unit of goods (pallet, container, shipment). Denomination matches the value of the physical unit (e.g., $1 per genome for a $1 pallet of produce). Backing comes from the physical goods themselves. Transfer occurs as goods move through the supply chain from farm to distributor to retailer.

**Example: Acme Foods Exotic Produce**

Acme Foods imports $250 million in exotic produce annually. Using $1 Acme Credits (genome denomination), they require 250 million genomes annually. At $0.01 per genome, issuance costs are $2.5 million annually. Compared to letter of credit fees (0.5-2% = $1.25-5 million), wire transfer fees, and trust deposit requirements, Onli provides significant savings. The real benefit is eliminating trust deposits entirely, freeing up working capital.

---

## Part 10: Technical Architecture Context

### Core Onli Concepts

Understanding these technical concepts is essential for accurate use case development.

**Genomes** are provably unique digital objects that serve as the fundamental unit of value in the Onli ecosystem. Each genome is cryptographically unique and cannot be duplicated. Genomes can represent currency, assets, credentials, or any other form of value. They exist in a binary state: possessed by exactly one vault at any given time, or not possessed by anyone (burned/destroyed).

**Genes** are a special type of genome that represents verified identity. Each person has exactly one gene, which is created through a rigorous identity verification process. The gene serves as the authentication credential for all Onli interactions. Possession of the gene proves identity without requiring passwords or other shared secrets.

**Vaults** are secure containers for genomes and genes. Each user has exactly one vault that combines mobile and cloud functionality. The vault uses secure enclave technology on mobile devices and encrypted cloud storage for backup. Vaults are the only place where genomes can exist—there is no "in transit" state.

**Appliances** are applications built on the Onli protocol. They interact with vaults to request genome transfers, verify identities, and perform other operations. Appliances never directly access the contents of vaults; all interactions are mediated by the vault owner's explicit approval.

### Why This Architecture Matters

This architecture creates several fundamental advantages over both blockchain and traditional banking systems.

**Instant Settlement:** Because transfers involve moving actual objects between vaults rather than updating a shared ledger, settlement is instantaneous. There is no consensus mechanism delay (as in blockchain) or correspondent banking chain (as in traditional banking).

**Zero Transaction Costs:** After the initial issuance cost of $0.01 per genome, all subsequent transfers are free. This is possible because there are no miners to compensate (as in blockchain) and no intermediary banks to pay (as in traditional banking).

**Built-in Identity:** Because genes are verified identities, there is no separation between authentication and identity verification. This eliminates the need for separate KYC processes and reduces fraud risk.

**True Ownership:** Users possess their genomes in the same way they possess physical objects. The platform provider cannot freeze, reverse, or confiscate genomes without the user's cooperation. This is fundamentally different from account-based systems where the provider has ultimate control.

---

## Part 11: Revenue Model Deep Dive

### Understanding the Complete Economic Picture

A comprehensive use case must account for all economic factors, not just direct cost savings.

**Direct Cost Savings:**

These are the most obvious and easiest to quantify. Eliminated intermediary fees include wire transfer fees, correspondent banking fees, and payment processor fees. Reduced reconciliation costs come from automated settlement and cryptographic verification. Faster settlement provides working capital benefits by reducing the time between payment and availability of funds. Lower compliance overhead results from built-in identity verification eliminating separate KYC processes.

**Indirect Value Creation:**

These benefits are harder to quantify but often more significant. Reduced fraud and errors come from cryptographic verification and elimination of manual processes. Improved customer experience results from instant settlement and simplified workflows. New business models become possible, such as fractional ownership markets that were previously impractical. Network effects create value as more participants join the ecosystem, enabling new forms of liquidity and price discovery.

**Revenue Generation Opportunities:**

Beyond cost savings, Onli enables new revenue streams. Float revenue can be earned on the difference between genome issuance and redemption, similar to how payment processors earn interest on funds in transit. Premium services can be offered for instant settlement guarantees, enhanced analytics, white-label solutions, or priority support. Marketplace fees can be charged for facilitating secondary market transactions between genome holders. Data insights can be monetized (with appropriate privacy protections) by providing anonymized analytics on transaction patterns and market trends.

### Calculating Total Economic Impact

The complete economic impact formula accounts for all these factors:

```
Total Annual Value = 
  Direct Cost Savings +
  Indirect Value Creation +
  New Revenue Opportunities -
  Onli Costs

Where:
  Direct Cost Savings = (Current System Costs - Onli Costs)
  Indirect Value Creation = (Fraud Reduction + Working Capital Benefit + Time Savings)
  New Revenue Opportunities = (Float + Premium Services + Marketplace Fees)
  Onli Costs = (Developer Fee + Treasury Fee + Issuance Costs)
```

For a complete use case, provide conservative, moderate, and aggressive scenarios for each component. This gives readers a range of potential outcomes rather than a single point estimate.

---

## Part 12: Implementation and Integration

### Realistic Implementation Timelines

Use cases must include realistic timelines from decision to full deployment.

**Phase 1: Pilot (3-6 months)**

The pilot phase involves limited scope with one partner or business unit, typically $10-50 million in transaction volume. Key activities include genome design and denomination selection, vault setup for pilot participants, appliance integration with existing systems, and initial transaction testing. Success criteria should include technical validation (transactions complete successfully), user acceptance (participants find the system usable), and economic validation (cost savings materialize as projected).

**Phase 2: Scaling (6-12 months)**

The scaling phase expands to additional partners or business units, typically 10-50% of total volume. Key activities include onboarding additional participants, integrating with additional systems, refining processes based on pilot learnings, and building operational procedures. Success criteria include operational stability (system handles increased volume), economic validation at scale (savings scale linearly with volume), and user adoption (participants actively use the system).

**Phase 3: Full Deployment (12-24 months)**

Full deployment extends to all applicable partners and business units, reaching 100% of target volume. Key activities include completing all system integrations, training all relevant personnel, establishing support procedures, and optimizing processes for efficiency. Success criteria include full operational integration (system is the primary method for these transactions), economic targets achieved (projected savings fully realized), and strategic advantage (system provides competitive differentiation).

### Integration Requirements

Every use case must address integration with existing systems.

**Technical Integration:**

API integration connects Onli appliances with existing ERP, payment, or trading systems. Data synchronization ensures transaction records are reflected in both Onli and legacy systems. Authentication integration enables single sign-on where appropriate. Reporting integration provides transaction data to existing business intelligence tools.

**Process Integration:**

Workflow modification adapts existing business processes to incorporate Onli transactions. Training programs educate users on new procedures and interfaces. Support procedures establish help desk processes for Onli-related issues. Compliance integration ensures Onli transactions meet all regulatory requirements.

**Organizational Integration:**

Stakeholder alignment ensures all relevant parties understand and support the change. Change management addresses resistance and facilitates adoption. Performance metrics track usage, savings, and user satisfaction. Continuous improvement captures feedback and implements enhancements.

---

## Conclusion

Developing effective Onli use cases requires deep understanding of the protocol's architecture, careful attention to genome denomination, accurate cost modeling, and comprehensive comparison to both blockchain and traditional alternatives. This template provides the framework for creating use cases that are technically accurate, economically compelling, and strategically valuable.

The key to success is remembering that Onli is not simply a cheaper blockchain or a faster bank—it is a fundamentally different paradigm based on actual possession of unique digital objects. Use cases that clearly articulate this distinction and quantify its benefits will be most effective in communicating Onli's value proposition.

By following this template and criteria framework, developers can create use cases that are internally consistent, externally credible, and strategically aligned with Onli's vision of a possession-based digital economy.

---

## Quick Reference: Key Formulas

```
Genome Count = Total Dollar Volume ÷ Genome Denomination

Onli Issuance Cost = Genome Count × $0.01

Annual Savings = Current System Costs - Onli Costs

Payback Period = Total Onli Costs ÷ Annual Savings

ROI Percentage = (Annual Savings ÷ Total Onli Costs) × 100
```

---

## Quick Reference: Onli Pricing

- **Developer Fee:** $6,000 annually
- **Treasury Fee:** $50,000 per $1 billion in asset value (one-time)
- **Issuance Fee:** $0.01 per genome (one-time)
- **Transfer Fee:** $0 (zero, free after issuance)
- **Settlement Time:** Milliseconds
- **Transaction Reversibility:** No (possession is final)

---

## Document Version History

**Version 1.0 (November 18, 2025)**
- Initial comprehensive template and criteria document
- Consolidated learnings from GlobalTech, Heritage Capital, and Acme Foods use cases
- Integrated architectural context from Onli design documents
- Added detailed genome denomination guidelines
- Included revenue model projection formulas
- Provided three complete use case archetypes

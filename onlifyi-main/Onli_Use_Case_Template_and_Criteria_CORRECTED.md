# Onli Use Case Template and Criteria
## A Comprehensive Guide for Developing New Onli Use Cases

**Author:** Manus AI  
**Date:** November 18, 2025  
**Version:** 2.0 (Corrected)

---

## Executive Summary

This document provides a comprehensive template and criteria framework for developing new Onli use cases. It consolidates all architectural context, genome denomination guidelines, revenue model projection formulas, and structural requirements necessary to create accurate, compelling use case analyses for Onli's actual-possession technology platform.

The Onli Protocol represents a fundamental departure from traditional blockchain and banking systems by enabling provably unique digital objects (genomes) that can be possessed, transferred, and verified with millisecond settlement times and zero transfer costs after initial issuance.

**Corrected Onli Pricing Structure:**
- **Developer Subscription:** $6,000/year (includes 3 developer seats)
- **Treasury Deployment:** $50,000 one-time (provides 1 billion genome inventory capacity)
- **Genome Issuance:** $0.05 per genome one-time (regardless of denominational value)
- **Transfers:** $0 (free after issuance)

Understanding how to properly structure use cases around this technology requires careful attention to genome denomination, cost modeling, and comparative analysis against both blockchain platforms and traditional financial services.

---

## Part 1: Understanding Onli's Core Architecture

### The Fundamental Principle: Actual Possession vs. Ledger Models

Onli operates on a fundamentally different paradigm than both traditional banking and blockchain systems. Rather than maintaining a ledger of account balances or transaction histories, Onli enables **actual possession** of unique digital objects called genomes. This distinction is critical for use case development.

**Key Architectural Principles:**

The Onli Protocol is built on three core primitives that distinguish it from all other digital asset platforms. First, **provably unique genomes** serve as the fundamental unit of value, where each genome is cryptographically unique and cannot be duplicated or forged. Second, **possessable genes** function as identity credentials that enable authentication without passwords, as possession of the gene itself proves identity. Third, **secure vaults** act as personal containers for genomes and genes, providing a unified storage environment that combines mobile and cloud functionality.

The authentication model in Onli eliminates the need for passwords entirely. When a user interacts with an Onli-enabled service, authentication occurs through proving possession of a unique gene within their secure vault, typically using device biometrics. The service never sees the gene itself, only a cryptographically signed response that proves legitimate ownership.

Settlement occurs in milliseconds rather than the days required by traditional banking or the minutes to hours common in blockchain systems. This speed is possible because Onli does not rely on distributed consensus mechanisms or correspondent banking networks. Transfers represent actual movement of unique objects between vaults, not updates to a shared ledger.

### Why This Matters for Use Case Development

Understanding these architectural principles is essential because they directly determine the value proposition in any use case. The cost structure, speed advantages, and security benefits all flow from this fundamental design. Use cases that fail to articulate this distinction will not effectively communicate Onli's competitive advantage.

---

## Part 2: The Corrected Onli Pricing Model

### Understanding the Complete Pricing Structure

The most critical element for accurate use case development is understanding Onli's complete pricing structure. This section provides the definitive, correct pricing model.

**Component 1: Developer Subscription ($6,000/year)**

This annual fee provides access to the Onli platform for custom genome creation and appliance development. It includes 3 developer seats to allow for a small development team. This subscription is required for **all** applications built on Onli.

For applications that do not involve monetary value exchange (such as file sharing applications or social media platforms without marketplaces), this subscription is the **only cost**. Genomes can serve as containers for files, vectors, or other non-monetary data without requiring a treasury deployment.

**Component 2: Treasury Deployment ($50,000 one-time)**

This fee is charged to deploy a treasury with **1 billion genome inventory capacity**. The treasury is required **only** for applications involving monetary value or marketplace functionality.

Key characteristics:
- One-time cost regardless of how many genomes are actually issued
- Provides capacity for up to 1 billion genomes
- During treasury configuration, genomes can be assigned any denominational value (e.g., $1, $500, $100,000)
- If more than 1 billion genomes are needed, additional treasury deployments must be purchased at $50,000 each
- Not required for non-monetary applications (file sharing, social media without marketplaces)

**Component 3: Genome Issuance ($0.05 per genome one-time)**

This is charged when each genome is actually issued/minted from the treasury. The cost is **$0.05 per genome regardless of the genome's denominational value**. A $1 genome costs $0.05 to issue, and a $100,000 genome also costs $0.05 to issue.

After this one-time issuance cost, the genome can be transferred an unlimited number of times with **zero additional cost**.

**Component 4: Transfers ($0)**

All transfers after initial issuance are completely free. This is the most revolutionary aspect of Onli's pricing model and creates dramatic cost advantages for high-frequency transfer scenarios.

### The Critical Cost Formula (CORRECTED)

```
Year 1 Total Cost = Developer Subscription + Treasury Deployment + (Genome Count × $0.05) + Integration Costs

Year 2+ Total Cost = Developer Subscription + (New Genome Count × $0.05)

Where:
  Developer Subscription = $6,000/year
  Treasury Deployment = $50,000 one-time (only if monetary value involved)
  Genome Count = Total Dollar Volume ÷ Genome Denomination
  Issuance Cost = Genome Count × $0.05
  Integration Costs = Variable (typically $20K-$100K)
```

This formula is the foundation of all cost calculations in Onli use cases. The genome denomination choice directly determines the number of genomes required, which in turn determines the total issuance cost.

### Why Denomination Matters: Real Examples (CORRECTED)

The impact of genome denomination can be dramatic. Consider three scenarios with different denominations.

**Scenario A: Stablecoin Model ($1 per genome)**
- Total volume: $500 million annually
- Genome denomination: $1
- Number of genomes: 500 million
- Developer subscription: $6,000/year
- Treasury deployment: $50,000 (Year 1 only)
- Issuance cost: 500 million × $0.05 = $25 million annually
- **Year 1 total: $25,056,000**
- **Year 2+ total: $25,006,000 annually**
- Cost as percentage: 5.0%

**Scenario B: Invoice Model ($500 per genome)**
- Total volume: $90.3 billion annually
- Genome denomination: $500
- Number of genomes: 180.6 million
- Developer subscription: $6,000/year
- Treasury deployment: $50,000 (Year 1 only)
- Issuance cost: 180.6 million × $0.05 = $9.03 million annually
- **Year 1 total: $9,086,000**
- **Year 2+ total: $9,036,000 annually**
- Cost as percentage: 0.01%

**Scenario C: Securities Model ($100,000 per genome)**
- Total volume: $5 billion in assets
- Genome denomination: $100,000
- Number of genomes: 50,000
- Developer subscription: $6,000/year
- Treasury deployment: $50,000 (Year 1 only)
- Issuance cost: 50,000 × $0.05 = $2,500 (one-time)
- **Year 1 total: $58,500**
- **Year 2+ total: $6,000 annually** (subscription only)
- Cost as percentage: 0.00117%

These examples demonstrate that higher denominations dramatically reduce costs as a percentage of value. This is counterintuitive compared to traditional fee structures where costs scale with dollar volume.

---

## Part 3: Genome Denomination Guidelines

### The Denomination Decision Framework

Choosing the appropriate genome denomination is the most important design decision in any Onli use case. The denomination should reflect the natural unit of value in the specific industry or use case.

**Decision Criteria:**

When determining genome denomination, consider the typical transaction size in the industry. If most transactions involve amounts between $100 and $1,000, a denomination in that range creates intuitive whole-number genome transfers. Evaluate the asset backing structure—if genomes represent fractional ownership of physical assets, the denomination should align with natural ownership units. Consider the transfer frequency, as high-frequency transfers benefit from higher denominations (fewer genomes = lower issuance costs, with free transfers thereafter). Finally, assess the psychological perception, since denominations that create whole numbers in typical transactions feel more natural to users.

**Industry-Specific Denomination Patterns:**

Different industries naturally align with different denomination structures. In manufacturing and supply chain contexts, invoice-level denominations typically range from $100 to $1,000, matching average purchase order sizes. For capital markets and securities, share-equivalent denominations range from $100 to $100,000, representing fractional ownership in funds, companies, or asset pools. In agricultural and commodity trading, pallet or container-level denominations range from $1 to $100, representing physical units of goods. For real estate applications, fractional ownership denominations range from $1,000 to $100,000. In payment and remittance scenarios, stablecoin-equivalent denominations of $1 to $10 create digital currency substitutes.

### Common Denomination Mistakes to Avoid

Several pitfalls can undermine use case economics. Using dollar-volume-based thinking by calculating costs as a percentage of total value without considering genome count leads to incorrect projections. Choosing denominations that are too low results in unnecessarily high issuance costs. Selecting denominations that are too high creates user confusion with fractional genome transfers. Failing to state the denomination assumption explicitly makes it impossible for readers to verify calculations.

---

## Part 4: Revenue Model Projection Formulas (CORRECTED)

### The Core Revenue Formula

Every use case must include a clear revenue model that shows how Onli costs translate to savings or revenue generation for the customer.

**Basic Savings Formula (CORRECTED):**

```
Annual Savings = Current System Costs - Onli Costs

Where Onli Costs (Year 1) = $6,000 + $50,000 + (Genome Count × $0.05) + Integration
Where Onli Costs (Year 2+) = $6,000 + (New Genome Count × $0.05)

Payback Period = Year 1 Total Costs ÷ Annual Savings

ROI Percentage = (Annual Savings ÷ Year 1 Total Costs) × 100
```

**Component Breakdown:**

Current system costs must account for all relevant expenses in the existing process. For international payments, include sending bank fees ($25-$50), receiving bank fees ($10-$20), intermediary bank fees ($10-$50 per transaction), and currency conversion markups (1-3% of value). For blockchain alternatives, include gas fees (variable by network), smart contract deployment costs ($200-$2,000), node infrastructure costs (if applicable), and security audit costs ($20,000-$100,000). For trade finance, include letter of credit issuance fees (0.5-2% of value), amendment fees ($75-$150 per change), and correspondent banking fees. For custody services, include basis points on assets under management (2-10 bps annually) and per-transaction settlement fees.

### Advanced Revenue Models

Beyond simple cost savings, Onli enables several revenue generation models. Float revenue can be earned on the difference between genome issuance and redemption. Premium services can be offered for instant settlement guarantees, enhanced analytics, or white-label solutions. Network effects create value as more participants join the ecosystem. Reduced spoilage and delays in supply chain applications translate directly to preserved product value.

**Revenue Projection Template (CORRECTED):**

```
Year 1 Revenue Model:
- Cost Savings: $X million (vs. current system)
- Float Revenue: $Y million (on $Z billion in circulation)
- Premium Services: $W million (from N enterprise customers)
- Total Year 1 Value: $X + $Y + $W million

Onli Costs Year 1:
- Developer Subscription: $6,000
- Treasury Deployment: $50,000 (one-time, if monetary)
- Issuance Costs: (Genome Count × $0.05)
- Integration: $A
- Total Year 1 Costs: $6,000 + $50,000 + Issuance + $A

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

This section establishes the current state and its problems. Describe the existing process in detail, including all parties involved and their roles. Quantify current costs with specific dollar amounts and fee structures, citing sources for all figures. Identify pain points such as delays (measured in days), manual reconciliation requirements, intermediary dependencies, and fraud or error risks. Use real-world examples or case studies to illustrate the problem's impact.

**3. The Onli Solution (500-700 words)**

Here you explain how Onli addresses each pain point. Define the genome clearly, specifying its denomination and what it represents. Describe the issuance process, explaining who creates genomes, what backs them, and the verification mechanism. Detail the transfer process, showing how genomes move between parties and how settlement occurs. Explain the redemption or burning process if applicable. Present the cost calculation using the correct formula:

```
Year 1 Cost = $6,000 + $50,000 + (Genome Count × $0.05) + Integration
Year 2+ Cost = $6,000 + (New Genome Count × $0.05)
```

Include a worked example with realistic numbers.

**4. Cost Analysis (300-500 words)**

This section provides detailed financial comparison. Present current system costs broken down by component. Show Onli costs broken down by component using the correct pricing. Create a side-by-side comparison table. Calculate the percentage savings and absolute dollar savings. Determine the payback period in days, weeks, or months. State all assumptions explicitly, including transaction volume, average transaction size, genome denomination, and transfer frequency.

**5. Implementation Approach (200-400 words)**

Outline a realistic path from pilot to full-scale deployment. Describe the pilot phase with specific scope. Project the scaling timeline to full deployment. Identify integration requirements with existing systems. Note any regulatory or compliance considerations. Estimate the timeline from decision to full implementation.

**6. Conclusion (150-250 words)**

Summarize the key value proposition in one sentence. Restate the primary financial benefit with specific numbers. Highlight the competitive advantage Onli provides. Include a call to action for the reader.

### Supporting Elements

Every use case should include an interactive calculator allowing readers to input their own parameters, a comparison table showing Onli versus blockchain platforms versus traditional banking, visual diagrams illustrating the genome lifecycle, and real-world analogies to help non-technical readers understand the concept.

---

## Part 6: Validation Checklist (CORRECTED)

### Pre-Publication Validation

Before finalizing any use case, verify every item on this checklist.

**Genome Design Validation:**

Confirm that genome denomination is clearly defined and justified. Verify that average transaction size is stated as an explicit assumption. Ensure the backing mechanism is explained. Check that the transfer process is described in sufficient detail.

**Cost Calculation Validation (CORRECTED):**

Verify that genome count is calculated correctly: `Genome Count = Total Volume ÷ Denomination`

Confirm that Year 1 Onli cost uses the correct formula:
```
Year 1 = $6,000 + $50,000 + (Genome Count × $0.05) + Integration
```

Confirm that Year 2+ Onli cost uses the correct formula:
```
Year 2+ = $6,000 + (New Genome Count × $0.05)
```

Check that all current system costs are cited with sources. Ensure that comparison includes blockchain AND traditional methods. Verify that all assumptions are stated explicitly.

**Revenue Model Validation:**

Confirm that the savings calculation is mathematically correct and traceable. Verify that the payback period is realistic and calculated correctly. Check that the ROI percentage is reasonable. Ensure that revenue projections beyond cost savings are justified.

**Content Quality Validation:**

Verify that all numbers are cited or derived from stated assumptions. Confirm that the calculator implements the same logic as the whitepaper. Check that mobile and desktop experiences are both functional. Ensure that all links point to correct routes. Verify that domain references use onli.one (not onli.com). Confirm that transaction speeds are stated as milliseconds (not seconds or minutes).

---

## Part 7: Comparative Analysis Requirements

### Blockchain Platform Comparison

Every use case must compare Onli to at least three blockchain platforms across multiple dimensions.

**Required Comparison Platforms:**

The three primary platforms for comparison are Ethereum (the dominant smart contract platform), Polygon (a leading Layer 2 solution), and Solana (a high-performance alternative). For specialized use cases, consider Hyperledger Fabric for enterprise permissioned blockchains.

**Comparison Dimensions:**

The comparison must cover six key dimensions. For subscription and access fees, note that Onli charges $6,000 annually for developer access (includes 3 seats), while blockchain platforms typically have no subscription but require infrastructure costs. Setup and deployment costs for Onli include a $50,000 treasury deployment (one-time, provides 1 billion genome capacity), while Ethereum smart contract deployment costs $200-$2,000, Hyperledger Fabric development costs $30,000-$130,000, and Solana token creation costs $50-$500.

Transaction costs reveal stark differences. Onli charges $0.05 per genome issuance (one-time, zero for subsequent transfers), while Ethereum charges $0.38-$0.44 per transaction (ongoing), Polygon charges $0.0005-$0.01 per transaction (ongoing), and Solana charges $0.00025 per transaction (ongoing). Ongoing maintenance costs for Onli are zero after issuance (beyond the annual subscription), while blockchain platforms have variable gas fees or infrastructure costs.

Compliance and regulatory considerations show that Onli has built-in identity verification through genes, while blockchain platforms require separate KYC/AML processes costing $10,000-$50,000 annually.

### Traditional Banking Comparison

Every use case must also compare Onli to relevant traditional banking services.

**Required Banking Services:**

The comparison should cover international wire transfers (SWIFT network), letters of credit and trade finance, custodial and settlement services, and correspondent banking relationships.

**Comparison Dimensions:**

For international wire transfers, traditional banking charges $25-$50 sending fees, $10-$20 receiving fees, $10-$50 intermediary bank fees (per bank), and 1-3% currency conversion markup, with settlement taking 1-5 business days. Onli charges $0.05 per genome issuance (one-time) with millisecond settlement.

Trade finance costs in traditional banking include 0.5-2% of value for letter of credit issuance, $75-$150 per amendment, and weeks for processing. Onli provides instant verification and transfer with only the one-time issuance cost.

Custody services in traditional banking charge 2-10 basis points on AUM annually plus per-transaction fees, while Onli charges only the initial issuance cost with no ongoing custody fees.

---

## Part 8: Common Pitfalls and How to Avoid Them (CORRECTED)

### Calculation Errors

The most common error is using incorrect Onli pricing. Always use:
- Developer subscription: $6,000/year
- Treasury deployment: $50,000 one-time (1 billion genome capacity)
- Genome issuance: $0.05 per genome (NOT $0.01)
- Transfers: $0 (free)

Another frequent mistake is forgetting to state the average transaction size assumption. This is critical because it determines the genome denomination choice.

A third error is failing to account for transfer frequency. Onli's advantage increases with transfer frequency because transfers are free after issuance.

### Denomination Errors

Choosing a denomination that is too low for the use case results in unnecessarily high issuance costs. For example, using $1 genomes for a supply chain where average invoice size is $500 creates 500 times more genomes than necessary.

Conversely, choosing a denomination that is too high creates user confusion with fractional genome transfers.

Failing to justify the denomination choice leaves readers wondering why that specific value was selected.

### Comparison Errors

Comparing only to blockchain OR traditional banking, but not both, provides an incomplete picture. Onli's value proposition includes elements of both.

Using outdated pricing data for competitors undermines credibility. Always cite sources and dates.

Failing to account for hidden costs in traditional systems (intermediary fees, currency conversion markups, delay costs) makes the comparison less compelling.

### Content Errors

Using absolute language like "perfect" or "completely bug-free" sets unrealistic expectations. Be specific and honest.

Failing to test all navigation links before publication creates a poor user experience.

Using onli.com instead of onli.one for domain references is incorrect. The canonical domain is onli.one.

Stating transaction speeds in seconds or minutes instead of milliseconds understates Onli's performance advantage.

---

## Part 9: Example Use Case Archetypes (CORRECTED)

### Archetype 1: Manufacturing and Supply Chain

**Typical Characteristics:**

This archetype involves business-to-business transactions with invoice-level denominations ranging from $100 to $1,000. Transaction volumes are high-frequency with millions of transactions annually. The primary pain point is payment delays and reconciliation complexity. Key benefits include working capital improvement and reduced fraud.

**Genome Design Pattern:**

Each genome represents a single invoice or purchase order. Denomination matches average invoice size (e.g., $500). Backing comes from the goods or services represented by the invoice. Transfer occurs at shipment, delivery, or payment milestones.

**Example: GlobalTech Electronics (CORRECTED)**

GlobalTech operates a global supply chain with $90.3 billion in annual supplier payments. Using $500 OnliCredits (genome denomination), they require 180.6 million genomes annually.

**Onli Costs:**
- Developer subscription: $6,000/year
- Treasury deployment: $50,000 (Year 1 only)
- Issuance: 180.6M × $0.05 = $9.03M annually
- **Year 1 total: $9,086,000**
- **Year 2+ total: $9,036,000 annually**

**Traditional Costs:**
- Wire transfers: 180.6M × $75 = $13.545 billion annually

**Savings:** $13.536 billion annually (99.93%)
**Payback period:** 5.9 hours

### Archetype 2: Capital Markets and Family Offices

**Typical Characteristics:**

This archetype involves high-value, low-frequency transactions with security-level denominations ranging from $10,000 to $100,000. Transaction volumes are moderate with hundreds to thousands of transactions annually. The primary pain point is illiquidity and high custody costs. Key benefits include fractional ownership and instant settlement.

**Genome Design Pattern:**

Each genome represents fractional ownership in a fund, company, or asset pool. Denomination matches natural ownership units (e.g., $100,000 per genome). Backing comes from the underlying assets in the portfolio. Transfer enables secondary market liquidity.

**Example: Heritage Capital Family Office (CORRECTED)**

Heritage Capital manages $5 billion in assets and seeks to create liquidity for limited partner interests. Using $100,000 Heritage Liquidity Coins (HLC), they require 50,000 genomes.

**Onli Costs:**
- Developer subscription: $6,000/year
- Treasury deployment: $50,000 (Year 1 only)
- Issuance: 50,000 × $0.05 = $2,500 (one-time)
- **Year 1 total: $58,500**
- **Year 2+ total: $6,000 annually**

**Traditional Costs:**
- Custody fees: 5 bps on $5B = $2.5M annually
- Transaction fees: $100K annually
- **Total: $2.6M annually**

**Savings:** $2.594 million annually (99.77% after Year 1)
**Payback period:** 8.2 days

### Archetype 3: Agricultural and Trade Finance

**Typical Characteristics:**

This archetype involves physical goods tracking with pallet or container-level denominations ranging from $1 to $100. Transaction volumes are very high-frequency with millions of transactions annually. The primary pain point is trust and verification in international trade. Key benefits include reduced fraud and eliminated letter of credit costs.

**Genome Design Pattern:**

Each genome represents a physical unit of goods (pallet, container, shipment). Denomination matches the value of the physical unit (e.g., $1 per genome). Backing comes from the physical goods themselves. Transfer occurs as goods move through the supply chain.

**Example: Acme Foods Exotic Produce (CORRECTED)**

Acme Foods imports $250 million in exotic produce annually. Using $1 Acme Credits (genome denomination), they require 250 million genomes annually.

**Onli Costs:**
- Developer subscription: $6,000/year
- Treasury deployment: $50,000 (Year 1 only)
- Issuance: 250M × $0.05 = $12.5M annually
- **Year 1 total: $12,556,000**
- **Year 2+ total: $12,506,000 annually**

**Traditional Costs:**
- Letter of credit fees (1.5%): $3.75M
- Wire transfers: 250M × $0.50 = $125M
- Trust deposits (opportunity cost 5%): $625K
- **Total: $129.375M annually**

**Savings:** $116.869 million annually (90.3%)
**Payback period:** 35 days

---

## Part 10: Technical Architecture Context

[Content remains largely unchanged from original document - covers genomes, genes, vaults, appliances, and why this architecture matters]

---

## Part 11: Revenue Model Deep Dive

[Content remains largely unchanged from original document - covers direct cost savings, indirect value creation, revenue generation opportunities, and total economic impact formula]

---

## Part 12: Implementation and Integration

[Content remains largely unchanged from original document - covers realistic implementation timelines, integration requirements, and organizational considerations]

---

## Conclusion

Developing effective Onli use cases requires deep understanding of the protocol's architecture, careful attention to genome denomination, accurate cost modeling using the correct pricing structure, and comprehensive comparison to both blockchain and traditional alternatives.

**The Corrected Pricing Structure:**
- Developer subscription: $6,000/year (includes 3 seats)
- Treasury deployment: $50,000 one-time (1 billion genome capacity)
- Genome issuance: $0.05 per genome one-time
- Transfers: $0 (free)

The key to success is remembering that Onli is not simply a cheaper blockchain or a faster bank—it is a fundamentally different paradigm based on actual possession of unique digital objects. Use cases that clearly articulate this distinction and quantify its benefits using accurate pricing will be most effective in communicating Onli's value proposition.

By following this template and criteria framework with the corrected pricing structure, developers can create use cases that are technically accurate, economically compelling, and strategically aligned with Onli's vision of a possession-based digital economy.

---

## Quick Reference: Key Formulas (CORRECTED)

```
Genome Count = Total Dollar Volume ÷ Genome Denomination

Onli Year 1 Cost = $6,000 + $50,000 + (Genome Count × $0.05) + Integration

Onli Year 2+ Cost = $6,000 + (New Genome Count × $0.05)

Annual Savings = Current System Costs - Onli Costs

Payback Period = Year 1 Total Costs ÷ Annual Savings

ROI Percentage = (Annual Savings ÷ Year 1 Total Costs) × 100

Break-Even vs. Solana = 200 transfers per genome
```

---

## Quick Reference: Corrected Onli Pricing

- **Developer Subscription:** $6,000/year (includes 3 developer seats)
- **Treasury Deployment:** $50,000 one-time (provides 1 billion genome inventory capacity)
- **Genome Issuance:** $0.05 per genome one-time (regardless of denominational value)
- **Transfers:** $0 (zero, free after issuance)
- **Settlement Time:** Milliseconds
- **Transaction Reversibility:** No (possession is final)

---

## Document Version History

**Version 2.0 (November 18, 2025) - CORRECTED**
- Corrected Onli pricing structure throughout document
- Developer subscription: $6,000/year (includes 3 seats)
- Treasury deployment: $50,000 one-time (1 billion genome capacity)
- Genome issuance: $0.05 per genome (was incorrectly stated as $0.01)
- Recalculated all example use cases with correct pricing
- Updated all formulas and validation checklists
- Revised strategic recommendations based on corrected economics

**Version 1.0 (November 18, 2025)**
- Initial comprehensive template and criteria document
- [Note: This version contained incorrect Onli pricing and has been superseded by Version 2.0]

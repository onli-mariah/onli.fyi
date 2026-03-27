# Onli Use Case Pricing Audit Report
## Comprehensive Review of Published Use Cases Against Correct Pricing Structure

**Date:** November 18, 2025  
**Auditor:** Manus AI  
**Scope:** GlobalTech Electronics, Heritage Capital, and Acme Foods use cases

---

## Executive Summary

This audit reviews all three published Onli use cases against the correct pricing structure to identify discrepancies and required corrections. The audit reveals **significant pricing errors in all three use cases** that must be corrected before the site can be considered accurate.

**Correct Onli Pricing Structure:**
- **Developer Subscription:** $6,000/year (includes 3 developer seats)
- **Treasury Deployment:** $50,000 one-time (provides 1 billion genome inventory capacity)
- **Genome Issuance:** $0.05 per genome one-time (regardless of denominational value)
- **Transfers:** $0 (free after issuance)

---

## Use Case 1: GlobalTech Electronics

**File Location:** `/home/ubuntu/globaltech-use-case/client/public/GLOBALTECH_Use_Case_CORRECTED.md`

### Pricing Errors Identified

#### Error 1: Incorrect Pricing Model Description (Lines 147-152)

**Current Text:**
```
1. Developer Access: $6,000 (one-time fee for platform access and development tools)
2. Asset Management Fee: $50,000 per $1 billion in assets under management (annual)
3. Issuance Cost: $0.05 per API call per asset (operational cost, charged at time of issuance)
4. Transaction Fees: $0 (no ongoing transaction fees after issuance)
```

**Issues:**
- Developer Access is stated as "one-time fee" but should be "$6,000/year (annual subscription)"
- "Asset Management Fee: $50,000 per $1 billion in assets under management (annual)" is **completely incorrect**
  - Should be: "Treasury Deployment: $50,000 one-time (provides 1 billion genome inventory capacity)"
  - This is NOT an annual fee
  - This is NOT based on dollar value of assets
  - This is based on genome count capacity (1 billion genomes per $50K deployment)
- "Issuance Cost: $0.05 per API call per asset" is confusing language
  - Should be: "$0.05 per genome (one-time)"

#### Error 2: Incorrect Pilot Program Calculation (Lines 169-173)

**Current Text:**
```
One-Time Setup:
- Developer Access: $6,000
- Asset Management Fee ($10B AUM): $500,000
- Issuance Cost (20,000,000 tokens × $0.01): $200,000
- Total Setup: $706,000
```

**Issues:**
- "Asset Management Fee ($10B AUM): $500,000" is **completely wrong**
  - There is no "asset management fee" based on dollar value
  - The correct fee is Treasury Deployment: $50,000 one-time (regardless of dollar value)
- "Issuance Cost (20,000,000 tokens × $0.01): $200,000" uses **wrong issuance cost**
  - Should be: 20,000,000 × $0.05 = $1,000,000
  - The issuance cost is $0.05 per genome, NOT $0.01

**Correct Calculation Should Be:**
```
Year 1 Setup:
- Developer Subscription: $6,000
- Treasury Deployment: $50,000 (one-time)
- Issuance Cost (20,000,000 genomes × $0.05): $1,000,000
- Total Year 1 Cost: $1,056,000
```

#### Error 3: Incorrect Cost Explanation (Lines 181-183)

**Current Text:**
```
- Total tokens needed: $10B ÷ $500 = 20,000,000 tokens
- Average transaction: $250,000 (500 tokens)
- Onli charges $0.01 per token (one-time issuance cost)
```

**Issues:**
- "$0.01 per token" is **incorrect** - should be $0.05 per genome

#### Error 4: Incorrect Full-Scale Implementation (Lines 207-211)

**Current Text:**
```
Full-Scale Onli Implementation:
- Developer Access: $6,000 (already paid)
- Asset Management Fee ($90.3B AUM): $4,515,000
- Issuance Cost (180,600,000 tokens × $0.01): $1,806,000
- Total Setup Cost: $6,327,000
- Annual Ongoing Cost: $0
```

**Issues:**
- "Asset Management Fee ($90.3B AUM): $4,515,000" is **completely wrong**
  - Calculation appears to be: $50,000 × 90.3 = $4,515,000
  - This assumes $50K per $1B, which is incorrect
  - The correct fee is Treasury Deployment: $50,000 one-time for 1 billion genome capacity
  - Since 180.6M genomes < 1B, only ONE treasury deployment is needed = $50,000
- "Issuance Cost (180,600,000 tokens × $0.01): $1,806,000" uses **wrong rate**
  - Should be: 180,600,000 × $0.05 = $9,030,000

**Correct Calculation Should Be:**
```
Year 1 Full-Scale Implementation:
- Developer Subscription: $6,000
- Treasury Deployment: $50,000 (one-time, provides 1B genome capacity)
- Issuance Cost (180,600,000 genomes × $0.05): $9,030,000
- Total Year 1 Cost: $9,086,000

Year 2+ Annual Cost:
- Developer Subscription: $6,000
- Issuance Cost (180,600,000 new genomes × $0.05): $9,030,000
- Total Year 2+ Cost: $9,036,000 annually
```

#### Error 5: Incorrect Cost Statement (Line 217)

**Current Text:**
```
- Onli charges $0.01 per token (one-time issuance cost)
```

**Issues:**
- Should be $0.05 per genome

### Summary of GlobalTech Errors

1. **Fundamental misunderstanding of treasury deployment fee** - treated as annual percentage-based fee instead of one-time capacity-based fee
2. **Wrong issuance cost throughout** - uses $0.01 instead of correct $0.05
3. **Incorrect total cost calculations** - all financial projections are wrong
4. **Misleading terminology** - "Asset Management Fee" does not exist in Onli pricing

**Impact:** All cost savings calculations and ROI projections are incorrect. The actual Onli costs are significantly higher than stated, which reduces (but does not eliminate) the cost advantage.

---

## Use Case 2: Heritage Capital

**File Location:** `/home/ubuntu/globaltech-use-case/client/public/HERITAGE_CAPITAL_Use_Case_CORRECTED.md`

### Pricing Errors Identified

#### Error 1: Incorrect Pricing Model Description (Lines 51-56)

**Current Text:**
```
1. Developer Access: $6,000 (one-time fee)
2. Asset Management Fee: $50,000 per $1 billion in assets under management (annual)
3. Issuance Cost: $0.01 per token (one-time operational cost, charged at time of minting)
4. Transaction Fees: $0 (no ongoing transaction fees after issuance)
```

**Issues:**
- Same fundamental errors as GlobalTech
- Developer Access should be annual, not one-time
- "Asset Management Fee" is incorrect terminology and incorrect structure
- Issuance cost is $0.05, not $0.01

#### Error 2: Incorrect Implementation Costs (Lines 66-71)

**Current Text:**
```
Year 1 Costs (Initial Setup and Operation):
- Developer Access: $6,000 (one-time)
- Asset Management Fee: $250,000 (for $5B AUM)
- Issuance Cost: 50,000 tokens × $0.01 = $500 (one-time minting)
- Total Year 1 Cost: $256,500
```

**Issues:**
- "Asset Management Fee: $250,000 (for $5B AUM)" is **completely wrong**
  - Appears to be calculated as: $50,000 × 5 = $250,000
  - Should be: Treasury Deployment: $50,000 one-time (regardless of dollar value)
- "Issuance Cost: 50,000 tokens × $0.01 = $500" uses **wrong rate**
  - Should be: 50,000 × $0.05 = $2,500

**Correct Calculation Should Be:**
```
Year 1 Costs:
- Developer Subscription: $6,000
- Treasury Deployment: $50,000 (one-time)
- Issuance Cost: 50,000 genomes × $0.05 = $2,500
- Total Year 1 Cost: $58,500
```

#### Error 3: Incorrect Multi-Year Projection (Lines 122-124)

**Current Text:**
```
| Year 3 | $250,000 | $1,100 | $251,100 | $759,600 |

*Year 1 includes $6,000 developer access fee
```

**Issues:**
- Shows $250,000 annual cost in Year 3, which is incorrect
- After Year 1, the only recurring cost is the $6,000 annual subscription (unless new genomes are issued)
- The footnote states "Year 1 includes $6,000 developer access fee" implying it's one-time, but it's actually annual

**Correct Understanding:**
- Year 1: $58,500 (subscription + treasury + issuance)
- Year 2+: $6,000 annually (subscription only, assuming no new issuances)

#### Error 4: Incorrect Industry-Wide Projection (Lines 142-145)

**Current Text:**
```
Onli Implementation Costs (for $266B in HLCs):
- Developer Access: $6,000 per family office × 800 offices = $4.8M
- Asset Management Fees: $50K per $1B × 266,000 = $13.3B annually
- Issuance Costs: Approximately $13.3M annually (based on transaction patterns)
```

**Issues:**
- "Asset Management Fees: $50K per $1B × 266,000 = $13.3B annually" is **catastrophically wrong**
  - This calculation treats treasury deployment as an annual percentage-based fee
  - Treasury deployment is ONE-TIME and based on genome count capacity, not dollar value
  - For 266B in assets with $100K denomination = 2.66M genomes
  - This requires 3 treasury deployments (each provides 1B genome capacity) = $150K total one-time
- The entire industry-wide cost projection is fundamentally flawed

#### Error 5: Incorrect Minting Cost (Line 257)

**Current Text:**
```
Minting Costs: 50,000 HLC tokens × $0.01 = $500
```

**Issues:**
- Should be: 50,000 × $0.05 = $2,500

### Summary of Heritage Capital Errors

1. **Same fundamental treasury deployment misunderstanding** as GlobalTech
2. **Wrong issuance cost throughout** - uses $0.01 instead of $0.05
3. **Incorrect multi-year projections** - shows ongoing "asset management fees" that don't exist
4. **Industry-wide projection is completely wrong** - $13.3B annual cost is fictitious

**Impact:** The use case dramatically understates Onli costs, making the value proposition appear better than it actually is. However, even with correct pricing, Onli still provides substantial savings.

---

## Use Case 3: Acme Foods

**File Location:** `/home/ubuntu/globaltech-use-case/client/public/ACME_Use_Case_FINAL.md`

### Pricing Errors Identified

#### Error 1: No Explicit Onli Pricing Section

**Issue:** Unlike GlobalTech and Heritage Capital, the Acme Foods use case does **not include a dedicated Onli pricing section** explaining the cost structure. This is a major omission.

#### Error 2: Vague Cost References (Lines 96-99, 173, 188)

**Current Text:**
```
Line 99: "When Acme mints AC, the company pays the 1:1 cost (plus Onli fees) in its preferred currency."

Line 173: "While Onli charges fees for minting and issuing AC, Acme passes a small markup to members, generating an estimated $1.5 million annually."

Line 188: "Technology and Infrastructure: Onli platform fees, cloud hosting, and development costs total approximately $5 million annually."
```

**Issues:**
- No specific Onli pricing is stated
- "Onli fees" is vague and undefined
- "$5 million annually" for "Onli platform fees" appears to be a guess with no calculation shown
- No breakdown of developer subscription, treasury deployment, or issuance costs
- No genome denomination is specified
- No genome count calculation is provided

#### Error 3: Missing Financial Model

**Issue:** The Acme Foods use case lacks the detailed cost breakdown that GlobalTech and Heritage Capital provide. There is no:
- Genome denomination specification
- Genome count calculation
- Year 1 vs. Year 2+ cost breakdown
- Comparison to traditional alternatives with specific dollar amounts

### Summary of Acme Foods Errors

1. **No explicit Onli pricing section** - major structural omission
2. **Vague cost references** - "Onli fees" without specifics
3. **No genome denomination or count** - impossible to verify calculations
4. **No detailed financial model** - unlike the other two use cases
5. **Appears to be incomplete** - may have been published before financial section was finalized

**Impact:** The use case cannot be validated for pricing accuracy because the necessary information is not present. This use case requires the most extensive rewrite.

---

## Comparative Summary Table

| Use Case | Treasury Fee Error | Issuance Cost Error | Missing Info | Severity |
|----------|-------------------|---------------------|--------------|----------|
| **GlobalTech** | Treats as annual % fee ($4.5M/year) instead of one-time capacity fee ($50K) | Uses $0.01 instead of $0.05 | None | **CRITICAL** |
| **Heritage Capital** | Treats as annual % fee ($250K/year) instead of one-time capacity fee ($50K) | Uses $0.01 instead of $0.05 | Multi-year projection wrong | **CRITICAL** |
| **Acme Foods** | Not specified | Not specified | No pricing section, no genome denomination, no financial model | **SEVERE** |

---

## Recommended Corrections

### Priority 1: Correct Fundamental Pricing Structure (All Use Cases)

1. Replace all references to "Asset Management Fee" with "Treasury Deployment"
2. Clarify that treasury deployment is:
   - **One-time cost** (not annual)
   - **$50,000 per 1 billion genome capacity** (not per $1 billion in dollar value)
   - **Based on genome count** (not dollar value)
3. Correct all issuance costs from $0.01 to $0.05 per genome
4. Clarify that developer subscription is $6,000 **annually** (not one-time)

### Priority 2: Recalculate All Financial Projections

#### GlobalTech Corrections:
- Pilot program Year 1: $1,056,000 (not $706,000)
- Full-scale Year 1: $9,086,000 (not $6,327,000)
- Full-scale Year 2+: $9,036,000 annually (not $0)
- Recalculate all savings and ROI figures

#### Heritage Capital Corrections:
- Year 1: $58,500 (not $256,500) - **actually decreases due to treasury deployment being one-time, not annual**
- Year 2+: $6,000 annually (not $250,000+)
- Recalculate industry-wide projection (currently shows $13.3B annually, should be dramatically lower)

#### Acme Foods Corrections:
- Add complete Onli pricing section
- Specify genome denomination (likely $1 for pallet-level tracking)
- Calculate genome count based on $250M annual volume
- Provide Year 1 and Year 2+ cost breakdown
- Compare to traditional trade finance costs

### Priority 3: Update All Calculators

The interactive calculators on the website must also be updated to use correct pricing:
- GlobalTech calculator: `/globaltech/calculator`
- Heritage Capital calculator: `/heritage-capital/calculator`
- Acme Foods calculator: `/acme-foods/calculator`

Each calculator must implement the correct formula:
```
Year 1 Cost = $6,000 + $50,000 + (Genome Count × $0.05)
Year 2+ Cost = $6,000 + (New Genome Count × $0.05)
```

---

## Validation Checklist

Before publishing corrected use cases, verify:

- [ ] Developer subscription stated as $6,000 **annually** (not one-time)
- [ ] Treasury deployment stated as $50,000 **one-time** for **1 billion genome capacity**
- [ ] No references to "Asset Management Fee" or percentage-based fees
- [ ] Issuance cost stated as $0.05 per genome (not $0.01)
- [ ] Genome count calculation shown: `Total Volume ÷ Denomination`
- [ ] Year 1 cost includes: subscription + treasury + (genome count × $0.05)
- [ ] Year 2+ cost includes: subscription + (new genome count × $0.05)
- [ ] All savings calculations recalculated with correct Onli costs
- [ ] Calculators updated to match whitepaper formulas
- [ ] All three use cases have consistent pricing terminology

---

## Conclusion

All three published use cases contain significant pricing errors that must be corrected before the site can be considered accurate. The errors fall into two categories:

**Category 1: Fundamental Misunderstanding (GlobalTech, Heritage Capital)**
- Treasury deployment incorrectly treated as annual percentage-based fee
- Issuance cost incorrectly stated as $0.01 instead of $0.05
- All financial projections are wrong as a result

**Category 2: Incomplete Information (Acme Foods)**
- No Onli pricing section
- No genome denomination or count
- No detailed financial model
- Cannot be validated without this information

**Recommended Action:** Do not make corrections to the live site yet. First, review this audit report to confirm understanding of the correct pricing structure, then proceed with systematic corrections to all three use cases and their associated calculators.

**Estimated Correction Time:**
- GlobalTech: 2-3 hours (recalculate all figures, update text)
- Heritage Capital: 2-3 hours (recalculate all figures, update text)
- Acme Foods: 4-6 hours (create pricing section, specify genome model, build financial analysis)
- Calculators: 1-2 hours (update formulas in all three calculators)
- Testing: 1-2 hours (verify all calculations and links)

**Total: 10-16 hours of focused work**

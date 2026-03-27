# Onli Use Case Development: Key Learnings from Chat History

## Critical Discovery: Asset-Based Pricing Model

**The Fundamental Insight**: Onli pricing is per asset/genome ($0.01 each), NOT per dollar volume.

### Genome Denomination is Everything

The denomination of each genome/token fundamentally changes the economics:

- **Acme Foods**: $1 per genome (stablecoin-like)
  - $500M annual purchases = 500M genomes
  - Issuance cost: 500M × $0.01 = $5M annually
  
- **GlobalTech Electronics**: $500 per genome  
  - $90.3B annual volume = 180.6M genomes
  - Issuance cost: 180.6M × $0.01 = $1.806M annually
  - **5x cheaper than volume-based model would suggest**

- **Heritage Capital**: $100,000 per genome
  - $5B in assets = 50,000 genomes
  - Issuance cost: 50,000 × $0.01 = $500 annually
  - **1000x cheaper than volume-based model**

### Key Formula

```
Number of Genomes = Total Dollar Volume ÷ Genome Denomination
Onli Issuance Cost = Number of Genomes × $0.01
```

## Use Case Architecture Requirements

### 1. Business Context
- Industry and specific pain point
- Current process and its inefficiencies
- Dollar volumes involved
- Transaction frequency and patterns

### 2. Genome Design
- **Denomination**: What does 1 genome represent in dollars?
- **Backing**: Is it backed by real assets, currency, commodities?
- **Transferability**: Who can hold/transfer these genomes?
- **Lifecycle**: Creation, transfer, redemption/burning

### 3. Economic Model
- Average transaction size (critical for genome count)
- Annual transaction volume
- Current costs (fees, intermediaries, delays)
- Onli cost calculation
- Savings calculation
- Payback period

### 4. Revenue Projections
- If customer issues genomes at denomination (X)
- And produces/transacts (Y) volume annually
- They save (Z) compared to current methods
- And can generate revenue from (specify model: float, fees, etc.)

### 5. Comparative Analysis
Must compare against:
- **Traditional banking**: Wire fees, correspondent banking, custody fees
- **Blockchain**: Gas fees, smart contract deployment, node infrastructure
- **Current process**: Manual reconciliation, delays, intermediary costs

## Content Structure (Sesame-Inspired)

### Homepage Flow
1. **Hero**: "The revolution you never saw coming"
2. **The Big Idea**: Actual-possession technology explanation (NO LINK HERE)
3. **Why Does It Matter?**: Problem/solution framing
4. **Use Cases** (numbered 01, 02, 03):
   - Industry-specific headline as question
   - Problem description with current costs
   - Onli solution with specific numbers
   - "Read whitepaper" and "Calculate savings" links
5. **Join the revolution**: CTA with link to onli.one

### Whitepaper Structure
- Executive Summary with key numbers
- The Challenge (current state problems)
- The Onli Solution (how it works)
- Cost Analysis (detailed breakdown)
- Implementation (pilot → full scale)
- Conclusion

### Calculator Requirements
- User inputs: volume, transaction size, frequency
- Automatic genome count calculation
- Side-by-side comparison: Current vs Onli
- Payback period calculation
- Assumptions clearly stated

## Design Principles

### Visual
- Single-column, centered layout (max-w-3xl)
- Numbered sections (01, 02, 03)
- Simple underlined text links (not complex buttons)
- Generous white space
- Border separators between sections
- Minimal color palette

### UX
- No early exit links (keep users reading)
- External link only at bottom
- Clear hierarchy with large bold headlines
- Readable body text (text-lg, leading-relaxed)
- Mobile-first responsive design

## Calculation Best Practices

### Common Errors to Avoid
1. ❌ Using dollar volume instead of genome count
2. ❌ Using "$0.05 per API call" instead of "$0.01 per genome"
3. ❌ Not accounting for genome denomination
4. ❌ Forgetting to state average transaction size assumption

### Correct Approach
1. ✅ Define genome denomination clearly
2. ✅ State average transaction size assumption
3. ✅ Calculate: genomes = volume ÷ denomination
4. ✅ Calculate: cost = genomes × $0.01
5. ✅ Show all assumptions transparently

## Technical Implementation

### Mobile Detection
- Separate mobile/desktop experiences
- Mobile: text-only, vertical cards
- Desktop: full visual experience
- View toggle for manual override

### Performance
- Lazy loading for images (except hero)
- Native scroll (no complex scroll-snap on mobile)
- Minimal JavaScript for calculators

### Content Management
- Whitepapers as markdown in public/
- Calculators as React components
- Routes: /globaltech, /heritage-capital, /acme-foods
- Consistent naming across files and routes

## Domain and Branding
- Site: onli.one (not onli.com)
- Onli Corporation as entity name
- "Actual-possession technology" as key phrase
- "Genomes" as token terminology
- Millisecond settlement times (canon accurate)

## Key Metrics That Matter

### For Prospects
- Total savings ($ and %)
- Payback period (hours/days, not months)
- Transaction speed improvement
- Elimination of intermediaries

### For Use Case Validity
- Large enough volume to show meaningful savings
- Clear current pain point with quantifiable costs
- Realistic genome denomination for the industry
- Demonstrable competitive advantage

## Revenue Model Components

### Direct Savings
- Eliminated intermediary fees
- Reduced reconciliation costs
- Faster settlement (working capital benefits)
- Lower compliance overhead

### Potential Revenue Streams
- Float on issued genomes
- Premium services (instant settlement, analytics)
- Network effects (more participants = more value)
- Reduced spoilage/delays (for physical goods)

## Validation Checklist

Before finalizing a use case:
- [ ] Genome denomination clearly defined and justified
- [ ] Average transaction size stated as assumption
- [ ] Genome count calculated correctly (volume ÷ denomination)
- [ ] Onli cost = genome count × $0.01
- [ ] Comparison to blockchain AND traditional methods
- [ ] Revenue projection model explained
- [ ] Payback period calculated and reasonable
- [ ] All numbers cited or derived from stated assumptions
- [ ] Calculator implements same logic as whitepaper
- [ ] Mobile and desktop experiences tested
- [ ] Links point to correct routes
- [ ] Domain references use onli.one

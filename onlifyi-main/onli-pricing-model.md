# Onli Pricing Model - Correct Calculation Method

## Core Principle
**Onli charges $0.01 per asset, NOT per dollar volume**

## Formula
```
Total Onli Cost = Number of Assets × $0.01
Number of Assets = Total Transaction Volume ÷ Asset Denomination
```

## Use Case Asset Denominations

### 1. Acme Foods (Trade Finance)
- **Asset Denomination**: $1 per OnliTrade token
- **Why**: Small farmers, perishable goods, need granular payments
- **Average Transaction**: $50,000 per shipment
- **Number of Assets per Transaction**: 50,000 tokens
- **Onli Cost per Transaction**: 50,000 × $0.01 = $500
- **Status**: ✅ Current calculations are CORRECT

### 2. GlobalTech Electronics (Supply Chain Currency)
- **Asset Denomination**: $500 per OnliCredit (suggested midpoint of $100-$1,000 range)
- **Why**: B2B payments, component purchases, bulk orders
- **Average Transaction**: $250,000 per supplier payment
- **Number of Assets per Transaction**: $250,000 ÷ $500 = 500 tokens
- **Onli Cost per Transaction**: 500 × $0.01 = $5
- **Status**: ❌ Current calculations are WRONG (need to recalculate)

### 3. Heritage Capital (Family Office Assets)
- **Asset Denomination**: $100,000 per microcommodity token
- **Why**: Large institutional transfers, high-value assets
- **Average Transaction**: $50,000,000 per capital movement
- **Number of Assets per Transaction**: $50,000,000 ÷ $100,000 = 500 tokens
- **Onli Cost per Transaction**: 500 × $0.01 = $5
- **Status**: ❌ Current calculations are WRONG (need to recalculate)

## Recalculation Impact

### GlobalTech
- **OLD (WRONG)**: Onli cost = 0.01% of $42.3B = $4.23M annually
- **NEW (CORRECT)**: 
  - Annual volume: $42.3B
  - Asset denomination: $500
  - Number of assets: $42.3B ÷ $500 = 84.6M tokens
  - Onli cost: 84.6M × $0.01 = $846,000 annually
  - **Savings increase from $842.77M to $846.154M** (more attractive!)

### Heritage Capital
- **OLD (WRONG)**: Onli cost = 0.01% of $12.4B = $1.24M annually
- **NEW (CORRECT)**:
  - Annual volume: $12.4B
  - Asset denomination: $100,000
  - Number of assets: $12.4B ÷ $100,000 = 124,000 tokens
  - Onli cost: 124,000 × $0.01 = $1,240 annually
  - **Savings increase from $123.76M to $124.9986M** (much more attractive!)

## Key Insight
**Higher asset denominations = Lower Onli costs = More attractive ROI**

This makes Onli MUCH more competitive for high-value use cases!

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, TrendingDown } from "lucide-react";

export default function HeritageCalculator() {
  const [totalAUM, setTotalAUM] = useState(5);
  const [illiquidPercent, setIlliquidPercent] = useState(57);
  const [liquidityNeeded, setLiquidityNeeded] = useState(0.5);

  // Calculate illiquid assets
  const illiquidAssets = totalAUM * (illiquidPercent / 100);

  // Traditional secondary sale costs
  const secondaryDiscount = liquidityNeeded * 0.125; // 12.5% average discount
  const secondaryFees = liquidityNeeded * 0.025; // 2.5% transaction fees
  const secondaryTotalCost = secondaryDiscount + secondaryFees;

  // NAV loan costs (3-year term)
  const navInterest = liquidityNeeded * 0.08 * 3; // 8% annual interest over 3 years
  const navOriginationFee = liquidityNeeded * 0.02; // 2% origination
  const navLegalFees = 0.005; // $5M fixed
  const navTotalCost = navInterest + navOriginationFee + navLegalFees;

  // CORRECT Onli HLC costs (Asset-Based Model)
  const developerSub = 0.000006; // $6K/year (annual subscription) in billions
  
  // Asset-based calculation: Each HLC = $100,000 face value (Pretium)
  const assetDenomination = 100000; // $100k per HLC genome
  const numGenomes = (totalAUM * 1_000_000_000) / assetDenomination; // Total genomes for full AUM
  
  // Treasury deployment: $50K per 1B genome capacity (one-time)
  const treasuriesNeeded = Math.ceil(numGenomes / 1_000_000_000);
  const treasuryDeployment = (treasuriesNeeded * 50_000) / 1_000_000_000; // Convert to billions
  
  // Issuance cost: $0.05 per genome (one-time for initial minting)
  const issuanceCost = (numGenomes * 0.05) / 1_000_000_000; // Convert back to billions
  
  const onliYear1Cost = developerSub + treasuryDeployment + issuanceCost;
  const onliOngoingCost = developerSub; // Only $6K/year after Year 1 (no new issuances)

  // Savings
  const savingsVsSecondary = secondaryTotalCost - onliYear1Cost;
  const savingsVsNAV = navTotalCost - onliYear1Cost;
  const savingsPercentSecondary = ((savingsVsSecondary / secondaryTotalCost) * 100).toFixed(1);
  const savingsPercentNAV = ((savingsVsNAV / navTotalCost) * 100).toFixed(1);

  const formatCurrency = (value: number) => {
    if (value >= 1) {
      return `$${value.toFixed(2)}B`;
    } else {
      return `$${(value * 1000).toFixed(1)}M`;
    }
  };

  return (
    <Card className="p-6 bg-white border-neutral-200">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-green-100 rounded-lg">
          <Calculator className="w-5 h-5 text-green-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-neutral-900">
            Liquidity Cost Calculator
          </h3>
          <p className="text-sm text-neutral-600">
            Compare HLC costs vs. traditional liquidity solutions
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <Label htmlFor="total-aum" className="text-neutral-700">
              Total AUM (Billions USD)
            </Label>
            <Input
              id="total-aum"
              type="number"
              min="0.1"
              step="0.1"
              value={totalAUM}
              onChange={(e) => setTotalAUM(parseFloat(e.target.value) || 0)}
              className="text-lg font-medium"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="illiquid-percent" className="text-neutral-700">
              Illiquid Assets (%)
            </Label>
            <Input
              id="illiquid-percent"
              type="number"
              min="0"
              max="100"
              value={illiquidPercent}
              onChange={(e) => setIlliquidPercent(parseFloat(e.target.value) || 0)}
              className="text-lg font-medium"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="liquidity-needed" className="text-neutral-700">
              Liquidity Needed (Billions USD)
            </Label>
            <Input
              id="liquidity-needed"
              type="number"
              min="0.1"
              step="0.1"
              value={liquidityNeeded}
              onChange={(e) => setLiquidityNeeded(parseFloat(e.target.value) || 0)}
              className="text-lg font-medium"
            />
          </div>
        </div>

        {/* Results */}
        <div className="pt-6 border-t border-neutral-200">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="p-4 bg-neutral-50 rounded-lg">
              <p className="text-sm text-neutral-600 mb-1">Illiquid Assets</p>
              <p className="text-2xl font-bold text-neutral-900">
                {formatCurrency(illiquidAssets)}
              </p>
            </div>

            <div className="p-4 bg-red-50 rounded-lg">
              <p className="text-sm text-neutral-600 mb-1">Secondary Sale</p>
              <p className="text-2xl font-bold text-red-600">
                {formatCurrency(secondaryTotalCost)}
              </p>
              <p className="text-xs text-neutral-500 mt-1">12.5% discount + 2.5% fees</p>
            </div>

            <div className="p-4 bg-orange-50 rounded-lg">
              <p className="text-sm text-neutral-600 mb-1">NAV Loan (3yr)</p>
              <p className="text-2xl font-bold text-orange-600">
                {formatCurrency(navTotalCost)}
              </p>
              <p className="text-xs text-neutral-500 mt-1">8% annual interest</p>
            </div>

            <div className="p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-neutral-600 mb-1">HLC (Year 1)</p>
              <p className="text-2xl font-bold text-green-600">
                {formatCurrency(onliYear1Cost)}
              </p>
              <p className="text-xs text-neutral-500 mt-1">
                $6K/yr + ${(treasuryDeployment * 1000).toFixed(0)}M treasury + $
                {(issuanceCost * 1000).toFixed(0)}M issuance
              </p>
              <p className="text-xs text-neutral-500">
                Year 2+: ${(onliOngoingCost * 1000).toFixed(0)}M/yr
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 bg-gradient-to-br from-red-50 to-green-50 rounded-lg border border-green-200">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  <TrendingDown className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-neutral-700 mb-1">
                    Savings vs. Secondary Sale
                  </h4>
                  <p className="text-3xl font-bold text-green-600 mb-1">
                    {formatCurrency(savingsVsSecondary)}
                  </p>
                  <p className="text-sm text-neutral-600">
                    <span className="font-medium">{savingsPercentSecondary}%</span> cost
                    reduction
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-orange-50 to-green-50 rounded-lg border border-green-200">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  <TrendingDown className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-neutral-700 mb-1">
                    Savings vs. NAV Loan
                  </h4>
                  <p className="text-3xl font-bold text-green-600 mb-1">
                    {formatCurrency(savingsVsNAV)}
                  </p>
                  <p className="text-sm text-neutral-600">
                    <span className="font-medium">{savingsPercentNAV}%</span> cost reduction
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4 text-xs text-neutral-500 space-y-1">
          <p>
            <strong>Assumptions:</strong> Secondary sale at 12.5% discount + 2.5% fees. NAV
            loan at 8% annual interest over 3 years + 2% origination. HLC costs include $6K
            developer subscription (annual), $50K per 1B genome treasury deployment (one-time), and $0.05 per genome issuance (one-time).
            Each Heritage Liquidity Credit (HLC) = $100,000 face value. Average transaction: $50M (500 HLC).
            NO transfer fees - all transfers and distributions are free after issuance.
          </p>
        </div>
      </div>
    </Card>
  );
}

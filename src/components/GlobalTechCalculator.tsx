import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, TrendingDown } from "lucide-react";

export default function GlobalTechCalculator() {
  const [manufacturingSpend, setManufacturingSpend] = useState(10);
  const [crossBorderPercent, setCrossBorderPercent] = useState(70);

  // Calculate cross-border spend
  const crossBorderSpend = manufacturingSpend * (crossBorderPercent / 100);

  // Traditional banking costs (4.04% of cross-border spend)
  const traditionalCost = crossBorderSpend * 0.0404;

  // CORRECT Onli Pricing (Asset-Based Model)
  const developerSub = 0.000006; // $6K/year (annual subscription) in billions
  
  // Asset-based calculation: Each GTC = $50 face value (Pretium)
  const assetDenomination = 50; // $50 per GTC genome
  const numGenomes = (crossBorderSpend * 1_000_000_000) / assetDenomination; // Convert billions to dollars, divide by denomination
  
  // Treasury deployment: $50K per 1B genome capacity (one-time)
  const treasuriesNeeded = Math.ceil(numGenomes / 1_000_000_000);
  const treasuryDeployment = (treasuriesNeeded * 50_000) / 1_000_000_000; // Convert to billions
  
  // Issuance cost: $0.05 per genome (annual, as new invoices are issued)
  const issuanceCost = (numGenomes * 0.05) / 1_000_000_000; // Convert back to billions
  
  const onliYear1 = developerSub + treasuryDeployment + issuanceCost;
  const onliOngoing = developerSub + issuanceCost; // $6K subscription + issuance costs annually

  // Savings
  const savingsYear1 = traditionalCost - onliYear1;
  const savingsYear2Plus = traditionalCost - onliOngoing;
  const savingsPercentYr1 = ((savingsYear1 / traditionalCost) * 100).toFixed(1);
  const savingsPercentYr2 = ((savingsYear2Plus / traditionalCost) * 100).toFixed(1);
  const paybackDays = Math.ceil((onliYear1 / traditionalCost) * 365);
  const fiveYearSavings = (traditionalCost * 5) - (onliYear1 + (onliOngoing * 4));

  const formatCurrency = (value: number) => {
    if (value >= 1000) {
      return `${(value / 1000).toFixed(1)}T`;
    } else if (value >= 1) {
      return `${value.toFixed(1)}B`;
    } else {
      return `${(value * 1000).toFixed(0)}M`;
    }
  };

  return (
    <Card className="p-6 bg-white border-neutral-200">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-blue-100">
          <Calculator className="w-5 h-5 text-blue-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-neutral-900">
            Cost Savings Calculator
          </h3>
          <p className="text-sm text-neutral-600">
            Calculate your potential savings with GlobalTech Credit
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="manufacturing-spend" className="text-neutral-700">
              Annual Manufacturing Spend (Billions USD)
            </Label>
            <Input
              id="manufacturing-spend"
              type="number"
              min="0.1"
              step="0.1"
              value={manufacturingSpend}
              onChange={(e) => setManufacturingSpend(parseFloat(e.target.value) || 0)}
              className="text-lg font-medium"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cross-border" className="text-neutral-700">
              Cross-Border Payments (%)
            </Label>
            <Input
              id="cross-border"
              type="number"
              min="0"
              max="100"
              value={crossBorderPercent}
              onChange={(e) => setCrossBorderPercent(parseFloat(e.target.value) || 0)}
              className="text-lg font-medium"
            />
          </div>
        </div>

        {/* Results */}
        <div className="pt-6 border-t border-neutral-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-neutral-50">
              <p className="text-sm text-neutral-600 mb-1">Cross-Border Spend</p>
              <p className="text-2xl font-bold text-neutral-900">
                ${formatCurrency(crossBorderSpend)}
              </p>
            </div>

            <div className="p-4 bg-red-50">
              <p className="text-sm text-neutral-600 mb-1">Traditional Cost</p>
              <p className="text-2xl font-bold text-red-600">
                ${formatCurrency(traditionalCost)}
              </p>
              <p className="text-xs text-neutral-500 mt-1">4.04% of cross-border</p>
            </div>

            <div className="p-4 bg-green-50">
              <p className="text-sm text-neutral-600 mb-1">Onli Cost</p>
              <p className="text-2xl font-bold text-green-600">
                ${formatCurrency(onliYear1)}
              </p>
              <p className="text-xs text-neutral-500 mt-1">
                Year 1 (incl. one-time costs)
              </p>
              <p className="text-xs text-neutral-500">
                Year 2+: ${formatCurrency(onliOngoing)}
              </p>
            </div>
          </div>

          <div className="mt-6 p-6 bg-gradient-to-br from-blue-50 to-green-50 border border-blue-200">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-white shadow-sm">
                <TrendingDown className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-neutral-900 mb-2">
                  Annual Savings
                </h4>
                <p className="text-4xl font-bold text-green-600 mb-1">
                  ${formatCurrency(savingsYear1)}
                </p>
                <p className="text-sm text-neutral-600 mb-3">
                  Year 2+: ${formatCurrency(savingsYear2Plus)}/year
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-neutral-700">
                  <div>
                    <span className="font-medium">{savingsPercentYr1}%</span> reduction (Yr 1)
                  </div>
                  <div className="border-l border-neutral-300 pl-4">
                    <span className="font-medium">{savingsPercentYr2}%</span> reduction (Yr 2+)
                  </div>
                  <div className="border-l border-neutral-300 pl-4">
                    <span className="font-medium">{paybackDays} days</span> payback
                  </div>
                  <div className="border-l border-neutral-300 pl-4">
                    <span className="font-medium">
                      ${formatCurrency(fiveYearSavings)}
                    </span>{" "}
                    5-year savings
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4 text-xs text-neutral-500 space-y-1">
          <p>
            <strong>Assumptions:</strong> Traditional banking at 4.04% of cross-border spend. 
            Onli costs: $6K/year developer subscription (annual), $50K per 1B genome treasury deployment (one-time), 
            $0.05 per genome issuance (annual). Each GlobalTech Credit (GTC) = $50 face value. 
            Average invoice: $250K (5,000 GTC). Zero transfer fees after issuance.
          </p>
        </div>
      </div>
    </Card>
  );
}

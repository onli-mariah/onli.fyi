import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, TrendingDown } from "lucide-react";

export default function AcmeFoodsCalculator() {
  const [annualPurchases, setAnnualPurchases] = useState(250); // in millions - UPDATED from $50M
  const [supplierCount, setSupplierCount] = useState(120);

  // Traditional costs
  const trustDepositPercent = 0.30; // 30% upfront deposit
  const trustDepositAmount = annualPurchases * trustDepositPercent;
  const opportunityCostRate = 0.05; // 5% annual opportunity cost
  const opportunityCost = trustDepositAmount * opportunityCostRate;
  
  const wireTransferFee = 35 / 1000000; // $35 per wire
  const avgTransactionsPerYear = supplierCount * 12; // Monthly payments
  const wireTransferCosts = avgTransactionsPerYear * wireTransferFee;
  
  const forexSpread = annualPurchases * 0.025; // 2.5% forex spread
  const letterOfCreditFees = annualPurchases * 0.015; // 1.5% LC fees
  
  const traditionalTotalCost = opportunityCost + wireTransferCosts + forexSpread + letterOfCreditFees;

  // CORRECT Onli Acme Credit (AC) Microcurrency Revenue Model
  const developerSub = 0.000006; // $6K/year (annual subscription) in millions
  
  // Microcurrency model: Each AC = $1 face value (Pretium)
  const assetDenomination = 1; // $1 per AC genome
  const numGenomes = annualPurchases * 1_000_000; // Convert millions to number of $1 genomes
  
  // Treasury deployment: $50K per 1B genome capacity (one-time)
  const treasuriesNeeded = Math.ceil(numGenomes / 1_000_000_000);
  const treasuryDeployment = (treasuriesNeeded * 50_000) / 1_000_000; // Convert to millions
  
  // Issuance cost: $0.05 per genome (annual, as AC is sold to participants)
  const issuanceCost = (numGenomes * 0.05) / 1_000_000; // Convert back to millions
  
  // REVENUE MODEL: Acme SELLS AC at $1.00 each
  const acSalesRevenue = annualPurchases; // Sell AC at $1.00 per AC
  const acGrossProfit = acSalesRevenue - issuanceCost; // $0.95 margin per AC
  
  const onliYear1Cost = developerSub + treasuryDeployment + issuanceCost;
  const onliOngoingCost = developerSub + issuanceCost; // Annual subscription + issuance costs

  // Savings
  const year1Savings = traditionalTotalCost - onliYear1Cost;
  const ongoingSavings = traditionalTotalCost - onliOngoingCost;
  const savingsPercent = ((year1Savings / traditionalTotalCost) * 100).toFixed(1);
  const savingsPercentOngoing = ((ongoingSavings / traditionalTotalCost) * 100).toFixed(1);
  const paybackDays = Math.ceil((onliYear1Cost / traditionalTotalCost) * 365);
  const fiveYearSavings = (traditionalTotalCost * 5) - (onliYear1Cost + (onliOngoingCost * 4));

  // Additional benefits
  const capitalReleased = trustDepositAmount; // Capital no longer tied up

  const formatCurrency = (value: number) => {
    if (value >= 1000) {
      return `${value.toFixed(1)}B`;
    } else if (value >= 1) {
      return `${value.toFixed(1)}M`;
    } else {
      return `${(value * 1000).toFixed(0)}K`;
    }
  };

  return (
    <Card className="p-6 bg-white border-neutral-200">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-amber-100">
          <Calculator className="w-5 h-5 text-amber-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-neutral-900">
            Cost Savings Calculator
          </h3>
          <p className="text-sm text-neutral-600">
            Calculate your potential savings with Acme Credit
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="annual-purchases" className="text-neutral-700">
              Annual Purchases (Millions USD)
            </Label>
            <Input
              id="annual-purchases"
              type="number"
              min="1"
              step="10"
              value={annualPurchases}
              onChange={(e) => setAnnualPurchases(parseFloat(e.target.value) || 0)}
              className="text-lg font-medium"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="supplier-count" className="text-neutral-700">
              Number of Suppliers
            </Label>
            <Input
              id="supplier-count"
              type="number"
              min="1"
              value={supplierCount}
              onChange={(e) => setSupplierCount(parseInt(e.target.value) || 0)}
              className="text-lg font-medium"
            />
          </div>
        </div>

        {/* Results */}
        <div className="pt-6 border-t border-neutral-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-neutral-50">
              <p className="text-sm text-neutral-600 mb-1">Annual Purchases</p>
              <p className="text-2xl font-bold text-neutral-900">
                ${formatCurrency(annualPurchases)}
              </p>
            </div>

            <div className="p-4 bg-red-50">
              <p className="text-sm text-neutral-600 mb-1">Traditional Cost</p>
              <p className="text-2xl font-bold text-red-600">
                ${formatCurrency(traditionalTotalCost)}
              </p>
              <p className="text-xs text-neutral-500 mt-1">
                Deposits + Fees + FX + LC
              </p>
            </div>

            <div className="p-4 bg-green-50">
              <p className="text-sm text-neutral-600 mb-1">Onli Cost</p>
              <p className="text-2xl font-bold text-green-600">
                ${formatCurrency(onliYear1Cost)}
              </p>
              <p className="text-xs text-neutral-500 mt-1">
                Year 1 (incl. one-time costs)
              </p>
              <p className="text-xs text-neutral-500">
                Year 2+: ${formatCurrency(onliOngoingCost)}
              </p>
            </div>
          </div>

          <div className="mt-6 p-6 bg-gradient-to-br from-amber-50 to-green-50 border border-amber-200">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-white shadow-sm">
                <TrendingDown className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-neutral-900 mb-2">
                  Annual Savings
                </h4>
                <p className="text-4xl font-bold text-green-600 mb-1">
                  ${formatCurrency(year1Savings)}
                </p>
                <p className="text-sm text-neutral-600 mb-3">
                  Year 2+: ${formatCurrency(ongoingSavings)}/year
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-neutral-700">
                  <div>
                    <span className="font-medium">{savingsPercent}%</span> reduction (Yr 1)
                  </div>
                  <div className="border-l border-neutral-300 pl-4">
                    <span className="font-medium">{savingsPercentOngoing}%</span> reduction (Yr 2+)
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="p-4 bg-blue-50 border border-blue-200">
              <p className="text-sm font-semibold text-neutral-900 mb-1">
                💰 Capital Released
              </p>
              <p className="text-2xl font-bold text-blue-600">
                ${formatCurrency(capitalReleased)}
              </p>
              <p className="text-xs text-neutral-600 mt-1">
                No longer tied up in trust deposits
              </p>
            </div>
            
            <div className="p-4 bg-amber-50 border border-amber-200">
              <p className="text-sm font-semibold text-neutral-900 mb-1">
                💵 AC Sales Revenue (Annual)
              </p>
              <p className="text-2xl font-bold text-amber-600">
                ${formatCurrency(acGrossProfit)}
              </p>
              <p className="text-xs text-neutral-600 mt-1">
                95% margin ($1.00 sale - $0.05 issuance)
              </p>
            </div>
          </div>
        </div>

        <div className="pt-4 text-xs text-neutral-500 space-y-1">
          <p>
            <strong>Assumptions:</strong> Traditional costs include 30% trust deposits (5% opportunity cost), 
            wire fees, 2.5% forex spread, 1.5% LC fees. Onli costs: $6K/year developer subscription (annual), 
            $50K per 1B genome treasury deployment (one-time), $0.05 per genome issuance (annual). 
            Each Acme Credit (AC) = $1. Acme SELLS AC to participants at $1.00, generating 95% gross margin. 
            Zero transfer fees after issuance.
          </p>
        </div>
      </div>
    </Card>
  );
}

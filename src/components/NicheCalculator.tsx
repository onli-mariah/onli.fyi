import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function NicheCalculator() {
  // Input states
  const [raiseAmount, setRaiseAmount] = useState(5); // in millions
  const [contractPrice, setContractPrice] = useState(0.25);
  const [faceValue, setFaceValue] = useState(1.0);
  const [maturityMonths, setMaturityMonths] = useState(24);

  // Calculations
  const raiseAmountDollars = raiseAmount * 1_000_000;
  const genomesNeeded = raiseAmountDollars / contractPrice;
  
  // Onli costs (calculated in dollars)
  const developerSubDollars = 6000;
  const treasuriesNeeded = Math.ceil(genomesNeeded / 1_000_000_000);
  const treasuryMintDollars = treasuriesNeeded * 50000;
  const issuanceCostDollars = genomesNeeded * 0.05;
  
  // Year 1 costs
  const year1CostDollars = developerSubDollars + treasuryMintDollars + issuanceCostDollars;
  
  // Net proceeds (issuance cost paid from investor funds)
  const netProceeds = raiseAmountDollars - issuanceCostDollars;
  const actualIssuerCost = developerSubDollars + treasuryMintDollars;
  const costPercentage = (actualIssuerCost / raiseAmountDollars) * 100;
  
  // Investor returns
  const investorROI = ((faceValue - contractPrice) / contractPrice) * 100;
  const annualizedROI = (investorROI / maturityMonths) * 12;
  
  // Traditional bond comparison
  const traditionalCost = raiseAmountDollars * 0.05; // 5% average
  const savings = traditionalCost - actualIssuerCost;
  const savingsPercentage = (savings / traditionalCost) * 100;
  
  // Equity comparison
  const equityDilution = 25; // typical 25% dilution
  const equityValue = raiseAmountDollars / (equityDilution / 100);
  const equityLost = equityValue * (equityDilution / 100);

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8 p-6">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Niche Capital Market Calculator</h1>
        <p className="text-muted-foreground text-lg">
          Model your Niche offering and compare costs to traditional fundraising methods
        </p>
      </div>

      {/* Input Section */}
      <Card>
        <CardHeader>
          <CardTitle>Offering Configuration</CardTitle>
          <CardDescription>
            Configure your Niche micro-commodity offering parameters
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="raiseAmount">Total Raise Amount ($ millions)</Label>
              <Input
                id="raiseAmount"
                type="number"
                value={raiseAmount}
                onChange={(e) => setRaiseAmount(Number(e.target.value))}
                min="0.1"
                step="0.1"
              />
              <p className="text-sm text-muted-foreground">
                Target capital to raise from investors
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="contractPrice">Contract Price ($ per unit)</Label>
              <Input
                id="contractPrice"
                type="number"
                value={contractPrice}
                onChange={(e) => setContractPrice(Number(e.target.value))}
                min="0.01"
                step="0.01"
              />
              <p className="text-sm text-muted-foreground">
                Discounted price investors pay upfront
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="faceValue">Face Value ($ per unit)</Label>
              <Input
                id="faceValue"
                type="number"
                value={faceValue}
                onChange={(e) => setFaceValue(Number(e.target.value))}
                min="0.01"
                step="0.01"
              />
              <p className="text-sm text-muted-foreground">
                Redemption value at maturity
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="maturityMonths">Maturity Period (months)</Label>
              <Input
                id="maturityMonths"
                type="number"
                value={maturityMonths}
                onChange={(e) => setMaturityMonths(Number(e.target.value))}
                min="1"
                step="1"
              />
              <p className="text-sm text-muted-foreground">
                Time until investors can redeem at face value
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Offering Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Offering Summary</CardTitle>
          <CardDescription>
            Key metrics for your Niche micro-commodity offering
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Total Units Issued</p>
              <p className="text-2xl font-bold">{genomesNeeded.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Treasuries Required</p>
              <p className="text-2xl font-bold">{treasuriesNeeded}</p>
              <p className="text-xs text-muted-foreground">
                ({(treasuriesNeeded * 1_000_000_000).toLocaleString()} genome capacity)
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Investor ROI</p>
              <p className="text-2xl font-bold text-green-600">{investorROI.toFixed(1)}%</p>
              <p className="text-xs text-muted-foreground">
                ({annualizedROI.toFixed(1)}% annualized)
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Issuer Costs */}
      <Card>
        <CardHeader>
          <CardTitle>Issuer Costs (Onli)</CardTitle>
          <CardDescription>
            Your costs to launch and manage the Niche offering
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-sm">Developer Subscription (annual)</span>
              <span className="font-semibold">$6,000</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-sm">Treasury Deployment (one-time)</span>
              <span className="font-semibold">${treasuryMintDollars.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-sm">Genome Issuance ({genomesNeeded.toLocaleString('en-US', { maximumFractionDigits: 0 })} × $0.05)</span>
              <span className="font-semibold">${issuanceCostDollars.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
            </div>
            <div className="flex justify-between items-center py-3 bg-muted rounded-lg px-4">
              <span className="font-semibold">Total Year 1 Costs</span>
              <span className="text-xl font-bold">${year1CostDollars.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
            </div>
            <div className="bg-blue-50 dark:bg-blue-950 rounded-lg p-4 space-y-2">
              <p className="text-sm font-semibold text-blue-900 dark:text-blue-100">Net Proceeds Analysis</p>
              <div className="flex justify-between text-sm">
                <span>Investor Funds Received:</span>
                <span className="font-semibold">${raiseAmountDollars.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Less: Issuance Cost (paid from investor funds):</span>
                <span className="font-semibold">-${issuanceCostDollars.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
              </div>
              <div className="flex justify-between text-sm pt-2 border-t border-blue-200 dark:border-blue-800">
                <span className="font-semibold">Net Proceeds to Issuer:</span>
                <span className="font-bold text-lg">${netProceeds.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="font-semibold">Actual Issuer Cost:</span>
                <span className="font-bold text-lg">${actualIssuerCost.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Cost as % of Raise:</span>
                <span className="font-semibold">{costPercentage.toFixed(2)}%</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Investor Returns */}
      <Card>
        <CardHeader>
          <CardTitle>Investor Returns</CardTitle>
          <CardDescription>
            Example returns for a $100,000 investment
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border rounded-lg p-4 space-y-2">
                <p className="text-sm font-semibold">Hold to Maturity</p>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>Investment:</span>
                    <span>$100,000</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Units Purchased:</span>
                    <span>{(100000 / contractPrice).toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Value at Maturity:</span>
                    <span className="font-semibold">${((100000 / contractPrice) * faceValue).toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
                  </div>
                  <div className="flex justify-between text-sm pt-2 border-t">
                    <span className="font-semibold">Profit:</span>
                    <span className="font-bold text-green-600">${(((100000 / contractPrice) * faceValue) - 100000).toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>ROI:</span>
                    <span className="font-bold text-green-600">{investorROI.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Annualized:</span>
                    <span className="font-bold text-green-600">{annualizedROI.toFixed(1)}%</span>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4 space-y-2">
                <p className="text-sm font-semibold">Early Exit (50% of maturity)</p>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>Investment:</span>
                    <span>$100,000</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Hold Period:</span>
                    <span>{Math.floor(maturityMonths / 2)} months</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Secondary Market Price:</span>
                    <span>${((contractPrice + faceValue) / 2).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Sale Proceeds:</span>
                    <span className="font-semibold">${((100000 / contractPrice) * ((contractPrice + faceValue) / 2)).toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
                  </div>
                  <div className="flex justify-between text-sm pt-2 border-t">
                    <span className="font-semibold">Profit:</span>
                    <span className="font-bold text-green-600">${(((100000 / contractPrice) * ((contractPrice + faceValue) / 2)) - 100000).toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>ROI:</span>
                    <span className="font-bold text-green-600">{(((((100000 / contractPrice) * ((contractPrice + faceValue) / 2)) - 100000) / 100000) * 100).toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Annualized:</span>
                    <span className="font-bold text-green-600">{((((((100000 / contractPrice) * ((contractPrice + faceValue) / 2)) - 100000) / 100000) * 100) / (maturityMonths / 2) * 12).toFixed(1)}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Comparison to Traditional Methods */}
      <Card>
        <CardHeader>
          <CardTitle>Cost Comparison: Niche vs. Traditional Methods</CardTitle>
          <CardDescription>
            See how Niche compares to traditional fundraising approaches
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-2">Method</th>
                  <th className="text-right py-3 px-2">Upfront Cost</th>
                  <th className="text-right py-3 px-2">% of Raise</th>
                  <th className="text-right py-3 px-2">Equity Dilution</th>
                  <th className="text-left py-3 px-2">Key Trade-off</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50 dark:bg-green-950">
                  <td className="py-3 px-2 font-semibold">Niche (Onli)</td>
                  <td className="text-right py-3 px-2 font-semibold">${actualIssuerCost.toLocaleString('en-US', { maximumFractionDigits: 0 })}</td>
                  <td className="text-right py-3 px-2 font-semibold text-green-600">{costPercentage.toFixed(2)}%</td>
                  <td className="text-right py-3 px-2 font-semibold text-green-600">0%</td>
                  <td className="py-3 px-2 text-xs">Obligation to deliver/repay</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-2">Traditional Bond</td>
                  <td className="text-right py-3 px-2">${traditionalCost.toLocaleString('en-US', { maximumFractionDigits: 0 })}</td>
                  <td className="text-right py-3 px-2">5.0%</td>
                  <td className="text-right py-3 px-2">0%</td>
                  <td className="py-3 px-2 text-xs">High costs, credit rating required</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-2">STO</td>
                  <td className="text-right py-3 px-2">$100,000</td>
                  <td className="text-right py-3 px-2">{((100000 / raiseAmountDollars) * 100).toFixed(2)}%</td>
                  <td className="text-right py-3 px-2">0%</td>
                  <td className="py-3 px-2 text-xs">High compliance costs</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-2">ICO</td>
                  <td className="text-right py-3 px-2">$50,000-$150,000</td>
                  <td className="text-right py-3 px-2">1-3%</td>
                  <td className="text-right py-3 px-2">Varies</td>
                  <td className="py-3 px-2 text-xs">80%+ scam rate, no legal protection</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-2">Equity (Series A)</td>
                  <td className="text-right py-3 px-2">$25,000</td>
                  <td className="text-right py-3 px-2">{((25000 / raiseAmountDollars) * 100).toFixed(2)}%</td>
                  <td className="text-right py-3 px-2 text-red-600">25%</td>
                  <td className="py-3 px-2 text-xs">Permanent ownership loss</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-blue-50 dark:bg-blue-950 rounded-lg p-4 space-y-2">
            <p className="font-semibold text-blue-900 dark:text-blue-100">Savings vs. Traditional Bond</p>
            <div className="flex justify-between items-center">
              <span className="text-sm">Traditional Cost:</span>
              <span className="font-semibold">${traditionalCost.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Niche Cost:</span>
              <span className="font-semibold">${actualIssuerCost.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-blue-200 dark:border-blue-800">
              <span className="font-bold">Total Savings:</span>
              <span className="text-xl font-bold text-green-600">${savings.toLocaleString('en-US', { maximumFractionDigits: 0 })} ({savingsPercentage.toFixed(1)}%)</span>
            </div>
          </div>

          <div className="mt-4 bg-purple-50 dark:bg-purple-950 rounded-lg p-4 space-y-2">
            <p className="font-semibold text-purple-900 dark:text-purple-100">Value Preserved vs. Equity Financing</p>
            <div className="flex justify-between items-center">
              <span className="text-sm">Implied Company Valuation (25% dilution):</span>
              <span className="font-semibold">${equityValue.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Equity Value Lost (25%):</span>
              <span className="font-semibold text-red-600">${equityLost.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-purple-200 dark:border-purple-800">
              <span className="font-bold">Ownership Preserved with Niche:</span>
              <span className="text-xl font-bold text-green-600">100% (${equityLost.toLocaleString('en-US', { maximumFractionDigits: 0 })} value retained)</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Assumptions */}
      <Card>
        <CardHeader>
          <CardTitle>Assumptions</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="text-sm space-y-1 text-muted-foreground">
            <li>• Developer subscription: $6,000/year (includes 3 seats)</li>
            <li>• Treasury deployment: $50,000 per 1 billion genome capacity</li>
            <li>• Genome issuance: $0.05 per genome (paid from investor funds)</li>
            <li>• Traditional bond issuance: 5% of raise amount (industry average)</li>
            <li>• Equity dilution: 25% typical for Series A round</li>
            <li>• Secondary market pricing: Midpoint between contract price and face value</li>
            <li>• All costs shown are one-time unless specified as annual</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

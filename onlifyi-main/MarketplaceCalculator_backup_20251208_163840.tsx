import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { useState, useMemo } from "react";
import { ArrowRight, TrendingDown } from "lucide-react";

export default function MarketplaceCalculator() {
  // Input states
  const [monthlyTransactions, setMonthlyTransactions] = useState(100000); // 100K default
  const [totalAssets, setTotalAssets] = useState(10000000); // 10M default
  const [timeframe, setTimeframe] = useState(5); // 5 years default

  // Helper function to format currency
  const formatCurrency = (amount: number): string => {
    if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(1)}M`;
    } else if (amount >= 1000) {
      return `$${(amount / 1000).toFixed(0)}K`;
    } else {
      return `$${amount.toFixed(0)}`;
    }
  };

  // Calculate costs for each platform
  const calculations = useMemo(() => {
    const annualTransactions = monthlyTransactions * 12;
    const totalTransactions = annualTransactions * timeframe;

    // Oracle Costs (Hyperledger Fabric - zero protocol transaction fees)
    const oracleInitialDev = 1500000;
    const oracleAnnualInfra = monthlyTransactions <= 10000 ? 15156 :
                              monthlyTransactions <= 1000000 ? 61968 : 258012;
    const oracleTotalCost = oracleInitialDev + (oracleAnnualInfra * timeframe);

    // Amazon Costs (Managed Blockchain - Hyperledger Fabric)
    const amazonInitialDev = 400000;
    const amazonMembershipAnnual = 2628; // $0.30/hour = $219/month
    const amazonPeerNodesAnnual = monthlyTransactions <= 10000 ? 2976 :
                                   monthlyTransactions <= 1000000 ? 29760 : 59520;
    const amazonStorageAnnual = monthlyTransactions <= 10000 ? 600 :
                                monthlyTransactions <= 1000000 ? 6000 : 12000;
    const amazonAnnualTotal = amazonMembershipAnnual + amazonPeerNodesAnnual + amazonStorageAnnual;
    const amazonTotalCost = amazonInitialDev + (amazonAnnualTotal * timeframe);

    // Ethereum Layer-1 Costs
    const ethereumInitialDev = 225000;
    const ethereumAnnualInfra = monthlyTransactions <= 10000 ? 5000 :
                                monthlyTransactions <= 1000000 ? 12000 : 24000;
    const ethereumGasCost = 1.10; // December 2025 simple transfer cost
    const ethereumAnnualGas = annualTransactions * ethereumGasCost;
    const ethereumTotalCost = ethereumInitialDev + (ethereumAnnualInfra * timeframe) + (ethereumAnnualGas * timeframe);

    // Arbitrum/Optimism Layer-2 Costs
    const l2InitialDev = 400000; // Slightly higher than L1 due to additional setup
    const l2AnnualInfra = ethereumAnnualInfra; // Same infrastructure as Ethereum L1
    const l2GasCost = 0.09; // December 2025 Arbitrum/Optimism cost
    const l2AnnualGas = annualTransactions * l2GasCost;
    const l2TotalCost = l2InitialDev + (l2AnnualInfra * timeframe) + (l2AnnualGas * timeframe);

    // Polygon zkEVM Costs
    const polygonInitialDev = 400000;
    const polygonAnnualInfra = ethereumAnnualInfra;
    const polygonGasCost = 0.19; // December 2025 Polygon zkEVM cost
    const polygonAnnualGas = annualTransactions * polygonGasCost;
    const polygonTotalCost = polygonInitialDev + (polygonAnnualInfra * timeframe) + (polygonAnnualGas * timeframe);

    // Onli Costs
    const onliAnnualSubscription = 6000;
    const onliTreasuryDeployment = 50000;
    const onliGenomeIssuanceCost = 0.05;
    
    // Optimized genome calculation (denomination strategy)
    // Assume 10:1 denomination ratio for optimization
    const optimizedGenomes = Math.ceil(totalAssets / 10);
    const onliGenomeIssuance = optimizedGenomes * onliGenomeIssuanceCost;
    const onliTotalCost = (onliAnnualSubscription * timeframe) + onliTreasuryDeployment + onliGenomeIssuance;

    // Calculate savings
    const savingsVsOracle = ((oracleTotalCost - onliTotalCost) / oracleTotalCost) * 100;
    const savingsVsAmazon = ((amazonTotalCost - onliTotalCost) / amazonTotalCost) * 100;
    const savingsVsEthereum = ((ethereumTotalCost - onliTotalCost) / ethereumTotalCost) * 100;
    const savingsVsL2 = ((l2TotalCost - onliTotalCost) / l2TotalCost) * 100;
    const savingsVsPolygon = ((polygonTotalCost - onliTotalCost) / polygonTotalCost) * 100;

    return {
      oracle: {
        initialDev: oracleInitialDev,
        annualInfra: oracleAnnualInfra,
        total: oracleTotalCost,
      },
      amazon: {
        initialDev: amazonInitialDev,
        annualTotal: amazonAnnualTotal,
        total: amazonTotalCost,
      },
      ethereum: {
        initialDev: ethereumInitialDev,
        annualInfra: ethereumAnnualInfra,
        annualGas: ethereumAnnualGas,
        total: ethereumTotalCost,
      },
      l2: {
        initialDev: l2InitialDev,
        annualInfra: l2AnnualInfra,
        annualGas: l2AnnualGas,
        total: l2TotalCost,
      },
      polygon: {
        initialDev: polygonInitialDev,
        annualInfra: polygonAnnualInfra,
        annualGas: polygonAnnualGas,
        total: polygonTotalCost,
      },
      onli: {
        annualSubscription: onliAnnualSubscription,
        treasuryDeployment: onliTreasuryDeployment,
        genomeIssuance: onliGenomeIssuance,
        optimizedGenomes,
        total: onliTotalCost,
      },
      savings: {
        vsOracle: savingsVsOracle,
        vsAmazon: savingsVsAmazon,
        vsEthereum: savingsVsEthereum,
        vsL2: savingsVsL2,
        vsPolygon: savingsVsPolygon,
      },
      totalTransactions,
    };
  }, [monthlyTransactions, totalAssets, timeframe]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="container max-w-5xl px-6 pt-32 pb-12 mx-auto">
        <div className="mb-6 text-sm tracking-wider text-muted-foreground">TCO CALCULATOR</div>
        <h1 className="mb-8 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
          Marketplace Platform Cost Calculator
        </h1>
        <p className="text-xl text-muted-foreground md:text-2xl">
          Calculate total cost of ownership for your digital asset marketplace across Oracle, Amazon, Ethereum, Layer-2, and Onli platforms.
        </p>
      </section>

      {/* Calculator Inputs */}
      <section className="container max-w-5xl px-6 py-12 mx-auto border-t">
        <h2 className="mb-8 text-3xl font-bold">Your Requirements</h2>
        
        <div className="grid gap-8 md:grid-cols-3">
          {/* Monthly Transactions */}
          <Card>
            <CardHeader>
              <CardTitle>Monthly Transactions</CardTitle>
              <CardDescription>Number of transactions per month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <Input 
                  type="number" 
                  value={monthlyTransactions} 
                  onChange={(e) => setMonthlyTransactions(parseInt(e.target.value) || 0)}
                  className="text-lg"
                />
              </div>
              <Slider 
                value={[Math.log10(monthlyTransactions)]} 
                onValueChange={([value]) => setMonthlyTransactions(Math.round(10 ** value))}
                min={3} // 1K
                max={7.3} // 20M
                step={0.1}
                className="mt-2"
              />
              <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                <span>1K</span>
                <span>20M</span>
              </div>
            </CardContent>
          </Card>

          {/* Total Assets */}
          <Card>
            <CardHeader>
              <CardTitle>Total Assets</CardTitle>
              <CardDescription>Number of unique digital assets</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <Input 
                  type="number" 
                  value={totalAssets} 
                  onChange={(e) => setTotalAssets(parseInt(e.target.value) || 0)}
                  className="text-lg"
                />
              </div>
              <Slider 
                value={[Math.log10(totalAssets)]} 
                onValueChange={([value]) => setTotalAssets(Math.round(10 ** value))}
                min={3} // 1K
                max={9} // 1B
                step={0.1}
                className="mt-2"
              />
              <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                <span>1K</span>
                <span>1B</span>
              </div>
            </CardContent>
          </Card>

          {/* Timeframe */}
          <Card>
            <CardHeader>
              <CardTitle>Analysis Timeframe</CardTitle>
              <CardDescription>Years to calculate TCO</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <Input 
                  type="number" 
                  value={timeframe} 
                  onChange={(e) => setTimeframe(parseInt(e.target.value) || 1)}
                  min={1}
                  max={10}
                  className="text-lg"
                />
              </div>
              <Slider 
                value={[timeframe]} 
                onValueChange={([value]) => setTimeframe(value)}
                min={1}
                max={10}
                step={1}
                className="mt-2"
              />
              <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                <span>1 year</span>
                <span>10 years</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="p-4 mt-8 rounded-lg bg-muted">
          <p className="text-sm text-muted-foreground">
            <strong>Total Transactions:</strong> {formatCurrency(calculations.totalTransactions)} over {timeframe} year{timeframe > 1 ? 's' : ''}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            <strong>Onli Genomes (10:1 optimized):</strong> {formatCurrency(calculations.onli.optimizedGenomes)} genomes for {formatCurrency(totalAssets)} assets
          </p>
        </div>
      </section>

      {/* Results */}
      <section className="container max-w-5xl px-6 py-12 mx-auto border-t">
        <h2 className="mb-8 text-3xl font-bold">Total Cost of Ownership ({timeframe} Year{timeframe > 1 ? 's' : ''})</h2>

        <div className="grid gap-6 mb-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Oracle */}
          <Card>
            <CardHeader>
              <CardTitle>Oracle Blockchain</CardTitle>
              <CardDescription>Hyperledger Fabric</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4 text-3xl font-bold">{formatCurrency(calculations.oracle.total)}</div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Initial Development:</span>
                  <span>{formatCurrency(calculations.oracle.initialDev)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Infrastructure ({timeframe}yr):</span>
                  <span>{formatCurrency(calculations.oracle.annualInfra * timeframe)}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Amazon */}
          <Card>
            <CardHeader>
              <CardTitle>Amazon Managed Blockchain</CardTitle>
              <CardDescription>Hyperledger Fabric</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4 text-3xl font-bold">{formatCurrency(calculations.amazon.total)}</div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Initial Development:</span>
                  <span>{formatCurrency(calculations.amazon.initialDev)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Platform Fees ({timeframe}yr):</span>
                  <span>{formatCurrency(calculations.amazon.annualTotal * timeframe)}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Ethereum L1 */}
          <Card>
            <CardHeader>
              <CardTitle>Ethereum Layer-1</CardTitle>
              <CardDescription>Mainnet ($1.10/tx)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4 text-3xl font-bold">{formatCurrency(calculations.ethereum.total)}</div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Initial Development:</span>
                  <span>{formatCurrency(calculations.ethereum.initialDev)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Infrastructure ({timeframe}yr):</span>
                  <span>{formatCurrency(calculations.ethereum.annualInfra * timeframe)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Gas Fees ({timeframe}yr):</span>
                  <span>{formatCurrency(calculations.ethereum.annualGas * timeframe)}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Arbitrum/Optimism L2 */}
          <Card>
            <CardHeader>
              <CardTitle>Arbitrum/Optimism L2</CardTitle>
              <CardDescription>Optimistic Rollup ($0.09/tx)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4 text-3xl font-bold">{formatCurrency(calculations.l2.total)}</div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Initial Development:</span>
                  <span>{formatCurrency(calculations.l2.initialDev)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Infrastructure ({timeframe}yr):</span>
                  <span>{formatCurrency(calculations.l2.annualInfra * timeframe)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Gas Fees ({timeframe}yr):</span>
                  <span>{formatCurrency(calculations.l2.annualGas * timeframe)}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Polygon zkEVM */}
          <Card>
            <CardHeader>
              <CardTitle>Polygon zkEVM</CardTitle>
              <CardDescription>ZK Rollup ($0.19/tx)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4 text-3xl font-bold">{formatCurrency(calculations.polygon.total)}</div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Initial Development:</span>
                  <span>{formatCurrency(calculations.polygon.initialDev)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Infrastructure ({timeframe}yr):</span>
                  <span>{formatCurrency(calculations.polygon.annualInfra * timeframe)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Gas Fees ({timeframe}yr):</span>
                  <span>{formatCurrency(calculations.polygon.annualGas * timeframe)}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Onli */}
          <Card className="border-2 border-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                Onli Platform
                <TrendingDown className="w-5 h-5 text-green-600" />
              </CardTitle>
              <CardDescription>All-inclusive subscription</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4 text-3xl font-bold text-green-600">{formatCurrency(calculations.onli.total)}</div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Subscription ({timeframe}yr):</span>
                  <span>{formatCurrency(calculations.onli.annualSubscription * timeframe)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Treasury Deployment:</span>
                  <span>{formatCurrency(calculations.onli.treasuryDeployment)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Genome Issuance:</span>
                  <span>{formatCurrency(calculations.onli.genomeIssuance)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Transaction Fees:</span>
                  <span className="font-bold text-green-600">$0</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Savings Comparison */}
        <div className="p-8 rounded-lg bg-muted">
          <h3 className="mb-6 text-2xl font-bold">Cost Savings with Onli</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-4 rounded-lg bg-background">
              <div className="mb-2 text-sm text-muted-foreground">vs. Oracle</div>
              <div className={`text-2xl font-bold ${calculations.savings.vsOracle > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {calculations.savings.vsOracle > 0 ? '+' : ''}{calculations.savings.vsOracle.toFixed(1)}%
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                {calculations.savings.vsOracle > 0 ? 'Savings' : 'More expensive'}
              </div>
            </div>

            <div className="p-4 rounded-lg bg-background">
              <div className="mb-2 text-sm text-muted-foreground">vs. Amazon</div>
              <div className={`text-2xl font-bold ${calculations.savings.vsAmazon > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {calculations.savings.vsAmazon > 0 ? '+' : ''}{calculations.savings.vsAmazon.toFixed(1)}%
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                {calculations.savings.vsAmazon > 0 ? 'Savings' : 'More expensive'}
              </div>
            </div>

            <div className="p-4 rounded-lg bg-background">
              <div className="mb-2 text-sm text-muted-foreground">vs. Ethereum L1</div>
              <div className={`text-2xl font-bold ${calculations.savings.vsEthereum > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {calculations.savings.vsEthereum > 0 ? '+' : ''}{calculations.savings.vsEthereum.toFixed(1)}%
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                {calculations.savings.vsEthereum > 0 ? 'Savings' : 'More expensive'}
              </div>
            </div>

            <div className="p-4 rounded-lg bg-background">
              <div className="mb-2 text-sm text-muted-foreground">vs. Arbitrum/Optimism L2</div>
              <div className={`text-2xl font-bold ${calculations.savings.vsL2 > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {calculations.savings.vsL2 > 0 ? '+' : ''}{calculations.savings.vsL2.toFixed(1)}%
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                {calculations.savings.vsL2 > 0 ? 'Savings' : 'More expensive'}
              </div>
            </div>

            <div className="p-4 rounded-lg bg-background">
              <div className="mb-2 text-sm text-muted-foreground">vs. Polygon zkEVM</div>
              <div className={`text-2xl font-bold ${calculations.savings.vsPolygon > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {calculations.savings.vsPolygon > 0 ? '+' : ''}{calculations.savings.vsPolygon.toFixed(1)}%
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                {calculations.savings.vsPolygon > 0 ? 'Savings' : 'More expensive'}
              </div>
            </div>
          </div>

          <div className="p-4 mt-6 border-l-4 border-yellow-500 bg-background">
            <p className="text-sm text-muted-foreground">
              <strong>Important:</strong> Onli's cost structure scales with asset count, not transaction count. At high asset volumes (100M+), Amazon may be more cost-effective. The calculations above assume 10:1 genome denomination optimization.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container max-w-5xl px-6 py-12 mx-auto border-t">
        <div className="p-8 rounded-lg bg-muted">
          <h3 className="mb-4 text-2xl font-bold">Read the Full Analysis</h3>
          <p className="mb-6 text-lg text-muted-foreground">
            Explore the comprehensive platform comparison with detailed breakdowns, recommendations by scale, and architectural considerations.
          </p>
          <Button asChild>
            <a href="/marketplace-comparison">View Full Report</a>
          </Button>
        </div>
      </section>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ArrowLeft, Info } from "lucide-react";
import { useState, useMemo } from "react";
import { Link } from "wouter";

export default function MarketplaceCalculator() {
  // Core scenario inputs
  const [assetsIssued, setAssetsIssued] = useState(10000);
  const [monthlyTransactions, setMonthlyTransactions] = useState(50000);
  const [analysisYears, setAnalysisYears] = useState(5);
  const [annualDataGrowthGB, setAnnualDataGrowthGB] = useState(500);

  // Smart contract complexity
  const [smartContractComplexity, setSmartContractComplexity] = useState<"low" | "medium" | "high">("medium");

  // FTE inputs (as percentages for slider, converted to decimals)
  const [onliFTEPercent, setOnliFTEPercent] = useState(25); // 0.25 FTE
  const [awsFTEPercent, setAwsFTEPercent] = useState(100); // 1.0 FTE
  const [oracleFTEPercent, setOracleFTEPercent] = useState(100); // 1.0 FTE
  const [ethereumFTEPercent, setEthereumFTEPercent] = useState(100); // 1.0 FTE

  // Smart contract development costs by complexity
  const smartContractCosts = {
    low: { aws: 15000, oracle: 18000, ethereum: 12000 },
    medium: { aws: 50000, oracle: 60000, ethereum: 40000 },
    high: { aws: 100000, oracle: 120000, ethereum: 80000 },
  };

  // Calculate all platform TCOs
  const calculations = useMemo(() => {
    const annualTransactions = monthlyTransactions * 12;
    const onliFTE = onliFTEPercent / 100;
    const awsFTE = awsFTEPercent / 100;
    const oracleFTE = oracleFTEPercent / 100;
    const ethereumFTE = ethereumFTEPercent / 100;

    // ===== ONLI TCO =====
    const onliTreasury = 50000; // One-time
    const onliAssetIssuance = assetsIssued * 0.05; // $0.05 per asset
    const onliAnnualSubscription = 6000;
    const onliAnnualLabor = onliFTE * 120000; // Junior IT staff
    const onliTotalRecurring = (onliAnnualSubscription + onliAnnualLabor) * analysisYears;
    const onliTotal = onliTreasury + onliAssetIssuance + onliTotalRecurring;

    // ===== AWS MANAGED BLOCKCHAIN TCO =====
    const awsSmartContract = smartContractCosts[smartContractComplexity].aws;
    const awsSecurityAudit = 8000;
    const awsIntegration = 20000;
    const awsDeployment = 5000;
    const awsUpfront = awsSmartContract + awsSecurityAudit + awsIntegration + awsDeployment;

    // AWS Infrastructure (annual, compounding storage)
    const awsNetworkMembership = 0.30 * 8760; // $0.30/hr
    const awsPeerNodes = 2 * 0.068 * 8760; // 2 × bc.t3.small @ $0.068/hr
    const awsCloudWatch = 50 * 12;
    const awsSecretsManager = 0.40 * 10 * 12;
    const awsBackup = annualDataGrowthGB * 0.023 * 12;

    let awsTotalInfra = 0;
    for (let year = 1; year <= analysisYears; year++) {
      const yearStorage = annualDataGrowthGB * year * 0.10 * 12; // $0.10/GB-month
      awsTotalInfra += awsNetworkMembership + awsPeerNodes + yearStorage + awsCloudWatch + awsSecretsManager + awsBackup;
    }

    // AWS Labor
    const awsDevOpsBase = 0.25 * 145000; // 0.25 FTE DevOps
    const awsBlockchainEngineer = awsFTE * 217000;
    const awsTraining = 1300;
    const awsAnnualLabor = awsDevOpsBase + awsBlockchainEngineer + awsTraining;
    const awsTotalLabor = awsAnnualLabor * analysisYears;

    const awsTotal = awsUpfront + awsTotalInfra + awsTotalLabor;

    // ===== ORACLE BLOCKCHAIN TCO =====
    const oracleSmartContract = smartContractCosts[smartContractComplexity].oracle;
    const oracleSecurityAudit = 8000;
    const oracleIntegration = 25000;
    const oracleDeployment = 7000;
    const oracleUpfront = oracleSmartContract + oracleSecurityAudit + oracleIntegration + oracleDeployment;

    // Oracle Infrastructure (annual, compounding storage)
    const ocpuCount = assetsIssued < 5000 ? 2 : assetsIssued < 100000 ? 8 : 16;
    const oraclePlatformCompute = ocpuCount * 0.1075 * 8760;
    const oracleLoadBalancer = 0.015 * 8760;

    let oracleTotalInfra = 0;
    for (let year = 1; year <= analysisYears; year++) {
      const yearStorageTB = (annualDataGrowthGB * year) / 1024;
      const yearStorage = yearStorageTB * 70.40 * 12; // $70.40/TB-month
      oracleTotalInfra += oraclePlatformCompute + yearStorage + oracleLoadBalancer;
    }

    // Oracle Labor
    const oracleDevOpsBase = 0.25 * 145000;
    const oracleBlockchainEngineer = oracleFTE * 217000;
    const oracleTraining = 1400;
    const oracleAnnualLabor = oracleDevOpsBase + oracleBlockchainEngineer + oracleTraining;
    const oracleTotalLabor = oracleAnnualLabor * analysisYears;

    const oracleTotal = oracleUpfront + oracleTotalInfra + oracleTotalLabor;

    // ===== ETHEREUM LAYER-2 TCO =====
    const ethereumSmartContract = smartContractCosts[smartContractComplexity].ethereum;
    const ethereumSecurityAudit = 12000;
    const ethereumIntegration = 25000;
    const ethereumTesting = 8000;
    const ethereumDeploymentGas = 200;
    const ethereumUpfront = ethereumSmartContract + ethereumSecurityAudit + ethereumIntegration + ethereumTesting + ethereumDeploymentGas;

    // Ethereum Infrastructure
    const ethereumManagedNode = 49 * 12; // $49/month
    const ethereumTotalInfra = ethereumManagedNode * analysisYears;

    // Ethereum Gas Fees
    const ethereumGasFeePerTx = 0.09; // $0.09 per transaction (L2 average)
    const ethereumTotalGasFees = annualTransactions * ethereumGasFeePerTx * analysisYears;

    // Ethereum Labor
    const ethereumDevOpsBase = 0.25 * 145000;
    const ethereumBlockchainEngineer = ethereumFTE * 217000;
    const ethereumTraining = 1200;
    const ethereumAnnualLabor = ethereumDevOpsBase + ethereumBlockchainEngineer + ethereumTraining;
    const ethereumTotalLabor = ethereumAnnualLabor * analysisYears;

    const ethereumTotal = ethereumUpfront + ethereumTotalInfra + ethereumTotalGasFees + ethereumTotalLabor;

    // Calculate savings percentages
    const savingsVsAWS = ((awsTotal - onliTotal) / awsTotal) * 100;
    const savingsVsOracle = ((oracleTotal - onliTotal) / oracleTotal) * 100;
    const savingsVsEthereum = ((ethereumTotal - onliTotal) / ethereumTotal) * 100;

    return {
      onli: {
        upfront: onliTreasury + onliAssetIssuance,
        subscription: onliAnnualSubscription * analysisYears,
        labor: onliAnnualLabor * analysisYears,
        total: onliTotal,
        breakdown: {
          treasury: onliTreasury,
          assetIssuance: onliAssetIssuance,
          subscription: onliAnnualSubscription * analysisYears,
          labor: onliAnnualLabor * analysisYears,
        },
      },
      aws: {
        upfront: awsUpfront,
        infrastructure: awsTotalInfra,
        labor: awsTotalLabor,
        total: awsTotal,
        breakdown: {
          smartContract: awsSmartContract,
          audit: awsSecurityAudit,
          integration: awsIntegration,
          deployment: awsDeployment,
          infrastructure: awsTotalInfra,
          labor: awsTotalLabor,
        },
      },
      oracle: {
        upfront: oracleUpfront,
        infrastructure: oracleTotalInfra,
        labor: oracleTotalLabor,
        total: oracleTotal,
        breakdown: {
          smartContract: oracleSmartContract,
          audit: oracleSecurityAudit,
          integration: oracleIntegration,
          deployment: oracleDeployment,
          infrastructure: oracleTotalInfra,
          labor: oracleTotalLabor,
        },
      },
      ethereum: {
        upfront: ethereumUpfront,
        infrastructure: ethereumTotalInfra,
        gasFees: ethereumTotalGasFees,
        labor: ethereumTotalLabor,
        total: ethereumTotal,
        breakdown: {
          smartContract: ethereumSmartContract,
          audit: ethereumSecurityAudit,
          integration: ethereumIntegration,
          testing: ethereumTesting,
          deploymentGas: ethereumDeploymentGas,
          infrastructure: ethereumTotalInfra,
          gasFees: ethereumTotalGasFees,
          labor: ethereumTotalLabor,
        },
      },
      savings: {
        vsAWS: savingsVsAWS,
        vsOracle: savingsVsOracle,
        vsEthereum: savingsVsEthereum,
      },
    };
  }, [
    assetsIssued,
    monthlyTransactions,
    analysisYears,
    annualDataGrowthGB,
    smartContractComplexity,
    onliFTEPercent,
    awsFTEPercent,
    oracleFTEPercent,
    ethereumFTEPercent,
  ]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatPercent = (percent: number) => {
    return `${percent > 0 ? percent.toFixed(1) : 0}%`;
  };

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Header */}
        <div className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-10">
          <div className="container mx-auto px-4 py-4">
            <Link href="/marketplace-comparison">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Analysis
              </Button>
            </Link>
          </div>
        </div>

        {/* Hero */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Interactive TCO Calculator
            </h1>
            <p className="text-lg text-blue-100 max-w-3xl">
              Adjust parameters to calculate Total Cost of Ownership for your digital asset marketplace across Onli, AWS, Oracle, and Ethereum Layer 2. All pricing reflects December 2025 market rates.
            </p>
          </div>
        </div>

        {/* Calculator */}
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          
          {/* Scenario Parameters */}
          <Card className="p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">Scenario Parameters</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Assets Issued */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label className="text-base font-semibold">Assets Issued</Label>
                  <span className="text-lg font-bold text-blue-600">{assetsIssued.toLocaleString()}</span>
                </div>
                <Slider
                  value={[assetsIssued]}
                  onValueChange={([value]) => setAssetsIssued(value)}
                  min={100}
                  max={10000000}
                  step={100}
                  className="w-full"
                />
                <p className="text-sm text-gray-600">Total number of digital assets to be issued</p>
              </div>

              {/* Monthly Transactions */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label className="text-base font-semibold">Monthly Transactions</Label>
                  <span className="text-lg font-bold text-blue-600">{monthlyTransactions.toLocaleString()}</span>
                </div>
                <Slider
                  value={[monthlyTransactions]}
                  onValueChange={([value]) => setMonthlyTransactions(value)}
                  min={1000}
                  max={10000000}
                  step={1000}
                  className="w-full"
                />
                <p className="text-sm text-gray-600">Average monthly transaction volume</p>
              </div>

              {/* Analysis Timeframe */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label className="text-base font-semibold">Analysis Timeframe</Label>
                  <span className="text-lg font-bold text-blue-600">{analysisYears} years</span>
                </div>
                <Slider
                  value={[analysisYears]}
                  onValueChange={([value]) => setAnalysisYears(value)}
                  min={1}
                  max={10}
                  step={1}
                  className="w-full"
                />
                <p className="text-sm text-gray-600">Total cost of ownership period</p>
              </div>

              {/* Annual Data Growth */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label className="text-base font-semibold">Annual Data Growth (GB)</Label>
                  <span className="text-lg font-bold text-blue-600">{annualDataGrowthGB} GB</span>
                </div>
                <Slider
                  value={[annualDataGrowthGB]}
                  onValueChange={([value]) => setAnnualDataGrowthGB(value)}
                  min={10}
                  max={5000}
                  step={10}
                  className="w-full"
                />
                <p className="text-sm text-gray-600">Data generated per year (affects storage costs)</p>
              </div>

              {/* Smart Contract Complexity */}
              <div className="space-y-3">
                <Label className="text-base font-semibold">Smart Contract Complexity</Label>
                <Select value={smartContractComplexity} onValueChange={(value: "low" | "medium" | "high") => setSmartContractComplexity(value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low ($12k-$18k)</SelectItem>
                    <SelectItem value="medium">Medium ($40k-$60k)</SelectItem>
                    <SelectItem value="high">High ($80k-$120k)</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-sm text-gray-600">Development costs for blockchain platforms (Onli requires no smart contracts)</p>
              </div>
            </div>

            {/* Labor Requirements */}
            <div className="mt-8 pt-8 border-t">
              <h3 className="text-xl font-bold mb-6">Labor Requirements (Full-Time Equivalents)</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Onli FTE */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label className="text-base">Onli FTE</Label>
                    <span className="text-lg font-bold text-green-600">{(onliFTEPercent / 100).toFixed(2)} FTE</span>
                  </div>
                  <Slider
                    value={[onliFTEPercent]}
                    onValueChange={([value]) => setOnliFTEPercent(value)}
                    min={25}
                    max={500}
                    step={25}
                    className="w-full"
                  />
                  <p className="text-sm text-gray-600">Junior IT staff @ $120k/year (suggested: 0.25-1.0 FTE)</p>
                </div>

                {/* AWS FTE */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label className="text-base">AWS FTE</Label>
                    <span className="text-lg font-bold text-blue-600">{(awsFTEPercent / 100).toFixed(2)} FTE</span>
                  </div>
                  <Slider
                    value={[awsFTEPercent]}
                    onValueChange={([value]) => setAwsFTEPercent(value)}
                    min={25}
                    max={500}
                    step={25}
                    className="w-full"
                  />
                  <p className="text-sm text-gray-600">Blockchain engineers @ $217k/year (suggested: 0.75-3.0 FTE)</p>
                </div>

                {/* Oracle FTE */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label className="text-base">Oracle FTE</Label>
                    <span className="text-lg font-bold text-blue-600">{(oracleFTEPercent / 100).toFixed(2)} FTE</span>
                  </div>
                  <Slider
                    value={[oracleFTEPercent]}
                    onValueChange={([value]) => setOracleFTEPercent(value)}
                    min={25}
                    max={500}
                    step={25}
                    className="w-full"
                  />
                  <p className="text-sm text-gray-600">Blockchain engineers @ $217k/year (suggested: 0.75-3.0 FTE)</p>
                </div>

                {/* Ethereum FTE */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label className="text-base">Ethereum L2 FTE</Label>
                    <span className="text-lg font-bold text-blue-600">{(ethereumFTEPercent / 100).toFixed(2)} FTE</span>
                  </div>
                  <Slider
                    value={[ethereumFTEPercent]}
                    onValueChange={([value]) => setEthereumFTEPercent(value)}
                    min={25}
                    max={500}
                    step={25}
                    className="w-full"
                  />
                  <p className="text-sm text-gray-600">Blockchain engineers @ $217k/year (suggested: 0.75-3.0 FTE)</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Results Summary */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <Card className="p-6 bg-green-50 border-green-200">
              <div className="text-sm text-green-700 font-semibold mb-2">Onli</div>
              <div className="text-3xl font-bold text-green-700">{formatCurrency(calculations.onli.total)}</div>
              <div className="text-sm text-green-600 mt-2">Baseline</div>
            </Card>

            <Card className="p-6">
              <div className="text-sm text-gray-600 font-semibold mb-2">AWS Managed Blockchain</div>
              <div className="text-3xl font-bold">{formatCurrency(calculations.aws.total)}</div>
              <div className="text-sm text-red-600 mt-2">{formatPercent(calculations.savings.vsAWS)} savings</div>
            </Card>

            <Card className="p-6">
              <div className="text-sm text-gray-600 font-semibold mb-2">Oracle Blockchain</div>
              <div className="text-3xl font-bold">{formatCurrency(calculations.oracle.total)}</div>
              <div className="text-sm text-red-600 mt-2">{formatPercent(calculations.savings.vsOracle)} savings</div>
            </Card>

            <Card className="p-6">
              <div className="text-sm text-gray-600 font-semibold mb-2">Ethereum (L2)</div>
              <div className="text-3xl font-bold">{formatCurrency(calculations.ethereum.total)}</div>
              <div className="text-sm text-red-600 mt-2">{formatPercent(calculations.savings.vsEthereum)} savings</div>
            </Card>
          </div>

          {/* Detailed Breakdown */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-6">Detailed Cost Breakdown</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Cost Category</th>
                    <th className="border border-gray-300 px-4 py-3 text-right font-semibold">
                      <div className="flex items-center justify-end gap-2">
                        Onli
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="w-4 h-4 text-gray-500" />
                          </TooltipTrigger>
                          <TooltipContent className="max-w-xs">
                            <p className="font-semibold mb-2">Onli Cost Structure</p>
                            <p className="text-sm mb-2"><strong>Upfront:</strong> Treasury deployment ($50k) + asset issuance ($0.05/asset)</p>
                            <p className="text-sm mb-2"><strong>Recurring:</strong> Platform subscription ($6k/year) + labor (junior IT staff)</p>
                            <p className="text-sm mb-2"><strong>Transaction Fees:</strong> $0 (zero transaction costs)</p>
                            <p className="text-xs mt-2 text-gray-400 border-t pt-2">Source: <sup>[1]</sup> Onli Corporation Official Pricing</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-right font-semibold">
                      <div className="flex items-center justify-end gap-2">
                        AWS
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="w-4 h-4 text-gray-500" />
                          </TooltipTrigger>
                          <TooltipContent className="max-w-xs">
                            <p className="font-semibold mb-2">AWS Cost Structure</p>
                            <p className="text-sm mb-2"><strong>Upfront:</strong> Smart contract dev, security audit, integration, deployment</p>
                            <p className="text-sm mb-2"><strong>Infrastructure:</strong> Network membership ($0.30/hr), peer nodes, storage ($0.10/GB-mo), monitoring</p>
                            <p className="text-sm mb-2"><strong>Labor:</strong> DevOps + blockchain engineers ($217k/year)</p>
                            <p className="text-xs mt-2 text-gray-400 border-t pt-2">Source: <sup>[2]</sup> AWS Official Pricing, <sup>[5]</sup> ChatGPT Analysis</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-right font-semibold">
                      <div className="flex items-center justify-end gap-2">
                        Oracle
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="w-4 h-4 text-gray-500" />
                          </TooltipTrigger>
                          <TooltipContent className="max-w-xs">
                            <p className="font-semibold mb-2">Oracle Cost Structure</p>
                            <p className="text-sm mb-2"><strong>Upfront:</strong> Smart contract dev, security audit, integration, deployment</p>
                            <p className="text-sm mb-2"><strong>Infrastructure:</strong> vCPU hours ($0.1075/hr), storage ($70.40/TB-mo), load balancer</p>
                            <p className="text-sm mb-2"><strong>Labor:</strong> DevOps + blockchain engineers ($217k/year)</p>
                            <p className="text-xs mt-2 text-gray-400 border-t pt-2">Source: <sup>[3]</sup> Oracle Official Pricing, <sup>[6]</sup> Claude Analysis</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-right font-semibold">
                      <div className="flex items-center justify-end gap-2">
                        Ethereum L2
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="w-4 h-4 text-gray-500" />
                          </TooltipTrigger>
                          <TooltipContent className="max-w-xs">
                            <p className="font-semibold mb-2">Ethereum L2 Cost Structure</p>
                            <p className="text-sm mb-2"><strong>Upfront:</strong> Smart contract dev, security audit, integration, testing, deployment gas</p>
                            <p className="text-sm mb-2"><strong>Infrastructure:</strong> Managed node provider ($49/month)</p>
                            <p className="text-sm mb-2"><strong>Transaction Fees:</strong> $0.09 per transaction (scales with volume)</p>
                            <p className="text-sm mb-2"><strong>Labor:</strong> DevOps + blockchain engineers ($217k/year)</p>
                            <p className="text-xs mt-2 text-gray-400 border-t pt-2">Source: <sup>[4]</sup> l2fees.info (Dec 2025), <sup>[5]</sup> ChatGPT Analysis</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">
                      <div className="flex items-center gap-2">
                        Upfront Development
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="w-4 h-4 text-gray-500" />
                          </TooltipTrigger>
                          <TooltipContent className="max-w-xs">
                            <p className="font-semibold mb-2">What's included:</p>
                            <p className="text-sm">Smart contract development, security audits, integration/testing, deployment</p>
                            <p className="font-semibold mt-2 mb-1">Why it varies:</p>
                            <p className="text-sm"><strong>Onli:</strong> Treasury + asset issuance (one-time, scales with assets)</p>
                            <p className="text-sm"><strong>Blockchain:</strong> Custom smart contracts + professional audits + extensive testing</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-right font-bold text-green-700">{formatCurrency(calculations.onli.upfront)}</td>
                    <td className="border border-gray-300 px-4 py-3 text-right">{formatCurrency(calculations.aws.upfront)}</td>
                    <td className="border border-gray-300 px-4 py-3 text-right">{formatCurrency(calculations.oracle.upfront)}</td>
                    <td className="border border-gray-300 px-4 py-3 text-right">{formatCurrency(calculations.ethereum.upfront)}</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">
                      <div className="flex items-center gap-2">
                        Platform Subscription
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="w-4 h-4 text-gray-500" />
                          </TooltipTrigger>
                          <TooltipContent className="max-w-xs">
                            <p className="font-semibold mb-2">What's included:</p>
                            <p className="text-sm">Base platform access, APIs, and core services</p>
                            <p className="font-semibold mt-2 mb-1">Why it varies:</p>
                            <p className="text-sm"><strong>Onli:</strong> Fixed $6k/year all-inclusive subscription</p>
                            <p className="text-sm"><strong>AWS/Oracle:</strong> Pay-as-you-go metered billing (included in infrastructure)</p>
                            <p className="text-sm"><strong>Ethereum L2:</strong> Managed node provider access</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-right font-bold text-green-700">{formatCurrency(calculations.onli.subscription)}</td>
                    <td className="border border-gray-300 px-4 py-3 text-right text-gray-400 text-xs">Included in infrastructure</td>
                    <td className="border border-gray-300 px-4 py-3 text-right text-gray-400 text-xs">Included in infrastructure</td>
                    <td className="border border-gray-300 px-4 py-3 text-right">{formatCurrency(calculations.ethereum.infrastructure)}</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">
                      <div className="flex items-center gap-2">
                        Infrastructure
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="w-4 h-4 text-gray-500" />
                          </TooltipTrigger>
                          <TooltipContent className="max-w-xs">
                            <p className="font-semibold mb-2">What's included:</p>
                            <p className="text-sm">Compute, storage, network, database, monitoring, security, backup</p>
                            <p className="font-semibold mt-2 mb-1">Why it varies:</p>
                            <p className="text-sm"><strong>Onli:</strong> $0 - All included in subscription</p>
                            <p className="text-sm"><strong>AWS/Oracle:</strong> Metered billing for compute hours, storage growth, network transfer</p>
                            <p className="text-sm"><strong>Ethereum L2:</strong> Included in node provider subscription</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-right font-bold text-green-700">$0</td>
                    <td className="border border-gray-300 px-4 py-3 text-right">{formatCurrency(calculations.aws.infrastructure)}</td>
                    <td className="border border-gray-300 px-4 py-3 text-right">{formatCurrency(calculations.oracle.infrastructure)}</td>
                    <td className="border border-gray-300 px-4 py-3 text-right text-gray-400 text-xs">Included in subscription</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">
                      <div className="flex items-center gap-2">
                        Transaction Fees
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="w-4 h-4 text-gray-500" />
                          </TooltipTrigger>
                          <TooltipContent className="max-w-xs">
                            <p className="font-semibold mb-2">What's included:</p>
                            <p className="text-sm">Per-transaction costs (gas fees)</p>
                            <p className="font-semibold mt-2 mb-1">Why it varies:</p>
                            <p className="text-sm"><strong>Onli:</strong> $0 - Zero transaction fees</p>
                            <p className="text-sm"><strong>AWS/Oracle:</strong> $0 - Included in compute costs</p>
                            <p className="text-sm"><strong>Ethereum L2:</strong> $0.09 per transaction (scales with volume)</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-right font-bold text-green-700">$0</td>
                    <td className="border border-gray-300 px-4 py-3 text-right">$0</td>
                    <td className="border border-gray-300 px-4 py-3 text-right">$0</td>
                    <td className="border border-gray-300 px-4 py-3 text-right">{formatCurrency(calculations.ethereum.gasFees)}</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">
                      <div className="flex items-center gap-2">
                        Labor & Talent
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="w-4 h-4 text-gray-500" />
                          </TooltipTrigger>
                          <TooltipContent className="max-w-xs">
                            <p className="font-semibold mb-2">What's included:</p>
                            <p className="text-sm">DevOps engineers, blockchain specialists, training</p>
                            <p className="font-semibold mt-2 mb-1">Why it varies:</p>
                            <p className="text-sm"><strong>Onli:</strong> Junior IT staff ($120k/year) - no blockchain expertise required</p>
                            <p className="text-sm"><strong>Blockchain:</strong> Senior blockchain engineers ($217k/year) + DevOps + ongoing training</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-right font-bold text-green-700">{formatCurrency(calculations.onli.labor)}</td>
                    <td className="border border-gray-300 px-4 py-3 text-right">{formatCurrency(calculations.aws.labor)}</td>
                    <td className="border border-gray-300 px-4 py-3 text-right">{formatCurrency(calculations.oracle.labor)}</td>
                    <td className="border border-gray-300 px-4 py-3 text-right">{formatCurrency(calculations.ethereum.labor)}</td>
                  </tr>
                  <tr className="bg-blue-50 font-bold">
                    <td className="border border-gray-300 px-4 py-3">Total {analysisYears}-Year TCO</td>
                    <td className="border border-gray-300 px-4 py-3 text-right text-green-700">{formatCurrency(calculations.onli.total)}</td>
                    <td className="border border-gray-300 px-4 py-3 text-right">{formatCurrency(calculations.aws.total)}</td>
                    <td className="border border-gray-300 px-4 py-3 text-right">{formatCurrency(calculations.oracle.total)}</td>
                    <td className="border border-gray-300 px-4 py-3 text-right">{formatCurrency(calculations.ethereum.total)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>

          {/* References */}
          <div className="mt-8 p-6 bg-gray-50 rounded-lg text-sm text-gray-700">
            <h3 className="font-bold mb-3 text-base">References & Data Sources</h3>
            <div className="space-y-1">
              <p><sup>[1]</sup> Onli Corporation Official Pricing Documentation (December 2025)</p>
              <p><sup>[2]</sup> Amazon Web Services - Managed Blockchain Pricing (December 2025)</p>
              <p><sup>[3]</sup> Oracle Cloud Infrastructure - Blockchain Platform Pricing (December 2025)</p>
              <p><sup>[4]</sup> L2 Fees - Real-time Ethereum Layer 2 Transaction Costs (December 2025)</p>
              <p><sup>[5]</sup> ChatGPT Cost Analysis - Smart Contract Development and Audit Estimates (December 2025)</p>
              <p><sup>[6]</sup> Claude AI Cost Analysis - Blockchain Platform TCO Assessment (December 2025)</p>
              <p><sup>[13]</sup> Glassdoor Salary Data - Blockchain Engineers and DevOps Specialists (2025)</p>
              <p><sup>[14]</sup> Salary.com Compensation Data - Senior Technical Roles (2025)</p>
            </div>
            <p className="mt-4 text-xs text-gray-500 italic">
              All pricing reflects December 2025 market rates. Actual costs may vary based on specific implementation requirements, regional pricing, and negotiated enterprise agreements. Consult with platform vendors for current pricing and detailed quotes.
            </p>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}

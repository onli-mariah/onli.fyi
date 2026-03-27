import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Download, Calculator } from "lucide-react";
import { Link } from "wouter";

export default function MarketplaceComparison() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Use Cases
            </Button>
          </Link>
          <div className="flex gap-2">
            <Link href="/marketplace-comparison/calculator">
              <Button variant="outline" size="sm">
                <Calculator className="mr-2 h-4 w-4" />
                TCO Calculator
              </Button>
            </Link>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            The Complete Business Case for Digital Asset Marketplaces
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            A comprehensive total cost of ownership and return on investment analysis revealing why Onli delivers 36-80% cost savings and 59% higher ROI than traditional blockchain platforms.
          </p>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Executive Summary</h2>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Building a digital asset marketplace requires far more than selecting a blockchain platform. The complete business case encompasses development of eleven distinct application components, ongoing compliance infrastructure, comprehensive security measures, specialized talent acquisition, and risk management—all while racing against competitors to capture market share. Traditional analyses that focus solely on platform infrastructure costs miss 85-90% of the total investment required to launch and operate a successful digital asset marketplace.
            </p>

            <p>
              Traditional blockchain platforms (Oracle, Amazon Managed Blockchain, Ethereum, and Layer-2 solutions) require marketplace operators to build extensive custom infrastructure, maintain ongoing compliance systems, conduct regular security audits, and absorb transaction costs that scale linearly with volume. The five-year total cost of ownership for these platforms ranges from $18.11 million to $172.1 million for small-to-enterprise scale marketplaces, with development timelines extending six to nineteen months before generating first revenue.
            </p>

            <p>
              Onli's novel architecture fundamentally reimagines this equation. By providing actual possession of digital assets through hardware-enforced Vaults rather than ledger-based custody, Onli eliminates smart contract risk, custody vulnerabilities, and the need for extensive compliance infrastructure. The platform includes wallet functionality, identity management, compliance tooling, and audit trails within a $6,000 annual subscription. Most significantly, Onli enables marketplace operators to issue digital assets at 95%+ profit margins—a $0.05 genome can represent a dollar-for-dollar stablecoin or any subjectively priced asset, creating unprecedented revenue opportunities unavailable on traditional platforms.
            </p>
          </div>

          <Card className="mt-8 p-6 bg-blue-50 border-blue-200">
            <h3 className="text-xl font-bold mb-4">Key Findings</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>36-80% lower total cost of ownership:</strong> $8.88M-$62.07M savings over 5 years</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>59% higher return on investment:</strong> 2,560% vs 1,565% for best blockchain alternative</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>2.0 percentage points higher profit margin:</strong> 96.2% vs 94.2%</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>$17M-$62M additional profit:</strong> Over 5 years from reduced costs</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>95%+ asset issuance margins:</strong> $199.5M additional profit potential</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>2.5 weeks vs 6-19 months:</strong> $21M-$37M preserved revenue opportunity</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      {/* The Complete Application Stack */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">The Complete Application Stack</h2>
          
          <div className="prose prose-lg max-w-none mb-8">
            <p>
              A production-ready digital asset marketplace requires eleven distinct application components, each demanding specialized development expertise and ongoing maintenance. Understanding this complete stack is essential for accurate cost estimation, as platform fees represent only the foundation upon which these components must be built.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border p-3 text-left">Component</th>
                  <th className="border p-3 text-right">Blockchain Platform</th>
                  <th className="border p-3 text-right">Onli Platform</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3">Smart Contracts & Audits</td>
                  <td className="border p-3 text-right">$75K-$230K</td>
                  <td className="border p-3 text-right font-semibold text-green-600">$0</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border p-3">Wallet Infrastructure</td>
                  <td className="border p-3 text-right">$100K-$250K</td>
                  <td className="border p-3 text-right font-semibold text-green-600">$0 (included)</td>
                </tr>
                <tr>
                  <td className="border p-3">Frontend Application</td>
                  <td className="border p-3 text-right">$80K-$200K</td>
                  <td className="border p-3 text-right">$56K-$140K</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border p-3">Backend Services</td>
                  <td className="border p-3 text-right">$60K-$150K</td>
                  <td className="border p-3 text-right">$36K-$90K</td>
                </tr>
                <tr>
                  <td className="border p-3">Database & Storage</td>
                  <td className="border p-3 text-right">$5K-$50K</td>
                  <td className="border p-3 text-right font-semibold text-green-600">$0 (included)</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border p-3">Authentication & KYC</td>
                  <td className="border p-3 text-right">$50K-$200K</td>
                  <td className="border p-3 text-right font-semibold text-green-600">$0 (included)</td>
                </tr>
                <tr>
                  <td className="border p-3">Payment Processing</td>
                  <td className="border p-3 text-right">$30K-$80K</td>
                  <td className="border p-3 text-right">$30K-$80K</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border p-3">Search & Discovery</td>
                  <td className="border p-3 text-right">$20K-$60K</td>
                  <td className="border p-3 text-right">$20K-$60K</td>
                </tr>
                <tr>
                  <td className="border p-3">Analytics & Monitoring</td>
                  <td className="border p-3 text-right">$15K-$40K</td>
                  <td className="border p-3 text-right">$15K-$40K</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border p-3">Security Infrastructure</td>
                  <td className="border p-3 text-right">$30K-$100K</td>
                  <td className="border p-3 text-right">$10K-$20K</td>
                </tr>
                <tr>
                  <td className="border p-3">Testing & QA</td>
                  <td className="border p-3 text-right">$25K-$75K</td>
                  <td className="border p-3 text-right">$15K-$45K</td>
                </tr>
                <tr className="bg-blue-50 font-bold">
                  <td className="border p-3">Total Development</td>
                  <td className="border p-3 text-right">$490K-$1.44M</td>
                  <td className="border p-3 text-right text-green-600">$182K-$475K</td>
                </tr>
              </tbody>
            </table>
          </div>

          <Card className="mt-6 p-4 bg-green-50 border-green-200">
            <p className="font-semibold text-green-800">
              Onli Development Savings: $308,000 to $960,000 (63-67% reduction)
            </p>
          </Card>
        </div>
      </section>

      {/* Compliance Costs */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Compliance & Regulatory Infrastructure</h2>
          
          <div className="prose prose-lg max-w-none mb-8">
            <p>
              Digital asset marketplaces operate in a rapidly evolving regulatory environment. Financial institutions globally spend an estimated $206 billion annually on financial crime compliance, with 98% of institutions reporting increased compliance costs in 2023. For blockchain marketplaces, KYC/AML compliance requires third-party integrations, dedicated compliance teams, and ongoing legal counsel—costs that scale with transaction volume and jurisdictional complexity.
            </p>

            <p>
              Onli embeds compliance at the protocol level through Genes and Use Policies. Genes link digital assets to verified legal identities, automatically enforcing KYC requirements. Use Policies encode jurisdictional restrictions declaratively, executing automatically without smart contract vulnerabilities. Provenance creates tamper-evident audit trails for regulatory reporting, eliminating the need for separate compliance systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Blockchain Platform Compliance</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-slate-600">KYC/AML Integration</div>
                  <div className="font-semibold">$50K-$200K initial + $144K-$720K/year</div>
                </div>
                <div>
                  <div className="text-sm text-slate-600">Compliance Team</div>
                  <div className="font-semibold">$320K-$650K/year</div>
                </div>
                <div>
                  <div className="text-sm text-slate-600">Legal Counsel</div>
                  <div className="font-semibold">$100K-$500K/year</div>
                </div>
                <div>
                  <div className="text-sm text-slate-600">Audit Systems</div>
                  <div className="font-semibold">$50K-$150K initial + $20K-$60K/year</div>
                </div>
                <div className="pt-3 border-t">
                  <div className="text-sm text-slate-600">5-Year Total</div>
                  <div className="font-bold text-lg text-red-600">$2.66M - $9.14M</div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-green-50 border-green-200">
              <h3 className="text-xl font-bold mb-4 text-green-800">Onli Compliance</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-green-700">Built-in KYC/AML (Genes)</div>
                  <div className="font-semibold text-green-800">$0 (included)</div>
                </div>
                <div>
                  <div className="text-sm text-green-700">Protocol-Level Controls</div>
                  <div className="font-semibold text-green-800">$0 (Use Policies)</div>
                </div>
                <div>
                  <div className="text-sm text-green-700">Minimal Legal Oversight</div>
                  <div className="font-semibold text-green-800">$50K-$150K/year</div>
                </div>
                <div>
                  <div className="text-sm text-green-700">Embedded Audit Trails</div>
                  <div className="font-semibold text-green-800">$0 (Provenance)</div>
                </div>
                <div className="pt-3 border-t border-green-300">
                  <div className="text-sm text-green-700">5-Year Total</div>
                  <div className="font-bold text-lg text-green-800">$200K - $600K</div>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-4 bg-green-50 border-green-200">
            <p className="font-semibold text-green-800">
              Onli Compliance Savings: $2.46M to $8.54M over 5 years (92-93% reduction)
            </p>
          </Card>
        </div>
      </section>

      {/* Security Costs */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Security Measures & Risk Management</h2>
          
          <div className="prose prose-lg max-w-none mb-8">
            <p>
              Digital asset marketplaces are high-value targets for attackers. Between 2024 and mid-2025, $4.4 billion was stolen through blockchain exploits, primarily targeting smart contracts and custodial systems. Blockchain marketplaces require comprehensive security infrastructure including smart contract audits ($210K-$610K over 5 years), penetration testing ($50K-$500K), bug bounty programs ($250K-$2.5M), cybersecurity insurance ($50K-$5M), and 24/7 security monitoring ($350K-$2M).
            </p>

            <p>
              Onli's architecture eliminates the primary attack vectors that plague blockchain marketplaces. With no smart contracts, there are no smart contract vulnerabilities—eliminating the entire $4.4 billion risk category. Hardware-enforced Vaults provide actual possession rather than custodial wallets, eliminating custody risk. Onli has experienced zero exploits since inception, demonstrating the effectiveness of its zero-custody architecture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Blockchain Security Costs</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-slate-600">Smart Contract Audits</div>
                  <div className="font-semibold">$230K-$610K (5 years)</div>
                </div>
                <div>
                  <div className="text-sm text-slate-600">Penetration Testing</div>
                  <div className="font-semibold">$50K-$500K (5 years)</div>
                </div>
                <div>
                  <div className="text-sm text-slate-600">Bug Bounty Programs</div>
                  <div className="font-semibold">$250K-$2.5M (5 years)</div>
                </div>
                <div>
                  <div className="text-sm text-slate-600">Cybersecurity Insurance</div>
                  <div className="font-semibold">$50K-$5M (5 years)</div>
                </div>
                <div>
                  <div className="text-sm text-slate-600">Security Monitoring</div>
                  <div className="font-semibold">$330K-$1.27M (5 years)</div>
                </div>
                <div className="pt-3 border-t">
                  <div className="text-sm text-slate-600">5-Year Total</div>
                  <div className="font-bold text-lg text-red-600">$1.5M - $3.5M</div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-green-50 border-green-200">
              <h3 className="text-xl font-bold mb-4 text-green-800">Onli Security Costs</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-green-700">Smart Contract Audits</div>
                  <div className="font-semibold text-green-800">$0 (no smart contracts)</div>
                </div>
                <div>
                  <div className="text-sm text-green-700">Basic Infrastructure Security</div>
                  <div className="font-semibold text-green-800">$110K-$220K (5 years)</div>
                </div>
                <div>
                  <div className="text-sm text-green-700">Zero Custody Risk</div>
                  <div className="font-semibold text-green-800">Hardware-enforced Vaults</div>
                </div>
                <div>
                  <div className="text-sm text-green-700">Historical Losses</div>
                  <div className="font-semibold text-green-800">$0 (zero exploits)</div>
                </div>
                <div>
                  <div className="text-sm text-green-700">Reduced Insurance</div>
                  <div className="font-semibold text-green-800">Minimal risk profile</div>
                </div>
                <div className="pt-3 border-t border-green-300">
                  <div className="text-sm text-green-700">5-Year Total</div>
                  <div className="font-bold text-lg text-green-800">$110K - $220K</div>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-4 bg-green-50 border-green-200">
            <p className="font-semibold text-green-800">
              Onli Security Savings: $1.28M to $3.28M over 5 years (88-94% reduction)
            </p>
          </Card>
        </div>
      </section>

      {/* Complete TCO Analysis */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Complete Total Cost of Ownership (5-Year)</h2>
          
          <div className="prose prose-lg max-w-none mb-8">
            <p>
              Synthesizing all cost categories—development, platform fees, transaction costs, team salaries, compliance, security, legal, marketing, and support—reveals the complete five-year total cost of ownership for each platform across three transaction scales.
            </p>
          </div>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse bg-white shadow-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border p-3 text-left">Platform</th>
                  <th className="border p-3 text-right">Small Scale<br/>(10K tx/mo)</th>
                  <th className="border p-3 text-right">Medium Scale<br/>(1M tx/mo)</th>
                  <th className="border p-3 text-right">Enterprise Scale<br/>(10M tx/mo)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-semibold">Oracle</td>
                  <td className="border p-3 text-right">$28.5M</td>
                  <td className="border p-3 text-right">$65.2M</td>
                  <td className="border p-3 text-right">$245.8M</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border p-3 font-semibold">Amazon</td>
                  <td className="border p-3 text-right">$18.9M</td>
                  <td className="border p-3 text-right">$52.4M</td>
                  <td className="border p-3 text-right">$195.3M</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Ethereum L1</td>
                  <td className="border p-3 text-right">$45.7M</td>
                  <td className="border p-3 text-right">$312.6M</td>
                  <td className="border p-3 text-right">$2.8B</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border p-3 font-semibold">Ethereum L2</td>
                  <td className="border p-3 text-right">$18.11M</td>
                  <td className="border p-3 text-right">$47.82M</td>
                  <td className="border p-3 text-right">$172.1M</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Polygon</td>
                  <td className="border p-3 text-right">$19.8M</td>
                  <td className="border p-3 text-right">$58.3M</td>
                  <td className="border p-3 text-right">$224.5M</td>
                </tr>
                <tr className="bg-green-50 font-bold">
                  <td className="border p-3 text-green-800">Onli</td>
                  <td className="border p-3 text-right text-green-600">$9.23M</td>
                  <td className="border p-3 text-right text-green-600">$30.73M</td>
                  <td className="border p-3 text-right text-green-600">$110.03M</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <Card className="p-4 bg-green-50 border-green-200">
              <div className="text-sm text-green-700 mb-1">Small Scale Savings</div>
              <div className="font-bold text-xl text-green-800">49-80%</div>
              <div className="text-sm text-green-700">$8.88M - $36.47M</div>
            </Card>
            <Card className="p-4 bg-green-50 border-green-200">
              <div className="text-sm text-green-700 mb-1">Medium Scale Savings</div>
              <div className="font-bold text-xl text-green-800">36-90%</div>
              <div className="text-sm text-green-700">$17.09M - $281.87M</div>
            </Card>
            <Card className="p-4 bg-green-50 border-green-200">
              <div className="text-sm text-green-700 mb-1">Enterprise Scale Savings</div>
              <div className="font-bold text-xl text-green-800">36-96%</div>
              <div className="text-sm text-green-700">$62.07M - $2.69B</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Revenue & ROI */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Revenue Generation & Return on Investment</h2>
          
          <div className="prose prose-lg max-w-none mb-8">
            <p>
              Digital asset marketplaces generate revenue through transaction fees (2.5% industry standard), listing fees ($50-$500 per asset), premium subscriptions ($10-$100/month), and advertising. For a medium-scale marketplace processing 1 million transactions monthly at $100 average value, annual revenue reaches $163.8 million from these streams.
            </p>

            <p>
              Onli introduces a unique revenue advantage unavailable to blockchain platforms: asset issuance with 95%+ profit margins. Onli genomes cost $0.05 to issue (with 10:1 optimization) but can represent assets of any value—a dollar-for-dollar stablecoin, a collectible with subjective value, or a real-world asset token. This transforms marketplace operators from mere platform facilitators into asset issuers with unprecedented profit potential.
            </p>
          </div>

          <Card className="p-6 mb-8 bg-blue-50 border-blue-200">
            <h3 className="text-xl font-bold mb-4">Onli's 95%+ Profit Margin Advantage</h3>
            <div className="prose max-w-none">
              <p className="mb-4">
                <strong>Example: $1M Stablecoin Issuance</strong>
              </p>
              <ul className="space-y-2">
                <li>Traditional approach: $500K-$2M in banking infrastructure, regulatory compliance, and reserve management</li>
                <li>Onli approach: 1M stablecoins ÷ 10 (optimization) = 100K genomes × $0.05 = <strong>$5,000 cost</strong></li>
                <li>Issue $1M in stablecoins for $5K = <strong className="text-green-600">$995,000 profit (99.5% margin)</strong></li>
              </ul>
            </div>
          </Card>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse bg-white shadow-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border p-3 text-left">Platform</th>
                  <th className="border p-3 text-right">5Y Costs</th>
                  <th className="border p-3 text-right">5Y Revenue</th>
                  <th className="border p-3 text-right">Net Profit</th>
                  <th className="border p-3 text-right">ROI</th>
                  <th className="border p-3 text-right">Margin</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-semibold">Oracle</td>
                  <td className="border p-3 text-right">$65.2M</td>
                  <td className="border p-3 text-right">$780M</td>
                  <td className="border p-3 text-right">$714.8M</td>
                  <td className="border p-3 text-right">1,096%</td>
                  <td className="border p-3 text-right">91.6%</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border p-3 font-semibold">Amazon</td>
                  <td className="border p-3 text-right">$52.4M</td>
                  <td className="border p-3 text-right">$792M</td>
                  <td className="border p-3 text-right">$739.6M</td>
                  <td className="border p-3 text-right">1,411%</td>
                  <td className="border p-3 text-right">93.4%</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Ethereum L1</td>
                  <td className="border p-3 text-right">$312.6M</td>
                  <td className="border p-3 text-right">$670M</td>
                  <td className="border p-3 text-right">$357.4M</td>
                  <td className="border p-3 text-right">114%</td>
                  <td className="border p-3 text-right">53.3%</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border p-3 font-semibold">Ethereum L2</td>
                  <td className="border p-3 text-right">$47.82M</td>
                  <td className="border p-3 text-right">$796.5M</td>
                  <td className="border p-3 text-right">$748.68M</td>
                  <td className="border p-3 text-right">1,565%</td>
                  <td className="border p-3 text-right">94.0%</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Polygon</td>
                  <td className="border p-3 text-right">$58.3M</td>
                  <td className="border p-3 text-right">$785M</td>
                  <td className="border p-3 text-right">$726.7M</td>
                  <td className="border p-3 text-right">1,246%</td>
                  <td className="border p-3 text-right">92.6%</td>
                </tr>
                <tr className="bg-green-50 font-bold">
                  <td className="border p-3 text-green-800">Onli</td>
                  <td className="border p-3 text-right text-green-600">$30.73M</td>
                  <td className="border p-3 text-right text-green-600">$817.5M</td>
                  <td className="border p-3 text-right text-green-600">$786.77M</td>
                  <td className="border p-3 text-right text-green-600">2,560%</td>
                  <td className="border p-3 text-right text-green-600">96.2%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <Card className="p-4 bg-green-50 border-green-200">
              <div className="text-sm text-green-700 mb-1">Additional Profit</div>
              <div className="font-bold text-xl text-green-800">$38M - $429M</div>
              <div className="text-sm text-green-700">vs competitors (5 years)</div>
            </Card>
            <Card className="p-4 bg-green-50 border-green-200">
              <div className="text-sm text-green-700 mb-1">Higher ROI</div>
              <div className="font-bold text-xl text-green-800">59%</div>
              <div className="text-sm text-green-700">2,560% vs 1,565% (best alternative)</div>
            </Card>
            <Card className="p-4 bg-green-50 border-green-200">
              <div className="text-sm text-green-700 mb-1">Higher Margin</div>
              <div className="font-bold text-xl text-green-800">2.0 points</div>
              <div className="text-sm text-green-700">96.2% vs 94.0% profit margin</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Onli's Architectural Advantages */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Onli's Architectural Advantages</h2>
          
          <div className="prose prose-lg max-w-none mb-8">
            <p>
              Onli's superior economics stem from fundamental architectural innovations that eliminate entire cost categories while enabling new revenue models unavailable to traditional blockchain platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-lg font-bold mb-3 flex items-center">
                <span className="text-2xl mr-2">🔐</span>
                Actual Possession vs. Ledger Records
              </h3>
              <p className="text-sm text-slate-600 mb-2">
                Traditional blockchain platforms record ownership on distributed ledgers. Users don't possess their assets; they possess private keys that prove ledger ownership. This creates custody risk.
              </p>
              <p className="text-sm font-semibold text-green-700">
                Onli provides actual possession through hardware-enforced Vaults. Assets exist as cryptographic objects that users possess directly. Zero custody risk, zero historical losses.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-bold mb-3 flex items-center">
                <span className="text-2xl mr-2">📋</span>
                Declarative Policies vs. Smart Contracts
              </h3>
              <p className="text-sm text-slate-600 mb-2">
                Smart contracts are Turing-complete programs that have cost the industry $4.4 billion in losses. Every contract requires expensive security audits ($25K-$250K).
              </p>
              <p className="text-sm font-semibold text-green-700">
                Onli replaces smart contracts with declarative Use Policies written in YAML. Non-Turing-complete rules eliminate entire vulnerability classes. Zero audit costs.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-bold mb-3 flex items-center">
                <span className="text-2xl mr-2">✅</span>
                Built-in Compliance vs. Third-Party Integration
              </h3>
              <p className="text-sm text-slate-600 mb-2">
                Blockchain marketplaces must integrate third-party KYC/AML providers and build transaction monitoring systems. Cost: $2.66M-$9.14M over 5 years.
              </p>
              <p className="text-sm font-semibold text-green-700">
                Onli embeds compliance through Genes (identity) and Use Policies (jurisdictional controls). Automatic regulatory compliance. 92-93% cost reduction.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-bold mb-3 flex items-center">
                <span className="text-2xl mr-2">🚀</span>
                Included Infrastructure vs. Custom Development
              </h3>
              <p className="text-sm text-slate-600 mb-2">
                Blockchain platforms provide only the ledger layer. Marketplaces must build wallets, identity systems, storage, and compliance tooling separately. Cost: $490K-$1.44M.
              </p>
              <p className="text-sm font-semibold text-green-700">
                Onli includes wallet functionality, identity management, compliance tooling, storage, and audit trails in $6K/year subscription. 2.5 weeks vs 6-19 months time-to-market.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-bold mb-3 flex items-center">
                <span className="text-2xl mr-2">💰</span>
                95%+ Asset Issuance Margins
              </h3>
              <p className="text-sm text-slate-600 mb-2">
                Blockchain platforms charge gas fees for every asset minted ($1-$5 per asset). These costs scale linearly with asset count.
              </p>
              <p className="text-sm font-semibold text-green-700">
                Onli genomes cost $0.05 to issue but can represent any value. $5K investment → $1M stablecoin issuance = 99.5% profit margin. Unprecedented revenue opportunity.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-bold mb-3 flex items-center">
                <span className="text-2xl mr-2">⚡</span>
                Zero Transaction Fees vs. Per-Transaction Costs
              </h3>
              <p className="text-sm text-slate-600 mb-2">
                Blockchain platforms charge per-transaction fees ($0.09-$1.10) that scale linearly with volume. Cost: $5.4M-$66M over 5 years at medium scale.
              </p>
              <p className="text-sm font-semibold text-green-700">
                Onli charges zero transaction fees after initial genome issuance. 100% margin on transaction fee revenue. Enables high-frequency trading models.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Conclusion</h2>
          
          <div className="prose prose-lg max-w-none text-white">
            <p className="text-blue-100">
              Building a digital asset marketplace requires far more than selecting a blockchain platform. The complete business case encompasses eleven application components, extensive compliance infrastructure, comprehensive security measures, specialized talent acquisition, and risk management. Focusing solely on platform infrastructure costs misses 85-90% of the total investment required.
            </p>

            <p className="text-blue-100">
              Traditional blockchain platforms impose five-year total costs ranging from $18.11 million to $172.1 million for small-to-enterprise scale marketplaces. These platforms require extensive custom development, ongoing compliance systems, regular security audits, specialized blockchain talent, and transaction costs that scale linearly with volume. Development timelines extend six to nineteen months, creating opportunity costs of $22.5M to $38.75M in delayed revenue.
            </p>

            <p className="text-blue-100">
              Onli's novel architecture fundamentally reimagines this equation. By providing actual possession through hardware-enforced Vaults, eliminating smart contracts, embedding compliance at the protocol level, and enabling 95%+ asset issuance margins, Onli delivers 36-80% lower total cost of ownership, 59% higher return on investment, and $17M-$62M additional profit over five years.
            </p>

            <p className="text-white font-semibold text-xl mt-8">
              For marketplace operators seeking to maximize profitability while minimizing technical complexity and regulatory exposure, Onli represents not merely a cost-effective alternative but a fundamentally superior business model.
            </p>
          </div>

          <div className="mt-8 flex gap-4">
            <Link href="/marketplace-comparison/calculator">
              <Button size="lg" variant="secondary">
                <Calculator className="mr-2 h-5 w-5" />
                Calculate Your TCO
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Download className="mr-2 h-5 w-5" />
              Download Full Report
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

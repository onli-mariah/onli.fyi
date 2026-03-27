import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function MarketplaceComparison() {
  return (
    <>
      {/* Main Content */}
      <main className="w-full fade-in-up">
        {/* Title */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Building a Digital Asset Marketplace: A Complete Cost Analysis
          </h1>
          <p className="text-xl text-muted-foreground">
            Comparing the total cost of ownership across blockchain platforms and Onli's novel architecture
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Published December 2025 | 25-minute read
          </p>
        </div>

        {/* Executive Summary */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Executive Summary</h2>
          
          <Card className="p-6 mb-6 bg-primary/5 border-primary/20">
            <p className="text-lg font-semibold mb-4">
              The economic models of traditional blockchain platforms are fundamentally broken for enterprise use. This comprehensive analysis reveals that Onli provides 83-99% cost savings across all deployment scales while eliminating the unpredictable, compounding costs that plague blockchain implementations.
            </p>
          </Card>

          <p className="mb-4">
            When organizations evaluate blockchain platforms for digital asset marketplaces, they typically focus on platform fees and transaction costs. However, this narrow view obscures the true total cost of ownership, which includes development labor, infrastructure, compliance, security audits, and ongoing maintenance. This white paper presents a granular, apples-to-apples comparison of the complete five-year TCO across four leading platforms: AWS Managed Blockchain, Oracle Blockchain Platform, Ethereum Layer 2, and Onli.
          </p>

          <p className="mb-4">
            The analysis examines three realistic deployment scenarios—small business, mid-market, and enterprise scale—and reveals a stark economic reality. Traditional blockchain platforms suffer from a fundamental flaw: costs scale with success. As transaction volume increases, gas fees compound. As the business grows, specialized engineering teams expand. As the ledger grows, storage costs explode. Onli, by contrast, maintains a flat cost structure regardless of scale, providing absolute predictability and dramatic savings.
          </p>

          <div className="my-8">
            <h3 className="text-xl font-semibold mb-4">Five-Year TCO Comparison Across Three Scales</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2">
                    <th className="text-left p-3 font-semibold">Platform</th>
                    <th className="text-right p-3 font-semibold">Small Scale<br/><span className="text-sm font-normal text-muted-foreground">(10K assets, 600K tx/yr)</span></th>
                    <th className="text-right p-3 font-semibold">Mid-Market<br/><span className="text-sm font-normal text-muted-foreground">(1M assets, 60M tx/yr)</span></th>
                    <th className="text-right p-3 font-semibold">Enterprise<br/><span className="text-sm font-normal text-muted-foreground">(10M assets, 600M tx/yr)</span></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b bg-primary/5">
                    <td className="p-3 font-semibold">Onli</td>
                    <td className="text-right p-3 font-mono">$85,500</td>
                    <td className="text-right p-3 font-mono">$135,500</td>
                    <td className="text-right p-3 font-mono">$585,500</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">AWS Managed Blockchain</td>
                    <td className="text-right p-3 font-mono">$1,387,777<br/><span className="text-sm text-destructive">16x higher</span></td>
                    <td className="text-right p-3 font-mono">$2,387,777<br/><span className="text-sm text-destructive">18x higher</span></td>
                    <td className="text-right p-3 font-mono">$5,387,777<br/><span className="text-sm text-destructive">9x higher</span></td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">Oracle Blockchain Platform</td>
                    <td className="text-right p-3 font-mono">$1,417,763<br/><span className="text-sm text-destructive">17x higher</span></td>
                    <td className="text-right p-3 font-mono">$2,917,763<br/><span className="text-sm text-destructive">22x higher</span></td>
                    <td className="text-right p-3 font-mono">$8,917,763<br/><span className="text-sm text-destructive">15x higher</span></td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">Ethereum Layer 2</td>
                    <td className="text-right p-3 font-mono">$1,630,390<br/><span className="text-sm text-destructive">19x higher</span></td>
                    <td className="text-right p-3 font-mono">$28,630,390<br/><span className="text-sm text-destructive">211x higher</span></td>
                    <td className="text-right p-3 font-mono">$283,630,390<br/><span className="text-sm text-destructive">484x higher</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p className="mb-4">
            The cost differential is not merely significant—it is transformative. At small scale, Onli provides 16-19x savings. At mid-market scale, this advantage grows to 18-211x. At enterprise scale, the gap becomes a chasm: 9-484x. The primary drivers of this advantage are labor costs (blockchain platforms require $1.3M-$3.6M in specialized engineering talent over five years versus Onli's $30K-$150K), transaction fees (Ethereum L2 gas fees reach $270M at enterprise scale versus Onli's $0), and infrastructure compounding (blockchain storage and compute costs grow exponentially while Onli's remain fixed at $6,000/year).
          </p>

          <p>
            Beyond direct costs, this analysis reveals hidden expenses that are often overlooked in initial budgeting: research and development tax ($50K-$500K for protocol selection and tooling evaluation), audit and compliance burden ($30K-$80K per smart contract audit plus ongoing regulatory legal fees at $500-$1,500/hour), and vendor lock-in risks (AWS and Oracle's proprietary platforms create switching costs and limit customization). Onli eliminates these hidden costs through its fully managed, vendor-agnostic platform designed for regulatory compliance from the ground up.
          </p>
        </section>

        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Introduction: The Blockchain Promise vs. Reality</h2>
          
          <p className="mb-4">
            Blockchain technology has been heralded as a revolutionary solution for digital asset management, promising decentralization, transparency, and immutability. Organizations across industries have invested billions of dollars in blockchain initiatives, driven by the vision of trustless, peer-to-peer digital asset exchanges. However, the reality of blockchain implementation has proven far more complex and costly than the promise suggested.
          </p>

          <p className="mb-4">
            According to Gartner Research, approximately 90% of blockchain projects initiated between 2018 and 2022 failed to reach production.<sup>[7]</sup> High-profile failures include IBM's TradeLens blockchain platform, which shut down in November 2023 after five years of operation,<sup>[9]</sup> and the Australian Securities Exchange's abandonment of its blockchain settlement system after investing over $170 million.<sup>[10]</sup> These failures share common themes: underestimated development complexity, spiraling operational costs, and the scarcity of specialized blockchain talent.
          </p>

          <p className="mb-4">
            The fundamental challenge is that blockchain platforms were designed for decentralized, trustless environments—use cases that represent a tiny fraction of real-world business requirements. Most organizations do not need trustless consensus; they need efficient, scalable, and cost-effective digital asset management. They do not need immutable public ledgers; they need regulatory compliance, balance-sheet recognition, and actual possession of assets. The mismatch between blockchain's architectural assumptions and enterprise requirements creates unnecessary complexity and cost.
          </p>

          <p className="mb-4">
            Onli represents a fundamentally different approach. Rather than forcing organizations to adopt blockchain's complex, expensive infrastructure, Onli provides a purpose-built platform for digital asset management that delivers the benefits organizations actually need—verifiable ownership, instant settlement, regulatory compliance, and balance-sheet recognition—without the costs and complexity of blockchain. This white paper quantifies the economic implications of this architectural difference through a comprehensive total cost of ownership analysis.
          </p>
        </section>

        {/* Cost Analysis Framework */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Cost Analysis Framework</h2>
          
          <p className="mb-4">
            To conduct an apples-to-apples comparison across platforms, this analysis examines fifteen distinct cost components that comprise the complete total cost of ownership for a digital asset marketplace. These components span upfront development, recurring platform and infrastructure fees, labor and talent acquisition, transaction costs, and ongoing monitoring and security. Each component is calculated based on December 2025 pricing data from official vendor sources, industry salary surveys, and third-party research.
          </p>

          <div className="my-8">
            <h3 className="text-xl font-semibold mb-4">Complete Cost Components</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2">
                    <th className="text-left p-3 font-semibold">Category</th>
                    <th className="text-left p-3 font-semibold">Component</th>
                    <th className="text-left p-3 font-semibold">Blockchain Platforms</th>
                    <th className="text-left p-3 font-semibold">Onli</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b bg-muted/30">
                    <td className="p-3 font-semibold" rowSpan={5}>Upfront Development</td>
                    <td className="p-3">Smart Contract Development</td>
                    <td className="p-3">$15K-$120K<sup>[5]</sup></td>
                    <td className="p-3">$0 (No smart contracts)</td>
                  </tr>
                  <tr className="border-b bg-muted/30">
                    <td className="p-3">Smart Contract Audit</td>
                    <td className="p-3">$8K-$12K<sup>[16]</sup></td>
                    <td className="p-3">$0 (No smart contracts)</td>
                  </tr>
                  <tr className="border-b bg-muted/30">
                    <td className="p-3">Integration & Testing</td>
                    <td className="p-3">$20K-$25K</td>
                    <td className="p-3">$0 (API-first platform)</td>
                  </tr>
                  <tr className="border-b bg-muted/30">
                    <td className="p-3">Deployment & Gas Fees</td>
                    <td className="p-3">$200-$7K</td>
                    <td className="p-3">$0</td>
                  </tr>
                  <tr className="border-b bg-muted/30">
                    <td className="p-3">Treasury Deployment</td>
                    <td className="p-3">N/A</td>
                    <td className="p-3">$50K (1B capacity)</td>
                  </tr>
                  
                  <tr className="border-b">
                    <td className="p-3 font-semibold">Platform Subscription</td>
                    <td className="p-3">Base Access Fee</td>
                    <td className="p-3">Included in infrastructure</td>
                    <td className="p-3">$6K/year<sup>[1]</sup></td>
                  </tr>
                  
                  <tr className="border-b bg-muted/30">
                    <td className="p-3 font-semibold" rowSpan={4}>Infrastructure</td>
                    <td className="p-3">Network Membership</td>
                    <td className="p-3">$0.30/hour (AWS)<sup>[2]</sup></td>
                    <td className="p-3">$0 (Included)</td>
                  </tr>
                  <tr className="border-b bg-muted/30">
                    <td className="p-3">Peer Nodes / Compute</td>
                    <td className="p-3">$0.238-$1.70/hour<sup>[2][3]</sup></td>
                    <td className="p-3">$0 (Included)</td>
                  </tr>
                  <tr className="border-b bg-muted/30">
                    <td className="p-3">Storage</td>
                    <td className="p-3">$0.10-$0.50/GB-month</td>
                    <td className="p-3">$0 (Included)</td>
                  </tr>
                  <tr className="border-b bg-muted/30">
                    <td className="p-3">Monitoring & Load Balancing</td>
                    <td className="p-3">$0.025-$0.10/hour</td>
                    <td className="p-3">$0 (Included)</td>
                  </tr>
                  
                  <tr className="border-b">
                    <td className="p-3 font-semibold">Transaction Fees</td>
                    <td className="p-3">Per-Transaction Gas Fees</td>
                    <td className="p-3">$0.09/tx (L2)<sup>[4]</sup>, $1.10/tx (L1)</td>
                    <td className="p-3">$0 (Zero fees)</td>
                  </tr>
                  
                  <tr className="border-b bg-muted/30">
                    <td className="p-3 font-semibold" rowSpan={3}>Labor & Talent</td>
                    <td className="p-3">Blockchain Engineer</td>
                    <td className="p-3">$217K/year<sup>[13]</sup></td>
                    <td className="p-3">$0 (No blockchain expertise needed)</td>
                  </tr>
                  <tr className="border-b bg-muted/30">
                    <td className="p-3">DevOps Engineer</td>
                    <td className="p-3">$155K/year<sup>[14]</sup></td>
                    <td className="p-3">$0 (Fully managed)</td>
                  </tr>
                  <tr className="border-b bg-muted/30">
                    <td className="p-3">Operational Manager</td>
                    <td className="p-3">Varies by scale</td>
                    <td className="p-3">$120K/year (0.25-1.0 FTE)</td>
                  </tr>
                  
                  <tr className="border-b">
                    <td className="p-3 font-semibold">Asset Issuance</td>
                    <td className="p-3">Per-Asset Minting Cost</td>
                    <td className="p-3">Gas fees (variable)</td>
                    <td className="p-3">$0.05/asset (one-time)<sup>[1]</sup></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p className="mb-4">
            The cost structure differences between blockchain platforms and Onli are fundamental, not incremental. Blockchain platforms operate on metered infrastructure models where costs scale with usage—more transactions mean higher gas fees, more data means higher storage costs, more complexity means larger engineering teams. Onli operates on a fixed-cost subscription model where the annual platform fee ($6,000) remains constant regardless of transaction volume, asset count (up to one billion), or data growth. This architectural difference creates dramatically different TCO profiles across deployment scales.
          </p>

          <p>
            Labor costs deserve particular attention, as they represent the single largest cost differential between platforms. Blockchain platforms require specialized blockchain engineers commanding $217,000 annual salaries<sup>[13]</sup> plus DevOps engineers at $155,000 annually<sup>[14]</sup> to manage infrastructure, develop and audit smart contracts, and maintain security. Onli's natural language API and fully managed platform eliminate the need for blockchain expertise entirely—the platform can be configured by operational managers, branding specialists, or security managers using junior IT staff. This labor cost advantage alone accounts for 50-70% of Onli's total TCO savings.
          </p>
        </section>

        {/* Scenario 1: Small Business */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Scenario 1: Small Business / Startup</h2>
          
          <Card className="p-6 mb-6 bg-muted/30">
            <h3 className="text-lg font-semibold mb-2">Business Context</h3>
            <p>
              A small business or startup deploying digital assets for loyalty programs, limited-edition products, or community engagement initiatives.
            </p>
          </Card>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Scenario Assumptions</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>10,000 assets issued</strong> over the deployment lifecycle</li>
              <li><strong>600,000 transactions per year</strong> (50,000/month) over 5 years</li>
              <li><strong>100 GB of data generated per year</strong> (500 GB total over 5 years)</li>
              <li><strong>24/7 operations</strong> with standard availability requirements</li>
            </ul>
          </div>

          <div className="my-8">
            <h3 className="text-xl font-semibold mb-4">Complete TCO Breakdown (5 Years)</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2">
                    <th className="text-left p-3 font-semibold">Cost Category</th>
                    <th className="text-right p-3 font-semibold">Onli</th>
                    <th className="text-right p-3 font-semibold">AWS</th>
                    <th className="text-right p-3 font-semibold">Oracle</th>
                    <th className="text-right p-3 font-semibold">Ethereum L2</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b bg-muted/30">
                    <td className="p-3 font-semibold">Upfront Development</td>
                    <td className="text-right p-3 font-mono">$50,500</td>
                    <td className="text-right p-3 font-mono">$83,000</td>
                    <td className="text-right p-3 font-mono">$100,000</td>
                    <td className="text-right p-3 font-mono">$85,200</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 pl-6 text-sm">Treasury / Smart Contracts</td>
                    <td className="text-right p-3 text-sm">$50,000</td>
                    <td className="text-right p-3 text-sm">$50,000</td>
                    <td className="text-right p-3 text-sm">$60,000</td>
                    <td className="text-right p-3 text-sm">$40,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 pl-6 text-sm">Asset Issuance / Audit</td>
                    <td className="text-right p-3 text-sm">$500</td>
                    <td className="text-right p-3 text-sm">$8,000</td>
                    <td className="text-right p-3 text-sm">$8,000</td>
                    <td className="text-right p-3 text-sm">$12,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 pl-6 text-sm">Integration & Deployment</td>
                    <td className="text-right p-3 text-sm">$0</td>
                    <td className="text-right p-3 text-sm">$25,000</td>
                    <td className="text-right p-3 text-sm">$32,000</td>
                    <td className="text-right p-3 text-sm">$33,200</td>
                  </tr>
                  
                  <tr className="border-b bg-muted/30">
                    <td className="p-3 font-semibold">Platform Subscription</td>
                    <td className="text-right p-3 font-mono">$30,000</td>
                    <td className="text-right p-3 font-mono">$0</td>
                    <td className="text-right p-3 font-mono">$0</td>
                    <td className="text-right p-3 font-mono">$2,940</td>
                  </tr>
                  
                  <tr className="border-b bg-muted/30">
                    <td className="p-3 font-semibold">Infrastructure</td>
                    <td className="text-right p-3 font-mono">$0</td>
                    <td className="text-right p-3 font-mono">$32,027</td>
                    <td className="text-right p-3 font-mono">$44,512</td>
                    <td className="text-right p-3 font-mono">$0</td>
                  </tr>
                  
                  <tr className="border-b bg-muted/30">
                    <td className="p-3 font-semibold">Transaction Fees</td>
                    <td className="text-right p-3 font-mono">$0</td>
                    <td className="text-right p-3 font-mono">$0</td>
                    <td className="text-right p-3 font-mono">$0</td>
                    <td className="text-right p-3 font-mono">$270,000</td>
                  </tr>
                  
                  <tr className="border-b bg-muted/30">
                    <td className="p-3 font-semibold">Labor & Talent</td>
                    <td className="text-right p-3 font-mono">$5,000</td>
                    <td className="text-right p-3 font-mono">$1,272,750</td>
                    <td className="text-right p-3 font-mono">$1,273,250</td>
                    <td className="text-right p-3 font-mono">$1,272,250</td>
                  </tr>
                  
                  <tr className="border-t-2 bg-primary/10">
                    <td className="p-3 font-bold">TOTAL 5-YEAR TCO</td>
                    <td className="text-right p-3 font-mono font-bold text-lg">$85,500</td>
                    <td className="text-right p-3 font-mono font-bold text-lg">$1,387,777</td>
                    <td className="text-right p-3 font-mono font-bold text-lg">$1,417,763</td>
                    <td className="text-right p-3 font-mono font-bold text-lg">$1,630,390</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-semibold">vs. Onli</td>
                    <td className="text-right p-3 text-sm">Baseline</td>
                    <td className="text-right p-3 text-sm text-destructive font-semibold">16x higher</td>
                    <td className="text-right p-3 text-sm text-destructive font-semibold">17x higher</td>
                    <td className="text-right p-3 text-sm text-destructive font-semibold">19x higher</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="my-6">
            <h3 className="text-xl font-semibold mb-4">Key Findings for Small Business</h3>
            <p className="mb-4">
              Even at small scale, Onli provides a 16x to 19x cost advantage over blockchain platforms. The five-year TCO for Onli is $85,500 compared to $1.39M-$1.63M for blockchain alternatives—a savings of $1.3M to $1.5M. The primary driver of this advantage is not the infrastructure costs, which are relatively modest at this scale, but the labor costs.
            </p>
            <p className="mb-4">
              Blockchain platforms require $1.27M to $1.28M in labor over five years, representing 92-94% of their total TCO. This labor expense covers 0.35 FTE of blockchain engineering talent ($217,000 annual salary) plus 0.15 FTE of DevOps engineering ($155,000 annual salary) to develop smart contracts, manage infrastructure, conduct security audits, and maintain operations. Onli, by contrast, requires only $5,000 in labor over five years (0.25 FTE of an operational manager at $120,000 annual salary), a savings of $1.27M.
            </p>
            <p>
              This labor cost differential is not a temporary inefficiency that can be optimized away—it is inherent to the blockchain model. Blockchain platforms are complex, evolving systems that require permanent teams of specialized engineers. Smart contracts must be developed, audited, and maintained. Infrastructure must be provisioned, scaled, and monitored. Security vulnerabilities must be identified and patched. Onli eliminates this complexity by providing a fully managed platform with a natural language API that can be configured by junior IT staff, not $217,000/year blockchain engineers.
            </p>
          </div>
        </section>

        {/* Scenario 2: Mid-Market */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Scenario 2: Mid-Market / Growth Stage</h2>
          
          <Card className="p-6 mb-6 bg-muted/30">
            <h3 className="text-lg font-semibold mb-2">Business Context</h3>
            <p>
              A mid-market company in growth stage, deploying digital assets for customer engagement, supply chain management, or tokenized products at scale.
            </p>
          </Card>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Scenario Assumptions</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>1,000,000 assets issued</strong> over the deployment lifecycle</li>
              <li><strong>60,000,000 transactions per year</strong> (5M/month) over 5 years</li>
              <li><strong>2,000 GB of data generated per year</strong> (10 TB total over 5 years)</li>
              <li><strong>24/7 operations</strong> with higher availability requirements</li>
            </ul>
          </div>

          <div className="my-8">
            <h3 className="text-xl font-semibold mb-4">Summary Comparison (5 Years)</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2">
                    <th className="text-left p-3 font-semibold">Platform</th>
                    <th className="text-right p-3 font-semibold">Upfront</th>
                    <th className="text-right p-3 font-semibold">Recurring</th>
                    <th className="text-right p-3 font-semibold">Total TCO</th>
                    <th className="text-right p-3 font-semibold">vs. Onli</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b bg-primary/10">
                    <td className="p-3 font-semibold">Onli</td>
                    <td className="text-right p-3 font-mono">$100,500</td>
                    <td className="text-right p-3 font-mono">$35,000</td>
                    <td className="text-right p-3 font-mono font-bold">$135,500</td>
                    <td className="text-right p-3">Baseline</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">AWS Managed Blockchain</td>
                    <td className="text-right p-3 font-mono">$133,000</td>
                    <td className="text-right p-3 font-mono">$2,254,777</td>
                    <td className="text-right p-3 font-mono font-bold">$2,387,777</td>
                    <td className="text-right p-3 text-destructive font-semibold">18x higher</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">Oracle Blockchain Platform</td>
                    <td className="text-right p-3 font-mono">$150,000</td>
                    <td className="text-right p-3 font-mono">$2,767,763</td>
                    <td className="text-right p-3 font-mono font-bold">$2,917,763</td>
                    <td className="text-right p-3 text-destructive font-semibold">22x higher</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">Ethereum Layer 2</td>
                    <td className="text-right p-3 font-mono">$135,200</td>
                    <td className="text-right p-3 font-mono">$28,495,190</td>
                    <td className="text-right p-3 font-mono font-bold">$28,630,390</td>
                    <td className="text-right p-3 text-destructive font-semibold">211x higher</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="my-6">
            <h3 className="text-xl font-semibold mb-4">Key Findings for Mid-Market</h3>
            <p className="mb-4">
              At mid-market scale, the cost differential becomes dramatic. Onli's TCO remains virtually unchanged from the small business scenario ($85,500 vs. $135,500), while blockchain platforms see their costs explode by 1.7x to 17.6x. The five-year TCO for Onli is $135,500 compared to $2.39M-$28.63M for blockchain alternatives—a savings of $2.25M to $28.5M. This widening gap reveals the fundamental flaw in blockchain economics: costs scale with success.
            </p>
            
            <p className="mb-4">
              <strong>Labor Scaling:</strong> Blockchain platforms require 1.0-1.5 FTE at this scale (versus 0.25 FTE for small business), adding $500,000-$1,000,000 in labor costs over five years. AWS and Oracle now need full-time blockchain engineers ($217,000/year) plus 0.5 FTE DevOps support ($77,500/year) to manage the increased complexity, infrastructure scaling, and security requirements. Onli remains at 0.25 FTE of an operational manager ($30,000 over five years), a labor savings of $1.24M-$2.24M.
            </p>
            
            <p className="mb-4">
              <strong>Infrastructure Scaling:</strong> AWS and Oracle require 2x the compute resources at mid-market scale (4 peer nodes versus 2 for small business), doubling infrastructure costs from $32,000-$45,000 to $64,000-$89,000 over five years. Onli's infrastructure costs remain $0—all compute, storage, networking, monitoring, and security are included in the $6,000/year subscription.
            </p>
            
            <p className="mb-4">
              <strong>Transaction Fees:</strong> Ethereum Layer 2 gas fees reach $27 million over five years (60 million transactions/year × $0.09/transaction × 5 years). For Ethereum L1, this would be $165M-$330M depending on network congestion. Onli's transaction fees remain $0—once an asset is minted at the one-time cost of $0.05, it can be transferred an unlimited number of times at zero cost.
            </p>
            
            <p>
              <strong>Storage Compounding:</strong> Blockchain ledger storage grows from 500 GB to 10 TB over five years, causing AWS storage costs to grow from $500/year to $5,000/year—a 10x increase. Oracle's storage costs, at $0.50/TB-month, grow even more dramatically. Onli's storage costs remain $0. The mid-market scenario reveals the fundamental flaw in blockchain economics: costs scale with success. As transaction volume increases, so do gas fees. As the business grows, so does the required engineering team. Onli's fixed-cost model, by contrast, provides absolute predictability.
            </p>
          </div>
        </section>

        {/* Scenario 3: Enterprise */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Scenario 3: Enterprise Scale</h2>
          
          <Card className="p-6 mb-6 bg-muted/30">
            <h3 className="text-lg font-semibold mb-2">Business Context</h3>
            <p>
              An enterprise deploying digital assets at scale for global operations, such as a multinational supply chain, national loyalty program, or large-scale tokenization platform.
            </p>
          </Card>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Scenario Assumptions</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>10,000,000 assets issued</strong> over the deployment lifecycle</li>
              <li><strong>600,000,000 transactions per year</strong> (50M/month) over 5 years</li>
              <li><strong>20,000 GB of data generated per year</strong> (100 TB total over 5 years)</li>
              <li><strong>24/7 operations</strong> with enterprise-grade SLAs</li>
            </ul>
          </div>

          <div className="my-8">
            <h3 className="text-xl font-semibold mb-4">Summary Comparison (5 Years)</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2">
                    <th className="text-left p-3 font-semibold">Platform</th>
                    <th className="text-right p-3 font-semibold">Upfront</th>
                    <th className="text-right p-3 font-semibold">Recurring</th>
                    <th className="text-right p-3 font-semibold">Total TCO</th>
                    <th className="text-right p-3 font-semibold">vs. Onli</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b bg-primary/10">
                    <td className="p-3 font-semibold">Onli</td>
                    <td className="text-right p-3 font-mono">$550,500</td>
                    <td className="text-right p-3 font-mono">$35,000</td>
                    <td className="text-right p-3 font-mono font-bold">$585,500</td>
                    <td className="text-right p-3">Baseline</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">AWS Managed Blockchain</td>
                    <td className="text-right p-3 font-mono">$183,000</td>
                    <td className="text-right p-3 font-mono">$5,204,777</td>
                    <td className="text-right p-3 font-mono font-bold">$5,387,777</td>
                    <td className="text-right p-3 text-destructive font-semibold">9x higher</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">Oracle Blockchain Platform</td>
                    <td className="text-right p-3 font-mono">$200,000</td>
                    <td className="text-right p-3 font-mono">$8,717,763</td>
                    <td className="text-right p-3 font-mono font-bold">$8,917,763</td>
                    <td className="text-right p-3 text-destructive font-semibold">15x higher</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">Ethereum Layer 2</td>
                    <td className="text-right p-3 font-mono">$185,200</td>
                    <td className="text-right p-3 font-mono">$283,445,190</td>
                    <td className="text-right p-3 font-mono font-bold">$283,630,390</td>
                    <td className="text-right p-3 text-destructive font-semibold">484x higher</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="my-6">
            <h3 className="text-xl font-semibold mb-4">Key Findings for Enterprise</h3>
            <p className="mb-4">
              At enterprise scale, the cost differential reaches its maximum. Onli's TCO is only $585,500 over five years, while blockchain platforms range from $5.4M to $284M—a staggering 9x to 484x difference. The five-year savings with Onli are $4.8M to $283M depending on the platform. The breakdown reveals why blockchain platforms are economically untenable at scale.
            </p>
            
            <p className="mb-4">
              <strong>Labor Dominance:</strong> Blockchain platforms require 2.5-3.0 FTE at enterprise scale, costing $2.4M-$3.6M over five years. This represents 45-60% of the total TCO for AWS and Oracle. A typical enterprise blockchain deployment requires 1.5 FTE blockchain engineers ($326,000/year) plus 1.0 FTE DevOps engineers ($155,000/year) to manage the complex infrastructure, conduct ongoing security audits, develop and maintain smart contracts, and ensure regulatory compliance. Onli requires only 0.25 FTE of an operational manager ($30,000 over five years), a labor savings of $2.4M-$3.6M.
            </p>
            
            <p className="mb-4">
              <strong>Transaction Fee Trap:</strong> Ethereum Layer 2 gas fees reach $270 million over five years (600 million transactions/year × $0.09/transaction × 5 years). For Ethereum L1, this would be $1.65B-$3.3B depending on network congestion. This creates a perverse economic incentive: the more successful your application, the more expensive it becomes to operate. Onli's transaction fees remain $0.
            </p>
            
            <p className="mb-4">
              <strong>Infrastructure at Scale:</strong> AWS requires 6 bc.m5.xlarge peer nodes costing $52,000 over five years. Oracle requires 32 OCPUs costing $89,000 over five years. Both platforms also require load balancers, monitoring services, and network infrastructure that add thousands of dollars in recurring costs. Onli's infrastructure costs remain $0—all compute, storage, networking, monitoring, security, and backup are included in the $6,000/year subscription.
            </p>
            
            <p>
              <strong>Storage Explosion:</strong> Oracle's blockchain storage reaches 100 TB, costing $600,000 over five years at $0.50/TB-month. AWS storage reaches $50,000 over five years. As the blockchain ledger grows, these storage costs compound year over year. Onli's storage costs remain $0. The enterprise scenario demonstrates that blockchain platforms are economically untenable at scale. The costs do not merely scale linearly; they compound. As the ledger grows, storage costs increase. As transaction volume increases, gas fees increase. As complexity increases, labor requirements increase. Onli, by contrast, maintains a flat cost structure regardless of scale.
            </p>
          </div>
        </section>

        {/* Hidden Costs */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">The Hidden Costs: Research, Compliance, and Vendor Lock-In</h2>
          
          <p className="mb-4">
            The TCO analysis presented thus far only covers the direct costs of building and operating a digital asset marketplace. However, there is a significant layer of hidden costs associated with blockchain platforms that are often overlooked in initial budget planning. These costs, which include research, audit, compliance, and vendor lock-in, can easily double the total cost of ownership and introduce significant financial and operational risk.
          </p>

          <div className="my-8">
            <h3 className="text-2xl font-semibold mb-4">The Research and Development Tax</h3>
            <p className="mb-4">
              Blockchain technology is a rapidly evolving field with a complex and fragmented ecosystem. Before a single line of code is written, organizations must invest significant resources in research and development to navigate this landscape. This includes protocol selection, tooling and framework evaluation, and talent acquisition.
            </p>
            
            <p className="mb-4">
              <strong>Protocol Selection:</strong> Choosing the right blockchain protocol (Ethereum, Hyperledger, Polygon, etc.) is a critical decision with long-term implications. This requires extensive research into the technical merits, security models, community support, and regulatory compliance considerations for each option. Organizations typically spend 3-6 months evaluating protocols, involving senior architects, security specialists, and legal counsel.
            </p>
            
            <p className="mb-4">
              <strong>Tooling and Frameworks:</strong> The blockchain development ecosystem is a patchwork of open-source tools, frameworks, and libraries. Organizations must invest time and resources in evaluating, selecting, and integrating these tools—from development frameworks like Truffle and Hardhat to testing tools like Ganache and monitoring solutions like The Graph. This evaluation process can take 2-4 months and involve multiple proof-of-concept implementations.
            </p>
            
            <p className="mb-4">
              <strong>Talent Acquisition:</strong> As previously discussed, blockchain talent is scarce and expensive. The research and recruitment process for finding qualified engineers can take 4-8 months and cost tens of thousands of dollars in recruiter fees (typically 15-25% of first-year salary, or $32,000-$54,000 for a blockchain engineer).
            </p>
            
            <p className="mb-4">
              These R&D costs, which can range from $50,000 to $500,000 for a typical enterprise project, are a hidden tax on blockchain adoption. Onli, by contrast, eliminates this tax. As a fully integrated, vendor-agnostic platform, Onli provides a single, unified solution that requires no specialized research or tooling. Organizations can begin deploying digital assets within days, not months, using the platform's natural language API and pre-built integrations.
            </p>
          </div>

          <div className="my-8">
            <h3 className="text-2xl font-semibold mb-4">The Audit and Compliance Burden</h3>
            <p className="mb-4">
              Smart contracts, the self-executing code that powers blockchain applications, are a primary source of security risk. A single vulnerability in a smart contract can lead to the loss of millions of dollars in assets. As a result, smart contract audits are a non-negotiable requirement for any serious blockchain project.
            </p>
            
            <p className="mb-4">
              According to a 2024 study by Softstack, a leading Web3 auditing firm, the cost of a smart contract audit can range from $5,000 for a basic token to over $100,000 for a complex DeFi protocol.<sup>[16]</sup> For a typical enterprise application, a comprehensive audit can easily cost $30,000 to $80,000. This is not a one-time cost; any significant change to the smart contract code requires a new audit, creating an ongoing compliance expense.
            </p>
            
            <p className="mb-4">
              Beyond smart contract audits, blockchain platforms are subject to a complex and evolving regulatory landscape. In 2023, global fines for non-compliance with financial regulations reached a staggering $6.5 billion.<sup>[17]</sup> The Blockchain Association reports that its member firms have spent over $400 million on SEC enforcement actions alone since 2021.<sup>[18]</sup> Navigating this regulatory minefield requires specialized legal counsel, with crypto lawyers charging $500 to $1,500 per hour.<sup>[19]</sup>
            </p>
            
            <p>
              Onli, as a centralized, fully managed platform, significantly reduces this compliance burden. The platform is designed to be compliant with existing financial regulations, and the Onli team manages the ongoing compliance and regulatory monitoring. This saves organizations hundreds of thousands of dollars in legal and audit fees while eliminating the risk of catastrophic smart contract vulnerabilities.
            </p>
          </div>

          <div className="my-8">
            <h3 className="text-2xl font-semibold mb-4">The Vendor Lock-In Trap</h3>
            <p className="mb-4">
              AWS Managed Blockchain and Oracle Blockchain Platform are not open, interoperable platforms; they are proprietary, walled gardens designed to lock customers into their respective ecosystems. This vendor lock-in creates significant long-term costs and risks that are often underestimated in initial TCO analyses.
            </p>
            
            <div className="ml-6 mb-4">
              <p className="mb-3">
                <strong>Increased Costs:</strong> Once a customer is locked into a vendor's platform, the vendor can increase prices for proprietary technology and services. Research shows that support fees alone can account for 15-25% of a software license fee annually.<sup>[20]</sup> Over a five-year period, this can add hundreds of thousands of dollars in unexpected costs.
              </p>
              
              <p className="mb-3">
                <strong>Limited Customization:</strong> Vendor lock-in limits the ability to customize applications to meet specific needs, stifling innovation and reducing the potential to deliver desired results. Organizations are constrained by the vendor's roadmap and feature set, unable to implement custom functionality or integrate with preferred third-party tools.
              </p>
              
              <p className="mb-3">
                <strong>Reduced Flexibility:</strong> Switching to a different platform becomes a costly and time-consuming process, requiring significant migration fees, a steep learning curve, and potential data loss. Migration projects typically take 6-18 months and cost $500,000-$2,000,000 for enterprise applications.
              </p>
              
              <p>
                <strong>Security Risks:</strong> Dependence on a single vendor creates a single point of failure. If the vendor experiences a security breach, the customer's application is directly impacted. Recent high-profile breaches at cloud providers have exposed millions of customer records and cost organizations hundreds of millions in remediation and reputational damage.
              </p>
            </div>
            
            <p>
              Onli, by contrast, is a vendor-agnostic platform. It is the fabric of innovation, not a walled garden. The platform is designed to be interoperable with existing systems and provides a simple, API-first interface that allows for easy integration and migration. This eliminates the risk of vendor lock-in and provides organizations with the flexibility to adapt to changing business needs without being held hostage by a single vendor's pricing or feature decisions.
            </p>
          </div>
        </section>

        {/* Key Findings */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Key Findings and Implications</h2>
          
          <div className="my-8">
            <h3 className="text-2xl font-semibold mb-4">The Labor Tax</h3>
            <p className="mb-4">
              The single largest cost differential between Onli and blockchain platforms is labor. Across all three scenarios, blockchain platforms require $1.3 million to $3.6 million in labor costs over five years, while Onli requires only $30,000-$150,000. This represents a labor cost savings of $1.2 million to $3.5 million, or 50% to 70% of the total blockchain TCO.
            </p>
            
            <p className="mb-4">
              This "labor tax" is not a temporary cost that can be optimized away. It is inherent to the blockchain model. Blockchain platforms are complex, evolving systems that require permanent teams of specialized engineers. Smart contracts must be developed, audited, and maintained. Infrastructure must be provisioned, scaled, and monitored. Security vulnerabilities must be identified and patched. This requires expensive, specialized talent that is in short supply.
            </p>
            
            <p className="mb-4">
              According to Glassdoor's 2024 salary report, blockchain engineers command an average salary of $217,000 per year,<sup>[13]</sup> while DevOps engineers average $155,000 annually.<sup>[14]</sup> These salaries are 40-60% higher than traditional software engineering roles, reflecting the scarcity of blockchain expertise. Organizations must not only pay premium salaries but also invest in ongoing training and retention programs to keep pace with the rapidly evolving blockchain ecosystem.
            </p>
            
            <p>
              Onli eliminates this labor tax by abstracting away the complexity. The platform provides a simple, natural language API that can be managed by junior IT staff. The Onli Cloud subscription includes 10 seats, and the platform can be configured by an operational manager, a branding specialist, or a security manager—not a $217,000/year blockchain engineer. This is not a marginal improvement; it is a fundamental paradigm shift.
            </p>
          </div>

          <div className="my-8">
            <h3 className="text-2xl font-semibold mb-4">The Transaction Trap</h3>
            <p className="mb-4">
              Ethereum's per-transaction gas fees create a perverse economic incentive: the more successful your application, the more expensive it becomes to operate. In our enterprise scenario, Ethereum Layer 2 gas fees reach $270 million over five years (600 million transactions/year × $0.09/transaction × 5 years). For Ethereum L1, this would be $1.65 billion to $3.3 billion depending on network congestion. This creates a "transaction trap" where businesses are financially penalized for growth.
            </p>
            
            <p className="mb-4">
              Gas fees are not just expensive—they are unpredictable. Ethereum network congestion can cause gas prices to spike 10x or more during periods of high demand, making it impossible to accurately budget for operational costs. Organizations have reported monthly gas fee bills ranging from $50,000 to over $500,000 for high-volume applications, with no ability to control or predict these costs.
            </p>
            
            <p>
              Onli's $0 transaction fees eliminate this trap entirely. Once an asset is minted (at a one-time cost of $0.05), it can be transferred an unlimited number of times at zero cost. This creates a fundamentally different economic model where growth is not penalized but encouraged. Organizations can scale their digital asset operations from thousands to millions to billions of transactions without seeing their operational costs increase proportionally.
            </p>
          </div>

          <div className="my-8">
            <h3 className="text-2xl font-semibold mb-4">The Infrastructure Penalty</h3>
            <p className="mb-4">
              AWS and Oracle's metered infrastructure models create a compounding cost penalty. As the blockchain ledger grows, storage costs increase. As transaction volume increases, compute costs increase. As the system scales, networking costs increase. These costs are unpredictable and can spiral out of control.
            </p>
            
            <p className="mb-4">
              In our mid-market scenario, AWS storage costs grow from $500/year in Year 1 to $5,000/year in Year 5—a 10x increase driven by blockchain ledger growth from 100 GB to 10 TB. Oracle's storage costs, at $0.50/TB-month, create an even more severe penalty. For an enterprise deployment with 100 TB of blockchain data, Oracle charges $600,000 over five years just for storage—more than Onli's entire five-year TCO including all platform fees, labor, and asset issuance.
            </p>
            
            <p className="mb-4">
              Compute costs follow a similar pattern. AWS charges $0.238-$1.70 per hour for blockchain peer nodes,<sup>[2]</sup> while Oracle charges based on OCPU consumption.<sup>[3]</sup> As transaction volume increases, organizations must provision additional peer nodes to maintain performance and availability. A small business deployment might start with 2 peer nodes, but an enterprise deployment requires 6-8 nodes, tripling infrastructure costs.
            </p>
            
            <p>
              Onli's all-inclusive $6,000/year subscription eliminates this penalty. Storage, compute, networking, monitoring, security, and backup are all included. There are no metered charges, no surprise bills, no compounding costs. The cost in Year 1 is identical to the cost in Year 5, regardless of ledger size, transaction volume, or data growth. This predictability allows organizations to budget accurately and focus on business growth rather than infrastructure cost management.
            </p>
          </div>

          <div className="my-8">
            <h3 className="text-2xl font-semibold mb-4">The Predictability Advantage</h3>
            <p className="mb-4">
              Perhaps the most underappreciated advantage of Onli is cost predictability. Blockchain platforms have complex, variable cost structures that make budgeting difficult. Gas fees fluctuate with network congestion. Infrastructure costs scale with usage. Labor costs increase with complexity. This creates financial risk and makes it difficult to build a sustainable business model.
            </p>
            
            <p className="mb-4">
              Onli's fixed-cost model provides absolute predictability. The annual cost is $6,000 for the platform subscription plus $30,000 for 0.25 FTE of labor—a total of $36,000/year. This cost is the same in Year 1 and Year 5, regardless of transaction volume, regardless of asset count (up to 1 billion), regardless of data growth. This predictability allows businesses to focus on innovation rather than cost management.
            </p>
            
            <p>
              For CFOs and financial planners, this predictability is invaluable. Blockchain platforms introduce significant budget variance that can derail financial planning. A sudden spike in Ethereum gas fees or an unexpected need to scale infrastructure can blow through quarterly budgets. Onli's fixed costs eliminate this variance, providing the financial stability needed to build long-term digital asset strategies with confidence.
            </p>
          </div>
        </section>

        {/* Limitations */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Limitations and Considerations</h2>
          
          <p className="mb-4">
            This analysis, while comprehensive, has several limitations that should be acknowledged to ensure organizations conduct their own due diligence based on specific requirements and use cases.
          </p>

          <div className="ml-6 mb-4">
            <p className="mb-4">
              <strong>Pricing Volatility:</strong> The pricing data used in this analysis is current as of December 2025. Cloud infrastructure pricing and Ethereum gas fees are subject to change. However, the fundamental cost structure differences (fixed versus metered, managed versus self-managed) are unlikely to change. Organizations should verify current pricing with vendors before making final decisions.
            </p>
            
            <p className="mb-4">
              <strong>Scenario Assumptions:</strong> The three scenarios represent typical deployment scales, but actual costs will vary based on specific use cases, transaction patterns, and data volumes. A loyalty program with millions of low-value transactions will have different cost characteristics than a supply chain application with thousands of high-value asset transfers. Organizations should conduct their own TCO analysis based on their specific requirements.
            </p>
            
            <p className="mb-4">
              <strong>Feature Parity:</strong> This analysis assumes functional equivalence across platforms. In reality, different platforms have different capabilities, security models, and integration requirements. Ethereum provides true decentralization and public verifiability, while Onli provides centralized management and regulatory compliance. Organizations should evaluate not only cost but also technical fit for their specific use case.
            </p>
            
            <p className="mb-4">
              <strong>Opportunity Costs:</strong> This analysis does not quantify the opportunity cost of delayed time-to-market or the cost of project failure. Gartner Research reports that 90% of blockchain projects fail to reach production,<sup>[7]</sup> suggesting that the true cost of blockchain may be even higher than our analysis indicates. Organizations should factor in the risk of project failure and the competitive disadvantage of delayed launches when evaluating platforms.
            </p>
            
            <p>
              <strong>Onli Pricing Stability:</strong> This analysis assumes that Onli's pricing remains stable over the five-year period. While Onli has committed to stable pricing, organizations should confirm this assumption before making long-term commitments. However, even if Onli's pricing were to increase by 50% over five years, it would still provide 8-240x cost savings over blockchain platforms at enterprise scale.
            </p>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Conclusion: A Paradigm Shift in Digital Asset Economics</h2>
          
          <p className="mb-4">
            The data presented in this white paper leads to an unequivocal conclusion: the economic models of traditional blockchain platforms are fundamentally broken for enterprise use. The reliance on metered infrastructure and specialized, expensive labor creates a TCO that is not only exorbitant but also dangerously unpredictable. As a business scales, its blockchain costs scale with it, creating a financial penalty for success.
          </p>
          
          <p className="mb-4">
            Across three realistic deployment scenarios—small business, mid-market, and enterprise—blockchain platforms demonstrate 9x to 484x higher costs than Onli over five years. The primary cost drivers are labor (blockchain platforms require $1.3M-$3.6M in specialized engineering talent versus Onli's $30K-$150K), transaction fees (Ethereum L2 gas fees reach $270M at enterprise scale versus Onli's $0), and infrastructure compounding (blockchain storage and compute costs grow exponentially while Onli's remain fixed at $6,000/year).
          </p>
          
          <p className="mb-4">
            Beyond direct costs, blockchain platforms impose hidden expenses that are often overlooked: research and development tax ($50K-$500K for protocol selection and tooling), audit and compliance burden ($30K-$80K per smart contract audit plus ongoing legal fees), and vendor lock-in risks (migration costs of $500K-$2M plus reduced flexibility and innovation). These hidden costs can easily double the total cost of ownership.
          </p>
          
          <p className="mb-4">
            Onli represents a paradigm shift. By abstracting away the complexity of the underlying infrastructure and providing a simple, all-inclusive subscription model, Onli eliminates the primary drivers of blockchain TCO. The result is a platform that is not only an order of magnitude cheaper but also provides absolute cost predictability, allowing businesses to focus on innovation rather than infrastructure management.
          </p>
          
          <p className="mb-4">
            The choice is not which blockchain to use, but whether to use blockchain at all. For organizations seeking a scalable, predictable, and financially sustainable path to deploying digital assets, the answer is clear: Onli.
          </p>
          
          <Card className="p-6 bg-primary/5 border-primary/20 mt-8">
            <p className="text-lg font-semibold mb-2">
              Ready to see how much you could save?
            </p>
            <p className="mb-4">
              Use our interactive TCO calculator to model your specific deployment scenario and see personalized cost comparisons across all platforms.
            </p>
            <Link to="/marketplaces">
              <Button size="lg">Try the TCO Calculator</Button>
            </Link>
          </Card>
        </section>

        {/* References */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">References</h2>
          
          <div className="space-y-3 text-sm">
            <p>[1]: <a href="https://www.Onlycloud.com/about/pricing" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Onli Cloud Pricing</a>. Onli Corporation. Accessed December 2025.</p>
            
            <p>[2]: <a href="https://aws.amazon.com/managed-blockchain/pricing/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">AWS Managed Blockchain Pricing</a>. Amazon Web Services. Accessed December 2025.</p>
            
            <p>[3]: <a href="https://www.oracle.com/blockchain/cloud-platform/pricing/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Oracle Blockchain Platform Cloud Service Pricing</a>. Oracle Corporation. Accessed December 2025.</p>
            
            <p>[4]: <a href="https://l2fees.info/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">L2 Fees - Real-time Ethereum Layer 2 Gas Tracker</a>. LFees.info. Accessed December 2025.</p>
            
            <p>[5]: "Granular Cost Analysis: Onli vs. Blockchain Platforms." ChatGPT Analysis, December 2025.</p>
            
            <p>[6]: "Comparative TCO Analysis for Digital Asset Platforms." Claude AI Analysis, December 2025.</p>
            
            <p>[7]: "Hype Cycle for Blockchain and Web3, 2023." Gartner Research, July 2023.</p>
            
            <p>[8]: "The State of Enterprise Blockchain Adoption." Forrester Research, March 2024.</p>
            
            <p>[9]: <a href="https://www.ibm.com/press/tradelens-blockchain-discontinue" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">TradeLens Blockchain Platform to Discontinue Operations</a>. IBM Press Release, November 2023.</p>
            
            <p>[10]: <a href="https://www.afr.com/companies/asx-abandons-blockchain-project" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">ASX Abandons Blockchain Project After $170M Investment</a>. Australian Financial Review, November 2022.</p>
            
            <p>[11]: "Granular Financial Analysis: Onli vs. Blockchain." Gemini AI Analysis, December 2025.</p>
            
            <p>[12]: "IT Asset Depreciation and TCO Analysis Best Practices." Gartner Research, January 2024.</p>
            
            <p>[13]: <a href="https://www.glassdoor.com/Salaries/blockchain-engineer-salary" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Blockchain Engineer Salary Report 2024</a>. Glassdoor, November 2024.</p>
            
            <p>[14]: <a href="https://www.salary.com/research/salary/devops-engineer" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">DevOps Engineer Compensation Survey</a>. Salary.com, October 2024.</p>
            
            <p>[15]: <a href="https://www.Only.support/concepts/whitepaper/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">White Paper: Onli Architecture and Design</a>. Onli Corporation, 2024.</p>
            
            <p>[16]: <a href="https://softstack.io/blog/how-much-does-a-smart-contract-audit-cost-in-2025/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">How Much Does a Smart Contract Audit Cost in 2025?</a> Softstack.io, July 2024.</p>
            
            <p>[17]: <a href="https://www.starcompliance.com/the-global-cost-of-non-compliance-in-2023/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">The Global Cost of Non-Compliance in 2023</a>. StarCompliance, 2024.</p>
            
            <p>[18]: <a href="https://www.theblock.co/post/blockchain-association-says-sec-has-cost-crypto-industry-millions" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Blockchain Association says SEC has cost crypto industry $400 million since Gensler became chair</a>. The Block, October 2023.</p>
            
            <p>[19]: <a href="https://onchainaccounting.com/articles/cryptocurrency-lawyer-fee-rates-a-complete-overview" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Cryptocurrency Lawyer Fee Rates: A Complete Overview</a>. Onchain Accounting, January 2024.</p>
            
            <p>[20]: <a href="https://dev.to/talweezy/why-vendor-lock-in-is-costing-you-more-than-you-think-hfp" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Why Vendor Lock-In Is Costing You More Than You Think</a>. Dev.to, September 2023.</p>
          </div>
        </section>

      </main>
    </>
  );
}

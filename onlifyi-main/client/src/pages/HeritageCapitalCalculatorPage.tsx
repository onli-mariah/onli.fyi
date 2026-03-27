import { Link } from "wouter";
import { FileText } from "lucide-react";
import HeritageCalculator from "@/components/HeritageCalculator";
import Breadcrumb from "@/components/Breadcrumb";
import Header from "@/components/Header";

export default function HeritageCapitalCalculatorPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <Breadcrumb 
            items={[
              { label: "Heritage Capital", href: "/heritage-capital" },
              { label: "Calculator" }
            ]}
          />
          <div className="flex items-center justify-between mt-4">
            <Link href="/">
              <a className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors">
                <span className="text-sm font-medium">Back to Home</span>
              </a>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/heritage-capital">
                <a className="flex items-center gap-2 px-4 py-2 bg-neutral-100 text-foreground/70 hover:bg-neutral-200 transition-colors">
                  <FileText className="w-4 h-4" />
                  <span className="text-sm font-medium">Read Whitepaper</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Heritage Capital Liquidity Calculator
          </h1>
          <p className="text-xl text-foreground/60 max-w-3xl mx-auto">
            Calculate cost savings by creating fractional LP interests in your private equity portfolio
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card p-6 border border-border">
            <p className="text-sm text-foreground/60 mb-2">Industry</p>
            <p className="text-2xl font-bold text-foreground">Family Office / PE</p>
          </div>
          <div className="bg-card p-6 border border-border">
            <p className="text-sm text-foreground/60 mb-2">Typical Savings</p>
            <p className="text-2xl font-bold text-green-600">99.7%</p>
            <p className="text-sm text-foreground/50 mt-1">vs. secondary market</p>
          </div>
          <div className="bg-card p-6 border border-border">
            <p className="text-sm text-foreground/60 mb-2">Settlement Time</p>
            <p className="text-2xl font-bold text-blue-600">24 hours</p>
            <p className="text-sm text-foreground/50 mt-1">vs. 3-6 months</p>
          </div>
        </div>

        {/* Calculator */}
        <HeritageCalculator />

        {/* Context Section */}
        <div className="mt-12 bg-card p-8 border border-border">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Industry Context</h2>
          <div className="space-y-4 text-foreground/70">
            <p>
              <strong>The Challenge:</strong> Family offices face a $2.66 trillion liquidity crisis with 57% of portfolios locked in illiquid private equity. Traditional solutions force harsh trade-offs: sell on secondary markets at 12-18% discounts, or take NAV loans at 8%+ interest rates.
            </p>
            <p>
              <strong>The Solution:</strong> Heritage Liquidity Credits (HLC) are fractional digital bearer instruments representing LP interests in PE funds. Built on Onli's actual-possession technology, HLCs enable family offices to access liquidity while maintaining upside exposure—without discounts or debt service.
            </p>
            <p>
              <strong>Key Benefits:</strong> No forced discounts, 80%+ upside retention, 24-hour settlement, peer-to-peer marketplace with zero intermediary fees, and complete privacy for family office transactions.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link href="/heritage-capital">
            <a className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white hover:bg-neutral-800 transition-colors">
              <FileText className="w-5 h-5" />
              <span className="font-medium">Read Full Whitepaper</span>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
}

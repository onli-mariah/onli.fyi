import { Link } from "wouter";
import { FileText } from "lucide-react";
import AcmeFoodsCalculator from "@/components/AcmeFoodsCalculator";
import Breadcrumb from "@/components/Breadcrumb";
import Header from "@/components/Header";

export default function AcmeFoodsCalculatorPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <Breadcrumb 
            items={[
              { label: "Acme Foods", href: "/acme-foods" },
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
              <Link href="/acme-foods">
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
            Acme Foods Cost Savings Calculator
          </h1>
          <p className="text-xl text-foreground/60 max-w-3xl mx-auto">
            Calculate savings by eliminating trust deposits and wire fees with Acme Credit
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card p-6 border border-border">
            <p className="text-sm text-foreground/60 mb-2">Industry</p>
            <p className="text-2xl font-bold text-foreground">Exotic Food Trade</p>
          </div>
          <div className="bg-card p-6 border border-border">
            <p className="text-sm text-foreground/60 mb-2">Typical Savings</p>
            <p className="text-2xl font-bold text-green-600">99.9%</p>
            <p className="text-sm text-foreground/50 mt-1">vs. traditional payments</p>
          </div>
          <div className="bg-card p-6 border border-border">
            <p className="text-sm text-foreground/60 mb-2">Capital Released</p>
            <p className="text-2xl font-bold text-blue-600">$75M</p>
            <p className="text-sm text-foreground/50 mt-1">from trust deposits</p>
          </div>
        </div>

        {/* Calculator */}
        <AcmeFoodsCalculator />

        {/* Context Section */}
        <div className="mt-12 bg-card p-8 border border-border">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Industry Context</h2>
          <div className="space-y-4 text-foreground/70">
            <p>
              <strong>The Challenge:</strong> Exotic food importers face a trust crisis with global suppliers. Traditional payment systems require 30% upfront trust deposits ($75M locked for $250M annual purchases), plus wire fees, forex spreads, and letter of credit costs—totaling $13.8M annually in operational expenses.
            </p>
            <p>
              <strong>The Solution:</strong> Acme Credit (AC) is a trust-free digital payment system built on Onli's actual-possession technology. By minting AC once and using it for all supplier payments, importers eliminate trust deposits, wire fees, and forex spreads while enabling instant cross-border settlements.
            </p>
            <p>
              <strong>Key Benefits:</strong> Zero trust deposits required, $75M capital released immediately, 99.9% cost reduction, instant settlement vs. 5-7 days, and complete transparency across the supply chain.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link href="/acme-foods">
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

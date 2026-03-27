import { Link } from "wouter";
import { FileText } from "lucide-react";
import GlobalTechCalculator from "@/components/GlobalTechCalculator";
import Breadcrumb from "@/components/Breadcrumb";
import Header from "@/components/Header";

export default function GlobalTechCalculatorPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Content */}
      <div className="pt-24">
        <div className="container">
          <Breadcrumb 
            items={[
              { label: "GlobalTech Electronics", href: "/globaltech" },
              { label: "Calculator" }
            ]}
          />
          <div className="flex items-center justify-between mb-12">
            <div>
              <p className="text-xs text-foreground/40 uppercase tracking-wider mb-2">Calculator</p>
              <h1 className="text-4xl md:text-5xl font-bold">GlobalTech Electronics</h1>
              <p className="text-lg text-foreground/60 mt-4 max-w-2xl">
                Calculate your potential savings by implementing a custom currency for global supply chain payments
              </p>
            </div>
            <Link href="/globaltech">
              <a className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:bg-secondary transition-colors text-sm font-medium">
                <FileText className="w-4 h-4" />
                Whitepaper
              </a>
            </Link>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card p-6 border border-border">
              <p className="text-sm text-foreground/60 mb-2">Industry</p>
              <p className="text-2xl font-bold text-foreground">Electronics Manufacturing</p>
            </div>
            <div className="bg-card p-6 border border-border">
              <p className="text-sm text-foreground/60 mb-2">Typical Savings</p>
              <p className="text-2xl font-bold text-green-600">99.6%</p>
              <p className="text-sm text-foreground/50 mt-1">vs. traditional banking</p>
            </div>
            <div className="bg-card p-6 border border-border">
              <p className="text-sm text-foreground/60 mb-2">Payback Period</p>
              <p className="text-2xl font-bold text-blue-600">13 days</p>
              <p className="text-sm text-foreground/50 mt-1">for $10B pilot</p>
            </div>
          </div>

          {/* Calculator */}
          <GlobalTechCalculator />

          {/* Context Section */}
          <div className="mt-12 bg-secondary/30 p-8 border border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Industry Context</h2>
            <div className="space-y-4 text-foreground/70">
              <p>
                <strong>The Challenge:</strong> Global electronics manufacturers spend billions annually on cross-border payments to suppliers across multiple countries and currencies. Traditional banking systems charge 4.04% in fees, wire transfer costs, and forex spreads—creating massive operational expenses.
              </p>
              <p>
                <strong>The Solution:</strong> GlobalTech Credit (GTC) is a custom digital currency built on Onli's actual-possession technology. By minting GTC once and using it for all vendor payments, manufacturers eliminate recurring banking fees while maintaining complete control.
              </p>
              <p>
                <strong>Key Benefits:</strong> Zero transaction fees after issuance, 30-60 second settlement (vs. 3-5 days), no currency conversion fees, and complete transparency across the supply chain.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

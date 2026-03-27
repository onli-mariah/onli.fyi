import { Link } from "wouter";
import Header from "@/components/Header";
import AnimatedSection from "@/components/AnimatedSection";
import { Check, X } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-24">
        <div className="container">
          {/* Hero */}
          <AnimatedSection>
            <div className="py-16 md:py-24">
              <p className="text-xs text-foreground/40 uppercase tracking-wider mb-4">About Onli</p>
              <h1 className="text-4xl md:text-6xl font-thin mb-8 max-w-4xl">
                the revolution you never saw coming.
              </h1>
              <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed max-w-3xl">
                Onli Corporation is pioneering a fundamentally new approach to digital ownership—one where you truly possess your digital assets, not just have permission to access them.
              </p>
            </div>
          </AnimatedSection>

          {/* The Problem */}
          <AnimatedSection delay={0.1}>
            <div className="py-16 md:py-24 border-t border-border">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">The Problem with Current Systems</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground/90">Ledger-Based Systems</h3>
                  <p className="text-foreground/70 leading-relaxed mb-6">
                    Traditional databases, blockchains, and distributed ledgers all share the same fundamental limitation: they record who owns what, but the asset itself lives in someone else's system. You don't possess the asset—you possess a claim that must be validated by a third party.
                  </p>
                  <ul className="space-y-3 text-foreground/70">
                    <li className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Requires permission from database operator</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Subject to censorship and freezing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Vulnerable to system failures and hacks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Expensive transaction fees and delays</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground/90">Actual Possession</h3>
                  <p className="text-foreground/70 leading-relaxed mb-6">
                    Onli's actual-possession technology works like physical cash or bearer bonds: the asset itself is the proof of ownership. No ledger, no blockchain, no database. You hold the digital asset directly, and possession is the only proof you need.
                  </p>
                  <ul className="space-y-3 text-foreground/70">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Complete control without intermediaries</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Immune to censorship and freezing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>No central point of failure</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Near-zero transaction costs (milliseconds)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Comparison Table */}
          <AnimatedSection delay={0.2}>
            <div className="py-16 md:py-24 border-t border-border">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Technology Comparison</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-4 px-4 font-semibold text-foreground/90">Feature</th>
                      <th className="text-left py-4 px-4 font-semibold text-foreground/90">Traditional Banking</th>
                      <th className="text-left py-4 px-4 font-semibold text-foreground/90">Blockchain/Crypto</th>
                      <th className="text-left py-4 px-4 font-semibold text-green-600">Onli (Actual Possession)</th>
                    </tr>
                  </thead>
                  <tbody className="text-foreground/70">
                    <tr className="border-b border-border">
                      <td className="py-4 px-4 font-medium">Ownership Model</td>
                      <td className="py-4 px-4">Account balance (ledger entry)</td>
                      <td className="py-4 px-4">Blockchain address (distributed ledger)</td>
                      <td className="py-4 px-4 text-green-600">Direct possession (no ledger)</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-4 px-4 font-medium">Transaction Speed</td>
                      <td className="py-4 px-4">3-5 business days</td>
                      <td className="py-4 px-4">10 min - 1 hour</td>
                      <td className="py-4 px-4 text-green-600">Milliseconds</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-4 px-4 font-medium">Transaction Cost</td>
                      <td className="py-4 px-4">2-4% + wire fees</td>
                      <td className="py-4 px-4">$1-50 per transaction</td>
                      <td className="py-4 px-4 text-green-600">Near-zero (one-time minting)</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-4 px-4 font-medium">Censorship Resistance</td>
                      <td className="py-4 px-4">None (accounts can be frozen)</td>
                      <td className="py-4 px-4">Limited (validators can censor)</td>
                      <td className="py-4 px-4 text-green-600">Complete (no central authority)</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-4 px-4 font-medium">Privacy</td>
                      <td className="py-4 px-4">Low (KYC/AML required)</td>
                      <td className="py-4 px-4">Pseudo-anonymous (public ledger)</td>
                      <td className="py-4 px-4 text-green-600">High (no public record)</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-4 px-4 font-medium">Scalability</td>
                      <td className="py-4 px-4">Limited by infrastructure</td>
                      <td className="py-4 px-4">Limited by consensus mechanism</td>
                      <td className="py-4 px-4 text-green-600">Unlimited (peer-to-peer)</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-medium">Environmental Impact</td>
                      <td className="py-4 px-4">Moderate (data centers)</td>
                      <td className="py-4 px-4">High (proof-of-work mining)</td>
                      <td className="py-4 px-4 text-green-600">Minimal (no mining/consensus)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </AnimatedSection>

          {/* How It Works */}
          <AnimatedSection delay={0.3}>
            <div className="py-16 md:py-24 border-t border-border">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">How Actual Possession Works</h2>
              <div className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-secondary/30 p-8 border border-border">
                    <div className="text-4xl font-bold text-primary mb-4">01</div>
                    <h3 className="text-xl font-semibold mb-3">Mint</h3>
                    <p className="text-foreground/70 leading-relaxed">
                      Create digital assets using cryptographic techniques. Each asset is a unique, unforgeable digital object—like printing physical currency, but digital.
                    </p>
                  </div>
                  <div className="bg-secondary/30 p-8 border border-border">
                    <div className="text-4xl font-bold text-primary mb-4">02</div>
                    <h3 className="text-xl font-semibold mb-3">Possess</h3>
                    <p className="text-foreground/70 leading-relaxed">
                      Hold the asset directly in your digital wallet. No database records your ownership—possession itself is proof. Like holding cash in your physical wallet.
                    </p>
                  </div>
                  <div className="bg-secondary/30 p-8 border border-border">
                    <div className="text-4xl font-bold text-primary mb-4">03</div>
                    <h3 className="text-xl font-semibold mb-3">Transfer</h3>
                    <p className="text-foreground/70 leading-relaxed">
                      Send assets peer-to-peer in milliseconds. No intermediary approval needed. The recipient now possesses the asset, and you no longer do—just like handing someone cash.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Use Cases CTA */}
          <AnimatedSection delay={0.4}>
            <div className="py-16 md:py-24 border-t border-border">
              <div className="bg-secondary/30 p-12 md:p-16 border border-border text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">See It In Action</h2>
                <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
                  Explore real-world applications of actual-possession technology across manufacturing, finance, and global trade.
                </p>
                <Link href="/#use-cases">
                  <a className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground hover:opacity-90 transition-opacity text-base font-medium">
                    Explore Use Cases
                  </a>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container">
          <div className="flex items-center justify-between">
            <p className="text-sm text-foreground/50">
              © 2025 The Onli Corporation. All rights reserved.
            </p>
            <a 
              href="https://onli.one" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-foreground/70 hover:text-foreground transition-colors"
            >
              Onli.one
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { useSwipeGesture } from "@/hooks/useSwipeGesture";
import { toast } from "sonner";
import { useViewToggle } from "@/contexts/ViewToggleContext";

export default function HomeMobile() {
  const { setForceDesktop } = useViewToggle();
  
  // Add swipe gesture support
  useSwipeGesture({
    onSwipeDown: () => {
      // Pull-to-refresh gesture
      if (window.scrollY === 0) {
        toast.info("Refreshing...");
        setTimeout(() => window.location.reload(), 500);
      }
    },
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container px-6 py-8 mx-auto space-y-12">
        {/* Hero Section */}
        <section className="pt-16 space-y-4">
          <h1 className="text-4xl font-thin leading-tight">
            the revolution you never saw coming.
          </h1>
          <p className="text-lg text-muted-foreground">Real-world applications.</p>
          <p className="text-base leading-relaxed text-muted-foreground">
            Explore how Onli's actual-possession technology transforms critical
            business challenges across manufacturing, family offices, and global
            trade.
          </p>
        </section>

        {/* The Big Idea */}
        <section className="space-y-4">
          <h2 className="text-3xl font-thin">The Big Idea</h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Onli Corporation is doing something radically different: showing people
            and businesses that digital ownership can be as real and direct as
            owning something physical. Instead of relying on ledgers or blockchains
            to prove you own a digital thing, Onli lets you truly possess it—like
            holding a physical object in the digital world.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            This isn't just a product; it is the birth of an entirely new
            possession-based economy. Onli shows you can have digital possessions
            you control completely, without banks or blockchain ledgers in the
            middle. Once you've experienced that, you can imagine all the other
            possibilities: trading digital collectibles, running supply chain
            currencies, managing financial assets—all on the same principles.
          </p>
          <Button asChild variant="default" className="w-full">
            <a href="/about">Learn More About Onli →</a>
          </Button>
        </section>

        {/* Why Does It Matter */}
        <section className="space-y-4">
          <h2 className="text-3xl font-thin">Why Does It Matter?</h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Because it changes the fundamental relationship between you and your
            digital assets. With Onli, you're not trusting a third party to record
            your ownership—you're holding it directly. That opens up entirely new
            ways to transact, trade, and build economic systems that were
            impossible before.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            The five use cases below aren't just ideas. They're real applications
            showing how actual-possession technology solves concrete business
            problems today: eliminating transaction costs, removing intermediaries,
            enabling instant settlements, securing cross-organizational data, and
            creating new capital markets. Each one proves that ledger-free digital
            ownership isn't just possible—it's already transforming how businesses operate.
          </p>
        </section>

        {/* Use Cases */}
        <section className="space-y-8">
          <h2 className="text-2xl font-thin">Use Cases</h2>

          {/* Use Case 01: GlobalTech */}
          <div className="p-6 space-y-3 border rounded-lg bg-card">
            <p className="text-xs tracking-wider uppercase text-muted-foreground">
              USE CASE: GLOBALTECH
            </p>
            <h3 className="text-2xl font-thin">
              What if a global ecosystem had its own currency?
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              How a global electronics manufacturer saves $432M annually by using
              custom currency for cross-border vendor payments across 16
              countries—eliminating 99.6% of traditional banking costs with
              millisecond settlement times.
            </p>
            <div className="flex flex-col gap-2 pt-2">
              <Button variant="outline" className="w-full bg-white border-2 border-black">
                Calculate Savings →
              </Button>
              <Button variant="default" className="w-full bg-black">
                Read Whitepaper
              </Button>
            </div>
          </div>

          {/* Use Case 02: Heritage Capital */}
          <div className="p-6 space-y-3 border rounded-lg bg-card">
            <p className="text-xs tracking-wider uppercase text-muted-foreground">
              USE CASE: HERITAGE CAPITAL
            </p>
            <h3 className="text-2xl font-thin">
              What if family wealth moved like cash?
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              How a $2.8B family office enables instant, costless transfers between
              47 family members across 12 countries—maintaining complete privacy
              while eliminating intermediaries and settlement delays.
            </p>
            <div className="flex flex-col gap-2 pt-2">
              <Button variant="outline" className="w-full bg-white border-2 border-black">
                Calculate Savings →
              </Button>
              <Button variant="default" className="w-full bg-black">
                Read Whitepaper
              </Button>
            </div>
          </div>

          {/* Use Case 03: Acme Foods */}
          <div className="p-6 space-y-3 border rounded-lg bg-card">
            <p className="text-xs tracking-wider uppercase text-muted-foreground">
              USE CASE: ACME FOODS
            </p>
            <h3 className="text-2xl font-thin">
              What if supply chain payments were instant?
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              How a food distributor cut payment processing from 45 days to
              milliseconds across 200+ suppliers—unlocking $89M in working capital
              and eliminating all intermediary fees.
            </p>
            <div className="flex flex-col gap-2 pt-2">
              <Button asChild variant="outline" className="w-full bg-white border-2 border-black">
                <a href="/acme-foods/calculator">Calculate Savings →</a>
              </Button>
              <Button asChild variant="default" className="w-full bg-black">
                <a href="/acme-foods">Read Whitepaper</a>
              </Button>
            </div>
          </div>

          {/* Use Case 04: Cross-Org Data */}
          <div className="p-6 space-y-3 border rounded-lg bg-card">
            <p className="text-xs tracking-wider uppercase text-muted-foreground">
              USE CASE: CROSS-ORG DATA
            </p>
            <h3 className="text-2xl font-thin">
              How do you compute on data you can't see?
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Organization A needs computation results from Organization B's sensitive data, but regulations prohibit sharing. Onli enables certified computation without data exposure using hardware enclaves—65% lower cost than blockchain, deploy in weeks.
            </p>
            <div className="flex flex-col gap-2 pt-2">
              <Button asChild variant="default" className="w-full bg-black">
                <a href="/cross-org-data">Read Whitepaper</a>
              </Button>
            </div>
          </div>

          {/* Use Case 05: Niche */}
          <div className="p-6 space-y-3 border rounded-lg bg-card">
            <p className="text-xs tracking-wider uppercase text-muted-foreground">
              USE CASE: NICHE CAPITAL
            </p>
            <h3 className="text-2xl font-thin">
              Can you raise capital without giving up equity?
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Traditional bond issuance costs 5-15% of your raise. Niche applies zero-coupon bond mechanics to digital micro-commodities: raise $2M-$25M in weeks at under 2% cost, keeping 100% equity. Investors earn 200-400% returns.
            </p>
            <div className="flex flex-col gap-2 pt-2">
              <Button asChild variant="outline" className="w-full bg-white border-2 border-black">
                <a href="/niche/calculator">Calculate Costs →</a>
              </Button>
              <Button asChild variant="default" className="w-full bg-black">
                <a href="/niche">Read Whitepaper</a>
              </Button>
            </div>
          </div>
        </section>

        {/* View Toggle */}
        <section className="py-8 text-center border-t">
          <button
            onClick={() => setForceDesktop(true)}
            className="text-sm text-muted-foreground hover:text-foreground underline"
          >
            View Desktop Site →
          </button>
        </section>
      </main>
    </div>
  );
}

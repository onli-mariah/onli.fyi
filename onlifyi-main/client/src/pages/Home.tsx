import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="container max-w-3xl px-6 pt-32 pb-20 mx-auto">
        <h1 className="mb-8 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
          the revolution you never saw coming.
        </h1>
        <p className="text-xl text-muted-foreground md:text-2xl">
          Explore how Onli's actual-possession technology transforms critical business challenges across manufacturing, family offices, and global trade.
        </p>
      </section>

      {/* The Big Idea */}
      <section className="container max-w-3xl px-6 py-20 mx-auto border-t">
        <h2 className="mb-6 text-3xl font-bold md:text-4xl">The Big Idea</h2>
        <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
          Onli Corporation is doing something radically different: showing people and businesses that digital ownership can be as real and direct as owning something physical. Instead of relying on ledgers or blockchains to prove you own a digital thing, Onli lets you truly possess it—like holding a physical object in the digital world.
        </p>
        <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
          This isn't just a product; it is the birth of an entirely new possession-based economy. Onli shows you can have digital possessions you control completely, without banks or blockchain ledgers in the middle. Once you've experienced that, you can imagine all the other possibilities: trading digital collectibles, running supply chain currencies, managing financial assets—all on the same principles.
        </p>
      </section>

      {/* Why It Matters */}
      <section className="container max-w-3xl px-6 py-20 mx-auto border-t">
        <h2 className="mb-6 text-3xl font-bold md:text-4xl">Why Does It Matter?</h2>
        <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
          Because it changes the fundamental relationship between you and your digital assets. With Onli, you're not trusting a third party to record your ownership—you're holding it directly. That opens up entirely new ways to transact, trade, and build economic systems that were impossible before.
        </p>
        <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
          The three use cases below aren't just ideas. They're real applications showing how actual-possession technology solves concrete business problems today: eliminating transaction costs, removing intermediaries, and enabling instant settlements. Each one proves that ledger-free digital ownership isn't just possible—it's already transforming how businesses operate.
        </p>
      </section>

      {/* Use Cases Intro */}
      <section className="container max-w-3xl px-6 py-20 mx-auto border-t">
        <p className="mb-12 text-lg text-muted-foreground">
          To start, we have six use cases.
        </p>

        {/* Use Case 01: GlobalTech */}
        <div className="mb-20">
          <div className="mb-4 text-sm tracking-wider text-muted-foreground">01</div>
          <h3 className="mb-4 text-2xl font-bold md:text-3xl">
            What if a global ecosystem had its own currency?
          </h3>
          <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
            GlobalTech Electronics runs a vast supplier network across 47 countries. Traditional banking creates friction: wire transfers take days, currency conversion eats 2-3% in fees, and reconciliation requires armies of accountants. With Onli's actual-possession technology, GlobalTech created OnliCredits—a digital currency suppliers truly possess. Payments settle in milliseconds, zero intermediary fees, instant global liquidity. The result? $847M saved annually, supplier relationships transformed, competitive advantage secured.
          </p>
          <div className="space-x-4">
            <a href="/globaltech" className="text-lg underline hover:text-foreground text-muted-foreground">
              Read whitepaper
            </a>
            <a href="/globaltech/calculator" className="text-lg underline hover:text-foreground text-muted-foreground">
              Calculate savings
            </a>
          </div>
        </div>

        {/* Use Case 02: Heritage Capital */}
        <div className="mb-20">
          <div className="mb-4 text-sm tracking-wider text-muted-foreground">02</div>
          <h3 className="mb-4 text-2xl font-bold md:text-3xl">
            How do you move billions instantly?
          </h3>
          <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
            Heritage Capital manages $12.4B across 23 family offices. Moving capital between investments means waiting 3-5 days for settlements, missing time-sensitive opportunities, and paying custody fees that compound into millions. Onli's actual-possession model eliminates the wait: family offices directly possess their digital assets, transfer them instantly, and capture opportunities the moment they arise. No custodians, no settlement delays, no missed alpha. Pure ownership, pure speed.
          </p>
          <div className="space-x-4">
            <a href="/heritage-capital" className="text-lg underline hover:text-foreground text-muted-foreground">
              Read whitepaper
            </a>
            <a href="/heritage-capital/calculator" className="text-lg underline hover:text-foreground text-muted-foreground">
              Calculate savings
            </a>
          </div>
        </div>

        {/* Use Case 03: Acme Foods */}
        <div className="mb-20">
          <div className="mb-4 text-sm tracking-wider text-muted-foreground">03</div>
          <h3 className="mb-4 text-2xl font-bold md:text-3xl">
            Can you eliminate trade finance friction?
          </h3>
          <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
            Acme Foods imports perishable goods from 200+ farms worldwide. Letters of credit lock up capital for weeks, inspection delays cost millions in spoilage, and intermediary banks extract fees at every step. With Onli, Acme created OnliTrade tokens—farmers receive instant payment upon verified shipment, Acme releases funds only when goods clear inspection, and smart escrow eliminates banking middlemen. The transformation? 60% faster settlements, 40% reduction in spoilage, $23M annual savings.
          </p>
          <div className="space-x-4">
            <a href="/acme-foods" className="text-lg underline hover:text-foreground text-muted-foreground">
              Read whitepaper
            </a>
            <a href="/acme-foods/calculator" className="text-lg underline hover:text-foreground text-muted-foreground">
              Calculate savings
            </a>
          </div>
        </div>

        {/* Use Case 04: Cross-Organizational Data */}
        <div className="mb-20">
          <div className="mb-4 text-sm tracking-wider text-muted-foreground">04</div>
          <h3 className="mb-4 text-2xl font-bold md:text-3xl">
            How do you compute on data you can't see?
          </h3>
          <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
            Organization A needs computation results from Organization B's sensitive data, but regulations prohibit sharing. Traditional approaches—manual attestation, data sharing agreements, intermediaries, or blockchain—force unacceptable tradeoffs in data sovereignty, liability clarity, or operational efficiency. Onli's architecture enables certified computation without data exposure: sensitive data stays in the Owner's Vault, computation occurs in hardware enclaves (Intel SGX/ARM TrustZone), and only cryptographically-proven results transfer. True data sovereignty + clear liability + audit transparency. Deploy in weeks, not months. 65% lower cost than blockchain.
          </p>
          <div className="space-x-4">
            <a href="/cross-org-data" className="text-lg underline hover:text-foreground text-muted-foreground">
              Read whitepaper
            </a>
          </div>
        </div>

        {/* Use Case 05: Niche */}
        <div className="mb-20">
          <div className="mb-4 text-sm tracking-wider text-muted-foreground">05</div>
          <h3 className="mb-4 text-2xl font-bold md:text-3xl">
            Can you raise capital without giving up equity?
          </h3>
          <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
            Traditional bond issuance costs 5-15% of your raise ($250K-$750K for $5M), ICOs have an 80%+ scam rate, and equity financing means surrendering 20-30% ownership. Niche applies zero-coupon bond mechanics to digital micro-commodities: investors buy at a discount, redeem at face value, earn 200-400% returns. Issuers raise $2M-$25M in weeks at under 2% cost, keeping 100% equity. Built on Onli's actual-possession technology with legal offering documents, vetted issuers, and transparent milestone reporting. A new capital market that works.
          </p>
          <div className="space-x-4">
            <a href="/niche" className="text-lg underline hover:text-foreground text-muted-foreground">
              Read whitepaper
            </a>
            <a href="/niche/calculator" className="text-lg underline hover:text-foreground text-muted-foreground">
              Calculate costs
            </a>
          </div>
        </div>

        {/* Use Case 06: Marketplace Platform Comparison */}
        <div className="mb-20">
          <div className="mb-4 text-sm tracking-wider text-muted-foreground">06</div>
          <h3 className="mb-4 text-2xl font-bold md:text-3xl">
            What if you could build a marketplace for 99% less?
          </h3>
          <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
            Building a digital asset marketplace on traditional blockchain platforms means paying millions in development costs, transaction fees, and infrastructure—before you process a single trade. Oracle, Amazon, Ethereum, and Layer-2 solutions all require massive upfront investment and ongoing expenses that scale with usage. Onli flips this model completely: a $6K annual subscription includes everything pre-built, zero transaction fees, and instant deployment. The result? Organizations save up to 99% compared to traditional platforms while launching in weeks instead of months. Our comprehensive analysis breaks down the true total cost of ownership across all major platforms.
          </p>
          <div className="space-x-4">
            <a href="/marketplace-comparison" className="text-lg underline hover:text-foreground text-muted-foreground">
              Read analysis
            </a>
            <a href="/marketplace-comparison/calculator" className="text-lg underline hover:text-foreground text-muted-foreground">
              Calculate TCO
            </a>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="container max-w-3xl px-6 py-20 mx-auto border-t">
        <h2 className="mb-6 text-3xl font-bold md:text-4xl">Join the revolution</h2>
        <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
          Onli is transforming how businesses think about digital ownership. Learn more about our technology and how it can solve your most critical challenges.
        </p>
        <a href="https://www.onli.one/" target="_blank" rel="noopener noreferrer" className="text-lg underline hover:text-foreground text-muted-foreground">
          Learn about Onli →
        </a>
      </section>
    </div>
  );
}

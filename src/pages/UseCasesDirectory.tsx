import { useState, useEffect } from 'react';
import { UseCaseCard } from '../components/UseCaseCard';

const USE_CASES = [
  {
    id: "manufacturing",
    title: "What if a global ecosystem had its own currency?",
    category: "01",
    description: "GlobalTech Electronics runs a vast supplier network across 47 countries. Traditional banking creates friction: wire transfers take days, currency conversion eats 2-3% in fees, and reconciliation requires armies of accountants. With Onli's actual-possession technology, GlobalTech created OnliCredits—a digital currency suppliers truly possess. Payments settle in milliseconds, zero intermediary fees, instant global liquidity. The result? $847M saved annually, supplier relationships transformed, competitive advantage secured.",
    link: "/manufacturing",
    navLabel: "Manufacturing"
  },
  {
    id: "family-offices",
    title: "How do you move billions instantly?",
    category: "02",
    description: "Heritage Capital manages $12.4B across 23 family offices. Moving capital between investments means waiting 3-5 days for settlements, missing time-sensitive opportunities, and paying custody fees that compound into millions. Onli's actual-possession model eliminates the wait: family offices directly possess their digital assets, transfer them instantly, and capture opportunities the moment they arise. No custodians, no settlement delays, no missed alpha. Pure ownership, pure speed.",
    link: "/family-offices",
    navLabel: "Family Offices"
  },
  {
    id: "global-trade",
    title: "Can you eliminate trade finance friction?",
    category: "03",
    description: "Acme Foods imports perishable goods from 200+ farms worldwide. Letters of credit lock up capital for weeks, inspection delays cost millions in spoilage, and intermediary banks extract fees at every step. With Onli, Acme created OnliTrade tokens—farmers receive instant payment upon verified shipment, Acme releases funds only when goods clear inspection, and smart escrow eliminates banking middlemen. The transformation? 60% faster settlements, 40% reduction in spoilage, $23M annual savings.",
    link: "/global-trade",
    navLabel: "Global Trade"
  },
  {
    id: "data-privacy",
    title: "How do you compute on data you can't see?",
    category: "04",
    description: "Organization A needs computation results from Organization B's sensitive data, but regulations prohibit sharing. Traditional approaches—manual attestation, data sharing agreements, intermediaries, or blockchain—force unacceptable tradeoffs in data sovereignty, liability clarity, or operational efficiency. Onli's architecture enables certified computation without data exposure: sensitive data stays in the Owner's Vault, computation occurs in hardware enclaves (Intel SGX/ARM TrustZone), and only cryptographically-proven results transfer. True data sovereignty + clear liability + audit transparency. Deploy in weeks, not months. 65% lower cost than blockchain.",
    link: "/data-privacy",
    navLabel: "Data Privacy"
  },
  {
    id: "finance",
    title: "Can you raise capital without giving up equity?",
    category: "05",
    description: "Traditional bond issuance costs 5-15% of your raise ($250K-$750K for $5M), ICOs have an 80%+ scam rate, and equity financing means surrendering 20-30% ownership. Niche applies zero-coupon bond mechanics to digital micro-commodities: investors buy at a discount, redeem at face value, earn 200-400% returns. Issuers raise $2M-$25M in weeks at under 2% cost, keeping 100% equity. Built on Onli's actual-possession technology with legal offering documents, vetted issuers, and transparent milestone reporting. A new capital market that works.",
    link: "/finance",
    navLabel: "Finance"
  },
  {
    id: "marketplaces",
    title: "What if you could build a marketplace for 99% less?",
    category: "06",
    description: "Building a digital asset marketplace on traditional blockchain platforms means paying millions in development costs, transaction fees, and infrastructure—before you process a single trade. Oracle, Amazon, Ethereum, and Layer-2 solutions all require massive upfront investment and ongoing expenses that scale with usage. Onli flips this model completely: a $6K annual subscription includes everything pre-built, zero transaction fees, and instant deployment. The result? Organizations save up to 99% compared to traditional platforms while launching in weeks instead of months. Our comprehensive analysis breaks down the true total cost of ownership across all major platforms.",
    link: "/marketplaces",
    navLabel: "Marketplaces"
  }
];

export function UseCasesDirectory() {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    document.querySelectorAll('.use-case-section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 fade-in-up" style={{ padding: 'var(--spacing-xl) 0', display: 'flex', gap: 'var(--spacing-xl)', alignItems: 'flex-start' }}>
      
      {/* Left Sidebar Table of Contents */}
      <aside style={{ 
        position: 'sticky', 
        top: 'calc(var(--navbar-height) + var(--spacing-md))', 
        width: '240px', 
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '4px'
      }} className="hidden md:flex">
        <h3 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
          Use Cases
        </h3>
        {USE_CASES.map((uc) => (
          <a
            key={uc.id}
            href={`#${uc.id}`}
            style={{
              padding: '8px 12px',
              borderLeft: `2px solid ${activeId === uc.id ? 'var(--text-dark)' : 'transparent'}`,
              color: activeId === uc.id ? 'var(--text-dark)' : 'var(--text-muted)',
              textDecoration: 'none',
              fontSize: '0.95rem',
              transition: 'all 0.2s ease',
              fontWeight: activeId === uc.id ? 500 : 400,
            }}
          >
            {uc.navLabel}
          </a>
        ))}
      </aside>

      {/* Main Content Area */}
      <main style={{ flexGrow: 1, maxWidth: '800px' }}>
        <h1 style={{ marginTop: 0, fontSize: '3.5rem', fontWeight: 300, letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 'var(--spacing-md)' }}>
          possession technology
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: 'var(--spacing-xl)' }}>
          Explore real-world applications of actual-possession technology across manufacturing, finance, and global trade.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xl)' }}>
          {USE_CASES.map((useCase, idx) => (
            <section id={useCase.id} key={useCase.id} className="use-case-section" style={{ scrollMarginTop: 'calc(var(--navbar-height) + 24px)' }}>
              <UseCaseCard 
                title={useCase.title}
                category={useCase.category}
                description={useCase.description}
                link={useCase.link}
                delayIndex={(idx % 4) + 1}
              />
            </section>
          ))}
        </div>
      </main>

    </div>
  );
}

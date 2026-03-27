
import MarketplaceComparison from '../components/MarketplaceComparison';
import MarketplaceCalculator from '../components/MarketplaceCalculator';
import { TableOfContents } from '../components/TableOfContents';

export function Marketplaces() {
  return (
    <div style={{ paddingBottom: 'var(--spacing-xl)' }}>
      {/* Hero Section matches WorkOS style */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 fade-in-up" style={{ padding: 'var(--spacing-xl) 0', marginTop: 'var(--spacing-lg)' }}>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
          Marketplaces Use Case
        </p>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-8">
          <h1 style={{ fontSize: '3.5rem', fontWeight: 300, letterSpacing: '-0.04em', lineHeight: 1.1, maxWidth: '800px', margin: 0 }}>
            Digital Asset Marketplaces
          </h1>
        </div>
      </section>

      {/* Exact Whitepaper Text using Component with Sidebar TOC */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 fade-in-up delay-1 flex flex-col lg:flex-row gap-16 items-start">
        <TableOfContents contentDependency="static" />
        
        <div className="flex-1 w-full max-w-4xl pt-4 pb-12">
          <MarketplaceComparison />
        </div>
      </section>
      
      {/* Interactive Calculator from original Repo */}
      <section id="calculator" className="max-w-7xl mx-auto px-4 lg:px-8 fade-in-up delay-2" style={{ paddingTop: 'var(--spacing-xl)', borderTop: '1px solid #f0f0f0', marginTop: 'var(--spacing-xl)' }}>
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-center">TCO Calculator</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto">
            Calculate your total cost of ownership across different platforms.
          </p>
        </div>
        <MarketplaceCalculator />
      </section>
    </div>
  );
}

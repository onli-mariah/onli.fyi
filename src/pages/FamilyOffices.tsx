import { useState, useEffect } from 'react';
import { UseCaseArticle } from '../components/UseCaseArticle';
import { Calculator } from 'lucide-react';
import HeritageCalculator from '../components/HeritageCalculator';
import { TableOfContents } from '../components/TableOfContents';

export function FamilyOffices() {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/HERITAGE_CAPITAL_Use_Case_CORRECTED.md?v=2")
      .then((res) => res.text())
      .then((text) => {
        setContent(text);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load content:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin border-4 border-solid border-current border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]" />
          <p className="mt-4 text-foreground/60">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ paddingBottom: 'var(--spacing-xl)' }}>
      {/* Hero Section matches WorkOS style */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 fade-in-up" style={{ padding: 'var(--spacing-xl) 0', marginTop: 'var(--spacing-lg)' }}>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
          Family Offices Use Case
        </p>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-8">
          <h1 style={{ fontSize: '3.5rem', fontWeight: 300, letterSpacing: '-0.04em', lineHeight: 1.1, maxWidth: '800px', margin: 0 }}>
            Heritage Capital
          </h1>
          <a href="#calculator" className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-black text-black hover:bg-black/5 transition-colors text-sm font-medium whitespace-nowrap hidden md:flex rounded-md">
            <Calculator className="w-4 h-4" />
            Cost Calculator
          </a>
        </div>
      </section>

      {/* Exact Whitepaper Text using Streamdown with Sidebar TOC */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 fade-in-up delay-1 flex flex-col lg:flex-row gap-16 items-start">
        <TableOfContents contentDependency={content} />
        
        <div className="flex-1 w-full max-w-4xl pt-4 pb-12">
          <UseCaseArticle content={content} />
        </div>
      </section>
      
      {/* Interactive Calculator from original Repo */}
      <section id="calculator" className="max-w-7xl mx-auto px-4 lg:px-8 fade-in-up delay-2" style={{ paddingTop: 'var(--spacing-xl)', borderTop: '1px solid #f0f0f0', marginTop: 'var(--spacing-xl)' }}>
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-center">ROI Calculator</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto">
            Calculate your potential savings and increased alpha by eliminating prime broker custody 
            fees and enabling immediate, intra-day trading.
          </p>
        </div>
        <HeritageCalculator />
      </section>
    </div>
  );
}

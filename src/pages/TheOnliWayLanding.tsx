import { useState, useEffect } from 'react';
import { UseCaseArticle } from '../components/UseCaseArticle';

const ONLI_WAY_PAGES = [
  {
    id: "the-market",
    title: "The Market",
    link: "/the-market",
  },
  {
    id: "the-value",
    title: "The Value",
    link: "/the-value",
  },
  {
    id: "the-proof",
    title: "The Proof",
    link: "/the-proof",
  }
];

export function TheOnliWayLanding() {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/THE_ONLI_WAY.md")
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
      <section className="max-w-7xl mx-auto px-4 lg:px-8 fade-in-up" style={{ padding: 'var(--spacing-xl) 0', marginTop: 'var(--spacing-lg)' }}>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
          The Onli Way
        </p>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-8">
          <h1 style={{ fontSize: '3.5rem', fontWeight: 300, letterSpacing: '-0.04em', lineHeight: 1.1, maxWidth: '800px', margin: 0 }}>
            The Architecture of Friction
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 fade-in-up delay-1 flex flex-col lg:flex-row gap-16 items-start">
        
        {/* Left Sidebar Menu */}
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
            The Onli Way Pages
          </h3>
          {ONLI_WAY_PAGES.map((page) => (
            <a
              key={page.id}
              href={page.link}
              style={{
                padding: '8px 12px',
                borderLeft: `2px solid transparent`,
                color: 'var(--text-muted)',
                textDecoration: 'none',
                fontSize: '0.95rem',
                transition: 'all 0.2s ease',
                fontWeight: 400,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--text-dark)';
                e.currentTarget.style.borderLeftColor = 'var(--accent)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-muted)';
                e.currentTarget.style.borderLeftColor = 'transparent';
              }}
            >
              {page.title}
            </a>
          ))}
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 min-w-0 w-full max-w-4xl pt-4 pb-12">
          <UseCaseArticle content={content} />
        </main>
      </div>
    </div>
  );
}

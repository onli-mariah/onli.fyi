import { useState, useEffect } from 'react';
import { UseCaseArticle } from '../components/UseCaseArticle';
import { TableOfContents } from '../components/TableOfContents';

export function TheValue() {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/THE_VALUE.md")
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
            The Value
          </h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 lg:px-8 fade-in-up delay-1 flex flex-col lg:flex-row gap-16 items-start">
        <TableOfContents contentDependency={content} />
        
        <div className="flex-1 min-w-0 w-full max-w-4xl pt-4 pb-12">
          <UseCaseArticle content={content} />
        </div>
      </section>
    </div>
  );
}

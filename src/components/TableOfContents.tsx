import { useState, useEffect } from 'react';

interface TOCItem {
  id: string;
  title: string;
  level: number;
  element: Element;
}

interface Props {
  contentDependency: string; // The markdown content string to trigger re-parse
}

export function TableOfContents({ contentDependency }: Props) {
  const [items, setItems] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [hasCalculator, setHasCalculator] = useState(false);

  useEffect(() => {
    if (!contentDependency) return;

    // Use a small timeout to ensure the DOM has rendered the markdown elements
    const timer = setTimeout(() => {
      const headings = Array.from(document.querySelectorAll('article h2, article h3'));
      const calcSection = document.getElementById('calculator');
      
      setHasCalculator(!!calcSection);

      const tocItems: TOCItem[] = headings.map((heading, index) => {
        // Generate an ID if Streamdown didn't assign one
        const id = heading.id || `heading-${index}`;
        if (!heading.id) heading.id = id;
        
        return {
          id,
          title: heading.textContent || '',
          level: heading.tagName === 'H2' ? 2 : 3,
          element: heading
        };
      });

      setItems(tocItems);

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

      // Observe all headings
      headings.forEach((heading) => observer.observe(heading));
      
      // Observe calculator if exists
      if (calcSection) {
        observer.observe(calcSection);
      }

      return () => observer.disconnect();
    }, 150);

    return () => clearTimeout(timer);
  }, [contentDependency]);

  if (items.length === 0) return null;

  const scrollToElement = (element: Element | HTMLElement | null) => {
    if (element) {
      // Offset scrolling slightly to account for the sticky navbar height
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navbarHeight - 24, // 24px padding
        behavior: 'smooth'
      });
    }
  };

  return (
    <aside style={{ 
      position: 'sticky', 
      top: 'calc(var(--navbar-height) + var(--spacing-md))', 
      width: '200px', 
      flexShrink: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '4px'
    }} className="hidden md:flex">
      <h3 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
        In This Article
      </h3>
      
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollToElement(item.element)}
          style={{
            textAlign: 'left',
            background: 'none',
            border: 'none',
            padding: `8px 12px 8px ${item.level === 3 ? '24px' : '12px'}`,
            borderLeft: `2px solid ${activeId === item.id ? 'var(--text-dark)' : 'transparent'}`,
            color: activeId === item.id ? 'var(--text-dark)' : 'var(--text-muted)',
            cursor: 'pointer',
            fontSize: '0.95rem',
            transition: 'all 0.2s ease',
            fontWeight: activeId === item.id ? 500 : 400,
          }}
        >
          {item.title}
        </button>
      ))}

      {hasCalculator && (
        <button
          onClick={() => scrollToElement(document.getElementById('calculator'))}
          style={{
            textAlign: 'left',
            background: 'none',
            border: 'none',
            padding: '8px 12px 8px 12px',
            borderLeft: `2px solid ${activeId === 'calculator' ? 'var(--text-dark)' : 'transparent'}`,
            color: activeId === 'calculator' ? 'var(--text-dark)' : 'var(--text-muted)',
            cursor: 'pointer',
            fontSize: '0.95rem',
            transition: 'all 0.2s ease',
            fontWeight: activeId === 'calculator' ? 500 : 400,
            marginTop: '8px'
          }}
        >
          Interactive Calculator
        </button>
      )}

    </aside>
  );
}

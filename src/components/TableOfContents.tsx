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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger collapse when scrolling down past 300px
      setIsScrolled(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!contentDependency) return;

    // Use a small timeout to ensure the DOM has rendered the markdown elements
    const timer = setTimeout(() => {
      const headings = Array.from(document.querySelectorAll('main h2, main h3, article h2, article h3'));
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

  const isCollapsed = isScrolled && !isHovered;

  return (
    <aside style={{ 
      position: 'sticky', 
      top: 'calc(var(--navbar-height) + var(--spacing-md))', 
      width: '220px', /* Match expanded toc-container width */
      flexShrink: 0,
      zIndex: 40 // Ensure hover expansion goes over other elements if needed
    }} className="hidden md:block group" 
       onMouseEnter={() => setIsHovered(true)}
       onMouseLeave={() => setIsHovered(false)}>
      
      <div className={`toc-container ${isCollapsed ? 'collapsed' : ''}`}>
        <h3 className="toc-header">
          In This Article
        </h3>
        
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToElement(item.element)}
            className={`toc-item ${item.level === 3 ? 'level-3' : ''} ${activeId === item.id ? 'active' : ''}`}
          >
            <span>{item.title}</span>
          </button>
        ))}

        {hasCalculator && (
          <button
            onClick={() => scrollToElement(document.getElementById('calculator'))}
            className={`toc-item ${activeId === 'calculator' ? 'active' : ''}`}
            style={{ marginTop: '8px' }}
          >
            <span>Interactive Calculator</span>
          </button>
        )}
      </div>

    </aside>
  );
}

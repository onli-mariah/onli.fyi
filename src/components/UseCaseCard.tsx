
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  category: string;
  description: string;
  delayIndex: number;
  link?: string;
}

export const UseCaseCard = ({ title, category, description, delayIndex, link }: Props) => {
  const cardContent = (
    <div className={`use-case-card fade-in-up delay-${delayIndex}`} style={{
      background: 'var(--card-bg)',
      padding: 'var(--spacing-lg)',
      borderRadius: '16px',
      border: '1px solid #eaeaea',
      transition: 'transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
      <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        {category}
      </div>
      <h3 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 600, lineHeight: 1.2 }}>{title}</h3>
      <div style={{ marginTop: 'var(--spacing-sm)' }}>
        <p style={{ margin: 0, fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
          {description}
        </p>
      </div>
    </div>
  );

  if (link) {
    return (
      <Link to={link} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
        {cardContent}
      </Link>
    );
  }

  return cardContent;
};

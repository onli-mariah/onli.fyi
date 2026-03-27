
import { Link } from 'react-router-dom';

const MEGA_MENU_ITEMS = [
  { title: "Manufacturing", desc: "Global Ecosystem Currency", anchor: "/manufacturing" },
  { title: "Family Offices", desc: "Moving Billions Instantly", anchor: "/family-offices" },
  { title: "Global Trade", desc: "Eliminating Trade Finance Friction", anchor: "/global-trade" },
  { title: "Data Privacy", desc: "Secure Computing & Privacy", anchor: "/data-privacy" },
  { title: "Finance", desc: "Capital Raising without Equity", anchor: "/finance" },
  { title: "Marketplaces", desc: "Next-Gen Marketplaces", anchor: "/marketplaces" }
];

export const Navbar = () => {
  return (
    <header style={{
      position: 'sticky',
      top: 0,
      background: 'rgba(255, 255, 255, 0.90)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: '1px solid #eaeaea',
      height: 'var(--navbar-height)',
      zIndex: 100,
      display: 'flex',
      alignItems: 'center'
    }}>
      <div className="container flex-between" style={{ width: '100%', maxWidth: '1200px' }}>
        <div style={{ fontWeight: 600, fontSize: '1.25rem', letterSpacing: '-0.02em' }}>
          <Link to="/" style={{ color: 'var(--primary-color)', textDecoration: 'none' }}>onli.fyi</Link>
        </div>
        <nav style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          
          <div className="mega-menu-wrapper">
            <Link to="/use-cases" className="nav-link">Use Cases</Link>
            <div className="mega-menu-content">
              {MEGA_MENU_ITEMS.map((item, idx) => (
                <Link key={idx} to={item.anchor} className="mega-menu-item">
                  <span className="mega-menu-item-title">{item.title}</span>
                  <span className="mega-menu-item-desc">{item.desc}</span>
                </Link>
              ))}
            </div>
          </div>
          
          <a href="https://onli.ai" target="_blank" rel="noopener noreferrer" className="nav-link">Onli.ai</a>
          
          <div style={{ marginLeft: '16px' }}>
            <a href="https://onli.cloud/" target="_blank" rel="noopener noreferrer" className="pill-btn">Get Started</a>
          </div>
        </nav>
      </div>
    </header>
  );
};



export const Footer = () => {
  return (
    <footer style={{ background: '#000', color: '#fff', padding: 'var(--spacing-xl) 0', marginTop: 'var(--spacing-xl)' }}>
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-lg)', justifyContent: 'space-between' }}>
        <div style={{ flex: '1 1 250px' }}>
          <div style={{ fontWeight: 600, fontSize: '1.5rem', marginBottom: '16px' }}>onli.fyi</div>
          <p style={{ color: '#aaa', fontSize: '0.95rem', margin: 0, maxWidth: '250px' }}>
            The revolution you never saw coming.
          </p>
        </div>
        <div style={{ display: 'flex', gap: 'var(--spacing-xl)', flexWrap: 'wrap' }}>
          <div>
            <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: '16px', fontWeight: 500 }}>Product</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="#about" style={{ color: '#aaa', fontSize: '0.9rem' }}>How it Works</a>
              <a href="#use-cases" style={{ color: '#aaa', fontSize: '0.9rem' }}>Use Cases</a>
            </div>
          </div>
          <div>
            <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: '16px', fontWeight: 500 }}>Company</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="https://onli.one" style={{ color: '#aaa', fontSize: '0.9rem' }}>Onli.one</a>
              <a href="https://onli.ai" style={{ color: '#aaa', fontSize: '0.9rem' }}>Onli.ai</a>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: 'var(--spacing-xl)', paddingTop: 'var(--spacing-md)', borderTop: '1px solid #333', display: 'flex', justifyContent: 'space-between', color: '#666', fontSize: '0.85rem' }}>
        <div>© 2025 The Onli Corporation.</div>
        <div style={{ display: 'flex', gap: '24px' }}>
          <a href="#" style={{ color: '#666' }}>Privacy Policy</a>
          <a href="#" style={{ color: '#666' }}>Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

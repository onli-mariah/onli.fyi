

export const AboutSection = () => {
  return (
    <section id="about" style={{ padding: 'var(--spacing-xl) 0', background: '#fafafa', borderTop: '1px solid #f0f0f0', borderBottom: '1px solid #f0f0f0', marginTop: 'var(--spacing-xl)' }}>
      <div className="container fade-in-up">
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ marginTop: 0 }}>How It Works</h2>
          <p style={{ fontSize: '1.25rem' }}>Direct digital ownership without intermediaries.</p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'var(--spacing-lg)', marginTop: 'var(--spacing-xl)' }}>
          <div className="fade-in-up delay-1">
            <h3 style={{ borderBottom: '2px solid #000', paddingBottom: '12px', display: 'inline-block', marginBottom: '16px', fontSize: '1.25rem' }}>Mint</h3>
            <p style={{ margin: 0, fontSize: '1.05rem' }}>Cryptographic creation of unique, unforgeable digital objects (like printing digital currency).</p>
          </div>
          <div className="fade-in-up delay-2">
            <h3 style={{ borderBottom: '2px solid #000', paddingBottom: '12px', display: 'inline-block', marginBottom: '16px', fontSize: '1.25rem' }}>Possess</h3>
            <p style={{ margin: 0, fontSize: '1.05rem' }}>Holding assets directly in a digital wallet; possession itself is proof of ownership (no centralized databases required).</p>
          </div>
          <div className="fade-in-up delay-3">
            <h3 style={{ borderBottom: '2px solid #000', paddingBottom: '12px', display: 'inline-block', marginBottom: '16px', fontSize: '1.25rem' }}>Transfer</h3>
            <p style={{ margin: 0, fontSize: '1.05rem' }}>Peer-to-peer millisecond transfers without intermediary approval (the digital equivalent of handing someone physical cash).</p>
          </div>
        </div>
      </div>
    </section>
  );
};

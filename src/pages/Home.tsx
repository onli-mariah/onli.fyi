import { Hero } from '../components/Hero';
import { Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <>
      <Hero />
      
      <section className="container fade-in-up delay-1" style={{ padding: 'var(--spacing-xl) 0', borderTop: '1px solid #f0f0f0' }}>
        <h2 style={{ marginTop: 0 }}>The Big Idea</h2>
        <p>
          Onli Corporation is doing something radically different: showing people and businesses that digital ownership can be as real and direct as owning something physical. Instead of relying on ledgers or blockchains to prove you own a digital thing, Onli lets you truly possess it—like holding a physical object in the digital world.
        </p>
        <p>
          This isn't just a product; it is the birth of an entirely new possession-based economy. Onli shows you can have digital possessions you control completely, without banks or blockchain ledgers in the middle. Once you've experienced that, you can imagine all the other possibilities: trading digital collectibles, running supply chain currencies, managing financial assets—all on the same principles.
        </p>
      </section>

      <section className="container fade-in-up delay-2" style={{ padding: '0 0 var(--spacing-xl) 0' }}>
        <h2 style={{ marginTop: 0 }}>Why Does It Matter?</h2>
        <p>
          Because it changes the fundamental relationship between you and your digital assets. With Onli, you're not trusting a third party to record your ownership—you're holding it directly. That opens up entirely new ways to transact, trade, and build economic systems that were impossible before.
        </p>
        <p>
          The use cases we have built aren't just ideas. They're real applications showing how actual-possession technology solves concrete business problems today: eliminating transaction costs, removing intermediaries, and enabling instant settlements. Each one proves that ledger-free digital ownership isn't just possible—it's already transforming how businesses operate.
        </p>
      </section>

      {/* The Problem (Ported from About) */}
      <section className="container fade-in-up delay-3" style={{ paddingTop: 'var(--spacing-xl)', borderTop: '1px solid #f0f0f0' }}>
        <h2 style={{ marginTop: 0 }}>The Problem with Current Systems</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-xl)' }}>
          <div>
            <h3 style={{ marginBottom: '16px' }}>Ledger-Based Systems</h3>
            <p style={{ marginBottom: '24px' }}>
              Traditional databases, blockchains, and distributed ledgers all share the same fundamental limitation: they record who owns what, but the asset itself lives in someone else's system. You don't possess the asset—you possess a claim that must be validated by a third party.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', color: 'var(--text-muted)' }}>
                <X style={{ color: '#ef4444', flexShrink: 0, marginTop: '2px' }} size={20} />
                <span>Requires permission from database operator</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', color: 'var(--text-muted)' }}>
                <X style={{ color: '#ef4444', flexShrink: 0, marginTop: '2px' }} size={20} />
                <span>Subject to censorship and freezing</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', color: 'var(--text-muted)' }}>
                <X style={{ color: '#ef4444', flexShrink: 0, marginTop: '2px' }} size={20} />
                <span>Vulnerable to system failures and hacks</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', color: 'var(--text-muted)' }}>
                <X style={{ color: '#ef4444', flexShrink: 0, marginTop: '2px' }} size={20} />
                <span>Expensive transaction fees and delays</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 style={{ marginBottom: '16px' }}>Actual Possession</h3>
            <p style={{ marginBottom: '24px' }}>
              Onli's actual-possession technology works like physical cash or bearer bonds: the asset itself is the proof of ownership. No ledger, no blockchain, no database. You hold the digital asset directly, and possession is the only proof you need.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', color: 'var(--text-muted)' }}>
                <Check style={{ color: '#16a34a', flexShrink: 0, marginTop: '2px' }} size={20} />
                <span>Complete control without intermediaries</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', color: 'var(--text-muted)' }}>
                <Check style={{ color: '#16a34a', flexShrink: 0, marginTop: '2px' }} size={20} />
                <span>Immune to censorship and freezing</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', color: 'var(--text-muted)' }}>
                <Check style={{ color: '#16a34a', flexShrink: 0, marginTop: '2px' }} size={20} />
                <span>No central point of failure</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', color: 'var(--text-muted)' }}>
                <Check style={{ color: '#16a34a', flexShrink: 0, marginTop: '2px' }} size={20} />
                <span>Near-zero transaction costs (milliseconds)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="container fade-in-up delay-4" style={{ paddingTop: 'var(--spacing-xl)', borderTop: '1px solid #f0f0f0', marginTop: 'var(--spacing-xl)' }}>
        <h2 style={{ marginTop: 0 }}>Technology Comparison</h2>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '800px' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #eaeaea' }}>
                <th style={{ padding: '16px', fontWeight: 600 }}>Feature</th>
                <th style={{ padding: '16px', fontWeight: 600 }}>Traditional Banking</th>
                <th style={{ padding: '16px', fontWeight: 600 }}>Blockchain/Crypto</th>
                <th style={{ padding: '16px', fontWeight: 600, color: '#16a34a' }}>Onli (Actual Possession)</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-muted)' }}>
              <tr style={{ borderBottom: '1px solid #eaeaea' }}>
                <td style={{ padding: '16px', fontWeight: 500, color: 'var(--text-dark)' }}>Ownership Model</td>
                <td style={{ padding: '16px' }}>Account balance (ledger entry)</td>
                <td style={{ padding: '16px' }}>Blockchain address (distributed ledger)</td>
                <td style={{ padding: '16px', color: '#16a34a' }}>Direct possession (no ledger)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eaeaea' }}>
                <td style={{ padding: '16px', fontWeight: 500, color: 'var(--text-dark)' }}>Transaction Speed</td>
                <td style={{ padding: '16px' }}>3-5 business days</td>
                <td style={{ padding: '16px' }}>10 min - 1 hour</td>
                <td style={{ padding: '16px', color: '#16a34a' }}>Milliseconds</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eaeaea' }}>
                <td style={{ padding: '16px', fontWeight: 500, color: 'var(--text-dark)' }}>Transaction Cost</td>
                <td style={{ padding: '16px' }}>2-4% + wire fees</td>
                <td style={{ padding: '16px' }}>$1-50 per transaction</td>
                <td style={{ padding: '16px', color: '#16a34a' }}>Near-zero (one-time minting)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eaeaea' }}>
                <td style={{ padding: '16px', fontWeight: 500, color: 'var(--text-dark)' }}>Censorship Resistance</td>
                <td style={{ padding: '16px' }}>None (accounts can be frozen)</td>
                <td style={{ padding: '16px' }}>Limited (validators can censor)</td>
                <td style={{ padding: '16px', color: '#16a34a' }}>Complete (no central authority)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eaeaea' }}>
                <td style={{ padding: '16px', fontWeight: 500, color: 'var(--text-dark)' }}>Privacy</td>
                <td style={{ padding: '16px' }}>Low (KYC/AML required)</td>
                <td style={{ padding: '16px' }}>Pseudo-anonymous (public ledger)</td>
                <td style={{ padding: '16px', color: '#16a34a' }}>High (no public record)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eaeaea' }}>
                <td style={{ padding: '16px', fontWeight: 500, color: 'var(--text-dark)' }}>Scalability</td>
                <td style={{ padding: '16px' }}>Limited by infrastructure</td>
                <td style={{ padding: '16px' }}>Limited by consensus mechanism</td>
                <td style={{ padding: '16px', color: '#16a34a' }}>Unlimited (peer-to-peer)</td>
              </tr>
              <tr>
                <td style={{ padding: '16px', fontWeight: 500, color: 'var(--text-dark)' }}>Environmental Impact</td>
                <td style={{ padding: '16px' }}>Moderate (data centers)</td>
                <td style={{ padding: '16px' }}>High (proof-of-work mining)</td>
                <td style={{ padding: '16px', color: '#16a34a' }}>Minimal (no mining/consensus)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* How It Works */}
      <section className="container fade-in-up delay-4" style={{ paddingTop: 'var(--spacing-xl)', borderTop: '1px solid #f0f0f0', marginTop: 'var(--spacing-xl)' }}>
        <h2 style={{ marginTop: 0 }}>How Actual Possession Works</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--spacing-lg)' }} className="how-it-works-grid">
          <style dangerouslySetInnerHTML={{__html: `
            @media (max-width: 768px) {
              .how-it-works-grid {
                grid-template-columns: 1fr !important;
              }
            }
          `}} />
          <div style={{ background: '#fafafa', padding: '32px', border: '1px solid #eaeaea', borderRadius: '12px' }}>
            <div style={{ fontSize: '2rem', fontWeight: 600, color: '#111', marginBottom: '16px' }}>01</div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Mint</h3>
            <p style={{ margin: 0, fontSize: '1rem' }}>
              Create digital assets using cryptographic techniques. Each asset is a unique, unforgeable digital object—like printing physical currency, but digital.
            </p>
          </div>
          <div style={{ background: '#fafafa', padding: '32px', border: '1px solid #eaeaea', borderRadius: '12px' }}>
             <div style={{ fontSize: '2rem', fontWeight: 600, color: '#111', marginBottom: '16px' }}>02</div>
             <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Possess</h3>
             <p style={{ margin: 0, fontSize: '1rem' }}>
              Hold the asset directly in your digital wallet. No database records your ownership—possession itself is proof. Like holding cash in your physical wallet.
            </p>
          </div>
          <div style={{ background: '#fafafa', padding: '32px', border: '1px solid #eaeaea', borderRadius: '12px' }}>
             <div style={{ fontSize: '2rem', fontWeight: 600, color: '#111', marginBottom: '16px' }}>03</div>
             <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Transfer</h3>
             <p style={{ margin: 0, fontSize: '1rem' }}>
              Send assets peer-to-peer in milliseconds. No intermediary approval needed. The recipient now possesses the asset, and you no longer do—just like handing someone cash.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases CTA */}
      <section className="container fade-in-up delay-4" style={{ padding: 'var(--spacing-xl) 0', borderTop: '1px solid #f0f0f0', marginTop: 'var(--spacing-xl)' }}>
        <div style={{ background: '#fafafa', padding: '48px', border: '1px solid #eaeaea', borderRadius: '16px', textAlign: 'center' }}>
          <h2 style={{ marginTop: 0 }}>See It In Action</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto var(--spacing-lg) auto' }}>
            Explore real-world applications of actual-possession technology across manufacturing, finance, and global trade.
          </p>
          <Link to="/use-cases" className="pill-btn" style={{ background: '#111', color: '#fff' }}>
            Explore Use Cases
          </Link>
        </div>
      </section>
      
      <section className="container fade-in-up delay-4" style={{ padding: 'var(--spacing-xl) 0', borderTop: '1px solid #f0f0f0', textAlign: 'center' }}>
        <h2 style={{ marginTop: 0 }}>Join the revolution</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto var(--spacing-md) auto' }}>
          Onli is transforming how businesses think about digital ownership. Learn more about our technology and how it can solve your most critical challenges.
        </p>
        <a href="https://www.onli.one/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: 'var(--text-muted)', fontWeight: 500 }}>
          Learn about Onli &rarr;
        </a>
      </section>
    </>
  );
}

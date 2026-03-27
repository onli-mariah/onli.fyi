import { Link } from "wouter";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container">
        <nav className="flex items-center justify-between py-6">
          <Link href="/">
            <a className="text-xl font-semibold text-foreground hover:opacity-70 transition-opacity">
              Onli
            </a>
          </Link>
          <div className="flex items-center gap-8">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/#use-cases">
                <a className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                  Use Cases
                </a>
              </Link>
              <Link href="/about">
                <a className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                  About
                </a>
              </Link>
              <a 
                href="https://onli.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-foreground/70 hover:text-foreground transition-colors"
              >
                Onli.ai
              </a>
            </div>
            {/* Mobile Menu */}
            <MobileMenu />
          </div>
        </nav>
      </div>
    </header>
  );
}

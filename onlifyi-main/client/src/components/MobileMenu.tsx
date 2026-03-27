import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-foreground hover:opacity-70 transition-opacity"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Slide-out Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-64 bg-background border-l border-border z-50 md:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-border">
                  <Link href="/">
                    <a 
                      className="text-xl font-semibold text-foreground"
                      onClick={() => setIsOpen(false)}
                    >
                      Onli
                    </a>
                  </Link>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-foreground hover:opacity-70 transition-opacity"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 p-6">
                  <div className="space-y-6">
                    <Link href="/#use-cases">
                      <a 
                        className="block text-lg text-foreground/70 hover:text-foreground transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Use Cases
                      </a>
                    </Link>
                    <Link href="/about">
                      <a 
                        className="block text-lg text-foreground/70 hover:text-foreground transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        About
                      </a>
                    </Link>
                    <a 
                      href="https://onli.ai" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block text-lg text-foreground/70 hover:text-foreground transition-colors"
                    >
                      Onli.ai
                    </a>
                    
                    <div className="pt-6 border-t border-border">
                      <p className="text-xs text-foreground/40 uppercase tracking-wider mb-4">Use Cases</p>
                      <div className="space-y-4">
                        <Link href="/globaltech">
                          <a 
                            className="block text-sm text-foreground/70 hover:text-foreground transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            GlobalTech Electronics
                          </a>
                        </Link>
                        <Link href="/heritage-capital">
                          <a 
                            className="block text-sm text-foreground/70 hover:text-foreground transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            Heritage Capital
                          </a>
                        </Link>
                        <Link href="/acme-foods">
                          <a 
                            className="block text-sm text-foreground/70 hover:text-foreground transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            Acme Foods
                          </a>
                        </Link>
                        <Link href="/cross-org-data">
                          <a 
                            className="block text-sm text-foreground/70 hover:text-foreground transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            Cross-Org Data
                          </a>
                        </Link>
                        <Link href="/niche">
                          <a 
                            className="block text-sm text-foreground/70 hover:text-foreground transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            Niche Capital Market
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </nav>

                {/* Footer */}
                <div className="p-6 border-t border-border">
                  <a 
                    href="https://onli.one" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-sm text-foreground/70 hover:text-foreground transition-colors"
                  >
                    Onli.one →
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

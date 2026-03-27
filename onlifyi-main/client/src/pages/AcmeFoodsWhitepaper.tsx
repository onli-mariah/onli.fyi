import { useState, useEffect } from "react";
import { Streamdown } from "streamdown";
import { Link } from "wouter";
import { Calculator } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import Header from "@/components/Header";

export default function AcmeFoodsWhitepaper() {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/ACME_Use_Case_FINAL.md")
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
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Content */}
      <div className="pt-24">
        <div className="container">
          <Breadcrumb 
            items={[
              { label: "Acme Foods", href: "/acme-foods" },
              { label: "Whitepaper" }
            ]}
          />
          <div className="flex items-center justify-between mb-12">
            <div>
              <p className="text-xs text-foreground/40 uppercase tracking-wider mb-2">Use Case</p>
              <h1 className="text-4xl md:text-5xl font-bold">Acme Foods</h1>
            </div>
            <Link href="/acme-foods/calculator">
              <a className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground hover:opacity-90 transition-opacity text-sm font-medium">
                <Calculator className="w-4 h-4" />
                Cost Calculator
              </a>
            </Link>
          </div>
          
          {/* Whitepaper Content */}
          <article className="prose prose-neutral prose-lg max-w-4xl mx-auto py-12">
            <Streamdown>{content}</Streamdown>
          </article>
        </div>
      </div>
    </div>
  );
}

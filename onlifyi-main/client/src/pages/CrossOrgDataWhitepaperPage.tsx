import { useEffect, useState } from "react";
import { Link } from "wouter";
import Breadcrumb from "@/components/Breadcrumb";
import Header from "@/components/Header";
import { Streamdown } from "streamdown";

export default function CrossOrgDataWhitepaperPage() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/CROSS_ORG_DATA_Use_Case.md")
      .then((res) => res.text())
      .then((text) => setContent(text))
      .catch((err) => console.error("Failed to load whitepaper:", err));
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Content */}
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <Breadcrumb 
            items={[
              { label: "Home", href: "/" },
              { label: "Use Cases", href: "/#use-cases" },
              { label: "Cross-Organizational Data" }
            ]}
          />
          
          {/* Whitepaper Content */}
          <article className="prose prose-lg dark:prose-invert max-w-4xl mx-auto">
            <Streamdown>{content}</Streamdown>
          </article>

          {/* Back to Use Cases */}
          <div className="max-w-4xl mx-auto mt-12 pt-8 border-t border-border">
            <Link href="/#use-cases">
              <a className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                ← Back to Use Cases
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

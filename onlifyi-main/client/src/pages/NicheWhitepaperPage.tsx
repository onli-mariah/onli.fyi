import { useEffect, useState } from "react";
import { Streamdown } from "streamdown";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Calculator } from "lucide-react";

export default function NicheWhitepaperPage() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/NICHE_Use_Case.md")
      .then((res) => res.text())
      .then((text) => setContent(text))
      .catch((err) => console.error("Failed to load whitepaper:", err));
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <div>
                <h1 className="text-3xl font-bold">Niche: A New Capital Market</h1>
                <p className="text-muted-foreground mt-1">
                  Zero-coupon bonds meet digital efficiency
                </p>
              </div>
            </div>
            <Link href="/niche/calculator">
              <Button>
                <Calculator className="h-4 w-4 mr-2" />
                Try Calculator
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto prose prose-slate dark:prose-invert prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-base prose-p:leading-relaxed prose-li:text-base prose-table:text-sm">
          {content ? (
            <Streamdown>{content}</Streamdown>
          ) : (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

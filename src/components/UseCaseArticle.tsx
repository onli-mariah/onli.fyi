import { Streamdown } from 'streamdown';
import { Card } from "@/components/ui/card";

interface UseCaseArticleProps {
  content: string;
}

export function UseCaseArticle({ content }: UseCaseArticleProps) {
  if (!content) return null;

  // 1. Extract the Title (first # heading)
  const titleMatch = content.match(/^#\s+(.+)$/m);
  let title = titleMatch ? titleMatch[1] : '';

  // Capitalization fix for the Title
  const smallWords = new Set(['for', 'and', 'nor', 'but', 'or', 'yet', 'so', 'a', 'an', 'the', 'at', 'by', 'of', 'in', 'to', 'on', 'with', 'from']);
  if (title) {
    title = title.toLowerCase().split(' ').map((word, index) => {
      const cleanWord = word.trim();
      if (!cleanWord) return '';

      if (index !== 0 && smallWords.has(cleanWord)) return cleanWord;
      
      if (cleanWord.includes('globaltech')) return cleanWord.replace('globaltech', 'GlobalTech');
      if (cleanWord.includes('cross-organizational')) return 'Cross-Organizational';
      if (cleanWord === 'lp') return 'LP';
      
      return cleanWord.charAt(0).toUpperCase() + cleanWord.slice(1);
    }).join(' ');

    // Uppercase after colon
    title = title.split(': ').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(': ');
  }

  // 2. Extract Executive Summary logic
  const execSummaryIndex = content.indexOf('## Executive Summary');
  let articleBody = '';
  let execSummaryContent = '';
  
  if (execSummaryIndex !== -1) {
    const afterHeading = content.slice(execSummaryIndex + '## Executive Summary'.length).trimStart();
    const endOfParagraphIndex = afterHeading.indexOf('\n\n');
    if (endOfParagraphIndex !== -1) {
      execSummaryContent = afterHeading.slice(0, endOfParagraphIndex).trim();
      articleBody = afterHeading.slice(endOfParagraphIndex).trimStart();
    } else {
      execSummaryContent = afterHeading;
      articleBody = '';
    }
  } else {
    const bodyStartIndex = titleMatch ? (titleMatch.index! + titleMatch[0].length) : 0;
    articleBody = content.slice(bodyStartIndex);
  }

  const shortTitle = title ? title.split(':')[0] : "the industry";

  return (
    <main className="w-full fade-in-up">
      {/* Post Header mimicking MarketplaceComparison */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
          {title || "Use Case Analysis"}
        </h1>
        <p className="text-xl text-muted-foreground">
          A comprehensive analysis of how Onli's novel architecture transforms {shortTitle}
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Published December 2025 | 15-minute read
        </p>
      </div>

      {/* Recreated Executive Summary Block matching Marketplaces */}
      {execSummaryContent && (
        <section className="mb-12">
          <h2 id="executive-summary" className="text-3xl font-bold mb-6 text-foreground">Executive Summary</h2>
          <Card className="p-6 mb-6 bg-primary/5 border-primary/20">
            <p className="text-lg font-semibold text-foreground">
              {execSummaryContent}
            </p>
          </Card>
        </section>
      )}

      {/* Styled Prose mimicking Marketplace custom CSS */}
      <div className="">
        <article className="prose prose-neutral prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-p:text-foreground prose-p:leading-relaxed prose-li:text-foreground prose-strong:text-foreground">
          <Streamdown>{articleBody}</Streamdown>
        </article>
      </div>
    </main>
  );
}

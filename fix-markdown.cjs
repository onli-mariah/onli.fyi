const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const files = [
  'ACME_Use_Case_FINAL.md',
  'CROSS_ORG_DATA_Use_Case.md',
  'GLOBALTECH_Use_Case_CORRECTED.md',
  'HERITAGE_CAPITAL_Use_Case_CORRECTED.md',
  'NICHE_Use_Case.md'
];

const smallWords = new Set(['for', 'and', 'nor', 'but', 'or', 'yet', 'so', 'a', 'an', 'the', 'at', 'by', 'of', 'in', 'to', 'on', 'with', 'from']);

files.forEach(file => {
  const filePath = path.join(publicDir, file);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Find Title
  const titleMatch = content.match(/^#\s+(.+)$/m);
  let newTitle = '';
  if (titleMatch) {
    newTitle = titleMatch[1];
    
    // Custom Title Casing logic
    newTitle = newTitle.toLowerCase().split(' ').map((word, index) => {
      // remove any trailing newlines/carriage returns
      word = word.trim();
      if (!word) return '';

      if (index !== 0 && smallWords.has(word)) return word;
      
      // Specifically fix known camelCase
      if (word.includes('globaltech')) {
        return word.replace('globaltech', 'GlobalTech');
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).filter(Boolean).join(' ');

    // Fix words after colon
    newTitle = newTitle.split(': ').map(part => {
      return part.charAt(0).toUpperCase() + part.slice(1);
    }).join(': ');
  } else {
    console.log(`No Title found in ${file}`);
    return;
  }
  
  // Find Executive Summary
  const execSummaryIndex = content.indexOf('## Executive Summary');
  
  if (execSummaryIndex !== -1) {
    const newContent = `# ${newTitle}\n\n${content.slice(execSummaryIndex)}`;
    fs.writeFileSync(filePath, newContent);
    console.log(`Updated ${file}`);
  } else {
    console.log(`Skipped ${file} - Missing Executive Summary`);
  }
});

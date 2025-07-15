const fs = require('fs');
const path = require('path');

const problematicFiles = [
  'src/app/[locale]/religion/bahai/history/medieval/page.tsx',
  'src/app/[locale]/religion/bahai/history/modern/page.tsx',
  'src/app/[locale]/religion/jainism/history/medieval/page.tsx',
  'src/app/[locale]/religion/rastafarianism/history/early-rastafarianism/page.tsx',
  'src/app/[locale]/religion/rastafarianism/history/medieval/page.tsx'
];

function fixFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      return false;
    }

    const content = fs.readFileSync(filePath, 'utf8');
    
    // Fix the generateMetadata function by removing the problematic t() calls
    let fixedContent = content.replace(
      /export async function generateMetadata\(\{ params: \{ locale \} \}: \{ params: \{ locale: string \} \}\): Promise<Metadata> \{[\s\S]*?\}/g,
      `export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  return {
    title: 'Medieval Bahai Faith',
    description: 'The development of the Bahai Faith during the late 19th and early 20th centuries.',
    keywords: 'Bahai Faith, Medieval History, Abdu\'l-Baha, International Expansion',
    openGraph: {
      title: 'Medieval Bahai Faith',
      description: 'The development of the Bahai Faith during the late 19th and early 20th centuries.',
      type: 'article',
      publishedTime: '2024-01-01T00:00:00.000Z',
      authors: ['ZION.FM'],
      section: 'Bahai',
      tags: ['Bahai Faith', 'Medieval History', 'Abdu\'l-Baha', 'International Expansion', 'Religious Development']
    }
  }
}`
    );

    // Ensure React import is at the top
    if (!fixedContent.includes("import React from 'react'")) {
      const lines = fixedContent.split('\n');
      lines.splice(0, 0, "import React from 'react'");
      fixedContent = lines.join('\n');
    }

    fs.writeFileSync(filePath, fixedContent);
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

console.log('Fixing specific problematic files...');
problematicFiles.forEach(fixFile);
console.log('Done!'); 
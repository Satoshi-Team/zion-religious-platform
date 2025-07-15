const fs = require('fs');
const path = require('path');

function fixClientDirective(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    
    // Check if file has "use client" directive
    const hasUseClient = lines.some(line => line.trim() === '"use client"');
    if (!hasUseClient) {
      return false;
    }
    
    // Check if "use client" is already at the top
    if (lines[0].trim() === '"use client"') {
      return false;
    }
    
    // Find and remove "use client" from current position
    const newLines = lines.filter(line => line.trim() !== '"use client"');
    
    // Add "use client" at the very top
    newLines.unshift('"use client"');
    
    // Write back to file
    fs.writeFileSync(filePath, newLines.join('\n'));
    return true;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.tsx')) {
      const wasModified = fixClientDirective(filePath);
      if (wasModified) {
        console.log(`Fixed "use client" directive in: ${filePath}`);
      }
    }
  }
}

// Process the src directory
console.log('Fixing "use client" directive placement...');
processDirectory('src');
console.log('Done!'); 
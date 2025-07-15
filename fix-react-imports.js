const fs = require('fs');
const path = require('path');

function addReactImport(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if React is already imported
    if (content.includes("import React") || content.includes("import * as React")) {
      return false;
    }
    
    // Add React import at the beginning
    const lines = content.split('\n');
    let insertIndex = 0;
    
    // Find the first import statement
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].trim().startsWith('import ')) {
        insertIndex = i;
        break;
      }
    }
    
    // Insert React import
    lines.splice(insertIndex, 0, "import React from 'react'");
    
    // Write back to file
    fs.writeFileSync(filePath, lines.join('\n'));
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
      const wasModified = addReactImport(filePath);
      if (wasModified) {
        console.log(`Added React import to: ${filePath}`);
      }
    }
  }
}

// Process the src directory
console.log('Adding React imports to TSX files...');
processDirectory('src');
console.log('Done!'); 
const fs = require('fs');
const path = require('path');

// Source: parent directory's data folder
const sourceDir = path.join(__dirname, '../../data');
// Destination: dashboard's data folder
const destDir = path.join(__dirname, '../data');

console.log('📦 Copying data directory for Vercel build...');
console.log(`   Source: ${sourceDir}`);
console.log(`   Destination: ${destDir}`);

try {
  // Check if source exists
  if (!fs.existsSync(sourceDir)) {
    console.error('❌ Source data directory not found!');
    process.exit(1);
  }

  // Remove destination if it exists
  if (fs.existsSync(destDir)) {
    fs.rmSync(destDir, { recursive: true, force: true });
  }

  // Copy directory recursively
  fs.cpSync(sourceDir, destDir, { recursive: true });

  // Count copied files
  const summariesDir = path.join(destDir, 'summaries');
  const files = fs.readdirSync(summariesDir);
  const jsonFiles = files.filter(f => f.endsWith('.json') && f !== 'index.json');

  console.log(`✅ Copied ${jsonFiles.length} summary files successfully!`);
} catch (error) {
  console.error('❌ Error copying data:', error.message);
  process.exit(1);
}

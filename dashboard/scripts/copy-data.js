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

  // Publish stripped per-day summaries as static assets so the page can fetch one
  // day at a time instead of shipping all of them through getStaticProps.
  // originalContent is never displayed; dropping it keeps each file small.
  const publicRoot = path.join(__dirname, '../public/data');
  const publicDir = path.join(publicRoot, 'summaries');
  fs.rmSync(publicRoot, { recursive: true, force: true });
  fs.mkdirSync(publicDir, { recursive: true });
  let publicBytes = 0;
  for (const file of jsonFiles) {
    const data = JSON.parse(fs.readFileSync(path.join(summariesDir, file), 'utf-8'));
    if (data.newsletters) {
      data.newsletters = data.newsletters.map(({ originalContent, ...rest }) => rest);
    }
    const out = JSON.stringify(data);
    publicBytes += Buffer.byteLength(out);
    fs.writeFileSync(path.join(publicDir, file), out);
  }
  console.log(`✅ Wrote ${jsonFiles.length} stripped files to public/data/summaries (${(publicBytes / 1024 / 1024).toFixed(1)} MB)`);
} catch (error) {
  console.error('❌ Error copying data:', error.message);
  process.exit(1);
}

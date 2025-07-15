import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to recursively find all .js files in dist directory
function findJSFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      files.push(...findJSFiles(fullPath));
    } else if (item.endsWith(".js")) {
      files.push(fullPath);
    }
  }

  return files;
}

// Function to fix imports in a file
function fixImportsInFile(filePath) {
  const content = fs.readFileSync(filePath, "utf8");

  // Fix relative imports that don't have .js extension
  let fixedContent = content.replace(
    /from\s+["'](\.[^"']*?)["']/g,
    (match, importPath) => {
      // Skip if already has .js extension
      if (importPath.endsWith(".js")) {
        return match;
      }

      // Add .js extension
      const newImportPath = importPath.endsWith("/")
        ? importPath + "index.js"
        : importPath + ".js";

      return match.replace(importPath, newImportPath);
    }
  );

  // Also fix import statements (not just from statements)
  fixedContent = fixedContent.replace(
    /import\s+[^"']*from\s+["'](\.[^"']*?)["']/g,
    (match, importPath) => {
      // Skip if already has .js extension
      if (importPath.endsWith(".js")) {
        return match;
      }

      // Add .js extension
      const newImportPath = importPath.endsWith("/")
        ? importPath + "index.js"
        : importPath + ".js";

      return match.replace(importPath, newImportPath);
    }
  );

  if (content !== fixedContent) {
    fs.writeFileSync(filePath, fixedContent);
    console.log(`✅ Fixed imports in: ${path.relative(__dirname, filePath)}`);
    return true;
  }
  return false;
}

// Main execution
const distDir = path.join(__dirname, "dist");

if (!fs.existsSync(distDir)) {
  console.log("❌ dist directory not found");
  process.exit(1);
}

console.log("🔧 Fixing ES module imports...\n");

const jsFiles = findJSFiles(distDir);
let fixedCount = 0;
jsFiles.forEach((file) => {
  if (fixImportsInFile(file)) {
    fixedCount++;
  }
});

console.log(`\n✨ Fixed imports in ${fixedCount} files`);

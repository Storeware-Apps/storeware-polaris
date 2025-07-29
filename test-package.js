// Simple test to verify package exports work correctly
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("🧪 Testing @storeseo/polaris package structure...\n");

// Test 1: Check if main files exist
const mainFiles = [
  "dist/index.js",
  "dist/index.d.ts",
  "dist/styles/globals.css",
  "package.json",
];

console.log("📁 Checking main files:");
mainFiles.forEach((file) => {
  const exists = fs.existsSync(path.join(__dirname, file));
  console.log(`  ${exists ? "✅" : "❌"} ${file}`);
});

// Test 2: Check package.json structure
console.log("\n📦 Checking package.json structure:");
const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));

const requiredFields = ["name", "version", "main", "types", "exports"];
requiredFields.forEach((field) => {
  const exists = packageJson[field] !== undefined;
  console.log(
    `  ${exists ? "✅" : "❌"} ${field}: ${
      exists ? packageJson[field] : "missing"
    }`
  );
});

// Test 3: Check exports structure
console.log("\n🔗 Checking exports:");
if (packageJson.exports) {
  Object.keys(packageJson.exports).forEach((key) => {
    console.log(`  ✅ Export "${key}":`, packageJson.exports[key]);
  });
}

// Test 4: Check component files
console.log("\n🧩 Checking component files:");
const componentFiles = [
  "dist/components/Button/button.js",
  "dist/components/Button/button.d.ts",
  "dist/components/Button/button.types.js",
  "dist/components/Button/button.types.d.ts",
];

componentFiles.forEach((file) => {
  const exists = fs.existsSync(path.join(__dirname, file));
  console.log(`  ${exists ? "✅" : "❌"} ${file}`);
});

// Test 5: Try to import the main export (basic syntax check)
console.log("\n🔍 Testing main export:");
try {
  const mainExport = await import("./dist/index.js");
  const exportedKeys = Object.keys(mainExport);
  console.log(`  ✅ Main export successful`);
  console.log(`  📋 Exported components: ${exportedKeys.join(", ")}`);
} catch (error) {
  console.log(`  ❌ Main export failed: ${error.message}`);
}

console.log("\n🎉 Package structure test complete!");

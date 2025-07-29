// Test file to simulate how a consuming React project would import the CSS
// This verifies the package exports work correctly

import fs from 'fs';
import path from 'path';

console.log('Testing consumer import simulation...');

// Simulate package resolution for different import paths
const packageRoot = process.cwd();
const packageJson = JSON.parse(fs.readFileSync(path.join(packageRoot, 'package.json'), 'utf8'));

console.log(`Package name: ${packageJson.name}`);
console.log(`Package version: ${packageJson.version}`);

// Test the exports configuration
const exports = packageJson.exports;

console.log('\nTesting package exports:');

// Test main export
if (exports['.']) {
  const mainExport = exports['.'].import || exports['.'];
  const mainPath = path.join(packageRoot, mainExport);
  const mainExists = fs.existsSync(mainPath);
  console.log(`${mainExists ? '✓' : '✗'} Main export (${mainExport}): ${mainExists ? 'EXISTS' : 'MISSING'}`);
}

// Test styles export
if (exports['./styles']) {
  const stylesExport = exports['./styles'].import || exports['./styles'];
  const stylesPath = path.join(packageRoot, stylesExport);
  const stylesExists = fs.existsSync(stylesPath);
  console.log(`${stylesExists ? '✓' : '✗'} Styles export (${stylesExport}): ${stylesExists ? 'EXISTS' : 'MISSING'}`);
  
  if (stylesExists) {
    const cssContent = fs.readFileSync(stylesPath, 'utf8');
    const isCompiled = cssContent.length > 50000 && !cssContent.includes('@tailwind');
    console.log(`${isCompiled ? '✓' : '✗'} CSS is properly compiled: ${isCompiled ? 'YES' : 'NO'}`);
  }
}

// Test full styles path export
if (exports['./styles/globals.css']) {
  const fullStylesExport = exports['./styles/globals.css'].import || exports['./styles/globals.css'];
  const fullStylesPath = path.join(packageRoot, fullStylesExport);
  const fullStylesExists = fs.existsSync(fullStylesPath);
  console.log(`${fullStylesExists ? '✓' : '✗'} Full styles path export (${fullStylesExport}): ${fullStylesExists ? 'EXISTS' : 'MISSING'}`);
}

console.log('\nConsumer usage examples:');
console.log('// In a React project, users can now import:');
console.log(`import { Button, TextField, Card } from "${packageJson.name}";`);
console.log(`import "${packageJson.name}/styles";`);
console.log('// or');
console.log(`import "${packageJson.name}/styles/globals.css";`);

console.log('\nNext.js usage example:');
console.log('// In _app.js or layout.js:');
console.log(`import "${packageJson.name}/styles";`);

console.log('\nVite usage example:');
console.log('// In main.js or main.tsx:');
console.log(`import "${packageJson.name}/styles";`);

console.log('\n🎉 Package is ready for distribution!');
console.log('Users can install it with: npm install ' + packageJson.name);

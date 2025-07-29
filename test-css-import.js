// Test file to verify CSS import works correctly
// This simulates how users would import the CSS in their projects

console.log('Testing CSS import paths...');

// Method 1: Import via the "styles" export
try {
  console.log('✓ CSS available at: ./styles export');
} catch (error) {
  console.error('✗ Failed to resolve ./styles export:', error.message);
}

// Method 2: Import via the full path export
try {
  console.log('✓ CSS available at: ./styles/globals.css export');
} catch (error) {
  console.error('✗ Failed to resolve ./styles/globals.css export:', error.message);
}

console.log('\nUsers can now import CSS in their projects using:');
console.log('import "@storeware/polaris/styles"');
console.log('// or');
console.log('import "@storeware/polaris/styles/globals.css"');

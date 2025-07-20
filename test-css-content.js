// Test file to verify CSS content is properly compiled
// This checks that Tailwind CSS classes are actually compiled and available

import fs from "fs";
import path from "path";

console.log("Testing compiled CSS content...");

const cssPath = path.join(process.cwd(), "dist/styles/globals.css");

try {
  const cssContent = fs.readFileSync(cssPath, "utf8");

  console.log(`✓ CSS file exists at: ${cssPath}`);
  console.log(`✓ CSS file size: ${cssContent.length} bytes`);

  // Check for compiled Tailwind base styles
  const hasBaseStyles = cssContent.includes("*, ::before, ::after");
  console.log(`${hasBaseStyles ? "✓" : "✗"} Contains Tailwind base styles`);

  // Check for specific component classes used in our components
  const testClasses = [
    { name: "bg-white", pattern: ".bg-white" },
    { name: "text-gray-700", pattern: ".text-gray-700" },
    { name: "hover:bg-gray-50", pattern: ".hover\\:bg-gray-50:hover" },
    { name: "inline-flex", pattern: ".inline-flex" },
    { name: "items-center", pattern: ".items-center" },
    { name: "justify-center", pattern: ".justify-center" },
    { name: "transition-all", pattern: ".transition-all" },
    {
      name: "focus-visible:ring-2",
      pattern: ".focus-visible\\:ring-2:focus-visible",
    },
    { name: "border-border", pattern: "border-color: hsl(var(--border))" },
  ];

  let foundClasses = 0;
  testClasses.forEach((classInfo) => {
    const hasClass = cssContent.includes(classInfo.pattern);
    console.log(`${hasClass ? "✓" : "✗"} Contains ${classInfo.name} class`);
    if (hasClass) foundClasses++;
  });

  // Check that @tailwind directives are NOT present (they should be compiled)
  const hasTailwindDirectives = cssContent.includes("@tailwind");
  console.log(
    `${
      !hasTailwindDirectives ? "✓" : "✗"
    } @tailwind directives are compiled (not present in output)`
  );

  // Check that @apply directives are NOT present (they should be compiled)
  const hasApplyDirectives = cssContent.includes("@apply");
  console.log(
    `${
      !hasApplyDirectives ? "✓" : "✗"
    } @apply directives are compiled (not present in output)`
  );

  // Check for CSS custom properties (should be present)
  const hasCustomProperties =
    cssContent.includes("--background:") &&
    cssContent.includes("--foreground:");
  console.log(
    `${hasCustomProperties ? "✓" : "✗"} Contains CSS custom properties`
  );

  console.log(`\nSummary:`);
  console.log(
    `- Found ${foundClasses}/${testClasses.length} expected Tailwind classes`
  );
  console.log(
    `- CSS is ${
      hasTailwindDirectives || hasApplyDirectives ? "NOT " : ""
    }properly compiled`
  );
  console.log(
    `- File size indicates ${
      cssContent.length > 50000 ? "full" : "minimal"
    } Tailwind compilation`
  );

  if (
    foundClasses >= testClasses.length * 0.8 &&
    !hasTailwindDirectives &&
    !hasApplyDirectives
  ) {
    console.log("\n🎉 CSS compilation test PASSED!");
    process.exit(0);
  } else {
    console.log("\n❌ CSS compilation test FAILED!");
    process.exit(1);
  }
} catch (error) {
  console.error("✗ Failed to read CSS file:", error.message);
  process.exit(1);
}

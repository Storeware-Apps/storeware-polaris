# Development Guide - @storeseo/polaris

This guide provides detailed instructions for developing and maintaining the @storeseo/polaris component library.

## 🏗️ Architecture Overview

### Component Structure

```
packages/storeseo-polaris/
├── components/
│   ├── button.tsx          # Main Button component implementation
│   └── button.types.ts     # TypeScript type definitions
├── lib/
│   └── utils.ts           # Utility functions (cn helper)
├── examples/
│   └── button-examples.tsx # Usage examples and demos
├── dist/                  # Built output (auto-generated)
├── package.json          # Package configuration
├── tsconfig.json         # TypeScript configuration
└── README.md            # Main documentation
```

### Integration with Main App

The package integrates with the main application through a re-export pattern:

```
packages/storeseo-polaris/components/button.tsx
    ↓ (builds to)
packages/storeseo-polaris/dist/
    ↓ (imported by)
app/components/ui/button.tsx
    ↓ (used by)
Application Components
```

## 🔧 Development Workflow

### 1. Setting Up Development Environment

```bash
# Clone the repository
git clone <repository-url>
cd my-react-router-app

# Install dependencies
npm install

# Install package dependencies
cd packages/storeseo-polaris
npm install
```

### 2. Making Changes

1. **Edit Component Files**: Make changes in `packages/storeseo-polaris/components/`
2. **Update Types**: Modify `packages/storeseo-polaris/components/button.types.ts` if needed
3. **Build Package**: Run the build command

```bash
cd packages/storeseo-polaris
npm run build
```

### 3. Testing Changes

#### Automatic Testing

The main application automatically picks up changes after building:

```bash
# In the main project root
npm run dev
```

Then visit:

- `http://localhost:5174/polaris-test` - Interactive testing
- `http://localhost:5174/polaris-comparison` - Visual comparison

#### Manual Testing Steps

1. **Visual Verification**: Check all button variants, sizes, and states
2. **Interaction Testing**: Test click handlers, hover states, focus states
3. **Accessibility Testing**: Verify ARIA attributes and keyboard navigation
4. **TypeScript Validation**: Ensure no type errors

### 4. Hot Reload Process

Changes don't automatically hot reload. You need to:

1. Make your changes
2. Run `npm run build` in the package directory
3. The main app will pick up the changes on next page refresh

## 🧪 Testing Strategy

### Visual Testing

Use the comparison page to verify visual consistency:

```tsx
// Visit /polaris-comparison to see:
<PolarisButton variant="plain">Original Polaris</PolarisButton>
<StoreSeoButton variant="plain">StoreSeO Polaris</StoreSeoButton>
```

### Component Testing

Use the test page for interactive testing:

```tsx
// Visit /polaris-test to test:
- All variants (primary, secondary, tertiary, plain, monochromePlain)
- All sizes (micro, slim, medium, large)
- All states (normal, disabled, loading, pressed)
- All tones (default, success, critical)
- Icons and disclosure indicators
- Link functionality
- Event handlers
```

### TypeScript Testing

```bash
cd packages/storeseo-polaris
npm run typecheck
```

## 🎨 Styling Guidelines

### Polaris Visual Specifications

The components must match these Polaris specifications:

#### Button Variants

1. **Primary**: Dark background (`bg-gray-900`), white text
2. **Secondary**: Light background (`bg-gray-100`), dark text
3. **Tertiary**: Outlined with border (`border-gray-300`)
4. **Plain**: Blue text (`text-blue-600`), underline on hover
5. **MonochromePlain**: Gray text (`text-gray-600`), underline on hover

#### Button Sizes

1. **Micro**: `h-5` (20px height), `text-xs`, minimal padding
2. **Slim**: `h-7` (28px height), `text-sm`, compact padding
3. **Medium**: `h-9` (36px height), `text-sm`, standard padding
4. **Large**: `h-11` (44px height), `text-base`, generous padding

#### Focus States

All buttons should have:

- `focus-visible:ring-2`
- `focus-visible:ring-offset-2`
- Color-specific ring colors

### CSS Class Structure

```tsx
const buttonVariants = cva(
  // Base classes applied to all buttons
  "cursor-pointer inline-flex items-center justify-center whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        /* variant-specific classes */
      },
      size: {
        /* size-specific classes */
      },
      tone: {
        /* tone-specific classes */
      },
      // ... other variants
    },
  }
);
```

## 🔄 Adding New Components

To add a new Polaris component (e.g., Card):

### 1. Create Component Files

```bash
# Create the component
touch packages/storeseo-polaris/components/card.tsx
touch packages/storeseo-polaris/components/card.types.ts
```

### 2. Implement Component

```tsx
// packages/storeseo-polaris/components/card.tsx
import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "~/lib/utils";
import { PolarisCardProps } from "./card.types";

const cardVariants = cva(
  "bg-white rounded-lg shadow-sm border border-gray-200",
  {
    variants: {
      // Define Polaris Card variants
    },
  }
);

export const Card = React.forwardRef<HTMLDivElement, PolarisCardProps>(
  ({ className, ...props }, ref) => {
    // Implementation
  }
);
```

### 3. Update Package Exports

```tsx
// packages/storeseo-polaris/index.ts
export { Card } from "./components/card";
export type { PolarisCardProps } from "./components/card.types";
```

### 4. Update Main App

```tsx
// app/components/ui/card.tsx
export { Card, type PolarisCardProps } from "@storeseo/polaris";
```

## 🐛 Debugging

### Common Issues

1. **TypeScript Errors**: Check type definitions in `.types.ts` files
2. **Styling Issues**: Verify Tailwind classes and CVA configuration
3. **Build Errors**: Check `tsconfig.json` and package dependencies
4. **Import Errors**: Verify export/import paths

### Debug Commands

```bash
# Check TypeScript compilation
npm run typecheck

# Build with verbose output
npm run build -- --verbose

# Check package structure
npm pack --dry-run
```

### Debugging Tips

1. **Use Browser DevTools**: Inspect generated CSS classes
2. **Check Console**: Look for React warnings and errors
3. **Verify Props**: Use React DevTools to inspect component props
4. **Test Isolation**: Create minimal reproduction cases

## 📦 Building and Publishing

### Build Process

```bash
cd packages/storeseo-polaris
npm run build
```

This creates:

- `dist/index.js` - Main JavaScript bundle
- `dist/index.d.ts` - TypeScript declarations
- `dist/components/` - Individual component files

### Publishing Checklist

1. ✅ All tests pass
2. ✅ Visual comparison matches Polaris
3. ✅ TypeScript compilation succeeds
4. ✅ Documentation is updated
5. ✅ Version number is bumped
6. ✅ Build artifacts are clean

### Version Management

```bash
# Bump version
npm version patch|minor|major

# Publish (if configured)
npm publish
```

## 🤝 Contributing Guidelines

### Code Style

- Use TypeScript for all new code
- Follow existing naming conventions
- Add JSDoc comments for public APIs
- Use Prettier for code formatting

### Commit Messages

```
feat: add new Card component
fix: correct Button focus ring styling
docs: update development guide
refactor: simplify button variant logic
```

### Pull Request Process

1. Create feature branch
2. Make changes and test thoroughly
3. Update documentation
4. Submit PR with clear description
5. Address review feedback

This development guide should help you effectively work with the @storeseo/polaris package!

# @storeware/polaris - Product Requirements Document

## Project Overview

**@storeware/polaris** is a React component library that provides 100% API compatibility with Shopify's Polaris design system while being built on shadcn/ui foundation with Tailwind CSS. This library enables developers to use familiar Polaris components with modern React patterns, excellent TypeScript support, and enhanced customization capabilities.

## Project Objectives

### Primary Goals
- **100% Polaris Compatibility**: Maintain complete API and visual compatibility with Shopify's Polaris design system
- **Modern Foundation**: Built on proven shadcn/ui patterns for reliability and maintainability
- **Developer Experience**: Provide excellent TypeScript support with comprehensive IntelliSense
- **Customization**: Enable easy theming and customization through Tailwind CSS
- **Performance**: Deliver lightweight, tree-shakeable components

### Secondary Goals
- **Documentation**: Comprehensive documentation and examples for all components
- **Testing**: Full test coverage with Vitest for reliability
- **Storybook Integration**: Interactive component development and testing
- **Accessibility**: WCAG compliant components with proper ARIA support

## Installation

### For Consuming Projects

```bash
npm install @storeware/polaris
```

### Peer Dependencies

Ensure you have the required peer dependencies:

```bash
npm install react react-dom
```

## Usage

### Basic Setup

1. **Install the package**:
```bash
npm install @storeware/polaris
```

2. **Import styles** in your application root:
```tsx
import '@storeware/polaris/styles';
```

3. **Use components**:
```tsx
import { Button } from '@storeware/polaris';

function App() {
  return (
    <Button variant="primary" onClick={() => alert('Hello!')}>
      Click me
    </Button>
  );
}
```

### Advanced Usage

#### With Custom Styling
```tsx
import { Button } from '@storeware/polaris';

<Button 
  variant="primary" 
  className="custom-button-class"
  fullWidth
>
  Custom Styled Button
</Button>
```

#### As Links
```tsx
<Button 
  url="https://example.com" 
  external
  variant="plain"
>
  External Link
</Button>
```

#### With Icons
```tsx
import { ShoppingCart } from 'lucide-react';

<Button 
  variant="primary" 
  icon={<ShoppingCart />}
>
  Add to Cart
</Button>
```

## Available Components

### Button Component
The primary component currently available with full Polaris compatibility.

**Variants**: `default`, `primary`, `secondary`, `tertiary`, `plain`, `monochromePlain`
**Sizes**: `micro`, `slim`, `medium`, `large`
**States**: `loading`, `disabled`, `pressed`
**Tones**: `success`, `critical`

For detailed documentation, see: `src/components/Button/BUTTON_DOCS.md`

## Development Setup

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm
- TypeScript 5+

### Getting Started

1. **Clone the repository**:
```bash
git clone <repository-url>
cd storeware-polaris
```

2. **Install dependencies**:
```bash
pnpm install
```

3. **Start development**:
```bash
pnpm run dev
```

4. **Start Storybook** (for component development):
```bash
pnpm run storybook
```

### Development Scripts

| Script | Description |
|--------|-------------|
| `pnpm run build` | Build the library for production |
| `pnpm run dev` | Start TypeScript compiler in watch mode |
| `pnpm run typecheck` | Run TypeScript type checking |
| `pnpm run test` | Run test suite with Vitest |
| `pnpm run test:ui` | Run tests with UI interface |
| `pnpm run storybook` | Start Storybook development server |
| `pnpm run build-storybook` | Build Storybook for production |
| `pnpm run clean` | Clean build artifacts |
| `pnpm run lint` | Run ESLint |
| `pnpm run lint:fix` | Fix ESLint issues |

## Build Process

The library uses a TypeScript-first build process:

1. **TypeScript Compilation**: Uses `tsc` with `tsconfig.build.json`
2. **Path Alias Resolution**: Uses `tsc-alias` to resolve path aliases
3. **Import Fixing**: Custom script to fix ES module imports
4. **CSS Processing**: Tailwind CSS compilation for styles

### Build Output Structure
```
dist/
├── index.js              # Main entry point
├── index.d.ts           # TypeScript declarations
├── components/          # Individual component files
├── lib/                # Utility functions
└── styles/             # CSS files
```

## Testing

### Test Framework
- **Vitest**: Modern testing framework with excellent TypeScript support
- **Testing Library**: React Testing Library for component testing
- **jsdom**: DOM environment for testing

### Running Tests
```bash
# Run all tests
pnpm test

# Run tests with UI
pnpm test:ui

# Run tests in watch mode
pnpm test --watch
```

### Test Coverage
All components should have comprehensive tests covering:
- Rendering with different props
- User interactions
- Accessibility features
- Edge cases and error states

## Publishing Workflow

### Pre-publish Checklist
1. ✅ All tests pass (`pnpm test`)
2. ✅ Build succeeds (`pnpm run build`)
3. ✅ TypeScript compilation passes (`pnpm run typecheck`)
4. ✅ Linting passes (`pnpm run lint`)
5. ✅ Storybook builds (`pnpm run build-storybook`)
6. ✅ Documentation is updated
7. ✅ Version is bumped appropriately

### Publishing Steps
```bash
# 1. Clean and build
pnpm run clean
pnpm run build

# 2. Run tests
pnpm test

# 3. Version bump (patch/minor/major)
npm version patch

# 4. Publish (when configured)
npm publish
```

### Package Configuration
The package is configured with:
- **ES Modules**: Modern module format
- **TypeScript Declarations**: Full type support
- **Tree Shaking**: Optimized bundle size
- **Multiple Export Formats**: Support for different import patterns

## Architecture

### Technology Stack
- **React 18+**: Modern React with hooks and concurrent features
- **TypeScript**: Full type safety and excellent developer experience
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Component architecture patterns
- **Radix UI**: Accessible component primitives
- **Class Variance Authority**: Type-safe variant management
- **Lucide React**: Icon library

### Component Structure
```
src/
├── components/
│   └── Button/
│       ├── button.tsx           # Component implementation
│       ├── button.types.ts      # TypeScript definitions
│       ├── Button.test.tsx      # Test suite
│       ├── Button.stories.tsx   # Storybook stories
│       └── BUTTON_DOCS.md      # Component documentation
├── lib/
│   └── utils.ts                # Utility functions
├── styles/
│   └── globals.css             # Global styles
└── index.ts                    # Main export file
```

### Design Principles
1. **API Compatibility**: Maintain 100% compatibility with Polaris APIs
2. **Type Safety**: Comprehensive TypeScript support
3. **Accessibility**: WCAG compliant by default
4. **Performance**: Lightweight and tree-shakeable
5. **Customization**: Easy theming through Tailwind CSS
6. **Testing**: Comprehensive test coverage
7. **Documentation**: Clear, comprehensive documentation

## Roadmap

### Phase 1 (Current)
- ✅ Button component with full Polaris compatibility
- ✅ TypeScript support and type definitions
- ✅ Comprehensive testing setup
- ✅ Storybook integration
- ✅ Build and publishing workflow

### Phase 2 (Planned)
- [ ] Additional core components (Card, TextField, Select)
- [ ] Theme customization system
- [ ] Advanced accessibility features
- [ ] Performance optimizations

### Phase 3 (Future)
- [ ] Complete Polaris component coverage
- [ ] Advanced theming capabilities
- [ ] Plugin system for extensions
- [ ] Migration tools from Polaris

## Contributing

### Code Standards
- Use TypeScript for all code
- Follow existing naming conventions
- Add comprehensive tests for new features
- Update documentation for changes
- Use Prettier for code formatting
- Follow semantic versioning

### Pull Request Process
1. Create feature branch from main
2. Implement changes with tests
3. Update documentation
4. Ensure all checks pass
5. Submit PR with clear description
6. Address review feedback

For detailed development guidelines, see the component-specific documentation in `src/components/*/`.

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
import "@storeware/polaris/styles";
```

3. **Use components**:

```tsx
import { Button } from "@storeware/polaris";

function App() {
  return (
    <Button variant="primary" onClick={() => alert("Hello!")}>
      Click me
    </Button>
  );
}
```

### Advanced Usage

#### With Custom Styling

```tsx
import { Button } from "@storeware/polaris";

<Button variant="primary" className="custom-button-class" fullWidth>
  Custom Styled Button
</Button>;
```

#### As Links

```tsx
<Button url="https://example.com" external variant="plain">
  External Link
</Button>
```

#### With Icons

```tsx
import { CartIcon } from "@shopify/polaris-icons";

<Button variant="primary" icon={<CartIcon />}>
  Add to Cart
</Button>;
```

## Available Components

### Button Component ✅

The primary action component with full Polaris compatibility.

**Variants**: `default`, `primary`, `secondary`, `tertiary`, `plain`, `monochromePlain`
**Sizes**: `micro`, `slim`, `medium`, `large`
**States**: `loading`, `disabled`, `pressed`
**Tones**: `success`, `critical`

For detailed documentation, see: `src/components/Button/BUTTON_DOCS.md`

### ButtonGroup Component ✅

Component for grouping related buttons with proper spacing and layout.

**Variants**: `segmented`
**Gap Options**: `extraTight`, `tight`, `loose`
**Features**: `fullWidth`, `connectedTop`, `noWrap`

For detailed documentation, see: `src/components/ButtonGroup/BUTTONGROUP_DOCS.md`

### Box Component ✅

The most primitive layout component providing access to Polaris design tokens.

**Features**:

- Complete Polaris color token support (background, border, text)
- Comprehensive spacing system with responsive support
- Border properties (width, radius, style, individual sides)
- Layout properties (position, overflow, dimensions)
- Shadow system with all Polaris shadow tokens
- Accessibility features (visual/print hiding, ARIA support)
- Semantic HTML element support

For detailed documentation, see: `src/components/Box/BOX_DOCS.md`

### Text Component ✅

Typography component for establishing hierarchy and communicating important content.

**Variants**: `headingXs`, `headingSm`, `headingMd`, `headingLg`, `headingXl`, `heading2xl`, `heading3xl`, `bodyXs`, `bodySm`, `bodyMd`, `bodyLg`
**Alignment**: `start`, `center`, `end`
**Tones**: `base`, `subdued`, `success`, `critical`, `caution`, `warning`, `magic`
**Font Weights**: `regular`, `medium`, `semibold`, `bold`

For detailed documentation, see: `src/components/Text/TEXT_DOCS.md`

### TextField Component ✅

Input field component for collecting text input from merchants.

**Types**: `text`, `email`, `number`, `password`, `search`, `tel`, `url`
**Variants**: `default`, `borderless`
**Sizes**: `slim`, `medium`
**States**: `disabled`, `readOnly`, `error`
**Features**: `multiline`, `autoComplete`, `spellCheck`, `prefix`, `suffix`, `connectedLeft`, `connectedRight`

For detailed documentation, see: `src/components/TextField/TEXTFIELD_DOCS.md`

### Popover Component ✅

Small overlay component that opens on demand for additional content and actions.

**Positioning**: `above`, `below`, `mostSpace`, `cover`
**Alignment**: `left`, `center`, `right`
**Features**: `sectioned`, `fullWidth`, `fullHeight`, `fluidContent`, `fixed`
**Accessibility**: `autofocusTarget`, `ariaHaspopup`, keyboard navigation support
**Advanced**: `preventFocusOnClose`, `preventCloseOnChildOverlayClick`, `captureOverscroll`

For detailed documentation, see: `src/components/Popover/POPOVER_DOCS.md`

### Card Component ✅

Layout component for grouping related concepts and tasks in a familiar, recognizable style.

**Background Colors**: All Polaris color tokens including surface, state, brand, and interactive colors
**Padding**: Polaris space scale values (0-3200) with responsive object support
**Border Radius**: Responsive border radius control (`xs`, `sm`, `md`, `lg`, `xl`)
**Features**: Semantic HTML structure, accessibility support, customizable styling

For detailed documentation, see: `src/components/Card/CARD_DOCS.md`

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

| Script                     | Description                             |
| -------------------------- | --------------------------------------- |
| `pnpm run build`           | Build the library for production        |
| `pnpm run dev`             | Start TypeScript compiler in watch mode |
| `pnpm run typecheck`       | Run TypeScript type checking            |
| `pnpm run test`            | Run test suite with Vitest              |
| `pnpm run test:ui`         | Run tests with UI interface             |
| `pnpm run storybook`       | Start Storybook development server      |
| `pnpm run build-storybook` | Build Storybook for production          |
| `pnpm run clean`           | Clean build artifacts                   |
| `pnpm run lint`            | Run ESLint                              |
| `pnpm run lint:fix`        | Fix ESLint issues                       |

## Build Process

The library uses a modern TypeScript-first build process:

1. **Vite Build System**: Uses Vite for fast bundling and development
2. **TypeScript Compilation**: Full type safety with declaration file generation
3. **Tailwind CSS v4**: Integrated via @tailwindcss/vite plugin for optimal performance
4. **Dual Format Output**: Generates both ESM and CommonJS builds

### Build Output Structure

```
dist/
├── index.js              # ESM entry point
├── index.cjs             # CommonJS entry point
├── index.d.ts           # TypeScript declarations
├── style.css            # Compiled Tailwind CSS
└── *.map                # Source maps for debugging
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
- **Tailwind CSS v4**: Latest utility-first CSS framework with improved performance
- **shadcn/ui**: Component architecture patterns
- **Radix UI**: Accessible component primitives
- **Class Variance Authority**: Type-safe variant management
- **Shopify Polaris Icons**: Official Polaris icon library

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

### Phase 1 (Completed) ✅

- ✅ Button component with full Polaris compatibility
- ✅ ButtonGroup component with segmented styling
- ✅ Box component with complete design token support
- ✅ Text component for typography
- ✅ TextField component for form inputs
- ✅ Popover component for overlays and menus
- ✅ Card component for content containers
- ✅ Bleed component for negative margin layouts
- ✅ TypeScript support and type definitions
- ✅ Comprehensive testing setup with Vitest
- ✅ Storybook integration for all components
- ✅ Build and publishing workflow

### Phase 2 (Current)

- 🚧 Page component (next priority)
- [ ] Index Table component for data display
- [ ] Select component for dropdowns
- [ ] Modal component for dialogs
- [ ] Banner component for notifications

### Phase 3 (Planned)

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

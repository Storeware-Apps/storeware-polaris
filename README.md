# @storeseo/polaris

A React component library that matches Shopify's Polaris design system using shadcn/ui and Tailwind CSS as the foundation.

## 🚀 Features

- **100% Polaris Compatible**: Perfect API and visual compatibility with Shopify's Polaris design system
- **shadcn/ui Foundation**: Built on proven shadcn/ui patterns for reliability and customization
- **TypeScript First**: Full type safety with excellent IntelliSense support
- **Tailwind CSS**: Highly customizable styling system
- **Modern React**: Uses latest React patterns and best practices
- **Tree Shakeable**: Optimized bundle size with tree shaking support

## 📦 Installation

```bash
# Using pnpm (recommended)
pnpm add @storeseo/polaris

# Using npm
npm install @storeseo/polaris

# Using yarn
yarn add @storeseo/polaris
```

### Peer Dependencies

Make sure you have the required peer dependencies installed:

```bash
pnpm add react react-dom
```

## 🎨 Setup

### 1. Import Styles

Import the CSS file in your app's entry point:

```tsx
// In your main.tsx or App.tsx
import "@storeseo/polaris/styles";
```

### 2. Configure Tailwind CSS

Add the package to your `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@storeseo/polaris/dist/**/*.{js,ts,jsx,tsx}",
  ],
  // ... rest of your config
};
```

## 🔧 Usage

### Basic Button Usage

```tsx
import { Button } from "@storeseo/polaris";

function App() {
  return (
    <div>
      <Button variant="primary" size="medium">
        Add product
      </Button>

      <Button variant="secondary" size="large">
        Cancel
      </Button>

      <Button variant="plain" url="/settings">
        View settings
      </Button>
    </div>
  );
}
```

### Enhanced Button with shadcn/ui Features

```tsx
import { PolarisButton } from "@storeseo/polaris";

function App() {
  return (
    <PolarisButton asChild variant="primary">
      <Link to="/dashboard">Go to Dashboard</Link>
    </PolarisButton>
  );
}
```

### Available Components

- `Button` - Standard Polaris Button component
- `PolarisButton` - Enhanced Button with shadcn/ui features
- `ShadcnButton` - Pure shadcn/ui Button component

## 📚 API Reference

### Button Props

All components support the complete Polaris Button API:

| Prop         | Type                                                                     | Default     | Description                |
| ------------ | ------------------------------------------------------------------------ | ----------- | -------------------------- |
| `variant`    | `"primary" \| "secondary" \| "tertiary" \| "plain" \| "monochromePlain"` | `"primary"` | Visual appearance          |
| `size`       | `"micro" \| "slim" \| "medium" \| "large"`                               | `"medium"`  | Button size                |
| `tone`       | `"success" \| "critical"`                                                | -           | Color treatment            |
| `fullWidth`  | `boolean`                                                                | `false`     | Full width button          |
| `disabled`   | `boolean`                                                                | `false`     | Disabled state             |
| `loading`    | `boolean`                                                                | `false`     | Loading state with spinner |
| `pressed`    | `boolean`                                                                | `false`     | Pressed state              |
| `url`        | `string`                                                                 | -           | Render as link             |
| `external`   | `boolean`                                                                | `false`     | Open link in new tab       |
| `disclosure` | `boolean \| "up" \| "down" \| "select"`                                  | -           | Disclosure indicator       |
| `icon`       | `ReactNode`                                                              | -           | Icon element               |
| `onClick`    | `() => void`                                                             | -           | Click handler              |

[View complete API documentation](./POLARIS_COMPATIBILITY.md)

## 🎯 Design System Compatibility

This library provides **100% compatibility** with Shopify's Polaris design system:

- ✅ **API Compatibility**: All props and behaviors match exactly
- ✅ **Visual Compatibility**: Pixel-perfect match with Polaris design
- ✅ **Accessibility**: Full ARIA support and keyboard navigation
- ✅ **Functionality**: All features work as specified

[View detailed compatibility analysis](./POLARIS_COMPATIBILITY.md)

## 🛠️ Development

See [DEVELOPMENT.md](./src/DEVELOPMENT.md) for detailed development instructions.

## 📄 License

MIT License - see [LICENSE](./LICENSE) for details.

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines and submit pull requests.

## 🔗 Links

- [Shopify Polaris Design System](https://polaris.shopify.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)

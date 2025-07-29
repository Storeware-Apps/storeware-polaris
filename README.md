# @storeware/polaris

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
pnpm add @storeware/polaris

# Using npm
npm install @storeware/polaris

# Using yarn
yarn add @storeware/polaris
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
import "@storeware/polaris/styles";
```

### 2. Configure Tailwind CSS

This package uses Tailwind CSS v4. Add the package to your Tailwind CSS configuration:

```css
/* In your main CSS file */
@import "tailwindcss";

@theme {
  /* Add any custom theme configuration here */
}

/* Add content paths for scanning */
@source "./src/**/*.{js,ts,jsx,tsx}";
@source "./node_modules/@storeware/polaris/dist/**/*.{js,ts,jsx,tsx}";
```

## 🔧 Usage

### Basic Button Usage

```tsx
import { Button } from "@storeware/polaris";

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

## 🎯 Design System Compatibility

This library provides **100% compatibility** with Shopify's Polaris design system:

- ✅ **API Compatibility**: All props and behaviors match exactly
- ✅ **Visual Compatibility**: Pixel-perfect match with Polaris design
- ✅ **Accessibility**: Full ARIA support and keyboard navigation
- ✅ **Functionality**: All features work as specified

## 🛠️ Development

See [STOREWARE_POLARIS_PRD.md](./src/STOREWARE_POLARIS_PRD.md) for detailed development instructions.

## 📄 License

MIT License - see [LICENSE](./LICENSE) for details.

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines and submit pull requests.

## 🔗 Links

- [Shopify Polaris Design System](https://polaris.shopify.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)

# Icon Component Documentation

## Overview

The Icon component provides 100% API compatibility with Shopify's Polaris Icon component while being built on shadcn/ui foundation with Tailwind CSS. Icons are used to visually communicate core parts of the product and available actions. They can act as wayfinding tools to help merchants more easily understand where they are in the product, and common interaction patterns that are available.

## Installation

```bash
pnpm install @storeware/polaris
```

## Basic Usage

```tsx
import { Icon } from "@storeware/polaris";
import { PlusCircleIcon } from "@shopify/polaris-icons";

function MyComponent() {
  return <Icon source={PlusCircleIcon} />;
}
```

## Import Styles

Make sure to import the component styles in your application:

```tsx
import "@storeware/polaris/styles";
```

## Props

### Core Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `source` | `any` | - | **Required.** The SVG contents to display in the icon (icons should fit in a 20 × 20 pixel viewBox) |
| `tone` | `IconTone` | `"base"` | Set the color for the SVG fill |
| `accessibilityLabel` | `string` | - | Descriptive text to be read to screenreaders |

### Enhanced Props (shadcn/ui)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS class name for custom styling |

## Tone Options

The `tone` prop accepts the following values:

- `"base"` - Default text color
- `"inherit"` - Inherit color from parent
- `"subdued"` - Muted text color
- `"caution"` - Amber warning color
- `"warning"` - Orange warning color
- `"critical"` - Red error color
- `"interactive"` - Blue interactive color
- `"info"` - Blue info color
- `"success"` - Green success color
- `"primary"` - Primary brand color
- `"emphasis"` - Strong emphasis color
- `"magic"` - Purple magic color
- `"textCaution"` - Text version of caution
- `"textWarning"` - Text version of warning
- `"textCritical"` - Text version of critical
- `"textInfo"` - Text version of info
- `"textSuccess"` - Text version of success
- `"textPrimary"` - Text version of primary
- `"textMagic"` - Text version of magic

## Examples

### Basic Icon

```tsx
import { Icon } from "@storeware/polaris";
import { PlusCircleIcon } from "@shopify/polaris-icons";

<Icon source={PlusCircleIcon} />
```

### Colored Icon

```tsx
import { Icon } from "@storeware/polaris";
import { AlertTriangleIcon } from "@shopify/polaris-icons";

<Icon source={AlertTriangleIcon} tone="critical" />
```

### With Accessibility Label

```tsx
import { Icon } from "@storeware/polaris";
import { PlusCircleIcon } from "@shopify/polaris-icons";

<Icon 
  source={PlusCircleIcon} 
  accessibilityLabel="Add new item" 
/>
```

### Custom SVG

```tsx
import { Icon } from "@storeware/polaris";

const customSvg = (
  <svg viewBox="0 0 20 20" fill="currentColor">
    <path d="M10 2L3 7v11h4v-6h6v6h4V7l-7-5z" />
  </svg>
);

<Icon source={customSvg} tone="primary" />
```

## Accessibility

Using icons can be a great help to merchants who have difficulties with reading, language, attention, and low vision.

### Best Practices

- **Pair text and icons for clarity** - Icons work best when paired with descriptive text
- **Give the icon a text equivalent** - Use `accessibilityLabel` if the icon's purpose isn't conveyed in another way
- **Don't describe what the icon looks like** - Focus on the icon's purpose, not its appearance
- **Don't include "icon" in the text equivalent** - Screen readers already announce it as an icon
- **Don't duplicate adjacent text** - Avoid repeating information that's already available

### Examples

✅ **Do:**
```tsx
<Icon source={OrderIcon} />
<p>No orders yet</p>
```

✅ **Do:**
```tsx
<Button icon={PlusCircleIcon}>Add a product</Button>
```

❌ **Don't:**
```tsx
<Icon source={PlusCircleIcon} accessibilityLabel="Circle plus icon" />
```

## Integration with Other Components

The Icon component works seamlessly with other components in the library:

```tsx
import { Button, Icon } from "@storeware/polaris";
import { CartIcon } from "@shopify/polaris-icons";

// In Button component
<Button icon={<Icon source={CartIcon} />}>
  Add to Cart
</Button>

// Or directly with icon prop
<Button icon={CartIcon}>
  Add to Cart
</Button>
```

## TypeScript Support

The component includes full TypeScript support with proper type definitions:

```tsx
import type { IconProps, IconTone } from "@storeware/polaris";
```

## Customization

### Custom Styling

```tsx
<Icon 
  source={PlusCircleIcon} 
  className="custom-icon-class" 
  tone="primary" 
/>
```

### CSS Variables

The component respects CSS custom properties for theming:

```css
.custom-icon-class {
  --icon-size: 24px;
  width: var(--icon-size);
  height: var(--icon-size);
}
```

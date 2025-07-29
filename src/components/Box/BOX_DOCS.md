# Box Component Documentation

## Overview

The Box component provides 100% API compatibility with Shopify's Polaris Box component while being built on shadcn/ui foundation with Tailwind CSS. Box is the most primitive layout component and provides a way to access Polaris design tokens for styling.

## Installation

```bash
pnpm install @storeware/polaris
```

## Basic Usage

```tsx
import { Box } from "@storeware/polaris";

function MyComponent() {
  return (
    <Box padding="400" background="bg-surface">
      Content inside a box
    </Box>
  );
}
```

## Props

### Core Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | - | Content to display inside the box |
| `as` | `'div' \| 'span' \| 'section' \| 'legend' \| 'ul' \| 'li'` | `'div'` | HTML Element type |
| `className` | `string` | - | Additional CSS class name |

### Background

| Prop | Type | Description |
|------|------|-------------|
| `background` | `ColorBackgroundAlias` | Background color using Polaris color tokens |

### Border Properties

| Prop | Type | Description |
|------|------|-------------|
| `borderColor` | `ColorBorderAlias \| "transparent"` | Border color |
| `borderStyle` | `'solid' \| 'dashed'` | Border style |
| `borderRadius` | `BorderRadiusAliasOrScale` | Border radius |
| `borderWidth` | `BorderWidthScale` | Border width |
| `borderBlockStartWidth` | `BorderWidthScale` | Top border width |
| `borderBlockEndWidth` | `BorderWidthScale` | Bottom border width |
| `borderInlineStartWidth` | `BorderWidthScale` | Left border width |
| `borderInlineEndWidth` | `BorderWidthScale` | Right border width |
| `borderStartStartRadius` | `BorderRadiusAliasOrScale` | Top-left border radius |
| `borderStartEndRadius` | `BorderRadiusAliasOrScale` | Top-right border radius |
| `borderEndStartRadius` | `BorderRadiusAliasOrScale` | Bottom-left border radius |
| `borderEndEndRadius` | `BorderRadiusAliasOrScale` | Bottom-right border radius |

### Spacing Properties

| Prop | Type | Description |
|------|------|-------------|
| `padding` | `ResponsiveSpacing` | Padding around children |
| `paddingBlock` | `ResponsiveSpacing` | Vertical padding |
| `paddingBlockStart` | `ResponsiveSpacing` | Top padding |
| `paddingBlockEnd` | `ResponsiveSpacing` | Bottom padding |
| `paddingInline` | `ResponsiveSpacing` | Horizontal padding |
| `paddingInlineStart` | `ResponsiveSpacing` | Left padding |
| `paddingInlineEnd` | `ResponsiveSpacing` | Right padding |

### Layout Properties

| Prop | Type | Description |
|------|------|-------------|
| `position` | `'relative' \| 'absolute' \| 'fixed' \| 'sticky'` | CSS position |
| `insetBlockStart` | `ResponsiveSpacing` | Top position |
| `insetBlockEnd` | `ResponsiveSpacing` | Bottom position |
| `insetInlineStart` | `ResponsiveSpacing` | Left position |
| `insetInlineEnd` | `ResponsiveSpacing` | Right position |
| `width` | `string` | Width of container |
| `minWidth` | `string` | Minimum width |
| `maxWidth` | `string` | Maximum width |
| `minHeight` | `string` | Minimum height |
| `overflowX` | `'hidden' \| 'scroll' \| 'clip'` | Horizontal overflow |
| `overflowY` | `'hidden' \| 'scroll' \| 'clip'` | Vertical overflow |

### Visual Properties

| Prop | Type | Description |
|------|------|-------------|
| `color` | `ColorTextAlias` | Text color |
| `shadow` | `ShadowAliasOrScale` | Box shadow |
| `opacity` | `string` | Opacity value |
| `visuallyHidden` | `boolean` | Hide visually but keep for screen readers |
| `printHidden` | `boolean` | Hide when printing |
| `zIndex` | `string` | Z-index value |

### Outline Properties

| Prop | Type | Description |
|------|------|-------------|
| `outlineColor` | `ColorBorderAlias` | Outline color |
| `outlineStyle` | `'solid' \| 'dashed'` | Outline style |
| `outlineWidth` | `BorderWidthScale` | Outline width |

### Accessibility

| Prop | Type | Description |
|------|------|-------------|
| `id` | `string` | HTML id attribute |
| `role` | `string` | ARIA role |
| `tabIndex` | `number` | Tab order |

## Examples

### Basic Box with Background

```tsx
<Box background="bg-surface-info" padding="400">
  Information content
</Box>
```

### Box with Border

```tsx
<Box 
  padding="400" 
  borderWidth="025" 
  borderColor="border-critical" 
  borderRadius="200"
>
  Content with border
</Box>
```

### Responsive Padding

```tsx
<Box padding={{ xs: "200", md: "400", lg: "600" }}>
  Responsive padding content
</Box>
```

### Directional Padding

```tsx
<Box 
  paddingBlock="200" 
  paddingInline="400"
  paddingBlockStart="600"
>
  Directional padding
</Box>
```

### Layout Box

```tsx
<Box 
  position="relative"
  width="300px"
  minHeight="200px"
  overflowY="scroll"
>
  Scrollable content
</Box>
```

### Semantic HTML Elements

```tsx
<Box as="section" role="region" padding="400">
  Section content
</Box>

<Box as="ul" padding="200">
  <li>List item 1</li>
  <li>List item 2</li>
</Box>
```

### Shadow and Visual Effects

```tsx
<Box 
  background="bg-surface"
  padding="500"
  shadow="300"
  borderRadius="200"
>
  Card-like appearance
</Box>
```

### Accessibility Features

```tsx
<Box 
  role="alert"
  background="bg-surface-critical"
  padding="400"
  color="text-critical"
>
  Error message
</Box>

<Box visuallyHidden>
  Screen reader only content
</Box>
```

## Design Tokens

The Box component uses Polaris design tokens for consistent styling:

### Space Scale
- `0`, `025`, `050`, `100`, `150`, `200`, `300`, `400`, `500`, `600`, `800`, `1000`, `1200`, `1600`, `2000`, `2400`, `2800`, `3200`

### Border Radius Scale
- `0`, `050`, `100`, `150`, `200`, `300`, `400`, `500`, `750`, `full`

### Border Width Scale
- `0`, `0165`, `025`, `050`, `100`

### Color Tokens
- Background: `bg-*`, `bg-surface-*`, `bg-fill-*`
- Border: `border-*`, `border-emphasis-*`, `border-critical-*`
- Text: `text-*`, `text-secondary`, `text-critical-*`

### Shadow Scale
- `0`, `100`, `200`, `300`, `400`, `500`, `600`
- Special: `button`, `button-hover`, `inset-100`, `inset-200`

## Responsive Design

The Box component supports responsive spacing through object syntax:

```tsx
<Box padding={{ xs: "200", md: "400", lg: "600" }}>
  Responsive content
</Box>
```

Breakpoints: `xs`, `sm`, `md`, `lg`, `xl`

## Best Practices

1. **Use semantic HTML elements** with the `as` prop when appropriate
2. **Leverage Polaris design tokens** for consistent spacing and colors
3. **Use responsive spacing** for mobile-first design
4. **Apply proper ARIA roles** for accessibility
5. **Use logical properties** (block/inline) for internationalization support

## Related Components

- For more specific use cases, use the Card component
- For text content, use the Text component
- For layout structures, consider Layout component

## Migration from Polaris

This component provides 100% API compatibility with Shopify's Polaris Box component. Simply replace imports:

```tsx
// Before
import { Box } from '@shopify/polaris';

// After
import { Box } from '@storeware/polaris';
```

All props and behaviors remain identical.

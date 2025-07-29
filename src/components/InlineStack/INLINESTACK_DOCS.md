# InlineStack Component Documentation

## Overview

The InlineStack component provides 100% API compatibility with Shopify's Polaris InlineStack component while being built on shadcn/ui foundation with Tailwind CSS. Use to display children horizontally in a row. Based on CSS Flexbox.

## Installation

```bash
pnpm install @storeware/polaris
```

## Basic Usage

```tsx
import { InlineStack } from "@storeware/polaris";

function MyComponent() {
  return (
    <InlineStack gap="400">
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </InlineStack>
  );
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
| `children` | `React.ReactNode` | - | Content to display inside the inline stack |
| `as` | `'div' \| 'span' \| 'li' \| 'ol' \| 'ul'` | `'div'` | HTML Element type |
| `align` | `'start' \| 'center' \| 'end' \| 'space-around' \| 'space-between' \| 'space-evenly'` | `'start'` | Horizontal alignment of children |
| `direction` | `'row' \| 'row-reverse'` | `'row'` | Horizontal direction in which children are laid out |
| `blockAlign` | `'start' \| 'center' \| 'end' \| 'baseline' \| 'stretch'` | `'start'` | Vertical alignment of children |
| `gap` | `SpaceScale \| ResponsiveGap` | - | The spacing between elements |
| `wrap` | `boolean` | `true` | Wrap stack elements to additional rows as needed on small screens |
| `className` | `string` | - | Additional CSS class name |

### Gap Values

The `gap` prop accepts Polaris space tokens:

| Token | Value | Description |
|-------|-------|-------------|
| `"0"` | `0px` | No spacing |
| `"025"` | `1px` | Extra tight spacing |
| `"050"` | `2px` | Very tight spacing |
| `"100"` | `4px` | Tight spacing |
| `"150"` | `6px` | Slightly tight spacing |
| `"200"` | `8px` | Small spacing |
| `"300"` | `12px` | Medium spacing |
| `"400"` | `16px` | Large spacing |
| `"500"` | `20px` | Extra large spacing |
| `"600"` | `24px` | Very large spacing |
| `"800"` | `32px` | Huge spacing |
| `"1000"` | `40px` | Extra huge spacing |
| `"1200"` | `48px` | Massive spacing |
| `"1600"` | `64px` | Extra massive spacing |
| `"2000"` | `80px` | Enormous spacing |
| `"2400"` | `96px` | Extra enormous spacing |
| `"2800"` | `112px` | Gigantic spacing |
| `"3200"` | `128px` | Extra gigantic spacing |

## Examples

### Basic InlineStack

```tsx
<InlineStack>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</InlineStack>
```

### With Gap

```tsx
<InlineStack gap="400">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</InlineStack>
```

### Non-wrapping

```tsx
<InlineStack wrap={false}>
  <div style={{ width: '106px', height: '36px' }}>Item 1</div>
  <div style={{ width: '106px', height: '20px' }}>Item 2</div>
  <div style={{ width: '106px', height: '20px' }}>Item 3</div>
  <div style={{ width: '106px', height: '20px' }}>Item 4</div>
  <div style={{ width: '106px', height: '20px' }}>Item 5</div>
  <div style={{ width: '106px', height: '20px' }}>Item 6</div>
</InlineStack>
```

### Horizontal Alignment

```tsx
{/* Center alignment */}
<InlineStack align="center">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</InlineStack>

{/* End alignment */}
<InlineStack align="end">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</InlineStack>

{/* Space between */}
<InlineStack align="space-between">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</InlineStack>
```

### Vertical Alignment (Block Align)

```tsx
{/* Center block alignment */}
<InlineStack blockAlign="center">
  <div style={{ height: '40px' }}>Tall item</div>
  <div style={{ height: '20px' }}>Short item</div>
</InlineStack>

{/* Baseline alignment */}
<InlineStack blockAlign="baseline">
  <div style={{ fontSize: '24px' }}>Large text</div>
  <div style={{ fontSize: '14px' }}>Small text</div>
</InlineStack>
```

### Direction

```tsx
{/* Reverse direction */}
<InlineStack direction="row-reverse">
  <div>First (appears last)</div>
  <div>Second (appears middle)</div>
  <div>Third (appears first)</div>
</InlineStack>
```

### Responsive Gap

```tsx
<InlineStack gap={{ xs: "200", md: "400", lg: "600" }}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</InlineStack>
```

### Semantic HTML Elements

```tsx
{/* As an unordered list */}
<InlineStack as="ul" gap="300">
  <li>List item 1</li>
  <li>List item 2</li>
  <li>List item 3</li>
</InlineStack>

{/* As a span for inline content */}
<InlineStack as="span" gap="100">
  <span>Inline item 1</span>
  <span>Inline item 2</span>
  <span>Inline item 3</span>
</InlineStack>
```

## Responsive Design

The InlineStack component supports responsive gap spacing through object syntax:

```tsx
<InlineStack gap={{ xs: "200", md: "400", lg: "600" }}>
  Responsive content
</InlineStack>
```

Breakpoints: `xs`, `sm`, `md`, `lg`, `xl`

## Best Practices

1. **Use semantic HTML elements** with the `as` prop when appropriate
2. **Leverage Polaris design tokens** for consistent spacing
3. **Use responsive gap** for mobile-first design
4. **Consider wrap behavior** for different screen sizes
5. **Use logical properties** (align/blockAlign) for internationalization support

## Related Components

- To display elements vertically, use the BlockStack component
- To create the large-scale structure of pages, use the InlineGrid component
- For more primitive layout control, use the Box component

## Migration from Polaris

This component provides 100% API compatibility with Shopify's Polaris InlineStack component. Simply replace your import:

```tsx
// Before
import { InlineStack } from '@shopify/polaris';

// After
import { InlineStack } from '@storeware/polaris';
```

All existing props and behaviors remain the same.

## Accessibility

- Uses semantic HTML elements when specified with the `as` prop
- Maintains proper focus order with direction changes
- Supports screen reader navigation through flex layout
- Respects user's motion preferences for animations

## Technical Details

- Built on CSS Flexbox for reliable cross-browser support
- Uses Tailwind CSS classes for styling
- Supports all modern browsers
- TypeScript support with full type safety
- Tree-shakeable for optimal bundle size

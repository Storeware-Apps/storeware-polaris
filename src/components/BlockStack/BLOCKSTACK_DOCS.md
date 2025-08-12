# BlockStack Component Documentation

## Overview

The BlockStack component provides 100% API compatibility with Shopify's Polaris BlockStack component while being built on shadcn/ui foundation with Tailwind CSS. Use to display children vertically and horizontally with full width by default. Based on CSS Flexbox.

## Installation

```bash
pnpm install @storeware/polaris
```

## Basic Usage

```tsx
import { BlockStack } from "@storeware/polaris";

function MyComponent() {
  return (
    <BlockStack gap="400">
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </BlockStack>
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

| Prop           | Type                                                                                  | Default     | Description                               |
| -------------- | ------------------------------------------------------------------------------------- | ----------- | ----------------------------------------- |
| `children`     | `React.ReactNode`                                                                     | -           | Content to display inside the block stack |
| `as`           | `'div' \| 'span' \| 'ul' \| 'ol' \| 'li' \| 'fieldset'`                               | `'div'`     | HTML Element type                         |
| `align`        | `'start' \| 'center' \| 'end' \| 'space-around' \| 'space-between' \| 'space-evenly'` | `'start'`   | Vertical alignment of children            |
| `inlineAlign`  | `'start' \| 'center' \| 'end' \| 'baseline' \| 'stretch'`                             | `'stretch'` | Horizontal alignment of children          |
| `gap`          | `SpaceScale \| ResponsiveGap`                                                         | -           | The spacing between children              |
| `id`           | `string`                                                                              | -           | HTML id attribute                         |
| `reverseOrder` | `boolean`                                                                             | `false`     | Reverse the render order of child items   |
| `role`         | `string`                                                                              | -           | Aria role                                 |

## Full-Width Behavior

By default, BlockStack displays children with full width using CSS Flexbox. The default `inlineAlign="stretch"` ensures that all child elements stretch to fill the available horizontal space, matching the official Shopify Polaris BlockStack behavior.

```tsx
// Children automatically take full width
<BlockStack gap="400">
  <TextField label="Full width input" />
  <Button>Full width button</Button>
  <Text>Full width text</Text>
</BlockStack>

// Override with custom alignment if needed
<BlockStack inlineAlign="center" gap="400">
  <Button>Centered button</Button>
</BlockStack>
```

### Space Scale Values

The `gap` prop accepts Polaris space scale tokens:

| Token    | Value   | Description            |
| -------- | ------- | ---------------------- |
| `"0"`    | `0px`   | No spacing             |
| `"025"`  | `1px`   | Extra tight spacing    |
| `"050"`  | `2px`   | Extra tight spacing    |
| `"100"`  | `4px`   | Tight spacing          |
| `"150"`  | `6px`   | Tight spacing          |
| `"200"`  | `8px`   | Base spacing           |
| `"300"`  | `12px`  | Loose spacing          |
| `"400"`  | `16px`  | Loose spacing          |
| `"500"`  | `20px`  | Extra loose spacing    |
| `"600"`  | `24px`  | Extra loose spacing    |
| `"800"`  | `32px`  | Loose spacing          |
| `"1000"` | `40px`  | Extra loose spacing    |
| `"1200"` | `48px`  | Extra loose spacing    |
| `"1600"` | `64px`  | Extra loose spacing    |
| `"2000"` | `80px`  | Extra loose spacing    |
| `"2400"` | `96px`  | Extra loose spacing    |
| `"2800"` | `112px` | Extra loose spacing    |
| `"3200"` | `128px` | Extra gigantic spacing |

## Examples

### Basic BlockStack

```tsx
<BlockStack>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</BlockStack>
```

### With Gap

```tsx
<BlockStack gap="500">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</BlockStack>
```

### Vertical Alignment

```tsx
{
  /* Center alignment */
}
<BlockStack align="center" gap="200">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</BlockStack>;

{
  /* Space between */
}
<BlockStack align="space-between" style={{ height: "200px" }}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</BlockStack>;
```

### Horizontal Alignment

```tsx
{
  /* Center alignment */
}
<BlockStack inlineAlign="center" gap="200">
  <div style={{ width: "100px" }}>Item 1</div>
  <div style={{ width: "150px" }}>Item 2</div>
  <div style={{ width: "80px" }}>Item 3</div>
</BlockStack>;

{
  /* End alignment */
}
<BlockStack inlineAlign="end" gap="200">
  <div style={{ width: "100px" }}>Item 1</div>
  <div style={{ width: "150px" }}>Item 2</div>
  <div style={{ width: "80px" }}>Item 3</div>
</BlockStack>;
```

### Reverse Order

```tsx
<BlockStack reverseOrder gap="200">
  <div>First Item (will appear last)</div>
  <div>Second Item</div>
  <div>Third Item (will appear first)</div>
</BlockStack>
```

### Different HTML Elements

```tsx
{
  /* As a list */
}
<BlockStack as="ul" gap="200">
  <li>List item 1</li>
  <li>List item 2</li>
  <li>List item 3</li>
</BlockStack>;

{
  /* As a fieldset for form grouping */
}
<BlockStack as="fieldset" gap="300">
  <legend>Form Section</legend>
  <input type="text" placeholder="Field 1" />
  <input type="text" placeholder="Field 2" />
  <input type="text" placeholder="Field 3" />
</BlockStack>;
```

## Responsive Design

The BlockStack component supports responsive gap spacing through object syntax:

```tsx
<BlockStack gap={{ xs: "200", md: "400", lg: "600" }}>
  Responsive content
</BlockStack>
```

Breakpoints: `xs`, `sm`, `md`, `lg`, `xl`

## Best Practices

1. **Use semantic HTML elements** with the `as` prop when appropriate
2. **Leverage Polaris design tokens** for consistent spacing
3. **Use responsive gap** for mobile-first design
4. **Consider alignment** for different content types
5. **Use logical properties** (align/inlineAlign) for internationalization support

## Related Components

- To display elements horizontally, use the InlineStack component
- To create the large-scale structure of pages, use the Grid component
- For more primitive layout control, use the Box component

## Migration from Polaris

This component provides 100% API compatibility with Shopify's Polaris BlockStack component. Simply replace your import:

```tsx
// Before
import { BlockStack } from "@shopify/polaris";

// After
import { BlockStack } from "@storeware/polaris";
```

All existing props and behaviors remain the same.

## Accessibility

- Uses semantic HTML elements when specified with the `as` prop
- Supports ARIA roles through the `role` prop
- Maintains logical tab order for keyboard navigation
- Compatible with screen readers through proper semantic structure

## Technical Details

- Built on CSS Flexbox with `flex-direction: column`
- Uses Tailwind CSS classes for styling
- Supports all Polaris design tokens
- Fully responsive with mobile-first approach
- TypeScript support with full type safety

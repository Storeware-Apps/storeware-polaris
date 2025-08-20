# Divider Component Documentation

## Overview

The Divider component provides 100% API compatibility with Shopify's Polaris Divider component while being built on shadcn/ui foundation with Tailwind CSS. Use to separate or group content.

## Installation

```bash
pnpm install @storeware/polaris
```

## Basic Usage

```tsx
import { Divider } from "@storeware/polaris";

function MyComponent() {
  return (
    <div>
      <div>Content above</div>
      <Divider />
      <div>Content below</div>
    </div>
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
| `borderColor` | `ColorBorderAlias \| "transparent"` | `"border-secondary"` | Divider border color |
| `borderWidth` | `BorderWidthScale` | `"025"` | Divider border width |
| `className` | `string` | - | Additional CSS class name |

### Border Color Values

The `borderColor` prop accepts Polaris color border tokens:

| Token | Description | Visual |
|-------|-------------|--------|
| `"border"` | Default border color | Gray-300 |
| `"border-secondary"` | Secondary border color (default) | Gray-200 |
| `"border-tertiary"` | Tertiary border color | Gray-100 |
| `"border-inverse"` | Inverse border color | Gray-800 |
| `"border-brand"` | Brand color border | Blue-600 |
| `"border-info"` | Info color border | Blue-500 |
| `"border-success"` | Success color border | Green-500 |
| `"border-warning"` | Warning color border | Yellow-500 |
| `"border-critical"` | Critical color border | Red-500 |
| `"transparent"` | Transparent border | Invisible |

### Border Width Values

The `borderWidth` prop accepts Polaris border width scale tokens:

| Token | Value | Description |
|-------|-------|-------------|
| `"0"` | `0px` | No border |
| `"025"` | `1px` | Thin border (default) |
| `"050"` | `2px` | Medium border |
| `"100"` | `4px` | Thick border |
| `"150"` | `6px` | Extra thick border |
| `"200"` | `8px` | Very thick border |
| `"300"` | `12px` | Ultra thick border |
| `"400"` | `16px` | Maximum thickness |
| `"500"` | `20px` | Extreme thickness |

## Examples

### Basic Divider

```tsx
<div>
  <p>Content above</p>
  <Divider />
  <p>Content below</p>
</div>
```

### Custom Border Color

```tsx
<div>
  <p>Success section</p>
  <Divider borderColor="border-success" />
  <p>Next section</p>
</div>
```

### Custom Border Width

```tsx
<div>
  <p>Section with thick divider</p>
  <Divider borderWidth="100" />
  <p>Next section</p>
</div>
```

### Combined Styling

```tsx
<div>
  <p>Important section</p>
  <Divider borderColor="border-critical" borderWidth="050" />
  <p>Next section</p>
</div>
```

### In Card Layout

```tsx
import { Card, BlockStack, Text, Divider } from "@storeware/polaris";

function CardWithDividers() {
  return (
    <Card>
      <BlockStack gap="400">
        <Text variant="headingMd">Section 1</Text>
        <Text>Content for section 1</Text>
        <Divider />
        <Text variant="headingMd">Section 2</Text>
        <Text>Content for section 2</Text>
        <Divider />
        <Text variant="headingMd">Section 3</Text>
        <Text>Content for section 3</Text>
      </BlockStack>
    </Card>
  );
}
```

### Transparent Divider (Spacing)

```tsx
<div>
  <p>Content with invisible separator</p>
  <Divider borderColor="transparent" />
  <p>Spaced content below</p>
</div>
```

## Accessibility

The Divider component renders as an HTML `<hr>` element, which is semantically appropriate for content separation. You can add additional accessibility attributes:

```tsx
<Divider role="separator" aria-label="End of section" />
```

## Best Practices

### Do

- Use dividers to separate distinct sections of content
- Choose appropriate border colors that match your content hierarchy
- Use consistent divider styling throughout your application
- Consider using transparent dividers for spacing without visual separation

### Don't

- Overuse dividers - they should enhance content organization, not clutter the interface
- Use dividers as the primary method for layout spacing
- Mix different divider styles inconsistently within the same context

## Type Definitions

```tsx
type ColorBorderAlias =
  | "border"
  | "border-secondary"
  | "border-tertiary"
  | "border-inverse"
  | "border-brand"
  | "border-info"
  | "border-success"
  | "border-warning"
  | "border-critical";

type BorderWidthScale =
  | "0"
  | "025"
  | "050"
  | "100"
  | "150"
  | "200"
  | "300"
  | "400"
  | "500";

interface DividerProps {
  borderColor?: ColorBorderAlias | "transparent";
  borderWidth?: BorderWidthScale;
  className?: string;
}
```

## Related Components

- **BlockStack**: Use for vertical layout with spacing between elements
- **InlineStack**: Use for horizontal layout with spacing between elements
- **Card**: Often contains dividers to separate content sections
- **Box**: Provides more complex layout and spacing options

# Bleed Component Documentation

## Overview

The Bleed component provides 100% API compatibility with Shopify's Polaris Bleed component while being built on shadcn/ui foundation with Tailwind CSS. Bleed applies negative margin to allow content to bleed out into the surrounding layout.

## Installation

```bash
pnpm install @storeware/polaris
```

## Basic Usage

```tsx
import { Bleed, Card, Text } from "@storeware/polaris";

function MyComponent() {
  return (
    <Card>
      <Text as="h2" variant="bodyMd">
        Content inside a card
      </Text>
      <Bleed marginInline="400">
        <div style={{ background: "lightblue", padding: "1rem" }}>
          This content bleeds horizontally
        </div>
      </Bleed>
    </Card>
  );
}
```

## Props

### Core Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | - | Content to display inside the bleed container |
| `marginInline` | `ResponsiveSpacing` | - | Negative horizontal space around children |
| `marginBlock` | `ResponsiveSpacing` | - | Negative vertical space around children |
| `marginBlockStart` | `ResponsiveSpacing` | - | Negative top space around children |
| `marginBlockEnd` | `ResponsiveSpacing` | - | Negative bottom space around children |
| `marginInlineStart` | `ResponsiveSpacing` | - | Negative left space around children |
| `marginInlineEnd` | `ResponsiveSpacing` | - | Negative right space around children |
| `className` | `string` | - | Additional CSS class name |

### Type Definitions

```tsx
type SpaceScale = 
  | "0" | "025" | "050" | "100" | "150" | "200" | "300" | "400" 
  | "500" | "600" | "800" | "1000" | "1200" | "1600" | "2000" 
  | "2400" | "2800" | "3200";

type BreakpointsAlias = "xs" | "sm" | "md" | "lg" | "xl";

type ResponsiveSpacing = SpaceScale | { [Breakpoint in BreakpointsAlias]?: SpaceScale };
```

## Examples

### Horizontal Bleed

```tsx
import { Bleed, Card, Text } from "@storeware/polaris";

function HorizontalBleedExample() {
  return (
    <Card>
      <Text as="h2" variant="bodyMd">
        Content inside a card
      </Text>
      <Bleed marginInline="400">
        <div style={{ background: "var(--p-color-text-info)", padding: "14px" }}>
          This content bleeds horizontally
        </div>
      </Bleed>
    </Card>
  );
}
```

### Vertical Bleed

```tsx
import { Bleed, Card, Text } from "@storeware/polaris";

function VerticalBleedExample() {
  return (
    <Card>
      <Text as="h2" variant="bodyMd">
        Content inside a card
      </Text>
      <Bleed marginBlock="400">
        <div style={{ background: "var(--p-color-text-info)", padding: "14px" }}>
          This content bleeds vertically
        </div>
      </Bleed>
      <Text as="p" variant="bodyMd">
        More content after the bleed
      </Text>
    </Card>
  );
}
```

### Specific Direction Bleed

```tsx
import { Bleed, Card, Text } from "@storeware/polaris";

function SpecificDirectionExample() {
  return (
    <div>
      {/* Top bleed */}
      <Card>
        <Text as="h3" variant="bodyMd">Top bleed</Text>
        <Bleed marginBlockStart="400">
          <div style={{ background: "lightblue", padding: "1rem" }}>
            Bleeds to the top
          </div>
        </Bleed>
      </Card>

      {/* Left bleed */}
      <Card>
        <Text as="h3" variant="bodyMd">Left bleed</Text>
        <Bleed marginInlineStart="400">
          <div style={{ background: "lightgreen", padding: "1rem" }}>
            Bleeds to the left
          </div>
        </Bleed>
      </Card>
    </div>
  );
}
```

### Responsive Bleed

```tsx
import { Bleed, Card, Text } from "@storeware/polaris";

function ResponsiveBleedExample() {
  return (
    <Card>
      <Text as="h2" variant="bodyMd">
        Responsive bleed
      </Text>
      <Bleed marginInline={{ xs: "200", md: "400", lg: "600" }}>
        <div style={{ background: "var(--p-color-text-info)", padding: "14px" }}>
          This bleed changes based on screen size
        </div>
      </Bleed>
    </Card>
  );
}
```

### Multiple Directions

```tsx
import { Bleed, Card, Text } from "@storeware/polaris";

function MultipleDirectionsExample() {
  return (
    <Card>
      <Text as="h2" variant="bodyMd">
        Multiple direction bleed
      </Text>
      <Bleed marginInline="400" marginBlockStart="200">
        <div style={{ background: "var(--p-color-text-info)", padding: "14px" }}>
          Bleeds horizontally and to the top
        </div>
      </Bleed>
    </Card>
  );
}
```

## Spacing Scale

The Bleed component uses Polaris design tokens for consistent spacing:

| Token | Value | Description |
|-------|-------|-------------|
| `0` | 0px | No spacing |
| `025` | 1px | Extra tight |
| `050` | 2px | Extra tight |
| `100` | 4px | Tight |
| `150` | 6px | Tight |
| `200` | 8px | Base |
| `300` | 12px | Loose |
| `400` | 16px | Loose |
| `500` | 20px | Extra loose |
| `600` | 24px | Extra loose |
| `800` | 32px | Extra loose |
| `1000` | 40px | Extra loose |
| `1200` | 48px | Extra loose |
| `1600` | 64px | Extra loose |
| `2000` | 80px | Extra loose |
| `2400` | 96px | Extra loose |
| `2800` | 112px | Extra loose |
| `3200` | 128px | Extra loose |

## Best Practices

### Do

- Use Bleed to create visual emphasis by breaking out of container boundaries
- Choose bleed values that work within the containing layout
- Use responsive values for different screen sizes
- Combine with Card or other container components for best results

### Don't

- Let content go beyond the edges of the parent container
- Use excessive bleed values that break the layout
- Forget to test responsive behavior across different screen sizes

## Accessibility

The Bleed component is purely presentational and doesn't affect accessibility. Ensure that any content within the Bleed component maintains proper semantic structure and accessibility features.

## CSS Logical Properties

Bleed props are named following the convention of CSS logical properties:

- `marginInline` corresponds to `margin-inline` (horizontal margins)
- `marginBlock` corresponds to `margin-block` (vertical margins)
- `marginBlockStart` corresponds to `margin-block-start` (top margin in LTR)
- `marginBlockEnd` corresponds to `margin-block-end` (bottom margin in LTR)
- `marginInlineStart` corresponds to `margin-inline-start` (left margin in LTR)
- `marginInlineEnd` corresponds to `margin-inline-end` (right margin in LTR)

Learn more about [CSS logical properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties).

## Related Components

- **Box**: For general layout and spacing
- **Card**: For content containers that work well with Bleed
- **Text**: For typography within Bleed components

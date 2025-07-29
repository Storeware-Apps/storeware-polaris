# Card Component Documentation

## Overview

The Card component provides 100% API compatibility with Shopify's Polaris Card component while being built on shadcn/ui foundation with Tailwind CSS. Cards are used to group similar concepts and tasks together for merchants to scan, read, and get things done. It displays content in a familiar and recognizable style.

## Installation

```bash
pnpm install @storeware/polaris
```

## Basic Usage

```tsx
import { Card, Text } from "@storeware/polaris";

function MyComponent() {
  return (
    <Card>
      <Text as="h2" variant="bodyMd">
        Content inside a card
      </Text>
    </Card>
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

- **`children`** (React.ReactNode): Card content
- **`background`** (ColorBackgroundAlias): Background color (defaults to 'bg-surface')
- **`padding`** (SpaceScale | ResponsiveSpacing): The spacing around the card
- **`roundedAbove`** ("xs" | "sm" | "md" | "lg" | "xl"): Border radius value above a set breakpoint

## Examples

### Default Card

By default, cards have an 8px border radius and uses `--p-color-bg-surface` as the background and `--p-shadow-300` as the shadow. There is padding of space-400 (16px) around children.

```tsx
import { Card, Text } from "@storeware/polaris";

function DefaultCard() {
  return (
    <Card>
      <Text as="h2" variant="bodyMd">
        Content inside a card
      </Text>
    </Card>
  );
}
```

### With Subdued Background

```tsx
import { Card, Text } from "@storeware/polaris";

function SubduedCard() {
  return (
    <Card background="bg-surface-subdued">
      <Text as="h2" variant="bodyMd">
        Content with subdued background
      </Text>
    </Card>
  );
}
```

### With Custom Padding

```tsx
import { Card, Text } from "@storeware/polaris";

function CustomPaddingCard() {
  return (
    <Card padding="600">
      <Text as="h2" variant="bodyMd">
        Content with larger padding
      </Text>
    </Card>
  );
}
```

### With Responsive Padding

```tsx
import { Card, Text } from "@storeware/polaris";

function ResponsivePaddingCard() {
  return (
    <Card padding={{ xs: "400", sm: "500", md: "600" }}>
      <Text as="h2" variant="bodyMd">
        Content with responsive padding
      </Text>
    </Card>
  );
}
```

### With Responsive Border Radius

```tsx
import { Card, Text } from "@storeware/polaris";

function ResponsiveBorderRadiusCard() {
  return (
    <Card roundedAbove="md">
      <Text as="h2" variant="bodyMd">
        Content with border radius applied from medium breakpoint and up
      </Text>
    </Card>
  );
}
```

### With Multiple Elements

```tsx
import { Card, Text, Button, ButtonGroup } from "@storeware/polaris";

function ComplexCard() {
  return (
    <Card>
      <div className="space-y-4">
        <Text as="h2" variant="headingMd">
          Order #1001
        </Text>
        <Text variant="bodyMd">
          This order was placed on March 15, 2024 and is ready for fulfillment.
        </Text>
        <ButtonGroup>
          <Button variant="primary">Fulfill order</Button>
          <Button>View details</Button>
        </ButtonGroup>
      </div>
    </Card>
  );
}
```

### With Different Background Colors

```tsx
import { Card, Text } from "@storeware/polaris";

function ColoredCards() {
  return (
    <div className="space-y-4">
      <Card background="bg-surface-success">
        <Text variant="bodyMd">Success background</Text>
      </Card>
      
      <Card background="bg-surface-caution">
        <Text variant="bodyMd">Caution background</Text>
      </Card>
      
      <Card background="bg-surface-critical">
        <Text variant="bodyMd">Critical background</Text>
      </Card>
      
      <Card background="bg-surface-highlight">
        <Text variant="bodyMd">Highlight background</Text>
      </Card>
    </div>
  );
}
```

## Background Colors

The Card component supports all Polaris background color tokens:

- **Surface colors**: `bg-surface`, `bg-surface-subdued`, `bg-surface-neutral`, etc.
- **State colors**: `bg-surface-success`, `bg-surface-caution`, `bg-surface-critical`, `bg-surface-warning`
- **Brand colors**: `bg-surface-brand`, `bg-surface-brand-subdued`
- **Interactive colors**: `bg-surface-hover`, `bg-surface-pressed`, `bg-surface-depressed`

## Padding Scale

The padding prop accepts Polaris space scale values:

- **`0`**: No padding
- **`025`** - **`050`**: Very small padding (2px - 4px)
- **`100`** - **`200`**: Small padding (8px - 16px)
- **`300`** - **`500`**: Medium padding (24px - 40px)
- **`600`** - **`1000`**: Large padding (48px - 80px)
- **`1200`** and above: Extra large padding (96px+)

## Responsive Padding

You can specify different padding values for different breakpoints:

```tsx
<Card padding={{ xs: "400", sm: "500", lg: "600" }}>
  Content with responsive padding
</Card>
```

## Best Practices

Cards should:

- Group related information
- Display information in a way that prioritizes what the merchant needs to know most first
- Use headings that set clear expectations about the card's purpose
- Stick to single user flows or break more complicated flows into multiple sections
- Avoid too many call-to-action buttons or links and only one primary call to action per card
- Use calls to action on the bottom of the card for next steps and use the space in the upper right corner of the card for persistent, optional actions (such as Edit)

## Accessibility

- Cards are semantic containers that help organize content
- Use proper heading hierarchy within cards
- Ensure sufficient color contrast for text on colored backgrounds
- Cards should be keyboard navigable when they contain interactive elements

## Compatibility

This component maintains 100% API compatibility with Shopify's Polaris Card component, making it a drop-in replacement for existing Polaris applications.

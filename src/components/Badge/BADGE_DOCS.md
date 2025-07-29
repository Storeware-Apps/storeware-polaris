# Badge Component Documentation

## Overview

The Badge component provides 100% API compatibility with Shopify's Polaris Badge component while being built on shadcn/ui foundation with Tailwind CSS. Badges are used to inform merchants of the tone of an object or of an action that's been taken.

## Installation

```bash
pnpm install @storeware/polaris
```

## Basic Usage

```tsx
import { Badge } from "@storeware/polaris";

function MyComponent() {
  return <Badge>Fulfilled</Badge>;
}
```

## Props

### Core Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | The content to display inside the badge |
| `tone` | `BadgeTone` | `"default"` | Set the color of the badge for the given tone |
| `progress` | `BadgeProgress` | `"complete"` | Set the progress of the badge |
| `icon` | `React.FunctionComponent \| "placeholder" \| string` | - | Icon to display in the badge |
| `size` | `BadgeSize` | `"medium"` | Size of the badge |
| `className` | `string` | - | Additional CSS class name |

### Enhanced Props (shadcn/ui)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `asChild` | `boolean` | `false` | Use the Slot component for composition |

## Type Definitions

### BadgeTone

```tsx
type BadgeTone =
  | "default"
  | "success"
  | "critical"
  | "warning"
  | "attention"
  | "info"
  | "new"
  | "read-only"
  | "enabled"
  | "subdued";
```

### BadgeProgress

```tsx
type BadgeProgress = "incomplete" | "partiallyComplete" | "complete";
```

### BadgeSize

```tsx
type BadgeSize = "small" | "medium";
```

## Examples

### Basic Badge

```tsx
<Badge>Fulfilled</Badge>
```

### Badge with Tone

```tsx
<Badge tone="success">Paid</Badge>
<Badge tone="critical">Error</Badge>
<Badge tone="warning">Pending</Badge>
<Badge tone="info">Information</Badge>
```

### Badge with Progress

```tsx
<Badge progress="incomplete">In Progress</Badge>
<Badge progress="partiallyComplete">Partially Done</Badge>
<Badge progress="complete">Completed</Badge>
```

### Badge with Icon

```tsx
import { CheckIcon, AlertTriangleIcon } from "@shopify/polaris-icons";

<Badge tone="success" icon={CheckIcon}>Verified</Badge>
<Badge tone="critical" icon={AlertTriangleIcon}>Alert</Badge>
<Badge icon="placeholder">Placeholder</Badge>
<Badge icon="★">Star</Badge>
```

### Badge Sizes

```tsx
<Badge size="small">Small Badge</Badge>
<Badge size="medium">Medium Badge</Badge>
```

### Complex Badge

```tsx
<Badge
  tone="success"
  size="small"
  progress="partiallyComplete"
  icon={CheckIcon}
>
  Processing
</Badge>
```

## Tone Guidelines

### Financial Status Badges

- **Authorized**: `<Badge tone="warning">Authorized</Badge>`
- **Pending**: `<Badge tone="attention">Pending</Badge>`
- **Paid**: `<Badge tone="success">Paid</Badge>`
- **Unpaid**: `<Badge tone="critical">Unpaid</Badge>`
- **Voided**: `<Badge tone="subdued">Voided</Badge>`
- **Partially paid**: `<Badge tone="warning">Partially paid</Badge>`
- **Partially refunded**: `<Badge tone="warning">Partially refunded</Badge>`
- **Refunded**: `<Badge tone="info">Refunded</Badge>`

### Fulfillment Status Badges

- **Fulfilled**: `<Badge tone="success">Fulfilled</Badge>`
- **Complete**: `<Badge tone="success">Complete</Badge>`
- **Partial**: `<Badge tone="warning">Partial</Badge>`
- **Unfulfilled**: `<Badge tone="critical">Unfulfilled</Badge>`
- **Restocked**: `<Badge tone="info">Restocked</Badge>`

## Best Practices

### Do

- Use established color patterns so merchants can quickly identify tone or importance
- Use clear, scannable text labels
- Position badges to clearly identify the object they're labeling
- Use single words to describe the tone of an object
- Describe the tone in past tense (e.g., "refunded" not "refund")

### Don't

- Don't use alternatives to existing badge options without good reason
- Don't use more than two words unless describing a complex state
- Don't use present or future tense for status descriptions

## Content Guidelines

### Badge Labels

Badge labels should:

- Use a single word to describe the tone of an object
- Only use two words if you need to describe a complex state (e.g., "Partially refunded")
- Always describe the tone in the past tense (e.g., "refunded" not "refund")

## Accessibility

- Badges include proper focus management with keyboard navigation support
- Color information is supplemented with text content for screen readers
- Icons include appropriate sizing and spacing for readability
- Focus indicators are clearly visible and meet WCAG guidelines

## Related Components

- **[Text](../Text/TEXT_DOCS.md)**: For general text content and typography
- **[Button](../Button/BUTTON_DOCS.md)**: For interactive actions
- **[Card](../Card/CARD_DOCS.md)**: For grouping related content

## Technical Details

### CSS Classes

The Badge component uses Tailwind CSS classes for styling:

- Base classes: `inline-flex items-center justify-center whitespace-nowrap font-sans text-xs font-medium leading-none rounded-md border transition-colors`
- Focus classes: `focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2`
- Size-specific classes for height and padding
- Tone-specific classes for background, text, and border colors
- Progress-specific classes for opacity

### Performance

- Lightweight implementation with minimal bundle impact
- Uses React.forwardRef for proper ref forwarding
- Optimized icon rendering with memoization
- Tree-shakeable exports for optimal bundle size

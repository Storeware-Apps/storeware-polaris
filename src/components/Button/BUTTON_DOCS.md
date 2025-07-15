# Button Component Documentation

## Overview

The Button component provides 100% API compatibility with Shopify's Polaris Button component while being built on shadcn/ui foundation with Tailwind CSS. This component combines the familiar Polaris design system with modern React patterns and excellent TypeScript support.

## Installation

```bash
pnpm install @storeware/polaris
```

## Basic Usage

```tsx
import { Button } from "@storeware/polaris";

function MyComponent() {
  return <Button onClick={() => console.log("Clicked!")}>Click me</Button>;
}
```

## Import Styles

Make sure to import the component styles in your application:

```tsx
import "@storeware/polaris/styles";
```

## Button Variants

### Default Variant

The standard button with Polaris default styling (white background with subtle shadow).

```tsx
<Button variant="default">Default Button</Button>
// or simply
<Button>Default Button</Button>
```

**Visual Appearance**: White background with gray text and subtle shadow styling that matches Polaris design.

### Primary Variant

Main call-to-action buttons with dark background.

```tsx
<Button variant="primary">Primary Button</Button>
```

**Visual Appearance**: Dark gray/black background with white text, used for primary actions.

### Secondary Variant

Secondary actions with light gray background.

```tsx
<Button variant="secondary">Secondary Button</Button>
```

**Visual Appearance**: Light gray background with dark text, used for secondary actions.

### Tertiary Variant

Outlined buttons for less prominent actions.

```tsx
<Button variant="tertiary">Tertiary Button</Button>
```

**Visual Appearance**: White background with gray border and dark text.

### Plain Variant

Link-style buttons for navigation with blue text.

```tsx
<Button variant="plain">Plain Button</Button>
```

**Visual Appearance**: Transparent background with blue text, underlines on hover.

### MonochromePlain Variant

Muted link-style buttons with gray text.

```tsx
<Button variant="monochromePlain">Monochrome Plain</Button>
```

**Visual Appearance**: Transparent background with muted gray text, underlines on hover.

## Button Sizes

All button variants support consistent sizing:

```tsx
<Button size="micro">Micro Button</Button>     // Compact size
<Button size="slim">Slim Button</Button>       // Tight spaces
<Button size="medium">Medium Button</Button>   // Default size
<Button size="large">Large Button</Button>     // Prominent actions
```

## Props Documentation

### Core Props

| Prop        | Type            | Default     | Description                              |
| ----------- | --------------- | ----------- | ---------------------------------------- |
| `children`  | `ReactNode`     | -           | The content to display inside the button |
| `variant`   | `ButtonVariant` | `"default"` | Visual appearance variant                |
| `size`      | `ButtonSize`    | `"medium"`  | Button size                              |
| `disabled`  | `boolean`       | `false`     | Disables the button                      |
| `loading`   | `boolean`       | `false`     | Shows spinner and disables interaction   |
| `onClick`   | `() => void`    | -           | Click event handler                      |
| `className` | `string`        | -           | Additional CSS classes                   |

### Layout Props

| Prop        | Type              | Default    | Description                       |
| ----------- | ----------------- | ---------- | --------------------------------- |
| `fullWidth` | `boolean`         | `false`    | Makes button fill container width |
| `textAlign` | `ButtonTextAlign` | `"center"` | Text alignment within button      |

### Link Props

| Prop       | Type                | Default | Description                  |
| ---------- | ------------------- | ------- | ---------------------------- |
| `url`      | `string`            | -       | Makes button render as link  |
| `external` | `boolean`           | `false` | Opens link in new tab        |
| `target`   | `ButtonTarget`      | -       | Link target attribute        |
| `download` | `string \| boolean` | -       | Download attribute for links |

### Visual Enhancement Props

| Prop              | Type               | Default     | Description                           |
| ----------------- | ------------------ | ----------- | ------------------------------------- |
| `icon`            | `ReactNode`        | -           | Icon to display before text           |
| `disclosure`      | `ButtonDisclosure` | -           | Disclosure arrow icon                 |
| `tone`            | `ButtonTone`       | `"default"` | Color treatment (success, critical)   |
| `pressed`         | `boolean`          | `false`     | Pressed state styling                 |
| `removeUnderline` | `boolean`          | `false`     | Removes underline from plain variants |

### Accessibility Props

| Prop                 | Type                | Default | Description                       |
| -------------------- | ------------------- | ------- | --------------------------------- |
| `accessibilityLabel` | `string`            | -       | Screen reader label               |
| `ariaControls`       | `string`            | -       | ID of controlled element          |
| `ariaExpanded`       | `boolean`           | -       | Expanded state for screen readers |
| `ariaDescribedBy`    | `string`            | -       | ID of describing element          |
| `ariaChecked`        | `"true" \| "false"` | -       | Checked state for toggles         |

## Advanced Usage Examples

### Button with Icon

```tsx
import { CartIcon } from "@shopify/polaris-icons";

<Button variant="primary" icon={<CartIcon />}>
  Add to Cart
</Button>;
```

### Loading State

```tsx
<Button variant="primary" loading>
  Processing...
</Button>
```

### Full Width Button

```tsx
<Button variant="primary" fullWidth>
  Full Width Button
</Button>
```

### Button as Link

```tsx
<Button url="https://example.com" external>
  External Link
</Button>
```

### Button with Disclosure

```tsx
<Button disclosure="down">More Options</Button>
```

### Tone Variants

```tsx
<Button variant="primary" tone="success">Success Action</Button>
<Button variant="primary" tone="critical">Delete Item</Button>
```

### Custom Styling

```tsx
<Button className="custom-button-class" variant="primary">
  Custom Styled Button
</Button>
```

## Type Definitions

```tsx
type ButtonVariant =
  | "default"
  | "plain"
  | "primary"
  | "secondary"
  | "tertiary"
  | "monochromePlain";
type ButtonSize = "medium" | "large" | "micro" | "slim";
type ButtonTone = "success" | "critical";
type ButtonTextAlign = "start" | "center" | "end" | "left" | "right";
type ButtonDisclosure = boolean | "up" | "down" | "select";
type ButtonTarget = "_blank" | "_self" | "_parent" | "_top";
```

## Best Practices

1. **Use Primary sparingly**: Only use primary variant for the main call-to-action on a page
2. **Consistent sizing**: Maintain consistent button sizes within the same interface section
3. **Loading states**: Always provide loading states for async operations
4. **Accessibility**: Use `accessibilityLabel` for buttons with only icons
5. **External links**: Always use `external` prop for external URLs

## Compatibility

This component maintains 100% API compatibility with Shopify's Polaris Button component, making it a drop-in replacement for existing Polaris applications.

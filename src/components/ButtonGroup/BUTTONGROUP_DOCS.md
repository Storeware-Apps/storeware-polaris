# ButtonGroup Component Documentation

## Overview

The ButtonGroup component provides 100% API compatibility with Shopify's Polaris ButtonGroup component while being built on shadcn/ui foundation with Tailwind CSS. This component displays multiple related actions stacked or in a horizontal row to help with arrangement and spacing.

## Installation

```bash
pnpm install @storeware/polaris
```

## Basic Usage

```tsx
import { ButtonGroup, Button } from "@storeware/polaris";

function MyComponent() {
  return (
    <ButtonGroup>
      <Button>Cancel</Button>
      <Button variant="primary">Save</Button>
    </ButtonGroup>
  );
}
```

## Import Styles

Make sure to import the component styles in your application:

```tsx
import "@storeware/polaris/styles";
```

## ButtonGroup Variants

### Default ButtonGroup

The standard button group with configurable spacing between buttons.

```tsx
<ButtonGroup>
  <Button>Cancel</Button>
  <Button variant="primary">Save</Button>
</ButtonGroup>
```

**Visual Appearance**: Buttons are displayed in a horizontal row with standard spacing.

### Segmented ButtonGroup

Connected buttons with shared borders for toggle-like behavior, matching Shopify Polaris design specifications.

```tsx
<ButtonGroup variant="segmented">
  <Button pressed>Day</Button>
  <Button>Week</Button>
  <Button>Month</Button>
</ButtonGroup>
```

**Visual Appearance**: Buttons are visually connected with no gaps between them, shared borders, and subtle dividers, creating a cohesive segmented control appearance that matches Polaris design system specifications.

## Gap Options

Control the spacing between buttons (applies to default variant only):

```tsx
<ButtonGroup gap="extraTight">  {/* Minimal spacing */}
<ButtonGroup gap="tight">       {/* Standard spacing - default */}
<ButtonGroup gap="loose">       {/* Generous spacing */}
```

**Note**: When using `variant="segmented"`, the gap property is automatically overridden to ensure buttons are connected without gaps, matching Polaris design specifications.

## Props Documentation

### Core Props

| Prop        | Type                 | Default   | Description                               |
| ----------- | -------------------- | --------- | ----------------------------------------- |
| `children`  | `React.ReactNode`    | -         | Button components to display in the group |
| `gap`       | `ButtonGroupGap`     | `"tight"` | Spacing between button group items        |
| `variant`   | `ButtonGroupVariant` | -         | Styling variant for group (segmented)     |
| `className` | `string`             | -         | Additional CSS classes                    |

### Layout Props

| Prop           | Type      | Default | Description                                 |
| -------------- | --------- | ------- | ------------------------------------------- |
| `fullWidth`    | `boolean` | `false` | Buttons stretch/shrink to occupy full width |
| `connectedTop` | `boolean` | `false` | Remove top left and right border radius     |
| `noWrap`       | `boolean` | `false` | Prevent buttons from wrapping to next line  |

## Advanced Usage Examples

### Full Width ButtonGroup

```tsx
<ButtonGroup fullWidth>
  <Button>Cancel</Button>
  <Button variant="primary">Save</Button>
</ButtonGroup>
```

### Connected Top (for stacked layouts)

```tsx
<div className="bg-gray-100 rounded-t-lg p-4">
  <p>Content above</p>
</div>
<ButtonGroup connectedTop>
  <Button>Cancel</Button>
  <Button variant="primary">Save</Button>
</ButtonGroup>
```

### No Wrap (prevent line breaks)

```tsx
<div className="w-40">
  <ButtonGroup noWrap>
    <Button>Very Long Button Text</Button>
    <Button>Another Long Button</Button>
  </ButtonGroup>
</div>
```

### ButtonGroup with Icons

```tsx
import { PlusIcon, EditIcon, DeleteIcon } from "@shopify/polaris-icons";

<ButtonGroup>
  <Button icon={<PlusIcon />}>Add</Button>
  <Button icon={<EditIcon />} variant="secondary">
    Edit
  </Button>
  <Button icon={<DeleteIcon />} tone="critical">
    Delete
  </Button>
</ButtonGroup>;
```

### Segmented Toggle Controls

```tsx
<ButtonGroup variant="segmented">
  <Button pressed>List View</Button>
  <Button>Grid View</Button>
  <Button>Card View</Button>
</ButtonGroup>
```

### Multiple Button Variants

```tsx
<ButtonGroup gap="loose">
  <Button variant="tertiary">Cancel</Button>
  <Button variant="secondary">Draft</Button>
  <Button variant="primary">Publish</Button>
</ButtonGroup>
```

## Type Definitions

```tsx
type ButtonGroupGap = "extraTight" | "tight" | "loose";
type ButtonGroupVariant = "segmented";

interface PolarisButtonGroupProps {
  gap?: ButtonGroupGap;
  variant?: ButtonGroupVariant;
  fullWidth?: boolean;
  connectedTop?: boolean;
  noWrap?: boolean;
  children?: React.ReactNode;
  className?: string;
}
```

## Best Practices

1. **Related Actions**: Only group buttons that have a logical relationship
2. **Button Limits**: Use up to 6 buttons maximum for optimal usability
3. **Mobile Consideration**: Be thoughtful about how multiple buttons work on small screens
4. **Segmented Usage**: Use segmented variant for mutually exclusive options
5. **Consistent Styling**: Maintain consistent button variants within the same group when possible
6. **Accessibility**: Ensure proper focus management and keyboard navigation

## Compatibility

This component maintains 100% API compatibility with Shopify's Polaris ButtonGroup component, making it a drop-in replacement for existing Polaris applications.

## Integration with Button Component

The ButtonGroup component is designed to work seamlessly with our Button component, maintaining all the styling consistency and API compatibility established in the Button implementation.

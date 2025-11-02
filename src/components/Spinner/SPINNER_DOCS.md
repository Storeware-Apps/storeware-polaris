# Spinner Component Documentation

## Overview

The Spinner component provides 100% API compatibility with Shopify's Polaris Spinner component while being built on shadcn/ui foundation with Tailwind CSS. Spinners are used to notify merchants that their action is being processed. For loading states, spinners should only be used for content that can't be represented with skeleton loading components, like for data charts.

## Installation

```bash
pnpm install @storeware/polaris
```

## Basic Usage

```tsx
import { Spinner } from "@storeware/polaris";

function MyComponent() {
  return <Spinner accessibilityLabel="Loading" size="large" />;
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
| `size` | `'small' \| 'large'` | `'large'` | Size of spinner |
| `accessibilityLabel` | `string` | - | Accessible label for the spinner |
| `hasFocusableParent` | `boolean` | `false` | Allows the component to apply the correct accessibility roles based on focus |
| `className` | `string` | - | Additional CSS class name |

## Examples

### Default Spinner

```tsx
import { Spinner } from "@storeware/polaris";

function Example() {
  return <Spinner accessibilityLabel="Spinner example" size="large" />;
}
```

### Small Spinner

```tsx
import { Spinner } from "@storeware/polaris";

function Example() {
  return <Spinner accessibilityLabel="Small spinner example" size="small" />;
}
```

### With Focus Management

```tsx
import { Spinner } from "@storeware/polaris";

function Example() {
  return (
    <Spinner
      accessibilityLabel="Loading form field"
      hasFocusableParent={false}
    />
  );
}
```

## Accessibility

SVGs are often conveyed inconsistently to assistive technologies. The Spinner component's accessibility is also highly contextual. When the parent component is focusable, you'll need to set the `hasFocusableParent` prop for the appropriate role attribute to be applied.

For optimal user experience, use the `accessibilityLabel` prop to let assistive technology users know the purpose of the spinner.

## Best Practices

The spinner component should:

- Notify merchants that their request has been received and the action will soon complete.
- Not be used to give feedback for an entire page load.
- White can only be used with small spinners on actionable components like buttons.
- On web, be used in conjunction with skeleton loading to represent non-typographic content. For example, line graphs on the Merchant analytics dashboard.

## Content Guidelines

### Accessibility Label

Spinner accessibility label should:

- Accurately explain the state of the requested action. For example, "Loading", "Submitting", "Processing".
- Use as few words to describe the state as possible.

## Related Components

- To improve user experience and reduce the appearance of long loading times, use the Progress bar component.
- To better represent loading content, use Skeleton page along with Skeleton body text and Skeleton display text components.

## Technical Details

### Component Structure

The Spinner component is built using:
- **React.forwardRef** for ref forwarding
- **CVA (Class Variance Authority)** for variant management
- **Tailwind CSS** for styling
- **CSS animations** for the spinning effect

### Styling

The component uses Tailwind's `animate-spin` utility for the rotation animation and applies different sizes based on the `size` prop:
- **Small**: 20px (h-5 w-5) with 2px border
- **Large**: 44px (h-11 w-11) with 3px border

## TypeScript Support

The component is fully typed with TypeScript:

```tsx
import type { SpinnerProps, SpinnerSize } from "@storeware/polaris";
```

## Compatibility

This component maintains 100% API compatibility with Shopify's Polaris Spinner component, ensuring a seamless migration path and consistent behavior across your application.


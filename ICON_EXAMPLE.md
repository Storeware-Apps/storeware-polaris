# Icon Component Example

The Icon component has been successfully implemented with 100% Polaris API compatibility. Here are some usage examples:

## Basic Usage

```tsx
import { Icon } from "@storeware/polaris";
import { PlusCircleIcon } from "@shopify/polaris-icons";

// Basic icon
<Icon source={PlusCircleIcon} />

// Icon with tone
<Icon source={AlertTriangleIcon} tone="critical" />

// Icon with accessibility label
<Icon source={PlusCircleIcon} accessibilityLabel="Add new item" />
```

## All Available Tones

```tsx
// Base tones
<Icon source={PlusCircleIcon} tone="base" />
<Icon source={PlusCircleIcon} tone="inherit" />
<Icon source={PlusCircleIcon} tone="subdued" />

// Status tones
<Icon source={AlertTriangleIcon} tone="caution" />
<Icon source={AlertTriangleIcon} tone="warning" />
<Icon source={AlertTriangleIcon} tone="critical" />
<Icon source={CheckCircleIcon} tone="success" />
<Icon source={InfoIcon} tone="info" />

// Interactive tones
<Icon source={StarIcon} tone="primary" />
<Icon source={PlusCircleIcon} tone="interactive" />
<Icon source={PlusCircleIcon} tone="emphasis" />
<Icon source={HeartIcon} tone="magic" />

// Text tones
<Icon source={AlertTriangleIcon} tone="textCaution" />
<Icon source={AlertTriangleIcon} tone="textWarning" />
<Icon source={AlertTriangleIcon} tone="textCritical" />
<Icon source={CheckCircleIcon} tone="textSuccess" />
<Icon source={InfoIcon} tone="textInfo" />
<Icon source={StarIcon} tone="textPrimary" />
<Icon source={HeartIcon} tone="textMagic" />
```

## Custom SVG

```tsx
const customSvg = (
  <svg viewBox="0 0 20 20" fill="currentColor">
    <path d="M10 2L3 7v11h4v-6h6v6h4V7l-7-5z" />
  </svg>
);

<Icon source={customSvg} tone="primary" />
```

## Integration with Button

```tsx
import { Button, Icon } from "@storeware/polaris";
import { CartIcon } from "@shopify/polaris-icons";

// Using Icon component
<Button icon={<Icon source={CartIcon} />}>
  Add to Cart
</Button>

// Or directly with icon prop (recommended)
<Button icon={CartIcon}>
  Add to Cart
</Button>
```

## Features Implemented

✅ **100% Polaris API Compatibility**
- `source` prop for icon content
- `tone` prop with all 19 tone variants
- `accessibilityLabel` prop for screen readers

✅ **shadcn/ui Foundation**
- `className` prop for custom styling
- React.forwardRef support
- CVA variants for consistent styling

✅ **TypeScript Support**
- Full type definitions
- IntelliSense support
- Type-safe props

✅ **Accessibility**
- Proper ARIA attributes
- Screen reader support
- Follows Polaris accessibility guidelines

✅ **Testing**
- Comprehensive Vitest test suite
- 14 test cases covering all functionality

✅ **Documentation**
- Complete documentation with examples
- Storybook stories with all variants
- Integration examples

The Icon component is now ready for use and follows all the established patterns in the component library!

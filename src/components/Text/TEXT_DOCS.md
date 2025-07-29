# Text Component Documentation

## Overview

The Text component provides 100% API compatibility with Shopify's Polaris Text component while being built on shadcn/ui foundation with Tailwind CSS. Typography helps establish hierarchy and communicate important content by creating clear visual patterns.

## Installation

```bash
pnpm install @storeware/polaris
```

## Basic Usage

```tsx
import { Text } from "@storeware/polaris";

function MyComponent() {
  return <Text variant="headingLg" as="h2">Online store dashboard</Text>;
}
```

## Import Styles

Make sure to import the component styles in your application:

```tsx
import "@storeware/polaris/styles";
```

## Text Variants

### Heading Variants

Use heading variants to create various levels of hierarchy on the page.

```tsx
<Text variant="heading3xl" as="h1">Largest heading</Text>
<Text variant="heading2xl" as="h2">Second largest heading</Text>
<Text variant="headingXl" as="h3">Extra large heading</Text>
<Text variant="headingLg" as="h4">Large heading</Text>
<Text variant="headingMd" as="h5">Medium heading</Text>
<Text variant="headingSm" as="h6">Small heading</Text>
<Text variant="headingXs" as="h6">Extra small heading</Text>
```

**Visual Appearance**: Heading variants use bold or semibold font weights and are designed to create clear visual hierarchy. Larger heading variants (3xl, 2xl, xl, lg) are responsive and scale appropriately on different screen sizes.

### Body Variants

Use body variants for regular text content.

```tsx
<Text variant="bodyLg">Large body text for emphasis</Text>
<Text variant="bodyMd">Default body text</Text>
<Text variant="bodySm">Small body text for captions</Text>
<Text variant="bodyXs">Extra small body text</Text>
```

**Visual Appearance**: Body variants use regular font weight and are optimized for readability in content areas.

## Text Tones

### Base Tone (Default)

Standard text color for most content.

```tsx
<Text tone="base">Standard text color</Text>
```

### Subdued Tone

For secondary or less important information.

```tsx
<Text tone="subdued">Secondary information</Text>
```

### Success Tone

For positive states and success messages.

```tsx
<Text tone="success">Operation completed successfully</Text>
```

### Critical Tone

For error states and critical information.

```tsx
<Text tone="critical">Error: Please fix this issue</Text>
```

### Caution Tone

For warning states and cautionary information.

```tsx
<Text tone="caution">Warning: Please review this</Text>
```

### Disabled Tone

For disabled or inactive content.

```tsx
<Text tone="disabled">This feature is disabled</Text>
```

### Inverse Tones

For text on dark backgrounds.

```tsx
<div className="bg-gray-900 p-4">
  <Text tone="text-inverse">Primary text on dark background</Text>
  <Text tone="text-inverse-secondary">Secondary text on dark background</Text>
</div>
```

### Magic Tones

For special features and premium content.

```tsx
<Text tone="magic">Premium feature</Text>
<Text tone="magic-subdued">Premium feature subtitle</Text>
```

## Text Alignment

Control horizontal text alignment.

```tsx
<Text alignment="start">Left aligned text</Text>
<Text alignment="center">Center aligned text</Text>
<Text alignment="end">Right aligned text</Text>
<Text alignment="justify">Justified text that spreads across the full width</Text>
```

## Font Weight

Override the default font weight for any variant.

```tsx
<Text fontWeight="regular">Regular weight</Text>
<Text fontWeight="medium">Medium weight</Text>
<Text fontWeight="semibold">Semibold weight</Text>
<Text fontWeight="bold">Bold weight</Text>
```

## Special Features

### Break Word

Prevent text from overflowing its container.

```tsx
<div className="w-32">
  <Text breakWord>ThisIsAVeryLongWordThatWouldNormallyOverflow</Text>
</div>
```

### Truncate

Truncate text with ellipsis when it overflows.

```tsx
<div className="w-32">
  <Text truncate>This is a very long text that will be truncated</Text>
</div>
```

### Numeric

Use monospace font for numeric content.

```tsx
<Text numeric>1,234,567.89</Text>
```

### Visually Hidden

Hide text visually but keep it available for screen readers.

```tsx
<Text visuallyHidden>This text is hidden but accessible</Text>
```

### Text Decoration

Add line-through decoration to text.

```tsx
<Text textDecorationLine="line-through">Strikethrough text</Text>
```

## HTML Elements

Specify the semantic HTML element to use.

```tsx
<Text as="h1" variant="heading3xl">Main heading</Text>
<Text as="p" variant="bodyMd">Paragraph text</Text>
<Text as="span" variant="bodySm">Inline text</Text>
<Text as="strong" fontWeight="bold">Important text</Text>
<Text as="legend" variant="headingSm">Form legend</Text>
```

## Advanced Usage

### Combining Props

```tsx
<Text 
  variant="headingLg" 
  as="h2" 
  tone="success" 
  alignment="center"
  fontWeight="bold"
>
  Success Heading
</Text>
```

### Custom Styling

```tsx
<Text className="custom-spacing" variant="bodyMd">
  Text with custom CSS classes
</Text>
```

### With ID and Accessibility

```tsx
<Text id="main-heading" as="h1" variant="heading2xl">
  Accessible heading with ID
</Text>
```

## Best Practices

### Headings

- Clearly describe the section of interface they refer to
- Highlight the most important concept or piece of information
- Sit at the top of the section they're referring to
- Use semantic HTML elements (h1-h6) with appropriate variants

### Body Text

- Use `bodyMd` for most content
- Use `bodyLg` for emphasis or important content
- Use `bodySm` for captions, timestamps, and secondary information
- Use `bodyXs` sparingly for very minor details

### Tones

- Use `subdued` for less important information
- Use `success`, `critical`, and `caution` to communicate status
- Pair status tones with appropriate icons when possible
- Use `disabled` only for truly disabled content

### Accessibility

- Always use semantic HTML elements with the `as` prop
- Use `visuallyHidden` to provide context for screen readers
- Ensure sufficient color contrast for all tone variants
- Don't rely solely on color to convey meaning

## TypeScript Support

The component includes full TypeScript support with exported types:

```tsx
import type { 
  TextProps,
  TextVariant,
  TextTone,
  TextAlignment,
  TextFontWeight,
  TextElement 
} from "@storeware/polaris";
```

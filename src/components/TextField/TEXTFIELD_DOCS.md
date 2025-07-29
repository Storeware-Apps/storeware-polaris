# TextField Component Documentation

## Overview

The TextField component provides 100% API compatibility with Shopify's Polaris TextField component while being built on shadcn/ui foundation with Tailwind CSS. A text field is an input field that merchants can type into. It has a range of options and supports several text formats including numbers.

## Installation

```bash
pnpm install @storeware/polaris
```

## Basic Usage

```tsx
import { TextField } from "@storeware/polaris";
import { useState, useCallback } from "react";

function MyComponent() {
  const [value, setValue] = useState("Jaded Pixel");

  const handleChange = useCallback(
    (newValue: string) => setValue(newValue),
    []
  );

  return (
    <TextField
      label="Store name"
      value={value}
      onChange={handleChange}
      autoComplete="off"
    />
  );
}
```

## Input Types

### Email Input

```tsx
<TextField
  label="Email address"
  type="email"
  value={email}
  onChange={handleEmailChange}
  autoComplete="email"
/>
```

### Number Input

```tsx
<TextField
  label="Quantity"
  type="number"
  value={quantity}
  onChange={handleQuantityChange}
  min={0}
  max={100}
  step={1}
  autoComplete="off"
/>
```

### Password Input

```tsx
<TextField
  label="Password"
  type="password"
  value={password}
  onChange={handlePasswordChange}
  autoComplete="current-password"
/>
```

### Multiline (Textarea)

```tsx
<TextField
  label="Description"
  multiline={4}
  value={description}
  onChange={handleDescriptionChange}
  autoComplete="off"
/>
```

## States and Variants

### With Error

```tsx
<TextField
  label="Email address"
  type="email"
  value={email}
  onChange={handleEmailChange}
  error="Please enter a valid email address"
  autoComplete="email"
/>
```

### Disabled

```tsx
<TextField
  label="Store name"
  value="My Store"
  disabled
  autoComplete="off"
/>
```

### Loading

```tsx
<TextField
  label="Store name"
  value={storeName}
  onChange={handleStoreNameChange}
  loading
  autoComplete="off"
/>
```

### With Help Text

```tsx
<TextField
  label="Store name"
  value={storeName}
  onChange={handleStoreNameChange}
  helpText="This will be displayed on your storefront"
  autoComplete="off"
/>
```

### With Prefix and Suffix

```tsx
<TextField
  label="Price"
  type="number"
  value={price}
  onChange={handlePriceChange}
  prefix="$"
  suffix="USD"
  autoComplete="off"
/>
```

### With Clear Button

```tsx
<TextField
  label="Search"
  value={searchTerm}
  onChange={handleSearchChange}
  clearButton
  onClearButtonClick={handleClearSearch}
  autoComplete="off"
/>
```

### With Character Count

```tsx
<TextField
  label="Product title"
  value={title}
  onChange={handleTitleChange}
  maxLength={50}
  showCharacterCount
  autoComplete="off"
/>
```

### Required Field

```tsx
<TextField
  label="Store name"
  value={storeName}
  onChange={handleStoreNameChange}
  requiredIndicator
  autoComplete="off"
/>
```

## Sizes

### Slim Size

```tsx
<TextField
  label="Store name"
  value={storeName}
  onChange={handleStoreNameChange}
  size="slim"
  autoComplete="off"
/>
```

### Medium Size (Default)

```tsx
<TextField
  label="Store name"
  value={storeName}
  onChange={handleStoreNameChange}
  size="medium"
  autoComplete="off"
/>
```

## Alignment

### Right Aligned

```tsx
<TextField
  label="Price"
  type="number"
  value={price}
  onChange={handlePriceChange}
  align="right"
  autoComplete="off"
/>
```

### Center Aligned

```tsx
<TextField
  label="Code"
  value={code}
  onChange={handleCodeChange}
  align="center"
  autoComplete="off"
/>
```

## Special Variants

### Borderless

```tsx
<TextField
  label="Store name"
  value={storeName}
  onChange={handleStoreNameChange}
  variant="borderless"
  autoComplete="off"
/>
```

### Magic Tone

```tsx
<TextField
  label="AI Generated Content"
  value={content}
  onChange={handleContentChange}
  tone="magic"
  autoComplete="off"
/>
```

### Monospaced Font

```tsx
<TextField
  label="API Key"
  value={apiKey}
  onChange={handleApiKeyChange}
  monospaced
  autoComplete="off"
/>
```

## Connected Fields

### With Connected Elements

```tsx
<TextField
  label="Website URL"
  value={url}
  onChange={handleUrlChange}
  connectedLeft={<Button>https://</Button>}
  connectedRight={<Button>.com</Button>}
  autoComplete="url"
/>
```

## API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `React.ReactNode` | - | **Required.** Label for the input |
| `value` | `string` | `""` | Initial value for the input |
| `onChange` | `(value: string, id: string) => void` | - | Callback fired when value is changed |
| `type` | `TextFieldType` | `"text"` | Determine type of input |
| `placeholder` | `string` | - | Hint text to display |
| `disabled` | `boolean` | `false` | Disable the input |
| `readOnly` | `boolean` | `false` | Disable editing of the input |
| `error` | `string \| boolean \| React.ReactNode` | - | Error to display beneath the label |
| `helpText` | `React.ReactNode` | - | Additional hint text to display |
| `autoComplete` | `string` | - | **Required.** Enable automatic completion by the browser |
| `size` | `"slim" \| "medium"` | `"medium"` | Changes the size of the input |
| `variant` | `"inherit" \| "borderless"` | `"inherit"` | Visual styling options |
| `align` | `"left" \| "center" \| "right"` | `"left"` | Text alignment |
| `tone` | `"magic"` | - | Indicates the tone of the text field |
| `multiline` | `boolean \| number` | `false` | Allow for multiple lines of input |
| `prefix` | `React.ReactNode` | - | Text to display before value |
| `suffix` | `React.ReactNode` | - | Text to display after value |
| `clearButton` | `boolean` | `false` | Show a clear text button in the input |
| `loading` | `boolean` | `false` | Indicates the loading state |
| `showCharacterCount` | `boolean` | `false` | Show character count |
| `requiredIndicator` | `boolean` | `false` | Visual required indicator |
| `monospaced` | `boolean` | `false` | Use monospaced font |
| `className` | `string` | - | Additional CSS class name |

### TextFieldType

```tsx
type TextFieldType =
  | "text"
  | "email"
  | "number"
  | "integer"
  | "password"
  | "search"
  | "tel"
  | "url"
  | "date"
  | "datetime-local"
  | "month"
  | "time"
  | "week"
  | "currency";
```

## Best Practices

### Do

- Always provide a clear, descriptive label
- Use appropriate input types for better mobile experience
- Include help text for complex fields
- Use character counts for fields with length limits
- Validate input and show clear error messages
- Use the `autoComplete` attribute for better UX

### Don't

- Don't use placeholder text as the only label
- Don't make required fields unclear
- Don't use generic error messages
- Don't forget to handle loading states
- Don't ignore accessibility attributes

## Accessibility

- Always provide a `label` prop for screen readers
- Use `helpText` for additional context
- Error messages are automatically associated with the input
- All ARIA attributes are properly set
- Keyboard navigation is fully supported
- Focus management follows web standards

## TypeScript Support

The component includes full TypeScript support with exported types:

```tsx
import type { 
  TextFieldProps,
  TextFieldType,
  TextFieldAlignment,
  TextFieldSize,
  TextFieldVariant,
  TextFieldTone,
  TextFieldError 
} from "@storeware/polaris";
```

# RadioButton Component Documentation

## Overview

The RadioButton component provides 100% API compatibility with Shopify's Polaris RadioButton component while being built on shadcn/ui foundation with Tailwind CSS. Use radio buttons to present each item in a list of options where merchants must make a single selection.

## Installation

```bash
pnpm install @storeware/polaris
```

## Basic Usage

```tsx
import { RadioButton } from "@storeware/polaris";
import { useState, useCallback } from "react";

function MyComponent() {
  const [value, setValue] = useState('disabled');

  const handleChange = useCallback(
    (_: boolean, newValue: string) => setValue(newValue),
    [],
  );

  return (
    <div>
      <RadioButton
        label="Accounts are disabled"
        helpText="Customers will only be able to check out as guests."
        checked={value === 'disabled'}
        id="disabled"
        name="accounts"
        onChange={handleChange}
      />
      <RadioButton
        label="Accounts are optional"
        helpText="Customers will be able to check out with a customer account or as a guest."
        id="optional"
        name="accounts"
        checked={value === 'optional'}
        onChange={handleChange}
      />
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
| `label` | `React.ReactNode` | - | Label for the radio button |
| `checked` | `boolean` | `false` | Radio button is selected |
| `disabled` | `boolean` | `false` | Disable input |
| `id` | `string` | - | ID for form input |
| `name` | `string` | - | Name for form input |
| `value` | `string` | - | Value for form input |
| `onChange` | `(newValue: boolean, id: string) => void` | - | Callback when the radio button is toggled |
| `onFocus` | `() => void` | - | Callback when radio button is focused |
| `onBlur` | `() => void` | - | Callback when focus is removed |
| `helpText` | `React.ReactNode` | - | Additional text to aide in use |
| `labelHidden` | `boolean` | `false` | Visually hide the label |
| `fill` | `boolean` | `false` | Grow to fill the space |
| `tone` | `"magic"` | - | Indicates the tone of the radio button |
| `ariaDescribedBy` | `string` | - | Indicates the ID of the element that describes the radio button |
| `className` | `string` | - | Additional CSS class name |

### Spacing Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `bleed` | `SpacingScale` | - | Spacing around children |
| `bleedBlockStart` | `SpacingScale` | - | Vertical start spacing around children |
| `bleedBlockEnd` | `SpacingScale` | - | Vertical end spacing around children |
| `bleedInlineStart` | `SpacingScale` | - | Horizontal start spacing around children |
| `bleedInlineEnd` | `SpacingScale` | - | Horizontal end spacing around children |

### Spacing Scale Values

The spacing props accept Polaris spacing scale tokens:

| Token | Value | Description |
|-------|-------|-------------|
| `"0"` | `0px` | No spacing |
| `"025"` | `2px` | Extra small |
| `"050"` | `4px` | Small |
| `"100"` | `8px` | Medium |
| `"150"` | `12px` | Medium-large |
| `"200"` | `16px` | Large |
| `"300"` | `24px` | Extra large |
| `"400"` | `32px` | XXL |
| `"500"` | `40px` | XXXL |

## Examples

### Basic Radio Button

```tsx
<RadioButton
  label="Accept terms and conditions"
  checked={accepted}
  id="terms"
  name="terms"
  onChange={(checked, id) => setAccepted(checked)}
/>
```

### With Help Text

```tsx
<RadioButton
  label="Email marketing"
  helpText="Receive promotional emails about new products and sales."
  checked={emailMarketing}
  id="email-marketing"
  name="marketing"
  onChange={(checked, id) => setEmailMarketing(checked)}
/>
```

### Disabled State

```tsx
<RadioButton
  label="Disabled option"
  helpText="This option is currently unavailable."
  disabled={true}
  checked={false}
  id="disabled-option"
  name="disabled"
/>
```

### Magic Tone

```tsx
<RadioButton
  label="AI-powered recommendations"
  helpText="Let our AI suggest the best products for your customers."
  tone="magic"
  checked={aiEnabled}
  id="ai-recommendations"
  name="ai"
  onChange={(checked, id) => setAiEnabled(checked)}
/>
```

### Radio Button Group

```tsx
function ShippingOptions() {
  const [selectedShipping, setSelectedShipping] = useState('standard');

  const handleShippingChange = useCallback(
    (_: boolean, newValue: string) => setSelectedShipping(newValue),
    [],
  );

  return (
    <div>
      <h3>Shipping method</h3>
      <RadioButton
        label="Standard shipping"
        helpText="5-7 business days, $5.99"
        checked={selectedShipping === 'standard'}
        id="standard"
        name="shipping"
        onChange={handleShippingChange}
      />
      <RadioButton
        label="Express shipping"
        helpText="2-3 business days, $12.99"
        checked={selectedShipping === 'express'}
        id="express"
        name="shipping"
        onChange={handleShippingChange}
      />
      <RadioButton
        label="Overnight shipping"
        helpText="Next business day, $24.99"
        checked={selectedShipping === 'overnight'}
        id="overnight"
        name="shipping"
        onChange={handleShippingChange}
      />
    </div>
  );
}
```

### Hidden Label

```tsx
<RadioButton
  label="Hidden label option"
  labelHidden={true}
  checked={hiddenOption}
  id="hidden-label"
  name="hidden"
  onChange={(checked, id) => setHiddenOption(checked)}
/>
```

### Fill Space

```tsx
<div style={{ width: "400px" }}>
  <RadioButton
    label="Full width option"
    helpText="This radio button fills the available space."
    fill={true}
    checked={fullWidth}
    id="fill-space"
    name="fill"
    onChange={(checked, id) => setFullWidth(checked)}
  />
</div>
```

## Best Practices

### Do

- Always use radio buttons with an associated label component
- Use radio buttons for lists with at least two or more choices
- Use for single selection scenarios where merchants must pick only one option
- Include mutually exclusive options (each option independent from others)
- List options in a rational order that makes logical sense
- Have a default option selected whenever possible

### Don't

- Use radio buttons for multiple selection (use checkboxes instead)
- Use for single yes/no choices (use checkbox instead)
- Mix radio buttons with different `name` attributes in the same group
- Use without proper labels for accessibility

## Accessibility

The RadioButton component follows accessibility best practices:

- **Screen Reader Support**: Screen readers automatically convey the radio button state
- **Keyboard Navigation**: Use arrow keys to navigate between radio buttons in a group
- **Focus Management**: Tab key moves focus to the radio button group
- **Labeling**: The `label` prop provides accessible labeling for all users
- **Help Text**: The `helpText` prop is properly associated with the input
- **Disabled State**: The `disabled` prop applies the HTML disabled attribute

### Keyboard Support

- **Tab**: Move focus to the radio button group
- **Shift + Tab**: Move focus backwards
- **Arrow Keys**: Change which radio button is selected within a group
- **Space**: Select the focused radio button

## Related Components

- **ChoiceList**: Use for simple lists of radio buttons or checkboxes
- **Select**: Consider for long lists of options to avoid overwhelming merchants
- **Checkbox**: Use for multiple selection scenarios
- **Button**: Use for actions rather than selections

## Type Definitions

```tsx
interface RadioButtonProps {
  label: React.ReactNode;
  checked?: boolean;
  disabled?: boolean;
  id?: string;
  name?: string;
  value?: string;
  onChange?(newValue: boolean, id: string): void;
  onFocus?(): void;
  onBlur?(): void;
  helpText?: React.ReactNode;
  labelHidden?: boolean;
  fill?: boolean;
  tone?: "magic";
  ariaDescribedBy?: string;
  className?: string;
  // Spacing props
  bleed?: SpacingScale;
  bleedBlockStart?: SpacingScale;
  bleedBlockEnd?: SpacingScale;
  bleedInlineStart?: SpacingScale;
  bleedInlineEnd?: SpacingScale;
}

type SpacingScale = "0" | "025" | "050" | "100" | "150" | "200" | "300" | "400" | "500" | "600" | "800" | "1000" | "1200" | "1600" | "2000" | "2400" | "2800" | "3200";
```

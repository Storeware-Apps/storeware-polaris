# Select Component Documentation

## Overview

The Select component provides 100% API compatibility with Shopify's Polaris Select component while being built on Radix UI Select foundation with Tailwind CSS. Select lets merchants choose one option from an options menu. Consider select when you have 4 or more options, to avoid cluttering the interface.

## Installation

```bash
pnpm install @storeware/polaris
```

## Basic Usage

```tsx
import { Select } from "@storeware/polaris";
import { useState, useCallback } from "react";

function MyComponent() {
  const [selected, setSelected] = useState('today');

  const handleSelectChange = useCallback(
    (value: string) => setSelected(value),
    [],
  );

  const options = [
    {label: 'Today', value: 'today'},
    {label: 'Yesterday', value: 'yesterday'},
    {label: 'Last 7 days', value: 'lastWeek'},
  ];

  return (
    <Select
      label="Date range"
      options={options}
      onChange={handleSelectChange}
      value={selected}
    />
  );
}
```

## Features

- **100% Polaris Compatible**: Perfect API and visual compatibility with Shopify's Polaris design system
- **Radix UI Foundation**: Built on proven Radix UI Select primitives for reliability and accessibility
- **TypeScript First**: Full type safety with excellent IntelliSense support
- **Tailwind CSS**: Highly customizable styling system
- **Modern React**: Uses latest React patterns and best practices
- **Accessibility**: Full ARIA support and keyboard navigation
- **Customizable**: Support for prefixes, groups, and custom styling

## Props

### Required Props

| Prop | Type | Description |
|------|------|-------------|
| `label` | `React.ReactNode` | Label for the select |

### Optional Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `options` | `(SelectOption \| SelectGroup)[]` | `[]` | List of options or option groups to choose from |
| `labelAction` | `Action` | - | Adds an action to the label |
| `labelHidden` | `boolean` | `false` | Visually hide the label |
| `labelInline` | `boolean` | `false` | Show the label to the left of the value, inside the control |
| `disabled` | `boolean` | `false` | Disable input |
| `helpText` | `React.ReactNode` | - | Additional text to aide in use |
| `placeholder` | `string` | - | Example text to display as placeholder |
| `id` | `string` | - | ID for form input |
| `name` | `string` | - | Name for form input |
| `value` | `string` | - | Value for form input |
| `error` | `string \| boolean \| React.ReactNode` | - | Display an error state |
| `onChange` | `(selected: string, id: string) => void` | - | Callback when selection is changed |
| `onFocus` | `(event?: React.FocusEvent<HTMLButtonElement>) => void` | - | Callback when select is focused |
| `onBlur` | `(event?: React.FocusEvent<HTMLButtonElement>) => void` | - | Callback when focus is removed |
| `requiredIndicator` | `boolean` | `false` | Visual required indicator, add an asterisk to label |
| `tone` | `"magic"` | - | Indicates the tone of the select |
| `className` | `string` | - | Additional CSS class name for custom styling |

## Option Types

### SelectOption

```tsx
type SelectOption = string | StrictOption;
```

### StrictOption

```tsx
interface StrictOption {
  /** Machine value of the option; this is the value passed to `onChange` */
  value: string;
  /** Human-readable text for the option */
  label: string;
  /** Option will be visible, but not selectable */
  disabled?: boolean;
  /** Element to display to the left of the option label. Does not show in the dropdown. */
  prefix?: React.ReactNode;
  /** Unique key applied to the option element. Defaults to option value prop when undefined. */
  key?: string;
}
```

### SelectGroup

```tsx
interface SelectGroup {
  title: string;
  options: SelectOption[];
}
```

## Examples

### Basic Select

```tsx
const options = [
  {label: 'Today', value: 'today'},
  {label: 'Yesterday', value: 'yesterday'},
  {label: 'Last 7 days', value: 'lastWeek'},
];

<Select
  label="Date range"
  options={options}
  onChange={handleSelectChange}
  value={selected}
/>
```

### With Inline Label

```tsx
<Select
  label="Sort by"
  labelInline
  options={options}
  onChange={handleSelectChange}
  value={selected}
/>
```

### With Prefix Icons

```tsx
const options = [
  {
    label: 'Increase',
    value: 'increase',
    prefix: <Icon source={CaretUpIcon} />,
  },
  {
    label: 'Decrease',
    value: 'decrease',
    prefix: <Icon source={CaretDownIcon} />,
  },
];

<Select
  label="Permission"
  options={options}
  onChange={handleSelectChange}
  value={selected}
/>
```

### With Option Groups

```tsx
const options = [
  {
    title: 'Fruits',
    options: [
      {label: 'Apple', value: 'apple'},
      {label: 'Banana', value: 'banana'},
    ],
  },
  {
    title: 'Vegetables',
    options: [
      {label: 'Carrot', value: 'carrot'},
      {label: 'Broccoli', value: 'broccoli'},
    ],
  },
];

<Select
  label="Food category"
  options={options}
  onChange={handleSelectChange}
  value={selected}
/>
```

### With Error State

```tsx
<Select
  label="Province"
  options={['Alberta']}
  value={selected}
  onChange={handleSelectChange}
  error="Province is required"
/>
```

### With Magic Tone

```tsx
<Select
  label="AI Feature"
  options={options}
  onChange={handleSelectChange}
  value={selected}
  tone="magic"
  helpText="Select an AI-powered feature to enable"
/>
```

### With Label Action

```tsx
<Select
  label="Country"
  options={options}
  onChange={handleSelectChange}
  value={selected}
  labelAction={{
    content: "Add country",
    onAction: () => console.log("Add country clicked"),
  }}
/>
```

## Best Practices

The select component should:

- Be used for selecting between 4 or more pre-defined options
- Have a default option selected whenever possible
- Use "Select" as a placeholder option only if there's no logical default option

## Content Guidelines

### Select Label

Labels should:

- Give a short description (1–3 words) of the requested input
- Be written in sentence case (the first word capitalized, the rest lowercase)
- Avoid punctuation and articles ("the", "an", "a")
- Be independent sentences
- Be descriptive, not instructional

### Select Options

Options should:

- Start with "Select" as a placeholder if there isn't a default option
- Be listed alphabetically or in another logical order
- Be written in sentence case
- Be clearly labelled based on what the option will do

## Accessibility

The Select component includes:

- Full ARIA support for screen readers
- Keyboard navigation (Arrow keys, Enter, Escape)
- Focus management
- Proper labeling and descriptions
- Support for disabled states

## Related Components

- **ChoiceList**: For selecting one or multiple options from a list with less than 4 options
- **Popover**: For creating custom dropdown interfaces
- **TextField**: For text input fields

## Migration from Polaris

This component is a drop-in replacement for `@shopify/polaris` Select component. Simply update your import:

```tsx
// Before
import { Select } from '@shopify/polaris';

// After
import { Select } from '@storeware/polaris';
```

All existing props and functionality remain the same.

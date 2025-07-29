# ChoiceList Component Documentation

## Overview

The ChoiceList component provides 100% API compatibility with Shopify's Polaris ChoiceList component while being built on shadcn/ui foundation with Tailwind CSS. A choice list lets you create a list of grouped radio buttons or checkboxes. Use this component if you need to group together a related list of interactive choices.

## Installation

```bash
pnpm install @storeware/polaris
```

## Basic Usage

```tsx
import { ChoiceList } from "@storeware/polaris";
import { useState } from "react";

function MyComponent() {
  const [selected, setSelected] = useState<string[]>(['hidden']);

  const handleChange = (value: string[]) => setSelected(value);

  return (
    <ChoiceList
      title="Company name"
      choices={[
        {label: 'Hidden', value: 'hidden'},
        {label: 'Optional', value: 'optional'},
        {label: 'Required', value: 'required'},
      ]}
      selected={selected}
      onChange={handleChange}
    />
  );
}
```

## Props

### ChoiceListProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `React.ReactNode` | - | Label for list of choices |
| `choices` | `Choice[]` | - | Collection of choices |
| `selected` | `string[]` | - | Collection of selected choices |
| `name` | `string` | `"choiceList"` | Name for form input |
| `allowMultiple` | `boolean` | `false` | Allow merchants to select multiple options at once |
| `titleHidden` | `boolean` | `false` | Toggles display of the title |
| `error` | `any` | - | Display an error message |
| `disabled` | `boolean` | `false` | Disable all choices |
| `onChange` | `(selected: string[], name: string) => void` | - | Callback when the selected choices change |
| `tone` | `"magic"` | - | Indicates the tone of the choice list |
| `className` | `string` | - | Additional CSS class name |

### Choice

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Label for the choice |
| `value` | `string` | - | Value for the choice |
| `helpText` | `string` | - | Help text for the choice |
| `disabled` | `boolean` | `false` | Whether the choice is disabled |
| `describedByError` | `boolean` | `false` | Additional description for the choice |

## Examples

### Single Selection (Radio Buttons)

```tsx
import { ChoiceList } from "@storeware/polaris";
import { useState } from "react";

function SingleChoiceExample() {
  const [selected, setSelected] = useState<string[]>(['hidden']);

  const handleChange = (value: string[]) => setSelected(value);

  return (
    <ChoiceList
      title="Company name"
      choices={[
        {label: 'Hidden', value: 'hidden'},
        {label: 'Optional', value: 'optional'},
        {label: 'Required', value: 'required'},
      ]}
      selected={selected}
      onChange={handleChange}
    />
  );
}
```

### Multiple Selection (Checkboxes)

```tsx
import { ChoiceList } from "@storeware/polaris";
import { useState } from "react";

function MultipleChoiceExample() {
  const [selected, setSelected] = useState<string[]>(['shipping']);

  const handleChange = (value: string[]) => setSelected(value);

  return (
    <ChoiceList
      title="While the customer is checking out"
      allowMultiple
      choices={[
        {label: 'Use the shipping address as the billing address', value: 'shipping'},
        {label: 'Require a confirmation step', value: 'confirmation'},
      ]}
      selected={selected}
      onChange={handleChange}
    />
  );
}
```

### With Help Text

```tsx
import { ChoiceList } from "@storeware/polaris";
import { useState } from "react";

function WithHelpTextExample() {
  const [selected, setSelected] = useState<string[]>(['hidden']);

  const handleChange = (value: string[]) => setSelected(value);

  return (
    <ChoiceList
      title="Company name"
      choices={[
        {
          label: 'Hidden',
          value: 'hidden',
          helpText: "Customers won't see your company name"
        },
        {
          label: 'Optional',
          value: 'optional',
          helpText: 'Customers will see your company name if you provide it'
        },
        {
          label: 'Required',
          value: 'required',
          helpText: 'Customers must provide a company name'
        },
      ]}
      selected={selected}
      onChange={handleChange}
    />
  );
}
```

### With Error State

```tsx
import { ChoiceList } from "@storeware/polaris";
import { useState } from "react";

function WithErrorExample() {
  const [selected, setSelected] = useState<string[]>([]);

  const handleChange = (value: string[]) => setSelected(value);

  return (
    <ChoiceList
      title="Company name"
      choices={[
        {label: 'Hidden', value: 'hidden'},
        {label: 'Optional', value: 'optional'},
        {label: 'Required', value: 'required'},
      ]}
      selected={selected}
      onChange={handleChange}
      error="You must select a company name option"
    />
  );
}
```

## Best Practices

Choice lists should:

- Include a title that tells merchants what to do or explains the available options
- Label options clearly based on what the option will do
- Avoid mutually exclusive options when allowing multiple selection

## Content Guidelines

### List titles

List titles should:

- Help merchants understand how the items in the list are grouped together, or should explain what kind of choice merchants are making
- Be concise and scannable
- Use simple, clear language that can be read at a glance
- Keep list titles to a single sentence
- Be written in sentence case

### List choices

Every item in a choice list should:

- Start with a capital letter
- Not use commas or semicolons at the end of each line
- Be written in sentence case (the first word capitalized, the rest lowercase)

## Accessibility

The choice list component uses the accessibility features of radio buttons and checkboxes:

- Uses proper ARIA labels and roles
- Supports keyboard navigation
- Provides clear focus indicators
- Associates help text with form controls

## Related Components

- To present a long list of radio buttons or when space is constrained, use the Select component
- To build a group of radio buttons or checkboxes with a custom layout, use the RadioButton or Checkbox components
- To display a simple, non-interactive list of related content, use the List component

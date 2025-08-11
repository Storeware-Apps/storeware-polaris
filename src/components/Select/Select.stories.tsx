import type { Meta, StoryObj } from "@storybook/react";
import { useState, useCallback } from "react";
import { Select } from "./select";
import { Icon } from "../Icon/icon";
import { CaretUpIcon, CaretDownIcon } from "@shopify/polaris-icons";

const DOCS_CONTENT = `
# Select Component Documentation

## Overview

The Select component provides 100% API compatibility with Shopify's Polaris Select component while being built on Radix UI Select foundation with Tailwind CSS. Select lets merchants choose one option from an options menu. Consider select when you have 4 or more options, to avoid cluttering the interface.

## Installation

\`\`\`bash
pnpm install @storeware/polaris
\`\`\`

## Basic Usage

\`\`\`tsx
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
\`\`\`

## Features

- **100% Polaris Compatible**: Perfect API and visual compatibility with Shopify's Polaris design system
- **Radix UI Foundation**: Built on proven Radix UI Select primitives for reliability and accessibility
- **TypeScript First**: Full type safety with excellent IntelliSense support
- **Tailwind CSS**: Highly customizable styling system
- **Modern React**: Uses latest React patterns and best practices

## Variants

- **Default**: Standard select dropdown
- **With Inline Label**: Label positioned inline with the select
- **Disabled**: Non-interactive state
- **With Prefix**: Icons or elements before option text
- **With Error**: Error state with validation message
- **Magic Tone**: Special purple styling for magical features

## States

- **Default**: Normal interactive state
- **Disabled**: Non-interactive, grayed out
- **Error**: Red border and error message
- **Focus**: Blue ring when focused
- **Magic**: Purple accent for special features

## Best Practices

- Use for selecting between 4 or more pre-defined options
- Have a default option selected whenever possible
- Use "Select" as a placeholder option only if there's no logical default option
- Keep option labels short and descriptive
- Group related options when you have many choices
`;

const meta = {
  title: "Components/Select",
  component: Select,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: DOCS_CONTENT,
      },
    },
  },
  argTypes: {
    options: {
      control: "object",
      description: "List of options or option groups to choose from",
    },
    label: {
      control: "text",
      description: "Label for the select",
    },
    labelAction: {
      control: "object",
      description: "Adds an action to the label",
    },
    labelHidden: {
      control: "boolean",
      description: "Visually hide the label",
    },
    labelInline: {
      control: "boolean",
      description: "Show the label to the left of the value, inside the control",
    },
    disabled: {
      control: "boolean",
      description: "Disable input",
    },
    helpText: {
      control: "text",
      description: "Additional text to aide in use",
    },
    placeholder: {
      control: "text",
      description: "Example text to display as placeholder",
    },
    value: {
      control: "text",
      description: "Value for form input",
    },
    error: {
      control: "text",
      description: "Display an error state",
    },
    requiredIndicator: {
      control: "boolean",
      description: "Visual required indicator, add an asterisk to label",
    },
    tone: {
      control: "select",
      options: [undefined, "magic"],
      description: "Indicates the tone of the select",
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story - matches Polaris documentation exactly
export const Default: Story = {
  render: () => {
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
  },
};

// With inline label story - matches Polaris documentation exactly
export const WithInlineLabel: Story = {
  render: () => {
    const [selected, setSelected] = useState('newestUpdate');

    const handleSelectChange = useCallback(
      (value: string) => setSelected(value),
      [],
    );

    const options = [
      {label: 'Newest update', value: 'newestUpdate'},
      {label: 'Oldest update', value: 'oldestUpdate'},
      {label: 'Most spent', value: 'mostSpent'},
      {label: 'Most orders', value: 'mostOrders'},
      {label: 'Last name A–Z', value: 'lastNameAlpha'},
      {label: 'Last name Z–A', value: 'lastNameReverseAlpha'},
    ];

    return (
      <Select
        label="Sort by"
        labelInline
        options={options}
        onChange={handleSelectChange}
        value={selected}
      />
    );
  },
};

// Disabled story - matches Polaris documentation exactly
export const Disabled: Story = {
  render: () => {
    return (
      <Select
        label="Date range"
        disabled
        options={[
          {label: 'Today', value: 'today'},
          {label: 'Yesterday', value: 'yesterday'},
          {label: 'Last 7 days', value: 'lastWeek'},
        ]}
      />
    );
  },
};

// With prefix story - matches Polaris documentation exactly
export const WithPrefix: Story = {
  render: () => {
    const [selected, setSelected] = useState('Increase');

    const handleSelectChange = useCallback(
      (value: string) => setSelected(value),
      [],
    );

    const options = [
      {
        label: 'Increase',
        value: 'Increase',
        prefix: <Icon source={CaretUpIcon} />,
      },
      {
        label: 'Decrease',
        value: 'Decrease',
        prefix: <Icon source={CaretDownIcon} />,
      },
    ];

    return (
      <Select
        label="Permission"
        options={options}
        onChange={handleSelectChange}
        value={selected}
      />
    );
  },
};

// With validation error story - matches Polaris documentation exactly
export const WithValidationError: Story = {
  render: () => {
    const [selected, setSelected] = useState('');

    const handleSelectChange = useCallback(
      (value: string) => setSelected(value),
      [],
    );

    return (
      <Select
        label="Province"
        options={['Alberta']}
        value={selected}
        onChange={handleSelectChange}
        error="Province is required"
      />
    );
  },
};

// With separate validation error story - simplified version
export const WithSeparateValidationError: Story = {
  render: () => {
    const [weight, setWeight] = useState('12');
    const [unit, setUnit] = useState('');

    const handleUnitChange = useCallback((value: string) => setUnit(value), []);

    const errorMessage = !unit && weight ? 'The unit of measure for the product weight is required when weight based shipping rates are enabled.' : '';

    return (
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">
              Product weight
            </label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="flex h-10 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm"
            />
          </div>
          <Select
            label="Unit of measure"
            placeholder="Select"
            options={['oz', 'g', 'kg', 'lb']}
            value={unit}
            onChange={handleUnitChange}
            error={Boolean(!unit && weight)}
          />
        </div>
        {errorMessage && (
          <div className="text-sm text-red-600">{errorMessage}</div>
        )}
      </div>
    );
  },
};

// With groups story
export const WithGroups: Story = {
  render: () => {
    const [selected, setSelected] = useState('apple');

    const handleSelectChange = useCallback(
      (value: string) => setSelected(value),
      [],
    );

    const options = [
      {
        title: 'Fruits',
        options: [
          {label: 'Apple', value: 'apple'},
          {label: 'Banana', value: 'banana'},
          {label: 'Orange', value: 'orange'},
        ],
      },
      {
        title: 'Vegetables',
        options: [
          {label: 'Carrot', value: 'carrot'},
          {label: 'Broccoli', value: 'broccoli'},
          {label: 'Spinach', value: 'spinach'},
        ],
      },
    ];

    return (
      <Select
        label="Food category"
        options={options}
        onChange={handleSelectChange}
        value={selected}
      />
    );
  },
};

// Magic tone story
export const MagicTone: Story = {
  render: () => {
    const [selected, setSelected] = useState('ai-generated');

    const handleSelectChange = useCallback(
      (value: string) => setSelected(value),
      [],
    );

    const options = [
      {label: 'AI Generated', value: 'ai-generated'},
      {label: 'Machine Learning', value: 'ml'},
      {label: 'Smart Recommendations', value: 'smart-rec'},
    ];

    return (
      <Select
        label="AI Feature"
        options={options}
        onChange={handleSelectChange}
        value={selected}
        tone="magic"
        helpText="Select an AI-powered feature to enable"
      />
    );
  },
};

// With help text and required indicator
export const WithHelpTextAndRequired: Story = {
  render: () => {
    const [selected, setSelected] = useState('');

    const handleSelectChange = useCallback(
      (value: string) => setSelected(value),
      [],
    );

    const options = [
      {label: 'Small (1-10 employees)', value: 'small'},
      {label: 'Medium (11-50 employees)', value: 'medium'},
      {label: 'Large (51+ employees)', value: 'large'},
    ];

    return (
      <Select
        label="Company size"
        options={options}
        onChange={handleSelectChange}
        value={selected}
        placeholder="Select company size"
        helpText="This helps us customize your experience"
        requiredIndicator
      />
    );
  },
};

// With label action
export const WithLabelAction: Story = {
  render: () => {
    const [selected, setSelected] = useState('');

    const handleSelectChange = useCallback(
      (value: string) => setSelected(value),
      [],
    );

    const options = [
      {label: 'United States', value: 'us'},
      {label: 'Canada', value: 'ca'},
      {label: 'United Kingdom', value: 'uk'},
    ];

    return (
      <Select
        label="Country"
        options={options}
        onChange={handleSelectChange}
        value={selected}
        placeholder="Select a country"
        labelAction={{
          content: "Add country",
          onAction: () => alert("Add country clicked"),
        }}
      />
    );
  },
};

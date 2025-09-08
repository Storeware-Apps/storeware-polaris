import type { Meta, StoryObj } from "@storybook/react";
import { RadioButton } from "./radioButton";
import { BlockStack } from "../BlockStack/blockStack";
import { useState, useCallback } from "react";

const meta: Meta<typeof RadioButton> = {
  title: "Selection and Input/RadioButton",
  component: RadioButton,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
A comprehensive RadioButton component that provides 100% API compatibility with Shopify's Polaris RadioButton component while being built on shadcn/ui foundation with Tailwind CSS.

## Features

- **100% Polaris Compatible**: Perfect API and visual compatibility with Shopify's Polaris design system
- **shadcn/ui Foundation**: Built on proven shadcn/ui patterns for reliability and customization
- **TypeScript First**: Full type safety with excellent IntelliSense support
- **Tailwind CSS**: Highly customizable styling system
- **Single Selection**: Use radio buttons where merchants must make a single selection
- **Accessibility**: Full keyboard support and screen reader compatibility
- **Form Integration**: Works seamlessly with form libraries and validation

## Usage

Use radio buttons to present each item in a list of options where merchants must make a single selection.

\`\`\`tsx
import { RadioButton } from "@storeware/polaris";

function MyComponent() {
  const [value, setValue] = useState('option1');

  const handleChange = useCallback(
    (checked: boolean, id: string) => {
      if (checked) setValue(id);
    },
    [],
  );

  return (
    <div>
      <RadioButton
        label="Option 1"
        checked={value === 'option1'}
        id="option1"
        name="options"
        onChange={handleChange}
      />
      <RadioButton
        label="Option 2"
        checked={value === 'option2'}
        id="option2"
        name="options"
        onChange={handleChange}
      />
    </div>
  );
}
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    label: {
      control: { type: "text" },
      description: "Label for the radio button",
    },
    checked: {
      control: { type: "boolean" },
      description: "Radio button is selected",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      control: { type: "boolean" },
      description: "Disable input",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    labelHidden: {
      control: { type: "boolean" },
      description: "Visually hide the label",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    helpText: {
      control: { type: "text" },
      description: "Additional text to aide in use",
    },
    tone: {
      control: { type: "select" },
      options: [undefined, "magic"],
      description: "Indicates the tone of the radio button",
    },
    fill: {
      control: { type: "boolean" },
      description: "Grow to fill the space",
      table: {
        defaultValue: { summary: "false" },
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story - matches Polaris documentation exactly
export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('disabled');

    const handleChange = useCallback(
      (_: boolean, newValue: string) => setValue(newValue),
      [],
    );

    return (
      <BlockStack gap="400">
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
      </BlockStack>
    );
  },
};

// Individual radio button
export const Individual: Story = {
  args: {
    label: "Accept terms and conditions",
    checked: false,
    id: "terms",
    name: "terms",
  },
};

// With help text
export const WithHelpText: Story = {
  args: {
    label: "Email marketing",
    helpText: "Receive promotional emails about new products and sales.",
    checked: false,
    id: "email-marketing",
    name: "marketing",
  },
};

// Disabled state
export const Disabled: Story = {
  args: {
    label: "Disabled option",
    helpText: "This option is currently unavailable.",
    checked: false,
    disabled: true,
    id: "disabled-option",
    name: "disabled",
  },
};

// Magic tone
export const MagicTone: Story = {
  args: {
    label: "AI-powered recommendations",
    helpText: "Let our AI suggest the best products for your customers.",
    tone: "magic",
    checked: false,
    id: "ai-recommendations",
    name: "ai",
  },
};

// Hidden label
export const HiddenLabel: Story = {
  args: {
    label: "Hidden label option",
    labelHidden: true,
    checked: false,
    id: "hidden-label",
    name: "hidden",
  },
};

// Fill space
export const FillSpace: Story = {
  args: {
    label: "Full width option",
    helpText: "This radio button fills the available space.",
    fill: true,
    checked: false,
    id: "fill-space",
    name: "fill",
  },
  decorators: [
    (Story) => (
      <div style={{ width: "400px", border: "1px dashed #ccc", padding: "16px" }}>
        <Story />
      </div>
    ),
  ],
};

// Multiple options group
export const MultipleOptions: Story = {
  render: () => {
    const [selectedShipping, setSelectedShipping] = useState('standard');

    const handleShippingChange = useCallback(
      (_: boolean, newValue: string) => setSelectedShipping(newValue),
      [],
    );

    return (
      <BlockStack gap="400">
        <div className="text-sm font-medium text-gray-900 mb-2">
          Shipping method
        </div>
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
      </BlockStack>
    );
  },
};

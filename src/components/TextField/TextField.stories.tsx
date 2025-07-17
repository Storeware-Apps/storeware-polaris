import type { Meta, StoryObj } from "@storybook/react";
import { useState, useCallback } from "react";
import { TextField } from "./TextField";

const meta: Meta<typeof TextField> = {
  title: "Components/TextField",
  component: TextField,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
A comprehensive TextField component that provides 100% API compatibility with Shopify's Polaris TextField component while being built on shadcn/ui foundation with Tailwind CSS.

## Features

- **100% Polaris Compatible**: Perfect API and visual compatibility with Shopify's Polaris design system
- **shadcn/ui Foundation**: Built on proven shadcn/ui patterns for reliability and customization
- **TypeScript First**: Full type safety with excellent IntelliSense support
- **Tailwind CSS**: Highly customizable styling system
- **Modern React**: Uses latest React patterns and best practices

## Variants

- **Default**: Standard text input field
- **Email**: Email input with appropriate keyboard on mobile
- **Number**: Numeric input with step controls
- **Password**: Password input with hidden text
- **Search**: Search input with appropriate styling
- **Multiline**: Textarea for longer text input

## States

- **Default**: Normal interactive state
- **Disabled**: Non-interactive state
- **Error**: Error state with validation message
- **Loading**: Loading state with spinner
- **Focused**: Focused state (can be controlled)

## Sizes

- **Medium**: Default size (40px height)
- **Slim**: Compact size (32px height)
        `,
      },
    },
  },
  argTypes: {
    type: {
      control: "select",
      options: [
        "text",
        "email",
        "number",
        "integer",
        "password",
        "search",
        "tel",
        "url",
        "date",
        "datetime-local",
        "month",
        "time",
        "week",
        "currency",
      ],
    },
    size: {
      control: "select",
      options: ["slim", "medium"],
    },
    variant: {
      control: "select",
      options: ["inherit", "borderless"],
    },
    align: {
      control: "select",
      options: ["left", "center", "right"],
    },
    tone: {
      control: "select",
      options: [undefined, "magic"],
    },
    inputMode: {
      control: "select",
      options: ["none", "text", "decimal", "numeric", "tel", "search", "email", "url"],
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TextField>;

// Template for interactive stories
const InteractiveTemplate = (args: any) => {
  const [value, setValue] = useState(args.value || "");

  const handleChange = useCallback((newValue: string) => {
    setValue(newValue);
    args.onChange?.(newValue, args.id || "textfield");
  }, [args]);

  return <TextField {...args} value={value} onChange={handleChange} />;
};

// Default story
export const Default: Story = {
  render: InteractiveTemplate,
  args: {
    label: "Store name",
    placeholder: "Enter store name",
    autoComplete: "off",
  },
};

// Email input
export const Email: Story = {
  render: InteractiveTemplate,
  args: {
    label: "Email address",
    type: "email",
    placeholder: "Enter your email",
    autoComplete: "email",
  },
};

// Number input
export const Number: Story = {
  render: InteractiveTemplate,
  args: {
    label: "Quantity",
    type: "number",
    placeholder: "0",
    min: 0,
    max: 100,
    step: 1,
    autoComplete: "off",
  },
};

// Password input
export const Password: Story = {
  render: InteractiveTemplate,
  args: {
    label: "Password",
    type: "password",
    placeholder: "Enter password",
    autoComplete: "current-password",
  },
};

// Search input
export const Search: Story = {
  render: InteractiveTemplate,
  args: {
    label: "Search products",
    type: "search",
    placeholder: "Search...",
    autoComplete: "off",
  },
};

// Multiline textarea
export const Multiline: Story = {
  render: InteractiveTemplate,
  args: {
    label: "Description",
    multiline: 4,
    placeholder: "Enter description",
    autoComplete: "off",
  },
};

// With help text
export const WithHelpText: Story = {
  render: InteractiveTemplate,
  args: {
    label: "Store name",
    placeholder: "Enter store name",
    helpText: "This will be displayed on your storefront",
    autoComplete: "off",
  },
};

// With error
export const WithError: Story = {
  render: InteractiveTemplate,
  args: {
    label: "Email address",
    type: "email",
    placeholder: "Enter your email",
    error: "Please enter a valid email address",
    autoComplete: "email",
  },
};

// Disabled state
export const Disabled: Story = {
  args: {
    label: "Store name",
    value: "My Store",
    disabled: true,
    autoComplete: "off",
  },
};

// Loading state
export const Loading: Story = {
  render: InteractiveTemplate,
  args: {
    label: "Store name",
    placeholder: "Enter store name",
    loading: true,
    autoComplete: "off",
  },
};

// With prefix and suffix
export const WithPrefixAndSuffix: Story = {
  render: InteractiveTemplate,
  args: {
    label: "Price",
    type: "number",
    prefix: "$",
    suffix: "USD",
    placeholder: "0.00",
    autoComplete: "off",
  },
};

// With clear button
export const WithClearButton: Story = {
  render: InteractiveTemplate,
  args: {
    label: "Search",
    placeholder: "Search products",
    clearButton: true,
    autoComplete: "off",
  },
};

// Character count
export const WithCharacterCount: Story = {
  render: InteractiveTemplate,
  args: {
    label: "Product title",
    placeholder: "Enter product title",
    maxLength: 50,
    showCharacterCount: true,
    autoComplete: "off",
  },
};

// Required field
export const Required: Story = {
  render: InteractiveTemplate,
  args: {
    label: "Store name",
    placeholder: "Enter store name",
    requiredIndicator: true,
    autoComplete: "off",
  },
};

// Slim size
export const Slim: Story = {
  render: InteractiveTemplate,
  args: {
    label: "Store name",
    placeholder: "Enter store name",
    size: "slim",
    autoComplete: "off",
  },
};

// Right aligned
export const RightAligned: Story = {
  render: InteractiveTemplate,
  args: {
    label: "Price",
    type: "number",
    placeholder: "0.00",
    align: "right",
    autoComplete: "off",
  },
};

// Borderless variant
export const Borderless: Story = {
  render: InteractiveTemplate,
  args: {
    label: "Store name",
    placeholder: "Enter store name",
    variant: "borderless",
    autoComplete: "off",
  },
};

// Magic tone
export const MagicTone: Story = {
  render: InteractiveTemplate,
  args: {
    label: "AI Generated Content",
    placeholder: "Enter prompt",
    tone: "magic",
    autoComplete: "off",
  },
};

// Monospaced font
export const Monospaced: Story = {
  render: InteractiveTemplate,
  args: {
    label: "API Key",
    placeholder: "sk-1234567890abcdef",
    monospaced: true,
    autoComplete: "off",
  },
};

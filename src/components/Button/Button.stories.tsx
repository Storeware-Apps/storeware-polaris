import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./button";
import {
  CartIcon,
  PlusIcon,
  ExportIcon,
  ExternalIcon,
} from "@shopify/polaris-icons";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
# Button Component

A comprehensive Button component that provides 100% API compatibility with Shopify's Polaris Button component while being built on shadcn/ui foundation with Tailwind CSS.

## Features

- **100% Polaris Compatible**: Perfect API and visual compatibility with Shopify's Polaris design system
- **shadcn/ui Foundation**: Built on proven shadcn/ui patterns for reliability and customization
- **TypeScript First**: Full type safety with excellent IntelliSense support
- **Tailwind CSS**: Highly customizable styling system
- **Modern React**: Uses latest React patterns and best practices

## Variants

- **Default**: Standard button with Polaris default styling (used when no variant is specified)
- **Primary**: Main call-to-action buttons
- **Secondary**: Secondary actions
- **Tertiary**: Outlined buttons for less prominent actions
- **Plain**: Link-style buttons for navigation
- **MonochromePlain**: Muted link-style buttons

## Sizes

- **Micro**: 20px height (h-5) - for compact interfaces
- **Slim**: 24px height (h-6) - for tight spaces
- **Medium**: 32px height (h-8) - default size
- **Large**: 40px height (h-10) - for prominent actions
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "primary",
        "secondary",
        "tertiary",
        "plain",
        "monochromePlain",
      ],
      description: "Changes the visual appearance of the Button",
    },
    size: {
      control: "select",
      options: ["micro", "slim", "medium", "large"],
      description:
        "Changes the size of the button, giving it more or less padding",
    },
    tone: {
      control: "select",
      options: [undefined, "success", "critical"],
      description: "Sets the color treatment of the Button",
    },
    fullWidth: {
      control: "boolean",
      description: "Allows the button to grow to the width of its container",
    },
    disabled: {
      control: "boolean",
      description: "Disables the button, disallowing interaction",
    },
    loading: {
      control: "boolean",
      description:
        "Replaces button text with a spinner while a background action is being performed",
    },
    pressed: {
      control: "boolean",
      description: "Sets the button in a pressed state",
    },
    disclosure: {
      control: "select",
      options: [undefined, true, "up", "down", "select"],
      description: "Displays the button with a disclosure icon",
    },
    textAlign: {
      control: "select",
      options: ["start", "center", "end", "left", "right"],
      description: "Changes the inner text alignment of the button",
    },
    onClick: { action: "clicked" },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic variants
export const Default: Story = {
  args: {
    children: "Click me",
    variant: "default",
  },
};

export const Primary: Story = {
  args: {
    children: "Add product",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Cancel",
    variant: "secondary",
  },
};

export const Tertiary: Story = {
  args: {
    children: "Learn more",
    variant: "tertiary",
  },
};

export const Plain: Story = {
  args: {
    children: "View shipping settings",
    variant: "plain",
  },
};

export const MonochromePlain: Story = {
  args: {
    children: "View details",
    variant: "monochromePlain",
  },
};

// Demonstrates default behavior when no variant is specified
export const NoVariantSpecified: Story = {
  args: {
    children: "No variant prop",
    // Note: no variant prop specified - should use default
  },
};

// Sizes
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="micro">Micro</Button>
      <Button size="slim">Slim</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>
  ),
};

// Tones
export const Tones: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button>Default</Button>
      <Button tone="success">Success</Button>
      <Button tone="critical">Critical</Button>
    </div>
  ),
};

// States
export const States: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button>Normal</Button>
      <Button disabled>Disabled</Button>
      <Button loading>Loading</Button>
      <Button pressed>Pressed</Button>
    </div>
  ),
};

// With Icons
export const WithIcons: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button icon={<PlusIcon />}>Add item</Button>
      <Button icon={<CartIcon />} variant="secondary">
        Add to cart
      </Button>
      <Button icon={<ExportIcon />} variant="tertiary">
        Download
      </Button>
    </div>
  ),
};

// Disclosure
export const Disclosure: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button disclosure="down">More actions</Button>
      <Button disclosure="up" variant="secondary">
        Less options
      </Button>
      <Button disclosure="select" variant="tertiary">
        Select option
      </Button>
    </div>
  ),
};

// Full Width
export const FullWidth: Story = {
  render: () => (
    <div className="w-80">
      <Button fullWidth>Full width button</Button>
    </div>
  ),
};

// As Links
export const AsLinks: Story = {
  args: {
    disabled: true,
  },

  render: () => (
    <div className="flex items-center gap-4">
      <Button url="/dashboard">Internal link</Button>
      <Button url="https://shopify.com" external icon={<ExternalIcon />}>
        External link
      </Button>
      <Button url="/settings" variant="plain">
        Settings
      </Button>
    </div>
  ),
};

// Text Alignment
export const TextAlignment: Story = {
  render: () => (
    <div className="w-80 space-y-2">
      <Button fullWidth textAlign="start">
        Start aligned
      </Button>
      <Button fullWidth textAlign="center">
        Center aligned
      </Button>
      <Button fullWidth textAlign="end">
        End aligned
      </Button>
    </div>
  ),
};

// Complex Example
export const ComplexExample: Story = {
  render: () => (
    <div className="space-y-4 p-6 bg-gray-50 rounded-lg">
      <h3 className="text-lg font-semibold">Product Actions</h3>
      <div className="flex gap-2">
        <Button icon={<PlusIcon />} tone="success">
          Add Product
        </Button>
        <Button variant="secondary" disclosure="down">
          More actions
        </Button>
        <Button variant="tertiary" icon={<ExportIcon />}>
          Export
        </Button>
      </div>
      <div className="flex gap-2">
        <Button variant="plain" url="/help">
          Need help?
        </Button>
        <Button variant="monochromePlain" url="/docs">
          View documentation
        </Button>
      </div>
    </div>
  ),
};

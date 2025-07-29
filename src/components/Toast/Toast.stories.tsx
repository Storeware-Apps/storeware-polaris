import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button/button";
import { Toaster, toast } from "./toast";

const meta = {
  title: "Components/Toast",
  component: Toaster,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
# Toast Component Documentation

## Overview

The Toast component provides 100% API compatibility with Shopify's App Bridge Toast API while being built on shadcn/ui Sonner foundation with Tailwind CSS. The Toast API displays a non-disruptive message that appears at the bottom of the interface to provide quick and short feedback on the outcome of an action.

## Features

- **100% App Bridge Compatible**: Perfect API compatibility with Shopify's App Bridge Toast API
- **Custom Dark Design**: Features #0d1213 background with white text for modern appearance
- **Content-Fit Width**: Toast width automatically adjusts to content length
- **Clean Close Button**: Right-positioned close button without circular background
- **shadcn/ui Foundation**: Built on proven Sonner toast library for reliability
- **TypeScript First**: Full type safety with excellent IntelliSense support
- **Tailwind CSS**: Highly customizable styling system
- **Modern React**: Uses latest React patterns and best practices

## Installation

\`\`\`bash
pnpm install @storeware/polaris
\`\`\`

## Basic Usage

### Setup

First, add the Toaster component to your app layout:

\`\`\`tsx
import { Toaster } from "@storeware/polaris";

function App() {
  return (
    <div>
      {/* Your app content */}
      <Toaster />
    </div>
  );
}
\`\`\`

### Show Toast

\`\`\`tsx
import { toast } from "@storeware/polaris";

function MyComponent() {
  const handleClick = () => {
    toast.show('Message sent');
  };

  return <Button onClick={handleClick}>Show Toast</Button>;
}
\`\`\`

## API Reference

### toast.show(message, options)

Shows a toast notification.

**Parameters:**
- \`message\` (string): The message to display
- \`options\` (ToastOptions, optional): Configuration options

**Returns:** string - The toast ID

### toast.hide(id)

Hides a specific toast notification.

**Parameters:**
- \`id\` (string): The toast ID returned from show()

### ToastOptions

- \`duration\` (number): Duration in milliseconds (default: 4000)
- \`action\` (ToastAction): Action button configuration
- \`onDismiss\` (function): Callback when toast is dismissed
- \`dismissible\` (boolean): Whether toast can be dismissed (default: true)

### ToastAction

- \`label\` (string): Label for the action button
- \`onClick\` (function): Callback when action is clicked
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    theme: {
      control: { type: "select" },
      options: ["light", "dark", "system"],
    },
    position: {
      control: { type: "select" },
      options: [
        "top-left",
        "top-center",
        "top-right",
        "bottom-left",
        "bottom-center",
        "bottom-right",
      ],
    },
  },
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic toast example
export const Default: Story = {
  render: args => (
    <div>
      <Button onClick={() => toast.show("Message sent")}>Show Toast</Button>
      <Toaster {...args} />
    </div>
  ),
};

// Toast with duration
export const WithDuration: Story = {
  render: args => (
    <div>
      <Button onClick={() => toast.show("Product saved", { duration: 5000 })}>
        Show Toast (5s duration)
      </Button>
      <Toaster {...args} />
    </div>
  ),
};

// Toast with action
export const WithAction: Story = {
  render: args => (
    <div>
      <Toaster {...args} />
      <Button
        onClick={() =>
          toast.show("Product archived", {
            action: {
              label: "Undo",
              onClick: () => {},
            },
          })
        }>
        Show Toast with Action
      </Button>
    </div>
  ),
};

// Toast with dismiss callback
export const WithDismissCallback: Story = {
  render: args => (
    <div>
      <Button
        onClick={() =>
          toast.show("Settings updated", {
            onDismiss: () => {},
          })
        }>
        Show Toast with Dismiss Callback
      </Button>
      <Toaster {...args} />
    </div>
  ),
};

// Multiple toasts
export const MultipleToasts: Story = {
  render: args => (
    <div style={{ display: "flex", gap: "8px" }}>
      <Button onClick={() => toast.show("First message")}>Toast 1</Button>
      <Button onClick={() => toast.show("Second message")}>Toast 2</Button>
      <Button onClick={() => toast.show("Third message")}>Toast 3</Button>
      <Toaster {...args} />
    </div>
  ),
};

// Hide toast example
export const HideToast: Story = {
  render: args => {
    let toastId: string;

    return (
      <div style={{ display: "flex", gap: "8px" }}>
        <Button
          onClick={() => {
            toastId = toast.show("This toast can be hidden manually", {
              duration: 100000000000000,
            });
          }}>
          Show Long Toast
        </Button>
        <Button
          onClick={() => {
            if (toastId) {
              toast.hide(toastId);
            }
          }}>
          Hide Toast
        </Button>
        <Toaster {...args} />
      </div>
    );
  },
};

// Different positions
export const TopPosition: Story = {
  args: {
    position: "top-center",
  },
  render: args => (
    <div>
      <Button onClick={() => toast.show("Toast at top")}>
        Show Toast at Top
      </Button>
      <Toaster {...args} />
    </div>
  ),
};

// With close button disabled
export const NoCloseButton: Story = {
  args: {
    closeButton: false,
  },
  render: args => (
    <div>
      <Button onClick={() => toast.show("Toast without close button")}>
        Show Toast (No Close Button)
      </Button>
      <Toaster {...args} />
    </div>
  ),
};

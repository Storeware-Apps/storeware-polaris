import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./badge";
import { CheckIcon, AlertTriangleIcon, InfoIcon } from "@shopify/polaris-icons";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
# Badge Component

A comprehensive Badge component that provides 100% API compatibility with Shopify's Polaris Badge component while being built on shadcn/ui foundation with Tailwind CSS.

## Features

- **100% Polaris Compatible**: Perfect API and visual compatibility with Shopify's Polaris design system
- **shadcn/ui Foundation**: Built on proven shadcn/ui patterns for reliability and customization
- **TypeScript First**: Full type safety with excellent IntelliSense support
- **Tailwind CSS**: Highly customizable styling system
- **Modern React**: Uses latest React patterns and best practices

## Tones

The Badge component supports various tones to convey different meanings:

- **default**: Neutral information
- **success**: Positive status or completion
- **critical**: Errors or urgent attention needed
- **warning**: Caution or potential issues
- **attention**: Important information that needs focus
- **info**: General informational content
- **new**: New features or content
- **read-only**: Read-only or disabled state
- **enabled**: Active or enabled state
- **subdued**: Less prominent information

## Progress States

- **incomplete**: Work in progress or not started
- **partiallyComplete**: Partially finished
- **complete**: Fully completed (default)

## Sizes

- **small**: Compact badge for tight spaces
- **medium**: Standard badge size (default)

## Usage

\`\`\`tsx
import { Badge } from "@storeware/polaris";

// Basic usage
<Badge>Fulfilled</Badge>

// With tone
<Badge tone="success">Paid</Badge>

// With progress
<Badge progress="partiallyComplete">In Progress</Badge>

// With icon
<Badge tone="critical" icon={AlertTriangleIcon}>Error</Badge>

// Small size
<Badge size="small" tone="info">New</Badge>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    tone: {
      control: "select",
      options: [
        "default",
        "success",
        "critical",
        "warning",
        "attention",
        "info",
        "new",
        "read-only",
        "enabled",
        "subdued",
      ],
    },
    progress: {
      control: "select",
      options: ["incomplete", "partiallyComplete", "complete"],
    },
    size: {
      control: "select",
      options: ["small", "medium"],
    },
    icon: {
      control: false,
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default Badge
export const Default: Story = {
  args: {
    children: "Fulfilled",
  },
};

// Small Badge
export const Small: Story = {
  args: {
    children: "New",
    size: "small",
  },
};

// Success Tone
export const Success: Story = {
  args: {
    children: "Paid",
    tone: "success",
  },
};

// Critical Tone
export const Critical: Story = {
  args: {
    children: "Error",
    tone: "critical",
  },
};

// Warning Tone
export const Warning: Story = {
  args: {
    children: "Pending",
    tone: "warning",
  },
};

// Attention Tone
export const Attention: Story = {
  args: {
    children: "Review needed",
    tone: "attention",
  },
};

// Info Tone
export const Info: Story = {
  args: {
    children: "Information",
    tone: "info",
  },
};

// New Tone
export const New: Story = {
  args: {
    children: "New feature",
    tone: "new",
  },
};

// Progress States
export const Incomplete: Story = {
  args: {
    children: "In progress",
    progress: "incomplete",
  },
};

export const PartiallyComplete: Story = {
  args: {
    children: "Partially done",
    progress: "partiallyComplete",
  },
};

export const Complete: Story = {
  args: {
    children: "Completed",
    progress: "complete",
  },
};

// With Icons
export const WithSuccessIcon: Story = {
  args: {
    children: "Verified",
    tone: "success",
    icon: CheckIcon,
  },
};

export const WithCriticalIcon: Story = {
  args: {
    children: "Alert",
    tone: "critical",
    icon: AlertTriangleIcon,
  },
};

export const WithInfoIcon: Story = {
  args: {
    children: "Details",
    tone: "info",
    icon: InfoIcon,
  },
};

// All Tones Showcase
export const AllTones: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge tone="default">Default</Badge>
      <Badge tone="success">Success</Badge>
      <Badge tone="critical">Critical</Badge>
      <Badge tone="warning">Warning</Badge>
      <Badge tone="attention">Attention</Badge>
      <Badge tone="info">Info</Badge>
      <Badge tone="new">New</Badge>
      <Badge tone="read-only">Read-only</Badge>
      <Badge tone="enabled">Enabled</Badge>
      <Badge tone="subdued">Subdued</Badge>
    </div>
  ),
};

// Size Comparison
export const SizeComparison: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Badge size="small" tone="success">Small</Badge>
      <Badge size="medium" tone="success">Medium</Badge>
    </div>
  ),
};

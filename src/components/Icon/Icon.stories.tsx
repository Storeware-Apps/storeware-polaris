import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./icon";
import {
  PlusCircleIcon,
  AlertTriangleIcon,
  CheckCircleIcon,
  InfoIcon,
  StarIcon,
  HeartIcon,
} from "@shopify/polaris-icons";

const meta = {
  title: "Images and Icons/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `# Icon Component Documentation

## Overview

The Icon component provides 100% API compatibility with Shopify's Polaris Icon component while being built on shadcn/ui foundation with Tailwind CSS. Icons are used to visually communicate core parts of the product and available actions. They can act as wayfinding tools to help merchants more easily understand where they are in the product, and common interaction patterns that are available.

## Features

- **100% Polaris Compatible**: Perfect API and visual compatibility with Shopify's Polaris design system
- **shadcn/ui Foundation**: Built on proven shadcn/ui patterns for reliability and customization
- **TypeScript First**: Full type safety with excellent IntelliSense support
- **Tailwind CSS**: Highly customizable styling system
- **Accessibility**: Built-in screen reader support with proper ARIA attributes

## Tone Options

The \`tone\` prop accepts the following values:

- \`"base"\` - Default text color
- \`"inherit"\` - Inherit color from parent
- \`"subdued"\` - Muted text color
- \`"caution"\` - Amber warning color
- \`"warning"\` - Orange warning color
- \`"critical"\` - Red error color
- \`"interactive"\` - Blue interactive color
- \`"info"\` - Blue info color
- \`"success"\` - Green success color
- \`"primary"\` - Primary brand color
- \`"emphasis"\` - Strong emphasis color
- \`"magic"\` - Purple magic color
- \`"textCaution"\` - Text version of caution
- \`"textWarning"\` - Text version of warning
- \`"textCritical"\` - Text version of critical
- \`"textInfo"\` - Text version of info
- \`"textSuccess"\` - Text version of success
- \`"textPrimary"\` - Text version of primary
- \`"textMagic"\` - Text version of magic

## Accessibility

Using icons can be a great help to merchants who have difficulties with reading, language, attention, and low vision.

### Best Practices

- **Pair text and icons for clarity** - Icons work best when paired with descriptive text
- **Give the icon a text equivalent** - Use \`accessibilityLabel\` if the icon's purpose isn't conveyed in another way
- **Don't describe what the icon looks like** - Focus on the icon's purpose, not its appearance
- **Don't include "icon" in the text equivalent** - Screen readers already announce it as an icon
- **Don't duplicate adjacent text** - Avoid repeating information that's already available`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    source: {
      description:
        "The SVG contents to display in the icon (icons should fit in a 20 × 20 pixel viewBox)",
      control: false,
    },
    tone: {
      description: "Set the color for the SVG fill",
      control: "select",
      options: [
        "base",
        "inherit",
        "subdued",
        "caution",
        "warning",
        "critical",
        "interactive",
        "info",
        "success",
        "primary",
        "emphasis",
        "magic",
        "textCaution",
        "textWarning",
        "textCritical",
        "textInfo",
        "textSuccess",
        "textPrimary",
        "textMagic",
      ],
    },
    accessibilityLabel: {
      description: "Descriptive text to be read to screenreaders",
      control: "text",
    },
    className: {
      description: "Additional CSS class name for custom styling",
      control: "text",
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    source: PlusCircleIcon,
  },
};

// Colored story
export const Colored: Story = {
  args: {
    source: AlertTriangleIcon,
    tone: "info",
  },
};

// With accessibility label
export const WithAccessibilityLabel: Story = {
  args: {
    source: PlusCircleIcon,
    accessibilityLabel: "Add new item",
  },
};

// Custom SVG
export const WithCustomSVG: Story = {
  args: {
    source: (
      <svg viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 2L3 7v11h4v-6h6v6h4V7l-7-5z" />
      </svg>
    ),
    tone: "primary",
  },
};

// All tone variants
export const AllTones: Story = {
  render: () => (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="flex flex-col items-center gap-2">
        <Icon source={PlusCircleIcon} tone="base" />
        <span className="text-xs">base</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon source={InfoIcon} tone="info" />
        <span className="text-xs">info</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon source={CheckCircleIcon} tone="success" />
        <span className="text-xs">success</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon source={AlertTriangleIcon} tone="critical" />
        <span className="text-xs">critical</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon source={AlertTriangleIcon} tone="warning" />
        <span className="text-xs">warning</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon source={AlertTriangleIcon} tone="caution" />
        <span className="text-xs">caution</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon source={StarIcon} tone="primary" />
        <span className="text-xs">primary</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon source={HeartIcon} tone="magic" />
        <span className="text-xs">magic</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon source={PlusCircleIcon} tone="subdued" />
        <span className="text-xs">subdued</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon source={PlusCircleIcon} tone="interactive" />
        <span className="text-xs">interactive</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon source={PlusCircleIcon} tone="emphasis" />
        <span className="text-xs">emphasis</span>
      </div>
    </div>
  ),
};

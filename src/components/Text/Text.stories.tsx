import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

const meta = {
  title: "Components/Text",
  component: Text,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
# Text Component

A comprehensive Text component that provides 100% API compatibility with Shopify's Polaris Text component while being built on shadcn/ui foundation with Tailwind CSS.

## Features

- **100% Polaris Compatible**: Perfect API and visual compatibility with Shopify's Polaris design system
- **shadcn/ui Foundation**: Built on proven shadcn/ui patterns for reliability and customization
- **TypeScript First**: Full type safety with excellent IntelliSense support
- **Tailwind CSS**: Highly customizable styling system
- **Modern React**: Uses latest React patterns and best practices

## Variants

### Heading Variants
- **heading3xl**: Largest heading (36px/2.25rem) - responsive
- **heading2xl**: Second largest heading (30px/1.875rem) - responsive  
- **headingXl**: Extra large heading (24px/1.5rem) - responsive
- **headingLg**: Large heading (20px/1.25rem) - responsive
- **headingMd**: Medium heading (14px/0.875rem)
- **headingSm**: Small heading (13px/0.8125rem)
- **headingXs**: Extra small heading (12px/0.75rem)

### Body Variants
- **bodyLg**: Large body text (14px/0.875rem)
- **bodyMd**: Medium body text (13px/0.8125rem) - default
- **bodySm**: Small body text (12px/0.75rem)
- **bodyXs**: Extra small body text (11px/0.6875rem)

## Tones

- **base**: Default text color
- **disabled**: Muted text for disabled states
- **inherit**: Inherits color from parent
- **success**: Green text for positive states
- **critical**: Red text for error states
- **caution**: Yellow text for warning states
- **subdued**: Gray text for secondary information
- **text-inverse**: White text for dark backgrounds
- **text-inverse-secondary**: Light gray text for dark backgrounds
- **magic**: Purple text for special features
- **magic-subdued**: Muted purple text
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "Text content to display",
    },
    variant: {
      control: "select",
      options: [
        "headingXs",
        "headingSm",
        "headingMd",
        "headingLg",
        "headingXl",
        "heading2xl",
        "heading3xl",
        "bodyXs",
        "bodySm",
        "bodyMd",
        "bodyLg",
      ],
      description: "Typographic style of text",
    },
    as: {
      control: "select",
      options: [
        "dt",
        "dd",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "p",
        "span",
        "strong",
        "legend",
      ],
      description: "HTML element type",
    },
    alignment: {
      control: "select",
      options: ["start", "center", "end", "justify"],
      description: "Horizontal text alignment",
    },
    tone: {
      control: "select",
      options: [
        "base",
        "disabled",
        "inherit",
        "success",
        "critical",
        "caution",
        "subdued",
        "text-inverse",
        "text-inverse-secondary",
        "magic",
        "magic-subdued",
      ],
      description: "Text color tone",
    },
    fontWeight: {
      control: "select",
      options: ["regular", "medium", "semibold", "bold"],
      description: "Font weight",
    },
    breakWord: {
      control: "boolean",
      description: "Prevent text from overflowing",
    },
    truncate: {
      control: "boolean",
      description: "Truncate text with ellipsis",
    },
    numeric: {
      control: "boolean",
      description: "Use monospace numeric font",
    },
    visuallyHidden: {
      control: "boolean",
      description: "Hide text visually but keep for screen readers",
    },
    textDecorationLine: {
      control: "select",
      options: [undefined, "line-through"],
      description: "Text decoration",
    },
  },
  args: {
    children: "Sample text content",
    variant: "bodyMd",
    as: "span",
    alignment: "start",
    tone: "base",
    fontWeight: "regular",
    breakWord: false,
    truncate: false,
    numeric: false,
    visuallyHidden: false,
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic usage examples
export const Default: Story = {
  args: {
    children: "This is default body text",
  },
};

export const Heading: Story = {
  args: {
    children: "This is a heading",
    variant: "headingLg",
    as: "h2",
  },
};

// Variant showcase
export const HeadingVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <Text variant="heading3xl" as="h1">
        Heading 3XL
      </Text>
      <Text variant="heading2xl" as="h2">
        Heading 2XL
      </Text>
      <Text variant="headingXl" as="h3">
        Heading XL
      </Text>
      <Text variant="headingLg" as="h4">
        Heading Large
      </Text>
      <Text variant="headingMd" as="h5">
        Heading Medium
      </Text>
      <Text variant="headingSm" as="h6">
        Heading Small
      </Text>
      <Text variant="headingXs" as="h6">
        Heading XS
      </Text>
    </div>
  ),
};

export const BodyVariants: Story = {
  render: () => (
    <div className="space-y-2">
      <Text variant="bodyLg">
        Body Large - This is larger body text for emphasis
      </Text>
      <Text variant="bodyMd">
        Body Medium - This is the default body text size
      </Text>
      <Text variant="bodySm">
        Body Small - This is smaller body text for captions
      </Text>
      <Text variant="bodyXs">
        Body XS - This is the smallest body text size
      </Text>
    </div>
  ),
};

// Tone examples
export const Tones: Story = {
  render: () => (
    <div className="space-y-2">
      <Text tone="base">Base tone text</Text>
      <Text tone="subdued">Subdued tone text</Text>
      <Text tone="success">Success tone text</Text>
      <Text tone="critical">Critical tone text</Text>
      <Text tone="caution">Caution tone text</Text>
      <Text tone="disabled">Disabled tone text</Text>
      <Text tone="magic">Magic tone text</Text>
      <Text tone="magic-subdued">Magic subdued tone text</Text>
    </div>
  ),
};

// Alignment examples
export const Alignments: Story = {
  render: () => (
    <div className="w-64 space-y-2 border border-gray-200 p-4">
      <Text alignment="start">Left aligned text</Text>
      <Text alignment="center">Center aligned text</Text>
      <Text alignment="end">Right aligned text</Text>
      <Text alignment="justify">
        Justified text that will wrap and justify across multiple lines when the
        content is long enough
      </Text>
    </div>
  ),
};

// Font weight examples
export const FontWeights: Story = {
  render: () => (
    <div className="space-y-2">
      <Text fontWeight="regular">Regular weight text</Text>
      <Text fontWeight="medium">Medium weight text</Text>
      <Text fontWeight="semibold">Semibold weight text</Text>
      <Text fontWeight="bold">Bold weight text</Text>
    </div>
  ),
};

// Special features
export const SpecialFeatures: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <Text variant="headingSm">Break Word:</Text>
        <div className="w-32 border border-gray-200 p-2">
          <Text breakWord>ThisIsAVeryLongWordThatWouldNormallyOverflow</Text>
        </div>
      </div>

      <div>
        <Text variant="headingSm">Truncate:</Text>
        <div className="w-32 border border-gray-200 p-2">
          <Text truncate>This is a very long text that will be truncated</Text>
        </div>
      </div>

      <div>
        <Text variant="headingSm">Numeric:</Text>
        <Text numeric>1234567890</Text>
      </div>

      <div>
        <Text variant="headingSm">Line Through:</Text>
        <Text textDecorationLine="line-through">Strikethrough text</Text>
      </div>
    </div>
  ),
};

// Dark background example
export const InverseText: Story = {
  render: () => (
    <div className="bg-gray-900 p-4 space-y-2">
      <Text tone="text-inverse" variant="headingMd">
        Inverse text on dark background
      </Text>
      <Text tone="text-inverse-secondary">Secondary inverse text</Text>
    </div>
  ),
};

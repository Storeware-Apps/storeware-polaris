import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "./box";

const meta: Meta<typeof Box> = {
  title: "Components/Box",
  component: Box,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
A comprehensive Box component that provides 100% API compatibility with Shopify's Polaris Box component while being built on shadcn/ui foundation with Tailwind CSS.

## Features

- **100% Polaris Compatible**: Perfect API and visual compatibility with Shopify's Polaris design system
- **shadcn/ui Foundation**: Built on proven shadcn/ui patterns for reliability and customization
- **TypeScript First**: Full type safety with excellent IntelliSense support
- **Tailwind CSS**: Highly customizable styling system
- **Modern React**: Uses latest React patterns and best practices

## Background Colors

The Box component supports all Polaris background color tokens including surface, fill, and semantic colors.

## Border Properties

Full support for border colors, styles, widths, and radius with individual control over each side.

## Spacing System

Comprehensive padding system with responsive support and logical properties (block/inline).

## Layout Properties

Position, overflow, dimensions, and other layout properties for complete layout control.
        `,
      },
    },
  },
  argTypes: {
    children: {
      control: "text",
      description: "Content to display inside the box",
    },
    as: {
      control: "select",
      options: ["div", "span", "section", "legend", "ul", "li"],
      description: "HTML Element type",
    },
    background: {
      control: "select",
      options: [
        "bg",
        "bg-surface",
        "bg-surface-info",
        "bg-surface-success",
        "bg-surface-warning",
        "bg-surface-critical",
        "bg-fill",
        "bg-fill-info",
        "bg-fill-success",
        "bg-fill-warning",
        "bg-fill-critical",
      ],
      description: "Background color using Polaris tokens",
    },
    borderColor: {
      control: "select",
      options: [
        "border",
        "border-info",
        "border-success",
        "border-warning",
        "border-critical",
        "transparent",
      ],
      description: "Border color using Polaris tokens",
    },
    borderStyle: {
      control: "select",
      options: ["solid", "dashed"],
      description: "Border style",
    },
    borderRadius: {
      control: "select",
      options: ["0", "050", "100", "150", "200", "300", "400", "500", "full"],
      description: "Border radius using Polaris tokens",
    },
    borderWidth: {
      control: "select",
      options: ["0", "025", "050", "100"],
      description: "Border width using Polaris tokens",
    },
    color: {
      control: "select",
      options: [
        "text",
        "text-secondary",
        "text-critical",
        "text-success",
        "text-warning",
      ],
      description: "Text color using Polaris tokens",
    },
    padding: {
      control: "select",
      options: ["0", "100", "200", "300", "400", "500", "600", "800"],
      description: "Padding using Polaris space tokens",
    },
    shadow: {
      control: "select",
      options: ["0", "100", "200", "300", "400", "500", "600"],
      description: "Shadow using Polaris shadow tokens",
    },
    position: {
      control: "select",
      options: ["relative", "absolute", "fixed", "sticky"],
      description: "CSS position property",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    children: "This is a basic Box component",
    padding: "400",
  },
};

// Background colors
export const BackgroundColors: Story = {
  render: () => (
    <div className="space-y-4">
      <Box
        background="bg-surface"
        padding="400"
        borderWidth="025"
        borderColor="border"
      >
        Surface background
      </Box>
      <Box background="bg-surface-info" padding="400">
        Info background
      </Box>
      <Box background="bg-surface-success" padding="400">
        Success background
      </Box>
      <Box background="bg-surface-warning" padding="400">
        Warning background
      </Box>
      <Box background="bg-surface-critical" padding="400">
        Critical background
      </Box>
    </div>
  ),
};

// Border variations
export const BorderVariations: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <Box
        padding="400"
        borderWidth="025"
        borderColor="border"
        borderRadius="100"
      >
        Default border
      </Box>
      <Box
        padding="400"
        borderWidth="025"
        borderColor="border-critical"
        borderRadius="200"
      >
        Critical border
      </Box>
      <Box
        padding="400"
        borderWidth="050"
        borderColor="border-success"
        borderStyle="dashed"
      >
        Dashed success border
      </Box>
      <Box
        padding="400"
        borderWidth="025"
        borderColor="border"
        borderRadius="full"
      >
        Rounded border
      </Box>
    </div>
  ),
};

// Padding variations
export const PaddingVariations: Story = {
  render: () => (
    <div className="space-y-4">
      <Box background="bg-surface-secondary" padding="100">
        Small padding (100)
      </Box>
      <Box background="bg-surface-secondary" padding="300">
        Medium padding (300)
      </Box>
      <Box background="bg-surface-secondary" padding="600">
        Large padding (600)
      </Box>
    </div>
  ),
};

// Directional padding
export const DirectionalPadding: Story = {
  render: () => (
    <div className="space-y-4">
      <Box background="bg-surface-info" paddingBlock="200" paddingInline="600">
        Block: 200, Inline: 600
      </Box>
      <Box
        background="bg-surface-success"
        paddingBlockStart="100"
        paddingBlockEnd="400"
        paddingInlineStart="200"
        paddingInlineEnd="800"
      >
        Individual padding values
      </Box>
    </div>
  ),
};

// Shadow variations
export const ShadowVariations: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-6 p-8">
      <Box padding="400" shadow="100" background="bg-surface">
        Shadow 100
      </Box>
      <Box padding="400" shadow="300" background="bg-surface">
        Shadow 300
      </Box>
      <Box padding="400" shadow="500" background="bg-surface">
        Shadow 500
      </Box>
    </div>
  ),
};

// Text colors
export const TextColors: Story = {
  render: () => (
    <div className="space-y-4">
      <Box padding="400" color="text" background="bg-surface">
        Default text color
      </Box>
      <Box padding="400" color="text-secondary" background="bg-surface">
        Secondary text color
      </Box>
      <Box padding="400" color="text-critical" background="bg-surface">
        Critical text color
      </Box>
      <Box padding="400" color="text-success" background="bg-surface">
        Success text color
      </Box>
    </div>
  ),
};

// Layout properties
export const LayoutProperties: Story = {
  render: () => (
    <div className="space-y-4">
      <Box
        padding="400"
        background="bg-surface-secondary"
        width="200px"
        minHeight="100px"
        position="relative"
      >
        Fixed width, min height
      </Box>
      <Box
        padding="400"
        background="bg-surface-info"
        maxWidth="300px"
        overflowX="hidden"
      >
        Max width with hidden overflow: This is a long text that should be
        clipped
      </Box>
    </div>
  ),
};

// Different HTML elements
export const DifferentElements: Story = {
  render: () => (
    <div className="space-y-4">
      <Box
        as="div"
        padding="400"
        background="bg-surface"
        borderWidth="025"
        borderColor="border"
      >
        Div element (default)
      </Box>
      <Box as="section" padding="400" background="bg-surface-info">
        Section element
      </Box>
      <Box as="span" padding="200" background="bg-surface-success">
        Span element
      </Box>
    </div>
  ),
};

// Complex example
export const ComplexExample: Story = {
  render: () => (
    <Box
      background="bg-surface"
      padding="600"
      borderRadius="200"
      shadow="300"
      borderWidth="025"
      borderColor="border"
    >
      <Box
        background="bg-surface-info"
        padding="400"
        borderRadius="100"
        // marginBottom="400"
      >
        <Box as="div" color="text" paddingBlockEnd="200">
          Card Header
        </Box>
        <Box color="text-secondary">
          This is a complex example showing nested Box components with different
          styling.
        </Box>
      </Box>
      <Box
        background="bg-surface-success"
        padding="300"
        borderRadius="100"
        color="text-success"
      >
        Success message in a nested box
      </Box>
    </Box>
  ),
};

// Responsive padding
export const ResponsivePadding: Story = {
  args: {
    children:
      "This box has responsive padding - resize the viewport to see changes",
    background: "bg-surface-secondary",
    padding: { xs: "200", md: "400", lg: "600" },
  },
};

// Accessibility features
export const AccessibilityFeatures: Story = {
  render: () => (
    <div className="space-y-4">
      <Box
        as="section"
        role="region"
        padding="400"
        background="bg-surface"
        borderWidth="025"
        borderColor="border"
        tabIndex={0}
      >
        Focusable box with region role
      </Box>
      <Box visuallyHidden>
        This content is visually hidden but available to screen readers
      </Box>
      <Box printHidden padding="400" background="bg-surface-warning">
        This content is hidden when printing
      </Box>
    </div>
  ),
};

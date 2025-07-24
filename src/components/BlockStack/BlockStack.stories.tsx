import type { Meta, StoryObj } from "@storybook/react";
import { BlockStack } from "./blockStack";

const meta: Meta<typeof BlockStack> = {
  title: "Layout and Structure/BlockStack",
  component: BlockStack,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
A comprehensive BlockStack component that provides 100% API compatibility with Shopify's Polaris BlockStack component while being built on shadcn/ui foundation with Tailwind CSS.

## Features

- **100% Polaris Compatible**: Perfect API and visual compatibility with Shopify's Polaris design system
- **shadcn/ui Foundation**: Built on proven shadcn/ui patterns for reliability and customization
- **TypeScript First**: Full type safety with excellent IntelliSense support
- **Tailwind CSS**: Highly customizable styling system
- **Vertical Layout**: Use to display children vertically with full width by default
- **Responsive Gap**: Support for responsive spacing using Polaris design tokens
- **Flexible Alignment**: Control both vertical and horizontal alignment of children
- **Semantic HTML**: Support for different HTML elements via the 'as' prop

## Usage

Use BlockStack to display children vertically and horizontally with full width by default. Based on CSS Flexbox with flex-direction: column.

\`\`\`tsx
import { BlockStack } from "@storeware/polaris";

function MyComponent() {
  return (
    <BlockStack gap="400">
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </BlockStack>
  );
}
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    children: {
      control: false,
      description: "Content to display inside the block stack",
    },
    as: {
      control: { type: "select" },
      options: ["div", "span", "ul", "ol", "li", "fieldset"],
      description: "HTML Element type",
      table: {
        defaultValue: { summary: "div" },
      },
    },
    align: {
      control: { type: "select" },
      options: [
        "start",
        "center",
        "end",
        "space-around",
        "space-between",
        "space-evenly",
      ],
      description: "Vertical alignment of children",
      table: {
        defaultValue: { summary: "start" },
      },
    },
    inlineAlign: {
      control: { type: "select" },
      options: ["start", "center", "end", "baseline", "stretch"],
      description: "Horizontal alignment of children",
      table: {
        defaultValue: { summary: "start" },
      },
    },
    gap: {
      control: { type: "select" },
      options: [
        "0",
        "025",
        "050",
        "100",
        "150",
        "200",
        "300",
        "400",
        "500",
        "600",
        "800",
        "1000",
        "1200",
        "1600",
        "2000",
        "2400",
        "2800",
        "3200",
      ],
      description: "The spacing between children",
    },
    reverseOrder: {
      control: { type: "boolean" },
      description: "Reverse the render order of child items",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    id: {
      control: { type: "text" },
      description: "HTML id attribute",
    },
    role: {
      control: { type: "text" },
      description: "Aria role",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Helper components for consistent examples
const Placeholder = ({
  height = "48px",
  width = "auto",
  children,
  style,
}: {
  height?: string;
  width?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}) => (
  <div
    style={{
      background: "var(--p-color-text-info, #0066cc)",
      padding: "14px var(--p-space-200, 8px)",
      height: height,
      width: width,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontSize: "12px",
      fontWeight: "500",
      borderRadius: "4px",
      ...style,
    }}>
    {children || "Item"}
  </div>
);

const SpacingBackground = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      background: "var(--p-color-bg-surface-success, #e8f5e8)",
      padding: "var(--p-space-200, 8px)",
      minHeight: "200px",
    }}>
    {children}
  </div>
);

// Default story
export const Default: Story = {
  args: {},
  render: args => (
    <SpacingBackground>
      <BlockStack {...args}>
        <Placeholder>Item 1</Placeholder>
        <Placeholder>Item 2</Placeholder>
        <Placeholder>Item 3</Placeholder>
      </BlockStack>
    </SpacingBackground>
  ),
};

// Gap example - matches Polaris documentation
export const Gap: Story = {
  args: {
    gap: "500",
  },
  render: args => (
    <SpacingBackground>
      <BlockStack {...args}>
        <Placeholder />
        <Placeholder />
        <Placeholder />
      </BlockStack>
    </SpacingBackground>
  ),
};

// Vertical alignment examples
export const VerticalAlignment: Story = {
  args: {
    align: "center",
    gap: "200",
  },
  render: args => (
    <div style={{ height: "300px", border: "1px dashed #ccc" }}>
      <BlockStack {...args}>
        <Placeholder height="40px">Item 1</Placeholder>
        <Placeholder height="40px">Item 2</Placeholder>
        <Placeholder height="40px">Item 3</Placeholder>
      </BlockStack>
    </div>
  ),
};

// Horizontal alignment examples
export const HorizontalAlignment: Story = {
  args: {
    inlineAlign: "center",
    gap: "200",
  },
  render: args => (
    <SpacingBackground>
      <BlockStack {...args}>
        <Placeholder width="100px">Item 1</Placeholder>
        <Placeholder width="150px">Item 2</Placeholder>
        <Placeholder width="80px">Item 3</Placeholder>
      </BlockStack>
    </SpacingBackground>
  ),
};

// Reverse order example
export const ReverseOrder: Story = {
  args: {
    reverseOrder: true,
    gap: "200",
  },
  render: args => (
    <SpacingBackground>
      <BlockStack {...args}>
        <Placeholder>First Item</Placeholder>
        <Placeholder>Second Item</Placeholder>
        <Placeholder>Third Item</Placeholder>
      </BlockStack>
    </SpacingBackground>
  ),
};

// Different HTML elements
export const DifferentElements: Story = {
  args: {
    as: "ul",
    gap: "200",
  },
  render: args => (
    <SpacingBackground>
      <BlockStack {...args}>
        <li style={{ listStyle: "none" }}>
          <Placeholder>List Item 1</Placeholder>
        </li>
        <li style={{ listStyle: "none" }}>
          <Placeholder>List Item 2</Placeholder>
        </li>
        <li style={{ listStyle: "none" }}>
          <Placeholder>List Item 3</Placeholder>
        </li>
      </BlockStack>
    </SpacingBackground>
  ),
};

// Responsive gap example
export const ResponsiveGap: Story = {
  args: {
    gap: { xs: "200", md: "400", lg: "600" },
  },
  render: args => (
    <SpacingBackground>
      <BlockStack {...args}>
        <Placeholder>Responsive Item 1</Placeholder>
        <Placeholder>Responsive Item 2</Placeholder>
        <Placeholder>Responsive Item 3</Placeholder>
      </BlockStack>
    </SpacingBackground>
  ),
};

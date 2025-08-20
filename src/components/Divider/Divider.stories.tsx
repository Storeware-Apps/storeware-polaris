import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "./divider";
import { Card } from "../Card/Card";
import { Text } from "../Text/Text";
import { BlockStack } from "../BlockStack/blockStack";

const meta: Meta<typeof Divider> = {
  title: "Layout and Structure/Divider",
  component: Divider,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
A comprehensive Divider component that provides 100% API compatibility with Shopify's Polaris Divider component while being built on shadcn/ui foundation with Tailwind CSS.

## Features

- **100% Polaris Compatible**: Perfect API and visual compatibility with Shopify's Polaris design system
- **shadcn/ui Foundation**: Built on proven shadcn/ui patterns for reliability and customization
- **TypeScript First**: Full type safety with excellent IntelliSense support
- **Tailwind CSS**: Highly customizable styling system
- **Content Separation**: Use to separate or group content visually
- **Flexible Styling**: Support for different border colors and widths using Polaris design tokens

## Usage

Use Divider to separate or group content. The component renders as an HTML \`<hr>\` element with appropriate styling.

\`\`\`tsx
import { Divider } from "@storeware/polaris";

function MyComponent() {
  return (
    <div>
      <div>Content above</div>
      <Divider />
      <div>Content below</div>
    </div>
  );
}
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    borderColor: {
      control: { type: "select" },
      options: [
        "border",
        "border-secondary",
        "border-tertiary",
        "border-inverse",
        "border-brand",
        "border-info",
        "border-success",
        "border-warning",
        "border-critical",
        "transparent",
      ],
      description: "Divider border color",
      table: {
        defaultValue: { summary: "border-secondary" },
      },
    },
    borderWidth: {
      control: { type: "select" },
      options: ["0", "025", "050", "100", "150", "200", "300", "400", "500"],
      description: "Divider border width",
      table: {
        defaultValue: { summary: "025" },
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {},
  render: args => (
    <Card>
      <BlockStack gap="400">
        <Text variant="bodyMd">Content above the divider</Text>
        <Divider {...args} />
        <Text variant="bodyMd">Content below the divider</Text>
      </BlockStack>
    </Card>
  ),
};

// Color example - matches Polaris documentation
export const Color: Story = {
  args: {},
  render: args => (
    <Card>
      <BlockStack gap="500">
        <Text as="h1" variant="headingSm">
          Default
        </Text>
        <Divider {...args} />
        <Text as="h1" variant="headingSm">
          Border
        </Text>
        <Divider {...args} borderColor="border" />
        <Text as="h1" variant="headingSm">
          Border inverse
        </Text>
        <Divider {...args} borderColor="border-inverse" />
        <Text as="h1" variant="headingSm">
          Transparent
        </Text>
        <Divider {...args} borderColor="transparent" />
      </BlockStack>
    </Card>
  ),
};

// Border width variations
export const BorderWidth: Story = {
  args: {},
  render: args => (
    <Card>
      <BlockStack gap="500">
        <Text as="h1" variant="headingSm">
          Thin (025)
        </Text>
        <Divider {...args} borderWidth="025" />
        <Text as="h1" variant="headingSm">
          Medium (050)
        </Text>
        <Divider {...args} borderWidth="050" />
        <Text as="h1" variant="headingSm">
          Thick (100)
        </Text>
        <Divider {...args} borderWidth="100" />
        <Text as="h1" variant="headingSm">
          Extra Thick (200)
        </Text>
        <Divider {...args} borderWidth="200" />
      </BlockStack>
    </Card>
  ),
};

// Tone variations
export const ToneVariations: Story = {
  args: {},
  render: args => (
    <Card>
      <BlockStack gap="500">
        <Text as="h1" variant="headingSm">
          Brand
        </Text>
        <Divider {...args} borderColor="border-brand" />
        <Text as="h1" variant="headingSm">
          Success
        </Text>
        <Divider {...args} borderColor="border-success" />
        <Text as="h1" variant="headingSm">
          Warning
        </Text>
        <Divider {...args} borderColor="border-warning" />
        <Text as="h1" variant="headingSm">
          Critical
        </Text>
        <Divider {...args} borderColor="border-critical" />
        <Text as="h1" variant="headingSm">
          Info
        </Text>
        <Divider {...args} borderColor="border-info" />
      </BlockStack>
    </Card>
  ),
};

// In content sections
export const InContentSections: Story = {
  args: {},
  render: args => (
    <div style={{ maxWidth: "600px", padding: "20px" }}>
      <BlockStack gap="400">
        <Text variant="headingLg" as="h2">
          Product Information
        </Text>
        <Text variant="bodyMd">
          This is the main product description that provides detailed information
          about the product features and benefits.
        </Text>
        <Divider {...args} />
        <Text variant="headingMd" as="h3">
          Specifications
        </Text>
        <Text variant="bodyMd">
          Technical specifications and detailed measurements for this product.
        </Text>
        <Divider {...args} />
        <Text variant="headingMd" as="h3">
          Reviews
        </Text>
        <Text variant="bodyMd">
          Customer reviews and ratings for this product.
        </Text>
      </BlockStack>
    </div>
  ),
};

// Custom styling
export const CustomStyling: Story = {
  args: {
    className: "my-8",
  },
  render: args => (
    <Card>
      <BlockStack gap="400">
        <Text variant="bodyMd">Content with custom margin</Text>
        <Divider {...args} />
        <Text variant="bodyMd">More content below</Text>
      </BlockStack>
    </Card>
  ),
};

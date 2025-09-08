import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "./link";
import { Text } from "../Text/Text";
// import { Banner } from "../B";
import { BlockStack } from "../BlockStack/blockStack";

const meta: Meta<typeof Link> = {
  title: "Navigation/Link",
  component: Link,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
A comprehensive Link component that provides 100% API compatibility with Shopify's Polaris Link component while being built on shadcn/ui foundation with Tailwind CSS.

## Features

- **100% Polaris Compatible**: Perfect API and visual compatibility with Shopify's Polaris design system
- **shadcn/ui Foundation**: Built on proven shadcn/ui patterns for reliability and customization
- **TypeScript First**: Full type safety with excellent IntelliSense support
- **Tailwind CSS**: Highly customizable styling system
- **Navigation**: Links take users to another place, usually within or following a sentence
- **Accessibility**: Full keyboard support and screen reader compatibility
- **External Link Support**: Proper handling of external links with security attributes

## Usage

Links are used primarily for navigation, and usually appear within or directly following a sentence.

\`\`\`tsx
import { Link } from "@storeware/polaris";

function MyComponent() {
  return (
    <p>
      Learn more about <Link url="https://help.shopify.com/manual">fulfilling orders</Link>.
    </p>
  );
}
\`\`\`

## Best Practices

### Buttons versus links
- **Links** are used primarily for navigation, and usually appear within or directly following a sentence
- **Buttons** are used primarily for actions, such as "Add", "Close", "Cancel", or "Save"

### External links
- Use default links whenever possible to avoid disorienting merchants
- External links should be used when merchants are performing a task or navigating outside of the admin
        `,
      },
    },
  },
  argTypes: {
    url: {
      control: { type: "text" },
      description: "The url to link to",
    },
    children: {
      control: { type: "text" },
      description: "The content to display inside the link",
    },
    external: {
      control: { type: "boolean" },
      description:
        "Makes the link open in a new tab (deprecated - use target instead)",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    target: {
      control: { type: "select" },
      options: [undefined, "_blank", "_self", "_parent", "_top"],
      description: "Where to display the url",
    },
    monochrome: {
      control: { type: "boolean" },
      description:
        "Makes the link color the same as the current text color and adds an underline",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    removeUnderline: {
      control: { type: "boolean" },
      description: "Removes text decoration underline to the link",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    accessibilityLabel: {
      control: { type: "text" },
      description: "Descriptive text to be read to screenreaders",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story - matches Polaris documentation exactly
export const Default: Story = {
  args: {
    url: "https://help.shopify.com/manual",
    children: "fulfilling orders",
  },
  render: args => (
    <Text variant="bodyMd" as="p">
      Learn more about <Link {...args} />.
    </Text>
  ),
};

// Monochrome link
export const Monochrome: Story = {
  args: {
    url: "https://help.shopify.com/manual",
    children: "fulfilling orders",
    monochrome: true,
  },
  render: args => (
    <Text variant="bodyMd" as="p">
      Learn more about <Link {...args} />.
    </Text>
  ),
};

// Monochrome in a banner - matches Polaris documentation
export const MonochromeInBanner: Story = {
  render: () => (
    <>
      Learn more about{" "}
      <Link url="https://help.shopify.com/manual">fulfilling orders</Link>
    </>
  ),
};

// External link
export const External: Story = {
  args: {
    url: "https://help.shopify.com/manual",
    children: "Shopify Help Center",
    external: true,
  },
};

// Using target instead of external (recommended)
export const WithTarget: Story = {
  args: {
    url: "https://help.shopify.com/manual",
    children: "Shopify Help Center",
    target: "_blank",
  },
};

// Standalone link
export const Standalone: Story = {
  args: {
    url: "https://shopify.com",
    children: "Visit Shopify",
  },
};

// Link without underline
export const WithoutUnderline: Story = {
  args: {
    url: "https://help.shopify.com/manual",
    children: "fulfilling orders",
    removeUnderline: true,
  },
  render: args => (
    <Text variant="bodyMd" as="p">
      Learn more about <Link {...args} />.
    </Text>
  ),
};

// Link with accessibility label
export const WithAccessibilityLabel: Story = {
  args: {
    url: "https://help.shopify.com/manual",
    children: "here",
    accessibilityLabel: "Learn more about fulfilling orders",
  },
  render: args => (
    <Text variant="bodyMd" as="p">
      Click <Link {...args} /> to learn more about fulfilling orders.
    </Text>
  ),
};

// Primary link (for IndexTable usage)
export const PrimaryLink: Story = {
  args: {
    url: "/products/123",
    children: "Product Name",
    dataPrimaryLink: true,
  },
};

// Multiple links in content
export const MultipleLinks: Story = {
  render: () => (
    <BlockStack gap="400">
      <Text variant="bodyMd" as="p">
        For more information, see our{" "}
        <Link url="https://help.shopify.com/manual">help documentation</Link> or
        contact our{" "}
        <Link url="https://help.shopify.com/questions">support team</Link>.
      </Text>
      <Text variant="bodyMd" as="p">
        You can also visit the{" "}
        <Link url="https://community.shopify.com" target="_blank">
          Shopify Community
        </Link>{" "}
        for additional resources.
      </Text>
    </BlockStack>
  ),
};

// Link with onClick handler
export const WithClickHandler: Story = {
  args: {
    url: "https://help.shopify.com/manual",
    children: "fulfilling orders",
    onClick: () => alert("Link clicked!"),
  },
  render: args => (
    <Text variant="bodyMd" as="p">
      Learn more about <Link {...args} />.
    </Text>
  ),
};

// Navigation links
export const NavigationLinks: Story = {
  render: () => (
    <nav>
      <BlockStack gap="200">
        <Link url="/dashboard">Dashboard</Link>
        <Link url="/products">Products</Link>
        <Link url="/orders">Orders</Link>
        <Link url="/customers">Customers</Link>
        <Link url="/analytics">Analytics</Link>
      </BlockStack>
    </nav>
  ),
};

import type { Meta, StoryObj } from "@storybook/react";
import { Page } from "./page";
import { Card } from "../Card/card";
import { Text } from "../Text/Text";

const meta: Meta<typeof Page> = {
  title: "Components/Page",
  component: Page,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
A comprehensive Page component that provides 100% API compatibility with Shopify's Polaris Page component while being built on shadcn/ui foundation with Tailwind CSS.

## Features

- **100% Polaris Compatible**: Perfect API and visual compatibility with Shopify's Polaris design system
- **shadcn/ui Foundation**: Built on proven shadcn/ui patterns for reliability and customization
- **TypeScript First**: Full type safety with excellent IntelliSense support
- **Tailwind CSS**: Highly customizable styling system
- **Modern React**: Uses latest React patterns and best practices

## Purpose

Use to build the outer wrapper of a page, including the page title and associated actions. The page component should always provide a title for the page header and be organized around a primary activity.

## Layout Options

The Page component supports three layout widths:
- **Default**: Standard max-width of 1200px with centered content
- **Full Width**: Removes max-width constraints for dashboard-style layouts
- **Narrow Width**: Reduced max-width of 760px for single-column layouts

## Action System

Pages support a comprehensive action system:
- **Primary Action**: The main call-to-action button
- **Secondary Actions**: Additional actions displayed as secondary buttons
- **Action Groups**: Organized collections of related actions
- **Back Action**: Navigation back to parent pages

## Navigation

Built-in pagination support for navigating between related objects or pages with previous/next functionality.

## Best Practices

- Always provide a title for the page header
- Always provide breadcrumbs when a page has a parent page
- Be organized around a primary activity
- Provide other page-level actions as secondary actions in the page header
- When the page represents an object of a certain type, provide pagination links
        `,
      },
    },
  },
  argTypes: {
    title: {
      control: "text",
      description: "Page title, in large type",
    },
    subtitle: {
      control: "text",
      description: "Page subtitle, in regular type",
    },
    compactTitle: {
      control: "boolean",
      description: "Removes spacing between title and subtitle",
    },
    titleHidden: {
      control: "boolean",
      description: "Visually hide the title",
    },
    fullWidth: {
      control: "boolean",
      description: "Remove the normal max-width on the page",
    },
    narrowWidth: {
      control: "boolean",
      description: "Decreases the maximum layout width",
    },
    children: {
      control: false,
      description: "The contents of the page",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Page>;

// Default story - matches Polaris documentation example
export const Default: Story = {
  args: {
    backAction: { content: "Products", url: "#" },
    title: "3/4 inch Leather pet collar",
    titleMetadata: (
      <span
        style={{
          backgroundColor: "#36B37E",
          color: "white",
          padding: "2px 8px",
          borderRadius: "4px",
          fontSize: "12px",
          fontWeight: "500",
        }}>
        Paid
      </span>
    ),
    subtitle: "Perfect for any pet",
    compactTitle: true,
    primaryAction: { content: "Save", disabled: true },
    secondaryActions: [
      {
        content: "Duplicate",
        accessibilityLabel: "Secondary action label",
        onAction: () => alert("Duplicate action"),
      },
      {
        content: "View on your store",
        onAction: () => alert("View on your store action"),
      },
    ],
    actionGroups: [
      {
        title: "Promote",
        actions: [
          {
            content: "Share on Facebook",
            accessibilityLabel: "Individual action label",
            onAction: () => alert("Share on Facebook action"),
          },
        ],
      },
    ],
    pagination: {
      hasPrevious: true,
      hasNext: true,
    },
    children: (
      <Card>
        <div style={{ padding: "16px" }}>
          <Text as="h2" variant="headingMd">
            Credit card
          </Text>
          <Text as="p" variant="bodyMd">
            Credit card information
          </Text>
        </div>
      </Card>
    ),
  },
};

export const WithCustomPrimaryAction: Story = {
  args: {
    title: "Orders",
    primaryAction: {
      content: "Create order",
      onAction: () => alert("Create order"),
    },
    children: (
      <Card>
        <div style={{ padding: "16px" }}>
          <Text as="p" variant="bodyMd">
            Your orders will appear here
          </Text>
        </div>
      </Card>
    ),
  },
};

export const WithoutPrimaryActionInHeader: Story = {
  args: {
    title: "Settings",
    secondaryActions: [
      { content: "Export", onAction: () => alert("Export") },
      { content: "Import", onAction: () => alert("Import") },
    ],
    children: (
      <Card>
        <div style={{ padding: "16px" }}>
          <Text as="p" variant="bodyMd">
            Settings content
          </Text>
        </div>
      </Card>
    ),
  },
};

export const WithDestructiveSecondaryAction: Story = {
  args: {
    title: "Customer",
    primaryAction: { content: "Save", onAction: () => alert("Save") },
    secondaryActions: [
      {
        content: "Delete",
        destructive: true,
        onAction: () => alert("Delete"),
      },
    ],
    children: (
      <Card>
        <div style={{ padding: "16px" }}>
          <Text as="p" variant="bodyMd">
            Customer details
          </Text>
        </div>
      </Card>
    ),
  },
};

export const WithCustomSecondaryAction: Story = {
  args: {
    title: "Product",
    primaryAction: { content: "Save", onAction: () => alert("Save") },
    secondaryActions: [
      { content: "Duplicate", onAction: () => alert("Duplicate") },
      { content: "Archive", onAction: () => alert("Archive") },
    ],
    children: (
      <Card>
        <div style={{ padding: "16px" }}>
          <Text as="p" variant="bodyMd">
            Product details
          </Text>
        </div>
      </Card>
    ),
  },
};

export const WithTooltipAction: Story = {
  args: {
    title: "Dashboard",
    primaryAction: {
      content: "Export data",
      helpText: "Export all dashboard data to CSV",
      onAction: () => alert("Export data"),
    },
    children: (
      <Card>
        <div style={{ padding: "16px" }}>
          <Text as="p" variant="bodyMd">
            Dashboard content with tooltip action
          </Text>
        </div>
      </Card>
    ),
  },
};

export const WithSubtitle: Story = {
  args: {
    title: "Jar With Lock-Lid",
    subtitle: "Perfect for any kitchen",
    primaryAction: { content: "Save", onAction: () => alert("Save") },
    children: (
      <Card>
        <div style={{ padding: "16px" }}>
          <Text as="p" variant="bodyMd">
            Product details
          </Text>
        </div>
      </Card>
    ),
  },
};

export const WithExternalLink: Story = {
  args: {
    title: "Help Center",
    primaryAction: {
      content: "Visit help center",
      url: "https://help.shopify.com",
      external: true,
    },
    children: (
      <Card>
        <div style={{ padding: "16px" }}>
          <Text as="p" variant="bodyMd">
            External link example
          </Text>
        </div>
      </Card>
    ),
  },
};

export const WithoutPagination: Story = {
  args: {
    title: "Simple Page",
    primaryAction: { content: "Save", onAction: () => alert("Save") },
    children: (
      <Card>
        <div style={{ padding: "16px" }}>
          <Text as="p" variant="bodyMd">
            Page without pagination
          </Text>
        </div>
      </Card>
    ),
  },
};

export const FullWidth: Story = {
  args: {
    title: "Analytics Dashboard",
    fullWidth: true,
    primaryAction: { content: "Export", onAction: () => alert("Export") },
    children: (
      <Card>
        <div style={{ padding: "16px" }}>
          <Text as="p" variant="bodyMd">
            Full-width analytics dashboard
          </Text>
        </div>
      </Card>
    ),
  },
};

export const NarrowWidth: Story = {
  args: {
    title: "Account Settings",
    narrowWidth: true,
    primaryAction: { content: "Save", onAction: () => alert("Save") },
    children: (
      <Card>
        <div style={{ padding: "16px" }}>
          <Text as="p" variant="bodyMd">
            Narrow layout for single-column content
          </Text>
        </div>
      </Card>
    ),
  },
};

export const WithActionGroups: Story = {
  args: {
    title: "Product Management",
    primaryAction: { content: "Save", onAction: () => alert("Save") },
    actionGroups: [
      {
        title: "Promote",
        actions: [
          { content: "Share on Facebook", onAction: () => alert("Facebook") },
          { content: "Share on Twitter", onAction: () => alert("Twitter") },
        ],
      },
      {
        title: "More actions",
        actions: [
          { content: "Duplicate", onAction: () => alert("Duplicate") },
          { content: "Archive", onAction: () => alert("Archive") },
        ],
      },
    ],
    children: (
      <Card>
        <div style={{ padding: "16px" }}>
          <Text as="p" variant="bodyMd">
            Product content with grouped actions
          </Text>
        </div>
      </Card>
    ),
  },
};

export const WithContentAfterTitle: Story = {
  args: {
    title: "Order #1001",
    titleMetadata: (
      <span
        style={{
          backgroundColor: "#36B37E",
          color: "white",
          padding: "2px 8px",
          borderRadius: "4px",
          fontSize: "12px",
          fontWeight: "500",
        }}>
        Fulfilled
      </span>
    ),
    additionalMetadata: (
      <div style={{ marginTop: "8px" }}>
        <Text as="p" variant="bodySm" tone="subdued">
          Created on March 15, 2024 • Last updated 2 hours ago
        </Text>
      </div>
    ),
    primaryAction: { content: "Print", onAction: () => alert("Print") },
    children: (
      <Card>
        <div style={{ padding: "16px" }}>
          <Text as="p" variant="bodyMd">
            Order details with additional metadata
          </Text>
        </div>
      </Card>
    ),
  },
};

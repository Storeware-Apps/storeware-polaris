import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./card";
import { Text } from "../Text/Text";
import { Button } from "../Button/button";
import { ButtonGroup } from "../ButtonGroup/buttonGroup";
import {
  EditIcon,
  DeleteIcon,
  ExportIcon,
  ImportIcon,
  ViewIcon,
  SettingsIcon,
  PlusIcon,
  SearchIcon,
  FilterIcon,
  SortIcon,
  ArchiveIcon,
  CreditCardIcon,
  ProductIcon,
  OrderIcon,
  CheckIcon,
  AlertTriangleIcon,
  StarIcon,
  RefreshIcon,
} from "@shopify/polaris-icons";

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
# Card Component

A comprehensive Card component that provides 100% API compatibility with Shopify's Polaris Card component while being built on shadcn/ui foundation with Tailwind CSS.

## Features

- **100% Polaris Compatible**: Perfect API and visual compatibility with Shopify's Polaris design system
- **shadcn/ui Foundation**: Built on proven shadcn/ui patterns for reliability and customization
- **TypeScript First**: Full type safety with excellent IntelliSense support
- **Tailwind CSS**: Highly customizable styling system
- **Modern React**: Uses latest React patterns and best practices

## Available Examples

This Storybook includes all examples from the official Shopify Polaris Card documentation:

### Basic Examples
- **Default**: Basic card with content
- **With subdued background**: Card with muted background color
- **With varying padding**: Cards with different padding sizes
- **With responsive border radius**: Border radius applied at different breakpoints

### Layout Examples
- **With section**: Card with sectioned content areas
- **With subdued section**: Sections with muted styling
- **With multiple sections**: Multiple content sections with dividers
- **With multiple titled sections**: Sections with individual titles
- **With subsection**: Nested content organization
- **With flushed section**: Sections without padding

### Interactive Examples
- **With sections and actions**: Cards with action buttons
- **With sections and critical action**: Cards with destructive actions
- **With separate header**: Cards with dedicated header areas
- **With header actions**: Headers with action buttons
- **With header icon actions**: Headers with icon-based actions
- **With footer actions**: Cards with footer action areas
- **With multiple footer actions**: Multiple actions in footer
- **With custom footer action**: Custom styled footer actions
- **With critical footer action**: Destructive actions in footer
- **With custom React Node title**: Complex title content
- **With all elements**: Comprehensive example with all features

## Background Options

Cards support all Polaris background color tokens including:
- **Surface colors**: bg-surface, bg-surface-subdued, bg-surface-neutral
- **State colors**: bg-surface-success, bg-surface-caution, bg-surface-critical, bg-surface-warning
- **Brand colors**: bg-surface-brand, bg-surface-brand-subdued
- **Interactive colors**: bg-surface-hover, bg-surface-pressed

## Padding Scale

The padding prop accepts Polaris space scale values from 0 to 3200, with responsive object support for different breakpoints.

## Border Radius

The roundedAbove prop controls when border radius is applied based on screen size breakpoints.
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    background: {
      control: "select",
      options: [
        "bg-surface",
        "bg-surface-subdued",
        "bg-surface-neutral",
        "bg-surface-success",
        "bg-surface-caution",
        "bg-surface-critical",
        "bg-surface-warning",
        "bg-surface-highlight",
        "bg-surface-brand",
      ],
      description: "Background color using Polaris color tokens",
    },
    padding: {
      control: "select",
      options: ["0", "200", "400", "500", "600", "800", "1000"],
      description: "The spacing around the card content",
    },
    roundedAbove: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
      description: "Border radius value above a set breakpoint",
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// 1. Default - Basic card with content (matches Polaris exactly)
export const Default: Story = {
  render: args => (
    <div style={{ width: "400px" }}>
      <Card {...args}>
        <Text as="h2" variant="bodyMd">
          Content inside a card
        </Text>
      </Card>
    </div>
  ),
};

// 2. With subdued background - Card with muted background color (matches Polaris exactly)
export const WithSubduedBackground: Story = {
  args: {
    background: "bg-surface-disabled",
  },
  render: args => (
    <div style={{ width: "400px" }}>
      <Card {...args}>
        <Text as="h2" variant="bodyMd">
          Content with subdued background
        </Text>
      </Card>
    </div>
  ),
};

// 3. With varying padding - Cards with different padding sizes (matches Polaris exactly)
export const WithVaryingPadding: Story = {
  render: _args => (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      <Card padding="200">
        <Text variant="bodySm">Small padding (200)</Text>
      </Card>
      <Card padding="400">
        <Text variant="bodySm">Default padding (400)</Text>
      </Card>
      <Card padding="600">
        <Text variant="bodySm">Large padding (600)</Text>
      </Card>
      <Card padding="800">
        <Text variant="bodySm">Extra large padding (800)</Text>
      </Card>
    </div>
  ),
};

// 4. With responsive border radius - Border radius applied at different breakpoints (matches Polaris exactly)
export const WithResponsiveBorderRadius: Story = {
  args: {
    roundedAbove: "md",
  },
  render: args => (
    <div style={{ width: "400px" }}>
      <Card {...args}>
        <Text variant="bodyMd">
          This card has border radius applied from medium breakpoint and up.
          Resize your browser to see the effect.
        </Text>
      </Card>
    </div>
  ),
};

// 5. With section - Card with sectioned content areas (matches Polaris exactly)
export const WithSection: Story = {
  render: args => (
    <div style={{ width: "500px" }}>
      <Card {...args}>
        <div className="space-y-0">
          <div className="p-4 border-b">
            <Text as="h2" variant="headingMd">
              Online store dashboard
            </Text>
            <Text variant="bodyMd">
              View a summary of your online store&apos;s performance.
            </Text>
          </div>
          <div className="p-4">
            <Text variant="bodyMd">
              Your online store has been performing well this month. Sales are
              up 12% compared to last month.
            </Text>
          </div>
        </div>
      </Card>
    </div>
  ),
};

// 6. With subdued section - Sections with muted styling (matches Polaris exactly)
export const WithSubduedSection: Story = {
  render: args => (
    <div style={{ width: "500px" }}>
      <Card {...args}>
        <div className="space-y-0">
          <div className="p-4 border-b">
            <Text as="h2" variant="headingMd">
              Account settings
            </Text>
            <Text variant="bodyMd">
              Manage your account preferences and settings.
            </Text>
          </div>
          <div className="p-4 bg-gray-50">
            <Text variant="bodyMd" tone="subdued">
              This section contains inactive or less important information. Some
              features may be disabled for your current plan.
            </Text>
          </div>
        </div>
      </Card>
    </div>
  ),
};

// 7. With multiple sections - Multiple content sections with dividers (matches Polaris exactly)
export const WithMultipleSections: Story = {
  render: args => (
    <div style={{ width: "500px" }}>
      <Card {...args}>
        <div className="space-y-0">
          <div className="p-4 border-b">
            <Text as="h2" variant="headingMd">
              Customer details
            </Text>
            <Text variant="bodyMd">John Smith • john.smith@example.com</Text>
          </div>

          <div className="p-4 border-b">
            <Text as="h3" variant="headingSm">
              Shipping address
            </Text>
            <Text variant="bodyMd">
              123 Main Street
              <br />
              New York, NY 10001
              <br />
              United States
            </Text>
          </div>

          <div className="p-4">
            <Text as="h3" variant="headingSm">
              Order summary
            </Text>
            <Text variant="bodyMd">3 items • $127.50 total</Text>
          </div>
        </div>
      </Card>
    </div>
  ),
};

// 8. With multiple titled sections - Sections with individual titles (matches Polaris exactly)
export const WithMultipleTitledSections: Story = {
  render: args => (
    <div style={{ width: "500px" }}>
      <Card {...args}>
        <div className="space-y-0">
          <div className="p-4 border-b">
            <Text as="h2" variant="headingMd">
              Product information
            </Text>
            <div className="mt-2">
              <Text variant="bodyMd">
                <strong>Name:</strong> Wireless Headphones
              </Text>
              <Text variant="bodyMd">
                <strong>SKU:</strong> WH-001
              </Text>
              <Text variant="bodyMd">
                <strong>Price:</strong> $99.99
              </Text>
            </div>
          </div>

          <div className="p-4 border-b">
            <Text as="h2" variant="headingMd">
              Inventory
            </Text>
            <div className="mt-2">
              <Text variant="bodyMd">
                <strong>In stock:</strong> 45 units
              </Text>
              <Text variant="bodyMd">
                <strong>Reserved:</strong> 3 units
              </Text>
              <Text variant="bodyMd">
                <strong>Available:</strong> 42 units
              </Text>
            </div>
          </div>

          <div className="p-4">
            <Text as="h2" variant="headingMd">
              Sales performance
            </Text>
            <div className="mt-2">
              <Text variant="bodyMd">
                <strong>This month:</strong> 23 sold
              </Text>
              <Text variant="bodyMd">
                <strong>Last month:</strong> 18 sold
              </Text>
              <Text variant="bodyMd">
                <strong>Growth:</strong> +27.8%
              </Text>
            </div>
          </div>
        </div>
      </Card>
    </div>
  ),
};

// 9. With subsection - Nested content organization (matches Polaris exactly)
export const WithSubsection: Story = {
  render: args => (
    <div style={{ width: "500px" }}>
      <Card {...args}>
        <div className="space-y-0">
          <div className="p-4 border-b">
            <Text as="h2" variant="headingMd">
              Shipping settings
            </Text>
            <Text variant="bodyMd">
              Configure how orders are shipped to customers.
            </Text>
          </div>

          <div className="p-4">
            <div className="space-y-4">
              <div>
                <Text as="h3" variant="headingSm">
                  Domestic shipping
                </Text>
                <div className="ml-4 mt-2 space-y-2">
                  <Text variant="bodyMd">
                    • Standard shipping: 3-5 business days
                  </Text>
                  <Text variant="bodyMd">
                    • Express shipping: 1-2 business days
                  </Text>
                  <Text variant="bodyMd">
                    • Overnight shipping: Next business day
                  </Text>
                </div>
              </div>

              <div>
                <Text as="h3" variant="headingSm">
                  International shipping
                </Text>
                <div className="ml-4 mt-2 space-y-2">
                  <Text variant="bodyMd">
                    • International standard: 7-14 business days
                  </Text>
                  <Text variant="bodyMd">
                    • International express: 3-7 business days
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  ),
};

// 10. With flushed section - Sections without padding (matches Polaris exactly)
export const WithFlushedSection: Story = {
  render: args => (
    <div style={{ width: "500px" }}>
      <Card {...args}>
        <div className="space-y-0">
          <div className="p-4 border-b">
            <Text as="h2" variant="headingMd">
              Recent orders
            </Text>
            <Text variant="bodyMd">View your most recent customer orders.</Text>
          </div>

          <div className="border-b">
            <div className="px-4 py-3 border-b bg-gray-50">
              <div className="flex justify-between items-center">
                <Text variant="bodyMd" fontWeight="medium">
                  Order #1001
                </Text>
                <Text variant="bodySm" tone="subdued">
                  2 hours ago
                </Text>
              </div>
            </div>
            <div className="px-4 py-3 border-b">
              <div className="flex justify-between items-center">
                <Text variant="bodyMd" fontWeight="medium">
                  Order #1002
                </Text>
                <Text variant="bodySm" tone="subdued">
                  4 hours ago
                </Text>
              </div>
            </div>
            <div className="px-4 py-3">
              <div className="flex justify-between items-center">
                <Text variant="bodyMd" fontWeight="medium">
                  Order #1003
                </Text>
                <Text variant="bodySm" tone="subdued">
                  6 hours ago
                </Text>
              </div>
            </div>
          </div>

          <div className="p-4">
            <Button>View all orders</Button>
          </div>
        </div>
      </Card>
    </div>
  ),
};

// 11. With sections and actions - Cards with action buttons (matches Polaris exactly)
export const WithSectionsAndActions: Story = {
  render: args => (
    <div style={{ width: "500px" }}>
      <Card {...args}>
        <div className="space-y-0">
          <div className="p-4 border-b">
            <Text as="h2" variant="headingMd">
              Store settings
            </Text>
            <Text variant="bodyMd">
              Manage your store&apos;s basic information and preferences.
            </Text>
          </div>

          <div className="p-4 border-b">
            <div className="flex justify-between items-start">
              <div>
                <Text as="h3" variant="headingSm">
                  Store name
                </Text>
                <Text variant="bodyMd" tone="subdued">
                  My Awesome Store
                </Text>
              </div>
              <Button size="slim" icon={<EditIcon />}>
                Edit
              </Button>
            </div>
          </div>

          <div className="p-4 border-b">
            <div className="flex justify-between items-start">
              <div>
                <Text as="h3" variant="headingSm">
                  Contact email
                </Text>
                <Text variant="bodyMd" tone="subdued">
                  contact@mystore.com
                </Text>
              </div>
              <Button size="slim" icon={<EditIcon />}>
                Edit
              </Button>
            </div>
          </div>

          <div className="p-4">
            <ButtonGroup>
              <Button variant="primary">Save changes</Button>
              <Button>Cancel</Button>
            </ButtonGroup>
          </div>
        </div>
      </Card>
    </div>
  ),
};

// 12. With sections and critical action - Cards with destructive actions (matches Polaris exactly)
export const WithSectionsAndCriticalAction: Story = {
  args: {
    background: "bg-surface-critical",
  },
  render: args => (
    <div style={{ width: "500px" }}>
      <Card {...args}>
        <div className="space-y-0">
          <div className="p-4 border-b">
            <Text as="h2" variant="headingMd">
              Delete product
            </Text>
            <Text variant="bodyMd">
              This action cannot be undone. The product will be permanently
              removed from your store.
            </Text>
          </div>

          <div className="p-4 border-b">
            <Text as="h3" variant="headingSm">
              Product details
            </Text>
            <Text variant="bodyMd">
              <strong>Name:</strong> Wireless Headphones
              <br />
              <strong>SKU:</strong> WH-001
              <br />
              <strong>Created:</strong> March 15, 2024
            </Text>
          </div>

          <div className="p-4">
            <ButtonGroup>
              <Button variant="primary" tone="critical" icon={<DeleteIcon />}>
                Delete product
              </Button>
              <Button>Cancel</Button>
            </ButtonGroup>
          </div>
        </div>
      </Card>
    </div>
  ),
};

// 13. With separate header - Cards with dedicated header areas (matches Polaris exactly)
export const WithSeparateHeader: Story = {
  render: args => (
    <div style={{ width: "500px" }}>
      <Card {...args}>
        <div className="space-y-0">
          <div className="p-4 bg-gray-50 border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <OrderIcon className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <Text as="h2" variant="headingMd">
                    Order #1001
                  </Text>
                  <Text variant="bodySm" tone="subdued">
                    Placed 2 hours ago
                  </Text>
                </div>
              </div>
              <Text variant="bodyMd" fontWeight="medium">
                $127.50
              </Text>
            </div>
          </div>

          <div className="p-4">
            <div className="space-y-3">
              <div className="flex justify-between">
                <Text variant="bodyMd">Customer</Text>
                <Text variant="bodyMd">John Smith</Text>
              </div>
              <div className="flex justify-between">
                <Text variant="bodyMd">Items</Text>
                <Text variant="bodyMd">3 items</Text>
              </div>
              <div className="flex justify-between">
                <Text variant="bodyMd">Status</Text>
                <Text variant="bodyMd" tone="success">
                  Paid
                </Text>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  ),
};

// 14. With header actions - Headers with action buttons (matches Polaris exactly)
export const WithHeaderActions: Story = {
  render: args => (
    <div style={{ width: "500px" }}>
      <Card {...args}>
        <div className="space-y-0">
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <div>
                <Text as="h2" variant="headingMd">
                  Product inventory
                </Text>
                <Text variant="bodyMd" tone="subdued">
                  Manage your product stock levels
                </Text>
              </div>
              <ButtonGroup>
                <Button size="slim" icon={<ImportIcon />}>
                  Import
                </Button>
                <Button size="slim" icon={<ExportIcon />}>
                  Export
                </Button>
                <Button size="slim" variant="primary" icon={<PlusIcon />}>
                  Add product
                </Button>
              </ButtonGroup>
            </div>
          </div>

          <div className="p-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <Text variant="bodyMd">Total products</Text>
                <Text variant="bodyMd" fontWeight="medium">
                  247
                </Text>
              </div>
              <div className="flex justify-between items-center">
                <Text variant="bodyMd">Low stock items</Text>
                <Text variant="bodyMd" fontWeight="medium" tone="caution">
                  12
                </Text>
              </div>
              <div className="flex justify-between items-center">
                <Text variant="bodyMd">Out of stock</Text>
                <Text variant="bodyMd" fontWeight="medium" tone="critical">
                  3
                </Text>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  ),
};

// 15. With header icon actions - Headers with icon-based actions (matches Polaris exactly)
export const WithHeaderIconActions: Story = {
  render: args => (
    <div style={{ width: "500px" }}>
      <Card {...args}>
        <div className="space-y-0">
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <div>
                <Text as="h2" variant="headingMd">
                  Customer support
                </Text>
                <Text variant="bodyMd" tone="subdued">
                  Manage customer inquiries and support tickets
                </Text>
              </div>
              <div className="flex gap-2">
                <Button
                  size="slim"
                  icon={<SearchIcon />}
                  accessibilityLabel="Search tickets"
                />
                <Button
                  size="slim"
                  icon={<FilterIcon />}
                  accessibilityLabel="Filter tickets"
                />
                <Button
                  size="slim"
                  icon={<SortIcon />}
                  accessibilityLabel="Sort tickets"
                />
                <Button
                  size="slim"
                  icon={<SettingsIcon />}
                  accessibilityLabel="Settings"
                />
              </div>
            </div>
          </div>

          <div className="p-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <Text variant="bodyMd">Open tickets</Text>
                <Text variant="bodyMd" fontWeight="medium" tone="caution">
                  8
                </Text>
              </div>
              <div className="flex justify-between items-center">
                <Text variant="bodyMd">Resolved today</Text>
                <Text variant="bodyMd" fontWeight="medium" tone="success">
                  12
                </Text>
              </div>
              <div className="flex justify-between items-center">
                <Text variant="bodyMd">Average response time</Text>
                <Text variant="bodyMd" fontWeight="medium">
                  2.3 hours
                </Text>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  ),
};

// 16. With footer actions - Cards with footer action areas (matches Polaris exactly)
export const WithFooterActions: Story = {
  render: args => (
    <div style={{ width: "500px" }}>
      <Card {...args}>
        <div className="space-y-0">
          <div className="p-4">
            <Text as="h2" variant="headingMd">
              Marketing campaign
            </Text>
            <Text variant="bodyMd">
              Create and manage your marketing campaigns to reach more
              customers.
            </Text>

            <div className="mt-4 space-y-3">
              <div className="flex justify-between">
                <Text variant="bodyMd">Campaign status</Text>
                <Text variant="bodyMd" tone="success">
                  Active
                </Text>
              </div>
              <div className="flex justify-between">
                <Text variant="bodyMd">Reach</Text>
                <Text variant="bodyMd">12,450 customers</Text>
              </div>
              <div className="flex justify-between">
                <Text variant="bodyMd">Conversion rate</Text>
                <Text variant="bodyMd">3.2%</Text>
              </div>
            </div>
          </div>

          <div className="p-4 bg-gray-50 border-t">
            <ButtonGroup>
              <Button variant="primary">View analytics</Button>
              <Button>Edit campaign</Button>
            </ButtonGroup>
          </div>
        </div>
      </Card>
    </div>
  ),
};

// 17. With multiple footer actions - Multiple actions in footer (matches Polaris exactly)
export const WithMultipleFooterActions: Story = {
  render: args => (
    <div style={{ width: "500px" }}>
      <Card {...args}>
        <div className="space-y-0">
          <div className="p-4">
            <Text as="h2" variant="headingMd">
              Order fulfillment
            </Text>
            <Text variant="bodyMd">
              Review and fulfill customer orders efficiently.
            </Text>

            <div className="mt-4 space-y-3">
              <div className="flex justify-between">
                <Text variant="bodyMd">Order #1001</Text>
                <Text variant="bodyMd">$127.50</Text>
              </div>
              <div className="flex justify-between">
                <Text variant="bodyMd">Customer</Text>
                <Text variant="bodyMd">John Smith</Text>
              </div>
              <div className="flex justify-between">
                <Text variant="bodyMd">Items</Text>
                <Text variant="bodyMd">3 items</Text>
              </div>
            </div>
          </div>

          <div className="p-4 bg-gray-50 border-t">
            <div className="flex justify-between items-center">
              <ButtonGroup>
                <Button variant="primary">Fulfill order</Button>
                <Button>Print invoice</Button>
                <Button>Contact customer</Button>
              </ButtonGroup>
              <Button
                icon={<ArchiveIcon />}
                accessibilityLabel="Archive order"
              />
            </div>
          </div>
        </div>
      </Card>
    </div>
  ),
};

// 18. With custom footer action - Custom styled footer actions (matches Polaris exactly)
export const WithCustomFooterAction: Story = {
  render: args => (
    <div style={{ width: "500px" }}>
      <Card {...args}>
        <div className="space-y-0">
          <div className="p-4">
            <Text as="h2" variant="headingMd">
              Subscription plan
            </Text>
            <Text variant="bodyMd">
              Manage your current subscription and billing information.
            </Text>

            <div className="mt-4 space-y-3">
              <div className="flex justify-between">
                <Text variant="bodyMd">Current plan</Text>
                <Text variant="bodyMd" fontWeight="medium">
                  Professional
                </Text>
              </div>
              <div className="flex justify-between">
                <Text variant="bodyMd">Monthly cost</Text>
                <Text variant="bodyMd" fontWeight="medium">
                  $29.99
                </Text>
              </div>
              <div className="flex justify-between">
                <Text variant="bodyMd">Next billing</Text>
                <Text variant="bodyMd">April 15, 2024</Text>
              </div>
            </div>
          </div>

          <div className="p-4 border-t">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <CreditCardIcon className="w-4 h-4 text-gray-500" />
                <Text variant="bodySm" tone="subdued">
                  Auto-renewal enabled
                </Text>
              </div>
              <div className="flex gap-2">
                <Button size="slim">Change plan</Button>
                <Button size="slim" variant="primary">
                  Update billing
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  ),
};

// 19. With critical footer action - Destructive actions in footer (matches Polaris exactly)
export const WithCriticalFooterAction: Story = {
  render: args => (
    <div style={{ width: "500px" }}>
      <Card {...args}>
        <div className="space-y-0">
          <div className="p-4">
            <Text as="h2" variant="headingMd">
              Account settings
            </Text>
            <Text variant="bodyMd">
              Manage your account preferences and data.
            </Text>

            <div className="mt-4 space-y-3">
              <div className="flex justify-between">
                <Text variant="bodyMd">Account created</Text>
                <Text variant="bodyMd">March 15, 2023</Text>
              </div>
              <div className="flex justify-between">
                <Text variant="bodyMd">Last login</Text>
                <Text variant="bodyMd">2 hours ago</Text>
              </div>
              <div className="flex justify-between">
                <Text variant="bodyMd">Data usage</Text>
                <Text variant="bodyMd">2.3 GB</Text>
              </div>
            </div>
          </div>

          <div className="p-4 bg-red-50 border-t border-red-200">
            <div className="flex justify-between items-center">
              <div>
                <Text variant="bodyMd" fontWeight="medium">
                  Danger zone
                </Text>
                <Text variant="bodySm" tone="subdued">
                  Permanently delete your account and all data
                </Text>
              </div>
              <Button variant="primary" tone="critical" icon={<DeleteIcon />}>
                Delete account
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  ),
};

// 20. With custom React Node title - Complex title content (matches Polaris exactly)
export const WithCustomReactNodeTitle: Story = {
  render: args => (
    <div style={{ width: "500px" }}>
      <Card {...args}>
        <div className="space-y-0">
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <ProductIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <Text as="h2" variant="headingMd">
                      Wireless Headphones
                    </Text>
                    <div className="px-2 py-1 bg-green-100 text-green-800 rounded-full">
                      <Text variant="bodySm" fontWeight="medium">
                        In Stock
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-1">
                    <Text variant="bodySm" tone="subdued">
                      SKU: WH-001
                    </Text>
                    <div className="flex items-center gap-1">
                      <StarIcon className="w-4 h-4 text-yellow-400" />
                      <Text variant="bodySm" tone="subdued">
                        4.8 (127 reviews)
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <Text variant="headingLg" fontWeight="bold">
                $99.99
              </Text>
            </div>
          </div>

          <div className="p-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Text variant="bodyMd" fontWeight="medium">
                  Sales this month
                </Text>
                <Text variant="headingMd">23 units</Text>
              </div>
              <div>
                <Text variant="bodyMd" fontWeight="medium">
                  Revenue
                </Text>
                <Text variant="headingMd">$2,299.77</Text>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  ),
};

// 21. With all elements - Comprehensive example with all features (matches Polaris exactly)
export const WithAllElements: Story = {
  render: args => (
    <div style={{ width: "600px" }}>
      <Card {...args}>
        <div className="space-y-0">
          {/* Header with icon and actions */}
          <div className="p-4 bg-blue-50 border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <OrderIcon className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <Text as="h2" variant="headingMd">
                    Order Management Dashboard
                  </Text>
                  <Text variant="bodySm" tone="subdued">
                    Comprehensive order tracking and fulfillment
                  </Text>
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  size="slim"
                  icon={<RefreshIcon />}
                  accessibilityLabel="Refresh"
                />
                <Button
                  size="slim"
                  icon={<SettingsIcon />}
                  accessibilityLabel="Settings"
                />
              </div>
            </div>
          </div>

          {/* Multiple titled sections */}
          <div className="p-4 border-b">
            <Text as="h3" variant="headingSm">
              Order Summary
            </Text>
            <div className="mt-3 grid grid-cols-3 gap-4">
              <div className="text-center">
                <Text variant="headingLg" fontWeight="bold" tone="success">
                  127
                </Text>
                <Text variant="bodySm" tone="subdued">
                  Completed
                </Text>
              </div>
              <div className="text-center">
                <Text variant="headingLg" fontWeight="bold" tone="caution">
                  8
                </Text>
                <Text variant="bodySm" tone="subdued">
                  Pending
                </Text>
              </div>
              <div className="text-center">
                <Text variant="headingLg" fontWeight="bold" tone="critical">
                  3
                </Text>
                <Text variant="bodySm" tone="subdued">
                  Failed
                </Text>
              </div>
            </div>
          </div>

          {/* Subsections with nested content */}
          <div className="p-4 border-b">
            <Text as="h3" variant="headingSm">
              Recent Activity
            </Text>
            <div className="mt-3 space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <CheckIcon className="w-4 h-4 text-green-600" />
                  <div>
                    <Text variant="bodyMd" fontWeight="medium">
                      Order #1001 fulfilled
                    </Text>
                    <Text variant="bodySm" tone="subdued">
                      2 hours ago • John Smith
                    </Text>
                  </div>
                </div>
                <Button size="slim" icon={<ViewIcon />}>
                  View
                </Button>
              </div>

              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <AlertTriangleIcon className="w-4 h-4 text-yellow-600" />
                  <div>
                    <Text variant="bodyMd" fontWeight="medium">
                      Payment pending for Order #1002
                    </Text>
                    <Text variant="bodySm" tone="subdued">
                      4 hours ago • Sarah Johnson
                    </Text>
                  </div>
                </div>
                <Button size="slim" icon={<ViewIcon />}>
                  View
                </Button>
              </div>
            </div>
          </div>

          {/* Footer with multiple actions */}
          <div className="p-4 bg-gray-50 border-t">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <RefreshIcon className="w-4 h-4 text-gray-500" />
                <Text variant="bodySm" tone="subdued">
                  Last updated: 2 minutes ago
                </Text>
              </div>
              <ButtonGroup>
                <Button icon={<ExportIcon />}>Export</Button>
                <Button icon={<ImportIcon />}>Import</Button>
                <Button variant="primary" icon={<PlusIcon />}>
                  New Order
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </div>
      </Card>
    </div>
  ),
};

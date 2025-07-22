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
# Page Component

## Overview

The Page component provides 100% API compatibility with Shopify's Polaris Page component while being built on shadcn/ui foundation with Tailwind CSS. Use to build the outer wrapper of a page, including the page title and associated actions.

## Installation

\`\`\`bash
pnpm install @storeware/polaris
\`\`\`

## Basic Usage

\`\`\`tsx
import { Page, Card, Text } from "@storeware/polaris";

function MyComponent() {
  return (
    <Page title="Products">
      <Card>
        <Text as="p" variant="bodyMd">
          Page content goes here
        </Text>
      </Card>
    </Page>
  );
}
\`\`\`

## Import Styles

Make sure to import the component styles in your application:

\`\`\`tsx
import "@storeware/polaris/styles";
\`\`\`

## Props

### Core Props

- **\`children\`** (React.ReactNode): The contents of the page
- **\`title\`** (string): Page title, in large type
- **\`subtitle\`** (string): Page subtitle, in regular type
- **\`titleMetadata\`** (React.ReactNode): Important status information shown immediately after the title
- **\`compactTitle\`** (boolean): Removes spacing between title and subtitle
- **\`titleHidden\`** (boolean): Visually hide the title
- **\`fullWidth\`** (boolean): Remove the normal max-width on the page
- **\`narrowWidth\`** (boolean): Decreases the maximum layout width. Intended for single-column layouts

### Action Props

- **\`primaryAction\`** (CallbackAction | LinkAction): Primary page-level action
- **\`secondaryActions\`** (Array): Collection of secondary page-level actions
- **\`actionGroups\`** (Array): Collection of page-level groups of secondary actions
- **\`backAction\`** (LinkAction | CallbackAction): A back action link

### Navigation Props

- **\`pagination\`** (PaginationProps): Page-level pagination

### Accessibility Props

- **\`pageReadyAccessibilityLabel\`** (string): A label to use for the page when ready, used by screen readers
- **\`filterActions\`** (boolean): Enables filtering action list items

### Advanced Props

- **\`additionalMetadata\`** (React.ReactNode): Additional metadata
- **\`onActionRollup\`** (function): Callback when secondary actions are rolled up into action groups
- **\`hasSubtitleMaxWidth\`** (boolean): Whether to add a max-width to the subtitle

## Examples

### Default Page

Use for detail pages, which should have pagination and breadcrumbs, and also often have several actions.

\`\`\`tsx
import { Page, Card, Text, Badge } from "@storeware/polaris";

function DefaultPage() {
  return (
    <Page
      backAction={{ content: 'Products', url: '#' }}
      title="3/4 inch Leather pet collar"
      titleMetadata={<Badge tone="success">Paid</Badge>}
      subtitle="Perfect for any pet"
      compactTitle
      primaryAction={{ content: 'Save', disabled: true }}
      secondaryActions={[
        {
          content: 'Duplicate',
          accessibilityLabel: 'Secondary action label',
          onAction: () => alert('Duplicate action'),
        },
        {
          content: 'View on your store',
          onAction: () => alert('View on your store action'),
        },
      ]}
      actionGroups={[
        {
          title: 'Promote',
          actions: [
            {
              content: 'Share on Facebook',
              accessibilityLabel: 'Individual action label',
              onAction: () => alert('Share on Facebook action'),
            },
          ],
        },
      ]}
      pagination={{
        hasPrevious: true,
        hasNext: true,
      }}
    >
      <Card title="Credit card" sectioned>
        <p>Credit card information</p>
      </Card>
    </Page>
  );
}
\`\`\`

### Page with Custom Primary Action

\`\`\`tsx
<Page
  title="Orders"
  primaryAction={{
    content: 'Create order',
    onAction: () => console.log('Create order'),
  }}
>
  <Card>
    <Text as="p" variant="bodyMd">
      Your orders will appear here
    </Text>
  </Card>
</Page>
\`\`\`

### Page without Primary Action in Header

\`\`\`tsx
<Page
  title="Settings"
  secondaryActions={[
    { content: 'Export', onAction: () => console.log('Export') },
    { content: 'Import', onAction: () => console.log('Import') },
  ]}
>
  <Card>
    <Text as="p" variant="bodyMd">
      Settings content
    </Text>
  </Card>
</Page>
\`\`\`

### Page with Destructive Secondary Action

\`\`\`tsx
<Page
  title="Customer"
  primaryAction={{ content: 'Save', onAction: () => console.log('Save') }}
  secondaryActions={[
    {
      content: 'Delete',
      destructive: true,
      onAction: () => console.log('Delete'),
    },
  ]}
>
  <Card>
    <Text as="p" variant="bodyMd">
      Customer details
    </Text>
  </Card>
</Page>
\`\`\`

### Page with Subtitle

\`\`\`tsx
<Page
  title="Jar With Lock-Lid"
  subtitle="Perfect for any kitchen"
  primaryAction={{ content: 'Save', onAction: () => console.log('Save') }}
>
  <Card>
    <Text as="p" variant="bodyMd">
      Product details
    </Text>
  </Card>
</Page>
\`\`\`

### Full-width Page

\`\`\`tsx
<Page
  title="Analytics"
  fullWidth
  primaryAction={{ content: 'Export', onAction: () => console.log('Export') }}
>
  <Card>
    <Text as="p" variant="bodyMd">
      Full-width analytics dashboard
    </Text>
  </Card>
</Page>
\`\`\`

### Narrow Width Page

\`\`\`tsx
<Page
  title="Account Settings"
  narrowWidth
  primaryAction={{ content: 'Save', onAction: () => console.log('Save') }}
>
  <Card>
    <Text as="p" variant="bodyMd">
      Narrow layout for single-column content
    </Text>
  </Card>
</Page>
\`\`\`

### Page with Action Groups

\`\`\`tsx
<Page
  title="Product"
  primaryAction={{ content: 'Save', onAction: () => console.log('Save') }}
  actionGroups={[
    {
      title: 'Promote',
      actions: [
        { content: 'Share on Facebook', onAction: () => console.log('Facebook') },
        { content: 'Share on Twitter', onAction: () => console.log('Twitter') },
      ],
    },
    {
      title: 'More actions',
      actions: [
        { content: 'Duplicate', onAction: () => console.log('Duplicate') },
        { content: 'Archive', onAction: () => console.log('Archive') },
      ],
    },
  ]}
>
  <Card>
    <Text as="p" variant="bodyMd">
      Product content with grouped actions
    </Text>
  </Card>
</Page>
\`\`\`

## Action Types

### CallbackAction

\`\`\`tsx
interface CallbackAction {
  content?: React.ReactNode;
  onAction?(): void;
  id?: string;
  accessibilityLabel?: string;
  disabled?: boolean;
  primary?: boolean;
  destructive?: boolean;
  plain?: boolean;
  disclosure?: boolean;
  submit?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  helpText?: string;
}
\`\`\`

### LinkAction

\`\`\`tsx
interface LinkAction {
  content?: React.ReactNode;
  onAction?(): void;
  id?: string;
  url?: string;
  external?: boolean;
  target?: string;
  download?: string | boolean;
  accessibilityLabel?: string;
}
\`\`\`

### PaginationProps

\`\`\`tsx
interface PaginationProps {
  nextKeys?: string[];
  previousKeys?: string[];
  nextTooltip?: string;
  previousTooltip?: string;
  nextURL?: string;
  previousURL?: string;
  hasNext?: boolean;
  hasPrevious?: boolean;
  onNext?(): void;
  onPrevious?(): void;
  accessibilityLabel?: string;
  accessibilityLabels?: {
    next?: string;
    previous?: string;
  };
}
\`\`\`

## Best Practices

The page component should:

- Always provide a title for the page header
- Always provide breadcrumbs when a page has a parent page
- Be organized around a primary activity. If that primary activity is a single action, provide it as a primary button in the page header
- Provide other page-level actions as secondary actions in the page header
- When the page represents an object of a certain type, provide pagination links to the previous and next object of the same type

## Content Guidelines

### Title

Titles should:

- Describe the page in as few words as possible
- Be the name of the object type (pluralized) when the page is a list of objects
- Not be truncated

### Page Header Actions

Page header action labels should be:

- Clear and predictable: merchants should be able to anticipate what will happen when they click a page action
- Action-led: they should always lead with a strong verb that encourages action
- Short: for secondary actions, when the noun represents the same object as the page itself, a verb alone may be used
- Scannable: avoid unnecessary words and articles such as the, an, or a

## TypeScript Support

The component includes full TypeScript support with exported types:

\`\`\`tsx
import type {
  PageProps,
  PolarisPageProps,
  EnhancedPageProps,
  CallbackAction,
  LinkAction,
  MenuGroupDescriptor,
  PaginationProps
} from "@storeware/polaris";
\`\`\`

## Accessibility

- Use semantic HTML elements for proper structure
- Provide meaningful \`accessibilityLabel\` props for actions
- Use \`pageReadyAccessibilityLabel\` for screen reader announcements
- Ensure proper heading hierarchy with the title
- Support keyboard navigation for all interactive elements

## Related Components

- To lay out the content within a page, use the [Layout component](https://polaris.shopify.com/components/layout-and-structure/layout)
- To add pagination within the context of a list or other page content, use the [Pagination component](https://polaris.shopify.com/components/navigation/pagination)
- To add primary and secondary calls to action at the bottom of a page, see the [Page actions component](https://polaris.shopify.com/components/actions/page-actions)
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

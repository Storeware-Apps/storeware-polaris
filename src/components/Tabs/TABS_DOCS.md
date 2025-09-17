# Tabs Component Documentation

## Overview

The Tabs component provides 100% API compatibility with Shopify's Polaris Tabs component while being built on shadcn/ui foundation with Tailwind CSS. Use to alternate among related views within the same context.

## Installation

```bash
pnpm install @storeware/polaris
```

## Basic Usage

```tsx
import { Tabs } from "@storeware/polaris";
import { useState, useCallback } from "react";

function MyComponent() {
  const [selected, setSelected] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex: number) => setSelected(selectedTabIndex),
    []
  );

  const tabs = [
    {
      id: "all-customers",
      content: "All",
      accessibilityLabel: "All customers",
      panelID: "all-customers-content",
    },
    {
      id: "accepts-marketing",
      content: "Accepts marketing",
      panelID: "accepts-marketing-content",
    },
  ];

  return (
    <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
      <Card.Section title={tabs[selected].content}>
        <p>Tab {selected} selected</p>
      </Card.Section>
    </Tabs>
  );
}
```

## Import Styles

Make sure to import the component styles in your application:

```tsx
import "@storeware/polaris/styles";
```

## Tab Variants

### Default Tabs

Standard tabs with normal spacing and layout.

```tsx
<Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
  <Card.Section title={tabs[selected].content}>
    <p>Tab content here</p>
  </Card.Section>
</Tabs>
```

### Fitted Tabs

Tabs that stretch to fill the container width equally.

```tsx
<Tabs tabs={tabs} selected={selected} onSelect={handleTabChange} fitted>
  <Card.Section title={tabs[selected].content}>
    <p>Tab content here</p>
  </Card.Section>
</Tabs>
```

### Tabs with Badges

Display additional information using badges on tabs.

```tsx
const tabsWithBadges = [
  {
    id: "all-customers",
    content: "All",
    badge: "10+",
    accessibilityLabel: "All customers",
    panelID: "all-customers-content",
  },
  {
    id: "accepts-marketing",
    content: "Accepts marketing",
    badge: "4",
    panelID: "accepts-marketing-content",
  },
];

<Tabs tabs={tabsWithBadges} selected={selected} onSelect={handleTabChange} fitted>
  <Card.Section title={tabs[selected].content}>
    <p>Tab content here</p>
  </Card.Section>
</Tabs>
```

### Tabs with Actions

Enable tab management with actions like rename, duplicate, and delete.

```tsx
const tabsWithActions = [
  {
    id: "all-customers",
    content: "All",
    isLocked: true, // Cannot be deleted
    actions: [],
  },
  {
    id: "custom-view",
    content: "Custom View",
    actions: [
      {
        type: "rename",
        onPrimaryAction: async (value: string) => {
          // Handle rename
          return true;
        },
      },
      {
        type: "duplicate",
        onPrimaryAction: async (name: string) => {
          // Handle duplicate
          return true;
        },
      },
      {
        type: "delete",
        onPrimaryAction: async () => {
          // Handle delete
          return true;
        },
      },
    ],
  },
];
```

### Create New View

Allow users to create new tab views.

```tsx
<Tabs
  tabs={tabs}
  selected={selected}
  onSelect={handleTabChange}
  canCreateNewView
  onCreateNewView={async (name: string) => {
    // Handle new view creation
    return true;
  }}
>
  <Card.Section title={tabs[selected].content}>
    <p>Tab content here</p>
  </Card.Section>
</Tabs>
```

### Custom Disclosure

Customize the text for the disclosure menu when tabs overflow.

```tsx
<Tabs
  tabs={tabs}
  selected={selected}
  onSelect={handleTabChange}
  disclosureText="More views"
>
  <Card.Section title={tabs[selected].content}>
    <p>Tab content here</p>
  </Card.Section>
</Tabs>
```

## Props

### Tabs Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `tabs` | `TabProps[]` | - | The items that map to each Tab |
| `selected` | `number` | - | The index of the currently selected Tab |
| `children` | `React.ReactNode` | - | Content to display in tabs |
| `disabled` | `boolean` | `false` | Whether the Tabs are disabled or not |
| `fitted` | `boolean` | `false` | Fit tabs to container |
| `canCreateNewView` | `boolean` | `false` | Whether to show the add new view Tab |
| `newViewAccessibilityLabel` | `string` | `"Create new view"` | Label for the new view Tab |
| `disclosureText` | `string` | - | Text to replace disclosures horizontal dots |
| `disclosureZIndexOverride` | `number` | - | Override z-index of popovers and tooltips |
| `onSelect` | `(selectedTabIndex: number) => void` | - | Optional callback invoked when a Tab becomes selected |
| `onCreateNewView` | `(value: string) => Promise<boolean>` | - | Optional callback invoked when a merchant saves a new view |
| `className` | `string` | - | Additional CSS class name |

### TabProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `id` | `string` | - | Unique identifier for the tab |
| `content` | `string` | - | Content to display in the tab |
| `accessibilityLabel` | `string` | - | Accessibility label for the tab |
| `panelID` | `string` | - | ID of the panel controlled by the tab |
| `badge` | `string` | - | Badge content to display |
| `actions` | `TabAction[]` | - | Actions available for the tab |
| `isLocked` | `boolean` | `false` | Whether the tab is locked (cannot be deleted) |

## Best Practices

Tabs should:

- Represent the same kind of content, such as a list-view with different filters applied. Don't use tabs to group content that is dissimilar.
- Only be active one at a time.
- Not force merchants to jump back and forth to do a single task. Merchants should be able to complete their work and find what they need under each tab.
- Not be used for primary navigation.

## Content Guidelines

Tabs should:

- Be clearly labeled to help differentiate the different sections beneath them.
- Have short and scannable labels, generally kept to single word.
- Relate to the section of Shopify they're on. Imagine the page section title is an invisible noun after the tab.

## Accessibility

The Tabs component includes:

- Full ARIA support with proper `role`, `aria-selected`, and `aria-controls` attributes
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Examples

See the Storybook documentation for interactive examples of all tab variants and use cases.

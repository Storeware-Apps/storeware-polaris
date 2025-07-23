# IndexFilters Component Documentation

## Overview

The IndexFilters component provides 100% API compatibility with Shopify's Polaris IndexFilters component while being built on shadcn/ui foundation with Tailwind CSS. Use index filters to allow merchants to filter, search, and sort their index table data and create unique saved views from the results.

## Installation

```bash
pnpm install @storeware/polaris
```

## Basic Usage

```tsx
import { IndexFilters, useSetIndexFiltersMode } from "@storeware/polaris";

function MyComponent() {
  const { mode, setMode } = useSetIndexFiltersMode();
  const [queryValue, setQueryValue] = useState("");
  
  return (
    <IndexFilters
      mode={mode}
      setMode={setMode}
      queryValue={queryValue}
      onQueryChange={setQueryValue}
      onQueryClear={() => setQueryValue("")}
    />
  );
}
```

## Props

### Core Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `mode` | `IndexFiltersMode` | - | Current mode of the component |
| `setMode` | `(mode: IndexFiltersMode) => void` | - | Callback to set the mode |
| `queryValue` | `string` | `""` | Current query value |
| `onQueryChange` | `(value: string) => void` | - | Callback when query changes |
| `onQueryClear` | `() => void` | - | Callback when query is cleared |

### Sorting Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `sortOptions` | `SortButtonChoice[]` | - | Available sorting choices |
| `sortSelected` | `string[]` | - | Currently selected sort choice |
| `onSort` | `(value: string[]) => void` | - | Callback when sort is changed |

### Filtering Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `filters` | `FilterDescriptor[]` | - | Available filters |
| `appliedFilters` | `AppliedFilter[]` | - | Applied filters |
| `onClearAll` | `() => void` | - | Callback to clear all filters |

### Tab/View Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `tabs` | `TabProps[]` | - | Available tabs/views |
| `selected` | `number` | `0` | Currently selected tab index |
| `onSelect` | `(index: number) => void` | - | Callback when tab is selected |
| `canCreateNewView` | `boolean` | `false` | Whether new views can be created |
| `onCreateNewView` | `(name: string) => Promise<boolean>` | - | Callback when new view is created |

### Action Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `primaryAction` | `IndexFiltersPrimaryAction` | - | Primary action to display |
| `cancelAction` | `IndexFiltersCancelAction` | - | Cancel action to display |

### Accessibility Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `filteringAccessibilityLabel` | `string` | `"Filter"` | Accessibility label for filtering button |
| `queryPlaceholder` | `string` | `"Search"` | Placeholder text for search field |

### Layout Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `disabled` | `boolean` | `false` | Whether the component is disabled |
| `disableQueryField` | `boolean` | `false` | Whether to disable just the query field |
| `showEditColumnsButton` | `boolean` | `false` | Whether to show edit columns button |
| `autoFocusSearchField` | `boolean` | `false` | Whether to auto-focus search field |
| `className` | `string` | - | Additional CSS class name |

## Examples

### Basic IndexFilters

```tsx
import { IndexFilters, useSetIndexFiltersMode } from "@storeware/polaris";
import { useState } from "react";

function BasicIndexFilters() {
  const { mode, setMode } = useSetIndexFiltersMode();
  const [queryValue, setQueryValue] = useState("");

  return (
    <IndexFilters
      mode={mode}
      setMode={setMode}
      queryValue={queryValue}
      onQueryChange={setQueryValue}
      onQueryClear={() => setQueryValue("")}
    />
  );
}
```

### With Sorting

```tsx
import { IndexFilters, useSetIndexFiltersMode } from "@storeware/polaris";
import { useState } from "react";

function IndexFiltersWithSorting() {
  const { mode, setMode } = useSetIndexFiltersMode();
  const [queryValue, setQueryValue] = useState("");
  const [sortSelected, setSortSelected] = useState(["order asc"]);

  const sortOptions = [
    { label: "Order", value: "order asc", directionLabel: "Ascending" },
    { label: "Order", value: "order desc", directionLabel: "Descending" },
    { label: "Customer", value: "customer asc", directionLabel: "A-Z" },
    { label: "Customer", value: "customer desc", directionLabel: "Z-A" },
  ];

  return (
    <IndexFilters
      mode={mode}
      setMode={setMode}
      queryValue={queryValue}
      onQueryChange={setQueryValue}
      onQueryClear={() => setQueryValue("")}
      sortOptions={sortOptions}
      sortSelected={sortSelected}
      onSort={setSortSelected}
    />
  );
}
```

### With Tabs and Views

```tsx
import { IndexFilters, useSetIndexFiltersMode } from "@storeware/polaris";
import { useState } from "react";

function IndexFiltersWithTabs() {
  const { mode, setMode } = useSetIndexFiltersMode();
  const [queryValue, setQueryValue] = useState("");
  const [selected, setSelected] = useState(0);

  const tabs = [
    { content: "All", index: 0, onAction: () => {}, id: "all-0", isLocked: true },
    { content: "Unpaid", index: 1, onAction: () => {}, id: "unpaid-1" },
    { content: "Open", index: 2, onAction: () => {}, id: "open-2" },
  ];

  return (
    <IndexFilters
      mode={mode}
      setMode={setMode}
      queryValue={queryValue}
      onQueryChange={setQueryValue}
      onQueryClear={() => setQueryValue("")}
      tabs={tabs}
      selected={selected}
      onSelect={setSelected}
      canCreateNewView
      onCreateNewView={async (name) => {
        console.log("Creating view:", name);
        return true;
      }}
    />
  );
}
```

## Best Practices

Index filters should:

- Reduce merchant effort by promoting the filtering categories that are most commonly used
- Include no more than 2 or 3 promoted filters
- Consider small screen sizes when designing the interface for each filter
- Use children only for content that's related or relevant to filtering

## Accessibility

The IndexFilters component includes:

- Proper ARIA labels for screen readers
- Keyboard navigation support
- Focus management
- Disabled state handling

## Related Components

- To display filtered data, use the [IndexTable component](../IndexTable/INDEXTABLE_DOCS.md)
- For individual filter inputs, use the [TextField component](../TextField/TEXTFIELD_DOCS.md)
- For action buttons, use the [Button component](../Button/BUTTON_DOCS.md)

## TypeScript

The component is fully typed with TypeScript:

```tsx
import type { 
  IndexFiltersProps, 
  SortButtonChoice, 
  FilterDescriptor,
  AppliedFilter,
  TabProps 
} from "@storeware/polaris";
```

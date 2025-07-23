# IndexTable Component Documentation

## Overview

The IndexTable component provides 100% API compatibility with Shopify's Polaris IndexTable component while being built on shadcn/ui foundation with Tailwind CSS and TanStack Table. An index table displays a collection of objects of the same type, like orders or products. The main job of an index table is to help merchants get an at-a-glance of the objects to perform actions or navigate to a full-page representation of it.

## Installation

```bash
pnpm install @storeware/polaris
```

## Basic Usage

```tsx
import { IndexTable, useIndexResourceState } from "@storeware/polaris";

function MyComponent() {
  const orders = [
    { id: '1020', order: '#1020', date: 'Jul 20 at 4:34pm', customer: 'Jaydon Stanton' },
    { id: '1019', order: '#1019', date: 'Jul 20 at 3:46pm', customer: 'Ruben Westerfelt' },
  ];

  const resourceName = { singular: 'order', plural: 'orders' };
  const { selectedResources, allResourcesSelected, handleSelectionChange } = 
    useIndexResourceState(orders);

  return (
    <IndexTable
      resourceName={resourceName}
      itemCount={orders.length}
      selectedItemsCount={allResourcesSelected ? 'All' : selectedResources.length}
      onSelectionChange={handleSelectionChange}
      headings={[
        { title: 'Order' },
        { title: 'Date' },
        { title: 'Customer' },
      ]}
    >
      {orders.map((order, index) => (
        <IndexTable.Row
          id={order.id}
          key={order.id}
          selected={selectedResources.includes(order.id)}
          position={index}
        >
          <IndexTable.Cell>{order.order}</IndexTable.Cell>
          <IndexTable.Cell>{order.date}</IndexTable.Cell>
          <IndexTable.Cell>{order.customer}</IndexTable.Cell>
        </IndexTable.Row>
      ))}
    </IndexTable>
  );
}
```

## Props

### Core Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `headings` | `IndexTableHeading[]` | - | List of table headings |
| `itemCount` | `number` | - | Number of items in the table |
| `children` | `React.ReactNode` | - | Table rows (IndexTable.Row components) |

### Selection Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `selectable` | `boolean` | `true` | Whether the table supports selection |
| `selectedItemsCount` | `number \| "All"` | - | Number of selected items |
| `onSelectionChange` | `(selectionType, toggleType, selection?, position?) => void` | - | Callback when selection changes |
| `resourceName` | `{ singular: string; plural: string }` | - | Resource name for accessibility |

### Sorting Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `sortable` | `boolean[]` | - | Array indicating which columns are sortable |
| `sortDirection` | `"ascending" \| "descending"` | - | Current sort direction |
| `sortColumnIndex` | `number` | - | Index of the column being sorted |
| `onSort` | `(headingIndex, direction) => void` | - | Callback when sort is triggered |
| `defaultSortDirection` | `"ascending" \| "descending"` | `"descending"` | Default sort direction |

### Bulk Actions Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `promotedBulkActions` | `(MenuGroupDescriptor \| BulkAction)[]` | - | Promoted bulk actions |
| `bulkActions` | `(MenuGroupDescriptor \| BulkAction)[]` | - | Additional bulk actions |

### Layout Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `condensed` | `boolean` | `false` | Whether to use condensed styling |
| `hasZebraStriping` | `boolean` | `false` | Whether to use zebra striping |
| `lastColumnSticky` | `boolean` | `false` | Whether the last column should be sticky |
| `loading` | `boolean` | `false` | Whether the table is in loading state |

### Empty State Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `emptyState` | `React.ReactNode` | - | Content to show when table is empty |

### TanStack Table Integration Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `TData[]` | - | Data array for TanStack Table integration |
| `columns` | `ColumnDef<TData>[]` | - | Column definitions for TanStack Table |

## Subcomponents

### IndexTable.Row

Represents a single row in the table.

```tsx
<IndexTable.Row
  id="unique-id"
  selected={false}
  position={0}
  onClick={() => console.log('Row clicked')}
>
  {/* Cell content */}
</IndexTable.Row>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `id` | `string` | - | Unique identifier for the row |
| `selected` | `boolean \| "indeterminate"` | `false` | Whether the row is selected |
| `position` | `number` | - | Zero-indexed position of the row |
| `tone` | `"subdued" \| "success" \| "warning" \| "critical"` | - | Visual tone of the row |
| `disabled` | `boolean` | `false` | Whether the row is disabled |
| `rowType` | `"data" \| "subheader" \| "child"` | `"data"` | Type of row |
| `onClick` | `() => void` | - | Click handler for the row |

### IndexTable.Cell

Represents a single cell in a table row.

```tsx
<IndexTable.Cell>
  Cell content
</IndexTable.Cell>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `as` | `"th" \| "td"` | `"td"` | HTML element type |
| `flush` | `boolean` | `false` | Whether to remove cell padding |
| `colSpan` | `number` | - | Number of columns to span |
| `scope` | `"col" \| "row" \| "colgroup" \| "rowgroup"` | - | Scope for header cells |

## Hooks

### useIndexResourceState

Hook for managing table selection state, similar to Polaris's `useIndexResourceState`.

```tsx
const { selectedResources, allResourcesSelected, handleSelectionChange, clearSelection } = 
  useIndexResourceState(resources);
```

#### Parameters

- `resources`: Array of objects with `id` property
- `options`: Optional configuration object

#### Returns

- `selectedResources`: Array of selected resource IDs
- `allResourcesSelected`: Whether all resources are selected
- `handleSelectionChange`: Function to handle selection changes
- `clearSelection`: Function to clear all selections

## Examples

### Basic Table

```tsx
import { IndexTable, useIndexResourceState } from "@storeware/polaris";

function BasicTable() {
  const orders = [
    { id: '1', order: '#1001', customer: 'John Doe' },
    { id: '2', order: '#1002', customer: 'Jane Smith' },
  ];

  const { selectedResources, allResourcesSelected, handleSelectionChange } = 
    useIndexResourceState(orders);

  return (
    <IndexTable
      resourceName={{ singular: 'order', plural: 'orders' }}
      itemCount={orders.length}
      selectedItemsCount={allResourcesSelected ? 'All' : selectedResources.length}
      onSelectionChange={handleSelectionChange}
      headings={[
        { title: 'Order' },
        { title: 'Customer' },
      ]}
    >
      {orders.map((order, index) => (
        <IndexTable.Row
          id={order.id}
          key={order.id}
          selected={selectedResources.includes(order.id)}
          position={index}
        >
          <IndexTable.Cell>{order.order}</IndexTable.Cell>
          <IndexTable.Cell>{order.customer}</IndexTable.Cell>
        </IndexTable.Row>
      ))}
    </IndexTable>
  );
}
```

### With TanStack Table Integration

```tsx
import { IndexTable } from "@storeware/polaris";
import { ColumnDef } from "@tanstack/react-table";

interface Order {
  id: string;
  order: string;
  customer: string;
}

function TanStackTable() {
  const data: Order[] = [
    { id: '1', order: '#1001', customer: 'John Doe' },
    { id: '2', order: '#1002', customer: 'Jane Smith' },
  ];

  const columns: ColumnDef<Order>[] = [
    {
      accessorKey: 'order',
      header: 'Order',
    },
    {
      accessorKey: 'customer',
      header: 'Customer',
    },
  ];

  return (
    <IndexTable
      data={data}
      columns={columns}
      itemCount={data.length}
      headings={[]} // Not needed when using TanStack Table
    />
  );
}
```

## Best Practices

Index tables should:

- Have items that perform an action when clicked
- Support sorting if the list can be long
- Support filtering if the list can be long
- Paginate when the current list contains more than 50 items
- Use numeric alignment for numeric cells

## Accessibility

The IndexTable component includes:

- Proper ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Related Components

- Use with [IndexFilters](../IndexFilters/INDEXFILTERS_DOCS.md) for filtering and searching
- Use with [Pagination](../Pagination/PAGINATION_DOCS.md) for navigation
- Use [Card](../Card/CARD_DOCS.md) as a container

## TypeScript

The component is fully typed with TypeScript:

```tsx
import type { 
  IndexTableProps, 
  IndexTableRowProps, 
  IndexTableCellProps,
  IndexTableHeading,
  BulkAction 
} from "@storeware/polaris";
```

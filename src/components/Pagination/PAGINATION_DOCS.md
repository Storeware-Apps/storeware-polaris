# Pagination Component Documentation

## Overview

The Pagination component provides 100% API compatibility with Shopify's Polaris Pagination component while being built on shadcn/ui foundation with Tailwind CSS. Use pagination to let merchants move through an ordered collection of items that has been split into pages. On the web, pagination uses buttons to move back and forth between pages.

## Installation

```bash
pnpm install @storeware/polaris
```

## Basic Usage

```tsx
import { Pagination } from "@storeware/polaris";

function MyComponent() {
  return (
    <Pagination
      hasPrevious
      onPrevious={() => {
        console.log('Previous');
      }}
      hasNext
      onNext={() => {
        console.log('Next');
      }}
    />
  );
}
```

## Props

### Core Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `hasNext` | `boolean` | `false` | Whether there is a next page to show |
| `hasPrevious` | `boolean` | `false` | Whether there is a previous page to show |
| `onNext` | `() => void` | - | Callback when next button is clicked |
| `onPrevious` | `() => void` | - | Callback when previous button is clicked |

### Navigation Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `nextURL` | `string` | - | The URL of the next page |
| `previousURL` | `string` | - | The URL of the previous page |
| `label` | `React.ReactNode` | - | Text to provide more context in between the arrow buttons |

### Accessibility Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `accessibilityLabel` | `string` | `"Pagination"` | Accessible label for the pagination |
| `accessibilityLabels` | `AccessibilityLabels` | - | Accessible labels for the buttons |

### Keyboard Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `nextKeys` | `Key[]` | - | Keyboard shortcuts for the next button |
| `previousKeys` | `Key[]` | - | Keyboard shortcuts for the previous button |
| `nextTooltip` | `string` | - | Tooltip for the next button |
| `previousTooltip` | `string` | - | Tooltip for the previous button |

### Layout Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `"table" \| "page"` | `"page"` | Layout structure of the component |
| `className` | `string` | - | Additional CSS class name |

## Examples

### Basic Pagination

```tsx
import { Pagination } from "@storeware/polaris";

function BasicPagination() {
  return (
    <Pagination
      hasPrevious
      onPrevious={() => console.log('Previous')}
      hasNext
      onNext={() => console.log('Next')}
    />
  );
}
```

### With Label

```tsx
import { Pagination } from "@storeware/polaris";

function PaginationWithLabel() {
  return (
    <Pagination
      hasPrevious
      onPrevious={() => console.log('Previous')}
      hasNext
      onNext={() => console.log('Next')}
      label="Page 1 of 10"
    />
  );
}
```

### With Keyboard Navigation

```tsx
import { Pagination } from "@storeware/polaris";

function PaginationWithKeyboard() {
  return (
    <Pagination
      hasPrevious
      onPrevious={() => console.log('Previous')}
      hasNext
      onNext={() => console.log('Next')}
      previousKeys={['ArrowLeft']}
      nextKeys={['ArrowRight']}
    />
  );
}
```

### Table Type

```tsx
import { Pagination } from "@storeware/polaris";

function TablePagination() {
  return (
    <Pagination
      type="table"
      hasPrevious
      onPrevious={() => console.log('Previous')}
      hasNext
      onNext={() => console.log('Next')}
    />
  );
}
```

## Best Practices

Pagination should:

- Only be used for lists with more than 25 items
- Be placed at the bottom of a long list that has been split up into pages
- Navigate to the previous and next set of items in the paged list
- Hint when merchants are at the first or the last page by disabling the corresponding button

## Accessibility

The Pagination component includes:

- Proper ARIA labels for screen readers
- Keyboard navigation support
- Focus management
- Disabled state handling

## Related Components

- To see how pagination is used on a page, see the [Page component](../Page/PAGE_DOCS.md)
- To add primary and secondary calls to action at the bottom of a page, see the [Button component](../Button/BUTTON_DOCS.md)
- The IndexTable component is often combined with pagination to handle long lists of resources

## TypeScript

The component is fully typed with TypeScript:

```tsx
import type { PaginationProps, AccessibilityLabels } from "@storeware/polaris";
```

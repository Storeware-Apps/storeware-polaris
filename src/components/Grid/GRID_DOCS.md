# Grid Component Documentation

## Overview

The Grid component provides 100% API compatibility with Shopify's Polaris Grid component while being built on shadcn/ui foundation with Tailwind CSS. Create complex layouts based on CSS Grid.

## Installation

```bash
pnpm install @storeware/polaris
```

## Basic Usage

```tsx
import { Grid } from "@storeware/polaris";

function MyComponent() {
  return (
    <Grid>
      <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
        <Card title="Sales" sectioned>
          <p>View a summary of your online store's sales.</p>
        </Card>
      </Grid.Cell>
      <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
        <Card title="Orders" sectioned>
          <p>View a summary of your online store's orders.</p>
        </Card>
      </Grid.Cell>
    </Grid>
  );
}
```

## Import Styles

Make sure to import the component styles in your application:

```tsx
import "@storeware/polaris/styles";
```

## Grid System

The Grid component uses a 12-column system by default with responsive breakpoints:

- **xs**: Extra small devices (phones) - 0px and up
- **sm**: Small devices (tablets) - 640px and up  
- **md**: Medium devices (small laptops) - 768px and up
- **lg**: Large devices (desktops) - 1024px and up
- **xl**: Extra large devices (large desktops) - 1280px and up

## Grid Layouts

### Two Column Layout

Create a simple two-column layout that wraps at breakpoints.

```tsx
<Grid>
  <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
    <Card title="Sales" sectioned>
      <p>View a summary of your online store's sales.</p>
    </Card>
  </Grid.Cell>
  <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
    <Card title="Orders" sectioned>
      <p>View a summary of your online store's orders.</p>
    </Card>
  </Grid.Cell>
</Grid>
```

### Two-thirds and One-third Layout

Create asymmetric layouts with different column proportions.

```tsx
<Grid columns={{sm: 3}}>
  <Grid.Cell columnSpan={{xs: 6, sm: 4, md: 4, lg: 8, xl: 8}}>
    <Card title="Main Content" sectioned>
      <p>This takes up two-thirds of the space.</p>
    </Card>
  </Grid.Cell>
  <Grid.Cell columnSpan={{xs: 6, sm: 2, md: 2, lg: 4, xl: 4}}>
    <Card title="Sidebar" sectioned>
      <p>This takes up one-third of the space.</p>
    </Card>
  </Grid.Cell>
</Grid>
```

### Three Column Layout

Create equal three-column layouts.

```tsx
<Grid>
  <Grid.Cell columnSpan={{xs: 12, sm: 4, md: 4, lg: 4, xl: 4}}>
    <Card title="Column 1" sectioned>
      <p>First column content.</p>
    </Card>
  </Grid.Cell>
  <Grid.Cell columnSpan={{xs: 12, sm: 4, md: 4, lg: 4, xl: 4}}>
    <Card title="Column 2" sectioned>
      <p>Second column content.</p>
    </Card>
  </Grid.Cell>
  <Grid.Cell columnSpan={{xs: 12, sm: 4, md: 4, lg: 4, xl: 4}}>
    <Card title="Column 3" sectioned>
      <p>Third column content.</p>
    </Card>
  </Grid.Cell>
</Grid>
```

### Custom Layout with Areas

Create complex layouts using named grid areas (deprecated but supported).

```tsx
<Grid
  columns={{xs: 1, sm: 4, md: 4, lg: 6, xl: 6}}
  areas={{
    xs: ['product', 'sales', 'orders'],
    sm: [
      'product product product product',
      'sales sales orders orders',
    ],
    md: ['sales product product orders'],
    lg: ['product product product product sales orders'],
    xl: ['product product sales sales orders orders'],
  }}
>
  <Grid.Cell area="product">
    <Card title="Product" sectioned>
      <p>Product information.</p>
    </Card>
  </Grid.Cell>
  <Grid.Cell area="sales">
    <Card title="Sales" sectioned>
      <p>Sales data.</p>
    </Card>
  </Grid.Cell>
  <Grid.Cell area="orders">
    <Card title="Orders" sectioned>
      <p>Order information.</p>
    </Card>
  </Grid.Cell>
</Grid>
```

### Responsive Columns

Define different column counts for different screen sizes.

```tsx
<Grid columns={{xs: 1, sm: 2, md: 3, lg: 4, xl: 6}}>
  {Array.from({ length: 12 }, (_, i) => (
    <Grid.Cell key={i} columnSpan={{xs: 1}}>
      <Card title={`Item ${i + 1}`} sectioned>
        <p>Grid item content.</p>
      </Card>
    </Grid.Cell>
  ))}
</Grid>
```

### Custom Gap

Control spacing between grid items.

```tsx
<Grid gap={{xs: "1rem", md: "2rem"}}>
  <Grid.Cell columnSpan={{xs: 12, md: 6}}>
    <Card title="First Item" sectioned>
      <p>Content with custom gap.</p>
    </Card>
  </Grid.Cell>
  <Grid.Cell columnSpan={{xs: 12, md: 6}}>
    <Card title="Second Item" sectioned>
      <p>Content with custom gap.</p>
    </Card>
  </Grid.Cell>
</Grid>
```

## Props

### Grid Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `columns` | `Columns` | `{xs: 12}` | Number of columns per breakpoint |
| `gap` | `Gap` | `{xs: "1rem"}` | Grid gap per breakpoint |
| `areas` | `Areas` | - | Set grid-template-areas (deprecated) |
| `children` | `React.ReactNode` | - | Grid content |
| `className` | `string` | - | Additional CSS class name |

### Grid.Cell Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `columnSpan` | `ColumnSpan` | - | Column span for different breakpoints |
| `area` | `string` | - | Grid area name (when using areas) |
| `children` | `React.ReactNode` | - | Cell content |
| `className` | `string` | - | Additional CSS class name |

### Type Definitions

```tsx
type Breakpoints = "xs" | "sm" | "md" | "lg" | "xl";

type Columns = {
  [Breakpoint in Breakpoints]?: number;
};

type Gap = {
  [Breakpoint in Breakpoints]?: string;
};

type ColumnSpan = {
  [Breakpoint in Breakpoints]?: number;
};

type Areas = {
  [Breakpoint in Breakpoints]?: string[];
};
```

## Best Practices

- Use Grid for complex layouts that require precise control over positioning
- Use the 12-column system for consistent layouts
- Consider mobile-first responsive design when defining column spans
- Use semantic HTML elements within Grid.Cell components
- Prefer named areas for complex layouts (though deprecated, still supported)

## Related Components

- **Vertical Stack**: To lay out a set of smaller components in a row
- **Form Layout**: To lay out form fields
- **Inline Stack**: For horizontal layouts with simpler requirements
- **Block Stack**: For vertical layouts

## Accessibility

The Grid component:

- Uses semantic HTML structure
- Maintains proper document flow
- Supports screen readers
- Works with keyboard navigation
- Follows WCAG guidelines for layout components

## Examples

See the Storybook documentation for interactive examples of all grid layouts and responsive behaviors.

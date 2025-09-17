import type { Meta, StoryObj } from "@storybook/react";
import { Grid } from "./grid";
import { Card } from "../Card/card";
import { Page } from "../Page/page";

const meta = {
  title: "Layout and Structure/Grid",
  component: Grid,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
# Grid Component

Create complex layouts based on CSS Grid.

## Features

- **100% Polaris API Compatibility**: Matches Shopify's Polaris Grid component exactly
- **shadcn/ui Foundation**: Built on modern React patterns with Tailwind CSS
- **TypeScript Support**: Comprehensive type definitions with IntelliSense
- **Responsive Design**: Responsive column layouts across all breakpoints
- **CSS Grid Foundation**: Built on modern CSS Grid for flexible layouts
- **Flexible Styling**: Easy customization while maintaining design consistency

## Usage

\`\`\`tsx
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
\`\`\`

## Grid System

The Grid component uses a 12-column system by default:
- **xs**: Extra small devices (phones)
- **sm**: Small devices (tablets)
- **md**: Medium devices (small laptops)
- **lg**: Large devices (desktops)
- **xl**: Extra large devices (large desktops)

## Related Components

- To lay out a set of smaller components in a row, use the vertical stack component
- To lay out form fields, use the form layout component
        `,
      },
    },
  },
  argTypes: {
    columns: {
      description: "Number of columns per breakpoint",
      control: { type: "object" },
    },
    gap: {
      description: "Grid gap per breakpoint",
      control: { type: "object" },
    },
    areas: {
      description: "Set grid-template-areas (deprecated)",
      control: { type: "object" },
    },
  },
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

// Placeholder component for examples
const Placeholder = ({ height = "60px", width = "auto", children }: { 
  height?: string; 
  width?: string; 
  children?: React.ReactNode;
}) => {
  return (
    <div
      style={{
        background: "var(--p-color-text-info, #0969da)",
        height: height,
        width: width,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontSize: "14px",
        fontWeight: "500",
      }}
    >
      {children}
    </div>
  );
};

// Two column example
export const TwoColumn: Story = {
  render: () => (
    <Page fullWidth>
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
    </Page>
  ),
};

// Two-thirds and one-third column example
export const TwoThirdsAndOneThirdColumn: Story = {
  render: () => (
    <Page fullWidth>
      <Grid columns={{sm: 3}}>
        <Grid.Cell columnSpan={{xs: 6, sm: 4, md: 4, lg: 8, xl: 8}}>
          <Card title="Sales" sectioned>
            <p>View a summary of your online store's sales.</p>
          </Card>
        </Grid.Cell>
        <Grid.Cell columnSpan={{xs: 6, sm: 2, md: 2, lg: 4, xl: 4}}>
          <Card title="Orders" sectioned>
            <p>View a summary of your online store's orders.</p>
          </Card>
        </Grid.Cell>
      </Grid>
    </Page>
  ),
};

// Three one-third column example
export const ThreeOneThirdColumn: Story = {
  render: () => (
    <Page fullWidth>
      <Grid>
        <Grid.Cell columnSpan={{xs: 12, sm: 4, md: 4, lg: 4, xl: 4}}>
          <Card title="Sales" sectioned>
            <p>View a summary of your online store's sales.</p>
          </Card>
        </Grid.Cell>
        <Grid.Cell columnSpan={{xs: 12, sm: 4, md: 4, lg: 4, xl: 4}}>
          <Card title="Orders" sectioned>
            <p>View a summary of your online store's orders.</p>
          </Card>
        </Grid.Cell>
        <Grid.Cell columnSpan={{xs: 12, sm: 4, md: 4, lg: 4, xl: 4}}>
          <Card title="Products" sectioned>
            <p>View a summary of your online store's products.</p>
          </Card>
        </Grid.Cell>
      </Grid>
    </Page>
  ),
};

// Custom layout example
export const CustomLayout: Story = {
  render: () => (
    <Page fullWidth>
      <Card sectioned>
        <Grid
          columns={{xs: 1, sm: 4, md: 4, lg: 6, xl: 6}}
          areas={{
            xs: ["product", "sales", "orders"],
            sm: [
              "product product product product",
              "sales sales orders orders",
            ],
            md: ["sales product product orders"],
            lg: ["product product product product sales orders"],
            xl: ["product product sales sales orders orders"],
          }}
        >
          <Grid.Cell area="product">
            <Placeholder height="60px">Product</Placeholder>
          </Grid.Cell>
          <Grid.Cell area="sales">
            <Placeholder height="60px">Sales</Placeholder>
          </Grid.Cell>
          <Grid.Cell area="orders">
            <Placeholder height="60px">Orders</Placeholder>
          </Grid.Cell>
        </Grid>
      </Card>
    </Page>
  ),
};

// Basic grid without areas
export const BasicGrid: Story = {
  render: () => (
    <Grid gap={{xs: "1rem", md: "2rem"}}>
      <Grid.Cell columnSpan={{xs: 12, md: 6}}>
        <Card title="First Item" sectioned>
          <p>This is the first grid item.</p>
        </Card>
      </Grid.Cell>
      <Grid.Cell columnSpan={{xs: 12, md: 6}}>
        <Card title="Second Item" sectioned>
          <p>This is the second grid item.</p>
        </Card>
      </Grid.Cell>
      <Grid.Cell columnSpan={{xs: 12, md: 4}}>
        <Card title="Third Item" sectioned>
          <p>This is the third grid item.</p>
        </Card>
      </Grid.Cell>
      <Grid.Cell columnSpan={{xs: 12, md: 8}}>
        <Card title="Fourth Item" sectioned>
          <p>This is the fourth grid item that spans more columns.</p>
        </Card>
      </Grid.Cell>
    </Grid>
  ),
};

// Responsive columns example
export const ResponsiveColumns: Story = {
  render: () => (
    <Grid columns={{xs: 1, sm: 2, md: 3, lg: 4, xl: 6}}>
      {Array.from({ length: 12 }, (_, i) => (
        <Grid.Cell key={i} columnSpan={{xs: 1}}>
          <Placeholder height="80px">Item {i + 1}</Placeholder>
        </Grid.Cell>
      ))}
    </Grid>
  ),
};

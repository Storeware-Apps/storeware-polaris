import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ButtonGroup } from "./buttonGroup";
import { Button } from "../Button/button";
import {
  PlusIcon,
  ExportIcon,
  DeleteIcon,
  EditIcon,
} from "@shopify/polaris-icons";

const meta = {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
# ButtonGroup Component

A comprehensive ButtonGroup component that provides 100% API compatibility with Shopify's Polaris ButtonGroup component while being built on shadcn/ui foundation with Tailwind CSS.

## Features

- **100% Polaris Compatible**: Perfect API and visual compatibility with Shopify's Polaris design system
- **shadcn/ui Foundation**: Built on proven shadcn/ui patterns for reliability and customization
- **TypeScript First**: Full type safety with excellent IntelliSense support
- **Tailwind CSS**: Highly customizable styling system
- **Modern React**: Uses latest React patterns and best practices

## Gap Options

- **extraTight**: Minimal spacing between buttons (2px)
- **tight**: Standard spacing between buttons (8px) - default
- **loose**: Generous spacing between buttons (16px)

## Variants

- **Default**: Standard button group with spacing
- **Segmented**: Connected buttons with shared borders for toggle-like behavior
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    gap: {
      control: "select",
      options: ["extraTight", "tight", "loose"],
      description: "Determines the space between button group items",
    },
    variant: {
      control: "select",
      options: [undefined, "segmented"],
      description: "Styling variant for group",
    },
    fullWidth: {
      control: "boolean",
      description: "Buttons will stretch/shrink to occupy the full width",
    },
    connectedTop: {
      control: "boolean",
      description: "Remove top left and right border radius",
    },
    noWrap: {
      control: "boolean",
      description: "Prevent buttons in button group from wrapping to next line",
    },
  },
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic examples
export const Default: Story = {
  args: {
    gap: "tight",
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button>Cancel</Button>
      <Button variant="primary">Save</Button>
    </ButtonGroup>
  ),
};

export const WithSegmentedButtons: Story = {
  args: {
    variant: "segmented",
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button pressed>Day</Button>
      <Button>Week</Button>
      <Button>Month</Button>
    </ButtonGroup>
  ),
};

export const PressedWithSegmentedButtons: Story = {
  args: {
    variant: "segmented",
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button>Day</Button>
      <Button pressed>Week</Button>
      <Button>Month</Button>
    </ButtonGroup>
  ),
};

// Gap variations
export const GapVariations: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium mb-2">Extra Tight Gap</h3>
        <ButtonGroup gap="extraTight">
          <Button>Cancel</Button>
          <Button variant="primary">Save</Button>
        </ButtonGroup>
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Tight Gap (Default)</h3>
        <ButtonGroup gap="tight">
          <Button>Cancel</Button>
          <Button variant="primary">Save</Button>
        </ButtonGroup>
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Loose Gap</h3>
        <ButtonGroup gap="loose">
          <Button>Cancel</Button>
          <Button variant="primary">Save</Button>
        </ButtonGroup>
      </div>
    </div>
  ),
};

// Full width example
export const FullWidth: Story = {
  render: () => (
    <div className="w-80">
      <ButtonGroup fullWidth>
        <Button>Cancel</Button>
        <Button variant="primary">Save</Button>
      </ButtonGroup>
    </div>
  ),
};

// Connected top example
export const ConnectedTop: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="p-4 bg-gray-100 rounded-t-lg">
        <p className="text-sm">Content above buttons</p>
      </div>
      <ButtonGroup connectedTop>
        <Button>Cancel</Button>
        <Button variant="primary">Save</Button>
      </ButtonGroup>
    </div>
  ),
};

// No wrap example
export const NoWrap: Story = {
  render: () => (
    <div className="w-40">
      <ButtonGroup noWrap>
        <Button>Very Long Button Text</Button>
        <Button>Another Long Button</Button>
        <Button>Third Button</Button>
      </ButtonGroup>
    </div>
  ),
};

// With icons
export const WithIcons: Story = {
  render: () => (
    <ButtonGroup>
      <Button icon={<PlusIcon />}>Add</Button>
      <Button icon={<EditIcon />} variant="secondary">Edit</Button>
      <Button icon={<DeleteIcon />} tone="critical">Delete</Button>
    </ButtonGroup>
  ),
};

// Multiple button variants
export const MultipleVariants: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="tertiary">Cancel</Button>
      <Button variant="secondary">Draft</Button>
      <Button variant="primary">Publish</Button>
    </ButtonGroup>
  ),
};

// Segmented with different states
export const SegmentedStates: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium mb-2">View Options</h3>
        <ButtonGroup variant="segmented">
          <Button pressed>List</Button>
          <Button>Grid</Button>
          <Button>Card</Button>
        </ButtonGroup>
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Time Range</h3>
        <ButtonGroup variant="segmented">
          <Button>Today</Button>
          <Button pressed>This Week</Button>
          <Button>This Month</Button>
          <Button>This Year</Button>
        </ButtonGroup>
      </div>
    </div>
  ),
};

// Complex example
export const ComplexExample: Story = {
  render: () => (
    <div className="space-y-6 p-6 bg-gray-50 rounded-lg">
      <div>
        <h3 className="text-lg font-semibold mb-4">Product Management</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium mb-2">Primary Actions</h4>
            <ButtonGroup>
              <Button icon={<PlusIcon />} variant="primary">Add Product</Button>
              <Button icon={<ExportIcon />} variant="secondary">Export</Button>
            </ButtonGroup>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-2">View Toggle</h4>
            <ButtonGroup variant="segmented">
              <Button pressed>All Products</Button>
              <Button>Active</Button>
              <Button>Draft</Button>
              <Button>Archived</Button>
            </ButtonGroup>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-2">Bulk Actions</h4>
            <ButtonGroup gap="loose" fullWidth>
              <Button variant="tertiary">Select All</Button>
              <Button variant="secondary">Bulk Edit</Button>
              <Button tone="critical">Delete Selected</Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
    </div>
  ),
};

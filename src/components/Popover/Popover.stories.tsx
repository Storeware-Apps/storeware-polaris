import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { useState, useCallback } from "react";
import { Popover } from "./popover";
import { Button } from "../Button/button";
import { Text } from "../Text/Text";
import {
  ExportIcon,
  ImportIcon,
  EditIcon,
  DeleteIcon,
} from "@shopify/polaris-icons";

const meta = {
  title: "Components/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
# Popover Component

A comprehensive Popover component that provides 100% API compatibility with Shopify's Polaris Popover component while being built on shadcn/ui foundation with Tailwind CSS.

## Features

- **100% Polaris Compatible**: Perfect API and visual compatibility with Shopify's Polaris design system
- **shadcn/ui Foundation**: Built on proven shadcn/ui patterns for reliability and customization
- **TypeScript First**: Full type safety with excellent IntelliSense support
- **Tailwind CSS**: Highly customizable styling system
- **Modern React**: Uses latest React patterns and best practices

## Positioning Options

- **Above**: Opens above the activator
- **Below**: Opens below the activator (default)
- **Most Space**: Opens where there's the most available space
- **Cover**: Covers the activator

## Alignment Options

- **Left**: Aligns to the left of the activator
- **Center**: Centers relative to the activator (default)
- **Right**: Aligns to the right of the activator

## Layout Options

- **Sectioned**: Automatically wraps content in a section with padding
- **Full Width**: Stretches to match the activator's width
- **Full Height**: Stretches to fit content vertically
- **Fluid Content**: Allows content to determine overlay dimensions
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    active: {
      control: "boolean",
      description: "Show or hide the Popover",
    },
    preferredPosition: {
      control: "select",
      options: ["above", "below", "mostSpace", "cover"],
      description: "The preferred direction to open the popover",
    },
    preferredAlignment: {
      control: "select",
      options: ["left", "center", "right"],
      description:
        "The preferred alignment of the popover relative to its activator",
    },
    sectioned: {
      control: "boolean",
      description: "Automatically add wrap content in a section",
    },
    fullWidth: {
      control: "boolean",
      description:
        "Allow popover to stretch to the full width of its activator",
    },
    fullHeight: {
      control: "boolean",
      description: "Allow popover to stretch to fit content vertically",
    },
    fluidContent: {
      control: "boolean",
      description:
        "Allow popover content to determine the overlay width and height",
    },
    hideOnPrint: {
      control: "boolean",
      description: "Allow the popover overlay to be hidden when printing",
    },
    autofocusTarget: {
      control: "select",
      options: ["none", "first-node", "container"],
      description: "The preferred auto focus target",
    },
    zIndexOverride: {
      control: "number",
      description: "Override on the default z-index of 400",
    },
  },
  args: {
    onClose: fn(),
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

// Helper component for interactive stories
const PopoverExample = ({
  children,
  activatorText = "More actions",
  ...props
}: {
  children: React.ReactNode;
  activatorText?: string;
  [key: string]: unknown;
}) => {
  const [popoverActive, setPopoverActive] = useState(false);

  const togglePopoverActive = useCallback(
    () => setPopoverActive(popoverActive => !popoverActive),
    []
  );

  const activator = (
    <Button onClick={togglePopoverActive} disclosure>
      {activatorText}
    </Button>
  );

  return (
    <div
      style={{
        height: "300px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <Popover
        active={popoverActive}
        activator={activator}
        onClose={togglePopoverActive}
        {...props}>
        {children}
      </Popover>
    </div>
  );
};

export const Default: Story = {
  render: args => (
    <PopoverExample {...args}>
      <div>
        <Text as="p" variant="bodyMd">
          This is the default popover content.
        </Text>
      </div>
    </PopoverExample>
  ),
};

export const WithActionList: Story = {
  render: args => (
    <PopoverExample {...args}>
      <div className="py-2">
        <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer flex items-center gap-2">
          <ImportIcon />
          <span>Import</span>
        </div>
        <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer flex items-center gap-2">
          <ExportIcon />
          <span>Export</span>
        </div>
        <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer flex items-center gap-2">
          <EditIcon />
          <span>Edit</span>
        </div>
        <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer flex items-center gap-2 text-red-600">
          <DeleteIcon />
          <span>Delete</span>
        </div>
      </div>
    </PopoverExample>
  ),
};

export const Sectioned: Story = {
  args: {
    sectioned: true,
  },
  render: args => (
    <PopoverExample {...args}>
      <Text as="h3" variant="headingMd">
        Product details
      </Text>
      <Text variant="bodyMd">
        This product has been updated recently and is now available for
        purchase.
      </Text>
    </PopoverExample>
  ),
};

export const PositionedAbove: Story = {
  args: {
    preferredPosition: "above",
  },
  render: args => (
    <PopoverExample {...args}>
      <Text as="p" variant="bodyMd">
        This popover opens above the activator button.
      </Text>
    </PopoverExample>
  ),
};

export const LeftAligned: Story = {
  args: {
    preferredAlignment: "left",
  },
  render: args => (
    <PopoverExample {...args}>
      <Text as="p" variant="bodyMd">
        This popover is aligned to the left of the activator.
      </Text>
    </PopoverExample>
  ),
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
  },
  render: args => (
    <PopoverExample {...args} activatorText="Full width popover">
      <Text as="p" variant="bodyMd">
        This popover stretches to match the full width of its activator.
      </Text>
    </PopoverExample>
  ),
};

export const FluidContent: Story = {
  args: {
    fluidContent: true,
  },
  render: args => (
    <PopoverExample {...args}>
      <div style={{ width: "400px" }}>
        <Text as="h3" variant="headingMd">
          Wide content example
        </Text>
        <Text variant="bodyMd">
          This popover allows its content to determine the overlay width and
          height, making it perfect for dynamic content that might vary in size.
        </Text>
      </div>
    </PopoverExample>
  ),
};

export const WithFormContent: Story = {
  args: {
    sectioned: true,
  },
  render: args => (
    <PopoverExample {...args} activatorText="Edit settings">
      <div className="space-y-4">
        <Text as="h3" variant="headingMd">
          Quick settings
        </Text>
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input type="checkbox" defaultChecked />
            <span>Enable notifications</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            <span>Auto-save changes</span>
          </label>
        </div>
        <div className="flex gap-2 pt-2">
          <Button size="slim" variant="primary">
            Save
          </Button>
          <Button size="slim">Cancel</Button>
        </div>
      </div>
    </PopoverExample>
  ),
};

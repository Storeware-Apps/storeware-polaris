import type { Meta, StoryObj } from "@storybook/react";
import { Bleed } from "./bleed";
import { Card } from "../Card/card";
import { Text } from "../Text/Text";
import { Box } from "../Box/box";

const meta: Meta<typeof Bleed> = {
  title: "Components/Bleed",
  component: Bleed,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
A comprehensive Bleed component that provides 100% API compatibility with Shopify's Polaris Bleed component while being built on shadcn/ui foundation with Tailwind CSS.

## Features

- **100% Polaris Compatible**: Perfect API and visual compatibility with Shopify's Polaris design system
- **shadcn/ui Foundation**: Built on proven shadcn/ui patterns for reliability and customization
- **TypeScript First**: Full type safety with excellent IntelliSense support
- **Tailwind CSS**: Highly customizable styling system
- **Modern React**: Uses latest React patterns and best practices

## Purpose

Applies negative margin to allow content to bleed out into the surrounding layout. Content should never go beyond the edges of the parent container. Choose a bleed value that works within the containing layout.

## Margin Properties

The Bleed component supports all CSS logical properties for margins:

- **marginInline**: Negative horizontal space around children
- **marginBlock**: Negative vertical space around children  
- **marginBlockStart**: Negative top space around children
- **marginBlockEnd**: Negative bottom space around children
- **marginInlineStart**: Negative left space around children
- **marginInlineEnd**: Negative right space around children

## Responsive Support

All margin properties support responsive values using Polaris breakpoint tokens (xs, sm, md, lg, xl).

## Related Resources

Bleed props are named following the convention of CSS logical properties, such as 'margin-inline-start' and 'margin-block-start'. Learn more about [CSS logical properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties).
        `,
      },
    },
  },
  argTypes: {
    children: {
      control: "text",
      description: "Content to display inside the bleed container",
    },
    marginInline: {
      control: "select",
      options: ["0", "100", "200", "300", "400", "500", "600", "800"],
      description: "Negative horizontal space around children",
    },
    marginBlock: {
      control: "select", 
      options: ["0", "100", "200", "300", "400", "500", "600", "800"],
      description: "Negative vertical space around children",
    },
    marginBlockStart: {
      control: "select",
      options: ["0", "100", "200", "300", "400", "500", "600", "800"],
      description: "Negative top space around children",
    },
    marginBlockEnd: {
      control: "select",
      options: ["0", "100", "200", "300", "400", "500", "600", "800"],
      description: "Negative bottom space around children",
    },
    marginInlineStart: {
      control: "select",
      options: ["0", "100", "200", "300", "400", "500", "600", "800"],
      description: "Negative left space around children",
    },
    marginInlineEnd: {
      control: "select",
      options: ["0", "100", "200", "300", "400", "500", "600", "800"],
      description: "Negative right space around children",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Placeholder component for visual examples
const Placeholder = ({ 
  label = "", 
  height = "auto", 
  width = "auto" 
}: { 
  label?: string; 
  height?: string; 
  width?: string; 
}) => {
  return (
    <Box
      background="bg-surface-info"
      padding="200"
      style={{
        height: height,
        width: width,
      }}
    >
      <Text as="h2" variant="bodyMd" tone="text-inverse">
        {label}
      </Text>
    </Box>
  );
};

// Default story
export const Default: Story = {
  args: {
    marginInline: "400",
    children: <Placeholder label="Default bleed" />,
  },
};

// Horizontal bleed example (matches Polaris documentation)
export const Horizontal: Story = {
  args: {
    marginInline: "400",
    children: <Placeholder label="marginInline" />,
  },
  render: (args) => (
    <Card>
      <Text as="h2" variant="bodyMd">
        Content inside a card
      </Text>
      <Bleed {...args} />
    </Card>
  ),
};

// Vertical bleed example
export const Vertical: Story = {
  args: {
    marginBlock: "400",
    children: <Placeholder label="marginBlock" />,
  },
  render: (args) => (
    <Card>
      <Text as="h2" variant="bodyMd">
        Content inside a card
      </Text>
      <Bleed {...args} />
      <Text as="p" variant="bodyMd">
        More content after the bleed
      </Text>
    </Card>
  ),
};

// Specific direction examples
export const SpecificDirections: Story = {
  render: () => (
    <div className="space-y-6">
      <Card>
        <Text as="h3" variant="bodyMd">
          Top bleed (marginBlockStart)
        </Text>
        <Bleed marginBlockStart="400">
          <Placeholder label="marginBlockStart" />
        </Bleed>
      </Card>
      
      <Card>
        <Text as="h3" variant="bodyMd">
          Bottom bleed (marginBlockEnd)
        </Text>
        <Bleed marginBlockEnd="400">
          <Placeholder label="marginBlockEnd" />
        </Bleed>
      </Card>
      
      <Card>
        <Text as="h3" variant="bodyMd">
          Left bleed (marginInlineStart)
        </Text>
        <Bleed marginInlineStart="400">
          <Placeholder label="marginInlineStart" />
        </Bleed>
      </Card>
      
      <Card>
        <Text as="h3" variant="bodyMd">
          Right bleed (marginInlineEnd)
        </Text>
        <Bleed marginInlineEnd="400">
          <Placeholder label="marginInlineEnd" />
        </Bleed>
      </Card>
    </div>
  ),
};

// Multiple directions
export const MultipleDirections: Story = {
  args: {
    marginInline: "400",
    marginBlockStart: "200",
    children: <Placeholder label="Multiple directions" />,
  },
  render: (args) => (
    <Card>
      <Text as="h2" variant="bodyMd">
        Content inside a card
      </Text>
      <Bleed {...args} />
    </Card>
  ),
};

// Different spacing values
export const SpacingValues: Story = {
  render: () => (
    <div className="space-y-6">
      {(["200", "400", "600", "800"] as const).map((spacing) => (
        <Card key={spacing}>
          <Text as="h3" variant="bodyMd">
            Spacing: {spacing}
          </Text>
          <Bleed marginInline={spacing}>
            <Placeholder label={`marginInline="${spacing}"`} />
          </Bleed>
        </Card>
      ))}
    </div>
  ),
};

// Responsive bleed
export const Responsive: Story = {
  args: {
    marginInline: { xs: "200", md: "400", lg: "600" },
    children: <Placeholder label="Responsive bleed" />,
  },
  render: (args) => (
    <Card>
      <Text as="h2" variant="bodyMd">
        Responsive bleed (resize window to see effect)
      </Text>
      <Text as="p" variant="bodyMd">
        xs: 200, md: 400, lg: 600
      </Text>
      <Bleed {...args} />
    </Card>
  ),
};

import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { ChoiceList } from "./choiceList";

const DOCS_CONTENT = `
# ChoiceList Component

A choice list lets you create a list of grouped radio buttons or checkboxes. Use this component if you need to group together a related list of interactive choices.

## Features

- **100% Polaris Compatible**: Perfect API and visual compatibility with Shopify's Polaris ChoiceList component
- **Single and Multi-Selection**: Support for both radio button and checkbox behavior
- **Accessibility**: Full ARIA support and keyboard navigation
- **TypeScript**: Full type safety with excellent IntelliSense support

## Usage

\`\`\`tsx
import { ChoiceList } from "@storeware/polaris";
import { useState } from "react";

function MyComponent() {
  const [selected, setSelected] = useState<string[]>(['hidden']);

  const handleChange = (value: string[]) => setSelected(value);

  return (
    <ChoiceList
      title="Company name"
      choices={[
        {label: 'Hidden', value: 'hidden'},
        {label: 'Optional', value: 'optional'},
        {label: 'Required', value: 'required'},
      ]}
      selected={selected}
      onChange={handleChange}
    />
  );
}
\`\`\`
`;

const meta = {
  title: "Components/ChoiceList",
  component: ChoiceList,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: DOCS_CONTENT,
      },
    },
  },
  argTypes: {
    title: {
      control: "text",
      description: "Label for list of choices",
    },
    choices: {
      control: "object",
      description: "Collection of choices",
    },
    selected: {
      control: "object",
      description: "Collection of selected choices",
    },
    allowMultiple: {
      control: "boolean",
      description: "Allow merchants to select multiple options at once",
    },
    titleHidden: {
      control: "boolean",
      description: "Toggles display of the title",
    },
    disabled: {
      control: "boolean",
      description: "Disable all choices",
    },
    tone: {
      control: "select",
      options: [undefined, "magic"],
      description: "Indicates the tone of the choice list",
    },
  },
  args: {
    title: "Company name",
    choices: [
      { label: "Hidden", value: "hidden" },
      { label: "Optional", value: "optional" },
      { label: "Required", value: "required" },
    ],
    selected: ["hidden"],
    allowMultiple: false,
    titleHidden: false,
    disabled: false,
  },
} satisfies Meta<typeof ChoiceList>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default single choice
export const Default: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>(["hidden"]);

    const handleChange = (value: string[]) => setSelected(value);

    return (
      <ChoiceList
        title="Company name"
        choices={[
          { label: "Hidden", value: "hidden" },
          { label: "Optional", value: "optional" },
          { label: "Required", value: "required" },
        ]}
        selected={selected}
        onChange={handleChange}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Allows merchants to select one option from a list. Make sure all options are an either/or choice.",
      },
    },
  },
};

// With error
export const WithError: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>([]);

    const handleChange = (value: string[]) => setSelected(value);

    return (
      <ChoiceList
        title="Company name"
        choices={[
          { label: "Hidden", value: "hidden" },
          { label: "Optional", value: "optional" },
          { label: "Required", value: "required" },
        ]}
        selected={selected}
        onChange={handleChange}
        error="You must select a company name option"
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Use to let merchants know if there's a problem with their choice.",
      },
    },
  },
};

// With multi-choice
export const WithMultiChoice: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>(["hidden"]);

    const handleChange = (value: string[]) => setSelected(value);

    return (
      <ChoiceList
        title="While the customer is checking out"
        allowMultiple
        choices={[
          { label: "Use the shipping address as the billing address", value: "shipping" },
          { label: "Require a confirmation step", value: "confirmation" },
        ]}
        selected={selected}
        onChange={handleChange}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Allows merchants to select multiple options from a list. Make sure the options are not mutually exclusive.",
      },
    },
  },
};

// With children content
export const WithChildrenContent: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>(["hidden"]);

    const handleChange = (value: string[]) => setSelected(value);

    return (
      <ChoiceList
        title="Company name"
        choices={[
          {
            label: "Hidden",
            value: "hidden",
            helpText: "Customers won't see your company name",
          },
          {
            label: "Optional",
            value: "optional",
            helpText: "Customers will see your company name if you provide it",
          },
          {
            label: "Required",
            value: "required",
            helpText: "Customers must provide a company name",
          },
        ]}
        selected={selected}
        onChange={handleChange}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Use when you need to provide additional context or explanation for each choice.",
      },
    },
  },
};

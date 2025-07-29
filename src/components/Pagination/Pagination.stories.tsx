import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from "./pagination";

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
A comprehensive Pagination component that provides 100% API compatibility with Shopify's Polaris Pagination component while being built on shadcn/ui foundation with Tailwind CSS.

Use pagination to let merchants move through an ordered collection of items that has been split into pages. On the web, pagination uses buttons to move back and forth between pages.

## Features

- **100% Polaris Compatible**: Perfect API and visual compatibility with Shopify's Polaris Pagination component
- **Keyboard Navigation**: Support for keyboard shortcuts
- **Accessibility**: Full ARIA support and screen reader compatibility
- **URL Navigation**: Support for URL-based navigation
- **Flexible Layout**: Support for both page and table layouts
- **TypeScript**: Full type safety with excellent IntelliSense support

## Usage

\`\`\`tsx
import { Pagination } from "@storeware/polaris";

function MyComponent() {
  return (
    <Pagination
      hasPrevious
      onPrevious={() => console.log('Previous')}
      hasNext
      onNext={() => console.log('Next')}
    />
  );
}
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    hasNext: {
      control: "boolean",
      description: "Whether there is a next page to show",
    },
    hasPrevious: {
      control: "boolean",
      description: "Whether there is a previous page to show",
    },
    label: {
      control: "text",
      description: "Text to provide more context in between the arrow buttons",
    },
    type: {
      control: "select",
      options: ["page", "table"],
      description: "Layout structure of the component",
    },
    accessibilityLabel: {
      control: "text",
      description: "Accessible label for the pagination",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story - basic pagination
export const Default: Story = {
  args: {
    hasPrevious: true,
    hasNext: true,
    onPrevious: () => {},
    onNext: () => {},
  },
};

// With keyboard navigation
export const WithKeyboardNavigation: Story = {
  args: {
    hasPrevious: true,
    hasNext: true,
    onPrevious: () => {},
    onNext: () => {},
    previousKeys: ["ArrowLeft"],
    nextKeys: ["ArrowRight"],
    previousTooltip: "Previous page (←)",
    nextTooltip: "Next page (→)",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Pagination with keyboard navigation support. Use arrow keys to navigate.",
      },
    },
  },
};

// With label
export const WithLabel: Story = {
  args: {
    hasPrevious: true,
    hasNext: true,
    onPrevious: () => {},
    onNext: () => {},
    label: "Page 1 of 10",
  },
  parameters: {
    docs: {
      description: {
        story: "Pagination with a label showing current page information.",
      },
    },
  },
};

// Table type
export const WithTableType: Story = {
  args: {
    hasPrevious: true,
    hasNext: true,
    onPrevious: () => {},
    onNext: () => {},
    type: "table",
  },
  parameters: {
    docs: {
      description: {
        story: "Pagination with table layout type for use within tables.",
      },
    },
  },
};

// First page (no previous)
export const FirstPage: Story = {
  args: {
    hasPrevious: false,
    hasNext: true,
    onPrevious: () => {},
    onNext: () => {},
    label: "Page 1 of 10",
  },
  parameters: {
    docs: {
      description: {
        story: "Pagination on the first page with previous button disabled.",
      },
    },
  },
};

// Last page (no next)
export const LastPage: Story = {
  args: {
    hasPrevious: true,
    hasNext: false,
    onPrevious: () => {},
    onNext: () => {},
    label: "Page 10 of 10",
  },
  parameters: {
    docs: {
      description: {
        story: "Pagination on the last page with next button disabled.",
      },
    },
  },
};

// Single page (both disabled)
export const SinglePage: Story = {
  args: {
    hasPrevious: false,
    hasNext: false,
    onPrevious: () => {},
    onNext: () => {},
    label: "Page 1 of 1",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Pagination with both buttons disabled when there's only one page.",
      },
    },
  },
};

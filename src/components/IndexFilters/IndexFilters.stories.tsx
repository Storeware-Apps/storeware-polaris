import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { IndexFilters, useSetIndexFiltersMode } from "./indexFilters";
import { Card } from "../Card/card";

const meta: Meta<typeof IndexFilters> = {
  title: "Components/IndexFilters",
  component: IndexFilters,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
A comprehensive IndexFilters component that provides 100% API compatibility with Shopify's Polaris IndexFilters component while being built on shadcn/ui foundation with Tailwind CSS.

Use index filters to allow merchants to filter, search, and sort their index table data and create unique saved views from the results.

## Features

- **100% Polaris Compatible**: Perfect API and visual compatibility with Shopify's Polaris IndexFilters component
- **Search and Filter**: Built-in search functionality with customizable filters
- **Sorting**: Support for multiple sort options with direction labels
- **Saved Views**: Tab-based view management with create, edit, and delete actions
- **Accessibility**: Full ARIA support and keyboard navigation
- **TypeScript**: Full type safety with excellent IntelliSense support

## Usage

\`\`\`tsx
import { IndexFilters, useSetIndexFiltersMode } from "@storeware/polaris";
import { useState } from "react";

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
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    disabled: {
      control: "boolean",
      description: "Whether the component is disabled",
    },
    disableQueryField: {
      control: "boolean",
      description: "Whether to disable just the query field",
    },
    showEditColumnsButton: {
      control: "boolean",
      description: "Whether to show edit columns button",
    },
    autoFocusSearchField: {
      control: "boolean",
      description: "Whether to auto-focus search field",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story - basic IndexFilters
export const Default: Story = {
  render: function DefaultStory() {
    const { mode, setMode } = useSetIndexFiltersMode();
    const [queryValue, setQueryValue] = useState("");

    return (
      // <Card>
      <IndexFilters
        mode={mode}
        setMode={setMode}
        queryValue={queryValue}
        queryPlaceholder="Search orders"
        onQueryChange={setQueryValue}
        onQueryClear={() => setQueryValue("")}
      />
      // </Card>
    );
  },
};

// With sorting options
export const WithSorting: Story = {
  render: function WithSortingStory() {
    const { mode, setMode } = useSetIndexFiltersMode();
    const [queryValue, setQueryValue] = useState("");
    const [sortSelected, setSortSelected] = useState(["order asc"]);

    const sortOptions = [
      { label: "Order", value: "order asc", directionLabel: "Ascending" },
      { label: "Order", value: "order desc", directionLabel: "Descending" },
      { label: "Customer", value: "customer asc", directionLabel: "A-Z" },
      { label: "Customer", value: "customer desc", directionLabel: "Z-A" },
      { label: "Date", value: "date asc", directionLabel: "Oldest first" },
      { label: "Date", value: "date desc", directionLabel: "Newest first" },
      { label: "Total", value: "total asc", directionLabel: "Ascending" },
      { label: "Total", value: "total desc", directionLabel: "Descending" },
    ];

    return (
      // <Card>
      <IndexFilters
        mode={mode}
        setMode={setMode}
        queryValue={queryValue}
        queryPlaceholder="Search orders"
        onQueryChange={setQueryValue}
        onQueryClear={() => setQueryValue("")}
        sortOptions={sortOptions}
        sortSelected={sortSelected}
        onSort={setSortSelected}
      />
      // </Card>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "IndexFilters with sorting options for different columns.",
      },
    },
  },
};

// With tabs/views
export const WithTabs: Story = {
  render: function WithTabsStory() {
    const { mode, setMode } = useSetIndexFiltersMode();
    const [queryValue, setQueryValue] = useState("");
    const [selected, setSelected] = useState(0);
    const [statusFilter, setStatusFilter] = useState<string[]>([]);
    const [categoryFilter, setCategoryFilter] = useState<string[]>([]);
    const [tabItems, setTabItems] = useState([
      "All",
      "Unpaid",
      "Open",
      "Closed",
      "Local delivery",
      "Local pickup",
    ]);

    const tabs = tabItems.map((item, index) => ({
      content: item,
      index,
      onAction: () => {},
      id: `${item}-${index}`,
      isLocked: index === 0,
      actions:
        index === 0
          ? []
          : [
              {
                type: "rename" as const,
                onAction: () => {},
                onPrimaryAction: async (value: string) => {
                  const newItems = [...tabItems];
                  newItems[index] = value;
                  setTabItems(newItems);
                  return true;
                },
              },
              {
                type: "duplicate" as const,
                onPrimaryAction: async (value: string) => {
                  setTabItems([...tabItems, value]);
                  setSelected(tabItems.length);
                  return true;
                },
              },
              {
                type: "delete" as const,
                onPrimaryAction: async () => {
                  const newItems = [...tabItems];
                  newItems.splice(index, 1);
                  setTabItems(newItems);
                  setSelected(0);
                  return true;
                },
              },
            ],
    }));

    return (
      // <Card>
      <IndexFilters
        mode={mode}
        setMode={setMode}
        queryValue={queryValue}
        queryPlaceholder="Search in all orders"
        onQueryChange={setQueryValue}
        onQueryClear={() => setQueryValue("")}
        tabs={tabs}
        selected={selected}
        onSelect={setSelected}
        canCreateNewView
        onCreateNewView={async name => {
          setTabItems([...tabItems, name]);
          setSelected(tabItems.length);
          return true;
        }}
        pinnedFilters={[
          {
            key: "status",
            label: "Status",
            choices: [
              { label: "Active", value: "active" },
              { label: "Inactive", value: "inactive" },
              { label: "Pending", value: "pending" },
            ],
            selected: statusFilter,
            allowMultiple: true,
            onChange: selected => setStatusFilter(selected),
          },
          {
            key: "category",
            label: "Category",
            choices: [
              { label: "Electronics", value: "electronics" },
              { label: "Clothing", value: "clothing" },
              { label: "Books", value: "books" },
            ],
            selected: categoryFilter,
            allowMultiple: false,
            onChange: selected => setCategoryFilter(selected),
          },
        ]}
      />
      // </Card>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "IndexFilters with tabs for saved views and view management.",
      },
    },
  },
};

// With pinned filters
export const WithPinnedFilters: Story = {
  render: function WithPinnedFiltersStory() {
    const { mode, setMode } = useSetIndexFiltersMode();
    const [queryValue, setQueryValue] = useState("");
    const [statusFilter, setStatusFilter] = useState<string[]>([]);
    const [categoryFilter, setCategoryFilter] = useState<string[]>([]);

    return (
      // <Card>
      <IndexFilters
        mode={mode}
        setMode={setMode}
        queryValue={queryValue}
        queryPlaceholder="Search products"
        onQueryChange={setQueryValue}
        onQueryClear={() => setQueryValue("")}
        pinnedFilters={[
          {
            key: "status",
            label: "Status",
            choices: [
              { label: "Active", value: "active" },
              { label: "Inactive", value: "inactive" },
              { label: "Pending", value: "pending" },
            ],
            selected: statusFilter,
            allowMultiple: true,
            onChange: selected => setStatusFilter(selected),
          },
          {
            key: "category",
            label: "Category",
            choices: [
              { label: "Electronics", value: "electronics" },
              { label: "Clothing", value: "clothing" },
              { label: "Books", value: "books" },
            ],
            selected: categoryFilter,
            allowMultiple: false,
            onChange: selected => setCategoryFilter(selected),
          },
        ]}
      />
      // </Card>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "IndexFilters with pinned filter buttons that show dropdown menus with ChoiceList components.",
      },
    },
  },
};

// With applied filters
export const WithAppliedFilters: Story = {
  render: function WithAppliedFiltersStory() {
    const { mode, setMode } = useSetIndexFiltersMode();
    const [queryValue, setQueryValue] = useState("test query");
    const [appliedFilters, setAppliedFilters] = useState([
      {
        key: "status",
        label: "Status: Paid",
        onRemove: () => {
          setAppliedFilters(prev => prev.filter(f => f.key !== "status"));
        },
      },
      {
        key: "location",
        label: "Location: New York",
        onRemove: () => {
          setAppliedFilters(prev => prev.filter(f => f.key !== "location"));
        },
      },
    ]);

    return (
      // <Card>
      <IndexFilters
        mode={mode}
        setMode={setMode}
        queryValue={queryValue}
        queryPlaceholder="Searching in all..."
        onQueryChange={setQueryValue}
        onQueryClear={() => setQueryValue("")}
        appliedFilters={appliedFilters}
        onClearAll={() => {
          setAppliedFilters([]);
          setQueryValue("");
        }}
      />
      // </Card>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "IndexFilters with applied filters showing filter badges and clear all functionality.",
      },
    },
  },
};

// Disabled state
export const Disabled: Story = {
  render: function DisabledStory() {
    const { mode, setMode } = useSetIndexFiltersMode();
    const [queryValue, setQueryValue] = useState("");

    const sortOptions = [
      { label: "Order", value: "order asc", directionLabel: "Ascending" },
      { label: "Customer", value: "customer asc", directionLabel: "A-Z" },
    ];

    return (
      <Card>
        <IndexFilters
          mode={mode}
          setMode={setMode}
          queryValue={queryValue}
          queryPlaceholder="Search orders"
          onQueryChange={setQueryValue}
          onQueryClear={() => setQueryValue("")}
          sortOptions={sortOptions}
          disabled={true}
        />
      </Card>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "IndexFilters in disabled state with all interactions disabled.",
      },
    },
  },
};

// With edit columns button
export const WithEditColumns: Story = {
  render: function WithEditColumnsStory() {
    const { mode, setMode } = useSetIndexFiltersMode();
    const [queryValue, setQueryValue] = useState("");

    return (
      <Card>
        <IndexFilters
          mode={mode}
          setMode={setMode}
          queryValue={queryValue}
          queryPlaceholder="Search orders"
          onQueryChange={setQueryValue}
          onQueryClear={() => setQueryValue("")}
          showEditColumnsButton={true}
        />
      </Card>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "IndexFilters with edit columns button for table customization.",
      },
    },
  },
};

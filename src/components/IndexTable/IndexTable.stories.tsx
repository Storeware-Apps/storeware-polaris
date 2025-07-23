import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { IndexTable, useIndexResourceState } from "./indexTable";
import {
  IndexFilters,
  IndexFiltersMode,
  useSetIndexFiltersMode,
} from "../IndexFilters/indexFilters";
import { Card } from "../Card/card";
import { Badge } from "../Badge/badge";
import { Text } from "../Text/Text";

const meta: Meta<typeof IndexTable> = {
  title: "Components/IndexTable",
  component: IndexTable,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
A comprehensive IndexTable component that provides 100% API compatibility with Shopify's Polaris IndexTable component while being built on shadcn/ui foundation with Tailwind CSS and TanStack Table.

An index table displays a collection of objects of the same type, like orders or products. The main job of an index table is to help merchants get an at-a-glance of the objects to perform actions or navigate to a full-page representation of it.

## Features

- **100% Polaris Compatible**: Perfect API and visual compatibility with Shopify's Polaris IndexTable component
- **TanStack Table Integration**: Built on the powerful TanStack Table library
- **Row Selection**: Support for single and multiple row selection
- **Sorting**: Column-based sorting with visual indicators
- **Bulk Actions**: Support for bulk operations on selected rows
- **Accessibility**: Full ARIA support and keyboard navigation
- **TypeScript**: Full type safety with excellent IntelliSense support

## Usage

\`\`\`tsx
import { IndexTable, useIndexResourceState } from "@storeware/polaris";

function MyComponent() {
  const orders = [
    { id: '1020', order: '#1020', date: 'Jul 20 at 4:34pm', customer: 'Jaydon Stanton' },
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
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    condensed: {
      control: "boolean",
      description: "Whether to use condensed styling",
    },
    hasZebraStriping: {
      control: "boolean",
      description: "Whether to use zebra striping",
    },
    loading: {
      control: "boolean",
      description: "Whether the table is in loading state",
    },
    selectable: {
      control: "boolean",
      description: "Whether the table supports selection",
    },
    lastColumnSticky: {
      control: "boolean",
      description: "Whether the last column should be sticky",
    },
  },
};

// With pagination
export const WithPagination: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;
    const totalPages = Math.ceil(sampleOrders.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentOrders = sampleOrders.slice(startIndex, endIndex);

    const resourceName = { singular: "order", plural: "orders" };
    const { selectedResources, allResourcesSelected, handleSelectionChange } =
      useIndexResourceState(currentOrders);

    const rowMarkup = currentOrders.map((order, index) => (
      <IndexTable.Row
        id={order.id}
        key={order.id}
        selected={selectedResources.includes(order.id)}
        position={index}>
        <IndexTable.Cell>
          <Text variant="bodyMd" fontWeight="bold" as="span">
            {order.order}
          </Text>
        </IndexTable.Cell>
        <IndexTable.Cell>{order.date}</IndexTable.Cell>
        <IndexTable.Cell>{order.customer}</IndexTable.Cell>
        <IndexTable.Cell>
          <Text as="span" alignment="end">
            {order.total}
          </Text>
        </IndexTable.Cell>
        <IndexTable.Cell>{order.paymentStatus}</IndexTable.Cell>
        <IndexTable.Cell>{order.fulfillmentStatus}</IndexTable.Cell>
      </IndexTable.Row>
    ));

    return (
      <Card>
        <IndexTable
          resourceName={resourceName}
          itemCount={currentOrders.length}
          selectedItemsCount={
            allResourcesSelected ? "All" : selectedResources.length
          }
          onSelectionChange={handleSelectionChange}
          pagination={{
            hasPrevious: currentPage > 1,
            hasNext: currentPage < totalPages,
            onPrevious: () => setCurrentPage(prev => Math.max(1, prev - 1)),
            onNext: () =>
              setCurrentPage(prev => Math.min(totalPages, prev + 1)),
            label: `Showing ${startIndex + 1}-${Math.min(endIndex, sampleOrders.length)} of ${sampleOrders.length} orders`,
          }}
          headings={[
            { title: "Order" },
            { title: "Date" },
            { title: "Customer" },
            { title: "Total", alignment: "end" },
            { title: "Payment status" },
            { title: "Fulfillment status" },
          ]}>
          {rowMarkup}
        </IndexTable>
      </Card>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "IndexTable with integrated pagination using the pagination prop. The pagination appears automatically at the bottom of the table when the pagination prop is provided.",
      },
    },
  },
};

// With bulk actions
export const WithBulkActions: Story = {
  render: () => {
    const resourceName = { singular: "order", plural: "orders" };
    const { selectedResources, allResourcesSelected, handleSelectionChange } =
      useIndexResourceState(sampleOrders);

    const bulkActions = [
      {
        content: "Mark as fulfilled",
        onAction: () => {
          console.log("Mark as fulfilled clicked for:", selectedResources);
          alert(`Marking ${selectedResources.length} orders as fulfilled`);
        },
      },
      {
        content: "Archive orders",
        onAction: () => {
          console.log("Archive orders clicked for:", selectedResources);
          alert(`Archiving ${selectedResources.length} orders`);
        },
      },
      {
        content: "Delete",
        onAction: () => {
          console.log("Delete clicked for:", selectedResources);
          alert(`Deleting ${selectedResources.length} orders`);
        },
        destructive: true,
      },
    ];

    const rowMarkup = sampleOrders.map((order, index) => (
      <IndexTable.Row
        id={order.id}
        key={order.id}
        selected={selectedResources.includes(order.id)}
        position={index}>
        <IndexTable.Cell>
          <Text variant="bodyMd" fontWeight="bold" as="span">
            {order.order}
          </Text>
        </IndexTable.Cell>
        <IndexTable.Cell>{order.date}</IndexTable.Cell>
        <IndexTable.Cell>{order.customer}</IndexTable.Cell>
        <IndexTable.Cell>
          <Text as="span" alignment="end">
            {order.total}
          </Text>
        </IndexTable.Cell>
        <IndexTable.Cell>
          <Badge
            progress={
              order.paymentStatus === "Paid" ? "complete" : "partiallyComplete"
            }>
            {order.paymentStatus}
          </Badge>
        </IndexTable.Cell>
        <IndexTable.Cell>
          <Badge progress="incomplete">{order.fulfillmentStatus}</Badge>
        </IndexTable.Cell>
      </IndexTable.Row>
    ));

    return (
      <Card>
        <IndexTable
          resourceName={resourceName}
          itemCount={sampleOrders.length}
          selectedItemsCount={
            allResourcesSelected ? "All" : selectedResources.length
          }
          onSelectionChange={handleSelectionChange}
          bulkActions={bulkActions}
          headings={[
            { title: "Order" },
            { title: "Date" },
            { title: "Customer" },
            { title: "Total", alignment: "end" },
            { title: "Payment status" },
            { title: "Fulfillment status" },
          ]}>
          {rowMarkup}
        </IndexTable>
      </Card>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "IndexTable with bulk actions that appear when rows are selected. Select one or more rows to see the action buttons appear to the right of the selection count.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data
const sampleOrders = [
  {
    id: "1020",
    order: "#1020",
    date: "Jul 20 at 4:34pm",
    customer: "Jaydon Stanton",
    total: "$969.44",
    paymentStatus: "Paid",
    fulfillmentStatus: "Unfulfilled",
  },
  {
    id: "1019",
    order: "#1019",
    date: "Jul 20 at 3:46pm",
    customer: "Ruben Westerfelt",
    total: "$701.19",
    paymentStatus: "Partially paid",
    fulfillmentStatus: "Unfulfilled",
  },
  {
    id: "1018",
    order: "#1018",
    date: "Jul 20 at 3:44pm",
    customer: "Leo Carder",
    total: "$798.24",
    paymentStatus: "Paid",
    fulfillmentStatus: "Unfulfilled",
  },
];

// Default story - basic IndexTable
export const Default: Story = {
  render: () => {
    const resourceName = { singular: "order", plural: "orders" };
    const { selectedResources, allResourcesSelected, handleSelectionChange } =
      useIndexResourceState(sampleOrders);

    const rowMarkup = sampleOrders.map((order, index) => (
      <IndexTable.Row
        id={order.id}
        key={order.id}
        selected={selectedResources.includes(order.id)}
        position={index}>
        <IndexTable.Cell>
          <Text variant="bodyMd" fontWeight="bold" as="span">
            {order.order}
          </Text>
        </IndexTable.Cell>
        <IndexTable.Cell>{order.date}</IndexTable.Cell>
        <IndexTable.Cell>{order.customer}</IndexTable.Cell>
        <IndexTable.Cell>
          <Text as="span" alignment="end">
            {order.total}
          </Text>
        </IndexTable.Cell>
        <IndexTable.Cell>
          <Badge
            progress={
              order.paymentStatus === "Paid" ? "complete" : "partiallyComplete"
            }>
            {order.paymentStatus}
          </Badge>
        </IndexTable.Cell>
        <IndexTable.Cell>
          <Badge progress="incomplete">{order.fulfillmentStatus}</Badge>
        </IndexTable.Cell>
      </IndexTable.Row>
    ));

    return (
      // <Card>
      <IndexTable
        resourceName={resourceName}
        itemCount={sampleOrders.length}
        selectedItemsCount={
          allResourcesSelected ? "All" : selectedResources.length
        }
        onSelectionChange={handleSelectionChange}
        headings={[
          { title: "Order" },
          { title: "Date" },
          { title: "Customer" },
          { title: "Total", alignment: "end" },
          { title: "Payment status" },
          { title: "Fulfillment status" },
        ]}>
        {rowMarkup}
      </IndexTable>
      // </Card>
    );
  },
};

// With IndexFilters integration
export const WithIndexFilters: Story = {
  render: () => {
    const { mode, setMode } = useSetIndexFiltersMode();
    const [queryValue, setQueryValue] = useState("");
    const [sortSelected, setSortSelected] = useState(["order asc"]);

    const resourceName = { singular: "order", plural: "orders" };
    const { selectedResources, allResourcesSelected, handleSelectionChange } =
      useIndexResourceState(sampleOrders);

    const sortOptions = [
      { label: "Order", value: "order asc", directionLabel: "Ascending" },
      { label: "Order", value: "order desc", directionLabel: "Descending" },
      { label: "Customer", value: "customer asc", directionLabel: "A-Z" },
      { label: "Customer", value: "customer desc", directionLabel: "Z-A" },
      { label: "Date", value: "date asc", directionLabel: "A-Z" },
      { label: "Date", value: "date desc", directionLabel: "Z-A" },
      { label: "Total", value: "total asc", directionLabel: "Ascending" },
      { label: "Total", value: "total desc", directionLabel: "Descending" },
    ];

    // const { mode, setMode } = useSetIndexFiltersMode();
    // const [queryValue, setQueryValue] = useState("");
    const [selected, setSelected] = useState(0);
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

    const rowMarkup = sampleOrders.map((order, index) => (
      <IndexTable.Row
        id={order.id}
        key={order.id}
        selected={selectedResources.includes(order.id)}
        position={index}>
        <IndexTable.Cell>
          <Text variant="bodyMd" fontWeight="bold" as="span">
            {order.order}
          </Text>
        </IndexTable.Cell>
        <IndexTable.Cell>{order.date}</IndexTable.Cell>
        <IndexTable.Cell>{order.customer}</IndexTable.Cell>
        <IndexTable.Cell>
          <Text as="span" alignment="end">
            {order.total}
          </Text>
        </IndexTable.Cell>
        <IndexTable.Cell>
          <Badge
            progress={
              order.paymentStatus === "Paid" ? "complete" : "partiallyComplete"
            }>
            {order.paymentStatus}
          </Badge>
        </IndexTable.Cell>
        <IndexTable.Cell>
          <Badge progress="incomplete">{order.fulfillmentStatus}</Badge>
        </IndexTable.Cell>
      </IndexTable.Row>
    ));

    return (
      <>
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
            // setTabItems([...tabItems, name]);
            // setSelected(tabItems.length);
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
              selected: [],
              allowMultiple: true,
              onChange: (selected, key) => {
                console.log(`Filter ${key} changed:`, selected);
              },
            },
            {
              key: "category",
              label: "Category",
              choices: [
                { label: "Electronics", value: "electronics" },
                { label: "Clothing", value: "clothing" },
                { label: "Books", value: "books" },
              ],
              selected: [],
              allowMultiple: false,
              onChange: (selected, key) => {
                console.log(`Filter ${key} changed:`, selected);
              },
            },
          ]}
        />
        <IndexTable
          resourceName={resourceName}
          itemCount={sampleOrders.length}
          selectedItemsCount={
            allResourcesSelected ? "All" : selectedResources.length
          }
          onSelectionChange={handleSelectionChange}
          hasIndexFilters={true}
          headings={[
            { title: "Order" },
            { title: "Date" },
            { title: "Customer" },
            { title: "Total", alignment: "end" },
            { title: "Payment status" },
            { title: "Fulfillment status" },
          ]}>
          {rowMarkup}
        </IndexTable>
      </>
      // <Card>

      // </Card>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "IndexTable integrated with IndexFilters for search, filtering, and sorting functionality.",
      },
    },
  },
};

// Complete integration with IndexFilters and Pagination
export const CompleteIntegration: Story = {
  render: () => {
    const { mode, setMode } = useSetIndexFiltersMode();
    const [queryValue, setQueryValue] = useState("");
    const [sortSelected, setSortSelected] = useState(["order asc"]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 2;

    const resourceName = { singular: "order", plural: "orders" };
    const { selectedResources, allResourcesSelected, handleSelectionChange } =
      useIndexResourceState(sampleOrders);

    const sortOptions = [
      { label: "Order", value: "order asc", directionLabel: "Ascending" },
      { label: "Order", value: "order desc", directionLabel: "Descending" },
      { label: "Customer", value: "customer asc", directionLabel: "A-Z" },
      { label: "Customer", value: "customer desc", directionLabel: "Z-A" },
    ];

    // Simple pagination logic
    const totalPages = Math.ceil(sampleOrders.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentOrders = sampleOrders.slice(startIndex, endIndex);

    const rowMarkup = currentOrders.map((order, index) => (
      <IndexTable.Row
        id={order.id}
        key={order.id}
        selected={selectedResources.includes(order.id)}
        position={startIndex + index}>
        <IndexTable.Cell>
          <Text variant="bodyMd" fontWeight="bold" as="span">
            {order.order}
          </Text>
        </IndexTable.Cell>
        <IndexTable.Cell>{order.date}</IndexTable.Cell>
        <IndexTable.Cell>{order.customer}</IndexTable.Cell>
        <IndexTable.Cell>
          <Text as="span" alignment="end">
            {order.total}
          </Text>
        </IndexTable.Cell>
        <IndexTable.Cell>
          <Badge
            progress={
              order.paymentStatus === "Paid" ? "complete" : "partiallyComplete"
            }>
            {order.paymentStatus}
          </Badge>
        </IndexTable.Cell>
        <IndexTable.Cell>
          <Badge progress="incomplete">{order.fulfillmentStatus}</Badge>
        </IndexTable.Cell>
      </IndexTable.Row>
    ));

    return (
      <>
        <IndexFilters
          sortOptions={sortOptions}
          sortSelected={sortSelected}
          queryValue={queryValue}
          queryPlaceholder="Searching in all orders"
          onQueryChange={setQueryValue}
          onQueryClear={() => setQueryValue("")}
          onSort={setSortSelected}
          mode={mode}
          setMode={setMode}
        />
        <IndexTable
          resourceName={resourceName}
          itemCount={sampleOrders.length}
          selectedItemsCount={
            allResourcesSelected ? "All" : selectedResources.length
          }
          onSelectionChange={handleSelectionChange}
          hasIndexFilters={true}
          pagination={{
            hasPrevious: currentPage > 1,
            hasNext: currentPage < totalPages,
            onPrevious: () => setCurrentPage(prev => Math.max(1, prev - 1)),
            onNext: () =>
              setCurrentPage(prev => Math.min(totalPages, prev + 1)),
            label: `Page ${currentPage} of ${totalPages}`,
          }}
          headings={[
            { title: "Order" },
            { title: "Date" },
            { title: "Customer" },
            { title: "Total", alignment: "end" },
            { title: "Payment status" },
            { title: "Fulfillment status" },
          ]}>
          {rowMarkup}
        </IndexTable>
      </>
      // <Card>

      // </Card>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Complete integration showing IndexTable with IndexFilters and Pagination working together.",
      },
    },
  },
};

// With zebra striping
export const WithZebraStriping: Story = {
  args: {
    hasZebraStriping: true,
  },
  render: args => {
    const resourceName = { singular: "order", plural: "orders" };
    const { selectedResources, allResourcesSelected, handleSelectionChange } =
      useIndexResourceState(sampleOrders);

    const rowMarkup = sampleOrders.map((order, index) => (
      <IndexTable.Row
        id={order.id}
        key={order.id}
        selected={selectedResources.includes(order.id)}
        position={index}>
        <IndexTable.Cell>{order.order}</IndexTable.Cell>
        <IndexTable.Cell>{order.date}</IndexTable.Cell>
        <IndexTable.Cell>{order.customer}</IndexTable.Cell>
        <IndexTable.Cell>{order.total}</IndexTable.Cell>
      </IndexTable.Row>
    ));

    return (
      <Card>
        <IndexTable
          {...args}
          resourceName={resourceName}
          itemCount={sampleOrders.length}
          selectedItemsCount={
            allResourcesSelected ? "All" : selectedResources.length
          }
          onSelectionChange={handleSelectionChange}
          headings={[
            { title: "Order" },
            { title: "Date" },
            { title: "Customer" },
            { title: "Total" },
          ]}>
          {rowMarkup}
        </IndexTable>
      </Card>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "IndexTable with zebra striping for better visual separation of rows.",
      },
    },
  },
};

// Conditional styling demonstration
export const ConditionalStyling: Story = {
  render: () => {
    const resourceName = { singular: "order", plural: "orders" };
    const { selectedResources, allResourcesSelected, handleSelectionChange } =
      useIndexResourceState(sampleOrders);

    const rowMarkup = sampleOrders.slice(0, 3).map((order, index) => (
      <IndexTable.Row
        id={order.id}
        key={order.id}
        selected={selectedResources.includes(order.id)}
        position={index}>
        <IndexTable.Cell>{order.order}</IndexTable.Cell>
        <IndexTable.Cell>{order.date}</IndexTable.Cell>
        <IndexTable.Cell>{order.customer}</IndexTable.Cell>
        <IndexTable.Cell>
          <Text as="span" alignment="end">
            {order.total}
          </Text>
        </IndexTable.Cell>
        <IndexTable.Cell>
          <Badge tone={order.paymentStatus === "paid" ? "success" : "critical"}>
            {order.paymentStatus}
          </Badge>
        </IndexTable.Cell>
        <IndexTable.Cell>
          <Badge
            tone={
              order.fulfillmentStatus === "fulfilled" ? "success" : "warning"
            }>
            {order.fulfillmentStatus}
          </Badge>
        </IndexTable.Cell>
      </IndexTable.Row>
    ));

    return (
      <div className="space-y-8">
        <div>
          <Text as="h3" variant="headingMd">
            IndexTable with IndexFilters (rounded bottom corners only)
          </Text>
          <div className="mt-4">
            <IndexFilters
              queryValue=""
              queryPlaceholder="Search orders"
              onQueryChange={() => {}}
              onQueryClear={() => {}}
              mode={IndexFiltersMode.Default}
              setMode={() => {}}
            />
            <IndexTable
              resourceName={resourceName}
              itemCount={3}
              selectedItemsCount={
                allResourcesSelected ? "All" : selectedResources.length
              }
              onSelectionChange={handleSelectionChange}
              hasIndexFilters={true}
              headings={[
                { title: "Order" },
                { title: "Date" },
                { title: "Customer" },
                { title: "Total", alignment: "end" },
                { title: "Payment status" },
                { title: "Fulfillment status" },
              ]}>
              {rowMarkup}
            </IndexTable>
          </div>
        </div>

        <div>
          <Text as="h3" variant="headingMd">
            IndexTable without IndexFilters (rounded all corners)
          </Text>
          <div className="mt-4">
            <IndexTable
              resourceName={resourceName}
              itemCount={3}
              selectedItemsCount={
                allResourcesSelected ? "All" : selectedResources.length
              }
              onSelectionChange={handleSelectionChange}
              hasIndexFilters={false}
              headings={[
                { title: "Order" },
                { title: "Date" },
                { title: "Customer" },
                { title: "Total", alignment: "end" },
                { title: "Payment status" },
                { title: "Fulfillment status" },
              ]}>
              {rowMarkup}
            </IndexTable>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates the conditional styling of IndexTable based on whether IndexFilters is present above it. When hasIndexFilters=true, only the bottom corners are rounded. When hasIndexFilters=false, all corners are rounded.",
      },
    },
  },
};

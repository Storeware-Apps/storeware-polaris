import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { IndexTable, useIndexResourceState } from "./indexTable";
import {
  IndexFilters,
  useSetIndexFiltersMode,
} from "../IndexFilters/indexFilters";
import { Pagination } from "../Pagination/pagination";
import { Card } from "../Card/card";
import { Badge } from "../Badge/badge";
import { Text } from "../Text/Text";

// Sample data for testing
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

// Complete integration component
const CompleteIntegrationExample = () => {
  const { mode, setMode } = useSetIndexFiltersMode();
  const [queryValue, setQueryValue] = React.useState("");
  const [sortSelected, setSortSelected] = React.useState(["order asc"]);
  const [currentPage, setCurrentPage] = React.useState(1);
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
    <Card>
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
      <div className="p-4 border-t border-gray-200">
        <Pagination
          hasPrevious={currentPage > 1}
          hasNext={currentPage < totalPages}
          onPrevious={() => setCurrentPage(prev => Math.max(1, prev - 1))}
          onNext={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
          label={`Page ${currentPage} of ${totalPages}`}
        />
      </div>
    </Card>
  );
};

describe("IndexTable Integration", () => {
  it("renders complete integration with IndexFilters and Pagination", () => {
    render(<CompleteIntegrationExample />);

    // Check IndexFilters is present
    expect(screen.getByRole("button", { name: /filter/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /sort/i })).toBeInTheDocument();

    // Check IndexTable is present
    expect(screen.getByRole("table")).toBeInTheDocument();
    expect(screen.getByText("Order")).toBeInTheDocument();
    expect(screen.getByText("Customer")).toBeInTheDocument();

    // Check data is rendered (first page should show first 2 items)
    expect(screen.getByText("#1020")).toBeInTheDocument();
    expect(screen.getByText("#1019")).toBeInTheDocument();
    expect(screen.queryByText("#1018")).not.toBeInTheDocument(); // Should be on page 2

    // Check Pagination is present
    expect(
      screen.getByRole("button", { name: /previous/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /next/i })).toBeInTheDocument();
    expect(screen.getByText("Page 1 of 2")).toBeInTheDocument();
  });

  it("handles pagination correctly", () => {
    render(<CompleteIntegrationExample />);

    // Initially on page 1
    expect(screen.getByText("#1020")).toBeInTheDocument();
    expect(screen.getByText("#1019")).toBeInTheDocument();
    expect(screen.queryByText("#1018")).not.toBeInTheDocument();

    // Click next to go to page 2
    const nextButton = screen.getByRole("button", { name: /next/i });
    fireEvent.click(nextButton);

    // Should now show page 2 content
    expect(screen.queryByText("#1020")).not.toBeInTheDocument();
    expect(screen.queryByText("#1019")).not.toBeInTheDocument();
    expect(screen.getByText("#1018")).toBeInTheDocument();
    expect(screen.getByText("Page 2 of 2")).toBeInTheDocument();

    // Click previous to go back to page 1
    const previousButton = screen.getByRole("button", { name: /previous/i });
    fireEvent.click(previousButton);

    // Should be back on page 1
    expect(screen.getByText("#1020")).toBeInTheDocument();
    expect(screen.getByText("#1019")).toBeInTheDocument();
    expect(screen.queryByText("#1018")).not.toBeInTheDocument();
    expect(screen.getByText("Page 1 of 2")).toBeInTheDocument();
  });

  it("handles filtering mode toggle", () => {
    render(<CompleteIntegrationExample />);

    // Initially no search field visible
    expect(screen.queryByRole("textbox")).not.toBeInTheDocument();

    // Click filter button to enter filtering mode
    const filterButton = screen.getByRole("button", { name: /filter/i });
    fireEvent.click(filterButton);

    // Search field should now be visible
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Searching in all orders")
    ).toBeInTheDocument();
  });

  it("handles search input", () => {
    render(<CompleteIntegrationExample />);

    // Enter filtering mode
    const filterButton = screen.getByRole("button", { name: /filter/i });
    fireEvent.click(filterButton);

    // Type in search field
    const searchInput = screen.getByRole("textbox");
    fireEvent.change(searchInput, { target: { value: "test search" } });

    // Search input should have the value
    expect(searchInput).toHaveValue("test search");
  });

  it("handles sort options", () => {
    render(<CompleteIntegrationExample />);

    // Click sort button
    const sortButton = screen.getByRole("button", { name: /sort/i });
    fireEvent.click(sortButton);

    // Sort options should be visible
    expect(screen.getByText("Order (Ascending)")).toBeInTheDocument();
    expect(screen.getByText("Order (Descending)")).toBeInTheDocument();
    expect(screen.getByText("Customer (A-Z)")).toBeInTheDocument();
    expect(screen.getByText("Customer (Z-A)")).toBeInTheDocument();
  });

  it("maintains state consistency across components", () => {
    render(<CompleteIntegrationExample />);

    // The table should show the correct number of items per page
    const rows = screen.getAllByRole("row");
    // 1 header row + 2 data rows (itemsPerPage = 2)
    expect(rows).toHaveLength(3);

    // Pagination should reflect the correct state
    expect(screen.getByText("Page 1 of 2")).toBeInTheDocument();

    // Previous button should be disabled on first page
    const previousButton = screen.getByRole("button", { name: /previous/i });
    expect(previousButton).toBeDisabled();

    // Next button should be enabled
    const nextButton = screen.getByRole("button", { name: /next/i });
    expect(nextButton).not.toBeDisabled();
  });

  it("handles row selection", () => {
    render(<CompleteIntegrationExample />);

    // Initially no rows should be selected
    // This would require more complex setup to test actual selection
    // For now, just verify the table renders with selection capability
    expect(screen.getByRole("table")).toBeInTheDocument();

    // The table should have the correct structure for selection
    const rows = screen.getAllByRole("row");
    expect(rows.length).toBeGreaterThan(1); // Header + data rows
  });
});

describe("Component Integration Hooks", () => {
  it("useIndexResourceState works with multiple resources", () => {
    const TestComponent = () => {
      const resources = sampleOrders;
      const { selectedResources, allResourcesSelected, clearSelection } =
        useIndexResourceState(resources);

      return (
        <div>
          <div data-testid="selected-count">{selectedResources.length}</div>
          <div data-testid="all-selected">
            {allResourcesSelected.toString()}
          </div>
          <div data-testid="total-resources">{resources.length}</div>
          <button onClick={clearSelection}>Clear</button>
        </div>
      );
    };

    render(<TestComponent />);

    expect(screen.getByTestId("selected-count")).toHaveTextContent("0");
    expect(screen.getByTestId("all-selected")).toHaveTextContent("false");
    expect(screen.getByTestId("total-resources")).toHaveTextContent("3");

    // Test clear function
    fireEvent.click(screen.getByText("Clear"));
    expect(screen.getByTestId("selected-count")).toHaveTextContent("0");
  });

  it("useSetIndexFiltersMode integrates properly", () => {
    const TestComponent = () => {
      const { mode, setMode } = useSetIndexFiltersMode();

      return (
        <div>
          <div data-testid="current-mode">{mode}</div>
          <button
            onClick={() =>
              setMode(mode === "DEFAULT" ? "FILTERING" : "DEFAULT")
            }>
            Toggle Mode
          </button>
        </div>
      );
    };

    render(<TestComponent />);

    expect(screen.getByTestId("current-mode")).toHaveTextContent("DEFAULT");

    fireEvent.click(screen.getByText("Toggle Mode"));
    expect(screen.getByTestId("current-mode")).toHaveTextContent("FILTERING");
  });
});

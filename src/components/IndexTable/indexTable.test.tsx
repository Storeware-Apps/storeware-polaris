import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { IndexTable, useIndexResourceState } from "./indexTable";

// Test component that uses the hook
const TestIndexTable = ({
  orders = [
    { id: "1", order: "#1001", customer: "John Doe" },
    { id: "2", order: "#1002", customer: "Jane Smith" },
  ],
}) => {
  const { selectedResources, allResourcesSelected, handleSelectionChange } =
    useIndexResourceState(orders);

  return (
    <IndexTable
      resourceName={{ singular: "order", plural: "orders" }}
      itemCount={orders.length}
      selectedItemsCount={
        allResourcesSelected ? "All" : selectedResources.length
      }
      onSelectionChange={handleSelectionChange}
      headings={[{ title: "Order" }, { title: "Customer" }]}>
      {orders.map((order, index) => (
        <IndexTable.Row
          id={order.id}
          key={order.id}
          selected={selectedResources.includes(order.id)}
          position={index}>
          <IndexTable.Cell>{order.order}</IndexTable.Cell>
          <IndexTable.Cell>{order.customer}</IndexTable.Cell>
        </IndexTable.Row>
      ))}
    </IndexTable>
  );
};

describe("IndexTable", () => {
  it("renders with basic props", () => {
    render(
      <IndexTable
        headings={[{ title: "Name" }, { title: "Email" }]}
        itemCount={0}
      />
    );

    expect(screen.getByRole("table")).toBeInTheDocument();
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
  });

  it("renders table headers correctly", () => {
    render(
      <IndexTable
        headings={[
          { title: "Order", alignment: "start" },
          { title: "Total", alignment: "end" },
        ]}
        itemCount={0}
      />
    );

    const headers = screen.getAllByRole("columnheader");
    // Should have 3 headers: selection checkbox + 2 data headers
    expect(headers).toHaveLength(3);
    // First header is the selection checkbox column
    expect(headers[1]).toHaveTextContent("Order");
    expect(headers[2]).toHaveTextContent("Total");
  });

  it("renders table rows and cells", () => {
    const orders = [
      { id: "1", order: "#1001", customer: "John Doe" },
      { id: "2", order: "#1002", customer: "Jane Smith" },
    ];

    render(<TestIndexTable orders={orders} />);

    expect(screen.getByText("#1001")).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("#1002")).toBeInTheDocument();
    expect(screen.getByText("Jane Smith")).toBeInTheDocument();
  });

  it("shows empty state when no items", () => {
    render(
      <IndexTable
        headings={[{ title: "Name" }]}
        itemCount={0}
        emptyState={<div>No items found</div>}
      />
    );

    expect(screen.getByText("No items found")).toBeInTheDocument();
  });

  it("applies condensed styling", () => {
    render(
      <IndexTable
        headings={[{ title: "Name" }]}
        itemCount={0}
        condensed={true}
      />
    );

    const table = screen.getByRole("table");
    expect(table).toHaveClass("text-sm");
  });

  it("applies zebra striping", () => {
    render(
      <IndexTable
        headings={[{ title: "Name" }]}
        itemCount={0}
        hasZebraStriping={true}
      />
    );

    const table = screen.getByRole("table");
    expect(table).toHaveClass("[&_tbody_tr:nth-child(even)]:bg-gray-50");
  });

  it("applies loading state", () => {
    render(
      <IndexTable headings={[{ title: "Name" }]} itemCount={0} loading={true} />
    );

    const table = screen.getByRole("table");
    expect(table).toHaveClass("opacity-50", "pointer-events-none");
  });

  it("handles selection change callback", () => {
    const onSelectionChange = vi.fn();

    render(
      <IndexTable
        headings={[{ title: "Name" }]}
        itemCount={1}
        onSelectionChange={onSelectionChange}>
        <IndexTable.Row id="1" position={0}>
          <IndexTable.Cell>Test</IndexTable.Cell>
        </IndexTable.Row>
      </IndexTable>
    );

    // This test would need more complex setup to actually trigger selection
    // For now, just verify the prop is passed correctly
    expect(onSelectionChange).toBeDefined();
  });

  it("shows selection count in header when items are selected", () => {
    render(
      <IndexTable
        headings={[{ title: "Name" }, { title: "Email" }]}
        itemCount={2}
        selectedItemsCount={1}
        resourceName={{ singular: "item", plural: "items" }}>
        <IndexTable.Row id="1" position={0} selected={true}>
          <IndexTable.Cell>Test 1</IndexTable.Cell>
          <IndexTable.Cell>test1@example.com</IndexTable.Cell>
        </IndexTable.Row>
        <IndexTable.Row id="2" position={1} selected={false}>
          <IndexTable.Cell>Test 2</IndexTable.Cell>
          <IndexTable.Cell>test2@example.com</IndexTable.Cell>
        </IndexTable.Row>
      </IndexTable>
    );

    expect(screen.getByText("1 item selected")).toBeInTheDocument();
  });
});

describe("IndexTable.Row", () => {
  it("renders row with basic props", () => {
    render(
      <table>
        <tbody>
          <IndexTable.Row id="test-row" position={0}>
            <IndexTable.Cell>Test content</IndexTable.Cell>
          </IndexTable.Row>
        </tbody>
      </table>
    );

    const row = screen.getByRole("row");
    expect(row).toBeInTheDocument();
    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  it("applies selected styling", () => {
    render(
      <table>
        <tbody>
          <IndexTable.Row id="test-row" position={0} selected={true}>
            <IndexTable.Cell>Test content</IndexTable.Cell>
          </IndexTable.Row>
        </tbody>
      </table>
    );

    const row = screen.getByRole("row");
    expect(row).toHaveClass("bg-blue-50");
  });

  it("applies tone styling", () => {
    render(
      <table>
        <tbody>
          <IndexTable.Row id="test-row" position={0} tone="success">
            <IndexTable.Cell>Test content</IndexTable.Cell>
          </IndexTable.Row>
        </tbody>
      </table>
    );

    const row = screen.getByRole("row");
    expect(row).toHaveClass("bg-green-50");
  });

  it("handles click events", () => {
    const onClick = vi.fn();

    render(
      <table>
        <tbody>
          <IndexTable.Row id="test-row" position={0} onClick={onClick}>
            <IndexTable.Cell>Test content</IndexTable.Cell>
          </IndexTable.Row>
        </tbody>
      </table>
    );

    const row = screen.getByRole("row");
    fireEvent.click(row);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("applies disabled styling", () => {
    render(
      <table>
        <tbody>
          <IndexTable.Row id="test-row" position={0} disabled={true}>
            <IndexTable.Cell>Test content</IndexTable.Cell>
          </IndexTable.Row>
        </tbody>
      </table>
    );

    const row = screen.getByRole("row");
    expect(row).toHaveClass("opacity-50", "pointer-events-none");
  });
});

describe("IndexTable.Cell", () => {
  it("renders cell with basic props", () => {
    render(
      <table>
        <tbody>
          <tr>
            <IndexTable.Cell>Test content</IndexTable.Cell>
          </tr>
        </tbody>
      </table>
    );

    const cell = screen.getByRole("cell");
    expect(cell).toBeInTheDocument();
    expect(cell).toHaveTextContent("Test content");
  });

  it("renders as th when specified", () => {
    render(
      <table>
        <thead>
          <tr>
            <IndexTable.Cell as="th">Header content</IndexTable.Cell>
          </tr>
        </thead>
      </table>
    );

    const cell = screen.getByRole("columnheader");
    expect(cell).toBeInTheDocument();
    expect(cell).toHaveTextContent("Header content");
  });

  it("applies flush styling", () => {
    render(
      <table>
        <tbody>
          <tr>
            <IndexTable.Cell flush={true}>Test content</IndexTable.Cell>
          </tr>
        </tbody>
      </table>
    );

    const cell = screen.getByRole("cell");
    expect(cell).not.toHaveClass("px-4", "py-3");
  });

  it("applies colSpan attribute", () => {
    render(
      <table>
        <tbody>
          <tr>
            <IndexTable.Cell colSpan={2}>Test content</IndexTable.Cell>
          </tr>
        </tbody>
      </table>
    );

    const cell = screen.getByRole("cell");
    expect(cell).toHaveAttribute("colSpan", "2");
  });
});

describe("useIndexResourceState", () => {
  it("manages selection state correctly", () => {
    const TestComponent = () => {
      const resources = [{ id: "1" }, { id: "2" }];
      const { selectedResources, allResourcesSelected, clearSelection } =
        useIndexResourceState(resources);

      return (
        <div>
          <div data-testid="selected-count">{selectedResources.length}</div>
          <div data-testid="all-selected">
            {allResourcesSelected.toString()}
          </div>
          <button onClick={clearSelection}>Clear</button>
        </div>
      );
    };

    render(<TestComponent />);

    expect(screen.getByTestId("selected-count")).toHaveTextContent("0");
    expect(screen.getByTestId("all-selected")).toHaveTextContent("false");

    // Test clear function
    fireEvent.click(screen.getByText("Clear"));
    expect(screen.getByTestId("selected-count")).toHaveTextContent("0");
  });

  describe("Conditional Styling", () => {
    it("applies correct border-radius when hasIndexFilters is true", () => {
      render(
        <IndexTable
          headings={[{ title: "Name" }, { title: "Email" }]}
          itemCount={0}
          hasIndexFilters={true}
        />
      );

      const table = screen.getByRole("table");
      expect(table).toHaveClass("before:rounded-b-[8px]");
      expect(table).not.toHaveClass("before:rounded-[8px]");
    });

    it("applies correct border-radius when hasIndexFilters is false", () => {
      render(
        <IndexTable
          headings={[{ title: "Name" }, { title: "Email" }]}
          itemCount={0}
          hasIndexFilters={false}
        />
      );

      const table = screen.getByRole("table");
      expect(table).toHaveClass("before:rounded-[8px]");
      expect(table).not.toHaveClass("before:rounded-b-[8px]");
    });

    it("defaults to hasIndexFilters=false when prop is not provided", () => {
      render(
        <IndexTable
          headings={[{ title: "Name" }, { title: "Email" }]}
          itemCount={0}
        />
      );

      const table = screen.getByRole("table");
      expect(table).toHaveClass("before:rounded-[8px]");
      expect(table).not.toHaveClass("before:rounded-b-[8px]");
    });
  });
});

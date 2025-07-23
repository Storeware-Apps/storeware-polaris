import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import {
  IndexFilters,
  useSetIndexFiltersMode,
  IndexFiltersMode,
} from "./indexFilters";

// Test component that uses the hook
const TestIndexFilters = ({
  initialMode = IndexFiltersMode.Default,
  ...props
}) => {
  const { mode, setMode } = useSetIndexFiltersMode();

  // Override initial mode for testing
  React.useEffect(() => {
    setMode(initialMode);
  }, [initialMode, setMode]);

  return (
    <IndexFilters
      mode={mode}
      setMode={setMode}
      queryValue=""
      onQueryChange={() => {}}
      onQueryClear={() => {}}
      {...props}
    />
  );
};

describe("IndexFilters", () => {
  it("renders with basic props", () => {
    const setMode = vi.fn();

    render(
      <IndexFilters
        mode={IndexFiltersMode.Default}
        setMode={setMode}
        queryValue=""
        onQueryChange={() => {}}
        onQueryClear={() => {}}
      />
    );

    expect(screen.getByRole("button", { name: /filter/i })).toBeInTheDocument();
  });

  it("renders sort button when sort options are provided", () => {
    const setMode = vi.fn();
    const sortOptions = [
      { label: "Name", value: "name_asc", directionLabel: "A-Z" },
      { label: "Date", value: "date_desc", directionLabel: "Newest first" },
    ];

    render(
      <IndexFilters
        mode={IndexFiltersMode.Default}
        setMode={setMode}
        queryValue=""
        onQueryChange={() => {}}
        onQueryClear={() => {}}
        sortOptions={sortOptions}
      />
    );

    expect(screen.getByRole("button", { name: /sort/i })).toBeInTheDocument();
  });

  it("renders tabs when provided", () => {
    const setMode = vi.fn();
    const tabs = [
      { content: "All", index: 0, onAction: () => {}, id: "all-0" },
      { content: "Active", index: 1, onAction: () => {}, id: "active-1" },
    ];

    render(
      <IndexFilters
        mode={IndexFiltersMode.Default}
        setMode={setMode}
        queryValue=""
        onQueryChange={() => {}}
        onQueryClear={() => {}}
        tabs={tabs}
        selected={0}
      />
    );

    expect(screen.getByText("All")).toBeInTheDocument();
    expect(screen.getByText("Active")).toBeInTheDocument();
  });

  it("toggles filtering mode when filter button is clicked", () => {
    const setMode = vi.fn();

    render(
      <IndexFilters
        mode={IndexFiltersMode.Default}
        setMode={setMode}
        queryValue=""
        onQueryChange={() => {}}
        onQueryClear={() => {}}
      />
    );

    const filterButton = screen.getByRole("button", { name: /filter/i });
    fireEvent.click(filterButton);

    expect(setMode).toHaveBeenCalledWith(IndexFiltersMode.Filtering);
  });

  it("shows search field in filtering mode", () => {
    const setMode = vi.fn();

    render(
      <IndexFilters
        mode={IndexFiltersMode.Filtering}
        setMode={setMode}
        queryValue=""
        onQueryChange={() => {}}
        onQueryClear={() => {}}
      />
    );

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("calls onQueryChange when search input changes", () => {
    const setMode = vi.fn();
    const onQueryChange = vi.fn();

    render(
      <IndexFilters
        mode={IndexFiltersMode.Filtering}
        setMode={setMode}
        queryValue=""
        onQueryChange={onQueryChange}
        onQueryClear={() => {}}
      />
    );

    const searchInput = screen.getByRole("textbox");
    fireEvent.change(searchInput, { target: { value: "test query" } });

    expect(onQueryChange).toHaveBeenCalledWith("test query");
  });

  it("renders applied filters", () => {
    const setMode = vi.fn();
    const appliedFilters = [
      {
        key: "status",
        label: "Status: Active",
        onRemove: vi.fn(),
      },
      {
        key: "location",
        label: "Location: New York",
        onRemove: vi.fn(),
      },
    ];

    render(
      <IndexFilters
        mode={IndexFiltersMode.Filtering}
        setMode={setMode}
        queryValue=""
        onQueryChange={() => {}}
        onQueryClear={() => {}}
        appliedFilters={appliedFilters}
      />
    );

    expect(screen.getByText("Status: Active")).toBeInTheDocument();
    expect(screen.getByText("Location: New York")).toBeInTheDocument();
  });

  it("calls onRemove when filter badge is removed", () => {
    const setMode = vi.fn();
    const onRemove = vi.fn();
    const appliedFilters = [
      {
        key: "status",
        label: "Status: Active",
        onRemove,
      },
    ];

    render(
      <IndexFilters
        mode={IndexFiltersMode.Filtering}
        setMode={setMode}
        queryValue=""
        onQueryChange={() => {}}
        onQueryClear={() => {}}
        appliedFilters={appliedFilters}
      />
    );

    // Find and click the remove button (X icon)
    const removeButtons = screen.getAllByRole("button");
    const removeButton = removeButtons.find(
      button => button.querySelector("svg") // Looking for the X icon
    );

    if (removeButton) {
      fireEvent.click(removeButton);
      expect(onRemove).toHaveBeenCalledTimes(1);
    }
  });

  it("shows clear all button when applied filters exist", () => {
    const setMode = vi.fn();
    const onClearAll = vi.fn();
    const appliedFilters = [
      {
        key: "status",
        label: "Status: Active",
        onRemove: vi.fn(),
      },
    ];

    render(
      <IndexFilters
        mode={IndexFiltersMode.Filtering}
        setMode={setMode}
        queryValue=""
        onQueryChange={() => {}}
        onQueryClear={() => {}}
        appliedFilters={appliedFilters}
        onClearAll={onClearAll}
      />
    );

    const clearAllButton = screen.getByRole("button", { name: /clear all/i });
    fireEvent.click(clearAllButton);

    expect(onClearAll).toHaveBeenCalledTimes(1);
  });

  it("applies disabled state", () => {
    const setMode = vi.fn();

    render(
      <IndexFilters
        mode={IndexFiltersMode.Default}
        setMode={setMode}
        queryValue=""
        onQueryChange={() => {}}
        onQueryClear={() => {}}
        disabled={true}
      />
    );

    const filterButton = screen.getByRole("button", { name: /filter/i });
    expect(filterButton).toBeDisabled();
  });

  it("shows edit columns button when enabled", () => {
    const setMode = vi.fn();

    render(
      <IndexFilters
        mode={IndexFiltersMode.Default}
        setMode={setMode}
        queryValue=""
        onQueryChange={() => {}}
        onQueryClear={() => {}}
        showEditColumnsButton={true}
      />
    );

    expect(
      screen.getByRole("button", { name: /edit columns/i })
    ).toBeInTheDocument();
  });

  it("handles tab selection", () => {
    const setMode = vi.fn();
    const onSelect = vi.fn();
    const tabs = [
      { content: "All", index: 0, onAction: () => {}, id: "all-0" },
      { content: "Active", index: 1, onAction: () => {}, id: "active-1" },
    ];

    render(
      <IndexFilters
        mode={IndexFiltersMode.Default}
        setMode={setMode}
        queryValue=""
        onQueryChange={() => {}}
        onQueryClear={() => {}}
        tabs={tabs}
        selected={0}
        onSelect={onSelect}
      />
    );

    const activeTab = screen.getByText("Active");
    fireEvent.click(activeTab);

    expect(onSelect).toHaveBeenCalledWith(1);
  });

  it("applies custom accessibility label", () => {
    const setMode = vi.fn();

    render(
      <IndexFilters
        mode={IndexFiltersMode.Default}
        setMode={setMode}
        queryValue=""
        onQueryChange={() => {}}
        onQueryClear={() => {}}
        filteringAccessibilityLabel="Custom filter label"
      />
    );

    const filterButton = screen.getByRole("button", {
      name: "Custom filter label",
    });
    expect(filterButton).toBeInTheDocument();
  });

  it("applies custom query placeholder", () => {
    const setMode = vi.fn();

    render(
      <IndexFilters
        mode={IndexFiltersMode.Filtering}
        setMode={setMode}
        queryValue=""
        onQueryChange={() => {}}
        onQueryClear={() => {}}
        queryPlaceholder="Search custom items"
      />
    );

    const searchInput = screen.getByPlaceholderText("Search custom items");
    expect(searchInput).toBeInTheDocument();
  });
});

describe("useSetIndexFiltersMode", () => {
  it("manages mode state correctly", () => {
    const TestComponent = () => {
      const { mode, setMode } = useSetIndexFiltersMode();

      return (
        <div>
          <div data-testid="current-mode">{mode}</div>
          <button onClick={() => setMode(IndexFiltersMode.Filtering)}>
            Set Filtering
          </button>
          <button onClick={() => setMode(IndexFiltersMode.Default)}>
            Set Default
          </button>
        </div>
      );
    };

    render(<TestComponent />);

    expect(screen.getByTestId("current-mode")).toHaveTextContent(
      IndexFiltersMode.Default
    );

    fireEvent.click(screen.getByText("Set Filtering"));
    expect(screen.getByTestId("current-mode")).toHaveTextContent(
      IndexFiltersMode.Filtering
    );

    fireEvent.click(screen.getByText("Set Default"));
    expect(screen.getByTestId("current-mode")).toHaveTextContent(
      IndexFiltersMode.Default
    );
  });
});

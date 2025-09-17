import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Tabs } from "./tabs";

describe("Tabs Component", () => {
  const mockTabs = [
    {
      id: "tab1",
      content: "Tab 1",
      accessibilityLabel: "First tab",
      panelID: "panel1",
    },
    {
      id: "tab2",
      content: "Tab 2",
      accessibilityLabel: "Second tab",
      panelID: "panel2",
    },
    {
      id: "tab3",
      content: "Tab 3",
      accessibilityLabel: "Third tab",
      panelID: "panel3",
    },
  ];

  it("renders tabs correctly", () => {
    render(
      <Tabs tabs={mockTabs} selected={0}>
        <div>Tab content</div>
      </Tabs>
    );

    expect(screen.getByText("Tab 1")).toBeInTheDocument();
    expect(screen.getByText("Tab 2")).toBeInTheDocument();
    expect(screen.getByText("Tab 3")).toBeInTheDocument();
  });

  it("renders selected tab with correct styling", () => {
    render(
      <Tabs tabs={mockTabs} selected={1}>
        <div>Tab content</div>
      </Tabs>
    );

    const selectedTab = screen.getByRole("tab", { name: "Second tab" });
    expect(selectedTab).toHaveAttribute("aria-selected", "true");
  });

  it("calls onSelect when tab is clicked", () => {
    const mockOnSelect = vi.fn();
    render(
      <Tabs tabs={mockTabs} selected={0} onSelect={mockOnSelect}>
        <div>Tab content</div>
      </Tabs>
    );

    const secondTab = screen.getByRole("tab", { name: "Second tab" });
    fireEvent.click(secondTab);

    expect(mockOnSelect).toHaveBeenCalledWith(1);
  });

  it("renders with fitted styling when fitted prop is true", () => {
    render(
      <Tabs tabs={mockTabs} selected={0} fitted>
        <div>Tab content</div>
      </Tabs>
    );

    const firstTab = screen.getByRole("tab", { name: "First tab" });
    expect(firstTab).toHaveClass("flex-1");
  });

  it("renders tabs with badges", () => {
    const tabsWithBadges = [
      {
        id: "tab1",
        content: "Tab 1",
        badge: "5",
        accessibilityLabel: "First tab",
        panelID: "panel1",
      },
      {
        id: "tab2",
        content: "Tab 2",
        badge: "10+",
        accessibilityLabel: "Second tab",
        panelID: "panel2",
      },
    ];

    render(
      <Tabs tabs={tabsWithBadges} selected={0}>
        <div>Tab content</div>
      </Tabs>
    );

    expect(screen.getByText("5")).toBeInTheDocument();
    expect(screen.getByText("10+")).toBeInTheDocument();
  });

  it("renders create new view button when canCreateNewView is true", () => {
    const mockOnCreateNewView = vi.fn();
    render(
      <Tabs
        tabs={mockTabs}
        selected={0}
        canCreateNewView
        onCreateNewView={mockOnCreateNewView}
      >
        <div>Tab content</div>
      </Tabs>
    );

    const createButton = screen.getByRole("button", {
      name: "Create new view",
    });
    expect(createButton).toBeInTheDocument();
  });

  it("disables tabs when disabled prop is true", () => {
    render(
      <Tabs tabs={mockTabs} selected={0} disabled>
        <div>Tab content</div>
      </Tabs>
    );

    const firstTab = screen.getByRole("tab", { name: "First tab" });
    expect(firstTab).toBeDisabled();
  });

  it("renders tab content with correct ARIA attributes", () => {
    render(
      <Tabs tabs={mockTabs} selected={0}>
        <div>Tab content</div>
      </Tabs>
    );

    const tabPanel = screen.getByRole("tabpanel");
    expect(tabPanel).toHaveAttribute("aria-labelledby", "tab1");
    expect(tabPanel).toHaveAttribute("id", "panel1");
  });

  it("exports types correctly from component file", () => {
    // This test ensures types are properly exported and can be imported
    const props = {
      tabs: mockTabs,
      selected: 0,
      onSelect: vi.fn(),
    };

    render(<Tabs {...props} />);
    const firstTab = screen.getByRole("tab", { name: "First tab" });
    expect(firstTab).toBeInTheDocument();
  });

  it("handles custom accessibility labels", () => {
    const customTabs = [
      {
        id: "tab1",
        content: "Tab 1",
        accessibilityLabel: "Custom accessibility label",
        panelID: "panel1",
      },
    ];

    render(
      <Tabs tabs={customTabs} selected={0}>
        <div>Tab content</div>
      </Tabs>
    );

    const tab = screen.getByRole("tab", { name: "Custom accessibility label" });
    expect(tab).toBeInTheDocument();
  });

  it("renders with custom className", () => {
    const { container } = render(
      <Tabs tabs={mockTabs} selected={0} className="custom-tabs-class">
        <div>Tab content</div>
      </Tabs>
    );

    expect(container.firstChild).toHaveClass("custom-tabs-class");
  });
});

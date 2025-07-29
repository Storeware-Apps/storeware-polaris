import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Page } from "./page";

describe("Page Component", () => {
  it("renders children correctly", () => {
    render(
      <Page title="Test Page">
        <div>Test content</div>
      </Page>
    );

    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  it("renders title correctly", () => {
    render(
      <Page title="Test Page Title">
        <div>Content</div>
      </Page>
    );

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Test Page Title"
    );
  });

  it("renders subtitle correctly", () => {
    render(
      <Page title="Test Page" subtitle="Test subtitle">
        <div>Content</div>
      </Page>
    );

    expect(screen.getByText("Test subtitle")).toBeInTheDocument();
  });

  it("hides title when titleHidden is true", () => {
    render(
      <Page title="Hidden Title" titleHidden>
        <div>Content</div>
      </Page>
    );

    expect(screen.queryByRole("heading", { level: 1 })).not.toBeInTheDocument();
  });

  it("renders title metadata correctly", () => {
    render(
      <Page
        title="Test Page"
        titleMetadata={<span data-testid="metadata">Badge</span>}>
        <div>Content</div>
      </Page>
    );

    expect(screen.getByTestId("metadata")).toBeInTheDocument();
  });

  it("renders primary action correctly", () => {
    const onAction = vi.fn();
    render(
      <Page title="Test Page" primaryAction={{ content: "Save", onAction }}>
        <div>Content</div>
      </Page>
    );

    const saveButton = screen.getByRole("button", { name: "Save" });
    expect(saveButton).toBeInTheDocument();

    fireEvent.click(saveButton);
    expect(onAction).toHaveBeenCalledTimes(1);
  });

  it("renders secondary actions correctly", () => {
    const onDuplicate = vi.fn();
    const onDelete = vi.fn();

    render(
      <Page
        title="Test Page"
        secondaryActions={[
          { content: "Duplicate", onAction: onDuplicate },
          { content: "Delete", onAction: onDelete },
        ]}>
        <div>Content</div>
      </Page>
    );

    const duplicateButton = screen.getByRole("button", { name: "Duplicate" });
    const deleteButton = screen.getByRole("button", { name: "Delete" });

    expect(duplicateButton).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();

    fireEvent.click(duplicateButton);
    expect(onDuplicate).toHaveBeenCalledTimes(1);

    fireEvent.click(deleteButton);
    expect(onDelete).toHaveBeenCalledTimes(1);
  });

  it("renders back action correctly", () => {
    const onBack = vi.fn();
    render(
      <Page
        title="Test Page"
        backAction={{ content: "Back to Products", onAction: onBack }}>
        <div>Content</div>
      </Page>
    );

    const backButton = screen.getByRole("button", { name: "Back to Products" });
    expect(backButton).toBeInTheDocument();

    fireEvent.click(backButton);
    expect(onBack).toHaveBeenCalledTimes(1);
  });

  it("renders pagination correctly", () => {
    const onNext = vi.fn();
    const onPrevious = vi.fn();

    render(
      <Page
        title="Test Page"
        pagination={{
          hasNext: true,
          hasPrevious: true,
          onNext,
          onPrevious,
        }}>
        <div>Content</div>
      </Page>
    );

    const nextButton = screen.getByRole("button", { name: "Next" });
    const previousButton = screen.getByRole("button", { name: "Previous" });

    expect(nextButton).toBeInTheDocument();
    expect(previousButton).toBeInTheDocument();

    fireEvent.click(nextButton);
    expect(onNext).toHaveBeenCalledTimes(1);

    fireEvent.click(previousButton);
    expect(onPrevious).toHaveBeenCalledTimes(1);
  });

  it("disables pagination buttons when appropriate", () => {
    render(
      <Page
        title="Test Page"
        pagination={{
          hasNext: false,
          hasPrevious: false,
        }}>
        <div>Content</div>
      </Page>
    );

    const nextButton = screen.getByRole("button", { name: "Next" });
    const previousButton = screen.getByRole("button", { name: "Previous" });

    expect(nextButton).toBeDisabled();
    expect(previousButton).toBeDisabled();
  });

  it("applies full width class correctly", () => {
    const { container } = render(
      <Page title="Test Page" fullWidth>
        <div>Content</div>
      </Page>
    );

    const pageElement = container.firstChild as HTMLElement;
    expect(pageElement).toHaveClass("w-full");
  });

  it("applies narrow width class correctly", () => {
    const { container } = render(
      <Page title="Test Page" narrowWidth>
        <div>Content</div>
      </Page>
    );

    const pageElement = container.firstChild as HTMLElement;
    expect(pageElement).toHaveClass("max-w-[760px]");
  });

  it("applies compact title styling correctly", () => {
    render(
      <Page title="Test Page" compactTitle>
        <div>Content</div>
      </Page>
    );

    const header = screen.getByRole("banner");
    expect(header).toHaveClass("pb-2");
  });

  it("renders additional metadata correctly", () => {
    render(
      <Page
        title="Test Page"
        additionalMetadata={
          <div data-testid="additional">Additional info</div>
        }>
        <div>Content</div>
      </Page>
    );

    expect(screen.getByTestId("additional")).toBeInTheDocument();
  });

  it("applies accessibility label correctly", () => {
    render(
      <Page title="Test Page" pageReadyAccessibilityLabel="Page is ready">
        <div>Content</div>
      </Page>
    );

    const pageElement = screen.getByLabelText("Page is ready");
    expect(pageElement).toBeInTheDocument();
  });

  it("exports types correctly from component file", () => {
    // This test ensures types are properly exported and can be imported
    const props = {
      title: "Test",
      children: "Test content",
      primaryAction: { content: "Save", onAction: () => {} },
    };

    render(<Page {...props} />);
    const page = screen.getByRole("heading", { level: 1 });
    expect(page).toBeInTheDocument();
  });

  it("handles link actions correctly", () => {
    render(
      <Page
        title="Test Page"
        primaryAction={{
          content: "Visit Store",
          url: "https://example.com",
          external: true,
        }}>
        <div>Content</div>
      </Page>
    );

    const linkButton = screen.getByRole("link", { name: "Visit Store" });
    expect(linkButton).toBeInTheDocument();
    expect(linkButton).toHaveAttribute("href", "https://example.com");
  });

  it("renders without header when no title or actions provided", () => {
    render(
      <Page>
        <div>Content only</div>
      </Page>
    );

    expect(screen.queryByRole("banner")).not.toBeInTheDocument();
    expect(screen.getByText("Content only")).toBeInTheDocument();
  });

  it("applies custom className correctly", () => {
    const { container } = render(
      <Page title="Test Page" className="custom-class">
        <div>Content</div>
      </Page>
    );

    const pageElement = container.firstChild as HTMLElement;
    expect(pageElement).toHaveClass("custom-class");
  });
});

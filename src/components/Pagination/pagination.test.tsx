import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Pagination } from "./pagination";

describe("Pagination", () => {
  it("renders with default props", () => {
    render(<Pagination />);
    
    const nav = screen.getByRole("navigation");
    expect(nav).toBeInTheDocument();
    expect(nav).toHaveAttribute("aria-label", "Pagination");
  });

  it("renders previous and next buttons", () => {
    render(
      <Pagination
        hasPrevious={true}
        hasNext={true}
        onPrevious={vi.fn()}
        onNext={vi.fn()}
      />
    );

    expect(screen.getByRole("button", { name: /previous/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /next/i })).toBeInTheDocument();
  });

  it("disables previous button when hasPrevious is false", () => {
    render(
      <Pagination
        hasPrevious={false}
        hasNext={true}
        onPrevious={vi.fn()}
        onNext={vi.fn()}
      />
    );

    const previousButton = screen.getByRole("button", { name: /previous/i });
    expect(previousButton).toBeDisabled();
  });

  it("disables next button when hasNext is false", () => {
    render(
      <Pagination
        hasPrevious={true}
        hasNext={false}
        onPrevious={vi.fn()}
        onNext={vi.fn()}
      />
    );

    const nextButton = screen.getByRole("button", { name: /next/i });
    expect(nextButton).toBeDisabled();
  });

  it("calls onPrevious when previous button is clicked", () => {
    const onPrevious = vi.fn();
    render(
      <Pagination
        hasPrevious={true}
        hasNext={true}
        onPrevious={onPrevious}
        onNext={vi.fn()}
      />
    );

    const previousButton = screen.getByRole("button", { name: /previous/i });
    fireEvent.click(previousButton);
    expect(onPrevious).toHaveBeenCalledTimes(1);
  });

  it("calls onNext when next button is clicked", () => {
    const onNext = vi.fn();
    render(
      <Pagination
        hasPrevious={true}
        hasNext={true}
        onPrevious={vi.fn()}
        onNext={onNext}
      />
    );

    const nextButton = screen.getByRole("button", { name: /next/i });
    fireEvent.click(nextButton);
    expect(onNext).toHaveBeenCalledTimes(1);
  });

  it("renders label when provided", () => {
    render(
      <Pagination
        hasPrevious={true}
        hasNext={true}
        onPrevious={vi.fn()}
        onNext={vi.fn()}
        label="Page 1 of 10"
      />
    );

    expect(screen.getByText("Page 1 of 10")).toBeInTheDocument();
  });

  it("applies custom accessibility label", () => {
    render(
      <Pagination
        accessibilityLabel="Custom pagination"
        hasPrevious={true}
        hasNext={true}
        onPrevious={vi.fn()}
        onNext={vi.fn()}
      />
    );

    const nav = screen.getByRole("navigation");
    expect(nav).toHaveAttribute("aria-label", "Custom pagination");
  });

  it("applies custom accessibility labels for buttons", () => {
    render(
      <Pagination
        hasPrevious={true}
        hasNext={true}
        onPrevious={vi.fn()}
        onNext={vi.fn()}
        accessibilityLabels={{
          previous: "Go to previous page",
          next: "Go to next page",
        }}
      />
    );

    expect(screen.getByRole("button", { name: "Go to previous page" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Go to next page" })).toBeInTheDocument();
  });

  it("applies table type class", () => {
    render(
      <Pagination
        type="table"
        hasPrevious={true}
        hasNext={true}
        onPrevious={vi.fn()}
        onNext={vi.fn()}
      />
    );

    const nav = screen.getByRole("navigation");
    expect(nav).toHaveClass("w-auto");
  });

  it("applies page type class by default", () => {
    render(
      <Pagination
        hasPrevious={true}
        hasNext={true}
        onPrevious={vi.fn()}
        onNext={vi.fn()}
      />
    );

    const nav = screen.getByRole("navigation");
    expect(nav).toHaveClass("w-full");
  });

  it("applies custom className", () => {
    render(
      <Pagination
        className="custom-class"
        hasPrevious={true}
        hasNext={true}
        onPrevious={vi.fn()}
        onNext={vi.fn()}
      />
    );

    const nav = screen.getByRole("navigation");
    expect(nav).toHaveClass("custom-class");
  });

  it("handles keyboard navigation", () => {
    const onPrevious = vi.fn();
    const onNext = vi.fn();
    
    render(
      <Pagination
        hasPrevious={true}
        hasNext={true}
        onPrevious={onPrevious}
        onNext={onNext}
        previousKeys={["ArrowLeft"]}
        nextKeys={["ArrowRight"]}
      />
    );

    // Simulate keyboard events
    fireEvent.keyDown(document, { key: "ArrowLeft" });
    expect(onPrevious).toHaveBeenCalledTimes(1);

    fireEvent.keyDown(document, { key: "ArrowRight" });
    expect(onNext).toHaveBeenCalledTimes(1);
  });

  it("does not call callbacks when buttons are disabled", () => {
    const onPrevious = vi.fn();
    const onNext = vi.fn();
    
    render(
      <Pagination
        hasPrevious={false}
        hasNext={false}
        onPrevious={onPrevious}
        onNext={onNext}
        previousKeys={["ArrowLeft"]}
        nextKeys={["ArrowRight"]}
      />
    );

    // Simulate keyboard events
    fireEvent.keyDown(document, { key: "ArrowLeft" });
    fireEvent.keyDown(document, { key: "ArrowRight" });
    
    expect(onPrevious).not.toHaveBeenCalled();
    expect(onNext).not.toHaveBeenCalled();
  });
});

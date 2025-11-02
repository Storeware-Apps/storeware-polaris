import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Spinner } from "./spinner";

describe("Spinner", () => {
  it("renders with default props", () => {
    render(<Spinner accessibilityLabel="Loading" />);
    const spinner = screen.getByRole("img", { name: "Loading" });
    expect(spinner).toBeInTheDocument();
  });

  it("renders with large size by default", () => {
    render(<Spinner accessibilityLabel="Loading" />);
    const spinner = screen.getByRole("img", { name: "Loading" });
    expect(spinner).toHaveClass("h-11", "w-11");
  });

  it("renders with small size", () => {
    render(<Spinner accessibilityLabel="Loading" size="small" />);
    const spinner = screen.getByRole("img", { name: "Loading" });
    expect(spinner).toHaveClass("h-5", "w-5");
  });

  it("applies accessibility label", () => {
    render(<Spinner accessibilityLabel="Processing request" />);
    const spinner = screen.getByRole("img", { name: "Processing request" });
    expect(spinner).toBeInTheDocument();
  });

  it("uses status role when hasFocusableParent is true", () => {
    render(
      <Spinner accessibilityLabel="Loading" hasFocusableParent={true} />
    );
    const spinner = screen.getByRole("status", { name: "Loading" });
    expect(spinner).toBeInTheDocument();
  });

  it("uses img role when hasFocusableParent is false", () => {
    render(
      <Spinner accessibilityLabel="Loading" hasFocusableParent={false} />
    );
    const spinner = screen.getByRole("img", { name: "Loading" });
    expect(spinner).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(
      <Spinner accessibilityLabel="Loading" className="custom-class" />
    );
    const spinner = screen.getByRole("img", { name: "Loading" });
    expect(spinner).toHaveClass("custom-class");
  });

  it("has animate-spin class for animation", () => {
    render(<Spinner accessibilityLabel="Loading" />);
    const spinner = screen.getByRole("img", { name: "Loading" });
    expect(spinner).toHaveClass("animate-spin");
  });

  it("forwards ref correctly", () => {
    const ref = { current: null };
    render(<Spinner accessibilityLabel="Loading" ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
  });
});


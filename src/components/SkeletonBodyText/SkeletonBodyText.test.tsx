import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { SkeletonBodyText } from "./skeletonBodyText";

describe("SkeletonBodyText", () => {
  it("renders with default props", () => {
    const { container } = render(<SkeletonBodyText />);
    const wrapper = container.firstChild as HTMLElement;
    const lines = wrapper.querySelectorAll(":scope > div");
    expect(lines).toHaveLength(3); // Default is 3 lines
  });

  it("renders with custom number of lines", () => {
    const { container } = render(<SkeletonBodyText lines={5} />);
    const wrapper = container.firstChild as HTMLElement;
    const lines = wrapper.querySelectorAll(":scope > div");
    expect(lines).toHaveLength(5);
  });

  it("renders single line", () => {
    const { container } = render(<SkeletonBodyText lines={1} />);
    const wrapper = container.firstChild as HTMLElement;
    const lines = wrapper.querySelectorAll(":scope > div");
    expect(lines).toHaveLength(1);
  });

  it("last line is shorter when multiple lines", () => {
    const { container } = render(<SkeletonBodyText lines={3} />);
    const wrapper = container.firstChild as HTMLElement;
    const lines = wrapper.querySelectorAll(":scope > div");
    const lastLine = lines[lines.length - 1];
    expect(lastLine).toHaveClass("w-3/4");
  });

  it("single line is full width", () => {
    const { container } = render(<SkeletonBodyText lines={1} />);
    const wrapper = container.firstChild as HTMLElement;
    const lines = wrapper.querySelectorAll(":scope > div");
    const firstLine = lines[0];
    expect(firstLine).toHaveClass("w-full");
  });

  it("applies animate-pulse class", () => {
    const { container } = render(<SkeletonBodyText />);
    const wrapper = container.firstChild as HTMLElement;
    const lines = wrapper.querySelectorAll(":scope > div");
    lines.forEach(line => {
      expect(line).toHaveClass("animate-pulse");
    });
  });

  it("applies custom className", () => {
    const { container } = render(<SkeletonBodyText className="custom-class" />);
    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass("custom-class");
  });

  it("forwards ref correctly", () => {
    const ref = { current: null };
    render(<SkeletonBodyText ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("has proper spacing between lines", () => {
    const { container } = render(<SkeletonBodyText lines={3} />);
    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass("space-y-2");
  });
});

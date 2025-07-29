import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Bleed } from "./bleed";

describe("Bleed Component", () => {
  it("renders children correctly", () => {
    render(
      <Bleed>
        <div>Test content</div>
      </Bleed>
    );

    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  it("exports types correctly from component file", () => {
    // This test ensures types are properly exported and can be imported
    const props = {
      children: "Test",
      marginInline: "400" as const,
      marginBlock: "200" as const,
    };

    render(<Bleed {...props} />);
    const bleed = screen.getByText("Test");
    expect(bleed).toBeInTheDocument();
  });

  it("applies marginInline correctly", () => {
    const { container } = render(
      <Bleed marginInline="400">
        <div>Test content</div>
      </Bleed>
    );

    const bleedElement = container.firstChild as HTMLElement;
    expect(bleedElement).toHaveClass("-mx-4");
  });

  it("applies marginBlock correctly", () => {
    const { container } = render(
      <Bleed marginBlock="300">
        <div>Test content</div>
      </Bleed>
    );

    const bleedElement = container.firstChild as HTMLElement;
    expect(bleedElement).toHaveClass("-my-3");
  });

  it("applies marginBlockStart correctly", () => {
    const { container } = render(
      <Bleed marginBlockStart="200">
        <div>Test content</div>
      </Bleed>
    );

    const bleedElement = container.firstChild as HTMLElement;
    expect(bleedElement).toHaveClass("-mt-2");
  });

  it("applies marginBlockEnd correctly", () => {
    const { container } = render(
      <Bleed marginBlockEnd="500">
        <div>Test content</div>
      </Bleed>
    );

    const bleedElement = container.firstChild as HTMLElement;
    expect(bleedElement).toHaveClass("-mb-5");
  });

  it("applies marginInlineStart correctly", () => {
    const { container } = render(
      <Bleed marginInlineStart="600">
        <div>Test content</div>
      </Bleed>
    );

    const bleedElement = container.firstChild as HTMLElement;
    expect(bleedElement).toHaveClass("-ml-6");
  });

  it("applies marginInlineEnd correctly", () => {
    const { container } = render(
      <Bleed marginInlineEnd="800">
        <div>Test content</div>
      </Bleed>
    );

    const bleedElement = container.firstChild as HTMLElement;
    expect(bleedElement).toHaveClass("-mr-8");
  });

  it("applies multiple margin properties correctly", () => {
    const { container } = render(
      <Bleed marginInline="400" marginBlockStart="200">
        <div>Test content</div>
      </Bleed>
    );

    const bleedElement = container.firstChild as HTMLElement;
    expect(bleedElement).toHaveClass("-mx-4");
    expect(bleedElement).toHaveClass("-mt-2");
  });

  it("handles responsive margin values", () => {
    const { container } = render(
      <Bleed marginInline={{ xs: "200", md: "400", lg: "600" }}>
        <div>Test content</div>
      </Bleed>
    );

    const bleedElement = container.firstChild as HTMLElement;
    expect(bleedElement).toHaveClass("-mx-2");
    expect(bleedElement).toHaveClass("md:-mx-4");
    expect(bleedElement).toHaveClass("lg:-mx-6");
  });

  it("handles zero spacing values", () => {
    const { container } = render(
      <Bleed marginInline="0">
        <div>Test content</div>
      </Bleed>
    );

    const bleedElement = container.firstChild as HTMLElement;
    expect(bleedElement).toHaveClass("-mx-0");
  });

  it("handles pixel spacing values", () => {
    const { container } = render(
      <Bleed marginInline="025">
        <div>Test content</div>
      </Bleed>
    );

    const bleedElement = container.firstChild as HTMLElement;
    expect(bleedElement).toHaveClass("-mx-px");
  });

  it("handles large spacing values", () => {
    const { container } = render(
      <Bleed marginInline="3200">
        <div>Test content</div>
      </Bleed>
    );

    const bleedElement = container.firstChild as HTMLElement;
    expect(bleedElement).toHaveClass("-mx-32");
  });

  it("applies custom className", () => {
    const { container } = render(
      <Bleed className="custom-bleed-class">
        <div>Test content</div>
      </Bleed>
    );

    const bleedElement = container.firstChild as HTMLElement;
    expect(bleedElement).toHaveClass("custom-bleed-class");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(
      <Bleed ref={ref}>
        <div>Test content</div>
      </Bleed>
    );

    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("passes through additional props", () => {
    const { container } = render(
      <Bleed data-testid="bleed-component" role="region">
        <div>Test content</div>
      </Bleed>
    );

    const bleedElement = container.firstChild as HTMLElement;
    expect(bleedElement).toHaveAttribute("data-testid", "bleed-component");
    expect(bleedElement).toHaveAttribute("role", "region");
  });

  it("handles all spacing scale values correctly", () => {
    const spacingValues = [
      { value: "0", expected: "-mx-0" },
      { value: "025", expected: "-mx-px" },
      { value: "050", expected: "-mx-0.5" },
      { value: "100", expected: "-mx-1" },
      { value: "150", expected: "-mx-1.5" },
      { value: "200", expected: "-mx-2" },
      { value: "300", expected: "-mx-3" },
      { value: "400", expected: "-mx-4" },
      { value: "500", expected: "-mx-5" },
      { value: "600", expected: "-mx-6" },
      { value: "800", expected: "-mx-8" },
      { value: "1000", expected: "-mx-10" },
      { value: "1200", expected: "-mx-12" },
      { value: "1600", expected: "-mx-16" },
      { value: "2000", expected: "-mx-20" },
      { value: "2400", expected: "-mx-24" },
      { value: "2800", expected: "-mx-28" },
      { value: "3200", expected: "-mx-32" },
    ] as const;

    spacingValues.forEach(({ value, expected }) => {
      const { container, unmount } = render(
        <Bleed marginInline={value}>
          <div>Test</div>
        </Bleed>
      );

      const bleedElement = container.firstChild as HTMLElement;
      expect(bleedElement).toHaveClass(expected);

      unmount();
    });
  });
});

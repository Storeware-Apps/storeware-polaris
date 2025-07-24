import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { InlineStack } from "./inlineStack";

describe("InlineStack", () => {
  it("renders children correctly", () => {
    render(
      <InlineStack>
        <div>Child 1</div>
        <div>Child 2</div>
      </InlineStack>
    );

    expect(screen.getByText("Child 1")).toBeInTheDocument();
    expect(screen.getByText("Child 2")).toBeInTheDocument();
  });

  it("renders as div by default", () => {
    render(
      <InlineStack data-testid="inline-stack">
        <div>Child</div>
      </InlineStack>
    );

    const element = screen.getByTestId("inline-stack");
    expect(element.tagName).toBe("DIV");
  });

  it("renders with custom element when as prop is provided", () => {
    render(
      <InlineStack as="span" data-testid="inline-stack">
        <div>Child</div>
      </InlineStack>
    );

    const element = screen.getByTestId("inline-stack");
    expect(element.tagName).toBe("SPAN");
  });

  it("applies default classes", () => {
    render(
      <InlineStack data-testid="inline-stack">
        <div>Child</div>
      </InlineStack>
    );

    const element = screen.getByTestId("inline-stack");
    expect(element).toHaveClass("flex", "justify-start", "flex-row", "items-start", "flex-wrap");
  });

  it("applies align classes correctly", () => {
    const alignments = [
      { prop: "start", class: "justify-start" },
      { prop: "center", class: "justify-center" },
      { prop: "end", class: "justify-end" },
      { prop: "space-around", class: "justify-around" },
      { prop: "space-between", class: "justify-between" },
      { prop: "space-evenly", class: "justify-evenly" },
    ] as const;

    alignments.forEach(({ prop, class: expectedClass }) => {
      const { unmount } = render(
        <InlineStack align={prop} data-testid={`inline-stack-${prop}`}>
          <div>Child</div>
        </InlineStack>
      );

      const element = screen.getByTestId(`inline-stack-${prop}`);
      expect(element).toHaveClass(expectedClass);
      unmount();
    });
  });

  it("applies direction classes correctly", () => {
    const directions = [
      { prop: "row", class: "flex-row" },
      { prop: "row-reverse", class: "flex-row-reverse" },
    ] as const;

    directions.forEach(({ prop, class: expectedClass }) => {
      const { unmount } = render(
        <InlineStack direction={prop} data-testid={`inline-stack-${prop}`}>
          <div>Child</div>
        </InlineStack>
      );

      const element = screen.getByTestId(`inline-stack-${prop}`);
      expect(element).toHaveClass(expectedClass);
      unmount();
    });
  });

  it("applies blockAlign classes correctly", () => {
    const blockAlignments = [
      { prop: "start", class: "items-start" },
      { prop: "center", class: "items-center" },
      { prop: "end", class: "items-end" },
      { prop: "baseline", class: "items-baseline" },
      { prop: "stretch", class: "items-stretch" },
    ] as const;

    blockAlignments.forEach(({ prop, class: expectedClass }) => {
      const { unmount } = render(
        <InlineStack blockAlign={prop} data-testid={`inline-stack-${prop}`}>
          <div>Child</div>
        </InlineStack>
      );

      const element = screen.getByTestId(`inline-stack-${prop}`);
      expect(element).toHaveClass(expectedClass);
      unmount();
    });
  });

  it("applies wrap classes correctly", () => {
    const { rerender } = render(
      <InlineStack wrap={true} data-testid="inline-stack">
        <div>Child</div>
      </InlineStack>
    );

    let element = screen.getByTestId("inline-stack");
    expect(element).toHaveClass("flex-wrap");

    rerender(
      <InlineStack wrap={false} data-testid="inline-stack">
        <div>Child</div>
      </InlineStack>
    );

    element = screen.getByTestId("inline-stack");
    expect(element).toHaveClass("flex-nowrap");
  });

  it("applies gap classes correctly", () => {
    const gaps = [
      { prop: "0", class: "gap-0" },
      { prop: "025", class: "gap-px" },
      { prop: "050", class: "gap-0.5" },
      { prop: "100", class: "gap-1" },
      { prop: "200", class: "gap-2" },
      { prop: "400", class: "gap-4" },
      { prop: "800", class: "gap-8" },
    ] as const;

    gaps.forEach(({ prop, class: expectedClass }) => {
      const { unmount } = render(
        <InlineStack gap={prop} data-testid={`inline-stack-${prop}`}>
          <div>Child</div>
        </InlineStack>
      );

      const element = screen.getByTestId(`inline-stack-${prop}`);
      expect(element).toHaveClass(expectedClass);
      unmount();
    });
  });

  it("applies responsive gap classes correctly", () => {
    render(
      <InlineStack 
        gap={{ xs: "200", md: "400", lg: "800" }} 
        data-testid="inline-stack"
      >
        <div>Child</div>
      </InlineStack>
    );

    const element = screen.getByTestId("inline-stack");
    expect(element).toHaveClass("gap-2", "md:gap-4", "lg:gap-8");
  });

  it("applies custom className", () => {
    render(
      <InlineStack className="custom-class" data-testid="inline-stack">
        <div>Child</div>
      </InlineStack>
    );

    const element = screen.getByTestId("inline-stack");
    expect(element).toHaveClass("custom-class");
  });

  it("forwards ref correctly", () => {
    const ref = { current: null };
    
    render(
      <InlineStack ref={ref} data-testid="inline-stack">
        <div>Child</div>
      </InlineStack>
    );

    expect(ref.current).toBe(screen.getByTestId("inline-stack"));
  });

  it("passes through additional props", () => {
    render(
      <InlineStack 
        data-testid="inline-stack" 
        aria-label="Test stack"
        role="group"
      >
        <div>Child</div>
      </InlineStack>
    );

    const element = screen.getByTestId("inline-stack");
    expect(element).toHaveAttribute("aria-label", "Test stack");
    expect(element).toHaveAttribute("role", "group");
  });

  it("handles empty children", () => {
    render(
      <InlineStack data-testid="inline-stack">
        {null}
        {undefined}
        {false}
      </InlineStack>
    );

    const element = screen.getByTestId("inline-stack");
    expect(element).toBeInTheDocument();
    expect(element).toBeEmptyDOMElement();
  });

  it("works with semantic HTML elements", () => {
    const semanticElements = ["span", "li", "ol", "ul"] as const;

    semanticElements.forEach((element) => {
      const { unmount } = render(
        <InlineStack as={element} data-testid={`inline-stack-${element}`}>
          <div>Child</div>
        </InlineStack>
      );

      const stackElement = screen.getByTestId(`inline-stack-${element}`);
      expect(stackElement.tagName).toBe(element.toUpperCase());
      unmount();
    });
  });

  it("combines multiple props correctly", () => {
    render(
      <InlineStack
        align="center"
        direction="row-reverse"
        blockAlign="end"
        gap="400"
        wrap={false}
        className="custom-class"
        data-testid="inline-stack"
      >
        <div>Child</div>
      </InlineStack>
    );

    const element = screen.getByTestId("inline-stack");
    expect(element).toHaveClass(
      "flex",
      "justify-center",
      "flex-row-reverse",
      "items-end",
      "gap-4",
      "flex-nowrap",
      "custom-class"
    );
  });

  it("handles edge case gap values", () => {
    const edgeGaps = [
      { prop: "1200", class: "gap-12" },
      { prop: "1600", class: "gap-16" },
      { prop: "2000", class: "gap-20" },
      { prop: "3200", class: "gap-32" },
    ] as const;

    edgeGaps.forEach(({ prop, class: expectedClass }) => {
      const { unmount } = render(
        <InlineStack gap={prop} data-testid={`inline-stack-${prop}`}>
          <div>Child</div>
        </InlineStack>
      );

      const element = screen.getByTestId(`inline-stack-${prop}`);
      expect(element).toHaveClass(expectedClass);
      unmount();
    });
  });

  it("handles complex responsive gap objects", () => {
    render(
      <InlineStack 
        gap={{ xs: "100", sm: "200", md: "400", lg: "600", xl: "800" }} 
        data-testid="inline-stack"
      >
        <div>Child</div>
      </InlineStack>
    );

    const element = screen.getByTestId("inline-stack");
    expect(element).toHaveClass("gap-1", "sm:gap-2", "md:gap-4", "lg:gap-6", "xl:gap-8");
  });
});

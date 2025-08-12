import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BlockStack } from "./blockStack";

describe("BlockStack", () => {
  it("renders children correctly", () => {
    render(
      <BlockStack>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </BlockStack>
    );

    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
    expect(screen.getByText("Item 3")).toBeInTheDocument();
  });

  it("renders as div by default", () => {
    render(
      <BlockStack data-testid="block-stack">
        <div>Content</div>
      </BlockStack>
    );

    const blockStack = screen.getByTestId("block-stack");
    expect(blockStack.tagName).toBe("DIV");
  });

  it("renders with custom element when as prop is provided", () => {
    render(
      <BlockStack as="section" data-testid="block-stack">
        <div>Content</div>
      </BlockStack>
    );

    const blockStack = screen.getByTestId("block-stack");
    expect(blockStack.tagName).toBe("SECTION");
  });

  it("applies default classes", () => {
    render(
      <BlockStack data-testid="block-stack">
        <div>Content</div>
      </BlockStack>
    );

    const blockStack = screen.getByTestId("block-stack");
    expect(blockStack).toHaveClass(
      "flex",
      "flex-col",
      "justify-start",
      "items-stretch"
    );
  });

  it("provides full-width children by default using items-stretch", () => {
    render(
      <BlockStack data-testid="block-stack">
        <div data-testid="child-1">Child 1</div>
        <div data-testid="child-2">Child 2</div>
      </BlockStack>
    );

    const blockStack = screen.getByTestId("block-stack");
    // Verify that the container uses items-stretch by default for full-width children
    expect(blockStack).toHaveClass("items-stretch");

    // Verify that the container is a flex column
    expect(blockStack).toHaveClass("flex", "flex-col");
  });

  it("applies align classes correctly", () => {
    render(
      <BlockStack align="center" data-testid="block-stack">
        <div>Content</div>
      </BlockStack>
    );

    const blockStack = screen.getByTestId("block-stack");
    expect(blockStack).toHaveClass("justify-center");
  });

  it("applies inlineAlign classes correctly", () => {
    render(
      <BlockStack inlineAlign="center" data-testid="block-stack">
        <div>Content</div>
      </BlockStack>
    );

    const blockStack = screen.getByTestId("block-stack");
    expect(blockStack).toHaveClass("items-center");
  });

  it("applies reverseOrder classes correctly", () => {
    render(
      <BlockStack reverseOrder data-testid="block-stack">
        <div>Content</div>
      </BlockStack>
    );

    const blockStack = screen.getByTestId("block-stack");
    expect(blockStack).toHaveClass("flex-col-reverse");
  });

  it("applies gap classes correctly", () => {
    render(
      <BlockStack gap="400" data-testid="block-stack">
        <div>Content</div>
      </BlockStack>
    );

    const blockStack = screen.getByTestId("block-stack");
    expect(blockStack).toHaveClass("gap-4");
  });

  it("applies responsive gap classes correctly", () => {
    render(
      <BlockStack gap={{ xs: "200", md: "400" }} data-testid="block-stack">
        <div>Content</div>
      </BlockStack>
    );

    const blockStack = screen.getByTestId("block-stack");
    expect(blockStack).toHaveClass("gap-2", "md:gap-4");
  });

  it("applies custom className", () => {
    render(
      <BlockStack className="custom-class" data-testid="block-stack">
        <div>Content</div>
      </BlockStack>
    );

    const blockStack = screen.getByTestId("block-stack");
    expect(blockStack).toHaveClass("custom-class");
  });

  it("forwards id prop", () => {
    render(
      <BlockStack id="test-id" data-testid="block-stack">
        <div>Content</div>
      </BlockStack>
    );

    const blockStack = screen.getByTestId("block-stack");
    expect(blockStack).toHaveAttribute("id", "test-id");
  });

  it("forwards role prop", () => {
    render(
      <BlockStack role="group" data-testid="block-stack">
        <div>Content</div>
      </BlockStack>
    );

    const blockStack = screen.getByTestId("block-stack");
    expect(blockStack).toHaveAttribute("role", "group");
  });

  it("forwards ref correctly", () => {
    let ref: HTMLDivElement | null = null;

    render(
      <BlockStack
        ref={el => {
          ref = el;
        }}
        data-testid="block-stack">
        <div>Content</div>
      </BlockStack>
    );

    expect(ref).toBeInstanceOf(HTMLDivElement);
    expect(ref).toHaveClass("flex", "flex-col");
  });

  it("handles all align variants", () => {
    const alignVariants = [
      "start",
      "center",
      "end",
      "space-around",
      "space-between",
      "space-evenly",
    ] as const;

    alignVariants.forEach(align => {
      const { unmount } = render(
        <BlockStack align={align} data-testid={`block-stack-${align}`}>
          <div>Content</div>
        </BlockStack>
      );

      const blockStack = screen.getByTestId(`block-stack-${align}`);
      const expectedClass = `justify-${align === "space-around" ? "around" : align === "space-between" ? "between" : align === "space-evenly" ? "evenly" : align}`;
      expect(blockStack).toHaveClass(expectedClass);

      unmount();
    });
  });

  it("handles all inlineAlign variants", () => {
    const inlineAlignVariants = [
      "start",
      "center",
      "end",
      "baseline",
      "stretch",
    ] as const;

    inlineAlignVariants.forEach(inlineAlign => {
      const { unmount } = render(
        <BlockStack
          inlineAlign={inlineAlign}
          data-testid={`block-stack-${inlineAlign}`}>
          <div>Content</div>
        </BlockStack>
      );

      const blockStack = screen.getByTestId(`block-stack-${inlineAlign}`);
      const expectedClass = `items-${inlineAlign}`;
      expect(blockStack).toHaveClass(expectedClass);

      unmount();
    });
  });

  it("handles all as variants", () => {
    const asVariants = ["div", "span", "ul", "ol", "li", "fieldset"] as const;

    asVariants.forEach(as => {
      const { unmount } = render(
        <BlockStack as={as} data-testid={`block-stack-${as}`}>
          <div>Content</div>
        </BlockStack>
      );

      const blockStack = screen.getByTestId(`block-stack-${as}`);
      expect(blockStack.tagName).toBe(as.toUpperCase());

      unmount();
    });
  });
});

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Card } from "./card";

describe("Card Component", () => {
  it("renders card content correctly", () => {
    render(
      <Card>
        <div>Card content</div>
      </Card>
    );
    expect(screen.getByText("Card content")).toBeInTheDocument();
  });

  it("exports types correctly from component file", () => {
    // This test ensures types are properly exported and can be imported
    const props = {
      children: <div>Test content</div>,
      background: "bg-surface-disabled" as const,
      padding: "500" as const,
      roundedAbove: "md" as const,
    };

    render(<Card {...props} />);
    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  it("applies default styling correctly", () => {
    render(<Card data-testid="card">Default card</Card>);
    const card = screen.getByTestId("card");

    // Check default classes are applied
    expect(card).toHaveClass("rounded-lg");
    expect(card).toHaveClass("border");
    expect(card).toHaveClass("bg-white"); // Default background variant
    expect(card).toHaveClass("text-gray-900");
    // Exact Polaris styling
    expect(card).toHaveClass("[border-color:rgba(227,227,227,1)]");
    expect(card).toHaveClass(
      "[box-shadow:0px_4px_6px_-2px_rgba(26,26,26,0.20)]"
    );
    expect(card).toHaveClass("[color:rgba(48,48,48,1)]");
  });

  it("applies background variants correctly", () => {
    const backgrounds = [
      { background: "bg-surface" as const, expectedClass: "bg-white" },
      {
        background: "bg-surface-disabled" as const,
        expectedClass: "bg-gray-100",
      },
      {
        background: "bg-surface-success" as const,
        expectedClass: "bg-green-50",
      },
      {
        background: "bg-surface-critical" as const,
        expectedClass: "bg-red-50",
      },
      {
        background: "bg-surface-caution" as const,
        expectedClass: "bg-yellow-50",
      },
    ];

    backgrounds.forEach(({ background, expectedClass }) => {
      const { unmount } = render(
        <Card background={background} data-testid={`card-${background}`}>
          Test content
        </Card>
      );

      const card = screen.getByTestId(`card-${background}`);
      expect(card).toHaveClass(expectedClass);

      unmount();
    });
  });

  it("applies roundedAbove variants correctly", () => {
    const roundedVariants = [
      { roundedAbove: "xs" as const, expectedClass: "rounded-lg" },
      { roundedAbove: "sm" as const, expectedClass: "sm:rounded-lg" },
      { roundedAbove: "md" as const, expectedClass: "md:rounded-lg" },
      { roundedAbove: "lg" as const, expectedClass: "lg:rounded-lg" },
      { roundedAbove: "xl" as const, expectedClass: "xl:rounded-lg" },
    ];

    roundedVariants.forEach(({ roundedAbove, expectedClass }) => {
      const { unmount } = render(
        <Card roundedAbove={roundedAbove} data-testid={`card-${roundedAbove}`}>
          Test content
        </Card>
      );

      const card = screen.getByTestId(`card-${roundedAbove}`);
      expect(card).toHaveClass(expectedClass);

      unmount();
    });
  });

  it("applies simple padding correctly", () => {
    const paddingValues = [
      { padding: "0" as const, expectedClass: "p-0" },
      { padding: "200" as const, expectedClass: "p-4" },
      { padding: "400" as const, expectedClass: "p-4" },
      { padding: "500" as const, expectedClass: "p-5" },
      { padding: "600" as const, expectedClass: "p-6" },
      { padding: "800" as const, expectedClass: "p-8" },
    ];

    paddingValues.forEach(({ padding, expectedClass }) => {
      const { unmount } = render(
        <Card padding={padding} data-testid={`card-${padding}`}>
          Test content
        </Card>
      );

      const card = screen.getByTestId(`card-${padding}`);
      expect(card).toHaveClass(expectedClass);

      unmount();
    });
  });

  it("applies responsive padding correctly", () => {
    render(
      <Card
        padding={{ xs: "200", sm: "400", md: "600" }}
        data-testid="responsive-card"
      >
        Test content
      </Card>
    );

    const card = screen.getByTestId("responsive-card");
    expect(card).toHaveClass("p-4"); // xs: 200 -> p-4
    expect(card).toHaveClass("sm:p-4"); // sm: 400 -> sm:p-4
    expect(card).toHaveClass("md:p-6"); // md: 600 -> md:p-6
  });

  it("applies default padding when no padding prop is provided", () => {
    render(<Card data-testid="default-padding-card">Test content</Card>);

    const card = screen.getByTestId("default-padding-card");
    expect(card).toHaveClass("p-4", "sm:p-5");
  });

  it("applies custom className", () => {
    render(
      <Card className="custom-class" data-testid="custom-card">
        Test content
      </Card>
    );

    const card = screen.getByTestId("custom-card");
    expect(card).toHaveClass("custom-class");
  });

  it("maintains consistent styling across variants", () => {
    const variants = [
      { background: "bg-surface" as const },
      { background: "bg-surface-disabled" as const },
      { background: "bg-surface-success" as const },
      { roundedAbove: "md" as const },
      { padding: "600" as const },
    ];

    variants.forEach((variant, index) => {
      const { unmount } = render(
        <Card {...variant} data-testid={`variant-card-${index}`}>
          Test content
        </Card>
      );

      const card = screen.getByTestId(`variant-card-${index}`);

      // Check that base classes are always applied
      expect(card).toHaveClass("border");
      expect(card).toHaveClass("text-gray-900");
      // Exact Polaris styling
      expect(card).toHaveClass("[border-color:rgba(227,227,227,1)]");
      expect(card).toHaveClass(
        "[box-shadow:0px_4px_6px_-2px_rgba(26,26,26,0.20)]"
      );
      expect(card).toHaveClass("[color:rgba(48,48,48,1)]");
      // Note: background class varies based on the background prop

      unmount();
    });
  });

  it("forwards ref correctly", () => {
    const ref = { current: null };
    render(
      <Card ref={ref} data-testid="ref-card">
        Test content
      </Card>
    );

    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("passes through additional props", () => {
    render(
      <Card data-custom="test-value" data-testid="props-card">
        Test content
      </Card>
    );

    const card = screen.getByTestId("props-card");
    expect(card).toHaveAttribute("data-custom", "test-value");
  });

  it("handles edge case padding values", () => {
    const edgeCases = [
      { padding: "025" as const, expectedClass: "p-0.5" },
      { padding: "050" as const, expectedClass: "p-1" },
      { padding: "3200" as const, expectedClass: "p-32" },
    ];

    edgeCases.forEach(({ padding, expectedClass }) => {
      const { unmount } = render(
        <Card padding={padding} data-testid={`edge-card-${padding}`}>
          Test content
        </Card>
      );

      const card = screen.getByTestId(`edge-card-${padding}`);
      expect(card).toHaveClass(expectedClass);

      unmount();
    });
  });

  it("handles complex responsive padding objects", () => {
    render(
      <Card
        padding={{ xs: "200", sm: "400", md: "600", lg: "800", xl: "1000" }}
        data-testid="complex-responsive-card"
      >
        Test content
      </Card>
    );

    const card = screen.getByTestId("complex-responsive-card");
    expect(card).toHaveClass("p-4"); // xs
    expect(card).toHaveClass("sm:p-4"); // sm
    expect(card).toHaveClass("md:p-6"); // md
    expect(card).toHaveClass("lg:p-8"); // lg
    expect(card).toHaveClass("xl:p-10"); // xl
  });

  it("renders as a div element", () => {
    render(<Card data-testid="element-card">Test content</Card>);

    const card = screen.getByTestId("element-card");
    expect(card.tagName.toLowerCase()).toBe("div");
  });
});

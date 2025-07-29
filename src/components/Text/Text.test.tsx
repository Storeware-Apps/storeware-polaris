import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Text } from "./Text";

describe("Text Component", () => {
  it("renders with default props", () => {
    render(<Text>Test text</Text>);
    const text = screen.getByText("Test text");
    expect(text).toBeInTheDocument();
    expect(text.tagName).toBe("SPAN");
  });

  it("renders with custom element type", () => {
    render(<Text as="h1">Heading text</Text>);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe("H1");
  });

  it("exports types correctly from component file", () => {
    // This test ensures types are properly exported and can be imported
    const props = {
      children: "Test",
      variant: "headingMd" as const,
      tone: "success" as const,
      alignment: "center" as const,
      fontWeight: "semibold" as const,
    };

    render(<Text {...props} />);
    const text = screen.getByText("Test");
    expect(text).toBeInTheDocument();
  });

  it("applies variant classes correctly", () => {
    const variants = [
      { variant: "heading3xl" as const, expectedClass: "text-4xl" },
      { variant: "heading2xl" as const, expectedClass: "text-3xl" },
      { variant: "headingXl" as const, expectedClass: "text-2xl" },
      { variant: "headingLg" as const, expectedClass: "text-xl" },
      { variant: "headingMd" as const, expectedClass: "text-sm" },
      { variant: "headingSm" as const, expectedClass: "text-xs" },
      { variant: "headingXs" as const, expectedClass: "text-xs" },
      { variant: "bodyLg" as const, expectedClass: "text-sm" },
      { variant: "bodyMd" as const, expectedClass: "text-xs" },
      { variant: "bodySm" as const, expectedClass: "text-xs" },
      { variant: "bodyXs" as const, expectedClass: "text-xs" },
    ];

    variants.forEach(({ variant, expectedClass }) => {
      const { unmount } = render(<Text variant={variant}>Test</Text>);
      const text = screen.getByText("Test");
      expect(text).toHaveClass(expectedClass);
      unmount();
    });
  });

  it("applies tone classes correctly", () => {
    const tones = [
      { tone: "base" as const, expectedClass: "text-gray-900" },
      { tone: "disabled" as const, expectedClass: "text-gray-400" },
      { tone: "success" as const, expectedClass: "text-green-600" },
      { tone: "critical" as const, expectedClass: "text-red-600" },
      { tone: "caution" as const, expectedClass: "text-yellow-600" },
      { tone: "subdued" as const, expectedClass: "text-gray-600" },
      { tone: "text-inverse" as const, expectedClass: "text-white" },
      { tone: "magic" as const, expectedClass: "text-purple-600" },
    ];

    tones.forEach(({ tone, expectedClass }) => {
      const { unmount } = render(<Text tone={tone}>Test</Text>);
      const text = screen.getByText("Test");
      expect(text).toHaveClass(expectedClass);
      unmount();
    });
  });

  it("applies alignment classes correctly", () => {
    const alignments = [
      { alignment: "start" as const, expectedClass: "text-left" },
      { alignment: "center" as const, expectedClass: "text-center" },
      { alignment: "end" as const, expectedClass: "text-right" },
      { alignment: "justify" as const, expectedClass: "text-justify" },
    ];

    alignments.forEach(({ alignment, expectedClass }) => {
      const { unmount } = render(<Text alignment={alignment}>Test</Text>);
      const text = screen.getByText("Test");
      expect(text).toHaveClass(expectedClass);
      unmount();
    });
  });

  it("applies font weight classes correctly", () => {
    const fontWeights = [
      { fontWeight: "regular" as const, expectedClass: "font-normal" },
      { fontWeight: "medium" as const, expectedClass: "font-medium" },
      { fontWeight: "semibold" as const, expectedClass: "font-semibold" },
      { fontWeight: "bold" as const, expectedClass: "font-bold" },
    ];

    fontWeights.forEach(({ fontWeight, expectedClass }) => {
      const { unmount } = render(<Text fontWeight={fontWeight}>Test</Text>);
      const text = screen.getByText("Test");
      expect(text).toHaveClass(expectedClass);
      unmount();
    });
  });

  it("applies boolean prop classes correctly", () => {
    const { rerender } = render(<Text breakWord>Test</Text>);
    let text = screen.getByText("Test");
    expect(text).toHaveClass("break-words");

    rerender(<Text truncate>Test</Text>);
    text = screen.getByText("Test");
    expect(text).toHaveClass("truncate");

    rerender(<Text numeric>123</Text>);
    text = screen.getByText("123");
    expect(text).toHaveClass("font-mono");
    expect(text).toHaveClass("tabular-nums");

    rerender(<Text visuallyHidden>Hidden</Text>);
    text = screen.getByText("Hidden");
    expect(text).toHaveClass("sr-only");

    rerender(<Text textDecorationLine="line-through">Strikethrough</Text>);
    text = screen.getByText("Strikethrough");
    expect(text).toHaveClass("line-through");
  });

  it("forwards ref correctly", () => {
    const ref = { current: null };
    render(<Text ref={ref}>Test</Text>);
    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
  });

  it("applies custom className", () => {
    render(<Text className="custom-class">Test</Text>);
    const text = screen.getByText("Test");
    expect(text).toHaveClass("custom-class");
  });

  it("passes through HTML attributes", () => {
    render(<Text id="test-id" data-testid="text-element">Test</Text>);
    const text = screen.getByTestId("text-element");
    expect(text).toHaveAttribute("id", "test-id");
  });

  it("handles heading variants with proper font weights", () => {
    const headingVariants = [
      "heading3xl",
      "heading2xl", 
      "headingXl",
      "headingLg",
      "headingMd",
      "headingSm",
      "headingXs",
    ] as const;

    headingVariants.forEach((variant) => {
      const { unmount } = render(<Text variant={variant}>Test</Text>);
      const text = screen.getByText("Test");
      
      // All heading variants should have semibold or bold weight by default
      const hasProperWeight = text.classList.contains("font-semibold") || 
                             text.classList.contains("font-bold");
      expect(hasProperWeight).toBe(true);
      
      unmount();
    });
  });

  it("handles body variants with regular font weight", () => {
    const bodyVariants = ["bodyXs", "bodySm", "bodyMd", "bodyLg"] as const;

    bodyVariants.forEach((variant) => {
      const { unmount } = render(<Text variant={variant}>Test</Text>);
      const text = screen.getByText("Test");
      expect(text).toHaveClass("font-normal");
      unmount();
    });
  });

  it("allows font weight override", () => {
    render(<Text variant="headingLg" fontWeight="regular">Test</Text>);
    const text = screen.getByText("Test");
    expect(text).toHaveClass("font-normal");
    expect(text).not.toHaveClass("font-semibold");
  });
});

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Badge } from "./badge";
import { CheckIcon } from "@shopify/polaris-icons";

describe("Badge", () => {
  it("renders with default props", () => {
    render(<Badge>Test Badge</Badge>);
    const badge = screen.getByText("Test Badge");
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass("bg-gray-100", "text-gray-800");
  });

  it("renders with different tones", () => {
    const { rerender } = render(<Badge tone="success">Success</Badge>);
    expect(screen.getByText("Success")).toHaveClass(
      "bg-green-100",
      "text-green-800"
    );

    rerender(<Badge tone="critical">Critical</Badge>);
    expect(screen.getByText("Critical")).toHaveClass(
      "bg-red-100",
      "text-red-800"
    );

    rerender(<Badge tone="warning">Warning</Badge>);
    expect(screen.getByText("Warning")).toHaveClass(
      "bg-yellow-100",
      "text-yellow-800"
    );

    rerender(<Badge tone="info">Info</Badge>);
    expect(screen.getByText("Info")).toHaveClass(
      "bg-blue-100",
      "text-blue-800"
    );
  });

  it("renders with different sizes", () => {
    const { rerender } = render(<Badge size="small">Small</Badge>);
    expect(screen.getByText("Small")).toHaveClass("h-5", "px-2");

    rerender(<Badge size="medium">Medium</Badge>);
    expect(screen.getByText("Medium")).toHaveClass("h-6", "px-2.5");
  });

  it("renders with progress states", () => {
    const { rerender } = render(
      <Badge progress="incomplete">Incomplete</Badge>
    );
    expect(screen.getByText("Incomplete")).toHaveClass("opacity-60");

    rerender(<Badge progress="partiallyComplete">Partial</Badge>);
    expect(screen.getByText("Partial")).toHaveClass("opacity-80");

    rerender(<Badge progress="complete">Complete</Badge>);
    expect(screen.getByText("Complete")).toHaveClass("opacity-100");
  });

  it("renders with icon component", () => {
    render(<Badge icon={CheckIcon}>With Icon</Badge>);
    const badge = screen.getByText("With Icon");
    expect(badge).toBeInTheDocument();
    // Check that an SVG icon is present
    const icon = badge.querySelector("svg");
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass("w-3", "h-3", "mr-1");
  });

  it("renders with placeholder icon", () => {
    render(<Badge icon="placeholder">Placeholder</Badge>);
    const badge = screen.getByText("Placeholder");
    const placeholder = badge.querySelector("span");
    expect(placeholder).toHaveClass(
      "w-3",
      "h-3",
      "bg-current",
      "rounded-full",
      "opacity-50",
      "mr-1"
    );
  });

  it("renders with string icon", () => {
    render(<Badge icon="★">Star</Badge>);
    const badge = screen.getByText("Star");
    expect(badge).toBeInTheDocument();
    expect(badge.textContent).toContain("★");
  });

  it("applies custom className", () => {
    render(<Badge className="custom-class">Custom</Badge>);
    expect(screen.getByText("Custom")).toHaveClass("custom-class");
  });

  it("forwards ref correctly", () => {
    const ref = { current: null };
    render(<Badge ref={ref}>Ref Test</Badge>);
    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
  });

  it("renders all tone variants correctly", () => {
    const tones = [
      "default",
      "success",
      "critical",
      "warning",
      "attention",
      "info",
      "new",
      "read-only",
      "enabled",
      "subdued",
    ] as const;

    tones.forEach(tone => {
      const { unmount } = render(<Badge tone={tone}>{tone}</Badge>);
      const badge = screen.getByText(tone);
      expect(badge).toBeInTheDocument();
      expect(badge).toHaveClass(
        "inline-flex",
        "items-center",
        "justify-center"
      );
      unmount();
    });
  });

  it("combines multiple props correctly", () => {
    render(
      <Badge
        tone="success"
        size="small"
        progress="partiallyComplete"
        icon={CheckIcon}
        className="extra-class">
        Complex Badge
      </Badge>
    );

    const badge = screen.getByText("Complex Badge");
    expect(badge).toHaveClass(
      "bg-green-100",
      "text-green-800",
      "h-5",
      "px-2",
      "opacity-80",
      "extra-class"
    );

    // Check icon is present
    const icon = badge.querySelector("svg");
    expect(icon).toBeInTheDocument();
  });

  it("handles empty children", () => {
    render(<Badge />);
    const badge = document.querySelector("span");
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass("inline-flex", "items-center", "justify-center");
  });

  it("maintains accessibility", () => {
    render(<Badge>Accessible Badge</Badge>);
    const badge = screen.getByText("Accessible Badge");
    expect(badge.tagName).toBe("SPAN");
    expect(badge).toHaveClass("focus:outline-none", "focus:ring-2");
  });
});

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Icon } from "./icon";
import { PlusCircleIcon } from "@shopify/polaris-icons";

// Mock icon component for testing
const MockIcon = () => (
  <svg data-testid="mock-icon" viewBox="0 0 20 20">
    <circle cx="10" cy="10" r="8" />
  </svg>
);

describe("Icon", () => {
  it("renders with default props", () => {
    render(<Icon source={MockIcon} />);
    const icon = screen.getByTestId("mock-icon");
    expect(icon).toBeInTheDocument();
  });

  it("applies the correct base tone class", () => {
    const { container } = render(<Icon source={MockIcon} />);
    const iconWrapper = container.firstChild as HTMLElement;
    expect(iconWrapper).toHaveClass("text-foreground");
  });

  it("applies the correct tone classes", () => {
    const { container: criticalContainer } = render(
      <Icon source={MockIcon} tone="critical" />
    );
    const criticalIcon = criticalContainer.firstChild as HTMLElement;
    expect(criticalIcon).toHaveClass("text-destructive");

    const { container: successContainer } = render(
      <Icon source={MockIcon} tone="success" />
    );
    const successIcon = successContainer.firstChild as HTMLElement;
    expect(successIcon).toHaveClass("text-green-600");

    const { container: primaryContainer } = render(
      <Icon source={MockIcon} tone="primary" />
    );
    const primaryIcon = primaryContainer.firstChild as HTMLElement;
    expect(primaryIcon).toHaveClass("text-primary");
  });

  it("applies custom className", () => {
    const { container } = render(
      <Icon source={MockIcon} className="custom-class" />
    );
    const iconWrapper = container.firstChild as HTMLElement;
    expect(iconWrapper).toHaveClass("custom-class");
  });

  it("handles accessibility label correctly", () => {
    const { container } = render(
      <Icon source={MockIcon} accessibilityLabel="Add item" />
    );
    const iconWrapper = container.firstChild as HTMLElement;
    expect(iconWrapper).toHaveAttribute("aria-label", "Add item");
    expect(iconWrapper).not.toHaveAttribute("aria-hidden");
  });

  it("sets aria-hidden when no accessibility label is provided", () => {
    const { container } = render(<Icon source={MockIcon} />);
    const iconWrapper = container.firstChild as HTMLElement;
    expect(iconWrapper).toHaveAttribute("aria-hidden", "true");
    expect(iconWrapper).not.toHaveAttribute("aria-label");
  });

  it("handles React component source", () => {
    const { container } = render(<Icon source={PlusCircleIcon} />);
    // The icon should be rendered (we can't easily test the exact content due to how Polaris icons work)
    const iconWrapper = container.firstChild as HTMLElement;
    expect(iconWrapper).toBeInTheDocument();
    expect(iconWrapper.tagName).toBe("SPAN");
  });

  it("handles React element source", () => {
    const customElement = (
      <svg data-testid="custom-element" viewBox="0 0 20 20">
        <rect width="20" height="20" />
      </svg>
    );
    render(<Icon source={customElement} />);
    const customIcon = screen.getByTestId("custom-element");
    expect(customIcon).toBeInTheDocument();
    expect(customIcon).toHaveClass("w-5", "h-5");
  });

  it("handles string SVG source", () => {
    const svgString =
      '<svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="8"/></svg>';
    const { container } = render(<Icon source={svgString} />);
    const iconWrapper = container.firstChild as HTMLElement;
    expect(iconWrapper.innerHTML).toContain("circle");
  });

  it("applies correct sizing classes", () => {
    const { container } = render(<Icon source={MockIcon} />);
    const iconWrapper = container.firstChild as HTMLElement;
    expect(iconWrapper).toHaveClass("w-5", "h-5");
  });

  it("applies base styling classes", () => {
    const { container } = render(<Icon source={MockIcon} />);
    const iconWrapper = container.firstChild as HTMLElement;
    expect(iconWrapper).toHaveClass("inline-block", "shrink-0");
  });

  it("handles all tone variants correctly", () => {
    const tones = [
      { tone: "base", expectedClass: "text-foreground" },
      { tone: "inherit", expectedClass: "text-inherit" },
      { tone: "subdued", expectedClass: "text-muted-foreground" },
      { tone: "caution", expectedClass: "text-amber-600" },
      { tone: "warning", expectedClass: "text-orange-600" },
      { tone: "critical", expectedClass: "text-destructive" },
      { tone: "interactive", expectedClass: "text-primary" },
      { tone: "info", expectedClass: "text-blue-600" },
      { tone: "success", expectedClass: "text-green-600" },
      { tone: "primary", expectedClass: "text-primary" },
      { tone: "emphasis", expectedClass: "text-foreground" },
      { tone: "magic", expectedClass: "text-purple-600" },
      { tone: "textCaution", expectedClass: "text-amber-700" },
      { tone: "textWarning", expectedClass: "text-orange-700" },
      { tone: "textCritical", expectedClass: "text-red-700" },
      { tone: "textInfo", expectedClass: "text-blue-700" },
      { tone: "textSuccess", expectedClass: "text-green-700" },
      { tone: "textPrimary", expectedClass: "text-primary" },
      { tone: "textMagic", expectedClass: "text-purple-700" },
    ] as const;

    tones.forEach(({ tone, expectedClass }) => {
      const { container } = render(<Icon source={MockIcon} tone={tone} />);
      const iconWrapper = container.firstChild as HTMLElement;
      expect(iconWrapper).toHaveClass(expectedClass);
    });
  });

  it("handles null or undefined source gracefully", () => {
    const { container } = render(<Icon source={null} />);
    const iconWrapper = container.firstChild as HTMLElement;
    expect(iconWrapper).toBeInTheDocument();
    expect(iconWrapper.children).toHaveLength(0);
  });

  it("forwards ref correctly", () => {
    const ref = { current: null };
    render(<Icon ref={ref} source={MockIcon} />);
    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
  });
});

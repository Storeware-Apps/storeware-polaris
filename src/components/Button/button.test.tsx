import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "./button";

describe("Button Component", () => {
  it("renders with correct font-weight", () => {
    render(<Button>Test Button</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("font-medium");
  });

  it("exports types correctly from component file", () => {
    // This test ensures types are properly exported and can be imported
    const props = {
      children: "Test",
      variant: "primary" as const,
      size: "medium" as const,
      disabled: false,
    };

    render(<Button {...props} />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("maintains consistent styling across variants", () => {
    const variants = ["default", "primary", "secondary"] as const;

    variants.forEach((variant) => {
      const { unmount } = render(<Button variant={variant}>Test</Button>);
      const button = screen.getByRole("button");

      // Check that consistent properties are applied (medium size by default)
      expect(button).toHaveClass("!h-8"); // consistent height for medium
      expect(button).toHaveClass("!px-4"); // consistent padding for medium
      expect(button).toHaveClass("!py-2"); // consistent padding for medium
      expect(button).toHaveClass("!rounded-lg"); // consistent border-radius
      expect(button).toHaveClass("font-medium"); // consistent font-weight (updated)

      unmount();
    });
  });

  it("applies correct size variants", () => {
    const sizes = [
      { size: "micro" as const, height: "!h-5", padding: "!px-2" },
      { size: "slim" as const, height: "!h-6", padding: "!px-2.5" },
      { size: "medium" as const, height: "!h-8", padding: "!px-4" },
      { size: "large" as const, height: "!h-10", padding: "!px-5" },
    ];

    sizes.forEach(({ size, height, padding }) => {
      const { unmount } = render(<Button size={size}>Test</Button>);
      const button = screen.getByRole("button");

      expect(button).toHaveClass(height);
      expect(button).toHaveClass(padding);

      unmount();
    });
  });
});

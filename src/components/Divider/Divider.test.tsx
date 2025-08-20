import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Divider } from "./divider";

describe("Divider", () => {
  it("renders as hr element", () => {
    render(<Divider data-testid="divider" />);

    const divider = screen.getByTestId("divider");
    expect(divider.tagName).toBe("HR");
  });

  it("applies default classes", () => {
    render(<Divider data-testid="divider" />);

    const divider = screen.getByTestId("divider");
    expect(divider).toHaveClass("w-full", "border-solid");
  });

  it("applies default border color and width", () => {
    render(<Divider data-testid="divider" />);

    const divider = screen.getByTestId("divider");
    expect(divider).toHaveClass("border-gray-200", "border-t");
  });

  it("applies custom border color", () => {
    render(<Divider borderColor="border-brand" data-testid="divider" />);

    const divider = screen.getByTestId("divider");
    expect(divider).toHaveClass("border-blue-600");
  });

  it("applies transparent border color", () => {
    render(<Divider borderColor="transparent" data-testid="divider" />);

    const divider = screen.getByTestId("divider");
    expect(divider).toHaveClass("border-transparent");
  });

  it("applies custom border width", () => {
    render(<Divider borderWidth="100" data-testid="divider" />);

    const divider = screen.getByTestId("divider");
    expect(divider).toHaveClass("border-t-4");
  });

  it("applies custom className", () => {
    render(<Divider className="custom-class" data-testid="divider" />);

    const divider = screen.getByTestId("divider");
    expect(divider).toHaveClass("custom-class");
  });

  it("forwards ref correctly", () => {
    let ref: HTMLHRElement | null = null;

    render(
      <Divider
        ref={el => {
          ref = el;
        }}
        data-testid="divider"
      />
    );

    expect(ref).toBeInstanceOf(HTMLHRElement);
    expect(ref).toHaveClass("w-full", "border-solid", "border-t");
  });

  it("handles all border color variants", () => {
    const borderColorVariants = [
      "border",
      "border-secondary",
      "border-tertiary",
      "border-inverse",
      "border-brand",
      "border-info",
      "border-success",
      "border-warning",
      "border-critical",
      "transparent",
    ] as const;

    borderColorVariants.forEach(borderColor => {
      const { unmount } = render(
        <Divider
          borderColor={borderColor}
          data-testid={`divider-${borderColor}`}
        />
      );

      const divider = screen.getByTestId(`divider-${borderColor}`);
      expect(divider).toBeInTheDocument();

      unmount();
    });
  });

  it("handles all border width variants", () => {
    const borderWidthVariants = [
      "0",
      "025",
      "050",
      "100",
      "150",
      "200",
      "300",
      "400",
      "500",
    ] as const;

    borderWidthVariants.forEach(borderWidth => {
      const { unmount } = render(
        <Divider
          borderWidth={borderWidth}
          data-testid={`divider-${borderWidth}`}
        />
      );

      const divider = screen.getByTestId(`divider-${borderWidth}`);
      expect(divider).toBeInTheDocument();

      unmount();
    });
  });

  it("combines border color and width correctly", () => {
    render(
      <Divider
        borderColor="border-success"
        borderWidth="100"
        data-testid="divider"
      />
    );

    const divider = screen.getByTestId("divider");
    expect(divider).toHaveClass("border-green-500", "border-t-4");
  });

  it("supports additional HTML attributes", () => {
    render(
      <Divider
        data-testid="divider"
        role="separator"
        aria-label="Content separator"
      />
    );

    const divider = screen.getByTestId("divider");
    expect(divider).toHaveAttribute("role", "separator");
    expect(divider).toHaveAttribute("aria-label", "Content separator");
  });
});

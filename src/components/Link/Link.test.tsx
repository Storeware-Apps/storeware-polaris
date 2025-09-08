import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Link } from "./link";

describe("Link", () => {
  it("renders as anchor element", () => {
    render(<Link url="https://example.com">Test link</Link>);

    const link = screen.getByRole("link");
    expect(link.tagName).toBe("A");
  });

  it("applies url as href", () => {
    render(<Link url="https://example.com">Test link</Link>);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "https://example.com");
  });

  it("displays children content", () => {
    render(<Link url="https://example.com">Test link content</Link>);

    expect(screen.getByText("Test link content")).toBeInTheDocument();
  });

  it("applies custom id", () => {
    render(
      <Link url="https://example.com" id="custom-id">
        Test link
      </Link>
    );

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("id", "custom-id");
  });

  it("applies target attribute", () => {
    render(
      <Link url="https://example.com" target="_blank">
        Test link
      </Link>
    );

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("applies external prop (deprecated)", () => {
    render(
      <Link url="https://example.com" external={true}>
        Test link
      </Link>
    );

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("adds rel attribute for external links", () => {
    render(
      <Link url="https://example.com" target="_blank">
        Test link
      </Link>
    );

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("does not add rel attribute for internal links", () => {
    render(<Link url="/internal-page">Test link</Link>);

    const link = screen.getByRole("link");
    expect(link).not.toHaveAttribute("rel");
  });

  it("applies monochrome styling", () => {
    render(
      <Link url="https://example.com" monochrome={true}>
        Test link
      </Link>
    );

    const link = screen.getByRole("link");
    expect(link).toHaveClass("text-current");
  });

  it("applies default blue styling by default", () => {
    render(<Link url="https://example.com">Test link</Link>);

    const link = screen.getByRole("link");
    expect(link).toHaveClass("text-blue-600");
  });

  it("removes underline when removeUnderline is true", () => {
    render(
      <Link url="https://example.com" removeUnderline={true}>
        Test link
      </Link>
    );

    const link = screen.getByRole("link");
    expect(link).toHaveClass("no-underline");
  });

  it("has underline by default", () => {
    render(<Link url="https://example.com">Test link</Link>);

    const link = screen.getByRole("link");
    expect(link).toHaveClass("underline");
  });

  it("applies primary link styling", () => {
    render(
      <Link url="https://example.com" dataPrimaryLink={true}>
        Test link
      </Link>
    );

    const link = screen.getByRole("link");
    expect(link).toHaveClass("font-semibold");
    expect(link).toHaveAttribute("data-primary-link", "true");
  });

  it("calls onClick when clicked", () => {
    const handleClick = vi.fn();
    render(
      <Link url="https://example.com" onClick={handleClick}>
        Test link
      </Link>
    );

    const link = screen.getByRole("link");
    fireEvent.click(link);

    expect(handleClick).toHaveBeenCalled();
  });

  it("applies accessibility label", () => {
    render(
      <Link
        url="https://example.com"
        accessibilityLabel="Custom accessibility label">
        Test link
      </Link>
    );

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("aria-label", "Custom accessibility label");
  });

  it("applies custom className", () => {
    render(
      <Link url="https://example.com" className="custom-class">
        Test link
      </Link>
    );

    const link = screen.getByRole("link");
    expect(link).toHaveClass("custom-class");
  });

  it("forwards ref correctly", () => {
    let ref: HTMLAnchorElement | null = null;

    render(
      <Link
        url="https://example.com"
        ref={el => {
          ref = el;
        }}>
        Test link
      </Link>
    );

    expect(ref).toBeInstanceOf(HTMLAnchorElement);
    expect(ref).toHaveAttribute("href", "https://example.com");
  });

  it("supports additional HTML attributes", () => {
    render(
      <Link
        url="https://example.com"
        data-testid="test-link"
        data-custom="custom-value"
        title="Link title">
        Test link
      </Link>
    );

    const link = screen.getByTestId("test-link");
    expect(link).toHaveAttribute("data-custom", "custom-value");
    expect(link).toHaveAttribute("title", "Link title");
  });

  it("handles missing url gracefully", () => {
    render(<Link data-testid="link-without-url">Test link without URL</Link>);

    const link = screen.getByTestId("link-without-url");
    expect(link.tagName).toBe("A");
    expect(link).toHaveTextContent("Test link without URL");
  });

  it("combines monochrome and removeUnderline", () => {
    render(
      <Link url="https://example.com" monochrome={true} removeUnderline={true}>
        Test link
      </Link>
    );

    const link = screen.getByRole("link");
    expect(link).toHaveClass("text-current", "no-underline");
  });

  it("handles all target values", () => {
    const targets = ["_blank", "_self", "_parent", "_top"] as const;

    targets.forEach(target => {
      const { unmount } = render(
        <Link
          url="https://example.com"
          target={target}
          data-testid={`link-${target}`}>
          Test link
        </Link>
      );

      const link = screen.getByTestId(`link-${target}`);
      expect(link).toHaveAttribute("target", target);

      unmount();
    });
  });

  it("prioritizes target over external prop", () => {
    render(
      <Link url="https://example.com" external={true} target="_self">
        Test link
      </Link>
    );

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("target", "_self");
  });

  it("works without any props", () => {
    render(<Link data-testid="minimal-link">Minimal link</Link>);

    const link = screen.getByTestId("minimal-link");
    expect(link).toBeInTheDocument();
    expect(link).toHaveTextContent("Minimal link");
    expect(link.tagName).toBe("A");
  });

  it("handles complex children", () => {
    render(
      <Link url="https://example.com">
        <span>Complex</span> <strong>children</strong>
      </Link>
    );

    const link = screen.getByRole("link");
    expect(link).toHaveTextContent("Complex children");
    expect(link.querySelector("span")).toBeInTheDocument();
    expect(link.querySelector("strong")).toBeInTheDocument();
  });

  it("maintains focus styles", () => {
    render(<Link url="https://example.com">Test link</Link>);

    const link = screen.getByRole("link");
    expect(link).toHaveClass("focus:outline-none", "focus:ring-2");
  });

  it("maintains hover styles", () => {
    render(<Link url="https://example.com">Test link</Link>);

    const link = screen.getByRole("link");
    expect(link).toHaveClass("hover:text-blue-800");
  });
});

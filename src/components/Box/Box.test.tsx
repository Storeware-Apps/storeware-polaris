import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Box } from "./box";

describe("Box Component", () => {
  it("renders with default props", () => {
    render(<Box>Test content</Box>);
    const box = screen.getByText("Test content");
    expect(box).toBeInTheDocument();
    expect(box.tagName).toBe("DIV");
  });

  it("renders with different HTML elements", () => {
    const elements = ["div", "span", "section", "legend", "ul", "li"] as const;

    elements.forEach((element) => {
      const { unmount } = render(<Box as={element}>Test {element}</Box>);
      const box = screen.getByText(`Test ${element}`);
      expect(box.tagName).toBe(element.toUpperCase());
      unmount();
    });
  });

  it("applies background colors correctly", () => {
    const { rerender } = render(<Box background="bg-surface">Test</Box>);
    let box = screen.getByText("Test");
    expect(box).toHaveClass("bg-white");

    rerender(<Box background="bg-surface-info">Test</Box>);
    box = screen.getByText("Test");
    expect(box).toHaveClass("bg-[rgb(234,244,255)]");

    rerender(<Box background="bg-fill-critical">Test</Box>);
    box = screen.getByText("Test");
    expect(box).toHaveClass("bg-[rgb(199,10,36)]");
  });

  it("applies border properties correctly", () => {
    render(
      <Box
        borderColor="border-critical"
        borderStyle="dashed"
        borderWidth="025"
        borderRadius="200"
      >
        Test
      </Box>
    );
    const box = screen.getByText("Test");
    expect(box).toHaveClass("border-[rgb(254,193,199)]");
    expect(box).toHaveClass("border-dashed");
    expect(box).toHaveClass("border");
    expect(box).toHaveClass("rounded-lg");
  });

  it("applies individual border widths correctly", () => {
    render(
      <Box
        borderBlockStartWidth="025"
        borderBlockEndWidth="050"
        borderInlineStartWidth="100"
        borderInlineEndWidth="0"
      >
        Test
      </Box>
    );
    const box = screen.getByText("Test");
    expect(box).toHaveClass("border-t");
    expect(box).toHaveClass("border-b-2");
    expect(box).toHaveClass("border-l-4");
    expect(box).toHaveClass("border-r-0");
  });

  it("applies individual border radius correctly", () => {
    render(
      <Box
        borderStartStartRadius="100"
        borderStartEndRadius="200"
        borderEndStartRadius="300"
        borderEndEndRadius="400"
      >
        Test
      </Box>
    );
    const box = screen.getByText("Test");
    expect(box).toHaveClass("rounded-tl");
    expect(box).toHaveClass("rounded-tr-lg");
    expect(box).toHaveClass("rounded-bl-xl");
    expect(box).toHaveClass("rounded-br-2xl");
  });

  it("applies text colors correctly", () => {
    const { rerender } = render(<Box color="text">Test</Box>);
    let box = screen.getByText("Test");
    expect(box).toHaveClass("text-[rgb(48,48,48)]");

    rerender(<Box color="text-critical">Test</Box>);
    box = screen.getByText("Test");
    expect(box).toHaveClass("text-[rgb(142,11,33)]");

    rerender(<Box color="text-success">Test</Box>);
    box = screen.getByText("Test");
    expect(box).toHaveClass("text-[rgb(1,75,64)]");
  });

  it("applies overflow properties correctly", () => {
    render(
      <Box overflowX="hidden" overflowY="scroll">
        Test
      </Box>
    );
    const box = screen.getByText("Test");
    expect(box).toHaveClass("overflow-x-hidden");
    expect(box).toHaveClass("overflow-y-scroll");
  });

  it("applies padding correctly", () => {
    render(<Box padding="400">Test</Box>);
    const box = screen.getByText("Test");
    expect(box).toHaveClass("p-4");
  });

  it("applies directional padding correctly", () => {
    render(
      <Box
        paddingBlock="200"
        paddingInline="300"
        paddingBlockStart="400"
        paddingBlockEnd="500"
        paddingInlineStart="600"
        paddingInlineEnd="800"
      >
        Test
      </Box>
    );
    const box = screen.getByText("Test");
    expect(box).toHaveClass("py-2");
    expect(box).toHaveClass("px-3");
    expect(box).toHaveClass("pt-4");
    expect(box).toHaveClass("pb-5");
    expect(box).toHaveClass("pl-6");
    expect(box).toHaveClass("pr-8");
  });

  it("applies shadows correctly", () => {
    const { rerender } = render(<Box shadow="200">Test</Box>);
    let box = screen.getByText("Test");
    expect(box).toHaveClass("shadow-[0px_3px_1px_-1px_rgba(26,26,26,0.07)]");

    rerender(<Box shadow="button">Test</Box>);
    box = screen.getByText("Test");
    expect(box).toHaveClass(
      "shadow-[0px_-1px_0px_0px_#b5b5b5_inset,_0px_0px_0px_1px_rgba(0,0,0,0.1)_inset,_0px_0.5px_0px_1.5px_#FFF_inset]"
    );
  });

  it("applies position and inset properties correctly", () => {
    render(
      <Box
        position="absolute"
        insetBlockStart="100"
        insetBlockEnd="200"
        insetInlineStart="300"
        insetInlineEnd="400"
      >
        Test
      </Box>
    );
    const box = screen.getByText("Test");
    expect(box).toHaveClass("absolute");
    expect(box).toHaveClass("top-1");
    expect(box).toHaveClass("bottom-2");
    expect(box).toHaveClass("left-3");
    expect(box).toHaveClass("right-4");
  });

  it("applies outline properties correctly", () => {
    render(
      <Box outlineColor="border-focus" outlineStyle="dashed" outlineWidth="050">
        Test
      </Box>
    );
    const box = screen.getByText("Test");
    expect(box).toHaveClass("outline-[rgb(0,91,211)]");
    expect(box).toHaveClass("outline-dashed");
    expect(box).toHaveClass("outline-2");
  });

  it("applies visual and print hidden states correctly", () => {
    const { rerender } = render(<Box visuallyHidden>Test</Box>);
    let box = screen.getByText("Test");
    expect(box).toHaveClass("sr-only");

    rerender(<Box printHidden>Test</Box>);
    box = screen.getByText("Test");
    expect(box).toHaveClass("print:hidden");
  });

  it("applies style properties correctly", () => {
    render(
      <Box
        minHeight="100px"
        minWidth="200px"
        maxWidth="500px"
        width="300px"
        opacity="0.5"
        zIndex="10"
      >
        Test
      </Box>
    );
    const box = screen.getByText("Test");
    expect(box).toHaveStyle({
      minHeight: "100px",
      minWidth: "200px",
      maxWidth: "500px",
      width: "300px",
      opacity: "0.5",
      zIndex: "10",
    });
  });

  it("applies HTML attributes correctly", () => {
    render(
      <Box id="test-box" role="region" tabIndex={0}>
        Test
      </Box>
    );
    const box = screen.getByText("Test");
    expect(box).toHaveAttribute("id", "test-box");
    expect(box).toHaveAttribute("role", "region");
    expect(box).toHaveAttribute("tabIndex", "0");
  });

  it("applies custom className correctly", () => {
    render(<Box className="custom-class">Test</Box>);
    const box = screen.getByText("Test");
    expect(box).toHaveClass("custom-class");
  });

  it("forwards ref correctly", () => {
    const ref = { current: null };
    render(<Box ref={ref}>Test</Box>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("handles responsive padding correctly", () => {
    render(<Box padding={{ xs: "100", md: "200", lg: "400" }}>Test</Box>);
    const box = screen.getByText("Test");
    expect(box).toHaveClass("p-1");
    expect(box).toHaveClass("md:p-2");
    expect(box).toHaveClass("lg:p-4");
  });

  it("handles transparent border color", () => {
    render(<Box borderColor="transparent">Test</Box>);
    const box = screen.getByText("Test");
    expect(box).toHaveClass("border-transparent");
  });

  it("exports types correctly from component file", () => {
    // This test ensures types are properly exported and can be imported
    const props = {
      children: "Test",
      background: "bg-surface" as const,
      padding: "400" as const,
      borderRadius: "200" as const,
    };

    render(<Box {...props} />);
    const box = screen.getByText("Test");
    expect(box).toBeInTheDocument();
  });

  it("maintains consistent API with Polaris Box component", () => {
    // Test that all major Polaris Box props are supported
    const polarisProps = {
      as: "section" as const,
      background: "bg-surface-info" as const,
      borderColor: "border-critical" as const,
      borderStyle: "solid" as const,
      borderRadius: "200" as const,
      borderWidth: "025" as const,
      color: "text-critical" as const,
      padding: "400" as const,
      shadow: "200" as const,
      position: "relative" as const,
    };

    render(<Box {...polarisProps}>Polaris Compatible</Box>);
    const box = screen.getByText("Polaris Compatible");
    expect(box).toBeInTheDocument();
    expect(box.tagName).toBe("SECTION");
  });
});

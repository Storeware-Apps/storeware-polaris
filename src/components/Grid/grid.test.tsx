import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Grid } from "./grid";

describe("Grid Component", () => {
  it("renders grid with children", () => {
    render(
      <Grid>
        <Grid.Cell>
          <div>Grid content</div>
        </Grid.Cell>
      </Grid>
    );

    expect(screen.getByText("Grid content")).toBeInTheDocument();
  });

  it("applies default grid classes", () => {
    const { container } = render(
      <Grid>
        <Grid.Cell>Content</Grid.Cell>
      </Grid>
    );

    const gridElement = container.firstChild as HTMLElement;
    expect(gridElement).toHaveClass("grid");
    expect(gridElement).toHaveClass("w-full");
    expect(gridElement).toHaveClass("grid-cols-12"); // Default columns
    expect(gridElement).toHaveClass("gap-4"); // Default gap
  });

  it("applies responsive column classes", () => {
    const { container } = render(
      <Grid columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 6 }}>
        <Grid.Cell>Content</Grid.Cell>
      </Grid>
    );

    const gridElement = container.firstChild as HTMLElement;
    expect(gridElement).toHaveClass("grid-cols-1");
    expect(gridElement).toHaveClass("sm:grid-cols-2");
    expect(gridElement).toHaveClass("md:grid-cols-3");
    expect(gridElement).toHaveClass("lg:grid-cols-4");
    expect(gridElement).toHaveClass("xl:grid-cols-6");
  });

  it("applies custom gap classes", () => {
    const { container } = render(
      <Grid gap={{ xs: "gap-2", md: "gap-8" }}>
        <Grid.Cell>Content</Grid.Cell>
      </Grid>
    );

    const gridElement = container.firstChild as HTMLElement;
    expect(gridElement).toHaveClass("gap-2");
    expect(gridElement).toHaveClass("md:gap-8");
  });

  it("renders Grid.Cell with column span classes", () => {
    const { container } = render(
      <Grid>
        <Grid.Cell columnSpan={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }}>
          Content
        </Grid.Cell>
      </Grid>
    );

    const cellElement = container.querySelector("div > div") as HTMLElement;
    expect(cellElement).toHaveClass("col-span-12");
    expect(cellElement).toHaveClass("sm:col-span-6");
    expect(cellElement).toHaveClass("md:col-span-4");
    expect(cellElement).toHaveClass("lg:col-span-3");
    expect(cellElement).toHaveClass("xl:col-span-2");
  });

  it("renders Grid.Cell with grid area", () => {
    const { container } = render(
      <Grid>
        <Grid.Cell area="header">Header Content</Grid.Cell>
      </Grid>
    );

    const cellElement = container.querySelector("div > div") as HTMLElement;
    expect(cellElement).toHaveStyle({ gridArea: "header" });
  });

  it("applies grid template areas when areas prop is provided", () => {
    const { container } = render(
      <Grid
        areas={{
          xs: ["header", "content", "footer"],
          md: ["header header", "content sidebar", "footer footer"],
        }}
      >
        <Grid.Cell area="header">Header</Grid.Cell>
        <Grid.Cell area="content">Content</Grid.Cell>
        <Grid.Cell area="footer">Footer</Grid.Cell>
      </Grid>
    );

    const gridElement = container.firstChild as HTMLElement;
    expect(gridElement).toHaveStyle({
      gridTemplateAreas: '"header" "content" "footer"',
    });
  });

  it("renders with custom className", () => {
    const { container } = render(
      <Grid className="custom-grid-class">
        <Grid.Cell>Content</Grid.Cell>
      </Grid>
    );

    expect(container.firstChild).toHaveClass("custom-grid-class");
  });

  it("renders Grid.Cell with custom className", () => {
    const { container } = render(
      <Grid>
        <Grid.Cell className="custom-cell-class">Content</Grid.Cell>
      </Grid>
    );

    const cellElement = container.querySelector("div > div") as HTMLElement;
    expect(cellElement).toHaveClass("custom-cell-class");
  });

  it("exports types correctly from component file", () => {
    // This test ensures types are properly exported and can be imported
    const props = {
      columns: { xs: 1, md: 2 } as const,
      gap: { xs: "gap-4" } as const,
    };

    render(
      <Grid {...props}>
        <Grid.Cell columnSpan={{ xs: 12, md: 6 }}>Content</Grid.Cell>
      </Grid>
    );

    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("handles multiple Grid.Cell components", () => {
    render(
      <Grid>
        <Grid.Cell>First Cell</Grid.Cell>
        <Grid.Cell>Second Cell</Grid.Cell>
        <Grid.Cell>Third Cell</Grid.Cell>
      </Grid>
    );

    expect(screen.getByText("First Cell")).toBeInTheDocument();
    expect(screen.getByText("Second Cell")).toBeInTheDocument();
    expect(screen.getByText("Third Cell")).toBeInTheDocument();
  });

  it("maintains Grid.Cell as static property", () => {
    expect(Grid.Cell).toBeDefined();
    expect(typeof Grid.Cell).toBe("object"); // React component
  });

  it("applies responsive breakpoint classes correctly", () => {
    const { container } = render(
      <Grid>
        <Grid.Cell
          columnSpan={{
            xs: 12,
            sm: 6,
            md: 4,
            lg: 3,
            xl: 2,
          }}
        >
          Responsive Cell
        </Grid.Cell>
      </Grid>
    );

    const cellElement = container.querySelector("div > div") as HTMLElement;
    
    // Check all responsive classes are applied
    expect(cellElement.className).toContain("col-span-12");
    expect(cellElement.className).toContain("sm:col-span-6");
    expect(cellElement.className).toContain("md:col-span-4");
    expect(cellElement.className).toContain("lg:col-span-3");
    expect(cellElement.className).toContain("xl:col-span-2");
  });
});

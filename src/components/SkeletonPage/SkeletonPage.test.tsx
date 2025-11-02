import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { SkeletonPage } from "./skeletonPage";

describe("SkeletonPage", () => {
  it("renders with default props", () => {
    const { container } = render(<SkeletonPage />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("renders with title", () => {
    render(<SkeletonPage title="Products" />);
    expect(screen.getByText("Products")).toBeInTheDocument();
  });

  it("renders title skeleton when no title provided", () => {
    const { container } = render(<SkeletonPage />);
    const titleSkeleton = container.querySelector(".h-8.bg-gray-200");
    expect(titleSkeleton).toBeInTheDocument();
  });

  it("renders primary action skeleton when primaryAction is true", () => {
    const { container } = render(<SkeletonPage primaryAction />);
    const actionSkeleton = container.querySelector(".h-9.w-24.bg-gray-200");
    expect(actionSkeleton).toBeInTheDocument();
  });

  it("does not render primary action skeleton when primaryAction is false", () => {
    const { container } = render(<SkeletonPage primaryAction={false} />);
    const actionSkeleton = container.querySelector(".h-9.w-24.bg-gray-200");
    expect(actionSkeleton).not.toBeInTheDocument();
  });

  it("renders back action skeleton when backAction is true", () => {
    const { container } = render(<SkeletonPage backAction />);
    const backActionSkeleton = container.querySelector(".h-6.w-16.bg-gray-200");
    expect(backActionSkeleton).toBeInTheDocument();
  });

  it("does not render back action skeleton when backAction is false", () => {
    const { container } = render(<SkeletonPage backAction={false} />);
    const backActionSkeleton = container.querySelector(".h-6.w-16.bg-gray-200");
    expect(backActionSkeleton).not.toBeInTheDocument();
  });

  it("applies fullWidth class when fullWidth is true", () => {
    const { container } = render(<SkeletonPage fullWidth />);
    const page = container.firstChild;
    expect(page).toHaveClass("max-w-none");
  });

  it("applies default max-width when fullWidth is false", () => {
    const { container } = render(<SkeletonPage fullWidth={false} />);
    const page = container.firstChild;
    expect(page).toHaveClass("max-w-7xl");
  });

  it("applies narrowWidth class when narrowWidth is true", () => {
    const { container } = render(<SkeletonPage narrowWidth />);
    const page = container.firstChild;
    expect(page).toHaveClass("max-w-3xl");
  });

  it("renders children", () => {
    render(
      <SkeletonPage>
        <div data-testid="child-content">Child Content</div>
      </SkeletonPage>
    );
    expect(screen.getByTestId("child-content")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <SkeletonPage className="custom-class" />
    );
    const page = container.firstChild;
    expect(page).toHaveClass("custom-class");
  });

  it("forwards ref correctly", () => {
    const ref = { current: null };
    render(<SkeletonPage ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("has animate-pulse class on skeleton elements", () => {
    const { container } = render(<SkeletonPage primaryAction />);
    const actionSkeleton = container.querySelector(".h-9.w-24.bg-gray-200");
    expect(actionSkeleton).toHaveClass("animate-pulse");
  });
});


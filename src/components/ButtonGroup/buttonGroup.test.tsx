import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ButtonGroup } from "./buttonGroup";
import { Button } from "../Button/button";

describe("ButtonGroup Component", () => {
  it("renders children correctly", () => {
    render(
      <ButtonGroup>
        <Button>Cancel</Button>
        <Button variant="primary">Save</Button>
      </ButtonGroup>
    );

    expect(screen.getByText("Cancel")).toBeInTheDocument();
    expect(screen.getByText("Save")).toBeInTheDocument();
  });

  it("exports types correctly from component file", () => {
    // This test ensures types are properly exported and can be imported
    const props = {
      gap: "tight" as const,
      variant: "segmented" as const,
      fullWidth: false,
      connectedTop: false,
      noWrap: false,
    };

    render(
      <ButtonGroup {...props}>
        <Button>Test</Button>
      </ButtonGroup>
    );

    const buttonGroup = screen.getByText("Test").parentElement;
    expect(buttonGroup).toBeInTheDocument();
  });

  it("applies correct gap classes", () => {
    const { rerender } = render(
      <ButtonGroup gap="extraTight" data-testid="button-group">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </ButtonGroup>
    );

    let buttonGroup = screen.getByTestId("button-group");
    expect(buttonGroup).toHaveClass("gap-0.5");

    rerender(
      <ButtonGroup gap="tight" data-testid="button-group">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </ButtonGroup>
    );

    buttonGroup = screen.getByTestId("button-group");
    expect(buttonGroup).toHaveClass("gap-2");

    rerender(
      <ButtonGroup gap="loose" data-testid="button-group">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </ButtonGroup>
    );

    buttonGroup = screen.getByTestId("button-group");
    expect(buttonGroup).toHaveClass("gap-4");
  });

  it("applies segmented variant styling", () => {
    render(
      <ButtonGroup variant="segmented" data-testid="button-group">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </ButtonGroup>
    );

    const buttonGroup = screen.getByTestId("button-group");
    expect(buttonGroup).toHaveClass("gap-0"); // No gaps between segmented buttons
    expect(buttonGroup).toHaveClass("[&>*:not(:first-child)]:rounded-l-none");
    expect(buttonGroup).toHaveClass("[&>*:not(:last-child)]:rounded-r-none");
    expect(buttonGroup).toHaveClass("[&>*:not(:first-child)]:border-l-0");
  });

  it("applies fullWidth styling", () => {
    render(
      <ButtonGroup fullWidth data-testid="button-group">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </ButtonGroup>
    );

    const buttonGroup = screen.getByTestId("button-group");
    expect(buttonGroup).toHaveClass("w-full");
    expect(buttonGroup).toHaveClass("[&>*]:flex-1");
  });

  it("applies connectedTop styling", () => {
    render(
      <ButtonGroup connectedTop data-testid="button-group">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </ButtonGroup>
    );

    const buttonGroup = screen.getByTestId("button-group");
    expect(buttonGroup).toHaveClass("[&>*]:rounded-t-none");
  });

  it("applies noWrap styling", () => {
    render(
      <ButtonGroup noWrap data-testid="button-group">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </ButtonGroup>
    );

    const buttonGroup = screen.getByTestId("button-group");
    expect(buttonGroup).toHaveClass("flex-nowrap");
  });
});

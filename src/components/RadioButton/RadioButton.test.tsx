import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { RadioButton } from "./radioButton";

describe("RadioButton", () => {
  it("renders with label", () => {
    render(<RadioButton label="Test option" id="test" name="test" />);
    
    expect(screen.getByLabelText("Test option")).toBeInTheDocument();
    expect(screen.getByText("Test option")).toBeInTheDocument();
  });

  it("renders as radio input type", () => {
    render(<RadioButton label="Test option" data-testid="radio" />);
    
    const radio = screen.getByTestId("radio");
    expect(radio).toHaveAttribute("type", "radio");
  });

  it("applies checked state", () => {
    render(<RadioButton label="Test option" checked={true} data-testid="radio" />);
    
    const radio = screen.getByTestId("radio");
    expect(radio).toBeChecked();
  });

  it("applies unchecked state by default", () => {
    render(<RadioButton label="Test option" data-testid="radio" />);
    
    const radio = screen.getByTestId("radio");
    expect(radio).not.toBeChecked();
  });

  it("applies disabled state", () => {
    render(<RadioButton label="Test option" disabled={true} data-testid="radio" />);
    
    const radio = screen.getByTestId("radio");
    expect(radio).toBeDisabled();
  });

  it("applies name attribute", () => {
    render(<RadioButton label="Test option" name="test-group" data-testid="radio" />);
    
    const radio = screen.getByTestId("radio");
    expect(radio).toHaveAttribute("name", "test-group");
  });

  it("applies value attribute", () => {
    render(<RadioButton label="Test option" value="test-value" data-testid="radio" />);
    
    const radio = screen.getByTestId("radio");
    expect(radio).toHaveAttribute("value", "test-value");
  });

  it("applies custom id", () => {
    render(<RadioButton label="Test option" id="custom-id" />);
    
    const radio = screen.getByRole("radio");
    expect(radio).toHaveAttribute("id", "custom-id");
  });

  it("generates unique id when not provided", () => {
    render(<RadioButton label="Test option" data-testid="radio" />);
    
    const radio = screen.getByTestId("radio");
    expect(radio).toHaveAttribute("id");
    expect(radio.getAttribute("id")).toBeTruthy();
  });

  it("calls onChange when clicked", () => {
    const handleChange = vi.fn();
    render(
      <RadioButton 
        label="Test option" 
        id="test" 
        onChange={handleChange} 
        data-testid="radio" 
      />
    );
    
    const radio = screen.getByTestId("radio");
    fireEvent.click(radio);
    
    expect(handleChange).toHaveBeenCalledWith(true, "test");
  });

  it("calls onFocus when focused", () => {
    const handleFocus = vi.fn();
    render(<RadioButton label="Test option" onFocus={handleFocus} data-testid="radio" />);
    
    const radio = screen.getByTestId("radio");
    fireEvent.focus(radio);
    
    expect(handleFocus).toHaveBeenCalled();
  });

  it("calls onBlur when blurred", () => {
    const handleBlur = vi.fn();
    render(<RadioButton label="Test option" onBlur={handleBlur} data-testid="radio" />);
    
    const radio = screen.getByTestId("radio");
    fireEvent.focus(radio);
    fireEvent.blur(radio);
    
    expect(handleBlur).toHaveBeenCalled();
  });

  it("displays help text", () => {
    render(
      <RadioButton 
        label="Test option" 
        helpText="This is help text" 
        data-testid="radio" 
      />
    );
    
    expect(screen.getByText("This is help text")).toBeInTheDocument();
  });

  it("hides label when labelHidden is true", () => {
    render(<RadioButton label="Test option" labelHidden={true} data-testid="radio" />);
    
    // Label should not be visible but radio should still be accessible
    expect(screen.queryByText("Test option")).not.toBeInTheDocument();
    expect(screen.getByTestId("radio")).toBeInTheDocument();
  });

  it("applies magic tone styling", () => {
    render(<RadioButton label="Test option" tone="magic" data-testid="radio" />);
    
    const radio = screen.getByTestId("radio");
    expect(radio).toHaveClass("checked:border-purple-600");
  });

  it("applies fill styling", () => {
    const { container } = render(
      <RadioButton label="Test option" fill={true} data-testid="radio" />
    );
    
    const label = container.querySelector("label");
    expect(label).toHaveClass("w-full", "h-full");
  });

  it("applies custom className", () => {
    const { container } = render(
      <RadioButton label="Test option" className="custom-class" />
    );
    
    const label = container.querySelector("label");
    expect(label).toHaveClass("custom-class");
  });

  it("forwards ref correctly", () => {
    let ref: HTMLInputElement | null = null;
    
    render(
      <RadioButton
        label="Test option"
        ref={(el) => {
          ref = el;
        }}
        data-testid="radio"
      />
    );

    expect(ref).toBeInstanceOf(HTMLInputElement);
    expect(ref).toHaveAttribute("type", "radio");
  });

  it("applies aria-describedby attribute", () => {
    render(
      <RadioButton 
        label="Test option" 
        ariaDescribedBy="description-id" 
        data-testid="radio" 
      />
    );
    
    const radio = screen.getByTestId("radio");
    expect(radio).toHaveAttribute("aria-describedby", "description-id");
  });

  it("supports additional HTML attributes", () => {
    render(
      <RadioButton 
        label="Test option" 
        data-testid="radio"
        data-custom="custom-value"
        aria-label="Custom aria label"
      />
    );
    
    const radio = screen.getByTestId("radio");
    expect(radio).toHaveAttribute("data-custom", "custom-value");
    expect(radio).toHaveAttribute("aria-label", "Custom aria label");
  });

  it("handles disabled state correctly", () => {
    const handleChange = vi.fn();
    render(
      <RadioButton 
        label="Test option" 
        disabled={true}
        onChange={handleChange}
        data-testid="radio" 
      />
    );
    
    const radio = screen.getByTestId("radio");
    fireEvent.click(radio);
    
    // onChange should not be called when disabled
    expect(handleChange).not.toHaveBeenCalled();
    expect(radio).toBeDisabled();
  });

  it("works in a radio group", () => {
    const handleChange = vi.fn();
    
    render(
      <div>
        <RadioButton 
          label="Option 1" 
          name="group" 
          value="option1"
          id="option1"
          onChange={handleChange}
          data-testid="radio1" 
        />
        <RadioButton 
          label="Option 2" 
          name="group" 
          value="option2"
          id="option2"
          onChange={handleChange}
          data-testid="radio2" 
        />
      </div>
    );
    
    const radio1 = screen.getByTestId("radio1");
    const radio2 = screen.getByTestId("radio2");
    
    expect(radio1).toHaveAttribute("name", "group");
    expect(radio2).toHaveAttribute("name", "group");
    
    fireEvent.click(radio1);
    expect(handleChange).toHaveBeenCalledWith(true, "option1");
    
    fireEvent.click(radio2);
    expect(handleChange).toHaveBeenCalledWith(true, "option2");
  });
});

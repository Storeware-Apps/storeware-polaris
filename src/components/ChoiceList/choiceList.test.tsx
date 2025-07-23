import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

import { ChoiceList } from "./choiceList";

describe("ChoiceList", () => {
  const defaultProps = {
    title: "Test Choice List",
    choices: [
      { label: "Option 1", value: "option1" },
      { label: "Option 2", value: "option2" },
      { label: "Option 3", value: "option3" },
    ],
    selected: [],
    onChange: vi.fn(),
  };

  it("renders with title", () => {
    render(<ChoiceList {...defaultProps} />);
    expect(screen.getByText("Test Choice List")).toBeInTheDocument();
  });

  it("hides title when titleHidden is true", () => {
    render(<ChoiceList {...defaultProps} titleHidden />);
    expect(screen.queryByText("Test Choice List")).not.toBeInTheDocument();
  });

  it("renders all choices", () => {
    render(<ChoiceList {...defaultProps} />);
    expect(screen.getByText("Option 1")).toBeInTheDocument();
    expect(screen.getByText("Option 2")).toBeInTheDocument();
    expect(screen.getByText("Option 3")).toBeInTheDocument();
  });

  it("renders as radio buttons by default", () => {
    render(<ChoiceList {...defaultProps} />);
    const inputs = screen.getAllByRole("radio");
    expect(inputs).toHaveLength(3);
  });

  it("renders as checkboxes when allowMultiple is true", () => {
    render(<ChoiceList {...defaultProps} allowMultiple />);
    const inputs = screen.getAllByRole("checkbox");
    expect(inputs).toHaveLength(3);
  });

  it("shows selected choices", () => {
    render(<ChoiceList {...defaultProps} selected={["option1", "option2"]} />);
    const option1 = screen.getByDisplayValue("option1");
    const option2 = screen.getByDisplayValue("option2");
    const option3 = screen.getByDisplayValue("option3");

    expect(option1).toBeChecked();
    expect(option2).toBeChecked();
    expect(option3).not.toBeChecked();
  });

  it("calls onChange when a choice is selected (single selection)", () => {
    const onChange = vi.fn();
    render(<ChoiceList {...defaultProps} onChange={onChange} />);

    const option1 = screen.getByDisplayValue("option1");
    fireEvent.click(option1);

    expect(onChange).toHaveBeenCalledWith(["option1"], "choiceList");
  });

  it("calls onChange when a choice is selected (multiple selection)", () => {
    const onChange = vi.fn();
    render(
      <ChoiceList
        {...defaultProps}
        allowMultiple
        selected={["option1"]}
        onChange={onChange}
      />
    );

    const option2 = screen.getByDisplayValue("option2");
    fireEvent.click(option2);

    expect(onChange).toHaveBeenCalledWith(["option1", "option2"], "choiceList");
  });

  it("calls onChange when a choice is deselected (multiple selection)", () => {
    const onChange = vi.fn();
    render(
      <ChoiceList
        {...defaultProps}
        allowMultiple
        selected={["option1", "option2"]}
        onChange={onChange}
      />
    );

    const option1 = screen.getByDisplayValue("option1");
    fireEvent.click(option1);

    expect(onChange).toHaveBeenCalledWith(["option2"], "choiceList");
  });

  it("disables all choices when disabled is true", () => {
    render(<ChoiceList {...defaultProps} disabled />);
    const inputs = screen.getAllByRole("radio");
    inputs.forEach(input => {
      expect(input).toBeDisabled();
    });
  });

  it("disables individual choices when choice.disabled is true", () => {
    const choices = [
      { label: "Option 1", value: "option1" },
      { label: "Option 2", value: "option2", disabled: true },
      { label: "Option 3", value: "option3" },
    ];

    render(<ChoiceList {...defaultProps} choices={choices} />);

    const option1 = screen.getByDisplayValue("option1");
    const option2 = screen.getByDisplayValue("option2");
    const option3 = screen.getByDisplayValue("option3");

    expect(option1).not.toBeDisabled();
    expect(option2).toBeDisabled();
    expect(option3).not.toBeDisabled();
  });

  it("renders help text for choices", () => {
    const choices = [
      { label: "Option 1", value: "option1", helpText: "Help for option 1" },
      { label: "Option 2", value: "option2" },
    ];

    render(<ChoiceList {...defaultProps} choices={choices} />);

    expect(screen.getByText("Help for option 1")).toBeInTheDocument();
    expect(screen.queryByText("Help for option 2")).not.toBeInTheDocument();
  });

  it("renders error message", () => {
    render(<ChoiceList {...defaultProps} error="This is an error" />);
    expect(screen.getByText("This is an error")).toBeInTheDocument();
  });

  it("uses custom name prop", () => {
    const onChange = vi.fn();
    render(
      <ChoiceList {...defaultProps} name="customName" onChange={onChange} />
    );

    const option1 = screen.getByDisplayValue("option1");
    fireEvent.click(option1);

    expect(onChange).toHaveBeenCalledWith(["option1"], "customName");
  });

  it("applies magic tone styling", () => {
    const { container } = render(<ChoiceList {...defaultProps} tone="magic" />);
    const fieldset = container.querySelector("fieldset");
    expect(fieldset).toHaveClass("border-l-4", "border-purple-500", "pl-4");
  });

  it("does not call onChange when disabled", () => {
    const onChange = vi.fn();
    render(<ChoiceList {...defaultProps} disabled onChange={onChange} />);

    const option1 = screen.getByDisplayValue("option1");
    fireEvent.click(option1);

    expect(onChange).not.toHaveBeenCalled();
  });

  describe("Clear button", () => {
    it("does not show Clear button when no selections are made", () => {
      render(<ChoiceList {...defaultProps} selected={[]} />);
      expect(screen.queryByText("Clear")).not.toBeInTheDocument();
    });

    it("shows Clear button when selections are made", () => {
      render(<ChoiceList {...defaultProps} selected={["option1"]} />);
      expect(screen.getByText("Clear")).toBeInTheDocument();
    });

    it("clears all selections when Clear button is clicked", () => {
      const onChange = vi.fn();
      render(
        <ChoiceList
          {...defaultProps}
          selected={["option1", "option2"]}
          allowMultiple
          onChange={onChange}
        />
      );

      const clearButton = screen.getByText("Clear");
      fireEvent.click(clearButton);

      expect(onChange).toHaveBeenCalledWith([], "choiceList");
    });

    it("clears single selection when Clear button is clicked", () => {
      const onChange = vi.fn();
      render(
        <ChoiceList
          {...defaultProps}
          selected={["option1"]}
          onChange={onChange}
        />
      );

      const clearButton = screen.getByText("Clear");
      fireEvent.click(clearButton);

      expect(onChange).toHaveBeenCalledWith([], "choiceList");
    });

    it("does not call onChange when Clear button is clicked and component is disabled", () => {
      const onChange = vi.fn();
      render(
        <ChoiceList
          {...defaultProps}
          selected={["option1"]}
          disabled
          onChange={onChange}
        />
      );

      const clearButton = screen.getByText("Clear");
      fireEvent.click(clearButton);

      expect(onChange).not.toHaveBeenCalled();
    });

    it("Clear button is disabled when component is disabled", () => {
      render(<ChoiceList {...defaultProps} selected={["option1"]} disabled />);

      const clearButton = screen.getByRole("button", { name: "Clear" });
      expect(clearButton).toBeDisabled();
    });

    it("uses custom name prop when clearing selections", () => {
      const onChange = vi.fn();
      render(
        <ChoiceList
          {...defaultProps}
          selected={["option1"]}
          name="customName"
          onChange={onChange}
        />
      );

      const clearButton = screen.getByText("Clear");
      fireEvent.click(clearButton);

      expect(onChange).toHaveBeenCalledWith([], "customName");
    });
  });
});

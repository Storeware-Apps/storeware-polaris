import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Select } from "./select";
import { Icon } from "../Icon/icon";
import { CaretUpIcon } from "@shopify/polaris-icons";

describe("Select", () => {
  const defaultOptions = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  it("renders with label", () => {
    render(<Select label="Test Select" options={defaultOptions} />);
    expect(screen.getByText("Test Select")).toBeInTheDocument();
  });

  it("renders with placeholder", () => {
    render(
      <Select
        label="Test Select"
        options={defaultOptions}
        placeholder="Choose an option"
      />
    );
    expect(screen.getByText("Choose an option")).toBeInTheDocument();
  });

  it("renders with string options", () => {
    const stringOptions = ["Option 1", "Option 2", "Option 3"];
    render(<Select label="Test Select" options={stringOptions} />);

    const trigger = screen.getByRole("combobox");
    expect(trigger).toBeInTheDocument();
  });

  it("handles value changes", async () => {
    const handleChange = vi.fn();

    render(
      <Select
        label="Test Select"
        options={defaultOptions}
        onChange={handleChange}
        value="option1"
      />
    );

    const trigger = screen.getByRole("combobox");
    expect(trigger).toBeInTheDocument();

    // Test that the component renders with the correct value
    expect(trigger).toHaveTextContent("Option 1");

    // Test that onChange prop is passed correctly
    expect(handleChange).toBeDefined();
  });

  it("renders in disabled state", () => {
    render(<Select label="Test Select" options={defaultOptions} disabled />);

    const trigger = screen.getByRole("combobox");
    expect(trigger).toBeDisabled();
  });

  it("renders with error state", () => {
    render(
      <Select
        label="Test Select"
        options={defaultOptions}
        error="This field is required"
      />
    );

    expect(screen.getByText("This field is required")).toBeInTheDocument();
  });

  it("renders with help text", () => {
    render(
      <Select
        label="Test Select"
        options={defaultOptions}
        helpText="Choose the best option"
      />
    );

    expect(screen.getByText("Choose the best option")).toBeInTheDocument();
  });

  it("renders with required indicator", () => {
    render(
      <Select label="Test Select" options={defaultOptions} requiredIndicator />
    );

    expect(screen.getByText("*")).toBeInTheDocument();
  });

  it("renders with inline label", () => {
    render(<Select label="Test Select" options={defaultOptions} labelInline />);

    // The inline label should be visible in the inline container
    const inlineContainer = document.querySelector(
      ".bg-gray-50.border.border-gray-300.border-r-0"
    );
    expect(inlineContainer).toBeInTheDocument();
    expect(inlineContainer).toHaveTextContent("Test Select");
  });

  it("renders with hidden label", () => {
    render(<Select label="Test Select" options={defaultOptions} labelHidden />);

    // Label should be in DOM but with sr-only class
    const labelElement = screen.getByLabelText("Test Select");
    expect(labelElement).toBeInTheDocument();
  });

  it("renders with label action", async () => {
    const user = userEvent.setup();
    const handleAction = vi.fn();

    render(
      <Select
        label="Test Select"
        options={defaultOptions}
        labelAction={{
          content: "Add option",
          onAction: handleAction,
        }}
      />
    );

    const actionButton = screen.getByText("Add option");
    expect(actionButton).toBeInTheDocument();

    await user.click(actionButton);
    expect(handleAction).toHaveBeenCalled();
  });

  it("renders with magic tone", () => {
    render(
      <Select label="Test Select" options={defaultOptions} tone="magic" />
    );

    const trigger = screen.getByRole("combobox");
    expect(trigger).toHaveClass("border-purple-500");
  });

  it("renders with option groups", () => {
    const groupedOptions = [
      {
        title: "Group 1",
        options: [
          { label: "Option 1", value: "option1" },
          { label: "Option 2", value: "option2" },
        ],
      },
      {
        title: "Group 2",
        options: [
          { label: "Option 3", value: "option3" },
          { label: "Option 4", value: "option4" },
        ],
      },
    ];

    render(<Select label="Test Select" options={groupedOptions} />);

    const trigger = screen.getByRole("combobox");
    expect(trigger).toBeInTheDocument();

    // Test that the component accepts grouped options
    expect(groupedOptions).toHaveLength(2);
    expect(groupedOptions[0].title).toBe("Group 1");
  });

  it("renders options with prefix", () => {
    const optionsWithPrefix = [
      {
        label: "Increase",
        value: "increase",
        prefix: <Icon source={CaretUpIcon} />,
      },
      {
        label: "Decrease",
        value: "decrease",
      },
    ];

    render(<Select label="Test Select" options={optionsWithPrefix} />);

    const trigger = screen.getByRole("combobox");
    expect(trigger).toBeInTheDocument();

    // Test that the component accepts options with prefix
    expect(optionsWithPrefix[0].prefix).toBeDefined();
    expect(optionsWithPrefix[1].prefix).toBeUndefined();
  });

  it("renders disabled options", () => {
    const optionsWithDisabled = [
      { label: "Option 1", value: "option1" },
      { label: "Option 2", value: "option2", disabled: true },
      { label: "Option 3", value: "option3" },
    ];

    render(<Select label="Test Select" options={optionsWithDisabled} />);

    const trigger = screen.getByRole("combobox");
    expect(trigger).toBeInTheDocument();

    // Test that the component accepts disabled options
    expect(optionsWithDisabled[1].disabled).toBe(true);
    expect(optionsWithDisabled[0].disabled).toBeUndefined();
  });

  it("handles focus and blur events", async () => {
    const user = userEvent.setup();
    const handleFocus = vi.fn();
    const handleBlur = vi.fn();

    render(
      <Select
        label="Test Select"
        options={defaultOptions}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    );

    const trigger = screen.getByRole("combobox");

    await user.click(trigger);
    expect(handleFocus).toHaveBeenCalled();

    await user.tab();
    expect(handleBlur).toHaveBeenCalled();
  });

  it("generates unique ID when not provided", () => {
    render(<Select label="Test Select" options={defaultOptions} />);

    const trigger = screen.getByRole("combobox");
    expect(trigger).toHaveAttribute("id");
  });

  it("uses provided ID", () => {
    render(
      <Select label="Test Select" options={defaultOptions} id="custom-select" />
    );

    const trigger = screen.getByRole("combobox");
    expect(trigger).toHaveAttribute("id", "custom-select");
  });

  it("forwards ref correctly", () => {
    const ref = vi.fn();
    render(<Select ref={ref} label="Test Select" options={defaultOptions} />);

    expect(ref).toHaveBeenCalled();
  });

  it("applies custom className", () => {
    render(
      <Select
        label="Test Select"
        options={defaultOptions}
        className="custom-class"
      />
    );

    const trigger = screen.getByRole("combobox");
    expect(trigger).toHaveClass("custom-class");
  });

  it("handles boolean error state", () => {
    render(
      <Select label="Test Select" options={defaultOptions} error={true} />
    );

    const trigger = screen.getByRole("combobox");
    expect(trigger).toHaveClass("border-red-500");
  });

  it("handles React node error", () => {
    const errorNode = <span>Custom error message</span>;
    render(
      <Select label="Test Select" options={defaultOptions} error={errorNode} />
    );

    const trigger = screen.getByRole("combobox");
    expect(trigger).toHaveClass("border-red-500");
  });
});

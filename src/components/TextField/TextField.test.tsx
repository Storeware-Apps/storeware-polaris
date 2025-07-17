import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TextField } from "./TextField";

describe("TextField", () => {
  describe("Basic Functionality", () => {
    it("renders with label", () => {
      render(<TextField label="Test Label" autoComplete="off" />);
      expect(screen.getByLabelText("Test Label")).toBeInTheDocument();
    });

    it("renders with placeholder", () => {
      render(
        <TextField
          label="Test Label"
          placeholder="Enter text"
          autoComplete="off"
        />
      );
      expect(screen.getByPlaceholderText("Enter text")).toBeInTheDocument();
    });

    it("renders with initial value", () => {
      render(
        <TextField
          label="Test Label"
          value="Initial value"
          autoComplete="off"
        />
      );
      expect(screen.getByDisplayValue("Initial value")).toBeInTheDocument();
    });

    it("calls onChange when value changes", async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();

      render(
        <TextField
          label="Test Label"
          onChange={handleChange}
          autoComplete="off"
        />
      );

      const input = screen.getByLabelText("Test Label");
      await user.type(input, "test");

      expect(handleChange).toHaveBeenCalledWith("t", expect.any(String));
    });
  });

  describe("Input Types", () => {
    it("renders email input", () => {
      render(<TextField label="Email" type="email" autoComplete="email" />);
      expect(screen.getByLabelText("Email")).toHaveAttribute("type", "email");
    });

    it("renders password input", () => {
      render(
        <TextField
          label="Password"
          type="password"
          autoComplete="current-password"
        />
      );
      expect(screen.getByLabelText("Password")).toHaveAttribute(
        "type",
        "password"
      );
    });

    it("renders number input", () => {
      render(<TextField label="Number" type="number" autoComplete="off" />);
      expect(screen.getByLabelText("Number")).toHaveAttribute("type", "number");
    });

    it("renders currency as text input", () => {
      render(<TextField label="Price" type="currency" autoComplete="off" />);
      expect(screen.getByLabelText("Price")).toHaveAttribute("type", "text");
    });
  });

  describe("Multiline", () => {
    it("renders textarea when multiline is true", () => {
      render(<TextField label="Description" multiline autoComplete="off" />);
      expect(screen.getByLabelText("Description").tagName).toBe("TEXTAREA");
    });

    it("renders textarea with specified rows", () => {
      render(
        <TextField label="Description" multiline={5} autoComplete="off" />
      );
      expect(screen.getByLabelText("Description")).toHaveAttribute("rows", "5");
    });
  });

  describe("States", () => {
    it("renders disabled state", () => {
      render(<TextField label="Test Label" disabled autoComplete="off" />);
      expect(screen.getByLabelText("Test Label")).toBeDisabled();
    });

    it("renders readonly state", () => {
      render(<TextField label="Test Label" readOnly autoComplete="off" />);
      expect(screen.getByLabelText("Test Label")).toHaveAttribute("readonly");
    });

    it("renders error state", () => {
      render(
        <TextField
          label="Test Label"
          error="This field is required"
          autoComplete="off"
        />
      );
      expect(screen.getByText("This field is required")).toBeInTheDocument();
      expect(screen.getByLabelText("Test Label")).toHaveAttribute(
        "aria-invalid",
        "true"
      );
    });

    it("renders loading state", () => {
      render(<TextField label="Test Label" loading autoComplete="off" />);
      // Loading spinner should be present
      expect(document.querySelector(".animate-spin")).toBeInTheDocument();
    });
  });

  describe("Help Text", () => {
    it("renders help text", () => {
      render(
        <TextField
          label="Test Label"
          helpText="This is help text"
          autoComplete="off"
        />
      );
      expect(screen.getByText("This is help text")).toBeInTheDocument();
    });

    it("associates help text with input via aria-describedby", () => {
      render(
        <TextField
          label="Test Label"
          helpText="This is help text"
          autoComplete="off"
        />
      );
      const input = screen.getByLabelText("Test Label");
      const helpTextId = input.getAttribute("aria-describedby");
      expect(helpTextId).toBeTruthy();
      expect(document.getElementById(helpTextId!)).toHaveTextContent(
        "This is help text"
      );
    });
  });

  describe("Character Count", () => {
    it("shows character count when enabled", () => {
      render(
        <TextField
          label="Test Label"
          value="test"
          showCharacterCount
          autoComplete="off"
        />
      );
      expect(screen.getByText("4")).toBeInTheDocument();
    });

    it("shows character count with max length", () => {
      render(
        <TextField
          label="Test Label"
          value="test"
          maxLength={10}
          showCharacterCount
          autoComplete="off"
        />
      );
      expect(screen.getByText("4/10")).toBeInTheDocument();
    });
  });

  describe("Clear Button", () => {
    it("shows clear button when enabled and has value", () => {
      render(
        <TextField
          label="Test Label"
          value="test"
          clearButton
          autoComplete="off"
        />
      );
      expect(screen.getByLabelText("Clear")).toBeInTheDocument();
    });

    it("hides clear button when no value", () => {
      render(
        <TextField label="Test Label" value="" clearButton autoComplete="off" />
      );
      expect(screen.queryByLabelText("Clear")).not.toBeInTheDocument();
    });

    it("calls onClearButtonClick when clear button is clicked", async () => {
      const user = userEvent.setup();
      const handleClearButtonClick = vi.fn();

      render(
        <TextField
          label="Test Label"
          value="test"
          clearButton
          onClearButtonClick={handleClearButtonClick}
          autoComplete="off"
        />
      );

      await user.click(screen.getByLabelText("Clear"));
      expect(handleClearButtonClick).toHaveBeenCalledWith(expect.any(String));
    });
  });

  describe("Prefix and Suffix", () => {
    it("renders prefix", () => {
      render(<TextField label="Price" prefix="$" autoComplete="off" />);
      expect(screen.getByText("$")).toBeInTheDocument();
    });

    it("renders suffix", () => {
      render(<TextField label="Price" suffix="USD" autoComplete="off" />);
      expect(screen.getByText("USD")).toBeInTheDocument();
    });
  });

  describe("Required Indicator", () => {
    it("shows required indicator when enabled", () => {
      render(
        <TextField label="Test Label" requiredIndicator autoComplete="off" />
      );
      const label = screen.getByText("Test Label").closest("label");
      expect(label).toHaveClass("after:content-['*']");
    });
  });

  describe("Focus Handling", () => {
    it("calls onFocus when input is focused", async () => {
      const user = userEvent.setup();
      const handleFocus = vi.fn();

      render(
        <TextField
          label="Test Label"
          onFocus={handleFocus}
          autoComplete="off"
        />
      );

      await user.click(screen.getByLabelText("Test Label"));
      expect(handleFocus).toHaveBeenCalled();
    });

    it("calls onBlur when input loses focus", async () => {
      const user = userEvent.setup();
      const handleBlur = vi.fn();

      render(
        <div>
          <TextField
            label="Test Label"
            onBlur={handleBlur}
            autoComplete="off"
          />
          <button>Other element</button>
        </div>
      );

      const input = screen.getByLabelText("Test Label");
      await user.click(input);
      await user.click(screen.getByText("Other element"));

      expect(handleBlur).toHaveBeenCalled();
    });
  });

  describe("Accessibility", () => {
    it("has proper aria-labelledby", () => {
      render(<TextField label="Test Label" autoComplete="off" />);
      const input = screen.getByLabelText("Test Label");
      const labelledBy = input.getAttribute("aria-labelledby");
      expect(labelledBy).toBeTruthy();
    });

    it("has proper aria-describedby with error", () => {
      render(
        <TextField
          label="Test Label"
          error="Error message"
          autoComplete="off"
        />
      );
      const input = screen.getByLabelText("Test Label");
      const describedBy = input.getAttribute("aria-describedby");
      expect(describedBy).toContain("Error");
    });

    it("has proper aria-required when required", () => {
      render(
        <TextField label="Test Label" requiredIndicator autoComplete="off" />
      );
      expect(screen.getByLabelText("Test Label")).toHaveAttribute(
        "aria-required",
        "true"
      );
    });
  });

  describe("Styling Variants", () => {
    it("applies slim size class", () => {
      render(<TextField label="Test Label" size="slim" autoComplete="off" />);
      expect(screen.getByLabelText("Test Label")).toHaveClass("h-7");
    });

    it("applies borderless variant class", () => {
      render(
        <TextField label="Test Label" variant="borderless" autoComplete="off" />
      );
      expect(screen.getByLabelText("Test Label")).toHaveClass("border-0");
    });

    it("applies magic tone class", () => {
      render(<TextField label="Test Label" tone="magic" autoComplete="off" />);
      expect(screen.getByLabelText("Test Label")).toHaveClass(
        "text-[rgb(128,81,255)]"
      );
    });

    it("applies monospaced font class", () => {
      render(<TextField label="Test Label" monospaced autoComplete="off" />);
      expect(screen.getByLabelText("Test Label")).toHaveClass("font-mono");
    });
  });
});

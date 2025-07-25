import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { ContextualSaveBar } from "./contextualSaveBar";
import { Button } from "../Button/button";

describe("ContextualSaveBar", () => {
  beforeEach(() => {
    // Clear all mocks before each test
    vi.clearAllMocks();
  });

  it("renders with correct id", () => {
    render(
      <ContextualSaveBar id="test-save-bar" open>
        <Button>Save</Button>
        <Button variant="primary">Discard</Button>
      </ContextualSaveBar>
    );

    const saveBar = document.getElementById("test-save-bar");
    expect(saveBar).toBeInTheDocument();
  });

  it("shows when open prop is true", () => {
    render(
      <ContextualSaveBar id="test-save-bar" open>
        <Button>Save</Button>
        <Button variant="primary">Discard</Button>
      </ContextualSaveBar>
    );

    const saveBar = document.getElementById("test-save-bar");
    expect(saveBar).toHaveClass("translate-y-0");
  });

  it("hides when open prop is false", () => {
    render(
      <ContextualSaveBar id="test-save-bar" open={false}>
        <Button>Save</Button>
        <Button variant="primary">Discard</Button>
      </ContextualSaveBar>
    );

    const saveBar = document.getElementById("test-save-bar");
    expect(saveBar).toHaveClass("-translate-y-full");
  });

  it("displays 'Unsaved changes' text", () => {
    render(
      <ContextualSaveBar id="test-save-bar" open>
        <Button>Save</Button>
        <Button variant="primary">Discard</Button>
      </ContextualSaveBar>
    );

    expect(screen.getByText("Unsaved changes")).toBeInTheDocument();
  });

  it("renders children buttons", () => {
    render(
      <ContextualSaveBar id="test-save-bar" open>
        <Button>Save</Button>
        <Button variant="primary">Discard</Button>
      </ContextualSaveBar>
    );

    expect(screen.getByRole("button", { name: "Save" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Discard" })).toBeInTheDocument();
  });

  it("calls onClick handlers for buttons", () => {
    const handleSave = vi.fn();
    const handleDiscard = vi.fn();

    render(
      <ContextualSaveBar id="test-save-bar" open>
        <Button onClick={handleSave}>Save</Button>
        <Button variant="primary" onClick={handleDiscard}>
          Discard
        </Button>
      </ContextualSaveBar>
    );

    fireEvent.click(screen.getByRole("button", { name: "Save" }));
    fireEvent.click(screen.getByRole("button", { name: "Discard" }));

    expect(handleSave).toHaveBeenCalledTimes(1);
    expect(handleDiscard).toHaveBeenCalledTimes(1);
  });

  it("shows confirmation dialog when discardConfirmation is true", async () => {
    const handleDiscard = vi.fn();

    render(
      <ContextualSaveBar id="test-save-bar" open discardConfirmation>
        <Button>Save</Button>
        <Button variant="primary" onClick={handleDiscard}>
          Discard
        </Button>
      </ContextualSaveBar>
    );

    fireEvent.click(screen.getByRole("button", { name: "Discard" }));

    await waitFor(() => {
      expect(screen.getByRole("dialog")).toBeInTheDocument();
      expect(
        screen.getByText(
          "Are you sure you want to discard your changes? This action cannot be undone."
        )
      ).toBeInTheDocument();
    });

    // Original handler should not be called yet
    expect(handleDiscard).not.toHaveBeenCalled();
  });

  it("calls discard handler when confirmation is accepted", async () => {
    const handleDiscard = vi.fn();

    render(
      <ContextualSaveBar id="test-save-bar" open discardConfirmation>
        <Button>Save</Button>
        <Button variant="primary" onClick={handleDiscard}>
          Discard
        </Button>
      </ContextualSaveBar>
    );

    // Click discard button
    fireEvent.click(screen.getByRole("button", { name: "Discard" }));

    // Wait for confirmation dialog
    await waitFor(() => {
      expect(screen.getByRole("dialog")).toBeInTheDocument();
    });

    // Click confirm button in dialog
    const confirmButtons = screen.getAllByText("Discard changes");
    const confirmButton = confirmButtons
      .find(button => button.tagName === "SPAN")
      ?.closest("button");
    fireEvent.click(confirmButton!);

    // Original handler should now be called
    await waitFor(() => {
      expect(handleDiscard).toHaveBeenCalledTimes(1);
    });
  });

  it("does not call discard handler when confirmation is cancelled", async () => {
    const handleDiscard = vi.fn();

    render(
      <ContextualSaveBar id="test-save-bar" open discardConfirmation>
        <Button>Save</Button>
        <Button variant="primary" onClick={handleDiscard}>
          Discard
        </Button>
      </ContextualSaveBar>
    );

    // Click discard button
    fireEvent.click(screen.getByRole("button", { name: "Discard" }));

    // Wait for confirmation dialog
    await waitFor(() => {
      expect(screen.getByRole("dialog")).toBeInTheDocument();
    });

    // Click cancel button in dialog
    fireEvent.click(screen.getByRole("button", { name: "Cancel" }));

    // Original handler should not be called
    expect(handleDiscard).not.toHaveBeenCalled();
  });

  it("does not show confirmation dialog when discardConfirmation is false", () => {
    const handleDiscard = vi.fn();

    render(
      <ContextualSaveBar id="test-save-bar" open discardConfirmation={false}>
        <Button>Save</Button>
        <Button variant="primary" onClick={handleDiscard}>
          Discard
        </Button>
      </ContextualSaveBar>
    );

    fireEvent.click(screen.getByRole("button", { name: "Discard" }));

    // No confirmation dialog should appear
    expect(screen.queryByText("Discard changes")).not.toBeInTheDocument();
    // Original handler should be called immediately
    expect(handleDiscard).toHaveBeenCalledTimes(1);
  });

  it("applies custom className", () => {
    render(
      <ContextualSaveBar id="test-save-bar" open className="custom-class">
        <Button>Save</Button>
        <Button variant="primary">Discard</Button>
      </ContextualSaveBar>
    );

    const saveBar = document.getElementById("test-save-bar");
    expect(saveBar).toHaveClass("custom-class");
  });

  it("handles empty children gracefully", () => {
    render(<ContextualSaveBar id="test-save-bar" open />);

    const saveBar = document.getElementById("test-save-bar");
    expect(saveBar).toBeInTheDocument();
    expect(screen.getByText("Unsaved changes")).toBeInTheDocument();
  });

  it("identifies primary button correctly", () => {
    const handleSave = vi.fn();
    const handleDiscard = vi.fn();

    render(
      <ContextualSaveBar id="test-save-bar" open discardConfirmation>
        <Button onClick={handleSave}>Save</Button>
        <Button variant="primary" onClick={handleDiscard}>
          Discard
        </Button>
      </ContextualSaveBar>
    );

    // Save button (non-primary) should work normally (no confirmation)
    fireEvent.click(screen.getByRole("button", { name: "Save" }));
    expect(handleSave).toHaveBeenCalledTimes(1);

    // Primary button (discard) should show confirmation
    fireEvent.click(screen.getByRole("button", { name: "Discard" }));
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("handles multiple primary buttons", async () => {
    const handleDiscard1 = vi.fn();
    const handleDiscard2 = vi.fn();

    render(
      <ContextualSaveBar id="test-save-bar" open discardConfirmation>
        <Button>Save</Button>
        <Button variant="primary" onClick={handleDiscard1}>
          Discard 1
        </Button>
        <Button variant="primary" onClick={handleDiscard2}>
          Discard 2
        </Button>
      </ContextualSaveBar>
    );

    // Click first discard button
    fireEvent.click(screen.getByRole("button", { name: "Discard 1" }));

    await waitFor(() => {
      expect(screen.getByRole("dialog")).toBeInTheDocument();
    });

    // Confirm
    const confirmButtons = screen.getAllByText("Discard changes");
    const confirmButton = confirmButtons
      .find(button => button.tagName === "SPAN")
      ?.closest("button");
    fireEvent.click(confirmButton!);

    await waitFor(() => {
      expect(handleDiscard1).toHaveBeenCalledTimes(1);
    });
    expect(handleDiscard2).not.toHaveBeenCalled();
  });
});

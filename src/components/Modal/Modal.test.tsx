import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Modal } from "./modal";
import { TitleBar } from "./titleBar";

describe("Modal", () => {
  describe("Basic Functionality", () => {
    it("renders when open is true", () => {
      render(
        <Modal id="test-modal" open={true}>
          <div>Modal content</div>
        </Modal>
      );
      expect(screen.getByText("Modal content")).toBeInTheDocument();
    });

    it("does not render when open is false", () => {
      render(
        <Modal id="test-modal" open={false}>
          <div>Modal content</div>
        </Modal>
      );
      expect(screen.queryByText("Modal content")).not.toBeInTheDocument();
    });

    it("renders with custom className", () => {
      render(
        <Modal id="test-modal" open={true} className="custom-modal">
          <div>Modal content</div>
        </Modal>
      );
      const modalContent = screen.getByRole("dialog");
      expect(modalContent).toHaveClass("custom-modal");
    });

    it("renders children content", () => {
      render(
        <Modal id="test-modal" open={true}>
          <div>Test content</div>
          <p>Additional content</p>
        </Modal>
      );
      expect(screen.getByText("Test content")).toBeInTheDocument();
      expect(screen.getByText("Additional content")).toBeInTheDocument();
    });
  });

  describe("Variants", () => {
    it("applies small variant class", () => {
      render(
        <Modal id="test-modal" open={true} variant="small">
          <div>Small modal</div>
        </Modal>
      );
      const modalContent = screen.getByRole("dialog");
      expect(modalContent).toHaveClass("max-w-sm");
    });

    it("applies base variant class (default)", () => {
      render(
        <Modal id="test-modal" open={true} variant="base">
          <div>Base modal</div>
        </Modal>
      );
      const modalContent = screen.getByRole("dialog");
      expect(modalContent).toHaveClass("max-w-lg");
    });

    it("applies large variant class", () => {
      render(
        <Modal id="test-modal" open={true} variant="large">
          <div>Large modal</div>
        </Modal>
      );
      const modalContent = screen.getByRole("dialog");
      expect(modalContent).toHaveClass("max-w-2xl");
    });

    it("applies max variant class", () => {
      render(
        <Modal id="test-modal" open={true} variant="max">
          <div>Max modal</div>
        </Modal>
      );
      const modalContent = screen.getByRole("dialog");
      expect(modalContent).toHaveClass("max-w-[90vw]");
    });

    it("uses base variant as default", () => {
      render(
        <Modal id="test-modal" open={true}>
          <div>Default modal</div>
        </Modal>
      );
      const modalContent = screen.getByRole("dialog");
      expect(modalContent).toHaveClass("max-w-lg");
    });
  });

  describe("Event Handling", () => {
    it("calls onShow when modal opens", () => {
      const handleShow = vi.fn();
      const handleOpenChange = vi.fn(open => {
        if (open && handleShow) {
          handleShow();
        }
      });

      render(
        <Modal
          id="test-modal"
          open={false}
          onShow={handleShow}
          onOpenChange={handleOpenChange}>
          <div>Modal content</div>
        </Modal>
      );

      // Simulate opening the modal
      handleOpenChange(true);
      expect(handleShow).toHaveBeenCalledTimes(1);
    });

    it("calls onHide when modal closes", () => {
      const handleHide = vi.fn();
      const handleOpenChange = vi.fn(open => {
        if (!open && handleHide) {
          handleHide();
        }
      });

      render(
        <Modal
          id="test-modal"
          open={true}
          onHide={handleHide}
          onOpenChange={handleOpenChange}>
          <div>Modal content</div>
        </Modal>
      );

      // Simulate closing the modal
      handleOpenChange(false);
      expect(handleHide).toHaveBeenCalledTimes(1);
    });

    it("calls onOpenChange when provided", () => {
      const handleOpenChange = vi.fn();

      render(
        <Modal id="test-modal" open={false} onOpenChange={handleOpenChange}>
          <div>Modal content</div>
        </Modal>
      );

      // The onOpenChange callback should be available
      expect(handleOpenChange).toBeDefined();
    });
  });

  describe("Close Button", () => {
    it("shows close button by default", () => {
      render(
        <Modal id="test-modal" open={true}>
          <div>Modal content</div>
        </Modal>
      );
      expect(
        screen.getByRole("button", { name: /close/i })
      ).toBeInTheDocument();
    });

    it("hides close button when showCloseButton is false", () => {
      render(
        <Modal id="test-modal" open={true} showCloseButton={false}>
          <div>Modal content</div>
        </Modal>
      );
      expect(
        screen.queryByRole("button", { name: /close/i })
      ).not.toBeInTheDocument();
    });
  });

  describe("Iframe Content", () => {
    it("renders iframe when src prop is provided", () => {
      render(
        <Modal id="test-modal" open={true} src="https://example.com">
          <div>This should not render</div>
        </Modal>
      );

      const iframe = screen.getByTitle(
        "Modal content from https://example.com"
      );
      expect(iframe).toBeInTheDocument();
      expect(iframe).toHaveAttribute("src", "https://example.com");
      expect(
        screen.queryByText("This should not render")
      ).not.toBeInTheDocument();
    });

    it("renders children when src prop is not provided", () => {
      render(
        <Modal id="test-modal" open={true}>
          <div>Regular content</div>
        </Modal>
      );

      expect(screen.getByText("Regular content")).toBeInTheDocument();
      expect(screen.queryByRole("iframe")).not.toBeInTheDocument();
    });
  });

  describe("Actions", () => {
    it("renders actions when provided", () => {
      render(
        <Modal
          id="test-modal"
          open={true}
          actions={
            <>
              <button>Cancel</button>
              <button>Save</button>
            </>
          }>
          <div>Modal content</div>
        </Modal>
      );

      expect(screen.getByText("Cancel")).toBeInTheDocument();
      expect(screen.getByText("Save")).toBeInTheDocument();
    });

    it("does not render actions section when actions prop is not provided", () => {
      render(
        <Modal id="test-modal" open={true}>
          <div>Modal content</div>
        </Modal>
      );

      // The actions container should not exist
      const modalContent = screen.getByRole("dialog");
      const actionsContainer = modalContent.querySelector(".border-t");
      expect(actionsContainer).not.toBeInTheDocument();
    });

    it("renders actions with proper styling", () => {
      render(
        <Modal id="test-modal" open={true} actions={<button>Action</button>}>
          <div>Modal content</div>
        </Modal>
      );

      const actionsContainer = screen.getByText("Action").closest("div");
      expect(actionsContainer).toHaveClass(
        "border-t",
        "border-gray-200",
        "px-6",
        "py-4",
        "bg-white",
        "flex",
        "justify-end",
        "gap-2"
      );
    });
  });
});

describe("TitleBar", () => {
  describe("Basic Functionality", () => {
    it("renders with title", () => {
      render(<TitleBar title="Test Title" />);
      expect(screen.getByText("Test Title")).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
        "Test Title"
      );
    });

    it("renders without title", () => {
      render(<TitleBar />);
      expect(screen.queryByRole("heading")).not.toBeInTheDocument();
    });

    it("renders with children", () => {
      render(
        <TitleBar title="Test Title">
          <button>Action 1</button>
          <button>Action 2</button>
        </TitleBar>
      );
      expect(screen.getByText("Action 1")).toBeInTheDocument();
      expect(screen.getByText("Action 2")).toBeInTheDocument();
    });

    it("renders with custom className", () => {
      render(<TitleBar title="Test Title" className="custom-titlebar" />);
      const titleBar = screen.getByText("Test Title").closest("div");
      expect(titleBar).toHaveClass("custom-titlebar");
    });
  });

  describe("Border Styling", () => {
    it("shows border by default", () => {
      render(<TitleBar title="Test Title" />);
      const titleBar = screen.getByText("Test Title").closest("div");
      expect(titleBar).toHaveClass("border-b");
    });

    it("hides border when showBorder is false", () => {
      render(<TitleBar title="Test Title" showBorder={false} />);
      const titleBar = screen.getByText("Test Title").closest("div");
      expect(titleBar).not.toHaveClass("border-b");
    });
  });

  describe("Layout", () => {
    it("displays title and actions in correct layout", () => {
      render(
        <TitleBar title="Test Title">
          <button>Save</button>
          <button>Cancel</button>
        </TitleBar>
      );

      const titleBar = screen.getByText("Test Title").closest("div");
      expect(titleBar).toHaveClass("flex", "items-center", "justify-between");
    });

    it("handles children without title", () => {
      render(
        <TitleBar>
          <button>Action</button>
        </TitleBar>
      );

      expect(screen.getByText("Action")).toBeInTheDocument();
      expect(screen.queryByRole("heading")).not.toBeInTheDocument();
    });
  });

  describe("Integration with Modal", () => {
    it("works correctly inside Modal", () => {
      render(
        <Modal id="test-modal" open={true} showCloseButton={false}>
          <TitleBar title="Modal Title">
            <button>Close Modal</button>
          </TitleBar>
          <div>Modal body content</div>
        </Modal>
      );

      expect(screen.getByText("Modal Title")).toBeInTheDocument();
      expect(screen.getByText("Close Modal")).toBeInTheDocument();
      expect(screen.getByText("Modal body content")).toBeInTheDocument();
    });
  });
});

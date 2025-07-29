import * as React from "react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render } from "@testing-library/react";
import { Toaster, toast } from "./toast";

// Mock sonner to avoid actual toast rendering in tests
vi.mock("sonner", () => ({
  Toaster: ({
    children,
    ...props
  }: {
    children?: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <div data-testid="sonner-toaster" {...props}>
      {children}
    </div>
  ),
  toast: Object.assign(
    vi.fn(() => "mock-toast-id"),
    {
      dismiss: vi.fn(),
    }
  ),
}));

describe("Toast Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("Toaster Component", () => {
    it("renders without crashing", () => {
      expect(() => render(<Toaster />)).not.toThrow();
    });

    it("accepts className prop", () => {
      expect(() =>
        render(<Toaster className="custom-toaster" />)
      ).not.toThrow();
    });

    it("exports types correctly from component file", () => {
      // This test ensures types are properly exported and can be imported
      const props = {
        theme: "light" as const,
        position: "bottom-center" as const,
        visibleToasts: 3,
        closeButton: true,
      };

      expect(() => render(<Toaster {...props} />)).not.toThrow();
    });

    it("accepts all expected props", () => {
      const props = {
        theme: "dark" as const,
        position: "top-right" as const,
        visibleToasts: 5,
        closeButton: false,
        richColors: true,
        expand: true,
        gap: 16,
        offset: "24px",
      };

      expect(() => render(<Toaster {...props} />)).not.toThrow();
    });
  });

  describe("Toast API", () => {
    it("has show method that returns string ID", () => {
      const id = toast.show("Test message");
      expect(typeof id).toBe("string");
      expect(id).toBe("mock-toast-id");
    });

    it("has hide method that accepts string ID", () => {
      expect(() => toast.hide("test-id")).not.toThrow();
    });

    it("show method accepts message and options", () => {
      const options = {
        duration: 5000,
        action: {
          label: "Undo",
          onClick: vi.fn(),
        },
        onDismiss: vi.fn(),
        dismissible: true,
      };

      const id = toast.show("Test message", options);
      expect(typeof id).toBe("string");
    });

    it("show method works with minimal parameters", () => {
      const id = toast.show("Simple message");
      expect(typeof id).toBe("string");
    });

    it("maintains App Bridge API compatibility", () => {
      // Test that the API matches App Bridge expectations
      expect(typeof toast.show).toBe("function");
      expect(typeof toast.hide).toBe("function");

      // Test method signatures
      const showResult = toast.show("test");
      expect(typeof showResult).toBe("string");

      expect(() => toast.hide("test-id")).not.toThrow();
    });
  });

  describe("ToastOptions Interface", () => {
    it("accepts all expected options", () => {
      const options = {
        duration: 3000,
        action: {
          label: "Action",
          onClick: vi.fn(),
        },
        onDismiss: vi.fn(),
        dismissible: false,
      };

      expect(() => toast.show("Test", options)).not.toThrow();
    });

    it("works with partial options", () => {
      expect(() => toast.show("Test", { duration: 1000 })).not.toThrow();
      expect(() => toast.show("Test", { dismissible: false })).not.toThrow();
      expect(() =>
        toast.show("Test", {
          action: { label: "Test", onClick: vi.fn() },
        })
      ).not.toThrow();
    });

    it("works with no options", () => {
      expect(() => toast.show("Test")).not.toThrow();
    });
  });

  describe("Component Integration", () => {
    it("can be used with other components", () => {
      const TestComponent = () => (
        <div>
          <button onClick={() => toast.show("Button clicked")}>Click me</button>
          <Toaster />
        </div>
      );

      expect(() => render(<TestComponent />)).not.toThrow();
    });

    it("maintains consistent API patterns", () => {
      // Test that the component follows the same patterns as other components
      expect(() => render(<Toaster />)).not.toThrow();
      expect(typeof toast.show).toBe("function");
      expect(typeof toast.hide).toBe("function");
    });
  });

  describe("Error Handling", () => {
    it("handles invalid toast IDs gracefully", () => {
      expect(() => toast.hide("")).not.toThrow();
      expect(() => toast.hide("invalid-id")).not.toThrow();
    });

    it("handles empty messages", () => {
      expect(() => toast.show("")).not.toThrow();
    });

    it("handles invalid options gracefully", () => {
      expect(() =>
        toast.show("Test", {} as Record<string, unknown>)
      ).not.toThrow();
    });
  });
});

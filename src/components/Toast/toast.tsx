/**
 * Enhanced Toast component that provides App Bridge Toast API compatibility
 *
 * This component provides 100% API compatibility with Shopify's App Bridge Toast API
 * while being built on shadcn/ui Sonner foundation with Tailwind CSS for maximum flexibility.
 */

import * as React from "react";
import { Toaster as SonnerToaster, toast as sonnerToast } from "sonner";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

// Type definitions following shadcn/ui pattern
export interface ToastAction {
  /** Label for the action button */
  label: string;
  /** Callback when action is clicked */
  onClick: () => void;
}

export interface ToastOptions {
  /** Duration in milliseconds before the toast auto-dismisses (default: 4000) */
  duration?: number;
  /** Action button configuration */
  action?: ToastAction;
  /** Callback when toast is dismissed */
  onDismiss?: () => void;
  /** Whether the toast can be dismissed by clicking (default: true) */
  dismissible?: boolean;
}

// App Bridge compatible Toast API interface
export interface AppBridgeToastAPI {
  /** Show a toast notification */
  show: (message: string, options?: ToastOptions) => string;
  /** Hide a specific toast notification */
  hide: (id: string) => void;
}

// Enhanced Toast interface that extends App Bridge with shadcn/ui features
export interface EnhancedToastProps {
  /** Additional CSS class name */
  className?: string;
  /** Custom theme configuration */
  theme?: "light" | "dark" | "system";
  /** Position of the toaster */
  position?:
    | "top-left"
    | "top-center"
    | "top-right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right";
  /** Maximum number of toasts to show at once */
  visibleToasts?: number;
  /** Whether to show close button */
  closeButton?: boolean;
  /** Rich colors for different toast types */
  richColors?: boolean;
  /** Expand toasts by default */
  expand?: boolean;
  /** Gap between toasts */
  gap?: number;
  /** Offset from the edge of the screen */
  offset?: string | number;
}

// Toast variants using cva for consistent styling
const toastVariants = cva(
  // Base styles for all toasts - custom dark styling with content-fit width
  "font-inter text-sm font-medium rounded-lg border shadow-lg !w-fit !max-w-md",
  {
    variants: {
      variant: {
        default: "bg-[#0d1213] border-gray-700 text-white",
        success: "bg-[#0d1213] border-green-600 text-green-200",
        error: "bg-[#0d1213] border-red-600 text-red-200",
        warning: "bg-[#0d1213] border-yellow-600 text-yellow-200",
        info: "bg-[#0d1213] border-blue-600 text-blue-200",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

// Toaster component that wraps Sonner with Polaris styling
export const Toaster = React.forwardRef<
  React.ElementRef<typeof SonnerToaster>,
  EnhancedToastProps
>(
  (
    {
      className,
      theme = "light",
      position = "bottom-center",
      visibleToasts = 3,
      closeButton = true,
      richColors = false,
      expand = false,
      gap = 14,
      offset = "20px",
      ...props
    },
    ref
  ) => {
    return (
      <SonnerToaster
        ref={ref}
        className={cn("toaster group", className)}
        theme={theme}
        position={position}
        visibleToasts={visibleToasts}
        closeButton={closeButton}
        richColors={richColors}
        expand={expand}
        gap={gap}
        offset={offset}
        toastOptions={{
          classNames: {
            toast: cn(
              toastVariants({ variant: "default" }),
              // Add flex layout here to control order
              "group toast flex items-start justify-between gap-4 p-4"
            ),
            description: "group-[.toast]:text-gray-300",
            actionButton:
              "group-[.toast]:bg-white group-[.toast]:text-[#0d1213] group-[.toast]:hover:bg-gray-200 group-[.toast]:rounded group-[.toast]:px-3 group-[.toast]:py-1 group-[.toast]:text-sm group-[.toast]:font-medium",
            cancelButton:
              "group-[.toast]:bg-gray-700 group-[.toast]:text-white group-[.toast]:hover:bg-gray-600 group-[.toast]:rounded group-[.toast]:px-3 group-[.toast]:py-1 group-[.toast]:text-sm group-[.toast]:font-medium",
            closeButton:
              // Remove any absolute or top/left rules if present in the default
              "group-[.toast]:ml-auto group-[.toast]:bg-transparent group-[.toast]:border-0 group-[.toast]:text-white group-[.toast]:hover:bg-gray-700 group-[.toast]:hover:text-white group-[.toast]:p-1",
          },
        }}
        {...props}
      />
    );
  }
);

Toaster.displayName = "Toaster";

// App Bridge compatible toast utility
const createToastAPI = (): AppBridgeToastAPI => {
  return {
    show: (message: string, options: ToastOptions = {}): string => {
      const {
        duration = 4000,
        action,
        onDismiss,
        dismissible = true,
      } = options;

      const toastId = sonnerToast(message, {
        duration,
        dismissible,
        action: action
          ? {
              label: action.label,
              onClick: action.onClick,
            }
          : undefined,
        onDismiss,
      });

      return String(toastId);
    },

    hide: (id: string): void => {
      sonnerToast.dismiss(id);
    },
  };
};

// Export the toast API instance
export const toast = createToastAPI();

// Export the variants function for external use
export { toastVariants };

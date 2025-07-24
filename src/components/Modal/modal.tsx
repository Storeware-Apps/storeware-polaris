/**
 * Enhanced Modal component that combines App Bridge Modal API compatibility with shadcn/ui functionality
 *
 * This component provides 100% API compatibility with Shopify's App Bridge Modal component
 * while being built on shadcn/ui Dialog foundation with Tailwind CSS for maximum flexibility.
 */

import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
} from "../ui/dialog";

// Type definitions following App Bridge Modal component API
export type ModalVariant = "small" | "base" | "large" | "max";

// App Bridge Modal Props interface - matches Shopify App Bridge Modal component exactly
export interface AppBridgeModalProps {
  /** A unique identifier for the Modal */
  id: string;

  /** The content to display within a Modal */
  children?: React.ReactNode;

  /** The URL of the content to display within a Modal (optional) */
  src?: string;

  /** The size of the modal */
  variant?: ModalVariant;

  /** Controls whether the modal is open (controlled mode) */
  open?: boolean;

  /** Callback when modal is showing */
  onShow?: () => void;

  /** Callback when modal is hiding */
  onHide?: () => void;

  /** Standard React callback for open state changes */
  onOpenChange?: (open: boolean) => void;

  /** Additional CSS class name */
  className?: string;

  /** Action buttons to display at the bottom of the modal */
  actions?: React.ReactNode;
}

// Enhanced Modal interface that extends App Bridge with additional features
export interface EnhancedModalProps extends AppBridgeModalProps {
  /** Whether to show the close button (default: true) */
  showCloseButton?: boolean;
}

// Modal size variants using cva
const modalVariants = cva(
  // Base styles for all modals
  "bg-white data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full translate-x-[-50%] translate-y-[-50%] gap-0 rounded-lg border border-gray-200 shadow-lg duration-200 font-inter",
  {
    variants: {
      variant: {
        small: "max-w-sm",
        base: "max-w-lg",
        large: "max-w-2xl",
        max: "max-w-[90vw] max-h-[90vh]",
      },
    },
    defaultVariants: {
      variant: "base",
    },
  }
);

export const Modal = React.forwardRef<
  React.ElementRef<typeof DialogContent>,
  EnhancedModalProps
>(
  (
    {
      id,
      children,
      src,
      variant = "base",
      open,
      onShow,
      onHide,
      onOpenChange,
      className,
      showCloseButton = true,
      actions,
      ...props
    },
    ref
  ) => {
    // Handle open state changes and callbacks
    const handleOpenChange = React.useCallback(
      (isOpen: boolean) => {
        if (isOpen && onShow) {
          onShow();
        } else if (!isOpen && onHide) {
          onHide();
        }

        if (onOpenChange) {
          onOpenChange(isOpen);
        }
      },
      [onShow, onHide, onOpenChange]
    );

    // Render iframe content if src is provided
    const renderContent = () => {
      if (src) {
        return (
          <div className="flex flex-col h-full">
            <iframe
              src={src}
              className="w-full flex-1 min-h-[400px] border-0"
              title={`Modal content from ${src}`}
              {...props}
            />
            {actions && (
              <div className="border-t border-gray-200 px-6 py-4 bg-white flex justify-end gap-2">
                {actions}
              </div>
            )}
          </div>
        );
      }
      return (
        <div className="flex flex-col h-full">
          <div className="flex-1">{children}</div>
          {actions && (
            <div className="border-t border-gray-200 px-6 py-4 bg-white flex justify-end gap-2">
              {actions}
            </div>
          )}
        </div>
      );
    };

    return (
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogPortal>
          <DialogOverlay className="bg-black/50" />
          <DialogContent
            ref={ref}
            className={cn(
              modalVariants({ variant }),
              "p-0 overflow-hidden", // Remove default padding and handle overflow
              className
            )}
            showCloseButton={showCloseButton}
            {...props}>
            {renderContent()}
          </DialogContent>
        </DialogPortal>
      </Dialog>
    );
  }
);

Modal.displayName = "Modal";

// Export the variants function for external use
export { modalVariants };

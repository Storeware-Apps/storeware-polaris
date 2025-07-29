/**
 * Enhanced Modal component that combines App Bridge Modal API compatibility with shadcn/ui functionality
 *
 * This component provides 100% API compatibility with Shopify's App Bridge Modal component
 * while being built on shadcn/ui Dialog foundation with Tailwind CSS for maximum flexibility.
 */

import { cva } from "class-variance-authority";
import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "@shopify/polaris-icons";
import { cn } from "../../lib/utils";

function Dialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

// function DialogTrigger({
//   ...props
// }: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
//   return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
// }

function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

// function DialogClose({
//   ...props
// }: React.ComponentProps<typeof DialogPrimitive.Close>) {
//   return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
// }

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  );
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean;
}) {
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        )}
        {...props}>
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            data-slot="dialog-close"
            className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4">
            <XIcon />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  );
}

// function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
//   return (
//     <div
//       data-slot="dialog-header"
//       className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
//       {...props}
//     />
//   );
// }

// function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
//   return (
//     <div
//       data-slot="dialog-footer"
//       className={cn(
//         "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
//         className
//       )}
//       {...props}
//     />
//   );
// }

// function DialogTitle({
//   className,
//   ...props
// }: React.ComponentProps<typeof DialogPrimitive.Title>) {
//   return (
//     <DialogPrimitive.Title
//       data-slot="dialog-title"
//       className={cn("text-lg leading-none font-semibold", className)}
//       {...props}
//     />
//   );
// }

// function DialogDescription({
//   className,
//   ...props
// }: React.ComponentProps<typeof DialogPrimitive.Description>) {
//   return (
//     <DialogPrimitive.Description
//       data-slot="dialog-description"
//       className={cn("text-muted-foreground text-sm", className)}
//       {...props}
//     />
//   );
// }

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
        small: "!max-w-sm",
        base: "!max-w-lg",
        large: "!max-w-2xl",
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
      // id,
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

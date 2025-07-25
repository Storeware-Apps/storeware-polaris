/**
 * Enhanced ContextualSaveBar component that provides App Bridge SaveBar API compatibility
 *
 * This component provides 100% API compatibility with Shopify's App Bridge SaveBar component
 * while being built on shadcn/ui foundation with Tailwind CSS for maximum flexibility.
 */

import * as React from "react";
import { cva } from "class-variance-authority";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { AlertBubbleIcon } from "@shopify/polaris-icons";
import { cn } from "../../lib/utils";
import { Button } from "../Button/button";
import { Icon } from "../Icon/icon";

// Type definitions following App Bridge SaveBar component API
export interface AppBridgeSaveBarProps {
  /** A unique identifier for the save bar */
  id: string;

  /** HTML button elements to hook into the Save and Discard buttons (legacy API) */
  children?: React.ReactNode;

  /** Whether to show a confirmation dialog when the discard button is clicked */
  discardConfirmation?: boolean;

  /** Controls whether the save bar is open (controlled mode) */
  open?: boolean;

  /** Additional CSS class name */
  className?: string;

  /** Callback when the save button is clicked (new internalized API) */
  onSave?: () => void;

  /** Callback when the discard button is clicked (new internalized API) */
  onDiscard?: () => void;

  /** Text for the save button (defaults to "Save") */
  saveText?: string;

  /** Text for the discard button (defaults to "Discard") */
  discardText?: string;

  /** Whether the save button is in a loading state */
  saveLoading?: boolean;

  /** Whether the discard button is in a loading state */
  discardLoading?: boolean;
}

// Enhanced ContextualSaveBar interface
export interface EnhancedContextualSaveBarProps extends AppBridgeSaveBarProps {}

// SaveBar variants using cva
const saveBarVariants = cva(
  // Base styles for save bar - positioned at top with 50% width and dark background
  "fixed top-0 left-1/2 transform -translate-x-1/2 z-50 w-1/2 bg-[#303030] text-white shadow-lg border border-[#2c2c2c] font-inter transition-transform duration-200 ease-in-out rounded-[40px] p-0",
  {
    variants: {
      open: {
        true: "translate-y-0",
        false: "-translate-y-full",
      },
    },
    defaultVariants: {
      open: false,
    },
  }
);

// Confirmation dialog components (reusing Modal patterns)
const Dialog = DialogPrimitive.Root;
const DialogPortal = DialogPrimitive.Portal;
const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg font-inter rounded-[40px] border border-[#e3e3e3] bg-[#303030] text-white",
        className
      )}
      {...props}>
      {children}
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-gray-600", className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export const ContextualSaveBar = React.forwardRef<
  HTMLDivElement,
  EnhancedContextualSaveBarProps
>(
  (
    {
      id,
      children,
      discardConfirmation = false,
      open = false,
      className,
      onSave,
      onDiscard,
      saveText = "Save",
      discardText = "Discard",
      saveLoading = false,
      discardLoading = false,
      ...props
    },
    ref
  ) => {
    const [showConfirmation, setShowConfirmation] = React.useState(false);
    const [pendingDiscardHandler, setPendingDiscardHandler] = React.useState<
      (() => void) | null
    >(null);

    // Determine if we're using the new internalized API or legacy children API
    const useInternalizedButtons = Boolean(onSave || onDiscard);

    // Handle discard action with optional confirmation
    const handleDiscardAction = React.useCallback(
      (discardHandler: () => void) => {
        if (discardConfirmation) {
          setPendingDiscardHandler(() => discardHandler);
          setShowConfirmation(true);
        } else {
          discardHandler();
        }
      },
      [discardConfirmation]
    );

    // Process children to identify Save and Discard buttons (legacy API)
    const processedChildren = React.useMemo(() => {
      if (useInternalizedButtons || !children) return null;

      return React.Children.map(children, child => {
        if (
          React.isValidElement(child) &&
          (child.type === "button" || child.type === Button)
        ) {
          const buttonProps = child.props as Record<string, unknown>;

          // Check if this is the discard button (primary variant = discard, default/no variant = save)
          if (buttonProps.variant === "primary") {
            // If discardConfirmation is enabled, intercept the onClick
            if (
              discardConfirmation &&
              typeof buttonProps.onClick === "function"
            ) {
              return React.cloneElement(
                child as React.ReactElement<Record<string, unknown>>,
                {
                  ...buttonProps,
                  onClick: (e: React.MouseEvent) => {
                    e.preventDefault();
                    handleDiscardAction(buttonProps.onClick as () => void);
                  },
                }
              );
            }
          }
        }
        return child;
      });
    }, [
      children,
      discardConfirmation,
      useInternalizedButtons,
      handleDiscardAction,
    ]);

    // Render internalized buttons (new API)
    const internalizedButtons = React.useMemo(() => {
      if (!useInternalizedButtons) return null;

      return (
        <>
          {onDiscard && (
            <Button
              variant="primary"
              loading={discardLoading}
              onClick={() => handleDiscardAction(onDiscard)}>
              {discardText}
            </Button>
          )}
          {onSave && (
            <Button loading={saveLoading} onClick={onSave}>
              {saveText}
            </Button>
          )}
        </>
      );
    }, [
      useInternalizedButtons,
      onDiscard,
      onSave,
      discardLoading,
      saveLoading,
      discardText,
      saveText,
      handleDiscardAction,
    ]);

    // Handle confirmation dialog actions
    const handleConfirmDiscard = React.useCallback(() => {
      setShowConfirmation(false);
      // Trigger the pending discard handler
      if (pendingDiscardHandler) {
        pendingDiscardHandler();
        setPendingDiscardHandler(null);
      }
    }, [pendingDiscardHandler]);

    const handleCancelDiscard = React.useCallback(() => {
      setShowConfirmation(false);
    }, []);

    return (
      <>
        <div
          ref={ref}
          id={id}
          className={cn(saveBarVariants({ open }), className)}
          {...props}>
          <div className="flex items-center justify-between p-2">
            <div className="flex items-center gap-2">
              <Icon source={AlertBubbleIcon} tone="base" />
              <span className="text-sm font-medium">Unsaved changes</span>
            </div>
            <div className="flex items-center gap-3">
              {useInternalizedButtons ? internalizedButtons : processedChildren}
            </div>
          </div>
        </div>

        {/* Confirmation Dialog */}
        <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
          <DialogContent className="p-0 overflow-hidden">
            {/* Header with grayish background */}
            <div className="px-6 py-4 bg-[#e3e3e3] border-b border-gray-200">
              <DialogTitle className="text-lg font-semibold text-gray-900 leading-6">
                Discard changes
              </DialogTitle>
            </div>

            {/* Content area */}
            <div className="px-6 py-4">
              <DialogDescription className="text-sm text-gray-600">
                Are you sure you want to discard your changes? This action
                cannot be undone.
              </DialogDescription>
            </div>

            {/* Action buttons with border separator */}
            <div className="border-t border-gray-200 px-6 py-4 bg-white flex justify-end gap-3">
              <Button onClick={handleCancelDiscard}>Cancel</Button>
              <Button
                variant="primary"
                tone="critical"
                onClick={handleConfirmDiscard}>
                Discard changes
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </>
    );
  }
);

ContextualSaveBar.displayName = "ContextualSaveBar";

// Export the variants function for external use
export { saveBarVariants };

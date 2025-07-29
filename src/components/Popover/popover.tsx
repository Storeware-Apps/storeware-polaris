/**
 * Enhanced Popover component that combines Polaris API compatibility with shadcn/ui functionality
 *
 * This component provides 100% API compatibility with Shopify's Polaris Popover component
 * while being built on shadcn/ui foundation with Tailwind CSS for maximum flexibility.
 */

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cva } from "class-variance-authority";

import { cn } from "../../lib/utils";

// Type definitions following Polaris Popover component API
export type PopoverCloseSource =
  | "click-outside"
  | "escape"
  | "focus-outside"
  | "content-click";

export type PopoverPreferredPosition =
  | "above"
  | "below"
  | "mostSpace"
  | "cover";
export type PopoverPreferredAlignment = "left" | "center" | "right";
export type PopoverAutofocusTarget = "none" | "first-node" | "container";

export interface PolarisPopoverProps {
  /** The content to display inside the popover */
  children?: React.ReactNode;

  /** The preferred direction to open the popover */
  preferredPosition?: PopoverPreferredPosition;

  /** The preferred alignment of the popover relative to its activator */
  preferredAlignment?: PopoverPreferredAlignment;

  /** Show or hide the Popover */
  active: boolean;

  /** The element to activate the Popover */
  activator: React.ReactElement;

  /** Use the activator's input element to calculate the Popover position */
  preferInputActivator?: boolean;

  /** The element type to wrap the activator with */
  activatorWrapper?: string;

  /** Override on the default z-index of 400 */
  zIndexOverride?: number;

  /** Prevents focusing the activator or the next focusable element when the popover is deactivated */
  preventFocusOnClose?: boolean;

  /** Automatically add wrap content in a section */
  sectioned?: boolean;

  /** Allow popover to stretch to the full width of its activator */
  fullWidth?: boolean;

  /** Allow popover to stretch to fit content vertically */
  fullHeight?: boolean;

  /** Allow popover content to determine the overlay width and height */
  fluidContent?: boolean;

  /** Remains in a fixed position */
  fixed?: boolean;

  /** Used to illustrate the type of popover element */
  ariaHaspopup?:
    | boolean
    | "false"
    | "true"
    | "menu"
    | "dialog"
    | "grid"
    | "listbox"
    | "tree";

  /** Allow the popover overlay to be hidden when printing */
  hideOnPrint?: boolean;

  /** Callback when popover is closed */
  onClose: (source: PopoverCloseSource) => void;

  /** The preferred auto focus target defaulting to the popover container */
  autofocusTarget?: PopoverAutofocusTarget;

  /** Prevents closing the popover when other overlays are clicked */
  preventCloseOnChildOverlayClick?: boolean;

  /** Prevents page scrolling when the end of the scrollable Popover overlay content is reached */
  captureOverscroll?: boolean;
}

// Enhanced Popover interface that extends Polaris with shadcn/ui features
export interface EnhancedPopoverProps extends PolarisPopoverProps {
  /** Additional CSS class name (inherited from shadcn/ui pattern) */
  className?: string;
}

// Create Polaris-specific popover variants using CVA
const polarisPopoverVariants = cva(
  "z-50 w-auto rounded-md border bg-white mt-2 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
  {
    variants: {
      sectioned: {
        true: "p-0",
        false: "p-0",
      },
      fullWidth: {
        true: "w-full",
        false: "w-48",
      },
      fullHeight: {
        true: "h-full",
        false: "",
      },
      fluidContent: {
        true: "w-auto h-auto",
        false: "",
      },
      hideOnPrint: {
        true: "print:hidden",
        false: "",
      },
    },
    defaultVariants: {
      sectioned: false,
      fullWidth: false,
      fullHeight: false,
      fluidContent: false,
      hideOnPrint: false,
    },
  }
);

// Map Polaris position to Radix side
const mapPositionToSide = (
  position?: PopoverPreferredPosition
): "top" | "bottom" | "left" | "right" => {
  switch (position) {
    case "above":
      return "top";
    case "below":
      return "bottom";
    case "cover":
    case "mostSpace":
    default:
      return "bottom";
  }
};

// Map Polaris alignment to Radix align
const mapAlignmentToAlign = (
  alignment?: PopoverPreferredAlignment
): "start" | "center" | "end" => {
  switch (alignment) {
    case "left":
      return "start";
    case "center":
      return "center";
    case "right":
      return "end";
    default:
      return "center";
  }
};

export const Popover = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  EnhancedPopoverProps
>(
  (
    {
      children,
      preferredPosition = "below",
      preferredAlignment = "center",
      active,
      activator,
      preferInputActivator: _preferInputActivator = true,
      activatorWrapper = "div",
      zIndexOverride = 400,
      preventFocusOnClose: _preventFocusOnClose = false,
      sectioned = false,
      fullWidth = false,
      fullHeight = false,
      fluidContent = false,
      fixed: _fixed = false,
      ariaHaspopup: _ariaHaspopup,
      hideOnPrint = false,
      onClose,
      autofocusTarget: _autofocusTarget = "container",
      preventCloseOnChildOverlayClick = false,
      captureOverscroll: _captureOverscroll = false,
      className,
      ...props
    },
    ref
  ) => {
    // Handle close events and map to Polaris close sources
    const handleOpenChange = (open: boolean) => {
      if (!open) {
        // Default to click-outside as we can't easily determine the exact source with Radix
        onClose("click-outside");
      }
    };

    const handleEscapeKeyDown = () => {
      onClose("escape");
    };

    const handleInteractOutside = (_event: Event) => {
      if (!preventCloseOnChildOverlayClick) {
        onClose("click-outside");
      }
    };

    // Build className using our Polaris variants
    const popoverClassName = cn(
      polarisPopoverVariants({
        sectioned,
        fullWidth,
        fullHeight,
        fluidContent,
        hideOnPrint,
      }),
      className
    );

    // Determine side and alignment for Radix
    const side = mapPositionToSide(preferredPosition);
    const align = mapAlignmentToAlign(preferredAlignment);

    // Create the activator wrapper
    const ActivatorWrapper = activatorWrapper as keyof JSX.IntrinsicElements;

    return (
      <PopoverPrimitive.Root open={active} onOpenChange={handleOpenChange}>
        <PopoverPrimitive.Trigger asChild>
          <ActivatorWrapper>{activator}</ActivatorWrapper>
        </PopoverPrimitive.Trigger>
        <PopoverPrimitive.Portal>
          <PopoverPrimitive.Content
            ref={ref}
            side={side}
            align={align}
            className={popoverClassName}
            style={{ zIndex: zIndexOverride }}
            onEscapeKeyDown={handleEscapeKeyDown}
            onInteractOutside={handleInteractOutside}
            {...props}>
            {sectioned ? <div className="p-4">{children}</div> : children}
          </PopoverPrimitive.Content>
        </PopoverPrimitive.Portal>
      </PopoverPrimitive.Root>
    );
  }
);

Popover.displayName = "Popover";

export { polarisPopoverVariants };

// Backward compatibility aliases
export type PolarisPopoverCloseSource = PopoverCloseSource;
export type PolarisPopoverPreferredPosition = PopoverPreferredPosition;
export type PolarisPopoverPreferredAlignment = PopoverPreferredAlignment;
export type PolarisPopoverAutofocusTarget = PopoverAutofocusTarget;
// export type PolarisPopoverProps = PolarisPopoverProps;
export type PolarisEnhancedPopoverProps = EnhancedPopoverProps;

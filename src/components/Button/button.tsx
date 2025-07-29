/**
 * Enhanced Button component that combines Polaris API compatibility with shadcn/ui functionality
 *
 * This component provides 100% API compatibility with Shopify's Polaris Button component
 * while being built on shadcn/ui foundation with Tailwind CSS for maximum flexibility.
 */

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  RefreshIcon,
  CheckIcon,
} from "@shopify/polaris-icons";
import { type ReactNode } from "react";

import { cn } from "../../lib/utils";

// Type definitions moved from separate file following shadcn/ui pattern
export type ButtonSize = "medium" | "large" | "micro" | "slim";
export type ButtonTextAlign = "start" | "center" | "end" | "left" | "right";
export type ButtonTone = "success" | "critical";
export type ButtonVariant =
  | "default"
  | "plain"
  | "primary"
  | "secondary"
  | "tertiary"
  | "monochromePlain";
export type ButtonDisclosure = boolean | "up" | "down" | "select";
export type ButtonTarget = "_blank" | "_self" | "_parent" | "_top";

export interface PolarisButtonProps {
  /** The content to display inside the button */
  children?: string | string[] | ReactNode;

  /** Changes the size of the button, giving it more or less padding */
  size?: ButtonSize;

  /** Changes the inner text alignment of the button */
  textAlign?: ButtonTextAlign;

  /** Allows the button to grow to the width of its container */
  fullWidth?: boolean;

  /** Displays the button with a disclosure icon. Defaults to `down` when set to true */
  disclosure?: ButtonDisclosure;

  /** Removes underline from button text (including on interaction) */
  removeUnderline?: boolean;

  /** Icon to display to the left of the button content */
  icon?: ReactNode;

  /** Indicates whether or not the button is the primary navigation link when rendered inside of an `IndexTable.Row` */
  dataPrimaryLink?: boolean;

  /** Sets the color treatment of the Button */
  tone?: ButtonTone;

  /** Changes the visual appearance of the Button */
  variant?: ButtonVariant;

  /** A unique identifier for the button */
  id?: string;

  /** A destination to link to, rendered in the href attribute of a link */
  url?: string;

  /** Forces url to open in a new tab */
  external?: boolean;

  /** Where to display the url */
  target?: ButtonTarget;

  /** Tells the browser to download the url instead of opening it */
  download?: string | boolean;

  /** Allows the button to submit a form */
  submit?: boolean;

  /** Disables the button, disallowing merchant interaction */
  disabled?: boolean;

  /** Replaces button text with a spinner while a background action is being performed */
  loading?: boolean;

  /** Sets the button in a pressed state */
  pressed?: boolean;

  /** Visually hidden text for screen readers */
  accessibilityLabel?: string;

  /** A valid WAI-ARIA role to define the semantic value of this element */
  role?: string;

  /** Id of the element the button controls */
  ariaControls?: string;

  /** Tells screen reader the controlled element is expanded */
  ariaExpanded?: boolean;

  /** Indicates the ID of the element that describes the button */
  ariaDescribedBy?: string;

  /** Indicates the current checked state of the button when acting as a toggle or switch */
  ariaChecked?: "false" | "true";

  /** Callback when clicked */
  onClick?: () => unknown;

  /** Callback when button becomes focused */
  onFocus?: () => void;

  /** Callback when focus leaves button */
  onBlur?: () => void;

  /** Callback when a keypress event is registered on the button */
  onKeyPress?: (
    event: React.KeyboardEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void;

  /** Callback when a keyup event is registered on the button */
  onKeyUp?: (
    event: React.KeyboardEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void;

  /** Callback when a keydown event is registered on the button */
  onKeyDown?: (
    event: React.KeyboardEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void;

  /** Callback when mouse enter */
  onMouseEnter?: () => void;

  /** Callback when element is touched */
  onTouchStart?: () => void;

  /** Callback when pointerdown event is being triggered */
  onPointerDown?: (
    event: React.PointerEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void;

  /** Additional CSS class name (inherited from shadcn/ui Button) */
  className?: string;
}

// Enhanced Button interface that extends Polaris with shadcn/ui features
export interface EnhancedButtonProps extends PolarisButtonProps {
  /** Use the Slot component for composition (shadcn/ui feature) */
  asChild?: boolean;
}

// Re-export types for convenience (maintaining backward compatibility)
export type PolarisButtonSize = ButtonSize;
export type PolarisButtonTextAlign = ButtonTextAlign;
export type PolarisButtonTone = ButtonTone;
export type PolarisButtonVariant = ButtonVariant;
export type PolarisButtonDisclosure = ButtonDisclosure;
export type PolarisButtonTarget = ButtonTarget;

// Create Polaris-specific button variants using CVA
const polarisButtonVariants = cva(
  "cursor-pointer inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-hidden focus-visible:ring-3 focus-visible:ring-offset-2 relative m-0 border-0 font-sans !text-xs font-medium !leading-[20.15px] !rounded-lg",
  {
    variants: {
      variant: {
        // Polaris default variant - white background with specific shadow styling
        default:
          "bg-white text-gray-700 hover:bg-[#f6f6f6] shadow-[inset_0px_0.5px_0px_#c6c6c6,_0px_1px_1px_#c6c6c6,_inset_0.5px_0px_0px_#c6c6c6,_inset_-0.5px_0px_0px_#c6c6c6] hover:shadow-[inset_0px_0.5px_0px_#c6c6c6,_0px_1px_0px_#c6c6c6,_inset_0.5px_0px_0px_#c6c6c6,_inset_-0.5px_0px_0px_#c6c6c6] focus-visible:ring-gray-500/20",
        // Polaris primary variant - dark background with white text
        primary:
          "bg-gray-900 text-white hover:bg-gray-800 focus-visible:ring-gray-900/20",
        // Polaris secondary variant - light background with dark text
        secondary:
          "bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:ring-gray-500/20",
        // Polaris tertiary variant - outlined button
        tertiary:
          "!border !border-gray-300 bg-white text-gray-900 hover:bg-gray-50 focus-visible:ring-gray-500/20",
        // Polaris plain variant - link-like appearance with blue text and underline on hover
        plain:
          "text-blue-600 hover:text-blue-700 hover:underline focus-visible:ring-blue-600/20 bg-transparent !shadow-none",
        // Polaris monochrome plain variant - muted appearance
        monochromePlain:
          "text-gray-600 hover:text-gray-700 hover:underline focus-visible:ring-gray-500/20 bg-transparent !shadow-none",
      },
      size: {
        // Polaris size variants with proper dimensions
        micro: "!h-5 !px-2 !py-0.5 gap-1 text-xs",
        slim: "!h-6 !px-2.5 !py-1 gap-1.5",
        medium: "!h-6 !px-4 !py-2 gap-2",
        large: "!h-7 !px-5 !py-2.5 gap-2.5 text-sm",
      },
      tone: {
        default: "",
        success:
          "bg-green-700 text-white hover:bg-green-800 focus-visible:ring-green-700/20",
        critical:
          "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-600/20",
      },
      textAlign: {
        start: "justify-start text-left",
        center: "justify-center text-center",
        end: "justify-end text-right",
        left: "justify-start text-left",
        right: "justify-end text-right",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
      pressed: {
        true: "bg-accent text-accent-foreground",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "medium",
      tone: "default",
      textAlign: "center",
      fullWidth: false,
      pressed: false,
    },
  }
);

// Get disclosure icon based on disclosure prop
const getDisclosureIcon = (disclosure: PolarisButtonDisclosure | undefined) => {
  if (!disclosure) return null;

  if (disclosure === true || disclosure === "down") {
    return <ChevronDownIcon className="size-4" />;
  }
  if (disclosure === "up") {
    return <ChevronUpIcon className="size-4" />;
  }
  if (disclosure === "select") {
    return <CheckIcon className="size-4" />;
  }
  return null;
};

// Spinner component for loading state
const Spinner = () => <RefreshIcon className="size-4 animate-spin" />;

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  EnhancedButtonProps
>(
  (
    {
      children,
      size = "medium",
      textAlign = "center",
      fullWidth = false,
      disclosure,
      removeUnderline,
      icon,
      dataPrimaryLink,
      tone = "default",
      variant = "default",
      id,
      url,
      external,
      target,
      download,
      submit,
      disabled,
      loading,
      pressed = false,
      accessibilityLabel,
      role,
      ariaControls,
      ariaExpanded,
      ariaDescribedBy,
      ariaChecked,
      onClick,
      onFocus,
      onBlur,
      onKeyPress,
      onKeyUp,
      onKeyDown,
      onMouseEnter,
      onTouchStart,
      onPointerDown,
      className,
      asChild = false,
      ...props
    },
    ref
  ) => {
    // Determine component type: Slot for composition, anchor for links, or button
    const isLink = Boolean(url);
    const Component = asChild ? Slot : isLink ? "a" : "button";

    // Handle loading state
    const isLoading = loading;
    const isDisabled = disabled || isLoading;

    // Get disclosure icon
    const disclosureIcon = getDisclosureIcon(disclosure);

    // Build className using our Polaris variants
    const buttonClassName = cn(
      polarisButtonVariants({
        variant,
        size,
        tone:
          tone === "critical"
            ? "critical"
            : tone === "success"
              ? "success"
              : "default",
        textAlign,
        fullWidth,
        pressed,
      }),
      // Handle underline removal for plain variants
      removeUnderline &&
        (variant === "plain" || variant === "monochromePlain") &&
        "no-underline hover:no-underline",
      className
    );

    // Common props for both button and anchor
    const commonProps = {
      id,
      className: buttonClassName,
      disabled: isDisabled,
      "aria-label": accessibilityLabel,
      "aria-controls": ariaControls,
      "aria-expanded": ariaExpanded,
      "aria-describedby": ariaDescribedBy,
      "aria-checked": ariaChecked,
      "aria-pressed": pressed,
      "data-primary-link": dataPrimaryLink,
      role,
      onClick: isDisabled ? undefined : onClick,
      onFocus,
      onBlur,
      onKeyPress,
      onKeyUp,
      onKeyDown,
      onMouseEnter,
      onTouchStart,
      onPointerDown,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref: ref as any,
      ...props,
    };

    if (isLink) {
      return (
        <Component
          {...commonProps}
          href={url}
          target={external ? "_blank" : target}
          rel={external ? "noopener noreferrer" : undefined}
          download={download}>
          {icon && !isLoading && (
            <span className="inline-flex shrink-0">{icon}</span>
          )}
          {isLoading && <Spinner />}
          {children && <span className="inline-flex">{children}</span>}
          {disclosureIcon && !isLoading && (
            <span className="inline-flex shrink-0">{disclosureIcon}</span>
          )}
        </Component>
      );
    }

    return (
      <Component {...commonProps} type={submit ? "submit" : "button"}>
        {icon && !isLoading && (
          <span className="inline-flex shrink-0">{icon}</span>
        )}
        {isLoading && <Spinner />}
        {children && <span className="inline-flex">{children}</span>}
        {disclosureIcon && !isLoading && (
          <span className="inline-flex shrink-0">{disclosureIcon}</span>
        )}
      </Component>
    );
  }
);

Button.displayName = "Button";

// Export variants for convenience
export { polarisButtonVariants };
export { polarisButtonVariants as buttonVariants };

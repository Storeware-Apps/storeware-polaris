/**
 * Enhanced Button component that combines Polaris API compatibility with shadcn/ui functionality
 *
 * This component provides 100% API compatibility with Shopify's Polaris Button component
 * while being built on shadcn/ui foundation with Tailwind CSS for maximum flexibility.
 */

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { ChevronDown, ChevronUp, Loader2, Check } from "lucide-react";

import { cn } from "../../lib/utils";
import type { PolarisButtonProps } from "./button.types";

// Enhanced Button interface that extends Polaris with shadcn/ui features
export interface EnhancedButtonProps extends PolarisButtonProps {
  /** Use the Slot component for composition (shadcn/ui feature) */
  asChild?: boolean;
}

// Re-export types for convenience
export type PolarisButtonSize = "medium" | "large" | "micro" | "slim";
export type PolarisButtonTextAlign =
  | "start"
  | "center"
  | "end"
  | "left"
  | "right";
export type PolarisButtonTone = "success" | "critical";
export type PolarisButtonVariant =
  | "plain"
  | "primary"
  | "secondary"
  | "tertiary"
  | "monochromePlain";
export type PolarisButtonDisclosure = boolean | "up" | "down" | "select";
export type PolarisButtonTarget = "_blank" | "_self" | "_parent" | "_top";

// Create Polaris-specific button variants using CVA
const polarisButtonVariants = cva(
  "cursor-pointer inline-flex items-center justify-center whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        // Polaris primary variant - dark background with white text
        primary:
          "bg-gray-900 text-white shadow-sm hover:bg-gray-800 focus-visible:ring-gray-900/20",
        // Polaris secondary variant - light background with dark text
        secondary:
          "bg-gray-100 text-gray-900 shadow-sm hover:bg-gray-200 focus-visible:ring-gray-500/20",
        // Polaris tertiary variant - outlined button
        tertiary:
          "border border-gray-300 bg-white text-gray-900 shadow-sm hover:bg-gray-50 focus-visible:ring-gray-500/20",
        // Polaris plain variant - link-like appearance with blue text and underline on hover
        plain:
          "text-blue-600 hover:text-blue-700 hover:underline focus-visible:ring-blue-600/20 bg-transparent shadow-none",
        // Polaris monochrome plain variant - muted appearance
        monochromePlain:
          "text-gray-600 hover:text-gray-700 hover:underline focus-visible:ring-gray-500/20 bg-transparent shadow-none",
      },
      size: {
        // Polaris micro size - smallest (20px height)
        micro: "h-5 px-2 py-0.5 text-xs gap-1 has-[>svg]:px-1.5 rounded",
        // Polaris slim size - compact (28px height)
        slim: "h-7 px-3 py-1 text-sm gap-1.5 has-[>svg]:px-2.5 rounded",
        // Polaris medium size - default (36px height)
        medium: "h-9 px-4 py-2 text-sm gap-2 has-[>svg]:px-3 rounded",
        // Polaris large size - bigger (44px height)
        large: "h-11 px-6 py-3 text-base gap-2 has-[>svg]:px-5 rounded",
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
      variant: "primary",
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
    return <ChevronDown className="size-4" />;
  }
  if (disclosure === "up") {
    return <ChevronUp className="size-4" />;
  }
  if (disclosure === "select") {
    return <Check className="size-4" />;
  }
  return null;
};

// Spinner component for loading state
const Spinner = () => <Loader2 className="size-4 animate-spin" />;

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
      variant = "primary",
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
          download={download}
        >
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

// Export variants and types
export { polarisButtonVariants };
export { polarisButtonVariants as buttonVariants };
export type { PolarisButtonProps };

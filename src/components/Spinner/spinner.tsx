/**
 * Spinner component that matches Shopify's Polaris Spinner design and API
 *
 * This component provides 100% API compatibility with Shopify's Polaris Spinner component
 * while being built on shadcn/ui foundation with Tailwind CSS for maximum flexibility.
 *
 * Spinners are used to notify merchants that their action is being processed.
 * For loading states, spinners should only be used for content that can't be
 * represented with skeleton loading components, like for data charts.
 */

import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "../../lib/utils";

// Type definitions following Polaris Spinner component API
export type SpinnerSize = "small" | "large";

// Polaris Spinner interface - 100% compatible with Shopify Polaris
export interface PolarisSpinnerProps {
  /**
   * Size of spinner
   * @default 'large'
   */
  size?: SpinnerSize;

  /** Accessible label for the spinner */
  accessibilityLabel?: string;

  /** Allows the component to apply the correct accessibility roles based on focus */
  hasFocusableParent?: boolean;
}

// Enhanced Spinner interface that extends Polaris with shadcn/ui features
export interface EnhancedSpinnerProps extends PolarisSpinnerProps {
  /** Additional CSS class name */
  className?: string;
}

// Export the main props interface
export type SpinnerProps = EnhancedSpinnerProps;

// Create Polaris-specific spinner variants using CVA
const polarisSpinnerVariants = cva(
  "inline-block animate-spin rounded-full border-solid border-current border-r-transparent align-text-bottom font-inter",
  {
    variants: {
      size: {
        small: "h-5 w-5 border-2",
        large: "h-11 w-11 border-[3px]",
      },
    },
    defaultVariants: {
      size: "large",
    },
  }
);

// Export the variants for external use
export const spinnerVariants = polarisSpinnerVariants;

export const Spinner = React.forwardRef<HTMLSpanElement, SpinnerProps>(
  (
    {
      size = "large",
      accessibilityLabel,
      hasFocusableParent = false,
      className,
      ...props
    },
    ref
  ) => {
    // Build className using our Polaris variants
    const spinnerClassName = cn(
      polarisSpinnerVariants({
        size,
      }),
      className
    );

    // Determine the appropriate ARIA role based on focus context
    const role = hasFocusableParent ? "status" : "img";

    return (
      <span
        ref={ref}
        className={spinnerClassName}
        role={role}
        aria-label={accessibilityLabel}
        {...props}
      />
    );
  }
);

Spinner.displayName = "Spinner";


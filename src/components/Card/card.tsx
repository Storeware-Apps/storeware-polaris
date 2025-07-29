/**
 * Enhanced Card component that combines Polaris API compatibility with shadcn/ui functionality
 *
 * This component provides 100% API compatibility with Shopify's Polaris Card component
 * while being built on shadcn/ui foundation with Tailwind CSS for maximum flexibility.
 */

import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "../../lib/utils";

// Import types from Box component for consistency
import type {
  ColorBackgroundAlias,
  SpaceScale,
  BreakpointsAlias,
} from "../Box/box";

// Type definitions following Polaris Card component API
export type CardBackground = ColorBackgroundAlias;
export type CardPadding =
  | SpaceScale
  | { [Breakpoint in BreakpointsAlias]?: SpaceScale };
export type CardRoundedAbove = "xs" | "sm" | "md" | "lg" | "xl";

export interface PolarisCardProps {
  /** Card content */
  children?: React.ReactNode;

  /** Background color */
  background?: CardBackground;

  /** The spacing around the card */
  padding?: CardPadding;

  /** Border radius value above a set breakpoint */
  roundedAbove?: CardRoundedAbove;
}

// Enhanced Card interface that extends Polaris with shadcn/ui features
export interface EnhancedCardProps extends PolarisCardProps {
  /** Additional CSS class name (inherited from shadcn/ui pattern) */
  className?: string;
}

// Utility function to convert Polaris background tokens to Tailwind classes
const getCardBackgroundClass = (background?: CardBackground): string => {
  if (!background) return "bg-white";

  // Map Polaris background tokens to appropriate Tailwind classes for Card
  const backgroundMap: Record<string, string> = {
    bg: "bg-gray-50",
    "bg-inverse": "bg-gray-900",
    "bg-surface": "bg-white",
    "bg-surface-hover": "bg-gray-50",
    "bg-surface-active": "bg-gray-100",
    "bg-surface-selected": "bg-blue-50",
    "bg-surface-disabled": "bg-gray-100",
    "bg-surface-secondary": "bg-gray-25",
    "bg-surface-secondary-hover": "bg-gray-50",
    "bg-surface-secondary-active": "bg-gray-100",
    "bg-surface-secondary-selected": "bg-blue-50",
    "bg-surface-tertiary": "bg-gray-100",
    "bg-surface-tertiary-hover": "bg-gray-200",
    "bg-surface-tertiary-active": "bg-gray-300",
    "bg-surface-brand": "bg-gray-900",
    "bg-surface-brand-hover": "bg-gray-800",
    "bg-surface-brand-active": "bg-gray-700",
    "bg-surface-brand-selected": "bg-gray-800",
    "bg-surface-info": "bg-blue-50",
    "bg-surface-info-hover": "bg-blue-100",
    "bg-surface-info-active": "bg-blue-200",
    "bg-surface-success": "bg-green-50",
    "bg-surface-success-hover": "bg-green-100",
    "bg-surface-success-active": "bg-green-200",
    "bg-surface-caution": "bg-yellow-50",
    "bg-surface-caution-hover": "bg-yellow-100",
    "bg-surface-caution-active": "bg-yellow-200",
    "bg-surface-warning": "bg-orange-50",
    "bg-surface-warning-hover": "bg-orange-100",
    "bg-surface-warning-active": "bg-orange-200",
    "bg-surface-critical": "bg-red-50",
    "bg-surface-critical-hover": "bg-red-100",
    "bg-surface-critical-active": "bg-red-200",
    "bg-surface-emphasis": "bg-blue-600",
    "bg-surface-emphasis-hover": "bg-blue-700",
    "bg-surface-emphasis-active": "bg-blue-800",
    "bg-surface-magic": "bg-purple-50",
    "bg-surface-magic-hover": "bg-purple-100",
    "bg-surface-magic-active": "bg-purple-200",
    "bg-surface-inverse": "bg-gray-900",
    "bg-surface-transparent": "bg-transparent",
    // Additional subdued variants for backward compatibility
    "bg-surface-subdued": "bg-gray-25",
    "bg-surface-neutral": "bg-gray-50",
    "bg-surface-neutral-subdued": "bg-gray-100",
    "bg-surface-caution-subdued": "bg-yellow-25",
    "bg-surface-warning-subdued": "bg-orange-25",
    "bg-surface-critical-subdued": "bg-red-25",
    "bg-surface-success-subdued": "bg-green-25",
    "bg-surface-highlight": "bg-blue-50",
    "bg-surface-highlight-subdued": "bg-blue-25",
    "bg-surface-magic-subdued": "bg-purple-25",
    "bg-surface-info-subdued": "bg-blue-25",
    "bg-surface-brand-subdued": "bg-gray-800",
  };

  return backgroundMap[background] || "bg-white";
};

// Create Polaris-specific card variants using CVA
const polarisCardVariants = cva(
  // Base styles matching Polaris Card exactly:
  // - 8px border radius (rounded-lg)
  // - border with exact Polaris color: rgba(227, 227, 227, 1)
  // - shadow-300 exact specification: 0px 4px 6px -2px rgba(26, 26, 26, 0.20)
  // - text color matching Polaris: rgba(48, 48, 48, 1)
  "rounded-lg border text-gray-900",
  {
    variants: {
      roundedAbove: {
        xs: "rounded-lg",
        sm: "sm:rounded-lg",
        md: "md:rounded-lg",
        lg: "lg:rounded-lg",
        xl: "xl:rounded-lg",
      },
    },
    defaultVariants: {
      roundedAbove: "sm",
    },
  }
);

// Helper function to convert padding prop to Tailwind classes
const getPaddingClasses = (padding?: CardPadding): string => {
  if (!padding) {
    return "p-4 sm:p-5"; // Default padding: 16px on xs, 20px on sm+
  }

  if (typeof padding === "string") {
    // Simple padding value
    const paddingMap: Record<SpaceScale, string> = {
      "0": "p-0",
      "025": "p-0.5",
      "050": "p-1",
      "100": "p-2",
      "150": "p-3",
      "200": "p-4",
      "300": "p-6",
      "400": "p-4",
      "500": "p-5",
      "600": "p-6",
      "800": "p-8",
      "1000": "p-10",
      "1200": "p-12",
      "1600": "p-16",
      "2000": "p-20",
      "2400": "p-24",
      "2800": "p-28",
      "3200": "p-32",
    };
    return paddingMap[padding] || "p-4";
  }

  // Responsive padding object
  const responsiveClasses: string[] = [];
  const breakpointMap: Record<BreakpointsAlias, string> = {
    xs: "",
    sm: "sm:",
    md: "md:",
    lg: "lg:",
    xl: "xl:",
  };

  Object.entries(padding).forEach(([breakpoint, value]) => {
    const prefix = breakpointMap[breakpoint as BreakpointsAlias];
    const paddingMap: Record<SpaceScale, string> = {
      "0": "p-0",
      "025": "p-0.5",
      "050": "p-1",
      "100": "p-2",
      "150": "p-3",
      "200": "p-4",
      "300": "p-6",
      "400": "p-4",
      "500": "p-5",
      "600": "p-6",
      "800": "p-8",
      "1000": "p-10",
      "1200": "p-12",
      "1600": "p-16",
      "2000": "p-20",
      "2400": "p-24",
      "2800": "p-28",
      "3200": "p-32",
    };
    if (value) {
      responsiveClasses.push(
        `${prefix}${paddingMap[value]?.replace("p-", "p-") || "p-4"}`
      );
    }
  });

  return responsiveClasses.join(" ") || "p-4 sm:p-5";
};

export const Card = React.forwardRef<HTMLDivElement, EnhancedCardProps>(
  (
    {
      children,
      background = "bg-surface",
      padding,
      roundedAbove = "sm",
      className,
      ...props
    },
    ref
  ) => {
    // Build className using our Polaris variants
    const cardClassName = cn(
      polarisCardVariants({
        roundedAbove,
      }),
      getCardBackgroundClass(background),
      getPaddingClasses(padding),
      // Exact Polaris border color: rgba(227, 227, 227, 1)
      "[border-color:rgba(227,227,227,1)]",
      // Exact Polaris shadow-300: 0px 4px 6px -2px rgba(26, 26, 26, 0.20)
      "[box-shadow:0px_4px_6px_-2px_rgba(26,26,26,0.20)]",
      // Exact Polaris text color: rgba(48, 48, 48, 1)
      "[color:rgba(48,48,48,1)]",
      className
    );

    return (
      <div ref={ref} className={cardClassName} {...props}>
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export { polarisCardVariants };

// Backward compatibility aliases
export type PolarisCardBackground = CardBackground;
export type PolarisCardPadding = CardPadding;
export type PolarisCardRoundedAbove = CardRoundedAbove;
// export type PolarisCardProps = PolarisCardProps;
export type PolarisEnhancedCardProps = EnhancedCardProps;

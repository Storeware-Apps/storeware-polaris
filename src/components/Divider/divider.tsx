/**
 * Divider component that matches Shopify's Polaris Divider design and API
 *
 * This component provides 100% API compatibility with Shopify's Polaris Divider component
 * while being built on shadcn/ui foundation with Tailwind CSS for maximum flexibility.
 *
 * Use to separate or group content.
 */

import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "../../lib/utils";

// Type definitions following Polaris design tokens
export type ColorBorderAlias =
  | "border"
  | "border-secondary"
  | "border-tertiary"
  | "border-inverse"
  | "border-brand"
  | "border-info"
  | "border-success"
  | "border-warning"
  | "border-critical";

export type BorderWidthScale =
  | "0"
  | "025"
  | "050"
  | "100"
  | "150"
  | "200"
  | "300"
  | "400"
  | "500";

// Polaris Divider Props interface - matches Shopify Polaris Divider component exactly
export interface PolarisDividerProps {
  /** Divider border color */
  borderColor?: ColorBorderAlias | "transparent";

  /** Divider border width */
  borderWidth?: BorderWidthScale;
}

// Enhanced Divider interface that extends Polaris with shadcn/ui features
export interface EnhancedDividerProps extends PolarisDividerProps {
  /** Additional CSS class name (inherited from shadcn/ui pattern) */
  className?: string;
}

// Export the main props interface
export type DividerProps = EnhancedDividerProps;

// Utility function to convert Polaris border color tokens to Tailwind classes
const getBorderColorClass = (
  borderColor?: ColorBorderAlias | "transparent"
): string => {
  if (!borderColor) return "";

  const colorMap: Record<ColorBorderAlias | "transparent", string> = {
    border: "border-gray-300",
    "border-secondary": "border-gray-200",
    "border-tertiary": "border-gray-100",
    "border-inverse": "border-gray-800",
    "border-brand": "border-blue-600",
    "border-info": "border-blue-500",
    "border-success": "border-green-500",
    "border-warning": "border-yellow-500",
    "border-critical": "border-red-500",
    transparent: "border-transparent",
  };

  return colorMap[borderColor] || "";
};

// Utility function to convert Polaris border width tokens to Tailwind classes
const getBorderWidthClass = (borderWidth?: BorderWidthScale): string => {
  if (!borderWidth) return "";

  const widthMap: Record<BorderWidthScale, string> = {
    "0": "border-t-0",
    "025": "border-t",
    "050": "border-t-2",
    "100": "border-t-4",
    "150": "border-t-[6px]",
    "200": "border-t-8",
    "300": "border-t-[12px]",
    "400": "border-t-[16px]",
    "500": "border-t-[20px]",
  };

  return widthMap[borderWidth] || "";
};

// Create Polaris-specific divider variants using CVA
export const dividerVariants = cva(
  "w-full border-solid", // Base divider styling - border-t width will be applied separately
  {
    variants: {
      // No additional variants needed for basic divider
    },
    defaultVariants: {},
  }
);

export const Divider = React.forwardRef<HTMLHRElement, DividerProps>(
  (
    {
      borderColor = "border-secondary",
      borderWidth = "025",
      className,
      ...props
    },
    ref
  ) => {
    // Build border color and width classes
    const borderColorClass = getBorderColorClass(borderColor);
    const borderWidthClass = getBorderWidthClass(borderWidth);

    // Build the final className
    const dividerClassName = cn(
      dividerVariants(),
      borderColorClass,
      borderWidthClass,
      className
    );

    return <hr ref={ref} className={dividerClassName} {...props} />;
  }
);

Divider.displayName = "Divider";

// Export variants for convenience
export { dividerVariants as polarisDividerVariants };

// Backward compatibility aliases
export type PolarisBorderColorAlias = ColorBorderAlias;
export type PolarisBorderWidthScale = BorderWidthScale;

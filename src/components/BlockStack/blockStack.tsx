/**
 * BlockStack component that matches Shopify's Polaris BlockStack design and API
 *
 * This component provides 100% API compatibility with Shopify's Polaris BlockStack component
 * while being built on shadcn/ui foundation with Tailwind CSS for maximum flexibility.
 *
 * Use to display children vertically and horizontally with full width by default. Based on CSS Flexbox.
 */

import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "../../lib/utils";

// Import space utilities from Box component
import type { SpaceScale, BreakpointsAlias } from "../Box/box";

// Type definitions following Polaris design tokens
export type BlockStackAlign =
  | "start"
  | "center"
  | "end"
  | "space-around"
  | "space-between"
  | "space-evenly";

export type BlockStackInlineAlign =
  | "start"
  | "center"
  | "end"
  | "baseline"
  | "stretch";

export type BlockStackAs = "div" | "span" | "ul" | "ol" | "li" | "fieldset";

// Responsive type for gap spacing
export type ResponsiveGap =
  | SpaceScale
  | { [Breakpoint in BreakpointsAlias]?: SpaceScale };

// Polaris BlockStack Props interface - matches Shopify Polaris BlockStack component exactly
export interface PolarisBlockStackProps {
  /** Content to display inside the block stack */
  children?: React.ReactNode;

  /** HTML Element type. Defaults to 'div' */
  as?: BlockStackAs;

  /** Vertical alignment of children */
  align?: BlockStackAlign;

  /** Horizontal alignment of children */
  inlineAlign?: BlockStackInlineAlign;

  /** The spacing between children. Accepts a spacing token or an object of spacing tokens for different screen sizes */
  gap?: ResponsiveGap;

  /** HTML id attribute */
  id?: string;

  /** Reverse the render order of child items. Defaults to false */
  reverseOrder?: boolean;

  /** Aria role */
  role?: string;

  /** Additional CSS class name (inherited from shadcn/ui pattern) */
  className?: string;
}

// Enhanced BlockStack interface that extends Polaris with shadcn/ui features
export interface EnhancedBlockStackProps extends PolarisBlockStackProps {
  // No additional props needed for now, but this allows for future extensions
}

// Utility function to convert Polaris space tokens to Tailwind gap classes
const getGapClass = (gap?: SpaceScale): string => {
  if (!gap) return "";

  const gapMap: Record<SpaceScale, string> = {
    "0": "0",
    "025": "px",
    "050": "0.5",
    "100": "1",
    "150": "1.5",
    "200": "2",
    "300": "3",
    "400": "4",
    "500": "5",
    "600": "6",
    "800": "8",
    "1000": "10",
    "1200": "12",
    "1600": "16",
    "2000": "20",
    "2400": "24",
    "2800": "28",
    "3200": "32",
  };

  return gapMap[gap] || "";
};

// Utility function to handle responsive gap
const getResponsiveGapClasses = (gap?: ResponsiveGap): string => {
  if (!gap) return "";

  if (typeof gap === "string") {
    const gapValue = getGapClass(gap);
    return gapValue ? `gap-${gapValue}` : "";
  }

  // Handle responsive object
  const classes: string[] = [];
  Object.entries(gap).forEach(([breakpoint, value]) => {
    const gapValue = getGapClass(value);
    if (gapValue) {
      const breakpointPrefix = breakpoint === "xs" ? "" : `${breakpoint}:`;
      classes.push(`${breakpointPrefix}gap-${gapValue}`);
    }
  });

  return classes.join(" ");
};

// Create Polaris-specific block stack variants using CVA
export const blockStackVariants = cva(
  "flex flex-col", // Base flexbox styling with column direction
  {
    variants: {
      align: {
        start: "justify-start",
        center: "justify-center",
        end: "justify-end",
        "space-around": "justify-around",
        "space-between": "justify-between",
        "space-evenly": "justify-evenly",
      },
      inlineAlign: {
        start: "items-start",
        center: "items-center",
        end: "items-end",
        baseline: "items-baseline",
        stretch: "items-stretch",
      },
      reverseOrder: {
        true: "flex-col-reverse",
        false: "flex-col",
      },
    },
    defaultVariants: {
      align: "start",
      inlineAlign: "start",
      reverseOrder: false,
    },
  }
);

export const BlockStack = React.forwardRef<
  HTMLElement,
  EnhancedBlockStackProps
>(
  (
    {
      children,
      as = "div",
      align = "start",
      inlineAlign = "start",
      gap,
      id,
      reverseOrder = false,
      role,
      className,
      ...props
    },
    ref
  ) => {
    const Component = as;

    // Build gap classes
    const gapClasses = getResponsiveGapClasses(gap);

    // Build the final className
    const blockStackClassName = cn(
      blockStackVariants({
        align,
        inlineAlign,
        reverseOrder,
      }),
      gapClasses,
      className
    );

    return (
      <Component
        ref={ref}
        className={blockStackClassName}
        id={id}
        role={role}
        {...props}>
        {children}
      </Component>
    );
  }
);

BlockStack.displayName = "BlockStack";

// Export variants for convenience
export { blockStackVariants as polarisBlockStackVariants };

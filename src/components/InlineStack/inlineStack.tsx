/**
 * InlineStack component that matches Shopify's Polaris InlineStack design and API
 *
 * This component provides 100% API compatibility with Shopify's Polaris InlineStack component
 * while being built on shadcn/ui foundation with Tailwind CSS for maximum flexibility.
 * 
 * Use to display children horizontally in a row. Based on CSS Flexbox.
 */

import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "../../lib/utils";

// Import space utilities from Box component
import type { SpaceScale, BreakpointsAlias } from "../Box/box";

// Type definitions following Polaris design tokens
export type InlineStackAlign = 
  | "start" 
  | "center" 
  | "end" 
  | "space-around" 
  | "space-between" 
  | "space-evenly";

export type InlineStackDirection = "row" | "row-reverse";

export type InlineStackBlockAlign = 
  | "start" 
  | "center" 
  | "end" 
  | "baseline" 
  | "stretch";

export type InlineStackAs = "div" | "span" | "li" | "ol" | "ul";

// Responsive type for gap spacing
export type ResponsiveGap = 
  | SpaceScale 
  | { [Breakpoint in BreakpointsAlias]?: SpaceScale };

// Polaris InlineStack Props interface - matches Shopify Polaris InlineStack component exactly
export interface PolarisInlineStackProps {
  /** Content to display inside the inline stack */
  children?: React.ReactNode;

  /** HTML Element type. Defaults to 'div' */
  as?: InlineStackAs;

  /** Horizontal alignment of children */
  align?: InlineStackAlign;

  /** Horizontal direction in which children are laid out */
  direction?: InlineStackDirection;

  /** Vertical alignment of children */
  blockAlign?: InlineStackBlockAlign;

  /** The spacing between elements. Accepts a spacing token or an object of spacing tokens for different screen sizes */
  gap?: ResponsiveGap;

  /** Wrap stack elements to additional rows as needed on small screens. Defaults to true */
  wrap?: boolean;

  /** Additional CSS class name (inherited from shadcn/ui pattern) */
  className?: string;
}

// Enhanced InlineStack interface that extends Polaris with shadcn/ui features
export interface EnhancedInlineStackProps extends PolarisInlineStackProps {
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

// Create Polaris-specific inline stack variants using CVA
export const inlineStackVariants = cva(
  "flex", // Base flexbox styling
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
      direction: {
        row: "flex-row",
        "row-reverse": "flex-row-reverse",
      },
      blockAlign: {
        start: "items-start",
        center: "items-center",
        end: "items-end",
        baseline: "items-baseline",
        stretch: "items-stretch",
      },
      wrap: {
        true: "flex-wrap",
        false: "flex-nowrap",
      },
    },
    defaultVariants: {
      align: "start",
      direction: "row",
      blockAlign: "start",
      wrap: true,
    },
  }
);

export const InlineStack = React.forwardRef<any, EnhancedInlineStackProps>(
  (
    {
      children,
      as = "div",
      align = "start",
      direction = "row",
      blockAlign = "start",
      gap,
      wrap = true,
      className,
      ...props
    },
    ref
  ) => {
    const Component = as;

    // Build gap classes
    const gapClasses = getResponsiveGapClasses(gap);

    // Build the final className
    const inlineStackClassName = cn(
      inlineStackVariants({
        align,
        direction,
        blockAlign,
        wrap,
      }),
      gapClasses,
      className
    );

    return (
      <Component
        ref={ref}
        className={inlineStackClassName}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

InlineStack.displayName = "InlineStack";

// Export variants for convenience
export { inlineStackVariants as polarisInlineStackVariants };

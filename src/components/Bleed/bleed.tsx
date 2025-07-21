/**
 * Bleed component that matches Shopify's Polaris Bleed design and API
 *
 * This component provides 100% API compatibility with Shopify's Polaris Bleed component
 * while being built on shadcn/ui foundation with Tailwind CSS for maximum flexibility.
 */

import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "../../lib/utils";

// Import space scale from Box component for consistency
export type SpaceScale =
  | "0"
  | "025"
  | "050"
  | "100"
  | "150"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "800"
  | "1000"
  | "1200"
  | "1600"
  | "2000"
  | "2400"
  | "2800"
  | "3200";

// Breakpoints aliases based on Polaris tokens
export type BreakpointsAlias = "xs" | "sm" | "md" | "lg" | "xl";

// Responsive type for spacing
export type ResponsiveSpacing =
  | SpaceScale
  | { [Breakpoint in BreakpointsAlias]?: SpaceScale };

// Polaris Bleed Props interface - matches Shopify Polaris Bleed component exactly
export interface PolarisBleedProps {
  /** Content to display inside the bleed container */
  children?: React.ReactNode;

  /** Negative horizontal space around children. Accepts a spacing token or an object of spacing tokens for different screen sizes */
  marginInline?: ResponsiveSpacing;

  /** Negative vertical space around children. Accepts a spacing token or an object of spacing tokens for different screen sizes */
  marginBlock?: ResponsiveSpacing;

  /** Negative top space around children. Accepts a spacing token or an object of spacing tokens for different screen sizes */
  marginBlockStart?: ResponsiveSpacing;

  /** Negative bottom space around children. Accepts a spacing token or an object of spacing tokens for different screen sizes */
  marginBlockEnd?: ResponsiveSpacing;

  /** Negative left space around children. Accepts a spacing token or an object of spacing tokens for different screen sizes */
  marginInlineStart?: ResponsiveSpacing;

  /** Negative right space around children. Accepts a spacing token or an object of spacing tokens for different screen sizes */
  marginInlineEnd?: ResponsiveSpacing;

  /** Additional CSS class name (inherited from shadcn/ui pattern) */
  className?: string;
}

// Enhanced Bleed interface that extends Polaris with shadcn/ui features
export interface EnhancedBleedProps extends PolarisBleedProps {
  // No additional props needed for now, but this allows for future extensions
}

// Utility function to convert Polaris space tokens to Tailwind classes
const getSpaceClass = (space?: SpaceScale): string => {
  if (!space) return "";

  const spaceMap: Record<SpaceScale, string> = {
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

  return spaceMap[space] || "";
};

// Utility function to handle responsive negative margin classes
const getResponsiveMarginClasses = (
  margin?: ResponsiveSpacing,
  prefix: string = "m"
): string => {
  if (!margin) return "";

  if (typeof margin === "string") {
    const spaceValue = getSpaceClass(margin);
    return spaceValue ? `-m${prefix}-${spaceValue}` : "";
  }

  // Handle responsive object
  const classes: string[] = [];
  Object.entries(margin).forEach(([breakpoint, value]) => {
    const spaceValue = getSpaceClass(value);
    if (spaceValue) {
      const breakpointPrefix = breakpoint === "xs" ? "" : `${breakpoint}:`;
      classes.push(`${breakpointPrefix}-m${prefix}-${spaceValue}`);
    }
  });

  return classes.join(" ");
};

// Create Polaris-specific bleed variants using CVA
const polarisBleedVariants = cva("", {
  variants: {
    // Base styling variants can be added here if needed
  },
  defaultVariants: {},
});

export const Bleed = React.forwardRef<HTMLDivElement, EnhancedBleedProps>(
  (
    {
      children,
      marginInline,
      marginBlock,
      marginBlockStart,
      marginBlockEnd,
      marginInlineStart,
      marginInlineEnd,
      className,
      ...props
    },
    ref
  ) => {
    // Build className using our utility functions and CVA
    const bleedClassName = cn(
      polarisBleedVariants(),
      // Negative margins for bleeding effect
      getResponsiveMarginClasses(marginInline, "x"),
      getResponsiveMarginClasses(marginBlock, "y"),
      getResponsiveMarginClasses(marginBlockStart, "t"),
      getResponsiveMarginClasses(marginBlockEnd, "b"),
      getResponsiveMarginClasses(marginInlineStart, "l"),
      getResponsiveMarginClasses(marginInlineEnd, "r"),
      className
    );

    return (
      <div ref={ref} className={bleedClassName} {...props}>
        {children}
      </div>
    );
  }
);

Bleed.displayName = "Bleed";

// Export variants for convenience
export { polarisBleedVariants };
export { polarisBleedVariants as bleedVariants };

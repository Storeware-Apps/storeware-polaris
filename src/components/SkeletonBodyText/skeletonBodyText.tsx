/**
 * SkeletonBodyText component that matches Shopify's Polaris SkeletonBodyText design and API
 *
 * This component provides 100% API compatibility with Shopify's Polaris SkeletonBodyText component
 * while being built on shadcn/ui foundation with Tailwind CSS for maximum flexibility.
 *
 * Skeleton body text is used to provide a low fidelity representation of content before it appears
 * on the page, and improves load times perceived by merchants. Can be used for content in or outside of a card.
 */

import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "../../lib/utils";

// Polaris SkeletonBodyText interface - 100% compatible with Shopify Polaris
export interface PolarisSkeletonBodyTextProps {
  /**
   * Number of lines to display
   * @default 3
   */
  lines?: number;
}

// Enhanced SkeletonBodyText interface that extends Polaris with shadcn/ui features
export interface EnhancedSkeletonBodyTextProps
  extends PolarisSkeletonBodyTextProps {
  /** Additional CSS class name */
  className?: string;
}

// Export the main props interface
export type SkeletonBodyTextProps = EnhancedSkeletonBodyTextProps;

// Create Polaris-specific skeleton body text variants using CVA
const polarisSkeletonBodyTextVariants = cva(
  "h-2 bg-gray-200 rounded animate-pulse font-inter",
  {
    variants: {},
    defaultVariants: {},
  }
);

// Export the variants for external use
export const skeletonBodyTextVariants = polarisSkeletonBodyTextVariants;

export const SkeletonBodyText = React.forwardRef<
  HTMLDivElement,
  SkeletonBodyTextProps
>(({ lines = 3, className, ...props }, ref) => {
  // Generate array of lines
  const lineArray = Array.from({ length: lines }, (_, i) => i);

  return (
    <div ref={ref} className={cn("space-y-2", className)} {...props}>
      {lineArray.map((index) => {
        // Last line is typically shorter (75% width)
        const isLastLine = index === lines - 1;
        const lineWidth = isLastLine && lines > 1 ? "w-3/4" : "w-full";

        return (
          <div
            key={index}
            className={cn(
              polarisSkeletonBodyTextVariants(),
              lineWidth
            )}
          />
        );
      })}
    </div>
  );
});

SkeletonBodyText.displayName = "SkeletonBodyText";


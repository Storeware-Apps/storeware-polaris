/**
 * Enhanced TitleBar component that provides App Bridge TitleBar API compatibility
 *
 * This component provides 100% API compatibility with Shopify's App Bridge TitleBar component
 * and is designed to work within Modal components.
 */

import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

// Type definitions following App Bridge TitleBar component API
export interface AppBridgeTitleBarProps {
  /** The title of the title bar */
  title?: string;

  /** The children of the title bar (typically buttons) */
  children?: React.ReactNode;

  /** Additional CSS class name */
  className?: string;
}

// Enhanced TitleBar interface
export interface EnhancedTitleBarProps extends AppBridgeTitleBarProps {
  /** Whether to show a border at the bottom (default: true) */
  showBorder?: boolean;
}

// TitleBar variants using cva
const titleBarVariants = cva(
  // Base styles for title bar
  "flex items-center justify-between px-6 py-4 bg-gray-100 font-inter",
  {
    variants: {
      showBorder: {
        true: "border-b border-gray-200",
        false: "",
      },
    },
    defaultVariants: {
      showBorder: true,
    },
  }
);

const titleVariants = cva("text-lg font-semibold text-gray-900 leading-6");

const actionsVariants = cva("flex items-center gap-2 cursor-pointer");

export const TitleBar = React.forwardRef<HTMLDivElement, EnhancedTitleBarProps>(
  ({ title, children, className, showBorder = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(titleBarVariants({ showBorder }), className)}
        {...props}>
        {title && <h2 className={cn(titleVariants())}>{title}</h2>}

        {children && <div className={cn(actionsVariants())}>{children}</div>}

        {/* If no title but has children, center the actions */}
        {!title && children && <div className="flex-1" />}
      </div>
    );
  }
);

TitleBar.displayName = "TitleBar";

// Export the variants functions for external use
export { titleBarVariants, titleVariants, actionsVariants };

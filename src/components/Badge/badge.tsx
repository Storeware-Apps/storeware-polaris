/**
 * Enhanced Badge component that combines Polaris API compatibility with shadcn/ui functionality
 *
 * This component provides 100% API compatibility with Shopify's Polaris Badge component
 * while being built on shadcn/ui foundation with Tailwind CSS for maximum flexibility.
 */

import * as React from "react";
import { cva } from "class-variance-authority";
import { type ReactNode } from "react";

import { cn } from "../../lib/utils";

// Type definitions following Polaris Badge component API
export type BadgeTone =
  | "default"
  | "success"
  | "critical"
  | "warning"
  | "attention"
  | "info"
  | "new"
  | "read-only"
  | "enabled"
  | "subdued";

export type BadgeProgress = "incomplete" | "partiallyComplete" | "complete";

export type BadgeSize = "small" | "medium";

// Polaris Badge interface - 100% compatible with Shopify Polaris
export interface PolarisBadgeProps {
  /** The content to display inside the badge */
  children?: ReactNode;

  /** Set the color of the badge for the given tone */
  tone?: BadgeTone;

  /** Set the progress of the badge */
  progress?: BadgeProgress;

  /** Icon to display in the badge */
  icon?:
    | React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    | "placeholder"
    | string;

  /** Size of the badge */
  size?: BadgeSize;

  /** Additional CSS class name */
  className?: string;
}

// Enhanced Badge interface that extends Polaris with shadcn/ui features
export interface EnhancedBadgeProps extends PolarisBadgeProps {
  /** Use the Slot component for composition (shadcn/ui feature) */
  asChild?: boolean;
}

// Export the main props interface
export type BadgeProps = EnhancedBadgeProps;

// Create Polaris-specific badge variants using CVA
const polarisBadgeVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-sans text-xs font-medium leading-none rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      tone: {
        // Default tone - neutral gray
        default: "bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200",
        // Success tone - green
        success:
          "bg-green-100 text-green-800 border-green-200 hover:bg-green-200",
        // Critical tone - red
        critical: "bg-red-100 text-red-800 border-red-200 hover:bg-red-200",
        // Warning tone - yellow/orange
        warning:
          "bg-yellow-100 text-yellow-800 border-yellow-200 hover:bg-yellow-200",
        // Attention tone - orange
        attention:
          "bg-orange-100 text-orange-800 border-orange-200 hover:bg-orange-200",
        // Info tone - blue
        info: "bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200",
        // New tone - purple
        new: "bg-purple-100 text-purple-800 border-purple-200 hover:bg-purple-200",
        // Read-only tone - gray with different styling
        "read-only":
          "bg-gray-50 text-gray-600 border-gray-100 hover:bg-gray-100",
        // Enabled tone - green variant
        enabled:
          "bg-emerald-100 text-emerald-800 border-emerald-200 hover:bg-emerald-200",
        // Subdued tone - muted gray
        subdued: "bg-gray-50 text-gray-500 border-gray-100 hover:bg-gray-100",
      },
      size: {
        small: "h-5 px-2 text-xs",
        medium: "h-6 px-2.5 text-xs",
      },
      progress: {
        incomplete: "opacity-60",
        partiallyComplete: "opacity-80",
        complete: "opacity-100",
      },
    },
    defaultVariants: {
      tone: "default",
      size: "medium",
      progress: "complete",
    },
  }
);

// Export the variants for external use
export const badgeVariants = polarisBadgeVariants;

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      children,
      tone = "default",
      progress = "complete",
      icon,
      size = "medium",
      className,
      ...props
    },
    ref
  ) => {
    // Build className using our Polaris variants
    const badgeClassName = cn(
      polarisBadgeVariants({
        tone,
        size,
        progress,
      }),
      className
    );

    // Handle icon rendering
    const iconElement = React.useMemo(() => {
      if (!icon) return null;

      if (typeof icon === "string") {
        if (icon === "placeholder") {
          return (
            <span className="w-3 h-3 bg-current rounded-full opacity-50 mr-1" />
          );
        }
        return <span className="mr-1">{icon}</span>;
      }

      if (React.isValidElement(icon)) {
        return React.cloneElement(icon as React.ReactElement, {
          className: cn(
            "w-3 h-3 mr-1",
            (icon as React.ReactElement<{ className?: string }>).props
              ?.className
          ),
        });
      }

      // Handle function component icons
      if (typeof icon === "function") {
        const IconComponent = icon;
        return <IconComponent className="w-3 h-3 mr-1" />;
      }

      return null;
    }, [icon]);

    return (
      <span ref={ref} className={badgeClassName} {...props}>
        {iconElement}
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";

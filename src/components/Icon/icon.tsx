/**
 * Enhanced Icon component that combines Polaris API compatibility with shadcn/ui functionality
 *
 * This component provides 100% API compatibility with Shopify's Polaris Icon component
 * while being built on shadcn/ui foundation with Tailwind CSS for maximum flexibility.
 */

import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

// Type definitions following Polaris Icon component API
export type IconTone =
  | "base"
  | "inherit"
  | "subdued"
  | "caution"
  | "warning"
  | "critical"
  | "interactive"
  | "info"
  | "success"
  | "primary"
  | "emphasis"
  | "magic"
  | "textCaution"
  | "textWarning"
  | "textCritical"
  | "textInfo"
  | "textSuccess"
  | "textPrimary"
  | "textMagic";

// CVA variants for Icon styling
const iconVariants = cva("inline-block shrink-0 w-5 h-5", {
  variants: {
    tone: {
      base: "text-white",
      inherit: "text-inherit",
      subdued: "text-muted-foreground",
      caution: "text-amber-600",
      warning: "text-orange-600",
      critical: "text-destructive",
      interactive: "text-primary",
      info: "text-blue-600",
      success: "text-green-600",
      primary: "text-primary",
      emphasis: "text-foreground font-semibold",
      magic: "text-purple-600",
      textCaution: "text-amber-700",
      textWarning: "text-orange-700",
      textCritical: "text-red-700",
      textInfo: "text-blue-700",
      textSuccess: "text-green-700",
      textPrimary: "text-primary",
      textMagic: "text-purple-700",
    },
  },
  defaultVariants: {
    tone: "base",
  },
});

// Polaris Icon Props interface - matches Shopify Polaris Icon component exactly
export interface PolarisIconProps {
  /** The SVG contents to display in the icon (icons should fit in a 20 × 20 pixel viewBox) */
  source:
    | React.ComponentType<{ className?: string }>
    | React.ReactElement
    | string;
  /** Set the color for the SVG fill */
  tone?: IconTone;
  /** Descriptive text to be read to screenreaders */
  accessibilityLabel?: string;
}

// Enhanced Icon interface that extends Polaris with shadcn/ui features
export interface EnhancedIconProps extends PolarisIconProps {
  /** Additional CSS class name (inherited from shadcn/ui patterns) */
  className?: string;
}

// Combined props interface
export interface IconProps extends EnhancedIconProps {}

const Icon = React.forwardRef<HTMLSpanElement, IconProps>(
  ({ source, tone = "base", accessibilityLabel, className, ...props }, ref) => {
    // Build className using our Icon variants
    const iconClassName = cn(iconVariants({ tone }), className);

    // Handle different types of icon sources
    const renderIcon = React.useMemo(() => {
      if (!source) return null;

      // Handle React component (function)
      if (typeof source === "function") {
        const IconComponent = source;
        // Pass the tone-based color classes to the icon component
        return <IconComponent className={iconClassName} />;
      }

      // Handle React element (already rendered)
      if (React.isValidElement(source)) {
        return React.cloneElement(source as React.ReactElement, {
          className: cn(
            iconClassName,
            (source as React.ReactElement<{ className?: string }>).props
              ?.className
          ),
        });
      }

      // Handle SVG string or other content
      if (typeof source === "string") {
        return (
          <div
            className={iconClassName}
            dangerouslySetInnerHTML={{ __html: source }}
          />
        );
      }

      // Fallback for other types
      return source;
    }, [source, iconClassName]);

    // Determine accessibility attributes
    const accessibilityProps = accessibilityLabel
      ? { "aria-label": accessibilityLabel }
      : { "aria-hidden": true };

    return (
      <span
        ref={ref}
        className="inline-block shrink-0 w-5 h-5"
        {...accessibilityProps}
        {...props}>
        {renderIcon}
      </span>
    );
  }
);

Icon.displayName = "Icon";

export { Icon, iconVariants };

// Backward compatibility aliases
export type PolarisIconTone = IconTone;

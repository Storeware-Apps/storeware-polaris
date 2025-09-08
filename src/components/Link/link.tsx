/**
 * Link component that matches Shopify's Polaris Link design and API
 *
 * This component provides 100% API compatibility with Shopify's Polaris Link component
 * while being built on shadcn/ui foundation with Tailwind CSS for maximum flexibility.
 *
 * Links take users to another place, and usually appear within or directly following a sentence.
 */

import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "../../lib/utils";

// Type definitions following Polaris Link component API
export type LinkTarget = "_blank" | "_self" | "_parent" | "_top";

// Polaris Link Props interface - matches Shopify Polaris Link component exactly
export interface PolarisLinkProps {
  /** ID for the link */
  id?: string;
  /** The url to link to */
  url?: string;
  /** The content to display inside the link */
  children?: React.ReactNode;
  /** Makes the link open in a new tab
   * @deprecated use `target` set to `_blank` instead
   */
  external?: boolean;
  /** Where to display the url */
  target?: LinkTarget;
  /** Makes the link color the same as the current text color and adds an underline */
  monochrome?: boolean;
  /** Removes text decoration underline to the link */
  removeUnderline?: boolean;
  /** Callback when a link is clicked */
  onClick?(): void;
  /** Descriptive text to be read to screenreaders */
  accessibilityLabel?: string;
  /** Indicates whether or not the link is the primary navigation link when rendered inside of an `IndexTable.Row` */
  dataPrimaryLink?: boolean;
}

// Enhanced Link interface that extends Polaris with shadcn/ui features
export interface EnhancedLinkProps extends PolarisLinkProps {
  /** Additional CSS class name (inherited from shadcn/ui pattern) */
  className?: string;
}

// Export the main props interface
export type LinkProps = EnhancedLinkProps;

// Create Polaris-specific link variants using CVA
export const linkVariants = cva(
  [
    // Base link styling matching Polaris
    "inline-flex items-center font-medium transition-colors duration-200",
    // Default link color and underline
    "text-blue-600 underline decoration-1 underline-offset-2",
    // Hover and focus states
    "hover:text-blue-800 hover:decoration-2",
    "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 focus:rounded-sm",
    // Active state
    "active:text-blue-900",
  ],
  {
    variants: {
      monochrome: {
        true: [
          // Monochrome styling - same color as surrounding text with underline
          "text-current underline decoration-1 underline-offset-2",
          "hover:decoration-2",
          "focus:ring-gray-500",
        ],
        false: [
          // Default blue link styling
          "text-blue-600",
          "hover:text-blue-800",
          "active:text-blue-900",
        ],
      },
      removeUnderline: {
        true: "no-underline hover:no-underline",
        false: "",
      },
      dataPrimaryLink: {
        true: "font-semibold",
        false: "",
      },
    },
    defaultVariants: {
      monochrome: false,
      removeUnderline: false,
      dataPrimaryLink: false,
    },
  }
);

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      id,
      url,
      children,
      external = false,
      target,
      monochrome = false,
      removeUnderline = false,
      onClick,
      accessibilityLabel,
      dataPrimaryLink = false,
      className,
      ...props
    },
    ref
  ) => {
    // Determine the actual target
    const actualTarget = target || (external ? "_blank" : undefined);

    // Handle click events
    const handleClick = React.useCallback(
      (event: React.MouseEvent<HTMLAnchorElement>) => {
        if (onClick) {
          onClick();
        }
        // Allow default link behavior to continue
      },
      [onClick]
    );

    // Build the final className
    const linkClassName = cn(
      linkVariants({
        monochrome,
        removeUnderline,
        dataPrimaryLink,
      }),
      className
    );

    // Determine if we should add rel="noopener noreferrer" for external links
    const shouldAddRel = actualTarget === "_blank";
    const rel = shouldAddRel ? "noopener noreferrer" : undefined;

    return (
      <a
        ref={ref}
        id={id}
        href={url}
        target={actualTarget}
        rel={rel}
        onClick={handleClick}
        aria-label={accessibilityLabel}
        data-primary-link={dataPrimaryLink || undefined}
        className={linkClassName}
        {...props}
      >
        {children}
      </a>
    );
  }
);

Link.displayName = "Link";

// Export variants for convenience
export { linkVariants as polarisLinkVariants };

// Backward compatibility aliases
export type PolarisLinkTarget = LinkTarget;

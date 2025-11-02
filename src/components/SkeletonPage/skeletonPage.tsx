/**
 * SkeletonPage component that matches Shopify's Polaris SkeletonPage design and API
 *
 * This component provides 100% API compatibility with Shopify's Polaris SkeletonPage component
 * while being built on shadcn/ui foundation with Tailwind CSS for maximum flexibility.
 *
 * Skeleton page is used with other skeleton loading components to provide a low fidelity
 * representation of the user interface (UI) before content appears on the page. It improves
 * load times perceived by merchants.
 */

import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "../../lib/utils";

// Polaris SkeletonPage interface - 100% compatible with Shopify Polaris
export interface PolarisSkeletonPageProps {
  /** Page title, in large type */
  title?: string;

  /** Remove the normal max-width on the page */
  fullWidth?: boolean;

  /** Decreases the maximum layout width. Intended for single-column layouts */
  narrowWidth?: boolean;

  /** Shows a skeleton over the primary action */
  primaryAction?: boolean;

  /** Shows a skeleton over the backAction */
  backAction?: boolean;

  /** The child elements to render in the skeleton page. */
  children?: React.ReactNode;
}

// Enhanced SkeletonPage interface that extends Polaris with shadcn/ui features
export interface EnhancedSkeletonPageProps extends PolarisSkeletonPageProps {
  /** Additional CSS class name */
  className?: string;
}

// Export the main props interface
export type SkeletonPageProps = EnhancedSkeletonPageProps;

// Create Polaris-specific skeleton page variants using CVA
const polarisSkeletonPageVariants = cva(
  "w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 font-inter",
  {
    variants: {
      fullWidth: {
        true: "max-w-none",
        false: "max-w-7xl",
      },
      narrowWidth: {
        true: "max-w-3xl",
        false: "",
      },
    },
    defaultVariants: {
      fullWidth: false,
      narrowWidth: false,
    },
  }
);

// Skeleton title variants
const skeletonTitleVariants = cva(
  "h-8 bg-gray-200 rounded animate-pulse mb-4",
  {
    variants: {
      hasTitle: {
        true: "w-64",
        false: "w-96",
      },
    },
    defaultVariants: {
      hasTitle: false,
    },
  }
);

// Skeleton action button variants
const skeletonActionVariants = cva(
  "h-9 w-24 bg-gray-200 rounded-lg animate-pulse"
);

// Skeleton back action variants
const skeletonBackActionVariants = cva(
  "h-6 w-16 bg-gray-200 rounded animate-pulse mb-2"
);

// Export the variants for external use
export const skeletonPageVariants = polarisSkeletonPageVariants;

export const SkeletonPage = React.forwardRef<HTMLDivElement, SkeletonPageProps>(
  (
    {
      title,
      fullWidth = false,
      narrowWidth = false,
      primaryAction = false,
      backAction = false,
      children,
      className,
      ...props
    },
    ref
  ) => {
    // Build className using our Polaris variants
    const pageClassName = cn(
      polarisSkeletonPageVariants({
        fullWidth,
        narrowWidth,
      }),
      className
    );

    return (
      <div ref={ref} className={pageClassName} {...props}>
        {/* Header section */}
        <div className="mb-6">
          {/* Back action skeleton */}
          {backAction && <div className={cn(skeletonBackActionVariants())} />}

          {/* Title and actions row */}
          <div className="flex items-center justify-between">
            {/* Title skeleton */}
            <div className="flex-1">
              {title ? (
                <h1 className="text-2xl font-semibold text-gray-900">
                  {title}
                </h1>
              ) : (
                <div
                  className={cn(skeletonTitleVariants({ hasTitle: false }))}
                />
              )}
            </div>

            {/* Primary action skeleton */}
            {primaryAction && (
              <div className="ml-4">
                <div className={cn(skeletonActionVariants())} />
              </div>
            )}
          </div>
        </div>

        {/* Content section */}
        <div>{children}</div>
      </div>
    );
  }
);

SkeletonPage.displayName = "SkeletonPage";

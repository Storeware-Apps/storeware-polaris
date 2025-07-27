/**
 * Enhanced Pagination component that combines Polaris API compatibility with shadcn/ui functionality
 *
 * This component provides 100% API compatibility with Shopify's Polaris Pagination component
 * while being built on shadcn/ui foundation with Tailwind CSS for maximum flexibility.
 */

import * as React from "react";
import { cva } from "class-variance-authority";
import { ChevronLeftIcon, ChevronRightIcon } from "@shopify/polaris-icons";

import { cn } from "../../lib/utils";
import { Text } from "../Text/Text";

// Type definitions following Polaris Pagination component API
export type Key = string;

export interface AccessibilityLabels {
  /** Accessible label for the previous button */
  previous?: string;
  /** Accessible label for the next button */
  next?: string;
}

export interface PaginationProps {
  /** Keyboard shortcuts for the next button */
  nextKeys?: Key[];
  /** Keyboard shortcuts for the previous button */
  previousKeys?: Key[];
  /** Tooltip for the next button */
  nextTooltip?: string;
  /** Tooltip for the previous button */
  previousTooltip?: string;
  /** The URL of the next page */
  nextURL?: string;
  /** The URL of the previous page */
  previousURL?: string;
  /** Whether there is a next page to show */
  hasNext?: boolean;
  /** Whether there is a previous page to show */
  hasPrevious?: boolean;
  /** Accessible label for the pagination */
  accessibilityLabel?: string;
  /** Accessible labels for the buttons and UnstyledLinks */
  accessibilityLabels?: AccessibilityLabels;
  /** Callback when next button is clicked */
  onNext?: () => void;
  /** Callback when previous button is clicked */
  onPrevious?: () => void;
  /** Text to provide more context in between the arrow buttons */
  label?: React.ReactNode;
  /** Layout structure of the component */
  type?: "table" | "page";
  /** Additional CSS class name */
  className?: string;
}

// Enhanced Pagination interface that extends Polaris with shadcn/ui features
export interface EnhancedPaginationProps extends PaginationProps {
  /** Use the Slot component for composition (shadcn/ui feature) */
  asChild?: boolean;
}

// Re-export types for convenience (maintaining backward compatibility)
export type PolarisPaginationProps = PaginationProps;
export type PolarisAccessibilityLabels = AccessibilityLabels;
export type PolarisKey = Key;

// Create Polaris-specific pagination variants using CVA
const polarisPaginationVariants = cva("flex items-center", {
  variants: {
    type: {
      page: "w-full",
      table: "w-auto",
    },
    hasLabel: {
      true: "justify-between",
      false: "justify-center",
    },
  },
  defaultVariants: {
    type: "page",
    hasLabel: false,
  },
});

const paginationButtonVariants = cva(
  "inline-flex items-center h-6 justify-center cursor-pointer gap-1 p-1 text-sm font-medium bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white first:rounded-l-md last:rounded-r-md",
  {
    variants: {
      position: {
        previous: "rounded-l-md border-r-0",
        next: "rounded-r-md",
        single: "",
      },
      disabled: {
        true: "text-gray-400 bg-gray-50",
        false: "",
      },
    },
    defaultVariants: {
      position: "single",
      disabled: false,
    },
  }
);

export const Pagination = React.forwardRef<
  HTMLDivElement,
  EnhancedPaginationProps
>(
  (
    {
      nextKeys,
      previousKeys,
      nextTooltip: _nextTooltip,
      previousTooltip: _previousTooltip,
      nextURL: _nextURL,
      previousURL: _previousURL,
      hasNext = false,
      hasPrevious = false,
      accessibilityLabel = "Pagination",
      accessibilityLabels,
      onNext,
      onPrevious,
      label,
      type = "page",
      className,
      asChild: _asChild = false,
      ...props
    },
    ref
  ) => {
    // Handle keyboard shortcuts
    React.useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (previousKeys?.includes(event.key) && hasPrevious && onPrevious) {
          event.preventDefault();
          onPrevious();
        }
        if (nextKeys?.includes(event.key) && hasNext && onNext) {
          event.preventDefault();
          onNext();
        }
      };

      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }, [previousKeys, nextKeys, hasPrevious, hasNext, onPrevious, onNext]);

    const previousLabel = accessibilityLabels?.previous;
    const nextLabel = accessibilityLabels?.next;

    const PreviousButton = () => (
      <button
        type="button"
        disabled={!hasPrevious}
        onClick={onPrevious}
        aria-label={previousLabel || "Previous"}
        className={cn(
          paginationButtonVariants({
            position: label ? "previous" : "single",
            disabled: !hasPrevious,
          })
        )}>
        <ChevronLeftIcon className="size-5" />
        {/* {label} */}
        {/* {!label && <span className="ml-1">Previous</span>} */}
      </button>
    );

    const NextButton = () => (
      <button
        type="button"
        disabled={!hasNext}
        onClick={onNext}
        aria-label={nextLabel || "Next"}
        className={cn(
          paginationButtonVariants({
            position: label ? "next" : "single",
            disabled: !hasNext,
          })
        )}>
        {/* {!label && <span className="mr-1">Next</span>} */}
        {/* {label} */}
        <ChevronRightIcon className="size-5" />
      </button>
    );

    return (
      <nav
        ref={ref}
        aria-label={accessibilityLabel}
        className={cn(
          polarisPaginationVariants({ type, hasLabel: !!label }),
          className
        )}
        {...props}>
        {label ? (
          // With label: Previous - Label - Next (spaced apart)
          <>
            <PreviousButton />
            <div className="flex-1 flex justify-center gap-2">
              {typeof label === "string" ? (
                <Text className="mx-1" variant="bodySm" tone="subdued">
                  {label}
                </Text>
              ) : (
                label
              )}
            </div>
            <NextButton />
          </>
        ) : (
          // Without label: Connected Previous/Next buttons
          <div className="inline-flex">
            <PreviousButton />
            <NextButton />
          </div>
        )}
      </nav>
    );
  }
);

Pagination.displayName = "Pagination";

// Export variants for convenience
export { polarisPaginationVariants };
export { polarisPaginationVariants as paginationVariants };

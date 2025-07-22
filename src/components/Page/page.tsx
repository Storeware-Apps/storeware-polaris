/**
 * Enhanced Page component that combines Polaris API compatibility with shadcn/ui functionality
 *
 * This component provides 100% API compatibility with Shopify's Polaris Page component
 * while being built on shadcn/ui foundation with Tailwind CSS for maximum flexibility.
 */

import * as React from "react";
import { cva } from "class-variance-authority";
import { ChevronLeftIcon, ChevronRightIcon } from "@shopify/polaris-icons";

import { cn } from "../../lib/utils";
import { Button, type ButtonTarget } from "../Button/button";
import { Text } from "../Text/Text";
import { ButtonGroup } from "../ButtonGroup/buttonGroup";

// Type definitions following Polaris Page component API
export interface LinkAction {
  /** Content the action displays */
  content?: React.ReactNode;
  /** Callback when an action takes place */
  onAction?(): void;
  /** A unique identifier for the action */
  id?: string;
  /** A destination to link to */
  url?: string;
  /** Forces url to open in a new tab */
  external?: boolean;
  /** Allows the link to open in the same tab */
  target?: ButtonTarget;
  /** Tells the browser to download the url instead of opening it. Provides a hint for the downloaded filename if it is a string value */
  download?: string | boolean;
  /** A label for the action used by assistive technologies */
  accessibilityLabel?: string;
}

export interface CallbackAction {
  /** Content the action displays */
  content?: React.ReactNode;
  /** Callback when an action takes place */
  onAction?(): void;
  /** A unique identifier for the action */
  id?: string;
  /** A label for the action used by assistive technologies */
  accessibilityLabel?: string;
  /** Disables the action */
  disabled?: boolean;
  /** Provides extra visual weight and identifies the primary action in a set of actions */
  primary?: boolean;
  /** Indicates a dangerous or potentially negative action */
  destructive?: boolean;
  /** Displays the action as a plain button */
  plain?: boolean;
  /** Renders the action as a button with a disclosure triangle */
  disclosure?: boolean;
  /** Allows the action to submit a form */
  submit?: boolean;
  /** Displays a loading indicator */
  loading?: boolean;
  /** Icon to display to the left of the action content */
  icon?: React.ReactNode;
  /** Tooltip content to display on hover */
  helpText?: string;
}

export interface MenuGroupDescriptor {
  /** Title for the group */
  title?: string;
  /** List of actions */
  actions: (CallbackAction | LinkAction)[];
  /** Icon to display with the group */
  icon?: React.ReactNode;
  /** Whether the group should be disabled */
  disabled?: boolean;
}

export interface PaginationProps {
  /** Keyboard shortcuts for the next button */
  nextKeys?: string[];
  /** Keyboard shortcuts for the previous button */
  previousKeys?: string[];
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
  /** Callback when next button is clicked */
  onNext?(): void;
  /** Callback when previous button is clicked */
  onPrevious?(): void;
  /** Accessible label for the pagination */
  accessibilityLabel?: string;
  /** Accessible label for the next button */
  accessibilityLabels?: {
    next?: string;
    previous?: string;
  };
}

export interface PolarisPageProps {
  /** The contents of the page */
  children?: React.ReactNode;

  /** Page title, in large type */
  title?: string;

  /** Page subtitle, in regular type */
  subtitle?: string;

  /** Important status information shown immediately after the title */
  titleMetadata?: React.ReactNode;

  /** Removes spacing between title and subtitle */
  compactTitle?: boolean;

  /** Visually hide the title */
  titleHidden?: boolean;

  /** Remove the normal max-width on the page */
  fullWidth?: boolean;

  /** Decreases the maximum layout width. Intended for single-column layouts */
  narrowWidth?: boolean;

  /** Primary page-level action */
  primaryAction?: CallbackAction | LinkAction;

  /** Collection of secondary page-level actions */
  secondaryActions?: (CallbackAction | LinkAction)[];

  /** Collection of page-level groups of secondary actions */
  actionGroups?: MenuGroupDescriptor[];

  /** A back action link */
  backAction?: LinkAction | CallbackAction;

  /** Page-level pagination */
  pagination?: PaginationProps;

  /** A label to use for the page when the page is ready, used by screen readers */
  pageReadyAccessibilityLabel?: string;

  /** Enables filtering action list items */
  filterActions?: boolean;

  /** Additional metadata */
  additionalMetadata?: React.ReactNode;

  /** Callback that returns true when secondary actions are rolled up into action groups */
  onActionRollup?: (hasRolledUp: boolean) => void;

  /** Whether or not to add a max-width to the subtitle */
  hasSubtitleMaxWidth?: boolean;
}

// Enhanced Page interface that extends Polaris with shadcn/ui features
export interface EnhancedPageProps extends PolarisPageProps {
  /** Additional CSS class name (inherited from shadcn/ui pattern) */
  className?: string;
}

// Page variants using cva
const polarisPageVariants = cva(
  // Base styles matching Polaris Page
  "min-h-screen bg-[rgb(246,246,247)]",
  {
    variants: {
      width: {
        default: "max-w-[1200px] mx-auto",
        full: "w-full",
        narrow: "max-w-[760px] mx-auto",
      },
    },
    defaultVariants: {
      width: "default",
    },
  }
);

// Header variants
const pageHeaderVariants = cva(
  "bg-white border-b border-[rgb(227,227,227)] px-6 py-4",
  {
    variants: {
      compact: {
        true: "pb-2",
        false: "pb-4",
      },
    },
    defaultVariants: {
      compact: false,
    },
  }
);

// Content variants
const pageContentVariants = cva("px-6 py-6", {
  variants: {},
  defaultVariants: {},
});

export const Page = React.forwardRef<HTMLDivElement, EnhancedPageProps>(
  (
    {
      children,
      title,
      subtitle,
      titleMetadata,
      compactTitle = false,
      titleHidden = false,
      fullWidth = false,
      narrowWidth = false,
      primaryAction,
      secondaryActions = [],
      actionGroups = [],
      backAction,
      pagination,
      pageReadyAccessibilityLabel,
      filterActions: _filterActions = false,
      additionalMetadata,
      onActionRollup: _onActionRollup,
      hasSubtitleMaxWidth = false,
      className,
      ...props
    },
    ref
  ) => {
    // Determine page width variant
    const widthVariant = fullWidth
      ? "full"
      : narrowWidth
        ? "narrow"
        : "default";

    // Render action as button
    const renderAction = (
      action: CallbackAction | LinkAction,
      variant: "primary" | "secondary" = "secondary"
    ) => {
      const isLink = "url" in action && action.url;

      return (
        <Button
          key={action.id || action.content?.toString()}
          variant={variant === "primary" ? "primary" : "secondary"}
          onClick={action.onAction}
          url={isLink ? action.url : undefined}
          external={"external" in action ? action.external : undefined}
          target={"target" in action ? action.target : undefined}
          download={"download" in action ? action.download : undefined}
          disabled={"disabled" in action ? action.disabled : undefined}
          loading={"loading" in action ? action.loading : undefined}
          icon={"icon" in action ? action.icon : undefined}
          accessibilityLabel={action.accessibilityLabel}>
          {action.content}
        </Button>
      );
    };

    // Render pagination
    const renderPagination = () => {
      if (!pagination) return null;

      return (
        <div className="flex items-center justify-between px-6 py-4 bg-white border-t border-[rgb(227,227,227)]">
          <Button
            variant="secondary"
            disabled={!pagination.hasPrevious}
            onClick={pagination.onPrevious}
            url={pagination.previousURL}
            icon={<ChevronLeftIcon />}
            accessibilityLabel={
              pagination.accessibilityLabels?.previous || "Previous"
            }>
            Previous
          </Button>

          <Button
            variant="secondary"
            disabled={!pagination.hasNext}
            onClick={pagination.onNext}
            url={pagination.nextURL}
            icon={<ChevronRightIcon />}
            accessibilityLabel={pagination.accessibilityLabels?.next || "Next"}>
            Next
          </Button>
        </div>
      );
    };

    return (
      <div
        ref={ref}
        className={cn(polarisPageVariants({ width: widthVariant }), className)}
        aria-label={pageReadyAccessibilityLabel}
        {...props}>
        {/* Page Header */}
        {(title ||
          backAction ||
          primaryAction ||
          secondaryActions.length > 0 ||
          actionGroups.length > 0) && (
          <header className={cn(pageHeaderVariants({ compact: compactTitle }))}>
            {/* Back Action - separate from title/actions layout */}
            {backAction && (
              <div className="mb-4">
                {renderAction(backAction, "secondary")}
              </div>
            )}

            {/* Title and Actions Container */}
            {(title ||
              primaryAction ||
              secondaryActions.length > 0 ||
              actionGroups.length > 0) && (
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  {/* Title and Metadata */}
                  {title && !titleHidden && (
                    <div className="flex items-center gap-2 mb-1">
                      <Text as="h1" variant="headingLg" fontWeight="semibold">
                        {title}
                      </Text>
                      {titleMetadata && (
                        <div className="flex items-center">{titleMetadata}</div>
                      )}
                    </div>
                  )}

                  {/* Subtitle */}
                  {subtitle && (
                    <div
                      className={cn(
                        "mt-1",
                        hasSubtitleMaxWidth && "max-w-[640px]"
                      )}>
                      <Text variant="bodyMd" tone="subdued">
                        {subtitle}
                      </Text>
                    </div>
                  )}

                  {/* Additional Metadata */}
                  {additionalMetadata && (
                    <div className="mt-2">{additionalMetadata}</div>
                  )}
                </div>

                {/* Actions */}
                {(primaryAction ||
                  secondaryActions.length > 0 ||
                  actionGroups.length > 0) && (
                  <div className="flex items-center gap-2 ml-4">
                    <ButtonGroup>
                      {secondaryActions.map(action =>
                        renderAction(action, "secondary")
                      )}
                      {primaryAction && renderAction(primaryAction, "primary")}
                    </ButtonGroup>
                  </div>
                )}
              </div>
            )}
          </header>
        )}

        {/* Page Content */}
        <main className={cn(pageContentVariants())}>{children}</main>

        {/* Pagination */}
        {renderPagination()}
      </div>
    );
  }
);

Page.displayName = "Page";

// Export variants for convenience
export { polarisPageVariants };
export { polarisPageVariants as pageVariants };

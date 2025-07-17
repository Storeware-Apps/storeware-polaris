/**
 * Enhanced Page component that combines Polaris API compatibility with shadcn/ui functionality
 *
 * This component provides 100% API compatibility with Shopify's Polaris Page component
 * while being built on shadcn/ui foundation with Tailwind CSS for maximum flexibility.
 */
import * as React from "react";
import { type VariantProps } from "class-variance-authority";
declare const pageVariants: (props?: ({
    narrowWidth?: boolean | null | undefined;
    fullWidth?: boolean | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface LinkAction {
    /** Content the action displays */
    content: string;
    /** A destination to link to */
    url: string;
    /** Forces url to open in a new tab */
    external?: boolean;
    /** Callback when an action takes place */
    onAction?: () => void;
}
export interface CallbackAction {
    /** Content the action displays */
    content: string;
    /** Callback when an action takes place */
    onAction: () => void;
}
export interface MenuAction {
    /** Content the action displays */
    content: string;
    /** A destination to link to */
    url?: string;
    /** Forces url to open in a new tab */
    external?: boolean;
    /** Callback when an action takes place */
    onAction?: () => void;
    /** Whether the action is disabled */
    disabled?: boolean;
    /** Whether the action is destructive */
    destructive?: boolean;
    /** Icon to display with the action */
    icon?: React.ReactNode;
    /** Visually hidden text for screen readers */
    accessibilityLabel?: string;
}
export interface MenuGroupDescriptor {
    /** Title for the group */
    title: string;
    /** Actions within the group */
    actions: MenuAction[];
}
export interface PaginationProps {
    /** Whether there is a previous page to show */
    hasPrevious?: boolean;
    /** Whether there is a next page to show */
    hasNext?: boolean;
    /** URL for the previous page */
    previousURL?: string;
    /** URL for the next page */
    nextURL?: string;
    /** Callback for the previous page */
    onPrevious?: () => void;
    /** Callback for the next page */
    onNext?: () => void;
}
export interface PolarisPageProps {
    /** The contents of the page */
    children?: React.ReactNode;
    /** Remove the normal max-width on the page */
    fullWidth?: boolean;
    /** Decreases the maximum layout width. Intended for single-column layouts */
    narrowWidth?: boolean;
    /** Visually hide the title */
    titleHidden?: boolean;
    /** A label to use for the page when the page is ready, used by screen readers. Will override the title prop if present */
    pageReadyAccessibilityLabel?: string;
    /** Enables filtering action list items */
    filterActions?: boolean;
    /** Primary page-level action */
    primaryAction?: MenuAction;
    /** Page-level pagination */
    pagination?: PaginationProps;
    /** A back action link - Use breadcrumbs prop instead as documented */
    backAction?: LinkAction | CallbackAction;
    /** Collection of secondary page-level actions */
    secondaryActions?: MenuAction[];
    /** Collection of page-level groups of secondary actions */
    actionGroups?: MenuGroupDescriptor[];
    /** Additional metadata to display */
    additionalMetadata?: React.ReactNode;
    /** Callback that returns true when secondary actions are rolled up into action groups, and false when not */
    onActionRollup?: (hasRolledUp: boolean) => void;
    /** Page title, in large type - Use breadcrumbs prop instead as documented */
    title?: string;
    /** Page subtitle, in regular type */
    subtitle?: string;
    /** Important status information shown immediately after the title */
    titleMetadata?: React.ReactNode;
    /** Removes spacing between title and subtitle */
    compactTitle?: boolean;
    /** Whether or not to add a max-width to the subtitle */
    hasSubtitleMaxWidth?: boolean;
    /** Collection of breadcrumbs */
    breadcrumbs?: Array<{
        content: string;
        url?: string;
        onAction?: () => void;
    }>;
    /** Removes the border below the page header */
    divider?: boolean;
}
export interface EnhancedPageProps extends PolarisPageProps {
    className?: string;
    id?: string;
    /** Callback when back button is clicked (legacy support) */
    onBack?: () => void;
}
export type PageProps = EnhancedPageProps & VariantProps<typeof pageVariants>;
declare const Page: React.ForwardRefExoticComponent<EnhancedPageProps & VariantProps<(props?: ({
    narrowWidth?: boolean | null | undefined;
    fullWidth?: boolean | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string> & React.RefAttributes<HTMLDivElement>>;
export { Page, pageVariants };
//# sourceMappingURL=page.d.ts.map
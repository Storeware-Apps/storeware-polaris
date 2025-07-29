import { ClassProp } from 'class-variance-authority/types';
import { ClassValue } from 'clsx';
import { ColumnDef } from '@tanstack/react-table';
import * as React_2 from 'react';
import { ReactNode } from 'react';
import { VariantProps } from 'class-variance-authority';

export declare interface AccessibilityLabels {
    /** Accessible label for the previous button */
    previous?: string;
    /** Accessible label for the next button */
    next?: string;
}

export declare interface AppBridgeModalProps {
    /** A unique identifier for the Modal */
    id: string;
    /** The content to display within a Modal */
    children?: React_2.ReactNode;
    /** The URL of the content to display within a Modal (optional) */
    src?: string;
    /** The size of the modal */
    variant?: ModalVariant;
    /** Controls whether the modal is open (controlled mode) */
    open?: boolean;
    /** Callback when modal is showing */
    onShow?: () => void;
    /** Callback when modal is hiding */
    onHide?: () => void;
    /** Standard React callback for open state changes */
    onOpenChange?: (open: boolean) => void;
    /** Additional CSS class name */
    className?: string;
    /** Action buttons to display at the bottom of the modal */
    actions?: React_2.ReactNode;
}

export declare interface AppBridgeSaveBarProps {
    /** A unique identifier for the save bar */
    id: string;
    /** HTML button elements to hook into the Save and Discard buttons (legacy API) */
    children?: React_2.ReactNode;
    /** Whether to show a confirmation dialog when the discard button is clicked */
    discardConfirmation?: boolean;
    /** Controls whether the save bar is open (controlled mode) */
    open?: boolean;
    /** Additional CSS class name */
    className?: string;
    /** Callback when the save button is clicked (new internalized API) */
    onSave?: () => void;
    /** Callback when the discard button is clicked (new internalized API) */
    onDiscard?: () => void;
    /** Text for the save button (defaults to "Save") */
    saveText?: string;
    /** Text for the discard button (defaults to "Discard") */
    discardText?: string;
    /** Whether the save button is in a loading state */
    saveLoading?: boolean;
    /** Whether the discard button is in a loading state */
    discardLoading?: boolean;
}

export declare interface AppBridgeTitleBarProps {
    /** The title of the title bar */
    title?: string;
    /** The children of the title bar (typically buttons) */
    children?: React_2.ReactNode;
    /** Additional CSS class name */
    className?: string;
}

export declare interface AppBridgeToastAPI {
    /** Show a toast notification */
    show: (message: string, options?: ToastOptions) => string;
    /** Hide a specific toast notification */
    hide: (id: string) => void;
}

export declare interface AppliedFilter {
    /** Unique key for the filter */
    key: string;
    /** Label for the applied filter */
    label: string;
    /** Callback to remove the filter */
    onRemove: () => void;
}

export declare const Badge: React_2.ForwardRefExoticComponent<EnhancedBadgeProps & React_2.RefAttributes<HTMLSpanElement>>;

export declare type BadgeProgress = "incomplete" | "partiallyComplete" | "complete";

export declare type BadgeProps = EnhancedBadgeProps;

export declare type BadgeSize = "small" | "medium";

export declare type BadgeTone = "default" | "success" | "critical" | "warning" | "attention" | "info" | "new" | "read-only" | "enabled" | "subdued";

export declare const badgeVariants: (props?: ({
    tone?: "success" | "critical" | "default" | "read-only" | "enabled" | "subdued" | "warning" | "attention" | "info" | "new" | null | undefined;
    size?: "medium" | "small" | null | undefined;
    progress?: "incomplete" | "partiallyComplete" | "complete" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Bleed: React_2.ForwardRefExoticComponent<EnhancedBleedProps & React_2.RefAttributes<HTMLDivElement>>;

export declare const bleedVariants: (props?: ({} & ClassProp) | undefined) => string;

export declare const BlockStack: React_2.ForwardRefExoticComponent<EnhancedBlockStackProps & React_2.RefAttributes<any>>;

export declare type BlockStackAlign = "start" | "center" | "end" | "space-around" | "space-between" | "space-evenly";

export declare type BlockStackAs = "div" | "span" | "ul" | "ol" | "li" | "fieldset";

export declare type BlockStackInlineAlign = "start" | "center" | "end" | "baseline" | "stretch";

export declare type BlockStackResponsiveGap = SpaceScale | {
    [Breakpoint in BreakpointsAlias]?: SpaceScale;
};

export declare const blockStackVariants: (props?: ({
    align?: "start" | "center" | "end" | "space-around" | "space-between" | "space-evenly" | null | undefined;
    inlineAlign?: "start" | "center" | "end" | "stretch" | "baseline" | null | undefined;
    reverseOrder?: boolean | null | undefined;
} & ClassProp) | undefined) => string;

export declare type BorderRadiusAliasOrScale = "0" | "050" | "100" | "150" | "200" | "300" | "400" | "500" | "750" | "full";

export declare type BorderWidthScale = "0" | "0165" | "025" | "050" | "100";

export declare const Box: React_2.ForwardRefExoticComponent<EnhancedBoxProps & React_2.RefAttributes<any>>;

export declare const boxVariants: (props?: ({
    visuallyHidden?: boolean | null | undefined;
    printHidden?: boolean | null | undefined;
} & ClassProp) | undefined) => string;

export declare type BreakpointsAlias = "xs" | "sm" | "md" | "lg" | "xl";

declare type BreakpointsAlias_2 = "xs" | "sm" | "md" | "lg" | "xl";

export declare interface BulkAction {
    /** Content for the bulk action */
    content: string;
    /** Callback when the bulk action is triggered */
    onAction: () => void;
    /** Whether the bulk action is disabled */
    disabled?: boolean;
    /** Whether the bulk action is destructive */
    destructive?: boolean;
}

export declare const Button: React_2.ForwardRefExoticComponent<EnhancedButtonProps & React_2.RefAttributes<HTMLButtonElement | HTMLAnchorElement>>;

export declare type ButtonDisclosure = boolean | "up" | "down" | "select";

export declare const ButtonGroup: React_2.ForwardRefExoticComponent<EnhancedButtonGroupProps & React_2.RefAttributes<HTMLDivElement>>;

export declare type ButtonGroupGap = "extraTight" | "tight" | "loose";

export declare type ButtonGroupVariant = "segmented";

export declare const buttonGroupVariants: (props?: ({
    gap?: "extraTight" | "tight" | "loose" | null | undefined;
    variant?: "segmented" | null | undefined;
    fullWidth?: boolean | null | undefined;
    connectedTop?: boolean | null | undefined;
    noWrap?: boolean | null | undefined;
} & ClassProp) | undefined) => string;

export declare type ButtonSize = "medium" | "large" | "micro" | "slim";

export declare type ButtonTarget = "_blank" | "_self" | "_parent" | "_top";

export declare type ButtonTextAlign = "start" | "center" | "end" | "left" | "right";

export declare type ButtonTone = "success" | "critical";

export declare type ButtonVariant = "default" | "plain" | "primary" | "secondary" | "tertiary" | "monochromePlain";

export declare const buttonVariants: (props?: ({
    variant?: "default" | "plain" | "primary" | "secondary" | "tertiary" | "monochromePlain" | null | undefined;
    size?: "medium" | "large" | "micro" | "slim" | null | undefined;
    tone?: "success" | "critical" | "default" | null | undefined;
    textAlign?: "start" | "center" | "end" | "left" | "right" | null | undefined;
    fullWidth?: boolean | null | undefined;
    pressed?: boolean | null | undefined;
} & ClassProp) | undefined) => string;

export declare interface CallbackAction {
    /** Content the action displays */
    content?: React_2.ReactNode;
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
    icon?: React_2.ReactNode;
    /** Tooltip content to display on hover */
    helpText?: string;
}

export declare const Card: React_2.ForwardRefExoticComponent<EnhancedCardProps & React_2.RefAttributes<HTMLDivElement>>;

export declare type CardBackground = ColorBackgroundAlias;

export declare type CardPadding = SpaceScale | {
    [Breakpoint in BreakpointsAlias]?: SpaceScale;
};

export declare type CardRoundedAbove = "xs" | "sm" | "md" | "lg" | "xl";

export declare interface Choice {
    /** Label for the choice */
    label: string;
    /** Value for the choice */
    value: string;
    /** Help text for the choice */
    helpText?: string;
    /** Whether the choice is disabled */
    disabled?: boolean;
    /** Additional description for the choice */
    describedByError?: boolean;
}

export declare const ChoiceList: React_2.ForwardRefExoticComponent<EnhancedChoiceListProps & React_2.RefAttributes<HTMLFieldSetElement>>;

export declare interface ChoiceListProps {
    /** Label for list of choices */
    title: React_2.ReactNode;
    /** Collection of choices */
    choices: Choice[];
    /** Collection of selected choices */
    selected: string[];
    /** Name for form input */
    name?: string;
    /** Allow merchants to select multiple options at once */
    allowMultiple?: boolean;
    /** Toggles display of the title */
    titleHidden?: boolean;
    /** Display an error message */
    error?: string | React_2.ReactNode;
    /** Disable all choices */
    disabled?: boolean;
    /** Callback when the selected choices change */
    onChange?: (selected: string[], name: string) => void;
    /** Indicates the tone of the choice list */
    tone?: "magic";
    /** Additional CSS class name */
    className?: string;
}

export declare function cn(...inputs: ClassValue[]): string;

export declare type ColorBackgroundAlias = "bg" | "bg-inverse" | "bg-surface" | "bg-surface-hover" | "bg-surface-active" | "bg-surface-selected" | "bg-surface-disabled" | "bg-surface-secondary" | "bg-surface-secondary-hover" | "bg-surface-secondary-active" | "bg-surface-secondary-selected" | "bg-surface-tertiary" | "bg-surface-tertiary-hover" | "bg-surface-tertiary-active" | "bg-surface-brand" | "bg-surface-brand-hover" | "bg-surface-brand-active" | "bg-surface-brand-selected" | "bg-surface-info" | "bg-surface-info-hover" | "bg-surface-info-active" | "bg-surface-success" | "bg-surface-success-hover" | "bg-surface-success-active" | "bg-surface-caution" | "bg-surface-caution-hover" | "bg-surface-caution-active" | "bg-surface-warning" | "bg-surface-warning-hover" | "bg-surface-warning-active" | "bg-surface-critical" | "bg-surface-critical-hover" | "bg-surface-critical-active" | "bg-surface-emphasis" | "bg-surface-emphasis-hover" | "bg-surface-emphasis-active" | "bg-surface-magic" | "bg-surface-magic-hover" | "bg-surface-magic-active" | "bg-surface-inverse" | "bg-surface-transparent" | "bg-fill" | "bg-fill-hover" | "bg-fill-active" | "bg-fill-selected" | "bg-fill-disabled" | "bg-fill-secondary" | "bg-fill-secondary-hover" | "bg-fill-secondary-active" | "bg-fill-secondary-selected" | "bg-fill-tertiary" | "bg-fill-tertiary-hover" | "bg-fill-tertiary-active" | "bg-fill-brand" | "bg-fill-brand-hover" | "bg-fill-brand-active" | "bg-fill-brand-selected" | "bg-fill-brand-disabled" | "bg-fill-info" | "bg-fill-info-hover" | "bg-fill-info-active" | "bg-fill-info-secondary" | "bg-fill-success" | "bg-fill-success-hover" | "bg-fill-success-active" | "bg-fill-success-secondary" | "bg-fill-warning" | "bg-fill-warning-hover" | "bg-fill-warning-active" | "bg-fill-warning-secondary" | "bg-fill-caution" | "bg-fill-caution-hover" | "bg-fill-caution-active" | "bg-fill-caution-secondary" | "bg-fill-critical" | "bg-fill-critical-hover" | "bg-fill-critical-active" | "bg-fill-critical-selected" | "bg-fill-critical-secondary" | "bg-fill-emphasis" | "bg-fill-emphasis-hover" | "bg-fill-emphasis-active" | "bg-fill-magic" | "bg-fill-magic-secondary" | "bg-fill-magic-secondary-hover" | "bg-fill-magic-secondary-active" | "bg-fill-inverse" | "bg-fill-inverse-hover" | "bg-fill-inverse-active" | "bg-fill-transparent" | "bg-fill-transparent-hover" | "bg-fill-transparent-active" | "bg-fill-transparent-selected" | "bg-fill-transparent-secondary" | "bg-fill-transparent-secondary-hover" | "bg-fill-transparent-secondary-active";

export declare type ColorBorderAlias = "border" | "border-hover" | "border-disabled" | "border-secondary" | "border-tertiary" | "border-focus" | "border-brand" | "border-info" | "border-success" | "border-caution" | "border-warning" | "border-critical" | "border-critical-secondary" | "border-emphasis" | "border-emphasis-hover" | "border-emphasis-active" | "border-magic" | "border-magic-secondary" | "border-magic-secondary-hover" | "border-inverse" | "border-inverse-hover" | "border-inverse-active";

export declare type ColorTextAlias = "text" | "text-secondary" | "text-disabled" | "text-link" | "text-link-hover" | "text-link-active" | "text-brand" | "text-brand-hover" | "text-brand-on-bg-fill" | "text-brand-on-bg-fill-hover" | "text-brand-on-bg-fill-active" | "text-brand-on-bg-fill-disabled" | "text-info" | "text-info-hover" | "text-info-active" | "text-info-secondary" | "text-info-on-bg-fill" | "text-success" | "text-success-hover" | "text-success-active" | "text-success-secondary" | "text-success-on-bg-fill" | "text-caution" | "text-caution-hover" | "text-caution-active" | "text-caution-secondary" | "text-caution-on-bg-fill" | "text-warning" | "text-warning-hover" | "text-warning-active" | "text-warning-secondary" | "text-warning-on-bg-fill" | "text-critical" | "text-critical-hover" | "text-critical-active" | "text-critical-secondary" | "text-critical-on-bg-fill" | "text-emphasis" | "text-emphasis-hover" | "text-emphasis-active" | "text-emphasis-on-bg-fill" | "text-emphasis-on-bg-fill-hover" | "text-emphasis-on-bg-fill-active" | "text-magic" | "text-magic-secondary" | "text-magic-on-bg-fill" | "text-inverse" | "text-inverse-secondary" | "text-link-inverse";

export declare const ContextualSaveBar: React_2.ForwardRefExoticComponent<EnhancedContextualSaveBarProps & React_2.RefAttributes<HTMLDivElement>>;

export declare interface EnhancedBadgeProps extends PolarisBadgeProps {
    /** Use the Slot component for composition (shadcn/ui feature) */
    asChild?: boolean;
}

export declare interface EnhancedBleedProps extends PolarisBleedProps {
}

export declare interface EnhancedBlockStackProps extends PolarisBlockStackProps {
}

export declare interface EnhancedBoxProps extends PolarisBoxProps {
}

export declare interface EnhancedButtonGroupProps extends PolarisButtonGroupProps {
}

export declare interface EnhancedButtonProps extends PolarisButtonProps {
    /** Use the Slot component for composition (shadcn/ui feature) */
    asChild?: boolean;
}

export declare interface EnhancedCardProps extends PolarisCardProps {
    /** Additional CSS class name (inherited from shadcn/ui pattern) */
    className?: string;
}

export declare interface EnhancedChoiceListProps extends ChoiceListProps {
    /** Use the Slot component for composition (shadcn/ui feature) */
    asChild?: boolean;
}

export declare interface EnhancedContextualSaveBarProps extends AppBridgeSaveBarProps {
}

export declare interface EnhancedIconProps extends PolarisIconProps {
    /** Additional CSS class name (inherited from shadcn/ui patterns) */
    className?: string;
}

export declare interface EnhancedIndexFiltersProps extends IndexFiltersProps {
    /** Use the Slot component for composition (shadcn/ui feature) */
    asChild?: boolean;
}

export declare interface EnhancedIndexTableProps<TData = any> extends IndexTableProps<TData> {
    /** Use the Slot component for composition (shadcn/ui feature) */
    asChild?: boolean;
    /** Data for the table (TanStack Table integration) */
    data?: TData[];
    /** Column definitions (TanStack Table integration) */
    columns?: ColumnDef<TData>[];
    /** Whether IndexFilters is present above this table (affects border-radius styling) */
    hasIndexFilters?: boolean;
}

export declare interface EnhancedInlineStackProps extends PolarisInlineStackProps {
}

export declare interface EnhancedModalProps extends AppBridgeModalProps {
    /** Whether to show the close button (default: true) */
    showCloseButton?: boolean;
}

export declare interface EnhancedPageProps extends PolarisPageProps {
    /** Additional CSS class name (inherited from shadcn/ui pattern) */
    className?: string;
}

export declare interface EnhancedPaginationProps extends PaginationProps {
    /** Use the Slot component for composition (shadcn/ui feature) */
    asChild?: boolean;
}

export declare interface EnhancedPopoverProps extends PolarisPopoverProps {
    /** Additional CSS class name (inherited from shadcn/ui pattern) */
    className?: string;
}

export declare interface EnhancedTextFieldProps extends NonMutuallyExclusiveProps {
    /** Additional CSS class name for custom styling */
    className?: string;
}

export declare interface EnhancedTextProps extends PolarisTextProps {
    /** Additional CSS class name */
    className?: string;
}

export declare interface EnhancedTitleBarProps extends AppBridgeTitleBarProps {
    /** Whether to show a border at the bottom (default: true) */
    showBorder?: boolean;
}

export declare interface EnhancedToastProps {
    /** Additional CSS class name */
    className?: string;
    /** Custom theme configuration */
    theme?: "light" | "dark" | "system";
    /** Position of the toaster */
    position?: "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right";
    /** Maximum number of toasts to show at once */
    visibleToasts?: number;
    /** Whether to show close button */
    closeButton?: boolean;
    /** Rich colors for different toast types */
    richColors?: boolean;
    /** Expand toasts by default */
    expand?: boolean;
    /** Gap between toasts */
    gap?: number;
    /** Offset from the edge of the screen */
    offset?: string | number;
}

export declare interface FilterDescriptor {
    /** Unique key for the filter */
    key: string;
    /** Label for the filter */
    label: string;
    /** Filter component */
    filter: React_2.ReactNode;
    /** Whether the filter is a shortcut (pinned) */
    shortcut?: boolean;
}

export declare const Icon: React_2.ForwardRefExoticComponent<IconProps & React_2.RefAttributes<HTMLSpanElement>>;

export declare interface IconProps extends EnhancedIconProps {
}

export declare type IconTone = "base" | "inherit" | "subdued" | "caution" | "warning" | "critical" | "interactive" | "info" | "success" | "primary" | "emphasis" | "magic" | "textCaution" | "textWarning" | "textCritical" | "textInfo" | "textSuccess" | "textPrimary" | "textMagic";

export declare const iconVariants: (props?: ({
    tone?: "success" | "critical" | "primary" | "inherit" | "base" | "caution" | "subdued" | "magic" | "warning" | "info" | "interactive" | "emphasis" | "textCaution" | "textWarning" | "textCritical" | "textInfo" | "textSuccess" | "textPrimary" | "textMagic" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const IndexFilters: React_2.ForwardRefExoticComponent<EnhancedIndexFiltersProps & React_2.RefAttributes<HTMLDivElement>>;

export declare interface IndexFiltersCancelAction {
    /** Callback for the cancel action */
    onAction: () => void;
    /** Whether the action is disabled */
    disabled?: boolean;
    /** Whether the action is loading */
    loading?: boolean;
}

export declare enum IndexFiltersMode {
    Default = "DEFAULT",
    Filtering = "FILTERING"
}

export declare interface IndexFiltersPrimaryAction {
    /** Type of primary action */
    type: "save" | "save-as";
    /** Callback for the action */
    onAction: (value?: string) => Promise<boolean> | void;
    /** Whether the action is disabled */
    disabled?: boolean;
    /** Whether the action is loading */
    loading?: boolean;
}

export declare interface IndexFiltersProps {
    /** Available sorting choices */
    sortOptions?: SortButtonChoice[];
    /** Currently selected sort choice */
    sortSelected?: string[];
    /** Callback when sort is changed */
    onSort?: (value: string[]) => void;
    /** Callback when sort key is changed */
    onSortKeyChange?: (value: string) => void;
    /** Callback when sort direction is changed */
    onSortDirectionChange?: (value: string) => void;
    /** Callback when add filter button is clicked */
    onAddFilterClick?: () => void;
    /** Primary action to display */
    primaryAction?: IndexFiltersPrimaryAction;
    /** Cancel action to display */
    cancelAction?: IndexFiltersCancelAction;
    /** Callback when editing starts */
    onEditStart?: (mode: Exclude<IndexFiltersMode, IndexFiltersMode.Default>) => void;
    /** Current mode of the component */
    mode: IndexFiltersMode;
    /** Override z-index of popovers */
    disclosureZIndexOverride?: number;
    /** Callback to set the mode */
    setMode: (mode: IndexFiltersMode) => void;
    /** Whether the component is disabled */
    disabled?: boolean;
    /** Whether to disable just the query field */
    disableQueryField?: boolean;
    /** Whether to disable sticky mode on smaller devices */
    disableStickyMode?: boolean;
    /** Whether the component should go flush to the top when sticking */
    isFlushWhenSticky?: boolean;
    /** Whether the index supports creating new views */
    canCreateNewView?: boolean;
    /** Callback when a new view is created */
    onCreateNewView?: (name: string) => Promise<boolean>;
    /** Accessibility label for the filtering button */
    filteringAccessibilityLabel?: string;
    /** Accessibility tooltip for the filtering button */
    filteringAccessibilityTooltip?: string;
    /** Whether the filter should close when clicking inside another Popover */
    closeOnChildOverlayClick?: boolean;
    /** Whether to disable keyboard shortcuts */
    disableKeyboardShortcuts?: boolean;
    /** Whether to display the edit columns button */
    showEditColumnsButton?: boolean;
    /** Whether to auto-focus the search field */
    autoFocusSearchField?: boolean;
    /** Available tabs/views */
    tabs?: TabProps[];
    /** Currently selected tab index */
    selected?: number;
    /** Callback when tab is selected */
    onSelect?: (index: number) => void;
    /** Available filters */
    filters?: FilterDescriptor[];
    /** Applied filters */
    appliedFilters?: AppliedFilter[];
    /** Callback to clear all filters */
    onClearAll?: () => void;
    /** Pinned filters that appear as buttons under the search bar */
    pinnedFilters?: PinnedFilter[];
    /** Current query value */
    queryValue?: string;
    /** Query placeholder text */
    queryPlaceholder?: string;
    /** Callback when query changes */
    onQueryChange?: (value: string) => void;
    /** Callback when query is cleared */
    onQueryClear?: () => void;
    /** Additional CSS class name */
    className?: string;
}

export declare const indexFiltersVariants: (props?: ({
    mode?: IndexFiltersMode | null | undefined;
    disabled?: boolean | null | undefined;
} & ClassProp) | undefined) => string;

export declare const IndexTable: IndexTableComponent;

declare const IndexTableCell: React_2.ForwardRefExoticComponent<IndexTableCellProps & React_2.RefAttributes<HTMLTableCellElement>>;

export declare interface IndexTableCellProps {
    /** Cell element type */
    as?: "th" | "td";
    /** Unique ID for the cell */
    id?: string;
    /** Cell content */
    children?: React_2.ReactNode;
    /** Additional CSS class name */
    className?: string;
    /** Whether to remove cell padding */
    flush?: boolean;
    /** Column span */
    colSpan?: number;
    /** Scope for header cells */
    scope?: "col" | "row" | "colgroup" | "rowgroup";
    /** Headers that describe this cell */
    headers?: string;
}

declare interface IndexTableComponent extends React_2.ForwardRefExoticComponent<EnhancedIndexTableProps & React_2.RefAttributes<HTMLTableElement>> {
    Row: typeof IndexTableRow;
    Cell: typeof IndexTableCell;
}

export declare type IndexTableHeading = IndexTableHeadingTitleString | IndexTableHeadingTitleNode;

export declare interface IndexTableHeadingTitleNode {
    /** The title of the heading as a React node */
    title: React_2.ReactNode;
    /** The alignment of the heading */
    alignment?: "start" | "center" | "end";
    /** Whether the heading is hidden */
    hidden?: boolean;
}

export declare interface IndexTableHeadingTitleString {
    /** The title of the heading */
    title: string;
    /** The alignment of the heading */
    alignment?: "start" | "center" | "end";
    /** Whether the heading is hidden */
    hidden?: boolean;
}

export declare interface IndexTableMenuGroupDescriptor {
    /** Title for the group */
    title?: string;
    /** Actions in the group */
    actions: BulkAction[];
}

export declare interface IndexTableProps<TData = any> {
    /** List of headings */
    headings: IndexTableHeading[];
    /** Promoted bulk actions */
    promotedBulkActions?: (IndexTableMenuGroupDescriptor | BulkAction)[];
    /** Bulk actions */
    bulkActions?: (IndexTableMenuGroupDescriptor | BulkAction)[];
    /** Children (table rows) */
    children?: React_2.ReactNode;
    /** Empty state */
    emptyState?: React_2.ReactNode;
    /** Sort component */
    sort?: React_2.ReactNode;
    /** Text for paginated select all action */
    paginatedSelectAllActionText?: string;
    /** Text for paginated select all */
    paginatedSelectAllText?: string;
    /** Whether the last column should be sticky */
    lastColumnSticky?: boolean;
    /** Whether the table is selectable */
    selectable?: boolean;
    /** List of sortable columns */
    sortable?: boolean[];
    /** Default sort direction */
    defaultSortDirection?: "ascending" | "descending";
    /** Current sort direction */
    sortDirection?: "ascending" | "descending";
    /** Index of the column being sorted */
    sortColumnIndex?: number;
    /** Callback when sort is triggered */
    onSort?: (headingIndex: number, direction: "ascending" | "descending") => void;
    /** Sort toggle labels */
    sortToggleLabels?: IndexTableSortToggleLabels;
    /** Whether to use zebra striping */
    hasZebraStriping?: boolean;
    /** Properties to enable pagination at the bottom of the table */
    pagination?: Omit<PaginationProps, "type">;
    /** Number of items */
    itemCount: number;
    /** Number of selected items */
    selectedItemsCount?: number | "All";
    /** Resource name */
    resourceName?: {
        singular: string;
        plural: string;
    };
    /** Whether the table is loading */
    loading?: boolean;
    /** Whether there are more items */
    hasMoreItems?: boolean;
    /** Whether the table is condensed */
    condensed?: boolean;
    /** Callback when selection changes */
    onSelectionChange?: (selectionType: SelectionType, toggleType: boolean, selection?: string | Range_2, position?: number) => void;
    /** Additional CSS class name */
    className?: string;
}

declare const IndexTableRow: React_2.ForwardRefExoticComponent<IndexTableRowProps & React_2.RefAttributes<HTMLTableRowElement>>;

export declare interface IndexTableRowProps {
    /** Table row content */
    children?: React_2.ReactNode;
    /** Unique identifier for the row */
    id: string;
    /** Whether the row is selected */
    selected?: boolean | "indeterminate";
    /** Position of the row (zero-indexed) */
    position: number;
    /** Visual tone of the row */
    tone?: "subdued" | "success" | "warning" | "critical";
    /** Whether the row is disabled */
    disabled?: boolean;
    /** Selection range for the row */
    selectionRange?: [number, number];
    /** Type of row */
    rowType?: "data" | "subheader" | "child";
    /** Accessibility label for the row */
    accessibilityLabel?: string;
    /** Click handler for the row */
    onClick?: () => void;
    /** Navigation handler for the row */
    onNavigation?: (id: string) => void;
    /** Additional CSS class name */
    className?: string;
    /** Whether the table is selectable (internal prop) */
    selectable?: boolean;
    /** Selection change handler (internal prop) */
    onSelectionChange?: (selectionType: SelectionType, toggleType: boolean, selection?: string | Range_2, position?: number) => void;
    /** Resource name for accessibility (internal prop) */
    resourceName?: {
        singular: string;
        plural: string;
    };
}

export declare interface IndexTableSortToggleLabels {
    [key: number]: {
        ascending: string;
        descending: string;
    };
}

export declare const indexTableVariants: (props?: ({
    condensed?: boolean | null | undefined;
    hasZebraStriping?: boolean | null | undefined;
    loading?: boolean | null | undefined;
    hasIndexFilters?: boolean | null | undefined;
} & ClassProp) | undefined) => string;

export declare const InlineStack: React_2.ForwardRefExoticComponent<EnhancedInlineStackProps & React_2.RefAttributes<any>>;

export declare type InlineStackAlign = "start" | "center" | "end" | "space-around" | "space-between" | "space-evenly";

export declare type InlineStackAs = "div" | "span" | "li" | "ol" | "ul";

export declare type InlineStackBlockAlign = "start" | "center" | "end" | "baseline" | "stretch";

export declare type InlineStackDirection = "row" | "row-reverse";

export declare const inlineStackVariants: (props?: ({
    align?: "start" | "center" | "end" | "space-around" | "space-between" | "space-evenly" | null | undefined;
    direction?: "row" | "row-reverse" | null | undefined;
    blockAlign?: "start" | "center" | "end" | "stretch" | "baseline" | null | undefined;
    wrap?: boolean | null | undefined;
} & ClassProp) | undefined) => string;

export declare type Key = string;

export declare interface LinkAction {
    /** Content the action displays */
    content?: React_2.ReactNode;
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

export declare const Modal: React_2.ForwardRefExoticComponent<EnhancedModalProps & React_2.RefAttributes<HTMLDivElement>>;

export declare type ModalVariant = "small" | "base" | "large" | "max";

export declare const modalVariants: (props?: ({
    variant?: "large" | "small" | "base" | "max" | null | undefined;
} & ClassProp) | undefined) => string;

declare interface NonMutuallyExclusiveProps {
    /** Text to display before value */
    prefix?: React_2.ReactNode;
    /** Text to display after value */
    suffix?: React_2.ReactNode;
    /** Content to vertically display above the input value */
    verticalContent?: React_2.ReactNode;
    /** Hint text to display */
    placeholder?: string;
    /** Initial value for the input */
    value?: string;
    /** Additional hint text to display */
    helpText?: React_2.ReactNode;
    /** Label for the input */
    label: React_2.ReactNode;
    /** Adds an action to the label */
    labelAction?: {
        content: React_2.ReactNode;
        onAction(): void;
    };
    /** Visually hide the label */
    labelHidden?: boolean;
    /** Show a clear text button in the input */
    clearButton?: boolean;
    /** Indicates whether or not the entire value should be selected on focus */
    selectTextOnFocus?: boolean;
    /** An inline autocomplete suggestion containing the input value */
    suggestion?: string;
    /** Disable editing of the input */
    readOnly?: boolean;
    /** Automatically focus the input */
    autoFocus?: boolean;
    /** Force the focus state on the input */
    focused?: boolean;
    /** Allow for multiple lines of input */
    multiline?: boolean | number;
    /** Error to display beneath the label */
    error?: TextFieldError;
    /** An element connected to the right of the input */
    connectedRight?: React_2.ReactNode;
    /** An element connected to the left of the input */
    connectedLeft?: React_2.ReactNode;
    /** Determine type of input */
    type?: TextFieldType;
    /** Name of the input */
    name?: string;
    /** ID for the input */
    id?: string;
    /** Defines a specific role attribute for the input */
    role?: string;
    /** Limit increment value for numeric and date-time inputs */
    step?: number;
    /** Increment value for numeric and date-time inputs when using Page Up or Page Down */
    largeStep?: number;
    /** Enable automatic completion by the browser */
    autoComplete: string;
    /** Mimics the behavior of the native HTML attribute, limiting the maximum value */
    max?: number | string;
    /** Maximum character length for an input */
    maxLength?: number;
    /** Maximum height of the input element. Only applies when multiline is true */
    maxHeight?: number | string;
    /** Mimics the behavior of the native HTML attribute, limiting the minimum value */
    min?: number | string;
    /** Minimum character length for an input */
    minLength?: number;
    /** A regular expression to check the value against */
    pattern?: string;
    /** Choose the keyboard that should be used on mobile devices */
    inputMode?: TextFieldInputMode;
    /** Indicate whether value should have spelling checked */
    spellCheck?: boolean;
    /** Indicates the id of a component owned by the input */
    ariaOwns?: string;
    /** Indicates whether or not a Popover is displayed */
    ariaExpanded?: boolean;
    /** Indicates the id of a component controlled by the input */
    ariaControls?: string;
    /** Indicates the id of a related component's visually focused element to the input */
    ariaActiveDescendant?: string;
    /** Indicates what kind of user input completion suggestions are provided */
    ariaAutocomplete?: string;
    /** Indicates whether or not the character count should be displayed */
    showCharacterCount?: boolean;
    /** Determines the alignment of the text in the input */
    align?: TextFieldAlignment;
    /** Visual required indicator, adds an asterisk to label */
    requiredIndicator?: boolean;
    /** Indicates whether or not a monospaced font should be used */
    monospaced?: boolean;
    /** Visual styling options for the TextField */
    variant?: TextFieldVariant;
    /** Changes the size of the input, giving it more or less padding */
    size?: TextFieldSize;
    /** Indicates the tone of the text field */
    tone?: TextFieldTone;
    /** Whether the TextField will grow as the text within the input changes */
    autoSize?: boolean;
    /** Indicates the loading state */
    loading?: boolean;
    /** Callback fired when clear button is clicked */
    onClearButtonClick?(id: string): void;
    /** Callback fired when value is changed */
    onChange?(value: string, id: string): void;
    /** When provided, callback fired instead of onChange when value is changed via the number step control */
    onSpinnerChange?(value: string, id: string): void;
    /** Callback fired when input is focused */
    onFocus?: (event?: React_2.FocusEvent) => void;
    /** Callback fired when input is blurred */
    onBlur?(event?: React_2.FocusEvent): void;
}

export declare const Page: React_2.ForwardRefExoticComponent<EnhancedPageProps & React_2.RefAttributes<HTMLDivElement>>;

export declare interface PageMenuGroupDescriptor {
    /** Title for the group */
    title?: string;
    /** List of actions */
    actions: (CallbackAction | LinkAction)[];
    /** Icon to display with the group */
    icon?: React_2.ReactNode;
    /** Whether the group should be disabled */
    disabled?: boolean;
}

export declare interface PagePaginationProps {
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

export declare const Pagination: React_2.ForwardRefExoticComponent<EnhancedPaginationProps & React_2.RefAttributes<HTMLDivElement>>;

export declare interface PaginationProps {
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
    label?: React_2.ReactNode;
    /** Layout structure of the component */
    type?: "table" | "page";
    /** Additional CSS class name */
    className?: string;
}

export declare const paginationVariants: (props?: ({
    type?: "table" | "page" | null | undefined;
    hasLabel?: boolean | null | undefined;
} & ClassProp) | undefined) => string;

export declare interface PinnedFilter {
    /** Unique key for the filter */
    key: string;
    /** Label for the filter button */
    label: string;
    /** Available choices for this filter */
    choices: PinnedFilterChoice[];
    /** Currently selected values */
    selected: string[];
    /** Whether to allow multiple selections */
    allowMultiple?: boolean;
    /** Callback when selection changes */
    onChange: (selected: string[], key: string) => void;
}

export declare interface PinnedFilterChoice {
    /** Label for the choice */
    label: string;
    /** Value for the choice */
    value: string;
    /** Help text for the choice */
    helpText?: string;
    /** Whether the choice is disabled */
    disabled?: boolean;
}

export declare type PolarisAccessibilityLabels = AccessibilityLabels;

export declare type PolarisAppliedFilter = AppliedFilter;

export declare interface PolarisBadgeProps {
    /** The content to display inside the badge */
    children?: ReactNode;
    /** Set the color of the badge for the given tone */
    tone?: BadgeTone;
    /** Set the progress of the badge */
    progress?: BadgeProgress;
    /** Icon to display in the badge */
    icon?: React_2.FunctionComponent<React_2.SVGProps<SVGSVGElement>> | "placeholder" | string;
    /** Size of the badge */
    size?: BadgeSize;
    /** Additional CSS class name */
    className?: string;
}

export declare interface PolarisBleedProps {
    /** Content to display inside the bleed container */
    children?: React_2.ReactNode;
    /** Negative horizontal space around children. Accepts a spacing token or an object of spacing tokens for different screen sizes */
    marginInline?: ResponsiveSpacing_2;
    /** Negative vertical space around children. Accepts a spacing token or an object of spacing tokens for different screen sizes */
    marginBlock?: ResponsiveSpacing_2;
    /** Negative top space around children. Accepts a spacing token or an object of spacing tokens for different screen sizes */
    marginBlockStart?: ResponsiveSpacing_2;
    /** Negative bottom space around children. Accepts a spacing token or an object of spacing tokens for different screen sizes */
    marginBlockEnd?: ResponsiveSpacing_2;
    /** Negative left space around children. Accepts a spacing token or an object of spacing tokens for different screen sizes */
    marginInlineStart?: ResponsiveSpacing_2;
    /** Negative right space around children. Accepts a spacing token or an object of spacing tokens for different screen sizes */
    marginInlineEnd?: ResponsiveSpacing_2;
    /** Additional CSS class name (inherited from shadcn/ui pattern) */
    className?: string;
}

export declare interface PolarisBlockStackProps {
    /** Content to display inside the block stack */
    children?: React_2.ReactNode;
    /** HTML Element type. Defaults to 'div' */
    as?: BlockStackAs;
    /** Vertical alignment of children */
    align?: BlockStackAlign;
    /** Horizontal alignment of children */
    inlineAlign?: BlockStackInlineAlign;
    /** The spacing between children. Accepts a spacing token or an object of spacing tokens for different screen sizes */
    gap?: BlockStackResponsiveGap;
    /** HTML id attribute */
    id?: string;
    /** Reverse the render order of child items. Defaults to false */
    reverseOrder?: boolean;
    /** Aria role */
    role?: string;
    /** Additional CSS class name (inherited from shadcn/ui pattern) */
    className?: string;
}

export declare interface PolarisBoxProps {
    /** Content to display inside the box */
    children?: React_2.ReactNode;
    /** HTML Element type */
    as?: "div" | "span" | "section" | "legend" | "ul" | "li";
    /** Background color */
    background?: ColorBackgroundAlias;
    /** Border color */
    borderColor?: ColorBorderAlias | "transparent";
    /** Border style */
    borderStyle?: "solid" | "dashed";
    /** Border radius */
    borderRadius?: BorderRadiusAliasOrScale;
    /** Vertical end horizontal start border radius */
    borderEndStartRadius?: BorderRadiusAliasOrScale;
    /** Vertical end horizontal end border radius */
    borderEndEndRadius?: BorderRadiusAliasOrScale;
    /** Vertical start horizontal start border radius */
    borderStartStartRadius?: BorderRadiusAliasOrScale;
    /** Vertical start horizontal end border radius */
    borderStartEndRadius?: BorderRadiusAliasOrScale;
    /** Border width */
    borderWidth?: BorderWidthScale;
    /** Vertical start border width */
    borderBlockStartWidth?: BorderWidthScale;
    /** Vertical end border width */
    borderBlockEndWidth?: BorderWidthScale;
    /** Horizontal start border width */
    borderInlineStartWidth?: BorderWidthScale;
    /** Horizontal end border width */
    borderInlineEndWidth?: BorderWidthScale;
    /** Color of children */
    color?: ColorTextAlias;
    /** HTML id attribute */
    id?: string;
    /** Minimum height of container */
    minHeight?: string;
    /** Minimum width of container */
    minWidth?: string;
    /** Maximum width of container */
    maxWidth?: string;
    /** Clip horizontal content of children */
    overflowX?: "hidden" | "scroll" | "clip";
    /** Clip vertical content of children */
    overflowY?: "hidden" | "scroll" | "clip";
    /** Spacing around children. Accepts a spacing token or an object of spacing tokens for different screen sizes */
    padding?: ResponsiveSpacing;
    /** Vertical start and end spacing around children. Accepts a spacing token or an object of spacing tokens for different screen sizes */
    paddingBlock?: ResponsiveSpacing;
    /** Vertical start spacing around children. Accepts a spacing token or an object of spacing tokens for different screen sizes */
    paddingBlockStart?: ResponsiveSpacing;
    /** Vertical end spacing around children. Accepts a spacing token or an object of spacing tokens for different screen sizes */
    paddingBlockEnd?: ResponsiveSpacing;
    /** Horizontal start and end spacing around children. Accepts a spacing token or an object of spacing tokens for different screen sizes */
    paddingInline?: ResponsiveSpacing;
    /** Horizontal start spacing around children. Accepts a spacing token or an object of spacing tokens for different screen sizes */
    paddingInlineStart?: ResponsiveSpacing;
    /** Horizontal end spacing around children. Accepts a spacing token or an object of spacing tokens for different screen sizes */
    paddingInlineEnd?: ResponsiveSpacing;
    /** Aria role */
    role?: string;
    /** Shadow on box */
    shadow?: ShadowAliasOrScale;
    /** Set tab order */
    tabIndex?: number;
    /** Width of container */
    width?: string;
    /** Position of box */
    position?: "relative" | "absolute" | "fixed" | "sticky";
    /** Top position of box */
    insetBlockStart?: ResponsiveSpacing;
    /** Bottom position of box */
    insetBlockEnd?: ResponsiveSpacing;
    /** Left position of box */
    insetInlineStart?: ResponsiveSpacing;
    /** Right position of box */
    insetInlineEnd?: ResponsiveSpacing;
    /** Opacity of box */
    opacity?: string;
    /** Outline color */
    outlineColor?: ColorBorderAlias;
    /** Outline style */
    outlineStyle?: "solid" | "dashed";
    /** Outline width */
    outlineWidth?: BorderWidthScale;
    /** Visually hide the contents during print */
    printHidden?: boolean;
    /** Visually hide the contents (still announced by screenreader) */
    visuallyHidden?: boolean;
    /** z-index of box */
    zIndex?: string;
    /** Additional CSS class name (inherited from shadcn/ui pattern) */
    className?: string;
}

export declare type PolarisBulkAction = BulkAction;

export declare type PolarisButtonDisclosure = ButtonDisclosure;

export declare type PolarisButtonGroupGap = ButtonGroupGap;

export declare interface PolarisButtonGroupProps {
    /** Determines the space between button group items */
    gap?: ButtonGroupGap;
    /** Styling variant for group */
    variant?: ButtonGroupVariant;
    /** Buttons will stretch/shrink to occupy the full width */
    fullWidth?: boolean;
    /** Remove top left and right border radius */
    connectedTop?: boolean;
    /** Prevent buttons in button group from wrapping to next line */
    noWrap?: boolean;
    /** Button components */
    children?: React_2.ReactNode;
    /** Additional CSS class name (inherited from shadcn/ui pattern) */
    className?: string;
}

export declare type PolarisButtonGroupVariant = ButtonGroupVariant;

export declare interface PolarisButtonProps {
    /** The content to display inside the button */
    children?: string | string[] | ReactNode;
    /** Changes the size of the button, giving it more or less padding */
    size?: ButtonSize;
    /** Changes the inner text alignment of the button */
    textAlign?: ButtonTextAlign;
    /** Allows the button to grow to the width of its container */
    fullWidth?: boolean;
    /** Displays the button with a disclosure icon. Defaults to `down` when set to true */
    disclosure?: ButtonDisclosure;
    /** Removes underline from button text (including on interaction) */
    removeUnderline?: boolean;
    /** Icon to display to the left of the button content */
    icon?: ReactNode;
    /** Indicates whether or not the button is the primary navigation link when rendered inside of an `IndexTable.Row` */
    dataPrimaryLink?: boolean;
    /** Sets the color treatment of the Button */
    tone?: ButtonTone;
    /** Changes the visual appearance of the Button */
    variant?: ButtonVariant;
    /** A unique identifier for the button */
    id?: string;
    /** A destination to link to, rendered in the href attribute of a link */
    url?: string;
    /** Forces url to open in a new tab */
    external?: boolean;
    /** Where to display the url */
    target?: ButtonTarget;
    /** Tells the browser to download the url instead of opening it */
    download?: string | boolean;
    /** Allows the button to submit a form */
    submit?: boolean;
    /** Disables the button, disallowing merchant interaction */
    disabled?: boolean;
    /** Replaces button text with a spinner while a background action is being performed */
    loading?: boolean;
    /** Sets the button in a pressed state */
    pressed?: boolean;
    /** Visually hidden text for screen readers */
    accessibilityLabel?: string;
    /** A valid WAI-ARIA role to define the semantic value of this element */
    role?: string;
    /** Id of the element the button controls */
    ariaControls?: string;
    /** Tells screen reader the controlled element is expanded */
    ariaExpanded?: boolean;
    /** Indicates the ID of the element that describes the button */
    ariaDescribedBy?: string;
    /** Indicates the current checked state of the button when acting as a toggle or switch */
    ariaChecked?: "false" | "true";
    /** Callback when clicked */
    onClick?: () => unknown;
    /** Callback when button becomes focused */
    onFocus?: () => void;
    /** Callback when focus leaves button */
    onBlur?: () => void;
    /** Callback when a keypress event is registered on the button */
    onKeyPress?: (event: React_2.KeyboardEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
    /** Callback when a keyup event is registered on the button */
    onKeyUp?: (event: React_2.KeyboardEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
    /** Callback when a keydown event is registered on the button */
    onKeyDown?: (event: React_2.KeyboardEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
    /** Callback when mouse enter */
    onMouseEnter?: () => void;
    /** Callback when element is touched */
    onTouchStart?: () => void;
    /** Callback when pointerdown event is being triggered */
    onPointerDown?: (event: React_2.PointerEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
    /** Additional CSS class name (inherited from shadcn/ui Button) */
    className?: string;
}

export declare type PolarisButtonSize = ButtonSize;

export declare type PolarisButtonTarget = ButtonTarget;

export declare type PolarisButtonTextAlign = ButtonTextAlign;

export declare type PolarisButtonTone = ButtonTone;

export declare type PolarisButtonVariant = ButtonVariant;

export declare type PolarisCardBackground = CardBackground;

export declare type PolarisCardPadding = CardPadding;

export declare interface PolarisCardProps {
    /** Card content */
    children?: React_2.ReactNode;
    /** Background color */
    background?: CardBackground;
    /** The spacing around the card */
    padding?: CardPadding;
    /** Border radius value above a set breakpoint */
    roundedAbove?: CardRoundedAbove;
}

export declare type PolarisCardRoundedAbove = CardRoundedAbove;

export declare const polarisCardVariants: (props?: ({
    roundedAbove?: "xs" | "sm" | "md" | "lg" | "xl" | null | undefined;
} & ClassProp) | undefined) => string;

export declare type PolarisChoice = Choice;

export declare type PolarisChoiceListProps = ChoiceListProps;

export declare const polarisChoiceListVariants: (props?: ({
    tone?: "default" | "magic" | null | undefined;
    disabled?: boolean | null | undefined;
} & ClassProp) | undefined) => string;

export declare type PolarisEnhancedCardProps = EnhancedCardProps;

export declare type PolarisEnhancedPopoverProps = EnhancedPopoverProps;

export declare type PolarisFilterDescriptor = FilterDescriptor;

export declare interface PolarisIconProps {
    /** The SVG contents to display in the icon (icons should fit in a 20 × 20 pixel viewBox) */
    source: React_2.ComponentType<{
        className?: string;
    }> | React_2.ReactElement | string;
    /** Set the color for the SVG fill */
    tone?: IconTone;
    /** Descriptive text to be read to screenreaders */
    accessibilityLabel?: string;
}

export declare type PolarisIconTone = IconTone;

export declare type PolarisIndexFiltersProps = IndexFiltersProps;

export declare type PolarisIndexTableHeading = IndexTableHeading;

export declare type PolarisIndexTableProps<TData = any> = IndexTableProps<TData>;

export declare interface PolarisInlineStackProps {
    /** Content to display inside the inline stack */
    children?: React_2.ReactNode;
    /** HTML Element type. Defaults to 'div' */
    as?: InlineStackAs;
    /** Horizontal alignment of children */
    align?: InlineStackAlign;
    /** Horizontal direction in which children are laid out */
    direction?: InlineStackDirection;
    /** Vertical alignment of children */
    blockAlign?: InlineStackBlockAlign;
    /** The spacing between elements. Accepts a spacing token or an object of spacing tokens for different screen sizes */
    gap?: ResponsiveGap;
    /** Wrap stack elements to additional rows as needed on small screens. Defaults to true */
    wrap?: boolean;
    /** Additional CSS class name (inherited from shadcn/ui pattern) */
    className?: string;
}

export declare type PolarisKey = Key;

export declare type PolarisMenuGroupDescriptor = IndexTableMenuGroupDescriptor;

export declare interface PolarisPageProps {
    /** The contents of the page */
    children?: React_2.ReactNode;
    /** Page title, in large type */
    title?: string;
    /** Page subtitle, in regular type */
    subtitle?: string;
    /** Important status information shown immediately after the title */
    titleMetadata?: React_2.ReactNode;
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
    actionGroups?: PageMenuGroupDescriptor[];
    /** A back action link */
    backAction?: LinkAction | CallbackAction;
    /** Page-level pagination */
    pagination?: PagePaginationProps;
    /** A label to use for the page when the page is ready, used by screen readers */
    pageReadyAccessibilityLabel?: string;
    /** Enables filtering action list items */
    filterActions?: boolean;
    /** Additional metadata */
    additionalMetadata?: React_2.ReactNode;
    /** Callback that returns true when secondary actions are rolled up into action groups */
    onActionRollup?: (hasRolledUp: boolean) => void;
    /** Whether or not to add a max-width to the subtitle */
    hasSubtitleMaxWidth?: boolean;
}

export declare const polarisPageVariants: (props?: ({
    width?: "default" | "full" | "narrow" | null | undefined;
} & ClassProp) | undefined) => string;

export declare type PolarisPaginationProps = PaginationProps;

export declare type PolarisPinnedFilter = PinnedFilter;

export declare type PolarisPinnedFilterChoice = PinnedFilterChoice;

export declare type PolarisPopoverAutofocusTarget = PopoverAutofocusTarget;

export declare type PolarisPopoverCloseSource = PopoverCloseSource;

export declare type PolarisPopoverPreferredAlignment = PopoverPreferredAlignment;

export declare type PolarisPopoverPreferredPosition = PopoverPreferredPosition;

export declare interface PolarisPopoverProps {
    /** The content to display inside the popover */
    children?: React_2.ReactNode;
    /** The preferred direction to open the popover */
    preferredPosition?: PopoverPreferredPosition;
    /** The preferred alignment of the popover relative to its activator */
    preferredAlignment?: PopoverPreferredAlignment;
    /** Show or hide the Popover */
    active: boolean;
    /** The element to activate the Popover */
    activator: React_2.ReactElement;
    /** Use the activator's input element to calculate the Popover position */
    preferInputActivator?: boolean;
    /** The element type to wrap the activator with */
    activatorWrapper?: string;
    /** Override on the default z-index of 400 */
    zIndexOverride?: number;
    /** Prevents focusing the activator or the next focusable element when the popover is deactivated */
    preventFocusOnClose?: boolean;
    /** Automatically add wrap content in a section */
    sectioned?: boolean;
    /** Allow popover to stretch to the full width of its activator */
    fullWidth?: boolean;
    /** Allow popover to stretch to fit content vertically */
    fullHeight?: boolean;
    /** Allow popover content to determine the overlay width and height */
    fluidContent?: boolean;
    /** Remains in a fixed position */
    fixed?: boolean;
    /** Used to illustrate the type of popover element */
    ariaHaspopup?: boolean | "false" | "true" | "menu" | "dialog" | "grid" | "listbox" | "tree";
    /** Allow the popover overlay to be hidden when printing */
    hideOnPrint?: boolean;
    /** Callback when popover is closed */
    onClose: (source: PopoverCloseSource) => void;
    /** The preferred auto focus target defaulting to the popover container */
    autofocusTarget?: PopoverAutofocusTarget;
    /** Prevents closing the popover when other overlays are clicked */
    preventCloseOnChildOverlayClick?: boolean;
    /** Prevents page scrolling when the end of the scrollable Popover overlay content is reached */
    captureOverscroll?: boolean;
}

export declare const polarisPopoverVariants: (props?: ({
    sectioned?: boolean | null | undefined;
    fullWidth?: boolean | null | undefined;
    fullHeight?: boolean | null | undefined;
    fluidContent?: boolean | null | undefined;
    hideOnPrint?: boolean | null | undefined;
} & ClassProp) | undefined) => string;

export declare type PolarisSortButtonChoice = SortButtonChoice;

export declare type PolarisTabProps = TabProps;

export declare type PolarisTextAlignment = TextAlignment;

export declare type PolarisTextElement = TextElement;

export declare interface PolarisTextFieldProps extends NonMutuallyExclusiveProps {
    onChange?(value: string, id: string): void;
    readonly?: boolean;
    disabled?: boolean;
    selectTextOnFocus?: boolean;
    suggestion?: string;
}

export declare type PolarisTextFontWeight = TextFontWeight;

export declare interface PolarisTextProps {
    /** Text to display */
    children?: React_2.ReactNode;
    /** The element type */
    as?: TextElement;
    /** Adjust horizontal alignment of text */
    alignment?: TextAlignment;
    /** Prevent text from overflowing */
    breakWord?: boolean;
    /** Adjust tone of text */
    tone?: TextTone;
    /** Adjust weight of text */
    fontWeight?: TextFontWeight;
    /** HTML id attribute */
    id?: string;
    /** Use a numeric font variant with monospace appearance */
    numeric?: boolean;
    /** Truncate text overflow with ellipsis */
    truncate?: boolean;
    /** Typographic style of text */
    variant?: TextVariant;
    /** Visually hide the text */
    visuallyHidden?: boolean;
    /** Add a line-through to the text */
    textDecorationLine?: "line-through";
}

export declare type PolarisTextTone = TextTone;

export declare type PolarisTextVariant = TextVariant;

export declare const Popover: React_2.ForwardRefExoticComponent<EnhancedPopoverProps & React_2.RefAttributes<HTMLDivElement>>;

export declare type PopoverAutofocusTarget = "none" | "first-node" | "container";

export declare type PopoverCloseSource = "click-outside" | "escape" | "focus-outside" | "content-click";

export declare type PopoverPreferredAlignment = "left" | "center" | "right";

export declare type PopoverPreferredPosition = "above" | "below" | "mostSpace" | "cover";

declare interface Range_2 {
    start: number;
    end: number;
}
export { Range_2 as Range }

export declare type ResponsiveGap = SpaceScale | {
    [Breakpoint in BreakpointsAlias]?: SpaceScale;
};

export declare type ResponsiveSpacing = SpaceScale | {
    [Breakpoint in BreakpointsAlias]?: SpaceScale;
};

declare type ResponsiveSpacing_2 = SpaceScale_2 | {
    [Breakpoint in BreakpointsAlias_2]?: SpaceScale_2;
};

export declare const saveBarVariants: (props?: ({
    open?: boolean | null | undefined;
} & ClassProp) | undefined) => string;

export declare type SelectionType = "single" | "multiple" | "page" | "all";

export declare type ShadowAliasOrScale = "0" | "100" | "200" | "300" | "400" | "500" | "600" | "bevel-100" | "inset-100" | "inset-200" | "button" | "button-hover" | "button-inset" | "button-primary" | "button-primary-hover" | "button-primary-inset" | "button-primary-critical" | "button-primary-critical-hover" | "button-primary-critical-inset" | "button-primary-success" | "button-primary-success-hover" | "button-primary-success-inset" | "border-inset";

export declare interface SortButtonChoice {
    /** Label for the sort option */
    label: string;
    /** Value for the sort option */
    value: string;
    /** Direction label for the sort option */
    directionLabel: string;
}

export declare type SpaceScale = "0" | "025" | "050" | "100" | "150" | "200" | "300" | "400" | "500" | "600" | "800" | "1000" | "1200" | "1600" | "2000" | "2400" | "2800" | "3200";

declare type SpaceScale_2 = "0" | "025" | "050" | "100" | "150" | "200" | "300" | "400" | "500" | "600" | "800" | "1000" | "1200" | "1600" | "2000" | "2400" | "2800" | "3200";

export declare interface TabAction {
    /** Type of action */
    type: "rename" | "duplicate" | "edit" | "delete";
    /** Callback for the action */
    onAction?: () => void;
    /** Primary action callback (for rename/duplicate) */
    onPrimaryAction?: (value: string) => Promise<boolean>;
}

export declare interface TabProps {
    /** Content for the tab */
    content: string;
    /** Index of the tab */
    index: number;
    /** Callback when tab is clicked */
    onAction: () => void;
    /** ID for the tab */
    id: string;
    /** Whether the tab is locked (cannot be deleted) */
    isLocked?: boolean;
    /** Actions available for the tab */
    actions?: TabAction[];
}

declare const Text_2: React_2.ForwardRefExoticComponent<EnhancedTextProps & VariantProps<(props?: ({
    variant?: "headingXs" | "headingSm" | "headingMd" | "headingLg" | "headingXl" | "heading2xl" | "heading3xl" | "bodyXs" | "bodySm" | "bodyMd" | "bodyLg" | null | undefined;
    alignment?: "start" | "center" | "end" | "justify" | null | undefined;
    tone?: "success" | "critical" | "disabled" | "inherit" | "text-inverse" | "text-inverse-secondary" | "base" | "caution" | "subdued" | "magic" | "magic-subdued" | null | undefined;
    fontWeight?: "medium" | "bold" | "regular" | "semibold" | null | undefined;
    breakWord?: boolean | null | undefined;
    truncate?: boolean | null | undefined;
    numeric?: boolean | null | undefined;
    visuallyHidden?: boolean | null | undefined;
    textDecorationLine?: "none" | "line-through" | null | undefined;
} & ClassProp) | undefined) => string> & React_2.RefAttributes<any>>;
export { Text_2 as Text }

export declare type TextAlignment = "start" | "center" | "end" | "justify";

export declare type TextElement = "dt" | "dd" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "strong" | "legend";

export declare const TextField: React_2.ForwardRefExoticComponent<TextFieldProps & React_2.RefAttributes<HTMLInputElement | HTMLTextAreaElement>>;

export declare type TextFieldAlignment = "left" | "center" | "right";

export declare type TextFieldError = string | boolean | React_2.ReactNode;

export declare type TextFieldInputMode = "none" | "text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url";

export declare interface TextFieldProps extends EnhancedTextFieldProps {
    onChange?(value: string, id: string): void;
    readonly?: boolean;
    disabled?: boolean;
    selectTextOnFocus?: boolean;
    suggestion?: string;
}

export declare type TextFieldSize = "slim" | "medium";

export declare type TextFieldTone = "magic";

export declare type TextFieldType = "text" | "email" | "number" | "integer" | "password" | "search" | "tel" | "url" | "date" | "datetime-local" | "month" | "time" | "week" | "currency";

export declare type TextFieldVariant = "inherit" | "borderless";

export declare const textFieldVariants: (props?: ({
    size?: "medium" | "slim" | null | undefined;
    variant?: "inherit" | "borderless" | null | undefined;
    align?: "center" | "left" | "right" | null | undefined;
    tone?: "magic" | null | undefined;
    error?: boolean | null | undefined;
    monospaced?: boolean | null | undefined;
    multiline?: boolean | null | undefined;
} & ClassProp) | undefined) => string;

export declare type TextFontWeight = "regular" | "medium" | "semibold" | "bold";

export declare type TextProps = EnhancedTextProps & VariantProps<typeof textVariants>;

export declare type TextTone = "base" | "disabled" | "inherit" | "success" | "critical" | "caution" | "subdued" | "text-inverse" | "text-inverse-secondary" | "magic" | "magic-subdued";

export declare type TextVariant = "headingXs" | "headingSm" | "headingMd" | "headingLg" | "headingXl" | "heading2xl" | "heading3xl" | "bodyXs" | "bodySm" | "bodyMd" | "bodyLg";

export declare const textVariants: (props?: ({
    variant?: "headingXs" | "headingSm" | "headingMd" | "headingLg" | "headingXl" | "heading2xl" | "heading3xl" | "bodyXs" | "bodySm" | "bodyMd" | "bodyLg" | null | undefined;
    alignment?: "start" | "center" | "end" | "justify" | null | undefined;
    tone?: "success" | "critical" | "disabled" | "inherit" | "text-inverse" | "text-inverse-secondary" | "base" | "caution" | "subdued" | "magic" | "magic-subdued" | null | undefined;
    fontWeight?: "medium" | "bold" | "regular" | "semibold" | null | undefined;
    breakWord?: boolean | null | undefined;
    truncate?: boolean | null | undefined;
    numeric?: boolean | null | undefined;
    visuallyHidden?: boolean | null | undefined;
    textDecorationLine?: "none" | "line-through" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const TitleBar: React_2.ForwardRefExoticComponent<EnhancedTitleBarProps & React_2.RefAttributes<HTMLDivElement>>;

export declare const titleBarVariants: (props?: ({
    showBorder?: boolean | null | undefined;
} & ClassProp) | undefined) => string;

export declare const toast: AppBridgeToastAPI;

export declare interface ToastAction {
    /** Label for the action button */
    label: string;
    /** Callback when action is clicked */
    onClick: () => void;
}

export declare const Toaster: React_2.ForwardRefExoticComponent<EnhancedToastProps & React_2.RefAttributes<HTMLElement>>;

export declare interface ToastOptions {
    /** Duration in milliseconds before the toast auto-dismisses (default: 4000) */
    duration?: number;
    /** Action button configuration */
    action?: ToastAction;
    /** Callback when toast is dismissed */
    onDismiss?: () => void;
    /** Whether the toast can be dismissed by clicking (default: true) */
    dismissible?: boolean;
}

export declare const toastVariants: (props?: ({
    variant?: "success" | "default" | "error" | "warning" | "info" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const useIndexResourceState: <T extends {
    id: string;
}>(resources: T[], options?: {
    selectedResources?: string[];
    allResourcesSelected?: boolean;
}) => {
    selectedResources: string[];
    allResourcesSelected: boolean;
    handleSelectionChange: (selectionType: SelectionType, toggleType: boolean, selection?: string | Range_2, _position?: number) => void;
    clearSelection: () => void;
};

export declare const useSetIndexFiltersMode: () => {
    mode: IndexFiltersMode;
    setMode: React_2.Dispatch<React_2.SetStateAction<IndexFiltersMode>>;
};

export { }

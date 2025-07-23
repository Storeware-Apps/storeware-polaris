/**
 * Enhanced IndexFilters component that combines Polaris API compatibility with shadcn/ui functionality
 *
 * This component provides 100% API compatibility with Shopify's Polaris IndexFilters component
 * while being built on shadcn/ui foundation with Tailwind CSS for maximum flexibility.
 */

import * as React from "react";
import { cva } from "class-variance-authority";
import {
  SearchIcon,
  FilterIcon,
  SortIcon,
  XIcon,
  SettingsIcon,
} from "@shopify/polaris-icons";

import { cn } from "../../lib/utils";
import { Button } from "../Button/button";
import { TextField } from "../TextField/TextField";
import { Text } from "../Text/Text";
import { Popover } from "../Popover/popover";
import { ChoiceList } from "../ChoiceList/choiceList";

// Type definitions following Polaris IndexFilters component API
export interface SortButtonChoice {
  /** Label for the sort option */
  label: string;
  /** Value for the sort option */
  value: string;
  /** Direction label for the sort option */
  directionLabel: string;
}

export interface TabProps {
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

export interface TabAction {
  /** Type of action */
  type: "rename" | "duplicate" | "edit" | "delete";
  /** Callback for the action */
  onAction?: () => void;
  /** Primary action callback (for rename/duplicate) */
  onPrimaryAction?: (value: string) => Promise<boolean>;
}

export interface IndexFiltersPrimaryAction {
  /** Type of primary action */
  type: "save" | "save-as";
  /** Callback for the action */
  onAction: (value?: string) => Promise<boolean> | void;
  /** Whether the action is disabled */
  disabled?: boolean;
  /** Whether the action is loading */
  loading?: boolean;
}

export interface IndexFiltersCancelAction {
  /** Callback for the cancel action */
  onAction: () => void;
  /** Whether the action is disabled */
  disabled?: boolean;
  /** Whether the action is loading */
  loading?: boolean;
}

export interface FilterDescriptor {
  /** Unique key for the filter */
  key: string;
  /** Label for the filter */
  label: string;
  /** Filter component */
  filter: React.ReactNode;
  /** Whether the filter is a shortcut (pinned) */
  shortcut?: boolean;
}

export interface AppliedFilter {
  /** Unique key for the filter */
  key: string;
  /** Label for the applied filter */
  label: string;
  /** Callback to remove the filter */
  onRemove: () => void;
}

export interface PinnedFilterChoice {
  /** Label for the choice */
  label: string;
  /** Value for the choice */
  value: string;
  /** Help text for the choice */
  helpText?: string;
  /** Whether the choice is disabled */
  disabled?: boolean;
}

export interface PinnedFilter {
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

export enum IndexFiltersMode {
  Default = "DEFAULT",
  Filtering = "FILTERING",
}

export interface IndexFiltersProps {
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
  onEditStart?: (
    mode: Exclude<IndexFiltersMode, IndexFiltersMode.Default>
  ) => void;
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

// Enhanced IndexFilters interface that extends Polaris with shadcn/ui features
export interface EnhancedIndexFiltersProps extends IndexFiltersProps {
  /** Use the Slot component for composition (shadcn/ui feature) */
  asChild?: boolean;
}

// Re-export types for convenience (maintaining backward compatibility)
export type PolarisIndexFiltersProps = IndexFiltersProps;
export type PolarisTabProps = TabProps;
export type PolarisSortButtonChoice = SortButtonChoice;
export type PolarisFilterDescriptor = FilterDescriptor;
export type PolarisAppliedFilter = AppliedFilter;
export type PolarisPinnedFilter = PinnedFilter;
export type PolarisPinnedFilterChoice = PinnedFilterChoice;

// Create Polaris-specific IndexFilters variants using CVA
const polarisIndexFiltersVariants = cva("w-full", {
  variants: {
    mode: {
      [IndexFiltersMode.Default]: "",
      [IndexFiltersMode.Filtering]: "",
    },
    disabled: {
      true: "opacity-50 pointer-events-none",
      false: "",
    },
  },
  defaultVariants: {
    mode: IndexFiltersMode.Default,
    disabled: false,
  },
});

// Hook for managing IndexFilters mode
export const useSetIndexFiltersMode = () => {
  const [mode, setMode] = React.useState<IndexFiltersMode>(
    IndexFiltersMode.Default
  );

  return { mode, setMode };
};

// PinnedFilterButton component for individual filter buttons
interface PinnedFilterButtonProps {
  filter: PinnedFilter;
  disabled?: boolean;
}

const PinnedFilterButton: React.FC<PinnedFilterButtonProps> = ({
  filter,
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleSelectionChange = (selected: string[]) => {
    filter.onChange(selected, filter.key);
  };

  const handleButtonClick = () => {
    if (isOpen) {
      // If popover is open, close it
      setIsOpen(false);
    } else {
      // If popover is closed, open it
      setIsOpen(true);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Popover
      active={isOpen}
      activator={
        <Button
          size="micro"
          variant="tertiary"
          onClick={handleButtonClick}
          disabled={disabled}
          pressed={isOpen}>
          {filter.label}
          {filter.selected.length > 0 && (
            <span className="ml-1 px-1.5 py-0.5 text-xs bg-blue-100 text-black rounded-full">
              {filter.selected.length}
            </span>
          )}
        </Button>
      }
      onClose={handleClose}
      preferredPosition="below"
      sectioned>
      <ChoiceList
        title={filter.label}
        titleHidden
        choices={filter.choices}
        selected={filter.selected}
        onChange={handleSelectionChange}
        allowMultiple={filter.allowMultiple}
      />
    </Popover>
  );
};

// Internal SortPopover component
const SortPopover: React.FC<{
  sortOptions: SortButtonChoice[];
  onSort?: (value: string[]) => void;
  disabled?: boolean;
}> = ({ sortOptions, onSort, disabled }) => {
  const [active, setActive] = React.useState(false);

  return (
    <Popover
      active={active}
      activator={
        <Button
          variant="tertiary"
          icon={<SortIcon className="size-4" />}
          disclosure
          disabled={disabled}
          onClick={() => setActive(!active)}>
          Sort
        </Button>
      }
      onClose={() => setActive(false)}>
      <div className="p-2 min-w-48">
        {sortOptions.map(option => (
          <button
            key={option.value}
            className="w-full text-left px-3 py-2 hover:bg-[#f6f6f6] rounded text-sm"
            onClick={() => {
              if (onSort) onSort([option.value]);
              setActive(false);
            }}>
            {option.label} ({option.directionLabel})
          </button>
        ))}
      </div>
    </Popover>
  );
};

export const IndexFilters = React.forwardRef<
  HTMLDivElement,
  EnhancedIndexFiltersProps
>(
  (
    {
      sortOptions,
      sortSelected: _sortSelected,
      onSort,
      onSortKeyChange: _onSortKeyChange,
      onSortDirectionChange: _onSortDirectionChange,
      onAddFilterClick: _onAddFilterClick,
      primaryAction,
      cancelAction,
      onEditStart,
      mode,
      disclosureZIndexOverride: _disclosureZIndexOverride,
      setMode,
      disabled = false,
      disableQueryField = false,
      disableStickyMode: _disableStickyMode,
      isFlushWhenSticky: _isFlushWhenSticky,
      canCreateNewView: _canCreateNewView,
      onCreateNewView,
      filteringAccessibilityLabel = "Filter",
      filteringAccessibilityTooltip: _filteringAccessibilityTooltip,
      closeOnChildOverlayClick: _closeOnChildOverlayClick,
      disableKeyboardShortcuts: _disableKeyboardShortcuts,
      showEditColumnsButton = false,
      autoFocusSearchField = false,
      tabs,
      selected = 0,
      onSelect,
      filters: _filters,
      appliedFilters,
      onClearAll,
      pinnedFilters,
      queryValue = "",
      queryPlaceholder = "Searching in all..",
      onQueryChange,
      onQueryClear,
      className,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const [isFilteringMode, setIsFilteringMode] = React.useState(
      mode === IndexFiltersMode.Filtering
    );

    React.useEffect(() => {
      setIsFilteringMode(mode === IndexFiltersMode.Filtering);
    }, [mode]);

    const handleFilterToggle = () => {
      const newMode = isFilteringMode
        ? IndexFiltersMode.Default
        : IndexFiltersMode.Filtering;
      setMode(newMode);
      setIsFilteringMode(!isFilteringMode);

      if (!isFilteringMode && onEditStart) {
        onEditStart(IndexFiltersMode.Filtering);
      }
    };

    const handleQueryChange = (value: string) => {
      if (onQueryChange) {
        onQueryChange(value);
      }
    };

    const handleQueryClear = () => {
      if (onQueryClear) {
        onQueryClear();
      }
    };

    return (
      <div
        ref={ref}
        className={cn(
          polarisIndexFiltersVariants({ mode, disabled }),
          className
        )}
        {...props}>
        {/* Filter Controls */}
        <div className="p-1 border border-[#e3e3e3] rounded-md border-b-0 rounded-b-none">
          {isFilteringMode ? (
            <div className="space-y-2">
              {/* Search and Filter Row */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  {sortOptions && sortOptions.length > 0 && (
                    <SortPopover
                      sortOptions={sortOptions}
                      onSort={onSort}
                      disabled={disabled}
                    />
                  )}
                </div>

                {/* Search Field - extends from left to the cancel button */}
                <div className="flex-1">
                  <TextField
                    label=""
                    labelHidden
                    value={queryValue}
                    onChange={handleQueryChange}
                    placeholder={queryPlaceholder}
                    // prefix={<SearchIcon className="size-4 text-gray-500" />}
                    clearButton={queryValue.length > 0}
                    onClearButtonClick={handleQueryClear}
                    disabled={disableQueryField || disabled}
                    autoFocus={autoFocusSearchField}
                    autoComplete="off"
                    size="slim"
                  />
                </div>

                <Button
                  onClick={handleFilterToggle}
                  disabled={disabled}
                  size="medium">
                  Cancel
                </Button>
              </div>

              {/* Pinned Filters with light border */}
              {pinnedFilters && pinnedFilters.length > 0 && (
                <div className="border-t border-gray-200 pt-0.5">
                  <div className="flex flex-wrap gap-2">
                    {pinnedFilters.map(filter => (
                      <PinnedFilterButton
                        key={filter.key}
                        filter={filter}
                        disabled={disabled}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Applied Filters */}
              {appliedFilters && appliedFilters.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {appliedFilters.map(filter => (
                    <div
                      key={filter.key}
                      className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-black rounded-md text-sm">
                      <Text variant="bodySm">{filter.label}</Text>
                      <button
                        onClick={filter.onRemove}
                        className="p-0.5 hover:bg-black rounded">
                        <XIcon className="size-3" />
                      </button>
                    </div>
                  ))}
                  {onClearAll && (
                    <Button variant="plain" size="micro" onClick={onClearAll}>
                      Clear all
                    </Button>
                  )}
                </div>
              )}

              {/* Action Buttons */}
              {(primaryAction || cancelAction) && (
                <div className="flex justify-end gap-2">
                  {cancelAction && (
                    <Button
                      variant="secondary"
                      onClick={cancelAction.onAction}
                      disabled={cancelAction.disabled}
                      loading={cancelAction.loading}>
                      Cancel
                    </Button>
                  )}
                  {primaryAction && (
                    <Button
                      variant="primary"
                      onClick={() => {
                        if (
                          primaryAction.type === "save-as" &&
                          onCreateNewView
                        ) {
                          // This would typically open a modal for naming the view
                          const viewName = prompt("Enter view name:");
                          if (viewName) {
                            primaryAction.onAction(viewName);
                          }
                        } else {
                          primaryAction.onAction();
                        }
                      }}
                      disabled={primaryAction.disabled}
                      loading={primaryAction.loading}>
                      {primaryAction.type === "save" ? "Save" : "Save as"}
                    </Button>
                  )}
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {sortOptions && sortOptions.length > 0 && (
                  <SortPopover
                    sortOptions={sortOptions}
                    onSort={onSort}
                    disabled={disabled}
                  />
                )}

                {/* Individual Tab Buttons */}
                {tabs && tabs.length > 0 && (
                  <>
                    {tabs.map((tab, index) => (
                      <Button
                        size="micro"
                        key={tab.id}
                        variant="tertiary"
                        pressed={index === selected}
                        onClick={() => {
                          tab.onAction();
                          if (onSelect) onSelect(index);
                        }}
                        disabled={disabled}>
                        {tab.content}
                      </Button>
                    ))}
                  </>
                )}
              </div>

              <div className="flex items-center gap-2">
                {showEditColumnsButton && (
                  <Button
                    variant="tertiary"
                    icon={<SettingsIcon className="size-4" />}
                    accessibilityLabel="Edit columns"
                    disabled={disabled}>
                    Edit columns
                  </Button>
                )}

                <Button
                  variant="tertiary"
                  className="flex w-12 justify-items-end"
                  icon={
                    <>
                      <SearchIcon className="size-5" />
                      <FilterIcon className="size-5" />
                    </>
                  }
                  onClick={handleFilterToggle}
                  pressed={false}
                  accessibilityLabel={filteringAccessibilityLabel}
                  disabled={disabled}></Button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
);

IndexFilters.displayName = "IndexFilters";

// Export variants for convenience
export { polarisIndexFiltersVariants };
export { polarisIndexFiltersVariants as indexFiltersVariants };

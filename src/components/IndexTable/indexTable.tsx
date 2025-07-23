/**
 * Enhanced IndexTable component that combines Polaris API compatibility with shadcn/ui functionality
 *
 * This component provides 100% API compatibility with Shopify's Polaris IndexTable component
 * while being built on shadcn/ui foundation with Tailwind CSS and TanStack Table for maximum flexibility.
 */

import * as React from "react";
import { cva } from "class-variance-authority";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  type ColumnDef,
} from "@tanstack/react-table";

import { cn } from "../../lib/utils";
import { Text } from "../Text/Text";
import { Button } from "../Button/button";
import { Pagination, type PaginationProps } from "../Pagination/pagination";

// Internal Checkbox component for IndexTable selection
interface CheckboxProps {
  checked?: boolean | "indeterminate";
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  "aria-label"?: string;
  className?: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      checked,
      onChange,
      disabled,
      "aria-label": ariaLabel,
      className,
      ...props
    },
    ref
  ) => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    React.useImperativeHandle(ref, () => inputRef.current!);

    React.useEffect(() => {
      if (inputRef.current) {
        inputRef.current.indeterminate = checked === "indeterminate";
      }
    }, [checked]);

    return (
      <input
        ref={inputRef}
        type="checkbox"
        checked={checked === true}
        onChange={e => onChange?.(e.target.checked)}
        disabled={disabled}
        aria-label={ariaLabel}
        className={cn(
          "h-4 w-4 rounded border border-gray-300 focus:ring-2 focus:ring-black focus:ring-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-50",
          // Custom styling to ensure black checkmark and proper appearance
          "accent-black [&:checked]:bg-black [&:checked]:border-black",
          "checked:bg-black checked:border-black",
          className
        )}
        {...props}
      />
    );
  }
);

Checkbox.displayName = "Checkbox";

// Type definitions following Polaris IndexTable component API
export interface IndexTableHeadingTitleString {
  /** The title of the heading */
  title: string;
  /** The alignment of the heading */
  alignment?: "start" | "center" | "end";
  /** Whether the heading is hidden */
  hidden?: boolean;
}

export interface IndexTableHeadingTitleNode {
  /** The title of the heading as a React node */
  title: React.ReactNode;
  /** The alignment of the heading */
  alignment?: "start" | "center" | "end";
  /** Whether the heading is hidden */
  hidden?: boolean;
}

export type IndexTableHeading =
  | IndexTableHeadingTitleString
  | IndexTableHeadingTitleNode;

export interface IndexTableSortToggleLabels {
  [key: number]: {
    ascending: string;
    descending: string;
  };
}

export interface BulkAction {
  /** Content for the bulk action */
  content: string;
  /** Callback when the bulk action is triggered */
  onAction: () => void;
  /** Whether the bulk action is disabled */
  disabled?: boolean;
  /** Whether the bulk action is destructive */
  destructive?: boolean;
}

export interface MenuGroupDescriptor {
  /** Title for the group */
  title?: string;
  /** Actions in the group */
  actions: BulkAction[];
}

export type SelectionType = "single" | "multiple" | "page" | "all";

export interface Range {
  start: number;
  end: number;
}

export interface IndexTableProps<TData = any> {
  /** List of headings */
  headings: IndexTableHeading[];
  /** Promoted bulk actions */
  promotedBulkActions?: (MenuGroupDescriptor | BulkAction)[];
  /** Bulk actions */
  bulkActions?: (MenuGroupDescriptor | BulkAction)[];
  /** Children (table rows) */
  children?: React.ReactNode;
  /** Empty state */
  emptyState?: React.ReactNode;
  /** Sort component */
  sort?: React.ReactNode;
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
  onSort?: (
    headingIndex: number,
    direction: "ascending" | "descending"
  ) => void;
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
  resourceName?: { singular: string; plural: string };
  /** Whether the table is loading */
  loading?: boolean;
  /** Whether there are more items */
  hasMoreItems?: boolean;
  /** Whether the table is condensed */
  condensed?: boolean;
  /** Callback when selection changes */
  onSelectionChange?: (
    selectionType: SelectionType,
    toggleType: boolean,
    selection?: string | Range,
    position?: number
  ) => void;
  /** Additional CSS class name */
  className?: string;
}

// Enhanced IndexTable interface that extends Polaris with shadcn/ui features
export interface EnhancedIndexTableProps<TData = any>
  extends IndexTableProps<TData> {
  /** Use the Slot component for composition (shadcn/ui feature) */
  asChild?: boolean;
  /** Data for the table (TanStack Table integration) */
  data?: TData[];
  /** Column definitions (TanStack Table integration) */
  columns?: ColumnDef<TData>[];
  /** Whether IndexFilters is present above this table (affects border-radius styling) */
  hasIndexFilters?: boolean;
}

// Re-export types for convenience (maintaining backward compatibility)
export type PolarisIndexTableProps<TData = any> = IndexTableProps<TData>;
export type PolarisIndexTableHeading = IndexTableHeading;
export type PolarisBulkAction = BulkAction;
export type PolarisMenuGroupDescriptor = MenuGroupDescriptor;

// Create Polaris-specific IndexTable variants using CVA
const polarisIndexTableVariants = cva(
  "w-full border-collapse bg-white overflow-hidden relative before:content-[''] before:absolute before:inset-0 before:z-[101] before:pointer-events-none before:border before:border-[#e3e3e3] before:mix-blend-luminosity before:shadow-[var(--p-shadow-bevel-100)]",
  {
    variants: {
      condensed: {
        true: "text-sm",
        false: "",
      },
      hasZebraStriping: {
        true: "[&_tbody_tr:nth-child(even)]:bg-gray-50",
        false: "",
      },
      loading: {
        true: "opacity-50 pointer-events-none",
        false: "",
      },
      hasIndexFilters: {
        true: "before:rounded-b-[8px]",
        false: "before:rounded-[8px]",
      },
    },
    defaultVariants: {
      condensed: false,
      hasZebraStriping: false,
      loading: false,
      hasIndexFilters: false,
    },
  }
);

const tableHeaderVariants = cva(
  "border-b border-gray-100 overflow-hidden bg-[#f7fafc] p-2 text-left text-xs font-medium text-gray-500 capitalize",
  {
    variants: {
      alignment: {
        start: "text-left",
        center: "text-center",
        end: "text-right",
      },
      sortable: {
        true: "cursor-pointer hover:bg-gray-100",
        false: "",
      },
      sticky: {
        true: "sticky right-0 bg-gray-50",
        false: "",
      },
      isSelectionColumn: {
        true: "w-12",
        false: "",
      },
    },
    defaultVariants: {
      alignment: "start",
      sortable: false,
      sticky: false,
      isSelectionColumn: false,
    },
  }
);

const tableCellVariants = cva("p-2 whitespace-nowrap text-sm text-gray-900", {
  variants: {
    alignment: {
      start: "text-left",
      center: "text-center",
      end: "text-right",
    },
    sticky: {
      true: "sticky right-0 bg-white",
      false: "",
    },
    isSelectionColumn: {
      true: "w-12",
      false: "",
    },
  },
  defaultVariants: {
    alignment: "start",
    sticky: false,
    isSelectionColumn: false,
  },
});

// Define the compound component type
interface IndexTableComponent
  extends React.ForwardRefExoticComponent<
    EnhancedIndexTableProps & React.RefAttributes<HTMLTableElement>
  > {
  Row: typeof IndexTableRow;
  Cell: typeof IndexTableCell;
}

const IndexTableBase = React.forwardRef<
  HTMLTableElement,
  EnhancedIndexTableProps
>(
  (
    {
      headings,
      promotedBulkActions: _promotedBulkActions,
      bulkActions,
      children,
      emptyState,
      sort: _sort,
      paginatedSelectAllActionText: _paginatedSelectAllActionText,
      paginatedSelectAllText: _paginatedSelectAllText,
      lastColumnSticky = false,
      selectable = true,
      sortable,
      defaultSortDirection = "descending",
      sortDirection: _sortDirection,
      sortColumnIndex: _sortColumnIndex,
      onSort: _onSort,
      sortToggleLabels: _sortToggleLabels,
      hasZebraStriping = false,
      pagination,
      itemCount,
      selectedItemsCount,
      resourceName,
      loading = false,
      hasMoreItems: _hasMoreItems,
      condensed = false,
      onSelectionChange,
      className,
      asChild = false,
      data,
      columns,
      hasIndexFilters = false,
      ...props
    },
    ref
  ) => {
    // If using TanStack Table integration
    const table = React.useMemo(() => {
      if (data && columns) {
        return useReactTable({
          data,
          columns,
          getCoreRowModel: getCoreRowModel(),
        });
      }
      return null;
    }, [data, columns]);

    const renderTableHeader = () => {
      // Check if any items are selected to show selection header
      const hasSelectedItems =
        (typeof selectedItemsCount === "number" && selectedItemsCount > 0) ||
        selectedItemsCount === "All";

      // Helper function to render bulk action buttons
      const renderBulkActionButtons = () => {
        if (!bulkActions || bulkActions.length === 0 || !hasSelectedItems) {
          return null;
        }

        return (
          <div className="flex items-center gap-2 ml-auto">
            {bulkActions.map((action, index) => {
              // Handle both BulkAction and MenuGroupDescriptor
              if ("actions" in action) {
                // This is a MenuGroupDescriptor - render all actions in the group
                return action.actions.map((groupAction, groupIndex) => (
                  <Button
                    key={`${index}-${groupIndex}`}
                    variant="primary"
                    size="slim"
                    onClick={groupAction.onAction}
                    disabled={groupAction.disabled}
                    tone={groupAction.destructive ? "critical" : undefined}>
                    {groupAction.content}
                  </Button>
                ));
              } else {
                // This is a BulkAction
                return (
                  <Button
                    key={index}
                    variant="primary"
                    size="slim"
                    onClick={action.onAction}
                    disabled={action.disabled}
                    tone={action.destructive ? "critical" : undefined}>
                    {action.content}
                  </Button>
                );
              }
            })}
          </div>
        );
      };

      if (table) {
        // TanStack Table headers
        return (
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {selectable && (
                  <th
                    className={cn(
                      tableHeaderVariants({
                        isSelectionColumn: true,
                      })
                    )}>
                    <Checkbox
                      checked={
                        selectedItemsCount === "All"
                          ? true
                          : selectedItemsCount === itemCount && itemCount > 0
                            ? true
                            : typeof selectedItemsCount === "number" &&
                                selectedItemsCount > 0
                              ? "indeterminate"
                              : false
                      }
                      onChange={checked => {
                        if (onSelectionChange) {
                          onSelectionChange(
                            checked ? "page" : "page",
                            checked,
                            undefined,
                            undefined
                          );
                        }
                      }}
                      aria-label={`Select all ${resourceName?.plural || "items"}`}
                    />
                  </th>
                )}
                {hasSelectedItems ? (
                  <th
                    colSpan={headerGroup.headers.length}
                    className={cn(
                      tableHeaderVariants({
                        alignment: "start",
                      }),
                      "text-left"
                    )}>
                    <div className="flex items-center justify-between w-full">
                      <Text variant="bodyMd" as="span">
                        {selectedItemsCount === "All"
                          ? `All ${resourceName?.plural || "items"} selected`
                          : `${selectedItemsCount} ${selectedItemsCount === 1 ? resourceName?.singular || "item" : resourceName?.plural || "items"} selected`}
                      </Text>
                      {renderBulkActionButtons()}
                    </div>
                  </th>
                ) : (
                  headerGroup.headers.map((header, index) => (
                    <th
                      key={header.id}
                      className={cn(
                        tableHeaderVariants({
                          alignment: "start",
                          sortable: header.column.getCanSort(),
                          sticky:
                            lastColumnSticky &&
                            index === headerGroup.headers.length - 1,
                        })
                      )}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  ))
                )}
              </tr>
            ))}
          </thead>
        );
      }

      // Polaris-style headers
      return (
        <thead>
          <tr>
            {selectable && (
              <th
                className={cn(
                  tableHeaderVariants({
                    isSelectionColumn: true,
                  })
                )}>
                <Checkbox
                  checked={
                    selectedItemsCount === "All"
                      ? true
                      : selectedItemsCount === itemCount && itemCount > 0
                        ? true
                        : typeof selectedItemsCount === "number" &&
                            selectedItemsCount > 0
                          ? "indeterminate"
                          : false
                  }
                  onChange={checked => {
                    if (onSelectionChange) {
                      onSelectionChange(
                        checked ? "page" : "page",
                        checked,
                        undefined,
                        undefined
                      );
                    }
                  }}
                  aria-label={`Select all ${resourceName?.plural || "items"}`}
                />
              </th>
            )}
            {hasSelectedItems ? (
              <th
                colSpan={headings.length}
                className={cn(
                  tableHeaderVariants({
                    alignment: "start",
                  }),
                  "text-left"
                )}>
                <div className="flex items-center justify-between w-full">
                  <Text variant="bodyMd" as="span">
                    {selectedItemsCount === "All"
                      ? `All ${resourceName?.plural || "items"} selected`
                      : `${selectedItemsCount} ${selectedItemsCount === 1 ? resourceName?.singular || "item" : resourceName?.plural || "items"} selected`}
                  </Text>
                  {renderBulkActionButtons()}
                </div>
              </th>
            ) : (
              headings.map((heading, index) => (
                <th
                  key={index}
                  className={cn(
                    tableHeaderVariants({
                      alignment: heading.alignment || "start",
                      sortable: sortable?.[index] || false,
                      sticky: lastColumnSticky && index === headings.length - 1,
                    })
                  )}>
                  <Text variant="bodyMd" fontWeight="semibold">
                    {typeof heading.title === "string"
                      ? heading.title
                      : heading.title}
                  </Text>
                </th>
              ))
            )}
          </tr>
        </thead>
      );
    };

    const renderTableBody = () => {
      if (table) {
        // TanStack Table body
        return (
          <tbody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map(row => (
                <tr key={row.id} className="hover:bg-gray-50">
                  {row.getVisibleCells().map((cell, index) => (
                    <td
                      key={cell.id}
                      className={cn(
                        tableCellVariants({
                          alignment: "start",
                          sticky:
                            lastColumnSticky &&
                            index === row.getVisibleCells().length - 1,
                        })
                      )}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns?.length || headings.length}
                  className="h-24 text-center">
                  {emptyState || (
                    <Text variant="bodyMd" tone="subdued">
                      No results.
                    </Text>
                  )}
                </td>
              </tr>
            )}
          </tbody>
        );
      }

      // Polaris-style body with children
      // Clone children to pass selection props to IndexTable.Row components
      const enhancedChildren = React.Children.map(children, child => {
        if (React.isValidElement(child) && child.type === IndexTableRow) {
          return React.cloneElement(child, {
            selectable,
            onSelectionChange,
            resourceName,
            ...child.props,
          });
        }
        return child;
      });

      return <tbody>{enhancedChildren}</tbody>;
    };

    if (itemCount === 0 && emptyState) {
      return (
        <div className="flex items-center justify-center p-8">{emptyState}</div>
      );
    }

    return (
      <div className="overflow-x-auto">
        <table
          ref={ref}
          className={cn(
            polarisIndexTableVariants({
              condensed,
              hasZebraStriping,
              loading,
              hasIndexFilters,
            }),
            className
          )}
          {...props}>
          {renderTableHeader()}
          {renderTableBody()}
        </table>
        {pagination && (
          <div className="">
            <Pagination type="table" {...pagination} />
          </div>
        )}
      </div>
    );
  }
);

IndexTableBase.displayName = "IndexTable";

// IndexTable.Row subcomponent
export interface IndexTableRowProps {
  /** Table row content */
  children?: React.ReactNode;
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
  onSelectionChange?: (
    selectionType: SelectionType,
    toggleType: boolean,
    selection?: string | Range,
    position?: number
  ) => void;
  /** Resource name for accessibility (internal prop) */
  resourceName?: { singular: string; plural: string };
}

const IndexTableRow = React.forwardRef<HTMLTableRowElement, IndexTableRowProps>(
  (
    {
      children,
      id,
      selected = false,
      position,
      tone,
      disabled = false,
      selectionRange: _selectionRange,
      rowType = "data",
      accessibilityLabel,
      onClick,
      onNavigation: _onNavigation,
      className,
      selectable = true,
      onSelectionChange,
      resourceName,
      ...props
    },
    ref
  ) => {
    const rowVariants = cva(
      "hover:bg-[#f7fafc] transition-colors border-b border-[#e3e3e3] last:border-b-0 ",
      {
        variants: {
          selected: {
            true: "bg-blue-50",
            indeterminate: "bg-blue-25",
            false: "",
          },
          tone: {
            subdued: "opacity-60",
            success: "bg-green-50",
            warning: "bg-yellow-50",
            critical: "bg-red-50",
          },
          disabled: {
            true: "opacity-50 pointer-events-none",
            false: "",
          },
          rowType: {
            data: "",
            subheader: "bg-gray-100 font-semibold",
            child: "pl-8",
          },
        },
        defaultVariants: {
          selected: false,
          disabled: false,
          rowType: "data",
        },
      }
    );

    const handleRowClick = (event: React.MouseEvent<HTMLTableRowElement>) => {
      // Don't trigger row selection if clicking on the checkbox or other interactive elements
      const target = event.target as HTMLElement;
      if (
        (target as HTMLInputElement).type === "checkbox" ||
        target.closest('input[type="checkbox"]') ||
        target.closest("button") ||
        target.closest("a")
      ) {
        return;
      }

      // Trigger selection when clicking on the row
      if (selectable && onSelectionChange && !disabled) {
        onSelectionChange("single", !selected, id, position);
      }

      // Call the original onClick handler if provided
      if (onClick) {
        onClick();
      }
    };

    return (
      <tr
        ref={ref}
        className={cn(
          rowVariants({
            selected:
              selected === true
                ? true
                : selected === "indeterminate"
                  ? "indeterminate"
                  : false,
            tone,
            disabled,
            rowType,
          }),
          // Add cursor pointer when selectable
          selectable && !disabled && "cursor-pointer",
          className
        )}
        onClick={handleRowClick}
        {...props}>
        {selectable && (
          <td
            className={cn(
              tableCellVariants({
                isSelectionColumn: true,
              })
            )}>
            <Checkbox
              checked={selected === true}
              onChange={checked => {
                if (onSelectionChange) {
                  onSelectionChange("single", checked, id, position);
                }
              }}
              disabled={disabled}
              aria-label={
                accessibilityLabel ||
                `Select ${resourceName?.singular || "item"}`
              }
            />
          </td>
        )}
        {children}
      </tr>
    );
  }
);

IndexTableRow.displayName = "IndexTable.Row";

// IndexTable.Cell subcomponent
export interface IndexTableCellProps {
  /** Cell element type */
  as?: "th" | "td";
  /** Unique ID for the cell */
  id?: string;
  /** Cell content */
  children?: React.ReactNode;
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

const IndexTableCell = React.forwardRef<
  HTMLTableCellElement,
  IndexTableCellProps
>(
  (
    {
      as: Component = "td",
      id,
      children,
      className,
      flush = false,
      colSpan,
      scope,
      headers,
      ...props
    },
    ref
  ) => {
    const cellVariants = cva("border-gray-200 text-xs", {
      variants: {
        flush: {
          true: "",
          false: "p-2",
        },
      },
      defaultVariants: {
        flush: false,
      },
    });

    return (
      <Component
        ref={ref}
        id={id}
        className={cn(cellVariants({ flush }), className)}
        colSpan={colSpan}
        scope={scope}
        headers={headers}
        {...props}>
        {children}
      </Component>
    );
  }
);

IndexTableCell.displayName = "IndexTable.Cell";

// Hook for managing IndexTable resource state (similar to Polaris useIndexResourceState)
export const useIndexResourceState = <T extends { id: string }>(
  resources: T[],
  options?: {
    selectedResources?: string[];
    allResourcesSelected?: boolean;
  }
) => {
  const [selectedResources, setSelectedResources] = React.useState<string[]>(
    options?.selectedResources || []
  );
  const [allResourcesSelected, setAllResourcesSelected] = React.useState(
    options?.allResourcesSelected || false
  );

  const handleSelectionChange = React.useCallback(
    (
      selectionType: SelectionType,
      toggleType: boolean,
      selection?: string | Range,
      _position?: number
    ) => {
      if (selectionType === "single" && typeof selection === "string") {
        if (toggleType) {
          setSelectedResources(prev =>
            prev.includes(selection)
              ? prev.filter(id => id !== selection)
              : [...prev, selection]
          );
        } else {
          setSelectedResources([selection]);
        }
      } else if (
        selectionType === "multiple" &&
        typeof selection === "object"
      ) {
        const { start, end } = selection;
        const rangeIds = resources
          .slice(start, end + 1)
          .map(resource => resource.id);
        if (toggleType) {
          setSelectedResources(prev => [...new Set([...prev, ...rangeIds])]);
        } else {
          setSelectedResources(rangeIds);
        }
      } else if (selectionType === "page") {
        if (toggleType) {
          const allIds = resources.map(resource => resource.id);
          setSelectedResources(allIds);
          setAllResourcesSelected(false);
        } else {
          setSelectedResources([]);
          setAllResourcesSelected(false);
        }
      } else if (selectionType === "all") {
        setAllResourcesSelected(toggleType);
        if (toggleType) {
          setSelectedResources([]);
        }
      }
    },
    [resources]
  );

  const clearSelection = React.useCallback(() => {
    setSelectedResources([]);
    setAllResourcesSelected(false);
  }, []);

  return {
    selectedResources,
    allResourcesSelected,
    handleSelectionChange,
    clearSelection,
  };
};

// Create the compound component
const IndexTable = IndexTableBase as IndexTableComponent;
IndexTable.Row = IndexTableRow;
IndexTable.Cell = IndexTableCell;

// Export the compound component
export { IndexTable };

// Export variants for convenience
export { polarisIndexTableVariants };
export { polarisIndexTableVariants as indexTableVariants };

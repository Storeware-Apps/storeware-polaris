/**
 * Enhanced Select component that combines Polaris API compatibility with shadcn/ui functionality
 *
 * This component provides 100% API compatibility with Shopify's Polaris Select component
 * while being built on Radix UI Select foundation with Tailwind CSS for maximum flexibility.
 */

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { cva } from "class-variance-authority";
import { ChevronDownIcon, CheckIcon } from "@shopify/polaris-icons";
import { cn } from "../../lib/utils";
import { Button } from "../Button/button";

// Type definitions following Polaris Select component API
export type SelectOption = string | StrictOption;

export interface StrictOption {
  /** Machine value of the option; this is the value passed to `onChange` */
  value: string;
  /** Human-readable text for the option */
  label: string;
  /** Option will be visible, but not selectable */
  disabled?: boolean;
  /** Element to display to the left of the option label. Does not show in the dropdown. */
  prefix?: React.ReactNode;
  /** Unique key applied to the option element. Defaults to option value prop when undefined. */
  key?: string;
}

export interface SelectGroup {
  title: string;
  options: SelectOption[];
}

export interface Action {
  /** A unique identifier for the action */
  id?: string;
  /** Content the action displays */
  content?: string;
  /** Visually hidden text for screen readers */
  accessibilityLabel?: string;
  /** A destination to link to, rendered in the action */
  url?: string;
  /** Forces url to open in a new tab */
  external?: boolean;
  /** Where to display the url */
  target?: "_blank" | "_self" | "_parent" | "_top";
  /** Callback when an action takes place */
  onAction?(): void;
  /** Callback when mouse enter */
  onMouseEnter?(): void;
  /** Callback when element is touched */
  onTouchStart?(): void;
}

// Error type (can be string, boolean, or React node)
export type SelectError = string | boolean | React.ReactNode;

// Polaris Select Props interface - matches Shopify Polaris Select component exactly
export interface PolarisSelectProps {
  /** List of options or option groups to choose from */
  options?: (SelectOption | SelectGroup)[];
  /** Label for the select */
  label: React.ReactNode;
  /** Adds an action to the label */
  labelAction?: Action;
  /** Visually hide the label */
  labelHidden?: boolean;
  /** Show the label to the left of the value, inside the control */
  labelInline?: boolean;
  /** Disable input */
  disabled?: boolean;
  /** Additional text to aide in use */
  helpText?: React.ReactNode;
  /** Example text to display as placeholder */
  placeholder?: string;
  /** ID for form input */
  id?: string;
  /** Name for form input */
  name?: string;
  /** Value for form input */
  value?: string;
  /** Display an error state */
  error?: SelectError;
  /** Callback when selection is changed */
  onChange?(selected: string, id: string): void;
  /** Callback when select is focused */
  onFocus?(event?: React.FocusEvent<HTMLButtonElement>): void;
  /** Callback when focus is removed */
  onBlur?(event?: React.FocusEvent<HTMLButtonElement>): void;
  /** Visual required indicator, add an asterisk to label */
  requiredIndicator?: boolean;
  /** Indicates the tone of the select */
  tone?: "magic";
}

// Enhanced props interface that includes className for custom styling
export interface EnhancedSelectProps extends PolarisSelectProps {
  /** Additional CSS class name for custom styling */
  className?: string;
}

// Combined props interface
export interface SelectProps extends EnhancedSelectProps {}

// Create Polaris-specific select variants using CVA
const polarisSelectVariants = cva(
  "flex h-10 w-full items-center justify-between rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-inter",
  {
    variants: {
      tone: {
        magic: "border-purple-500 focus:ring-purple-500",
        default: "border-gray-300 focus:ring-blue-500",
      },
      error: {
        true: "border-red-500 focus:ring-red-500",
        false: "",
      },
      labelInline: {
        true: "rounded-r-lg rounded-l-none border-l-0",
        false: "",
      },
    },
    defaultVariants: {
      tone: "default",
      error: false,
      labelInline: false,
    },
  }
);

const selectContentVariants = cva(
  "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-lg border border-gray-200 bg-white text-gray-900 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 font-inter",
  {
    variants: {
      position: {
        "item-aligned":
          "data-[side=bottom]:translate-y-1 data-[side=top]:-translate-y-1",
        popper:
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      },
    },
    defaultVariants: {
      position: "popper",
    },
  }
);

const selectItemVariants = cva(
  "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
  {
    variants: {
      disabled: {
        true: "opacity-50 pointer-events-none",
        false: "",
      },
    },
    defaultVariants: {
      disabled: false,
    },
  }
);

// Helper function to normalize options
const normalizeOption = (option: SelectOption): StrictOption => {
  if (typeof option === "string") {
    return { value: option, label: option };
  }
  return option;
};

// Helper function to check if an option is a group
const isSelectGroup = (
  option: SelectOption | SelectGroup
): option is SelectGroup => {
  return typeof option === "object" && "title" in option && "options" in option;
};

export const Select = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  SelectProps
>(
  (
    {
      options = [],
      label,
      labelAction,
      labelHidden = false,
      labelInline = false,
      disabled = false,
      helpText,
      placeholder,
      id,
      name,
      value,
      error,
      onChange,
      onFocus,
      onBlur,
      requiredIndicator = false,
      tone,
      className,
      ...props
    },
    ref
  ) => {
    // Generate unique ID if not provided
    const generatedId = React.useId();
    const selectId = id || generatedId;

    // Handle value change
    const handleValueChange = React.useCallback(
      (newValue: string) => {
        if (onChange) {
          onChange(newValue, selectId);
        }
      },
      [onChange, selectId]
    );

    // Build className using our Polaris variants
    const selectClassName = cn(
      polarisSelectVariants({
        tone: tone === "magic" ? "magic" : "default",
        error: Boolean(error),
        labelInline,
      }),
      className
    );

    // Render label action if provided
    const labelActionMarkup = labelAction && (
      <Button
        variant="plain"
        size="micro"
        onClick={labelAction.onAction}
        url={labelAction.url}
        external={labelAction.external}
        target={labelAction.target}
        onMouseEnter={labelAction.onMouseEnter}
        onTouchStart={labelAction.onTouchStart}
        accessibilityLabel={labelAction.accessibilityLabel}>
        {labelAction.content}
      </Button>
    );

    // Render label
    const labelMarkup = (
      <div
        className={cn(
          "flex items-center justify-between",
          labelInline && "sr-only",
          labelHidden && "sr-only"
        )}>
        <label
          htmlFor={selectId}
          className={cn(
            "block text-sm font-medium text-gray-900 mb-1",
            labelInline && "sr-only",
            labelHidden && "sr-only"
          )}>
          {label}
          {requiredIndicator && <span className="text-red-500 ml-1">*</span>}
        </label>
        {!labelInline && labelActionMarkup}
      </div>
    );

    // Render inline label
    const inlineLabelMarkup = labelInline && !labelHidden && (
      <div className="flex items-center bg-gray-50 border border-gray-300 border-r-0 rounded-l-lg px-3 py-2 text-sm font-medium text-gray-700">
        {label}
        {requiredIndicator && <span className="text-red-500 ml-1">*</span>}
        {labelActionMarkup && <div className="ml-2">{labelActionMarkup}</div>}
      </div>
    );

    // Render help text
    const helpTextMarkup = helpText && (
      <div className="mt-1 text-sm text-gray-600">{helpText}</div>
    );

    // Render error message
    const errorMarkup = error && typeof error === "string" && (
      <div className="mt-1 text-sm text-red-600">{error}</div>
    );

    return (
      <div className="w-full">
        {labelMarkup}
        <div className={cn("flex", labelInline && "w-full")}>
          {inlineLabelMarkup}
          <SelectPrimitive.Root
            value={value}
            onValueChange={handleValueChange}
            disabled={disabled}
            name={name}
            {...props}>
            <SelectPrimitive.Trigger
              ref={ref}
              id={selectId}
              className={selectClassName}
              onFocus={onFocus}
              onBlur={onBlur}>
              <SelectPrimitive.Value placeholder={placeholder} />
              <SelectPrimitive.Icon asChild>
                <ChevronDownIcon className="h-4 w-4 opacity-50" />
              </SelectPrimitive.Icon>
            </SelectPrimitive.Trigger>
            <SelectPrimitive.Portal>
              <SelectPrimitive.Content
                className={cn(selectContentVariants())}
                position="popper"
                sideOffset={4}>
                <SelectPrimitive.Viewport className="p-1">
                  {options.map((option, index) => {
                    if (isSelectGroup(option)) {
                      return (
                        <SelectPrimitive.Group key={`group-${index}`}>
                          <SelectPrimitive.Label className="py-1.5 pl-8 pr-2 text-sm font-semibold text-gray-900">
                            {option.title}
                          </SelectPrimitive.Label>
                          {option.options.map(groupOption => {
                            const normalizedOption =
                              normalizeOption(groupOption);
                            return (
                              <SelectPrimitive.Item
                                key={
                                  normalizedOption.key || normalizedOption.value
                                }
                                value={normalizedOption.value}
                                disabled={normalizedOption.disabled}
                                className={cn(
                                  selectItemVariants({
                                    disabled: normalizedOption.disabled,
                                  })
                                )}>
                                <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                                  <SelectPrimitive.ItemIndicator>
                                    <CheckIcon className="h-4 w-4" />
                                  </SelectPrimitive.ItemIndicator>
                                </span>
                                <SelectPrimitive.ItemText>
                                  <div className="flex items-center">
                                    {normalizedOption.prefix && (
                                      <span className="mr-2">
                                        {normalizedOption.prefix}
                                      </span>
                                    )}
                                    {normalizedOption.label}
                                  </div>
                                </SelectPrimitive.ItemText>
                              </SelectPrimitive.Item>
                            );
                          })}
                        </SelectPrimitive.Group>
                      );
                    } else {
                      const normalizedOption = normalizeOption(option);
                      return (
                        <SelectPrimitive.Item
                          key={normalizedOption.key || normalizedOption.value}
                          value={normalizedOption.value}
                          disabled={normalizedOption.disabled}
                          className={cn(
                            selectItemVariants({
                              disabled: normalizedOption.disabled,
                            })
                          )}>
                          <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                            <SelectPrimitive.ItemIndicator>
                              <CheckIcon className="h-4 w-4" />
                            </SelectPrimitive.ItemIndicator>
                          </span>
                          <SelectPrimitive.ItemText>
                            <div className="flex items-center">
                              {normalizedOption.prefix && (
                                <span className="mr-2">
                                  {normalizedOption.prefix}
                                </span>
                              )}
                              {normalizedOption.label}
                            </div>
                          </SelectPrimitive.ItemText>
                        </SelectPrimitive.Item>
                      );
                    }
                  })}
                </SelectPrimitive.Viewport>
              </SelectPrimitive.Content>
            </SelectPrimitive.Portal>
          </SelectPrimitive.Root>
        </div>
        {helpTextMarkup}
        {errorMarkup}
      </div>
    );
  }
);

Select.displayName = "Select";

// Export the variants function for external use
export { polarisSelectVariants };

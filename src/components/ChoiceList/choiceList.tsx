/**
 * Enhanced ChoiceList component that combines Polaris API compatibility with shadcn/ui functionality
 *
 * This component provides 100% API compatibility with Shopify's Polaris ChoiceList component
 * while being built on shadcn/ui foundation with Tailwind CSS for maximum flexibility.
 */

import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "../../lib/utils";
import { Text } from "../Text/Text";
import { Button } from "../Button/button";

// Type definitions following Polaris ChoiceList component API
export interface Choice {
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

export interface ChoiceListProps {
  /** Label for list of choices */
  title: React.ReactNode;
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
  error?: string | React.ReactNode;
  /** Disable all choices */
  disabled?: boolean;
  /** Callback when the selected choices change */
  onChange?: (selected: string[], name: string) => void;
  /** Indicates the tone of the choice list */
  tone?: "magic";
  /** Additional CSS class name */
  className?: string;
}

// Enhanced ChoiceList interface that extends Polaris with shadcn/ui features
export interface EnhancedChoiceListProps extends ChoiceListProps {
  /** Use the Slot component for composition (shadcn/ui feature) */
  asChild?: boolean;
}

// Re-export types for convenience (maintaining backward compatibility)
export type PolarisChoiceListProps = ChoiceListProps;
export type PolarisChoice = Choice;

// Create Polaris-specific ChoiceList variants using CVA
const polarisChoiceListVariants = cva("space-y-1", {
  variants: {
    tone: {
      magic: "border-l-4 border-purple-500 pl-4",
      default: "",
    },
    disabled: {
      true: "opacity-50 pointer-events-none",
      false: "",
    },
  },
  defaultVariants: {
    tone: "default",
    disabled: false,
  },
});

const choiceVariants = cva(
  "flex items-center justify-center gap-2 rounded-lg transition-colors",
  {
    variants: {
      disabled: {
        true: "opacity-50 cursor-not-allowed",
        false: "cursor-pointer",
      },
      selected: {
        true: "border-black",
        false: "",
      },
    },
    defaultVariants: {
      disabled: false,
      selected: false,
    },
  }
);

export const ChoiceList = React.forwardRef<
  HTMLFieldSetElement,
  EnhancedChoiceListProps
>(
  (
    {
      title,
      choices,
      selected,
      name = "choiceList",
      allowMultiple = false,
      titleHidden = false,
      error,
      disabled = false,
      onChange,
      tone,
      className,
      ...props
    },
    ref
  ) => {
    const handleChoiceChange = (choiceValue: string, checked: boolean) => {
      if (disabled) return;

      let newSelected: string[];

      if (allowMultiple) {
        if (checked) {
          newSelected = [...selected, choiceValue];
        } else {
          newSelected = selected.filter(value => value !== choiceValue);
        }
      } else {
        newSelected = checked ? [choiceValue] : [];
      }

      if (onChange) {
        onChange(newSelected, name);
      }
    };

    const handleClear = () => {
      if (disabled) return;

      if (onChange) {
        onChange([], name);
      }
    };

    // Build className using our Polaris variants
    const choiceListClassName = cn(
      polarisChoiceListVariants({
        tone: tone === "magic" ? "magic" : "default",
        disabled,
      }),
      className
    );

    return (
      <fieldset
        ref={ref}
        className={choiceListClassName}
        disabled={disabled}
        {...props}>
        {!titleHidden && (
          <legend className="text-sm font-medium text-gray-900 mb-3">
            {title}
          </legend>
        )}

        <>
          {choices.map((choice, index) => {
            const isSelected = selected.includes(choice.value);
            const inputId = `${name}-${choice.value}-${index}`;
            const inputType = allowMultiple ? "checkbox" : "radio";

            return (
              <label
                key={choice.value}
                // htmlFor={inputId}
                className={cn(
                  choiceVariants({
                    disabled: disabled || choice.disabled,
                    selected: isSelected,
                  })
                )}>
                <input
                  type={inputType}
                  id={inputId}
                  name={allowMultiple ? `${name}[]` : name}
                  value={choice.value}
                  checked={isSelected}
                  disabled={disabled || choice.disabled}
                  onChange={e =>
                    handleChoiceChange(choice.value, e.target.checked)
                  }
                  className="mt-0.5 h-4 w-4 text-black rounded accent-black cursor-pointer"
                />
                <div className="flex-1">
                  <Text variant="bodyMd" as="span">
                    {choice.label}
                  </Text>
                  {choice.helpText && (
                    <Text variant="bodySm" as="p" tone="subdued">
                      {choice.helpText}
                    </Text>
                  )}
                </div>
              </label>
            );
          })}
        </>

        {selected.length > 0 && (
          <Button variant="plain" onClick={handleClear} disabled={disabled}>
            Clear
          </Button>
        )}

        {error && (
          <Text variant="bodySm" tone="critical" as="p" className="mt-2">
            {error}
          </Text>
        )}
      </fieldset>
    );
  }
);

ChoiceList.displayName = "ChoiceList";

// Export variants for convenience
export { polarisChoiceListVariants };
export { polarisChoiceListVariants as choiceListVariants };

/**
 * RadioButton component that matches Shopify's Polaris RadioButton design and API
 *
 * This component provides 100% API compatibility with Shopify's Polaris RadioButton component
 * while being built on shadcn/ui foundation with Tailwind CSS for maximum flexibility.
 *
 * Use radio buttons to present each item in a list of options where merchants must make a single selection.
 */

import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "../../lib/utils";

// Type definitions following Polaris design tokens
export type SpacingScale =
  | "0"
  | "025"
  | "050"
  | "100"
  | "150"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "800"
  | "1000"
  | "1200"
  | "1600"
  | "2000"
  | "2400"
  | "2800"
  | "3200";

// Polaris RadioButton Props interface - matches Shopify Polaris RadioButton component exactly
export interface PolarisRadioButtonProps {
  /** Indicates the ID of the element that describes the radio button */
  ariaDescribedBy?: string;
  /** Label for the radio button */
  label: React.ReactNode;
  /** Visually hide the label */
  labelHidden?: boolean;
  /** Radio button is selected */
  checked?: boolean;
  /** Disable input */
  disabled?: boolean;
  /** ID for form input */
  id?: string;
  /** Name for form input */
  name?: string;
  /** Value for form input */
  value?: string;
  /** Callback when the radio button is toggled */
  onChange?(newValue: boolean, id: string): void;
  /** Callback when radio button is focused */
  onFocus?(): void;
  /** Callback when focus is removed */
  onBlur?(): void;
  /** Grow to fill the space. Equivalent to width: 100%; height: 100% */
  fill?: boolean;
  /** Additional text to aide in use */
  helpText?: React.ReactNode;
  /** Indicates the tone of the radio button */
  tone?: "magic";
  /** Spacing around children. Accepts a spacing token */
  bleed?: SpacingScale;
  /** Vertical start spacing around children */
  bleedBlockStart?: SpacingScale;
  /** Vertical end spacing around children */
  bleedBlockEnd?: SpacingScale;
  /** Horizontal start spacing around children */
  bleedInlineStart?: SpacingScale;
  /** Horizontal end spacing around children */
  bleedInlineEnd?: SpacingScale;
}

// Enhanced RadioButton interface that extends Polaris with shadcn/ui features
export interface EnhancedRadioButtonProps extends PolarisRadioButtonProps {
  /** Additional CSS class name (inherited from shadcn/ui pattern) */
  className?: string;
}

// Export the main props interface
export type RadioButtonProps = EnhancedRadioButtonProps;

// Utility function to convert Polaris spacing tokens to Tailwind classes
const getSpacingClass = (
  spacing?: SpacingScale,
  direction?: string
): string => {
  if (!spacing) return "";

  const spacingMap: Record<SpacingScale, string> = {
    "0": "0",
    "025": "0.5",
    "050": "1",
    "100": "2",
    "150": "3",
    "200": "4",
    "300": "6",
    "400": "8",
    "500": "10",
    "600": "12",
    "800": "16",
    "1000": "20",
    "1200": "24",
    "1600": "32",
    "2000": "40",
    "2400": "48",
    "2800": "56",
    "3200": "64",
  };

  const value = spacingMap[spacing] || "0";

  switch (direction) {
    case "bleed":
      return `p-${value}`;
    case "bleedBlockStart":
      return `pt-${value}`;
    case "bleedBlockEnd":
      return `pb-${value}`;
    case "bleedInlineStart":
      return `pl-${value}`;
    case "bleedInlineEnd":
      return `pr-${value}`;
    default:
      return "";
  }
};

// Create Polaris-specific radio button variants using CVA
export const radioButtonVariants = cva(
  "flex items-start gap-3 cursor-pointer", // Base radio button styling
  {
    variants: {
      disabled: {
        true: "cursor-not-allowed opacity-50",
        false: "cursor-pointer",
      },
      fill: {
        true: "w-full h-full",
        false: "",
      },
      tone: {
        magic: "text-purple-600",
        default: "text-gray-900",
      },
    },
    defaultVariants: {
      disabled: false,
      fill: false,
      tone: "default",
    },
  }
);

// Radio input variants
export const radioInputVariants = cva(
  [
    "mt-0.5 h-4 w-4 rounded-full border-2 border-gray-300",
    // "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
    "checked:border-blue-600 checked:bg-blue-600",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "transition-colors duration-200",
  ],
  {
    variants: {
      tone: {
        magic:
          "checked:border-purple-600 checked:bg-purple-600 focus:ring-purple-500",
        default:
          "checked:border-blue-600 checked:bg-blue-600 focus:ring-blue-500",
      },
    },
    defaultVariants: {
      tone: "default",
    },
  }
);

export const RadioButton = React.forwardRef<HTMLInputElement, RadioButtonProps>(
  (
    {
      ariaDescribedBy,
      label,
      labelHidden = false,
      checked = false,
      disabled = false,
      id: idProp,
      name,
      value,
      onChange,
      onFocus,
      onBlur,
      fill = false,
      helpText,
      tone,
      bleed,
      bleedBlockStart,
      bleedBlockEnd,
      bleedInlineStart,
      bleedInlineEnd,
      className,
      ...props
    },
    ref
  ) => {
    // Generate unique ID if not provided
    const generatedId = React.useId();
    const id = idProp || generatedId;

    // Handle change events
    const handleChange = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        if (disabled) return; // Don't call onChange when disabled
        if (onChange) {
          onChange(event.target.checked, id);
        }
      },
      [onChange, id, disabled]
    );

    // Build spacing classes
    const spacingClasses = cn(
      getSpacingClass(bleed, "bleed"),
      getSpacingClass(bleedBlockStart, "bleedBlockStart"),
      getSpacingClass(bleedBlockEnd, "bleedBlockEnd"),
      getSpacingClass(bleedInlineStart, "bleedInlineStart"),
      getSpacingClass(bleedInlineEnd, "bleedInlineEnd")
    );

    // Build the final className
    const radioButtonClassName = cn(
      radioButtonVariants({
        disabled,
        fill,
        tone: tone === "magic" ? "magic" : "default",
      }),
      spacingClasses,
      className
    );

    const inputClassName = cn(
      radioInputVariants({
        tone: tone === "magic" ? "magic" : "default",
      })
    );

    return (
      <label className={radioButtonClassName}>
        <input
          ref={ref}
          type="radio"
          id={id}
          name={name}
          value={value}
          checked={checked}
          disabled={disabled}
          onChange={handleChange}
          onFocus={onFocus}
          onBlur={onBlur}
          aria-describedby={ariaDescribedBy}
          className={inputClassName}
          {...props}
        />
        <div className="flex-1">
          {!labelHidden && (
            <div className="text-sm font-medium text-gray-900">{label}</div>
          )}
          {helpText && (
            <div className="text-xs text-gray-600 mt-1">{helpText}</div>
          )}
        </div>
      </label>
    );
  }
);

RadioButton.displayName = "RadioButton";

// Export variants for convenience
export { radioButtonVariants as polarisRadioButtonVariants };

// Backward compatibility aliases
export type PolarisSpacingScale = SpacingScale;

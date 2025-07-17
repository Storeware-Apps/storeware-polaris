/**
 * Enhanced TextField component that combines Polaris API compatibility with shadcn/ui functionality
 *
 * This component provides 100% API compatibility with Shopify's Polaris TextField component
 * while being built on shadcn/ui foundation with Tailwind CSS for maximum flexibility.
 */

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { XCircleIcon } from "@shopify/polaris-icons";
import { cn } from "../../lib/utils";

// Type definitions following Polaris TextField component API
export type TextFieldType =
  | "text"
  | "email"
  | "number"
  | "integer"
  | "password"
  | "search"
  | "tel"
  | "url"
  | "date"
  | "datetime-local"
  | "month"
  | "time"
  | "week"
  | "currency";

export type TextFieldAlignment = "left" | "center" | "right";

export type TextFieldInputMode =
  | "none"
  | "text"
  | "decimal"
  | "numeric"
  | "tel"
  | "search"
  | "email"
  | "url";

export type TextFieldSize = "slim" | "medium";

export type TextFieldVariant = "inherit" | "borderless";

export type TextFieldTone = "magic";

// Error type (can be string, boolean, or React node)
export type TextFieldError = string | boolean | React.ReactNode;

// Selection suggestion interface
interface SelectSuggestion {
  suggestion?: string;
}

// Select text on focus interface
interface SelectTextOnFocus {
  selectTextOnFocus?: true;
}

// Readonly interface
interface Readonly {
  readonly?: true;
}

// Disabled interface
interface Disabled {
  disabled?: true;
}

// Interactive interface
interface Interactive {
  onChange(value: string, id: string): void;
}

// Non-mutually exclusive props interface
interface NonMutuallyExclusiveProps {
  /** Text to display before value */
  prefix?: React.ReactNode;
  /** Text to display after value */
  suffix?: React.ReactNode;
  /** Content to vertically display above the input value */
  verticalContent?: React.ReactNode;
  /** Hint text to display */
  placeholder?: string;
  /** Initial value for the input */
  value?: string;
  /** Additional hint text to display */
  helpText?: React.ReactNode;
  /** Label for the input */
  label: React.ReactNode;
  /** Adds an action to the label */
  labelAction?: {
    content: React.ReactNode;
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
  connectedRight?: React.ReactNode;
  /** An element connected to the left of the input */
  connectedLeft?: React.ReactNode;
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
  onFocus?: (event?: React.FocusEvent) => void;
  /** Callback fired when input is blurred */
  onBlur?(event?: React.FocusEvent): void;
}

// Enhanced props interface that includes className for custom styling
export interface EnhancedTextFieldProps extends NonMutuallyExclusiveProps {
  /** Additional CSS class name for custom styling */
  className?: string;
}

// Mutually exclusive selection props
export type MutuallyExclusiveSelectionProps =
  | SelectSuggestion
  | SelectTextOnFocus;

// Mutually exclusive interaction props
export type MutuallyExclusiveInteractionProps =
  | Interactive
  | Readonly
  | Disabled;

// Polaris TextField Props interface - matches Shopify Polaris TextField component exactly
export interface PolarisTextFieldProps extends NonMutuallyExclusiveProps {
  // Interactive props
  onChange?(value: string, id: string): void;
  // Readonly state
  readonly?: boolean;
  // Disabled state
  disabled?: boolean;
  // Selection props
  selectTextOnFocus?: boolean;
  suggestion?: string;
}

// Combined props interface
export interface TextFieldProps extends EnhancedTextFieldProps {
  // Interactive props
  onChange?(value: string, id: string): void;
  // Readonly state
  readonly?: boolean;
  // Disabled state
  disabled?: boolean;
  // Selection props
  selectTextOnFocus?: boolean;
  suggestion?: string;
}

// Create Polaris-specific text field variants using CVA
const polarisTextFieldVariants = cva(
  // Base styles matching Polaris TextField exactly
  [
    // Layout and positioning
    "relative flex items-center w-full",
    // Typography - Inter font family with Polaris-specific sizing
    "font-sans text-[13px] leading-[20px] font-normal",
    // Colors matching Polaris design tokens
    "text-[rgb(48,48,48)] placeholder:text-[rgb(97,97,97)]",
    // Background and borders
    "bg-white border border-[rgb(138,143,148)] border-t-[rgb(137,143,148)]",
    "rounded-lg",
    // Padding matching Polaris exactly: 6px 12px
    "px-3 py-[6px]",
    // Height matching Polaris exactly: 32px height and min-height
    "h-8 min-h-8",
    // Flex behavior
    "flex-grow flex-shrink",
    // Appearance and interaction
    "appearance-none outline-none cursor-text",
    // Focus styles matching Polaris
    "focus-visible:outline-none focus-visible:border-[rgb(0,123,255)] focus-visible:border-2",
    "focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-[rgb(0,123,255)] focus-visible:ring-offset-1",
    // Hover styles
    "hover:border-[rgb(97,97,97)] hover:bg-[rgb(247,247,247)]",
    // Disabled styles
    "disabled:cursor-default disabled:text-[rgb(181,181,181)] disabled:bg-[rgb(247,247,247)] disabled:border-transparent",
    // File input styles
    "file:border-0 file:bg-transparent file:text-[13px] file:font-normal",
  ],
  {
    variants: {
      size: {
        // Slim size: 28px height (matching Polaris slim variant)
        slim: "h-7 min-h-7 py-[2px] text-[13px] leading-[20px]",
        // Medium size: 32px height (default Polaris size)
        medium: "h-8 min-h-8 py-[6px] text-[13px] leading-[20px]",
      },
      variant: {
        inherit: "",
        // Borderless variant matching Polaris
        borderless: [
          "border-0 shadow-none min-h-8",
          "focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-0",
          "hover:border-0 hover:bg-transparent",
        ],
      },
      align: {
        left: "text-left",
        center: "text-center",
        right: "text-right",
      },
      tone: {
        // Magic tone matching Polaris magic styling
        magic: [
          "text-[rgb(128,81,255)] bg-[rgb(248,247,255)]",
          "border-[rgb(153,124,255)]",
          "focus-visible:border-[rgb(0,123,255)] focus-visible:text-[rgb(48,48,48)]",
          "hover:bg-[rgb(243,240,255)] hover:border-[rgb(138,129,255)]",
        ],
      },
      error: {
        true: [
          "border-[rgb(253,75,146)] bg-[rgb(255,247,250)]",
          "focus-visible:border-[rgb(0,123,255)] focus-visible:bg-white",
          "hover:border-[rgb(253,75,146)] hover:bg-[rgb(255,247,250)]",
        ],
        false: "",
      },
      monospaced: {
        // Monospaced font matching Polaris
        true: "font-mono",
        false: "font-sans",
      },
      multiline: {
        // Multiline (textarea) styling
        true: [
          "min-h-[80px] resize-y overflow-auto",
          "items-start py-[6px]",
          "leading-[20px]",
        ],
        false: "items-center",
      },
    },
    defaultVariants: {
      size: "medium",
      variant: "inherit",
      align: "left",
      error: false,
      monospaced: false,
      multiline: false,
    },
  }
);

// Helper function to generate unique IDs
const useId = () => {
  const [id] = React.useState(() =>
    Math.random().toString(36).substring(2, 11)
  );
  return id;
};

// Helper function to get rows for multiline
const getRows = (multiline?: boolean | number) => {
  if (!multiline) return undefined;
  return typeof multiline === "number" ? multiline : 3;
};

// Helper function to normalize aria-multiline
const normalizeAriaMultiline = (multiline?: boolean | number) => {
  if (!multiline) return undefined;
  return Boolean(multiline) || (typeof multiline === "number" && multiline > 0)
    ? { "aria-multiline": true }
    : undefined;
};

// Helper function to generate label ID
const labelID = (id: string) => `${id}Label`;

// Helper function to generate help text ID
const helpTextID = (id: string) => `${id}HelpText`;

export const TextField = React.forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  TextFieldProps
>(
  (
    {
      prefix,
      suffix,
      verticalContent,
      placeholder,
      value = "",
      helpText,
      label,
      labelAction,
      labelHidden = false,
      disabled = false,
      clearButton = false,
      readOnly = false,
      autoFocus = false,
      focused,
      multiline = false,
      error,
      connectedRight,
      connectedLeft,
      type = "text",
      name,
      id: idProp,
      role,
      step,
      largeStep,
      autoComplete,
      max,
      maxLength,
      maxHeight,
      min,
      minLength,
      pattern,
      inputMode,
      spellCheck,
      ariaOwns,
      ariaControls,
      ariaExpanded,
      ariaActiveDescendant,
      ariaAutocomplete,
      showCharacterCount = false,
      align = "left",
      requiredIndicator = false,
      monospaced = false,
      selectTextOnFocus = false,
      suggestion,
      variant = "inherit",
      size = "medium",
      tone,
      autoSize = false,
      loading = false,
      onClearButtonClick,
      onChange,
      onSpinnerChange,
      onFocus,
      onBlur,
      className,
      ...props
    },
    ref
  ) => {
    // Generate unique ID if not provided
    const uniqId = useId();
    const id = idProp ?? uniqId;

    // State management
    const [focus, setFocus] = React.useState(Boolean(focused));

    // Refs
    const inputRef = React.useRef<HTMLInputElement>(null);
    const textAreaRef = React.useRef<HTMLTextAreaElement>(null);
    const containerRef = React.useRef<HTMLDivElement>(null);

    // Get the appropriate input ref based on multiline
    const getInputRef = React.useCallback(() => {
      return multiline ? textAreaRef.current : inputRef.current;
    }, [multiline]);

    // Handle focus effect
    React.useEffect(() => {
      const input = getInputRef();
      if (!input || focused === undefined) return;
      focused ? input.focus() : input.blur();
    }, [focused, getInputRef]);

    // Handle suggestion selection
    React.useEffect(() => {
      const input = inputRef.current;
      const isSupportedInputType =
        type === "text" ||
        type === "tel" ||
        type === "search" ||
        type === "url" ||
        type === "password";

      if (!input || !isSupportedInputType || !suggestion) {
        return;
      }

      input.setSelectionRange(value.length, suggestion.length);
    }, [focus, value, type, suggestion]);

    // Normalize values
    const normalizedValue = suggestion ? suggestion : value;
    const inputType = type === "currency" ? "text" : type;

    // Build className using our Polaris variants
    const inputClassName = cn(
      polarisTextFieldVariants({
        size,
        variant,
        align,
        tone,
        error: Boolean(error),
        monospaced,
        multiline: Boolean(multiline),
      }),
      autoSize && "w-auto min-w-0",
      className
    );

    // Handle change events
    const handleChange = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (onChange) {
          onChange(event.currentTarget.value, id);
        }
      },
      [onChange, id]
    );

    // Handle focus events
    const handleFocus = React.useCallback(
      (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFocus(true);

        if (selectTextOnFocus && !suggestion) {
          const input = getInputRef();
          input?.select();
        }

        if (onFocus) {
          onFocus(event);
        }
      },
      [selectTextOnFocus, suggestion, getInputRef, onFocus]
    );

    // Handle blur events
    const handleBlur = React.useCallback(
      (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFocus(false);

        // Return early if new focus target is inside the TextField component
        if (containerRef.current?.contains(event?.relatedTarget as Node)) {
          return;
        }

        if (onBlur) {
          onBlur(event);
        }
      },
      [onBlur]
    );

    // Handle clear button click
    const handleClearButtonClick = React.useCallback(() => {
      if (onClearButtonClick) {
        onClearButtonClick(id);
      }
    }, [onClearButtonClick, id]);

    // Build describedBy array for accessibility
    const describedBy: string[] = [];
    if (error) {
      describedBy.push(`${id}Error`);
    }
    if (helpText) {
      describedBy.push(helpTextID(id));
    }
    if (showCharacterCount) {
      describedBy.push(`${id}-CharacterCounter`);
    }

    // Build labelledBy array for accessibility
    const labelledBy: string[] = [];
    if (prefix) {
      labelledBy.push(`${id}-Prefix`);
    }
    if (suffix) {
      labelledBy.push(`${id}-Suffix`);
    }
    if (verticalContent) {
      labelledBy.push(`${id}-VerticalContent`);
    }
    labelledBy.unshift(labelID(id));

    // Character count markup
    let characterCountMarkup = null;
    if (showCharacterCount) {
      const characterCount = normalizedValue.length;
      const characterCountText = !maxLength
        ? characterCount
        : `${characterCount}/${maxLength}`;

      characterCountMarkup = (
        <div
          id={`${id}-CharacterCounter`}
          className="text-xs text-muted-foreground mt-1"
        >
          {characterCountText}
        </div>
      );
    }

    // Clear button markup
    const clearButtonVisible = normalizedValue !== "";
    const clearButtonMarkup =
      clearButton && clearButtonVisible ? (
        <button
          type="button"
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-sm"
          onClick={handleClearButtonClick}
          tabIndex={-1}
          aria-label="Clear"
        >
          <XCircleIcon className="h-4 w-4" />
        </button>
      ) : null;

    // Prefix markup
    const prefixMarkup = prefix ? (
      <div
        id={`${id}-Prefix`}
        className="flex items-center px-3 text-sm text-muted-foreground border-r border-input bg-muted/50"
      >
        {prefix}
      </div>
    ) : null;

    // Suffix markup
    const suffixMarkup = suffix ? (
      <div
        id={`${id}-Suffix`}
        className="flex items-center px-3 text-sm text-muted-foreground border-l border-input bg-muted/50"
      >
        {suffix}
      </div>
    ) : null;

    // Loading markup
    const loadingMarkup = loading ? (
      <div className="absolute right-2 top-1/2 -translate-y-1/2">
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-foreground"></div>
      </div>
    ) : null;

    // Label markup
    const labelMarkup = !labelHidden ? (
      <label
        id={labelID(id)}
        htmlFor={id}
        className={cn(
          "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
          requiredIndicator &&
            "after:content-['*'] after:ml-1 after:text-destructive"
        )}
      >
        {label}
        {labelAction && (
          <button
            type="button"
            onClick={labelAction.onAction}
            className="ml-2 text-xs text-primary hover:underline focus:outline-none focus:underline"
          >
            {labelAction.content}
          </button>
        )}
      </label>
    ) : null;

    // Help text markup
    const helpTextMarkup = helpText ? (
      <div id={helpTextID(id)} className="text-xs text-muted-foreground mt-1">
        {helpText}
      </div>
    ) : null;

    // Error markup
    const errorMarkup =
      error && typeof error !== "boolean" ? (
        <div
          id={`${id}Error`}
          className="text-xs text-destructive mt-1"
          role="alert"
        >
          {error}
        </div>
      ) : null;

    // Vertical content markup
    const verticalContentMarkup = verticalContent ? (
      <div
        id={`${id}-VerticalContent`}
        className="text-sm text-muted-foreground mb-2"
      >
        {verticalContent}
      </div>
    ) : null;

    // Style object for dynamic properties
    const style: React.CSSProperties = {
      ...(maxHeight && { maxHeight }),
    };

    // Create the input element with proper ref forwarding
    const inputElement = React.createElement(multiline ? "textarea" : "input", {
      ref: React.useCallback(
        (element: HTMLInputElement | HTMLTextAreaElement | null) => {
          // Assign to internal ref
          if (multiline) {
            (
              textAreaRef as React.MutableRefObject<HTMLTextAreaElement | null>
            ).current = element as HTMLTextAreaElement;
          } else {
            (
              inputRef as React.MutableRefObject<HTMLInputElement | null>
            ).current = element as HTMLInputElement;
          }
          // Forward to external ref
          if (typeof ref === "function") {
            ref(element);
          } else if (ref) {
            (
              ref as React.MutableRefObject<
                HTMLInputElement | HTMLTextAreaElement | null
              >
            ).current = element;
          }
        },
        [multiline, ref]
      ),
      id,
      name,
      type: inputType,
      value: normalizedValue,
      placeholder,
      disabled,
      readOnly,
      autoFocus,
      role,
      min,
      max,
      step,
      minLength,
      maxLength,
      pattern,
      inputMode,
      spellCheck,
      autoComplete,
      rows: getRows(multiline),
      size: autoSize ? 1 : undefined,
      style: Object.keys(style).length > 0 ? style : undefined,
      className: inputClassName,
      "aria-describedby": describedBy.length
        ? describedBy.join(" ")
        : undefined,
      "aria-labelledby": labelledBy.join(" "),
      "aria-invalid": Boolean(error),
      "aria-owns": ariaOwns,
      "aria-activedescendant": ariaActiveDescendant,
      "aria-autocomplete": ariaAutocomplete,
      "aria-controls": ariaControls,
      "aria-expanded": ariaExpanded,
      "aria-required": requiredIndicator,
      ...normalizeAriaMultiline(multiline),
      onChange: !suggestion ? handleChange : undefined,
      onInput: suggestion ? handleChange : undefined,
      onFocus: handleFocus,
      onBlur: handleBlur,
      // Password manager disable attributes
      "data-1p-ignore": autoComplete === "off" || undefined,
      "data-lpignore": autoComplete === "off" || undefined,
      "data-form-type": autoComplete === "off" ? "other" : undefined,
      ...props,
    });

    // Connected fields wrapper
    const connectedMarkup =
      connectedLeft || connectedRight ? (
        <div className="flex">
          {connectedLeft}
          <div className="flex-1 relative">
            {verticalContentMarkup}
            <div className="relative flex">
              {prefixMarkup}
              {inputElement}
              {suffixMarkup}
              {clearButtonMarkup}
              {loadingMarkup}
            </div>
          </div>
          {connectedRight}
        </div>
      ) : (
        <div className="relative">
          {verticalContentMarkup}
          <div className="relative flex">
            {prefixMarkup}
            {inputElement}
            {suffixMarkup}
            {clearButtonMarkup}
            {loadingMarkup}
          </div>
        </div>
      );

    return (
      <div ref={containerRef} className="space-y-2">
        {labelMarkup}
        {connectedMarkup}
        {errorMarkup}
        {helpTextMarkup}
        {characterCountMarkup}
      </div>
    );
  }
);

TextField.displayName = "TextField";

// Export variants for convenience
export { polarisTextFieldVariants };
export { polarisTextFieldVariants as textFieldVariants };

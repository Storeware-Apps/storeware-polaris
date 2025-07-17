/**
 * Enhanced TextField component that combines Polaris API compatibility with shadcn/ui functionality
 *
 * This component provides 100% API compatibility with Shopify's Polaris TextField component
 * while being built on shadcn/ui foundation with Tailwind CSS for maximum flexibility.
 */
import * as React from "react";
export type TextFieldType = "text" | "email" | "number" | "integer" | "password" | "search" | "tel" | "url" | "date" | "datetime-local" | "month" | "time" | "week" | "currency";
export type TextFieldAlignment = "left" | "center" | "right";
export type TextFieldInputMode = "none" | "text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url";
export type TextFieldSize = "slim" | "medium";
export type TextFieldVariant = "inherit" | "borderless";
export type TextFieldTone = "magic";
export type TextFieldError = string | boolean | React.ReactNode;
interface SelectSuggestion {
    suggestion?: string;
}
interface SelectTextOnFocus {
    selectTextOnFocus?: true;
}
interface Readonly {
    readonly?: true;
}
interface Disabled {
    disabled?: true;
}
interface Interactive {
    onChange(value: string, id: string): void;
}
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
export interface EnhancedTextFieldProps extends NonMutuallyExclusiveProps {
    /** Additional CSS class name for custom styling */
    className?: string;
}
export type MutuallyExclusiveSelectionProps = SelectSuggestion | SelectTextOnFocus;
export type MutuallyExclusiveInteractionProps = Interactive | Readonly | Disabled;
export interface PolarisTextFieldProps extends NonMutuallyExclusiveProps {
    onChange?(value: string, id: string): void;
    readonly?: boolean;
    disabled?: boolean;
    selectTextOnFocus?: boolean;
    suggestion?: string;
}
export interface TextFieldProps extends EnhancedTextFieldProps {
    onChange?(value: string, id: string): void;
    readonly?: boolean;
    disabled?: boolean;
    selectTextOnFocus?: boolean;
    suggestion?: string;
}
declare const polarisTextFieldVariants: (props?: ({
    size?: "medium" | "slim" | null | undefined;
    variant?: "inherit" | "borderless" | null | undefined;
    align?: "center" | "left" | "right" | null | undefined;
    tone?: "magic" | null | undefined;
    error?: boolean | null | undefined;
    monospaced?: boolean | null | undefined;
    multiline?: boolean | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare const TextField: React.ForwardRefExoticComponent<TextFieldProps & React.RefAttributes<HTMLInputElement | HTMLTextAreaElement>>;
export { polarisTextFieldVariants };
export { polarisTextFieldVariants as textFieldVariants };
//# sourceMappingURL=TextField.d.ts.map
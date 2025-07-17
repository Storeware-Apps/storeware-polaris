/**
 * Enhanced Button component that combines Polaris API compatibility with shadcn/ui functionality
 *
 * This component provides 100% API compatibility with Shopify's Polaris Button component
 * while being built on shadcn/ui foundation with Tailwind CSS for maximum flexibility.
 */
import * as React from "react";
import { type ReactNode } from "react";
export type ButtonSize = "medium" | "large" | "micro" | "slim";
export type ButtonTextAlign = "start" | "center" | "end" | "left" | "right";
export type ButtonTone = "success" | "critical";
export type ButtonVariant = "default" | "plain" | "primary" | "secondary" | "tertiary" | "monochromePlain";
export type ButtonDisclosure = boolean | "up" | "down" | "select";
export type ButtonTarget = "_blank" | "_self" | "_parent" | "_top";
export interface PolarisButtonProps {
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
    onKeyPress?: (event: React.KeyboardEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
    /** Callback when a keyup event is registered on the button */
    onKeyUp?: (event: React.KeyboardEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
    /** Callback when a keydown event is registered on the button */
    onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
    /** Callback when mouse enter */
    onMouseEnter?: () => void;
    /** Callback when element is touched */
    onTouchStart?: () => void;
    /** Callback when pointerdown event is being triggered */
    onPointerDown?: (event: React.PointerEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
    /** Additional CSS class name (inherited from shadcn/ui Button) */
    className?: string;
}
export interface EnhancedButtonProps extends PolarisButtonProps {
    /** Use the Slot component for composition (shadcn/ui feature) */
    asChild?: boolean;
}
export type PolarisButtonSize = ButtonSize;
export type PolarisButtonTextAlign = ButtonTextAlign;
export type PolarisButtonTone = ButtonTone;
export type PolarisButtonVariant = ButtonVariant;
export type PolarisButtonDisclosure = ButtonDisclosure;
export type PolarisButtonTarget = ButtonTarget;
declare const polarisButtonVariants: (props?: ({
    variant?: "default" | "plain" | "primary" | "secondary" | "tertiary" | "monochromePlain" | null | undefined;
    size?: "medium" | "large" | "micro" | "slim" | null | undefined;
    tone?: "success" | "critical" | "default" | null | undefined;
    textAlign?: "start" | "center" | "end" | "left" | "right" | null | undefined;
    fullWidth?: boolean | null | undefined;
    pressed?: boolean | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare const Button: React.ForwardRefExoticComponent<EnhancedButtonProps & React.RefAttributes<HTMLButtonElement | HTMLAnchorElement>>;
export { polarisButtonVariants };
export { polarisButtonVariants as buttonVariants };
//# sourceMappingURL=button.d.ts.map
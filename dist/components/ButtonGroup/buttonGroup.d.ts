/**
 * ButtonGroup component that matches Shopify's Polaris ButtonGroup design and API
 *
 * This component provides 100% API compatibility with Shopify's Polaris ButtonGroup component
 * while being built on shadcn/ui foundation with Tailwind CSS for maximum flexibility.
 */
import * as React from "react";
export type ButtonGroupGap = "extraTight" | "tight" | "loose";
export type ButtonGroupVariant = "segmented";
export interface PolarisButtonGroupProps {
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
    children?: React.ReactNode;
    /** Additional CSS class name (inherited from shadcn/ui pattern) */
    className?: string;
}
export interface EnhancedButtonGroupProps extends PolarisButtonGroupProps {
}
export type PolarisButtonGroupGap = ButtonGroupGap;
export type PolarisButtonGroupVariant = ButtonGroupVariant;
declare const polarisButtonGroupVariants: (props?: ({
    gap?: "extraTight" | "tight" | "loose" | null | undefined;
    variant?: "segmented" | null | undefined;
    fullWidth?: boolean | null | undefined;
    connectedTop?: boolean | null | undefined;
    noWrap?: boolean | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare const ButtonGroup: React.ForwardRefExoticComponent<EnhancedButtonGroupProps & React.RefAttributes<HTMLDivElement>>;
export { polarisButtonGroupVariants };
export { polarisButtonGroupVariants as buttonGroupVariants };
//# sourceMappingURL=buttonGroup.d.ts.map
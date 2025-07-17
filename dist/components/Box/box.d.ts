/**
 * Box component that matches Shopify's Polaris Box design and API
 *
 * This component provides 100% API compatibility with Shopify's Polaris Box component
 * while being built on shadcn/ui foundation with Tailwind CSS for maximum flexibility.
 */
import * as React from "react";
export type ColorBackgroundAlias = "bg" | "bg-inverse" | "bg-surface" | "bg-surface-hover" | "bg-surface-active" | "bg-surface-selected" | "bg-surface-disabled" | "bg-surface-secondary" | "bg-surface-secondary-hover" | "bg-surface-secondary-active" | "bg-surface-secondary-selected" | "bg-surface-tertiary" | "bg-surface-tertiary-hover" | "bg-surface-tertiary-active" | "bg-surface-brand" | "bg-surface-brand-hover" | "bg-surface-brand-active" | "bg-surface-brand-selected" | "bg-surface-info" | "bg-surface-info-hover" | "bg-surface-info-active" | "bg-surface-success" | "bg-surface-success-hover" | "bg-surface-success-active" | "bg-surface-caution" | "bg-surface-caution-hover" | "bg-surface-caution-active" | "bg-surface-warning" | "bg-surface-warning-hover" | "bg-surface-warning-active" | "bg-surface-critical" | "bg-surface-critical-hover" | "bg-surface-critical-active" | "bg-surface-emphasis" | "bg-surface-emphasis-hover" | "bg-surface-emphasis-active" | "bg-surface-magic" | "bg-surface-magic-hover" | "bg-surface-magic-active" | "bg-surface-inverse" | "bg-surface-transparent" | "bg-fill" | "bg-fill-hover" | "bg-fill-active" | "bg-fill-selected" | "bg-fill-disabled" | "bg-fill-secondary" | "bg-fill-secondary-hover" | "bg-fill-secondary-active" | "bg-fill-secondary-selected" | "bg-fill-tertiary" | "bg-fill-tertiary-hover" | "bg-fill-tertiary-active" | "bg-fill-brand" | "bg-fill-brand-hover" | "bg-fill-brand-active" | "bg-fill-brand-selected" | "bg-fill-brand-disabled" | "bg-fill-info" | "bg-fill-info-hover" | "bg-fill-info-active" | "bg-fill-info-secondary" | "bg-fill-success" | "bg-fill-success-hover" | "bg-fill-success-active" | "bg-fill-success-secondary" | "bg-fill-warning" | "bg-fill-warning-hover" | "bg-fill-warning-active" | "bg-fill-warning-secondary" | "bg-fill-caution" | "bg-fill-caution-hover" | "bg-fill-caution-active" | "bg-fill-caution-secondary" | "bg-fill-critical" | "bg-fill-critical-hover" | "bg-fill-critical-active" | "bg-fill-critical-selected" | "bg-fill-critical-secondary" | "bg-fill-emphasis" | "bg-fill-emphasis-hover" | "bg-fill-emphasis-active" | "bg-fill-magic" | "bg-fill-magic-secondary" | "bg-fill-magic-secondary-hover" | "bg-fill-magic-secondary-active" | "bg-fill-inverse" | "bg-fill-inverse-hover" | "bg-fill-inverse-active" | "bg-fill-transparent" | "bg-fill-transparent-hover" | "bg-fill-transparent-active" | "bg-fill-transparent-selected" | "bg-fill-transparent-secondary" | "bg-fill-transparent-secondary-hover" | "bg-fill-transparent-secondary-active";
export type ColorBorderAlias = "border" | "border-hover" | "border-disabled" | "border-secondary" | "border-tertiary" | "border-focus" | "border-brand" | "border-info" | "border-success" | "border-caution" | "border-warning" | "border-critical" | "border-critical-secondary" | "border-emphasis" | "border-emphasis-hover" | "border-emphasis-active" | "border-magic" | "border-magic-secondary" | "border-magic-secondary-hover" | "border-inverse" | "border-inverse-hover" | "border-inverse-active";
export type ColorTextAlias = "text" | "text-secondary" | "text-disabled" | "text-link" | "text-link-hover" | "text-link-active" | "text-brand" | "text-brand-hover" | "text-brand-on-bg-fill" | "text-brand-on-bg-fill-hover" | "text-brand-on-bg-fill-active" | "text-brand-on-bg-fill-disabled" | "text-info" | "text-info-hover" | "text-info-active" | "text-info-secondary" | "text-info-on-bg-fill" | "text-success" | "text-success-hover" | "text-success-active" | "text-success-secondary" | "text-success-on-bg-fill" | "text-caution" | "text-caution-hover" | "text-caution-active" | "text-caution-secondary" | "text-caution-on-bg-fill" | "text-warning" | "text-warning-hover" | "text-warning-active" | "text-warning-secondary" | "text-warning-on-bg-fill" | "text-critical" | "text-critical-hover" | "text-critical-active" | "text-critical-secondary" | "text-critical-on-bg-fill" | "text-emphasis" | "text-emphasis-hover" | "text-emphasis-active" | "text-emphasis-on-bg-fill" | "text-emphasis-on-bg-fill-hover" | "text-emphasis-on-bg-fill-active" | "text-magic" | "text-magic-secondary" | "text-magic-on-bg-fill" | "text-inverse" | "text-inverse-secondary" | "text-link-inverse";
export type SpaceScale = "0" | "025" | "050" | "100" | "150" | "200" | "300" | "400" | "500" | "600" | "800" | "1000" | "1200" | "1600" | "2000" | "2400" | "2800" | "3200";
export type BorderRadiusAliasOrScale = "0" | "050" | "100" | "150" | "200" | "300" | "400" | "500" | "750" | "full";
export type BorderWidthScale = "0" | "0165" | "025" | "050" | "100";
export type ShadowAliasOrScale = "0" | "100" | "200" | "300" | "400" | "500" | "600" | "bevel-100" | "inset-100" | "inset-200" | "button" | "button-hover" | "button-inset" | "button-primary" | "button-primary-hover" | "button-primary-inset" | "button-primary-critical" | "button-primary-critical-hover" | "button-primary-critical-inset" | "button-primary-success" | "button-primary-success-hover" | "button-primary-success-inset" | "border-inset";
export type BreakpointsAlias = "xs" | "sm" | "md" | "lg" | "xl";
export type ResponsiveSpacing = SpaceScale | {
    [Breakpoint in BreakpointsAlias]?: SpaceScale;
};
export interface PolarisBoxProps {
    /** Content to display inside the box */
    children?: React.ReactNode;
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
export interface EnhancedBoxProps extends PolarisBoxProps {
}
declare const polarisBoxVariants: (props?: ({
    visuallyHidden?: boolean | null | undefined;
    printHidden?: boolean | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare const Box: React.ForwardRefExoticComponent<EnhancedBoxProps & React.RefAttributes<any>>;
export { polarisBoxVariants };
export { polarisBoxVariants as boxVariants };
//# sourceMappingURL=box.d.ts.map
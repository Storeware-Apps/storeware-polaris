/**
 * Enhanced Text component that combines Polaris API compatibility with shadcn/ui functionality
 *
 * This component provides 100% API compatibility with Shopify's Polaris Text component
 * while being built on shadcn/ui foundation with Tailwind CSS for maximum flexibility.
 */
import * as React from "react";
import { type VariantProps } from "class-variance-authority";
export type TextVariant = "headingXs" | "headingSm" | "headingMd" | "headingLg" | "headingXl" | "heading2xl" | "heading3xl" | "bodyXs" | "bodySm" | "bodyMd" | "bodyLg";
export type TextAlignment = "start" | "center" | "end" | "justify";
export type TextTone = "base" | "disabled" | "inherit" | "success" | "critical" | "caution" | "subdued" | "text-inverse" | "text-inverse-secondary" | "magic" | "magic-subdued";
export type TextFontWeight = "regular" | "medium" | "semibold" | "bold";
export type TextElement = "dt" | "dd" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "strong" | "legend";
declare const textVariants: (props?: ({
    variant?: "headingXs" | "headingSm" | "headingMd" | "headingLg" | "headingXl" | "heading2xl" | "heading3xl" | "bodyXs" | "bodySm" | "bodyMd" | "bodyLg" | null | undefined;
    alignment?: "start" | "center" | "end" | "justify" | null | undefined;
    tone?: "success" | "critical" | "disabled" | "inherit" | "text-inverse" | "text-inverse-secondary" | "base" | "caution" | "subdued" | "magic" | "magic-subdued" | null | undefined;
    fontWeight?: "medium" | "bold" | "regular" | "semibold" | null | undefined;
    breakWord?: boolean | null | undefined;
    truncate?: boolean | null | undefined;
    numeric?: boolean | null | undefined;
    visuallyHidden?: boolean | null | undefined;
    textDecorationLine?: "none" | "line-through" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface PolarisTextProps {
    /** Text to display */
    children?: React.ReactNode;
    /** The element type */
    as?: TextElement;
    /** Adjust horizontal alignment of text */
    alignment?: TextAlignment;
    /** Prevent text from overflowing */
    breakWord?: boolean;
    /** Adjust tone of text */
    tone?: TextTone;
    /** Adjust weight of text */
    fontWeight?: TextFontWeight;
    /** HTML id attribute */
    id?: string;
    /** Use a numeric font variant with monospace appearance */
    numeric?: boolean;
    /** Truncate text overflow with ellipsis */
    truncate?: boolean;
    /** Typographic style of text */
    variant?: TextVariant;
    /** Visually hide the text */
    visuallyHidden?: boolean;
    /** Add a line-through to the text */
    textDecorationLine?: "line-through";
}
export interface EnhancedTextProps extends PolarisTextProps {
    /** Additional CSS class name */
    className?: string;
}
export type TextProps = EnhancedTextProps & VariantProps<typeof textVariants>;
declare const Text: React.ForwardRefExoticComponent<EnhancedTextProps & VariantProps<(props?: ({
    variant?: "headingXs" | "headingSm" | "headingMd" | "headingLg" | "headingXl" | "heading2xl" | "heading3xl" | "bodyXs" | "bodySm" | "bodyMd" | "bodyLg" | null | undefined;
    alignment?: "start" | "center" | "end" | "justify" | null | undefined;
    tone?: "success" | "critical" | "disabled" | "inherit" | "text-inverse" | "text-inverse-secondary" | "base" | "caution" | "subdued" | "magic" | "magic-subdued" | null | undefined;
    fontWeight?: "medium" | "bold" | "regular" | "semibold" | null | undefined;
    breakWord?: boolean | null | undefined;
    truncate?: boolean | null | undefined;
    numeric?: boolean | null | undefined;
    visuallyHidden?: boolean | null | undefined;
    textDecorationLine?: "none" | "line-through" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string> & React.RefAttributes<any>>;
export { Text, textVariants };
export type PolarisTextVariant = TextVariant;
export type PolarisTextAlignment = TextAlignment;
export type PolarisTextTone = TextTone;
export type PolarisTextFontWeight = TextFontWeight;
export type PolarisTextElement = TextElement;
//# sourceMappingURL=Text.d.ts.map
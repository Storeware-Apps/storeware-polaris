/**
 * Enhanced Text component that combines Polaris API compatibility with shadcn/ui functionality
 *
 * This component provides 100% API compatibility with Shopify's Polaris Text component
 * while being built on shadcn/ui foundation with Tailwind CSS for maximum flexibility.
 */

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

// Type definitions following Polaris Text component API
export type TextVariant =
  | "headingXs"
  | "headingSm"
  | "headingMd"
  | "headingLg"
  | "headingXl"
  | "heading2xl"
  | "heading3xl"
  | "bodyXs"
  | "bodySm"
  | "bodyMd"
  | "bodyLg";

export type TextAlignment = "start" | "center" | "end" | "justify";

export type TextTone =
  | "base"
  | "disabled"
  | "inherit"
  | "success"
  | "critical"
  | "caution"
  | "subdued"
  | "text-inverse"
  | "text-inverse-secondary"
  | "magic"
  | "magic-subdued";

export type TextFontWeight = "regular" | "medium" | "semibold" | "bold";

export type TextElement =
  | "dt"
  | "dd"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "strong"
  | "legend";

// Text variants using cva - matches Polaris design tokens
const textVariants = cva("", {
  variants: {
    variant: {
      // Heading variants with responsive sizing (font weights handled separately)
      heading3xl: "text-4xl leading-tight sm:text-5xl sm:leading-tight",
      heading2xl: "text-3xl leading-tight sm:text-4xl sm:leading-tight",
      headingXl: "text-2xl leading-tight sm:text-3xl sm:leading-tight",
      headingLg: "text-xl leading-normal sm:text-2xl sm:leading-normal",
      headingMd: "text-sm leading-normal",
      headingSm: "text-xs leading-normal",
      headingXs: "text-xs leading-tight",
      // Body variants (font weights handled separately)
      bodyLg: "text-sm leading-normal",
      bodyMd: "text-xs leading-normal",
      bodySm: "text-xs leading-tight",
      bodyXs: "text-xs leading-tight",
    },
    alignment: {
      start: "text-left",
      center: "text-center",
      end: "text-right",
      justify: "text-justify",
    },
    tone: {
      base: "text-gray-900",
      disabled: "text-gray-400",
      inherit: "text-inherit",
      success: "text-green-600",
      critical: "text-red-600",
      caution: "text-yellow-600",
      subdued: "text-gray-600",
      "text-inverse": "text-white",
      "text-inverse-secondary": "text-gray-200",
      magic: "text-purple-600",
      "magic-subdued": "text-purple-400",
    },
    fontWeight: {
      regular: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    breakWord: {
      true: "break-words",
      false: "",
    },
    truncate: {
      true: "truncate",
      false: "",
    },
    numeric: {
      true: "font-mono tabular-nums",
      false: "",
    },
    visuallyHidden: {
      true: "sr-only",
      false: "",
    },
    textDecorationLine: {
      "line-through": "line-through",
      none: "",
    },
  },
  defaultVariants: {
    variant: "bodyMd",
    alignment: "start",
    tone: "base",
    fontWeight: "regular",
    breakWord: false,
    truncate: false,
    numeric: false,
    visuallyHidden: false,
    textDecorationLine: "none",
  },
});

// Polaris Text Props interface - matches Shopify Polaris Text component exactly
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

// Enhanced Text interface that extends Polaris with additional functionality
export interface EnhancedTextProps extends PolarisTextProps {
  /** Additional CSS class name */
  className?: string;
}

export type TextProps = EnhancedTextProps & VariantProps<typeof textVariants>;

const Text = React.forwardRef<any, TextProps>(
  (
    {
      children,
      as = "span",
      alignment,
      breakWord = false,
      tone,
      fontWeight,
      id,
      numeric = false,
      truncate = false,
      variant = "bodyMd",
      visuallyHidden = false,
      textDecorationLine,
      className,
      ...props
    },
    ref
  ) => {
    const Component = as;

    // Determine the effective font weight
    const getEffectiveFontWeight = (): TextFontWeight => {
      if (fontWeight) return fontWeight;

      // Default font weights for variants when not explicitly set
      switch (variant) {
        case "heading3xl":
        case "heading2xl":
        case "headingXl":
          return "bold";
        case "headingLg":
        case "headingMd":
        case "headingSm":
        case "headingXs":
          return "semibold";
        default:
          return "regular";
      }
    };

    return (
      <Component
        ref={ref}
        id={id}
        className={cn(
          textVariants({
            variant,
            alignment,
            tone,
            fontWeight: getEffectiveFontWeight(),
            breakWord,
            truncate,
            numeric,
            visuallyHidden,
            textDecorationLine: textDecorationLine ? "line-through" : "none",
          }),
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Text.displayName = "Text";

export { Text, textVariants };

// Backward compatibility aliases
export type PolarisTextVariant = TextVariant;
export type PolarisTextAlignment = TextAlignment;
export type PolarisTextTone = TextTone;
export type PolarisTextFontWeight = TextFontWeight;
export type PolarisTextElement = TextElement;

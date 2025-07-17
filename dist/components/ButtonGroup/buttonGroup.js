import { jsx as _jsx } from "react/jsx-runtime";
/**
 * ButtonGroup component that matches Shopify's Polaris ButtonGroup design and API
 *
 * This component provides 100% API compatibility with Shopify's Polaris ButtonGroup component
 * while being built on shadcn/ui foundation with Tailwind CSS for maximum flexibility.
 */
import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils.js";
// Create Polaris-specific button group variants using CVA
const polarisButtonGroupVariants = cva("flex items-center", {
    variants: {
        gap: {
            extraTight: "gap-0.5",
            tight: "gap-2",
            loose: "gap-4",
        },
        variant: {
            segmented: "[&>button]:ml-[-10px] [&>button]:[background-color:#ffffff] [&>button:hover]:[background-color:#f6f6f6] [&>button]:!rounded-none [&>button:first-child]:!rounded-tl-md [&>button:first-child]:!rounded-bl-md [&>button:last-child]:!rounded-tr-md [&>button:last-child]:!rounded-br-md",
        },
        fullWidth: {
            true: "w-full [&>*]:flex-1",
            false: "",
        },
        connectedTop: {
            true: "[&>*]:rounded-t-none",
            false: "",
        },
        noWrap: {
            true: "flex-nowrap",
            false: "flex-wrap",
        },
    },
    defaultVariants: {
        gap: "tight",
        fullWidth: false,
        connectedTop: false,
        noWrap: false,
    },
});
export const ButtonGroup = React.forwardRef(({ children, gap = "tight", variant, fullWidth = false, connectedTop = false, noWrap = false, className, ...props }, ref) => {
    // Build className using our Polaris variants
    // For segmented variant, we override gap to ensure no spacing between buttons
    const buttonGroupClassName = cn(polarisButtonGroupVariants({
        gap: variant === "segmented" ? undefined : gap,
        variant,
        fullWidth,
        connectedTop,
        noWrap,
    }), className);
    return (_jsx("div", { className: buttonGroupClassName, ref: ref, ...props, children: children }));
});
ButtonGroup.displayName = "ButtonGroup";
// Export variants for convenience
export { polarisButtonGroupVariants };
export { polarisButtonGroupVariants as buttonGroupVariants };

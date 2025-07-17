import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * Enhanced Button component that combines Polaris API compatibility with shadcn/ui functionality
 *
 * This component provides 100% API compatibility with Shopify's Polaris Button component
 * while being built on shadcn/ui foundation with Tailwind CSS for maximum flexibility.
 */
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { ChevronDownIcon, ChevronUpIcon, RefreshIcon, CheckIcon, } from "@shopify/polaris-icons";
import { cn } from "../../lib/utils.js";
// Create Polaris-specific button variants using CVA
const polarisButtonVariants = cva("cursor-pointer inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 relative m-0 border-0 font-sans !text-[13px] font-medium !leading-[20.15px] !rounded-lg", {
    variants: {
        variant: {
            // Polaris default variant - white background with specific shadow styling
            default: "bg-white text-gray-700 hover:bg-[#f6f6f6] shadow-[inset_0px_0.5px_0px_#c6c6c6,_0px_1px_1px_#c6c6c6,_inset_0.5px_0px_0px_#c6c6c6,_inset_-0.5px_0px_0px_#c6c6c6] hover:shadow-[inset_0px_0.5px_0px_#c6c6c6,_0px_1px_0px_#c6c6c6,_inset_0.5px_0px_0px_#c6c6c6,_inset_-0.5px_0px_0px_#c6c6c6] focus-visible:ring-gray-500/20",
            // Polaris primary variant - dark background with white text
            primary: "bg-gray-900 text-white hover:bg-gray-800 focus-visible:ring-gray-900/20",
            // Polaris secondary variant - light background with dark text
            secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:ring-gray-500/20",
            // Polaris tertiary variant - outlined button
            tertiary: "!border !border-gray-300 bg-white text-gray-900 hover:bg-gray-50 focus-visible:ring-gray-500/20",
            // Polaris plain variant - link-like appearance with blue text and underline on hover
            plain: "text-blue-600 hover:text-blue-700 hover:underline focus-visible:ring-blue-600/20 bg-transparent !shadow-none",
            // Polaris monochrome plain variant - muted appearance
            monochromePlain: "text-gray-600 hover:text-gray-700 hover:underline focus-visible:ring-gray-500/20 bg-transparent !shadow-none",
        },
        size: {
            // Polaris size variants with proper dimensions
            micro: "!h-5 !px-2 !py-0.5 gap-1 text-xs",
            slim: "!h-6 !px-2.5 !py-1 gap-1.5",
            medium: "!h-6 !px-4 !py-2 gap-2",
            large: "!h-7 !px-5 !py-2.5 gap-2.5 text-sm",
        },
        tone: {
            default: "",
            success: "bg-green-700 text-white hover:bg-green-800 focus-visible:ring-green-700/20",
            critical: "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-600/20",
        },
        textAlign: {
            start: "justify-start text-left",
            center: "justify-center text-center",
            end: "justify-end text-right",
            left: "justify-start text-left",
            right: "justify-end text-right",
        },
        fullWidth: {
            true: "w-full",
            false: "",
        },
        pressed: {
            true: "bg-accent text-accent-foreground",
            false: "",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "medium",
        tone: "default",
        textAlign: "center",
        fullWidth: false,
        pressed: false,
    },
});
// Get disclosure icon based on disclosure prop
const getDisclosureIcon = (disclosure) => {
    if (!disclosure)
        return null;
    if (disclosure === true || disclosure === "down") {
        return _jsx(ChevronDownIcon, { className: "size-4" });
    }
    if (disclosure === "up") {
        return _jsx(ChevronUpIcon, { className: "size-4" });
    }
    if (disclosure === "select") {
        return _jsx(CheckIcon, { className: "size-4" });
    }
    return null;
};
// Spinner component for loading state
const Spinner = () => _jsx(RefreshIcon, { className: "size-4 animate-spin" });
export const Button = React.forwardRef(({ children, size = "medium", textAlign = "center", fullWidth = false, disclosure, removeUnderline, icon, dataPrimaryLink, tone = "default", variant = "default", id, url, external, target, download, submit, disabled, loading, pressed = false, accessibilityLabel, role, ariaControls, ariaExpanded, ariaDescribedBy, ariaChecked, onClick, onFocus, onBlur, onKeyPress, onKeyUp, onKeyDown, onMouseEnter, onTouchStart, onPointerDown, className, asChild = false, ...props }, ref) => {
    // Determine component type: Slot for composition, anchor for links, or button
    const isLink = Boolean(url);
    const Component = asChild ? Slot : isLink ? "a" : "button";
    // Handle loading state
    const isLoading = loading;
    const isDisabled = disabled || isLoading;
    // Get disclosure icon
    const disclosureIcon = getDisclosureIcon(disclosure);
    // Build className using our Polaris variants
    const buttonClassName = cn(polarisButtonVariants({
        variant,
        size,
        tone: tone === "critical"
            ? "critical"
            : tone === "success"
                ? "success"
                : "default",
        textAlign,
        fullWidth,
        pressed,
    }), 
    // Handle underline removal for plain variants
    removeUnderline &&
        (variant === "plain" || variant === "monochromePlain") &&
        "no-underline hover:no-underline", className);
    // Common props for both button and anchor
    const commonProps = {
        id,
        className: buttonClassName,
        disabled: isDisabled,
        "aria-label": accessibilityLabel,
        "aria-controls": ariaControls,
        "aria-expanded": ariaExpanded,
        "aria-describedby": ariaDescribedBy,
        "aria-checked": ariaChecked,
        "aria-pressed": pressed,
        "data-primary-link": dataPrimaryLink,
        role,
        onClick: isDisabled ? undefined : onClick,
        onFocus,
        onBlur,
        onKeyPress,
        onKeyUp,
        onKeyDown,
        onMouseEnter,
        onTouchStart,
        onPointerDown,
        ref: ref,
        ...props,
    };
    if (isLink) {
        return (_jsxs(Component, { ...commonProps, href: url, target: external ? "_blank" : target, rel: external ? "noopener noreferrer" : undefined, download: download, children: [icon && !isLoading && (_jsx("span", { className: "inline-flex shrink-0", children: icon })), isLoading && _jsx(Spinner, {}), children && _jsx("span", { className: "inline-flex", children: children }), disclosureIcon && !isLoading && (_jsx("span", { className: "inline-flex shrink-0", children: disclosureIcon }))] }));
    }
    return (_jsxs(Component, { ...commonProps, type: submit ? "submit" : "button", children: [icon && !isLoading && (_jsx("span", { className: "inline-flex shrink-0", children: icon })), isLoading && _jsx(Spinner, {}), children && _jsx("span", { className: "inline-flex", children: children }), disclosureIcon && !isLoading && (_jsx("span", { className: "inline-flex shrink-0", children: disclosureIcon }))] }));
});
Button.displayName = "Button";
// Export variants for convenience
export { polarisButtonVariants };
export { polarisButtonVariants as buttonVariants };

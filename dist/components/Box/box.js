import { jsx as _jsx } from "react/jsx-runtime";
/**
 * Box component that matches Shopify's Polaris Box design and API
 *
 * This component provides 100% API compatibility with Shopify's Polaris Box component
 * while being built on shadcn/ui foundation with Tailwind CSS for maximum flexibility.
 */
import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils.js";
// Utility function to convert Polaris color tokens to Tailwind classes
const getBackgroundClass = (background) => {
    if (!background)
        return "";
    const backgroundMap = {
        bg: "bg-[rgb(241,241,241)]",
        "bg-inverse": "bg-[rgb(26,26,26)]",
        "bg-surface": "bg-white",
        "bg-surface-hover": "bg-[rgb(247,247,247)]",
        "bg-surface-active": "bg-[rgb(243,243,243)]",
        "bg-surface-selected": "bg-[rgb(241,241,241)]",
        "bg-surface-disabled": "bg-black/5",
        "bg-surface-secondary": "bg-[rgb(247,247,247)]",
        "bg-surface-secondary-hover": "bg-[rgb(241,241,241)]",
        "bg-surface-secondary-active": "bg-[rgb(235,235,235)]",
        "bg-surface-secondary-selected": "bg-[rgb(235,235,235)]",
        "bg-surface-tertiary": "bg-[rgb(243,243,243)]",
        "bg-surface-tertiary-hover": "bg-[rgb(235,235,235)]",
        "bg-surface-tertiary-active": "bg-[rgb(227,227,227)]",
        "bg-surface-brand": "bg-[rgb(227,227,227)]",
        "bg-surface-brand-hover": "bg-[rgb(235,235,235)]",
        "bg-surface-brand-active": "bg-[rgb(241,241,241)]",
        "bg-surface-brand-selected": "bg-[rgb(241,241,241)]",
        "bg-surface-info": "bg-[rgb(234,244,255)]",
        "bg-surface-info-hover": "bg-[rgb(224,240,255)]",
        "bg-surface-info-active": "bg-[rgb(202,230,255)]",
        "bg-surface-success": "bg-[rgb(205,254,212)]",
        "bg-surface-success-hover": "bg-[rgb(175,254,191)]",
        "bg-surface-success-active": "bg-[rgb(146,252,172)]",
        "bg-surface-caution": "bg-[rgb(255,248,219)]",
        "bg-surface-caution-hover": "bg-[rgb(255,244,191)]",
        "bg-surface-caution-active": "bg-[rgb(255,239,157)]",
        "bg-surface-warning": "bg-[rgb(255,241,227)]",
        "bg-surface-warning-hover": "bg-[rgb(255,235,213)]",
        "bg-surface-warning-active": "bg-[rgb(255,228,198)]",
        "bg-surface-critical": "bg-[rgb(254,232,235)]",
        "bg-surface-critical-hover": "bg-[rgb(254,225,230)]",
        "bg-surface-critical-active": "bg-[rgb(254,217,223)]",
        "bg-surface-emphasis": "bg-[rgb(240,242,255)]",
        "bg-surface-emphasis-hover": "bg-[rgb(234,237,255)]",
        "bg-surface-emphasis-active": "bg-[rgb(226,231,255)]",
        "bg-surface-magic": "bg-[rgb(248,247,255)]",
        "bg-surface-magic-hover": "bg-[rgb(243,241,255)]",
        "bg-surface-magic-active": "bg-[rgb(233,229,255)]",
        "bg-surface-inverse": "bg-[rgb(48,48,48)]",
        "bg-surface-transparent": "bg-transparent",
        "bg-fill": "bg-white",
        "bg-fill-hover": "bg-[rgb(250,250,250)]",
        "bg-fill-active": "bg-[rgb(247,247,247)]",
        "bg-fill-selected": "bg-[rgb(204,204,204)]",
        "bg-fill-disabled": "bg-black/5",
        "bg-fill-secondary": "bg-[rgb(241,241,241)]",
        "bg-fill-secondary-hover": "bg-[rgb(235,235,235)]",
        "bg-fill-secondary-active": "bg-[rgb(227,227,227)]",
        "bg-fill-secondary-selected": "bg-[rgb(227,227,227)]",
        "bg-fill-tertiary": "bg-[rgb(227,227,227)]",
        "bg-fill-tertiary-hover": "bg-[rgb(212,212,212)]",
        "bg-fill-tertiary-active": "bg-[rgb(204,204,204)]",
        "bg-fill-brand": "bg-[rgb(48,48,48)]",
        "bg-fill-brand-hover": "bg-[rgb(26,26,26)]",
        "bg-fill-brand-active": "bg-[rgb(26,26,26)]",
        "bg-fill-brand-selected": "bg-[rgb(48,48,48)]",
        "bg-fill-brand-disabled": "bg-black/[0.17]",
        "bg-fill-info": "bg-[rgb(145,208,255)]",
        "bg-fill-info-hover": "bg-[rgb(81,192,255)]",
        "bg-fill-info-active": "bg-[rgb(0,148,213)]",
        "bg-fill-info-secondary": "bg-[rgb(213,235,255)]",
        "bg-fill-success": "bg-[rgb(4,123,93)]",
        "bg-fill-success-hover": "bg-[rgb(3,94,76)]",
        "bg-fill-success-active": "bg-[rgb(1,75,64)]",
        "bg-fill-success-secondary": "bg-[rgb(175,254,191)]",
        "bg-fill-warning": "bg-[rgb(255,184,0)]",
        "bg-fill-warning-hover": "bg-[rgb(229,165,0)]",
        "bg-fill-warning-active": "bg-[rgb(178,132,0)]",
        "bg-fill-warning-secondary": "bg-[rgb(255,214,164)]",
        "bg-fill-caution": "bg-[rgb(255,230,0)]",
        "bg-fill-caution-hover": "bg-[rgb(234,211,0)]",
        "bg-fill-caution-active": "bg-[rgb(225,203,0)]",
        "bg-fill-caution-secondary": "bg-[rgb(255,235,120)]",
        "bg-fill-critical": "bg-[rgb(199,10,36)]",
        "bg-fill-critical-hover": "bg-[rgb(163,10,36)]",
        "bg-fill-critical-active": "bg-[rgb(142,11,33)]",
        "bg-fill-critical-selected": "bg-[rgb(142,11,33)]",
        "bg-fill-critical-secondary": "bg-[rgb(254,209,215)]",
        "bg-fill-emphasis": "bg-[rgb(0,91,211)]",
        "bg-fill-emphasis-hover": "bg-[rgb(0,66,153)]",
        "bg-fill-emphasis-active": "bg-[rgb(0,46,106)]",
        "bg-fill-magic": "bg-[rgb(128,81,255)]",
        "bg-fill-magic-secondary": "bg-[rgb(233,229,255)]",
        "bg-fill-magic-secondary-hover": "bg-[rgb(228,222,255)]",
        "bg-fill-magic-secondary-active": "bg-[rgb(223,217,255)]",
        "bg-fill-inverse": "bg-[rgb(48,48,48)]",
        "bg-fill-inverse-hover": "bg-[rgb(74,74,74)]",
        "bg-fill-inverse-active": "bg-[rgb(97,97,97)]",
        "bg-fill-transparent": "bg-black/[0.02]",
        "bg-fill-transparent-hover": "bg-black/5",
        "bg-fill-transparent-active": "bg-black/[0.08]",
        "bg-fill-transparent-selected": "bg-black/[0.08]",
        "bg-fill-transparent-secondary": "bg-black/[0.06]",
        "bg-fill-transparent-secondary-hover": "bg-black/[0.08]",
        "bg-fill-transparent-secondary-active": "bg-black/[0.11]",
    };
    return backgroundMap[background] || "";
};
// Utility function to convert Polaris border color tokens to Tailwind classes
const getBorderColorClass = (borderColor) => {
    if (!borderColor)
        return "";
    if (borderColor === "transparent")
        return "border-transparent";
    const borderColorMap = {
        border: "border-[rgb(227,227,227)]",
        "border-hover": "border-[rgb(204,204,204)]",
        "border-disabled": "border-[rgb(235,235,235)]",
        "border-secondary": "border-[rgb(235,235,235)]",
        "border-tertiary": "border-[rgb(204,204,204)]",
        "border-focus": "border-[rgb(0,91,211)]",
        "border-brand": "border-[rgb(227,227,227)]",
        "border-info": "border-[rgb(168,216,255)]",
        "border-success": "border-[rgb(146,252,172)]",
        "border-caution": "border-[rgb(255,235,120)]",
        "border-warning": "border-[rgb(255,200,121)]",
        "border-critical": "border-[rgb(254,193,199)]",
        "border-critical-secondary": "border-[rgb(142,11,33)]",
        "border-emphasis": "border-[rgb(0,91,211)]",
        "border-emphasis-hover": "border-[rgb(0,66,153)]",
        "border-emphasis-active": "border-[rgb(0,46,106)]",
        "border-magic": "border-[rgb(228,222,255)]",
        "border-magic-secondary": "border-[rgb(148,116,255)]",
        "border-magic-secondary-hover": "border-[rgb(128,81,255)]",
        "border-inverse": "border-[rgb(97,97,97)]",
        "border-inverse-hover": "border-[rgb(204,204,204)]",
        "border-inverse-active": "border-[rgb(227,227,227)]",
    };
    return borderColorMap[borderColor] || "";
};
// Utility function to convert Polaris text color tokens to Tailwind classes
const getTextColorClass = (color) => {
    if (!color)
        return "";
    const textColorMap = {
        text: "text-[rgb(48,48,48)]",
        "text-secondary": "text-[rgb(97,97,97)]",
        "text-disabled": "text-[rgb(181,181,181)]",
        "text-link": "text-[rgb(0,91,211)]",
        "text-link-hover": "text-[rgb(0,66,153)]",
        "text-link-active": "text-[rgb(0,46,106)]",
        "text-brand": "text-[rgb(74,74,74)]",
        "text-brand-hover": "text-[rgb(48,48,48)]",
        "text-brand-on-bg-fill": "text-white",
        "text-brand-on-bg-fill-hover": "text-[rgb(227,227,227)]",
        "text-brand-on-bg-fill-active": "text-[rgb(204,204,204)]",
        "text-brand-on-bg-fill-disabled": "text-white",
        "text-info": "text-[rgb(0,58,90)]",
        "text-info-hover": "text-[rgb(0,58,90)]",
        "text-info-active": "text-[rgb(0,33,51)]",
        "text-info-secondary": "text-[rgb(0,124,180)]",
        "text-info-on-bg-fill": "text-[rgb(0,33,51)]",
        "text-success": "text-[rgb(1,75,64)]",
        "text-success-hover": "text-[rgb(7,54,48)]",
        "text-success-active": "text-[rgb(2,38,34)]",
        "text-success-secondary": "text-[rgb(4,123,93)]",
        "text-success-on-bg-fill": "text-[rgb(250,255,251)]",
        "text-caution": "text-[rgb(79,71,0)]",
        "text-caution-hover": "text-[rgb(51,46,0)]",
        "text-caution-active": "text-[rgb(31,28,0)]",
        "text-caution-secondary": "text-[rgb(130,117,0)]",
        "text-caution-on-bg-fill": "text-[rgb(51,46,0)]",
        "text-warning": "text-[rgb(94,66,0)]",
        "text-warning-hover": "text-[rgb(65,45,0)]",
        "text-warning-active": "text-[rgb(37,26,0)]",
        "text-warning-secondary": "text-[rgb(149,111,0)]",
        "text-warning-on-bg-fill": "text-[rgb(37,26,0)]",
        "text-critical": "text-[rgb(142,11,33)]",
        "text-critical-hover": "text-[rgb(95,7,22)]",
        "text-critical-active": "text-[rgb(47,4,11)]",
        "text-critical-secondary": "text-[rgb(199,10,36)]",
        "text-critical-on-bg-fill": "text-[rgb(255,250,251)]",
        "text-emphasis": "text-[rgb(0,91,211)]",
        "text-emphasis-hover": "text-[rgb(0,66,153)]",
        "text-emphasis-active": "text-[rgb(0,46,106)]",
        "text-emphasis-on-bg-fill": "text-[rgb(252,253,255)]",
        "text-emphasis-on-bg-fill-hover": "text-[rgb(226,231,255)]",
        "text-emphasis-on-bg-fill-active": "text-[rgb(213,220,255)]",
        "text-magic": "text-[rgb(87,0,209)]",
        "text-magic-secondary": "text-[rgb(113,38,255)]",
        "text-magic-on-bg-fill": "text-[rgb(253,253,255)]",
        "text-inverse": "text-[rgb(227,227,227)]",
        "text-inverse-secondary": "text-[rgb(181,181,181)]",
        "text-link-inverse": "text-[rgb(197,208,255)]",
    };
    return textColorMap[color] || "";
};
// Utility function to convert Polaris space tokens to Tailwind classes
const getSpaceClass = (space) => {
    if (!space)
        return "";
    const spaceMap = {
        "0": "0",
        "025": "px",
        "050": "0.5",
        "100": "1",
        "150": "1.5",
        "200": "2",
        "300": "3",
        "400": "4",
        "500": "5",
        "600": "6",
        "800": "8",
        "1000": "10",
        "1200": "12",
        "1600": "16",
        "2000": "20",
        "2400": "24",
        "2800": "28",
        "3200": "32",
    };
    return spaceMap[space] || "";
};
// Utility function to convert Polaris border radius tokens to Tailwind classes
const getBorderRadiusClass = (radius) => {
    if (!radius)
        return "";
    const radiusMap = {
        "0": "rounded-none",
        "050": "rounded-sm",
        "100": "rounded",
        "150": "rounded-md",
        "200": "rounded-lg",
        "300": "rounded-xl",
        "400": "rounded-2xl",
        "500": "rounded-3xl",
        "750": "rounded-[30px]",
        full: "rounded-full",
    };
    return radiusMap[radius] || "";
};
// Utility function to convert Polaris border width tokens to Tailwind classes
const getBorderWidthClass = (width) => {
    if (!width)
        return "";
    const widthMap = {
        "0": "border-0",
        "0165": "border-[0.66px]",
        "025": "border",
        "050": "border-2",
        "100": "border-4",
    };
    return widthMap[width] || "";
};
// Utility function to convert Polaris shadow tokens to Tailwind classes
const getShadowClass = (shadow) => {
    if (!shadow)
        return "";
    const shadowMap = {
        "0": "shadow-none",
        "100": "shadow-[0px_1px_0px_0px_rgba(26,26,26,0.07)]",
        "200": "shadow-[0px_3px_1px_-1px_rgba(26,26,26,0.07)]",
        "300": "shadow-[0px_4px_6px_-2px_rgba(26,26,26,0.20)]",
        "400": "shadow-[0px_8px_16px_-4px_rgba(26,26,26,0.22)]",
        "500": "shadow-[0px_12px_20px_-8px_rgba(26,26,26,0.24)]",
        "600": "shadow-[0px_20px_20px_-8px_rgba(26,26,26,0.28)]",
        "bevel-100": "shadow-[1px_0px_0px_0px_rgba(0,0,0,0.13)_inset,_-1px_0px_0px_0px_rgba(0,0,0,0.13)_inset,_0px_-1px_0px_0px_rgba(0,0,0,0.17)_inset,_0px_1px_0px_0px_rgba(204,204,204,0.5)_inset]",
        "inset-100": "shadow-[0px_1px_2px_0px_rgba(26,26,26,0.15)_inset,_0px_1px_1px_0px_rgba(26,26,26,0.15)_inset]",
        "inset-200": "shadow-[0px_2px_1px_0px_rgba(26,26,26,0.20)_inset,_1px_0px_1px_0px_rgba(26,26,26,0.12)_inset,_-1px_0px_1px_0px_rgba(26,26,26,0.12)_inset]",
        button: "shadow-[0px_-1px_0px_0px_#b5b5b5_inset,_0px_0px_0px_1px_rgba(0,0,0,0.1)_inset,_0px_0.5px_0px_1.5px_#FFF_inset]",
        "button-hover": "shadow-[0px_1px_0px_0px_#EBEBEB_inset,_-1px_0px_0px_0px_#EBEBEB_inset,_1px_0px_0px_0px_#EBEBEB_inset,_0px_-1px_0px_0px_#CCC_inset]",
        "button-inset": "shadow-[-1px_0px_1px_0px_rgba(26,26,26,0.122)_inset,_1px_0px_1px_0px_rgba(26,26,26,0.122)_inset,_0px_2px_1px_0px_rgba(26,26,26,0.2)_inset]",
        "button-primary": "shadow-[0px_-1px_0px_1px_rgba(0,0,0,0.8)_inset,_0px_0px_0px_1px_rgba(48,48,48,1)_inset,_0px_0.5px_0px_1.5px_rgba(255,255,255,0.25)_inset]",
        "button-primary-hover": "shadow-[0px_1px_0px_0px_rgba(255,255,255,0.24)_inset,_1px_0px_0px_0px_rgba(255,255,255,0.20)_inset,_-1px_0px_0px_0px_rgba(255,255,255,0.20)_inset,_0px_-1px_0px_0px_#000_inset,_0px_-1px_0px_1px_#1A1A1A]",
        "button-primary-inset": "shadow-[0px_3px_0px_0px_rgb(0,0,0)_inset]",
        "button-primary-critical": "shadow-[0px_-1px_0px_1px_rgba(142,31,11,0.8)_inset,_0px_0px_0px_1px_rgba(181,38,11,0.8)_inset,_0px_0.5px_0px_1.5px_rgba(255,255,255,0.349)_inset]",
        "button-primary-critical-hover": "shadow-[0px_1px_0px_0px_rgba(255,255,255,0.48)_inset,_1px_0px_0px_0px_rgba(255,255,255,0.20)_inset,_-1px_0px_0px_0px_rgba(255,255,255,0.20)_inset,_0px_-1.5px_0px_0px_rgba(0,0,0,0.25)_inset]",
        "button-primary-critical-inset": "shadow-[-1px_0px_1px_0px_rgba(0,0,0,0.2)_inset,_1px_0px_1px_0px_rgba(0,0,0,0.2)_inset,_0px_2px_0px_0px_rgba(0,0,0,0.6)_inset]",
        "button-primary-success": "shadow-[0px_-1px_0px_1px_rgba(12,81,50,0.8)_inset,_0px_0px_0px_1px_rgba(19,111,69,0.8)_inset,_0px_0.5px_0px_1.5px_rgba(255,255,255,0.251)_inset]",
        "button-primary-success-hover": "shadow-[0px_1px_0px_0px_rgba(255,255,255,0.48)_inset,_1px_0px_0px_0px_rgba(255,255,255,0.20)_inset,_-1px_0px_0px_0px_rgba(255,255,255,0.20)_inset,_0px_-1.5px_0px_0px_rgba(0,0,0,0.25)_inset]",
        "button-primary-success-inset": "shadow-[-1px_0px_1px_0px_rgba(0,0,0,0.2)_inset,_1px_0px_1px_0px_rgba(0,0,0,0.2)_inset,_0px_2px_0px_0px_rgba(0,0,0,0.6)_inset]",
        "border-inset": "shadow-[0px_0px_0px_1px_rgba(0,0,0,0.08)_inset]",
    };
    return shadowMap[shadow] || "";
};
// Utility function to handle responsive spacing
const getResponsivePaddingClasses = (padding, prefix = "p") => {
    if (!padding)
        return "";
    if (typeof padding === "string") {
        const spaceValue = getSpaceClass(padding);
        return spaceValue ? `${prefix}-${spaceValue}` : "";
    }
    // Handle responsive object
    const classes = [];
    Object.entries(padding).forEach(([breakpoint, value]) => {
        const spaceValue = getSpaceClass(value);
        if (spaceValue) {
            const breakpointPrefix = breakpoint === "xs" ? "" : `${breakpoint}:`;
            classes.push(`${breakpointPrefix}${prefix}-${spaceValue}`);
        }
    });
    return classes.join(" ");
};
// Utility function to get individual border width classes
const getIndividualBorderWidthClass = (width, side) => {
    const widthMap = {
        "0": "0",
        "0165": "[0.66px]",
        "025": "",
        "050": "2",
        "100": "4",
    };
    const widthValue = widthMap[width];
    return widthValue ? `border-${side}-${widthValue}` : `border-${side}`;
};
// Utility function to get individual border radius classes
const getIndividualBorderRadiusClass = (radius, corner) => {
    const radiusMap = {
        "0": "none",
        "050": "sm",
        "100": "",
        "150": "md",
        "200": "lg",
        "300": "xl",
        "400": "2xl",
        "500": "3xl",
        "750": "[30px]",
        full: "full",
    };
    const radiusValue = radiusMap[radius];
    return radiusValue ? `rounded-${corner}-${radiusValue}` : `rounded-${corner}`;
};
// Create Polaris-specific box variants using CVA
const polarisBoxVariants = cva("", {
    variants: {
        // Base styling variants can be added here if needed
        visuallyHidden: {
            true: "sr-only",
            false: "",
        },
        printHidden: {
            true: "print:hidden",
            false: "",
        },
    },
    defaultVariants: {
        visuallyHidden: false,
        printHidden: false,
    },
});
export const Box = React.forwardRef(({ children, as = "div", background, borderColor, borderStyle, borderRadius, borderEndStartRadius, borderEndEndRadius, borderStartStartRadius, borderStartEndRadius, borderWidth, borderBlockStartWidth, borderBlockEndWidth, borderInlineStartWidth, borderInlineEndWidth, color, id, minHeight, minWidth, maxWidth, overflowX, overflowY, padding, paddingBlock, paddingBlockStart, paddingBlockEnd, paddingInline, paddingInlineStart, paddingInlineEnd, role, shadow, tabIndex, width, position, insetBlockStart, insetBlockEnd, insetInlineStart, insetInlineEnd, opacity, outlineColor, outlineStyle, outlineWidth, printHidden = false, visuallyHidden = false, zIndex, className, ...props }, ref) => {
    const Component = as;
    // Build className using our utility functions and CVA
    const boxClassName = cn(polarisBoxVariants({
        visuallyHidden,
        printHidden,
    }), 
    // Background
    getBackgroundClass(background), 
    // Border
    getBorderColorClass(borderColor), borderStyle === "dashed" ? "border-dashed" : "border-solid", getBorderRadiusClass(borderRadius), getBorderWidthClass(borderWidth), 
    // Individual border widths
    borderBlockStartWidth &&
        getIndividualBorderWidthClass(borderBlockStartWidth, "t"), borderBlockEndWidth &&
        getIndividualBorderWidthClass(borderBlockEndWidth, "b"), borderInlineStartWidth &&
        getIndividualBorderWidthClass(borderInlineStartWidth, "l"), borderInlineEndWidth &&
        getIndividualBorderWidthClass(borderInlineEndWidth, "r"), 
    // Individual border radius
    borderEndStartRadius &&
        getIndividualBorderRadiusClass(borderEndStartRadius, "bl"), borderEndEndRadius &&
        getIndividualBorderRadiusClass(borderEndEndRadius, "br"), borderStartStartRadius &&
        getIndividualBorderRadiusClass(borderStartStartRadius, "tl"), borderStartEndRadius &&
        getIndividualBorderRadiusClass(borderStartEndRadius, "tr"), 
    // Text color
    getTextColorClass(color), 
    // Overflow
    overflowX && `overflow-x-${overflowX}`, overflowY && `overflow-y-${overflowY}`, 
    // Padding
    getResponsivePaddingClasses(padding, "p"), getResponsivePaddingClasses(paddingBlock, "py"), getResponsivePaddingClasses(paddingBlockStart, "pt"), getResponsivePaddingClasses(paddingBlockEnd, "pb"), getResponsivePaddingClasses(paddingInline, "px"), getResponsivePaddingClasses(paddingInlineStart, "pl"), getResponsivePaddingClasses(paddingInlineEnd, "pr"), 
    // Shadow
    getShadowClass(shadow), 
    // Position
    position && `${position}`, 
    // Inset (positioning)
    getResponsivePaddingClasses(insetBlockStart, "top"), getResponsivePaddingClasses(insetBlockEnd, "bottom"), getResponsivePaddingClasses(insetInlineStart, "left"), getResponsivePaddingClasses(insetInlineEnd, "right"), 
    // Outline
    outlineColor &&
        getBorderColorClass(outlineColor).replace("border-", "outline-"), outlineStyle === "dashed"
        ? "outline-dashed"
        : outlineStyle === "solid"
            ? "outline-solid"
            : "", outlineWidth &&
        getBorderWidthClass(outlineWidth).replace("border-", "outline-"), className);
    // Build style object for properties that can't be handled with Tailwind classes
    const style = {
        ...(minHeight && { minHeight }),
        ...(minWidth && { minWidth }),
        ...(maxWidth && { maxWidth }),
        ...(width && { width }),
        ...(opacity && { opacity }),
        ...(zIndex && { zIndex }),
    };
    return (_jsx(Component, { ref: ref, className: boxClassName, style: Object.keys(style).length > 0 ? style : undefined, id: id, role: role, tabIndex: tabIndex, ...props, children: children }));
});
Box.displayName = "Box";
// Export variants for convenience
export { polarisBoxVariants };
export { polarisBoxVariants as boxVariants };

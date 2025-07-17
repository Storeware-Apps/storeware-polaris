import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
/**
 * Enhanced Page component that combines Polaris API compatibility with shadcn/ui functionality
 *
 * This component provides 100% API compatibility with Shopify's Polaris Page component
 * while being built on shadcn/ui foundation with Tailwind CSS for maximum flexibility.
 */
import * as React from "react";
import { cva } from "class-variance-authority";
import { ArrowLeftIcon } from "@shopify/polaris-icons";
import { cn } from "../../lib/utils.js";
// Page variants using cva
const pageVariants = cva("min-h-screen bg-surface", {
    variants: {
        narrowWidth: {
            true: "max-w-4xl mx-auto",
            false: "w-full",
        },
        fullWidth: {
            true: "w-full max-w-none",
            false: "",
        },
    },
    defaultVariants: {
        narrowWidth: false,
        fullWidth: false,
    },
});
const pageHeaderVariants = cva("border-b border-border bg-surface", {
    variants: {
        divider: {
            true: "border-b border-border",
            false: "border-b-0",
        },
    },
    defaultVariants: {
        divider: false,
    },
});
const pageContentVariants = cva("px-4 py-6 sm:px-6 lg:px-8", {
    variants: {
        narrowWidth: {
            true: "max-w-4xl mx-auto",
            false: "",
        },
        fullWidth: {
            true: "px-0",
            false: "",
        },
    },
    defaultVariants: {
        narrowWidth: false,
        fullWidth: false,
    },
});
const Page = React.forwardRef(({ children, fullWidth = false, narrowWidth = false, titleHidden = false, pageReadyAccessibilityLabel, filterActions = false, primaryAction, pagination, backAction, secondaryActions, actionGroups, additionalMetadata, onActionRollup, title, subtitle, titleMetadata, compactTitle = false, hasSubtitleMaxWidth = false, breadcrumbs, divider = false, onBack, className, id, ...props }, ref) => {
    const hasHeader = title ||
        subtitle ||
        titleMetadata ||
        breadcrumbs ||
        backAction ||
        secondaryActions ||
        actionGroups ||
        primaryAction ||
        onBack ||
        additionalMetadata ||
        pagination;
    return (_jsxs("div", { ref: ref, id: id, className: cn(pageVariants({ narrowWidth, fullWidth }), className), ...props, children: [hasHeader && (_jsx("header", { className: cn(pageHeaderVariants({ divider })), children: _jsxs("div", { className: cn("px-4 py-4 sm:px-6 lg:px-8", narrowWidth && "max-w-4xl mx-auto", fullWidth && "px-6"), children: [(breadcrumbs || backAction || onBack) && (_jsxs("div", { className: "mb-4", children: [backAction && (_jsx(_Fragment, { children: "url" in backAction ? (_jsxs("a", { href: backAction.url, onClick: (e) => {
                                            if (backAction.onAction) {
                                                e.preventDefault();
                                                backAction.onAction();
                                            }
                                        }, target: backAction.external ? "_blank" : undefined, rel: backAction.external
                                            ? "noopener noreferrer"
                                            : undefined, className: "inline-flex items-center text-sm text-text-secondary hover:text-text transition-colors", children: [_jsx(ArrowLeftIcon, { className: "w-4 h-4 mr-1" }), backAction.content] })) : (_jsxs("button", { onClick: backAction.onAction, className: "inline-flex items-center text-sm text-text-secondary hover:text-text transition-colors", children: [_jsx(ArrowLeftIcon, { className: "w-4 h-4 mr-1" }), backAction.content] })) })), onBack && !backAction && (_jsxs("button", { onClick: onBack, className: "inline-flex items-center text-sm text-text-secondary hover:text-text transition-colors", children: [_jsx(ArrowLeftIcon, { className: "w-4 h-4 mr-1" }), "Back"] })), breadcrumbs && (_jsx("nav", { className: "flex", "aria-label": "Breadcrumb", children: _jsx("ol", { className: "inline-flex items-center space-x-1 md:space-x-3", children: breadcrumbs.map((breadcrumb, index) => (_jsxs("li", { className: "inline-flex items-center", children: [index > 0 && (_jsx("span", { className: "mx-2 text-text-secondary", children: "/" })), breadcrumb.url ? (_jsx("a", { href: breadcrumb.url, onClick: (e) => {
                                                        if (breadcrumb.onAction) {
                                                            e.preventDefault();
                                                            breadcrumb.onAction();
                                                        }
                                                    }, className: "text-sm text-text-secondary hover:text-text transition-colors", children: breadcrumb.content })) : breadcrumb.onAction ? (_jsx("button", { onClick: breadcrumb.onAction, className: "text-sm text-text-secondary hover:text-text transition-colors bg-transparent border-none p-0 cursor-pointer", children: breadcrumb.content })) : (_jsx("span", { className: "text-sm text-text-secondary", children: breadcrumb.content }))] }, index))) }) }))] })), _jsxs("div", { className: "flex items-start justify-between", children: [_jsxs("div", { className: "min-w-0 flex-1", children: [title && (_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("h1", { className: cn("text-2xl font-semibold text-text truncate", titleHidden && "sr-only"), "aria-label": pageReadyAccessibilityLabel || title, children: title }), titleMetadata && (_jsx("div", { className: "flex-shrink-0", children: titleMetadata }))] })), subtitle && (_jsx("p", { className: cn("text-sm text-text-secondary", compactTitle ? "mt-0" : "mt-1", hasSubtitleMaxWidth && "max-w-2xl"), children: subtitle })), additionalMetadata && (_jsx("div", { className: "mt-2", children: additionalMetadata }))] }), (primaryAction || secondaryActions || actionGroups) && (_jsxs("div", { className: "ml-4 flex items-center space-x-3", children: [secondaryActions && (_jsx("div", { className: "flex space-x-2", children: secondaryActions.map((action, index) => {
                                                const ActionComponent = action.url ? "a" : "button";
                                                return (_jsxs(ActionComponent, { href: action.url, onClick: (e) => {
                                                        if (action.onAction) {
                                                            if (action.url) {
                                                                e.preventDefault();
                                                            }
                                                            action.onAction();
                                                        }
                                                    }, disabled: action.disabled, target: action.external ? "_blank" : undefined, rel: action.external
                                                        ? "noopener noreferrer"
                                                        : undefined, "aria-label": action.accessibilityLabel, className: cn("inline-flex items-center px-3 py-2 border border-border text-sm font-medium rounded-md", "text-text bg-surface hover:bg-surface-hovered", "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-focused", action.disabled &&
                                                        "opacity-50 cursor-not-allowed", action.destructive &&
                                                        "text-text-critical border-border-critical hover:bg-surface-critical"), children: [action.icon && (_jsx("span", { className: "mr-2", children: action.icon })), action.content] }, index));
                                            }) })), primaryAction && (_jsx(_Fragment, { children: primaryAction.url ? (_jsxs("a", { href: primaryAction.url, onClick: (e) => {
                                                    if (primaryAction.onAction) {
                                                        e.preventDefault();
                                                        primaryAction.onAction();
                                                    }
                                                }, target: primaryAction.external ? "_blank" : undefined, rel: primaryAction.external
                                                    ? "noopener noreferrer"
                                                    : undefined, "aria-label": primaryAction.accessibilityLabel, className: cn("inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md", "text-text-on-primary bg-primary hover:bg-primary-hovered", "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-focused", primaryAction.destructive &&
                                                    "bg-critical hover:bg-critical-hovered text-text-on-critical"), children: [primaryAction.icon && (_jsx("span", { className: "mr-2", children: primaryAction.icon })), primaryAction.content] })) : (_jsxs("button", { onClick: primaryAction.onAction, disabled: primaryAction.disabled, "aria-label": primaryAction.accessibilityLabel, className: cn("inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md", "text-text-on-primary bg-primary hover:bg-primary-hovered", "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-focused", primaryAction.disabled &&
                                                    "opacity-50 cursor-not-allowed", primaryAction.destructive &&
                                                    "bg-critical hover:bg-critical-hovered text-text-on-critical"), children: [primaryAction.icon && (_jsx("span", { className: "mr-2", children: primaryAction.icon })), primaryAction.content] })) }))] }))] }), pagination && (_jsxs("div", { className: "mt-4 flex justify-between items-center", children: [pagination.previousURL ? (_jsxs("a", { href: pagination.previousURL, onClick: (e) => {
                                        if (pagination.onPrevious) {
                                            e.preventDefault();
                                            pagination.onPrevious();
                                        }
                                    }, className: cn("inline-flex items-center px-3 py-2 text-sm font-medium", "text-text-secondary hover:text-text transition-colors", !pagination.hasPrevious &&
                                        "opacity-50 cursor-not-allowed"), children: [_jsx(ArrowLeftIcon, { className: "w-4 h-4 mr-1" }), "Previous"] })) : (_jsxs("button", { onClick: pagination.onPrevious, disabled: !pagination.hasPrevious, className: cn("inline-flex items-center px-3 py-2 text-sm font-medium", "text-text-secondary hover:text-text transition-colors", !pagination.hasPrevious &&
                                        "opacity-50 cursor-not-allowed"), children: [_jsx(ArrowLeftIcon, { className: "w-4 h-4 mr-1" }), "Previous"] })), pagination.nextURL ? (_jsxs("a", { href: pagination.nextURL, onClick: (e) => {
                                        if (pagination.onNext) {
                                            e.preventDefault();
                                            pagination.onNext();
                                        }
                                    }, className: cn("inline-flex items-center px-3 py-2 text-sm font-medium", "text-text-secondary hover:text-text transition-colors", !pagination.hasNext && "opacity-50 cursor-not-allowed"), children: ["Next", _jsx(ArrowLeftIcon, { className: "w-4 h-4 ml-1 rotate-180" })] })) : (_jsxs("button", { onClick: pagination.onNext, disabled: !pagination.hasNext, className: cn("inline-flex items-center px-3 py-2 text-sm font-medium", "text-text-secondary hover:text-text transition-colors", !pagination.hasNext && "opacity-50 cursor-not-allowed"), children: ["Next", _jsx(ArrowLeftIcon, { className: "w-4 h-4 ml-1 rotate-180" })] }))] }))] }) })), _jsx("main", { className: cn(pageContentVariants({ narrowWidth, fullWidth })), children: children })] }));
});
Page.displayName = "Page";
export { Page, pageVariants };

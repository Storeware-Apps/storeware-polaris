# Toast Component Documentation

## Overview

The Toast component provides 100% API compatibility with Shopify's App Bridge Toast API while being built on shadcn/ui Sonner foundation with Tailwind CSS. The Toast API displays a non-disruptive message that appears at the bottom of the interface to provide quick and short feedback on the outcome of an action.

This component features a custom dark design with:

- **Dark Background**: `#0d1213` background color for a modern, sleek appearance
- **Content-Fit Width**: Toast width automatically adjusts to content length (with max-width constraint)
- **Clean Close Button**: Close button positioned on the right side without circular background
- **White Text**: High contrast white text on dark background for excellent readability

This component is modeled after the [Web Notification API](https://developer.mozilla.org/en-US/docs/Web/API/Notification) and provides the exact same interface as Shopify's App Bridge Toast API.

## Installation

```bash
pnpm install @storeware/polaris
```

## Basic Usage

### Setup

First, add the Toaster component to your app layout (typically in your root component):

```tsx
import { Toaster } from "@storeware/polaris";

function App() {
  return (
    <div>
      {/* Your app content */}
      <main>{/* Your pages/components */}</main>

      {/* Add Toaster at the end of your app */}
      <Toaster />
    </div>
  );
}
```

### Show Toast

```tsx
import { toast } from "@storeware/polaris";

function MyComponent() {
  const handleSave = () => {
    // Basic toast
    toast.show("Message sent");
  };

  return <Button onClick={handleSave}>Send Message</Button>;
}
```

## Import Styles

Make sure to import the component styles in your application:

```tsx
import "@storeware/polaris/styles";
```

## API Reference

### toast.show(message, options)

The `toast.show` method displays a Toast notification. It accepts a variety of options to customize the behavior.

**Parameters:**

- `message` (string, required): The message to display in the toast
- `options` (ToastOptions, optional): Configuration options for the toast

**Returns:** string - A unique ID for the toast that can be used with `toast.hide()`

### toast.hide(id)

The `toast.hide` method hides a Toast notification. This is not required to be called as the Toast notification will automatically hide after the `duration` has elapsed.

**Parameters:**

- `id` (string, required): The toast ID returned from `toast.show()`

**Returns:** void

## Examples

### Basic Toast

```tsx
import { toast, Button } from "@storeware/polaris";

function BasicExample() {
  return <Button onClick={() => toast.show("Message sent")}>Show Toast</Button>;
}
```

### Toast with Duration

```tsx
import { toast, Button } from "@storeware/polaris";

function DurationExample() {
  return (
    <Button onClick={() => toast.show("Product saved", { duration: 5000 })}>
      Show Toast (5 seconds)
    </Button>
  );
}
```

### Toast with Action

```tsx
import { toast, Button } from "@storeware/polaris";

function ActionExample() {
  const handleUndo = () => {
    console.log("Undo action triggered");
  };

  return (
    <Button
      onClick={() =>
        toast.show("Product archived", {
          action: {
            label: "Undo",
            onClick: handleUndo,
          },
        })
      }>
      Show Toast with Action
    </Button>
  );
}
```

### Toast with Dismiss Callback

```tsx
import { toast, Button } from "@storeware/polaris";

function DismissCallbackExample() {
  const handleDismiss = () => {
    console.log("Toast was dismissed");
  };

  return (
    <Button
      onClick={() =>
        toast.show("Settings updated", {
          onDismiss: handleDismiss,
        })
      }>
      Show Toast with Dismiss Callback
    </Button>
  );
}
```

### Manually Hide Toast

```tsx
import { toast, Button } from "@storeware/polaris";
import { useState } from "react";

function HideToastExample() {
  const [toastId, setToastId] = useState<string | null>(null);

  const showToast = () => {
    const id = toast.show("This toast can be hidden manually", {
      duration: 10000, // 10 seconds
    });
    setToastId(id);
  };

  const hideToast = () => {
    if (toastId) {
      toast.hide(toastId);
      setToastId(null);
    }
  };

  return (
    <div style={{ display: "flex", gap: "8px" }}>
      <Button onClick={showToast}>Show Long Toast</Button>
      <Button onClick={hideToast} disabled={!toastId}>
        Hide Toast
      </Button>
    </div>
  );
}
```

## TypeScript Interfaces

### ToastOptions

```tsx
interface ToastOptions {
  /** Duration in milliseconds before the toast auto-dismisses (default: 4000) */
  duration?: number;
  /** Action button configuration */
  action?: ToastAction;
  /** Callback when toast is dismissed */
  onDismiss?: () => void;
  /** Whether the toast can be dismissed by clicking (default: true) */
  dismissible?: boolean;
}
```

### ToastAction

```tsx
interface ToastAction {
  /** Label for the action button */
  label: string;
  /** Callback when action is clicked */
  onClick: () => void;
}
```

### Toaster Props

```tsx
interface EnhancedToastProps {
  /** Additional CSS class name */
  className?: string;
  /** Custom theme configuration */
  theme?: "light" | "dark" | "system";
  /** Position of the toaster */
  position?:
    | "top-left"
    | "top-center"
    | "top-right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right";
  /** Maximum number of toasts to show at once */
  visibleToasts?: number;
  /** Whether to show close button */
  closeButton?: boolean;
  /** Rich colors for different toast types */
  richColors?: boolean;
  /** Expand toasts by default */
  expand?: boolean;
  /** Gap between toasts */
  gap?: number;
  /** Offset from the edge of the screen */
  offset?: string | number;
}
```

## Customization

### Toaster Configuration

You can customize the Toaster component with various props:

```tsx
<Toaster
  position="top-right"
  visibleToasts={5}
  closeButton={true}
  theme="dark"
  gap={16}
  offset="24px"
/>
```

### Custom Styling

The component uses Tailwind CSS classes and can be customized through the `className` prop:

```tsx
<Toaster className="custom-toaster-styles" />
```

## App Bridge Compatibility

This component provides 100% compatibility with Shopify's App Bridge Toast API:

- ✅ `toast.show(message, options)` - Exact same method signature
- ✅ `toast.hide(id)` - Exact same method signature
- ✅ `ToastOptions` interface - All properties supported
- ✅ Return values - Returns string ID from show(), void from hide()
- ✅ Behavior - Auto-dismiss, manual dismiss, action buttons, callbacks

## Best Practices

1. **Single Toaster**: Only include one `<Toaster />` component in your app, typically in your root layout
2. **Meaningful Messages**: Keep toast messages concise and actionable
3. **Appropriate Duration**: Use longer durations for important messages, shorter for confirmations
4. **Action Buttons**: Use action buttons sparingly for critical undo operations
5. **Accessibility**: Toast messages are automatically announced to screen readers

## Migration from App Bridge

If you're migrating from Shopify's App Bridge Toast API, this component is a drop-in replacement:

```tsx
// Before (App Bridge)
shopify.toast.show("Message sent");
shopify.toast.show("Product saved", { duration: 5000 });

// After (Storeware Polaris)
toast.show("Message sent");
toast.show("Product saved", { duration: 5000 });
```

The only difference is importing from `@storeware/polaris` instead of using the global `shopify` object.

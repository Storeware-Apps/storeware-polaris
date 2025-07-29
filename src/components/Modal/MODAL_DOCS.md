# Modal Component Documentation

## Overview

The Modal component provides 100% API compatibility with Shopify's App Bridge Modal component while being built on shadcn/ui Dialog foundation with Tailwind CSS. The Modal API allows you to display an overlay that prevents interaction with the rest of the app until dismissed.

## Installation

```bash
pnpm install @storeware/polaris
```

## Basic Usage

```tsx
import { Modal, TitleBar, Button } from "@storeware/polaris";
import { useState } from "react";

function MyComponent() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal
        id="my-modal"
        open={open}
        onOpenChange={setOpen}
        actions={
          <>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button variant="primary">Save</Button>
          </>
        }>
        <TitleBar title="My Modal Title" />
        <div className="p-6">
          <p>Modal content goes here</p>
        </div>
      </Modal>
    </>
  );
}
```

## Import Styles

Make sure to import the component styles in your application:

```tsx
import "@storeware/polaris/styles";
```

## Props

### Modal Props

#### Core Props

- **id** (required): `string`
  - A unique identifier for the Modal
  - Used for accessibility and programmatic control

- **children**: `ReactNode`
  - The content to display within a Modal
  - Can include TitleBar, content sections, and other components

- **open**: `boolean`
  - Controls whether the modal is open (controlled mode)
  - When `true`, the modal is visible; when `false`, it's hidden

#### Size and Appearance

- **variant**: `"small" | "base" | "large" | "max"`
  - The size of the modal
  - Default: `"base"`
  - `small`: Compact modal for simple confirmations
  - `base`: Standard modal size
  - `large`: Larger modal for more content
  - `max`: Maximum size modal for complex interfaces

- **className**: `string`
  - Additional CSS class name for custom styling
  - Applied to the modal content container

- **showCloseButton**: `boolean`
  - Whether to show the close button in the top-right corner
  - Default: `true`

- **actions**: `ReactNode`
  - Action buttons to display at the bottom of the modal
  - Displayed in a bordered section with right alignment
  - Typically contains Cancel and Save/Submit buttons

#### Event Handlers

- **onShow**: `() => void`
  - Callback when modal is showing
  - Compatible with App Bridge Modal API

- **onHide**: `() => void`
  - Callback when modal is hiding
  - Compatible with App Bridge Modal API

- **onOpenChange**: `(open: boolean) => void`
  - Standard React callback for open state changes
  - Called when the modal's open state changes

#### Advanced Props

- **src**: `string`
  - The URL of the content to display within a Modal
  - When provided, renders an iframe with the specified URL
  - Children (except TitleBar) are ignored when src is used

### TitleBar Props

#### Core Props

- **title**: `string`
  - The title of the title bar
  - Displayed as an h2 heading

- **children**: `ReactNode`
  - The children of the title bar (typically buttons)
  - Displayed on the right side of the title bar

- **className**: `string`
  - Additional CSS class name for custom styling

#### Styling Props

- **showBorder**: `boolean`
  - Whether to show a border at the bottom of the title bar
  - Default: `true`

**Note**: The TitleBar has a light gray background color (#e3e3e3) to provide visual separation from the modal content.

## Examples

### Basic Modal

```tsx
import { Modal, TitleBar, Button } from "@storeware/polaris";
import { useState } from "react";

function BasicModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal id="basic-modal" open={open} onOpenChange={setOpen}>
        <TitleBar title="Basic Modal" />
        <div className="p-6">
          <p>Hello, World!</p>
        </div>
      </Modal>
    </>
  );
}
```

### Modal with Actions

```tsx
import { Modal, TitleBar, Button } from "@storeware/polaris";
import { useState } from "react";

function ModalWithActions() {
  const [open, setOpen] = useState(false);

  const handleSave = () => {
    // Handle save logic
    setOpen(false);
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal id="actions-modal" open={open} onOpenChange={setOpen}>
        <TitleBar title="Edit Profile">
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
        </TitleBar>
        <div className="p-6">
          <p>Make changes to your profile here.</p>
        </div>
      </Modal>
    </>
  );
}
```

### Different Modal Sizes

```tsx
import { Modal, TitleBar, Button } from "@storeware/polaris";
import { useState } from "react";

function ModalSizes() {
  const [smallOpen, setSmallOpen] = useState(false);
  const [largeOpen, setLargeOpen] = useState(false);
  const [maxOpen, setMaxOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setSmallOpen(true)}>Small Modal</Button>
      <Button onClick={() => setLargeOpen(true)}>Large Modal</Button>
      <Button onClick={() => setMaxOpen(true)}>Max Modal</Button>

      <Modal
        id="small-modal"
        variant="small"
        open={smallOpen}
        onOpenChange={setSmallOpen}>
        <TitleBar title="Small Modal" />
        <div className="p-6">
          <p>This is a small modal.</p>
        </div>
      </Modal>

      <Modal
        id="large-modal"
        variant="large"
        open={largeOpen}
        onOpenChange={setLargeOpen}>
        <TitleBar title="Large Modal" />
        <div className="p-6">
          <p>This is a large modal with more space.</p>
        </div>
      </Modal>

      <Modal
        id="max-modal"
        variant="max"
        open={maxOpen}
        onOpenChange={setMaxOpen}>
        <TitleBar title="Max Modal" />
        <div className="p-6">
          <p>This is a maximum size modal.</p>
        </div>
      </Modal>
    </>
  );
}
```

## Best Practices

### Accessibility

- Always provide a meaningful `id` for each modal
- Use descriptive titles in the TitleBar component
- Ensure proper focus management by using the built-in Dialog behavior
- Test with screen readers to ensure proper accessibility

### Performance

- Use controlled mode with `open` and `onOpenChange` for better performance
- Avoid rendering heavy content inside modals that aren't open
- Consider lazy loading content for modals with complex interfaces

### User Experience

- Use appropriate modal sizes for the content
- Provide clear actions in the TitleBar
- Use critical tone for destructive actions
- Always provide a way to close the modal (close button or cancel action)

## Compatibility

This Modal component provides 100% API compatibility with Shopify's App Bridge Modal component, making it easy to migrate existing code or use familiar patterns from Shopify app development.

### App Bridge Equivalent

```tsx
// App Bridge Modal
import { Modal, TitleBar } from "@shopify/app-bridge-react";

// Storeware Polaris Modal (drop-in replacement)
import { Modal, TitleBar } from "@storeware/polaris";
```

## Related Components

- [Button](../Button/BUTTON_DOCS.md) - Used for actions in TitleBar
- [Card](../Card/CARD_DOCS.md) - Alternative container component
- [Popover](../Popover/POPOVER_DOCS.md) - For smaller overlays

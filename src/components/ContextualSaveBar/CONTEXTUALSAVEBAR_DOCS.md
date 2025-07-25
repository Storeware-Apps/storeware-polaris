# ContextualSaveBar Component Documentation

## Overview

The ContextualSaveBar component provides 100% API compatibility with Shopify's App Bridge SaveBar component while being built on shadcn/ui foundation with Tailwind CSS. The SaveBar API is used to indicate that a form on the current page has unsaved information and provides actions to save or discard those changes.

The save bar appears at the top of the application with a 50% width, centered horizontally, and includes an alert icon to draw attention to unsaved changes.

## Installation

```bash
pnpm install @storeware/polaris
```

## Basic Usage

### New Internalized Buttons API (Recommended)

```tsx
import { ContextualSaveBar } from "@storeware/polaris";
import { useState } from "react";

function MyComponent() {
  const [saveBarOpen, setSaveBarOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [discarding, setDiscarding] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    console.log("Saving");
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSaving(false);
    setSaveBarOpen(false);
  };

  const handleDiscard = async () => {
    setDiscarding(true);
    console.log("Discarding");
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    setDiscarding(false);
    setSaveBarOpen(false);
  };

  return (
    <>
      <button onClick={() => setSaveBarOpen(true)}>Show Save Bar</button>
      <ContextualSaveBar
        id="my-save-bar"
        open={saveBarOpen}
        onSave={handleSave}
        onDiscard={handleDiscard}
        saveLoading={saving}
        discardLoading={discarding}
        discardConfirmation={true}
      />
    </>
  );
}
```

### Legacy Children API (Still Supported)

```tsx
import { ContextualSaveBar, Button } from "@storeware/polaris";
import { useState } from "react";

function MyComponent() {
  const [saveBarOpen, setSaveBarOpen] = useState(false);

  const handleSave = () => {
    console.log("Saving");
    setSaveBarOpen(false);
  };

  const handleDiscard = () => {
    console.log("Discarding");
    setSaveBarOpen(false);
  };

  return (
    <>
      <button onClick={() => setSaveBarOpen(true)}>Show Save Bar</button>
      <ContextualSaveBar id="my-save-bar" open={saveBarOpen}>
        <Button onClick={handleSave}>Save</Button>
        <Button variant="primary" onClick={handleDiscard}>
          Discard
        </Button>
      </ContextualSaveBar>
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

### Core Props

- **id**: `string` (required)
  - A unique identifier for the save bar
  - Used for accessibility and programmatic control

- **open**: `boolean`
  - Controls whether the save bar is visible
  - Default: `false`
  - When `true`, the save bar slides up from the bottom
  - When `false`, the save bar slides down and is hidden

- **discardConfirmation**: `boolean`
  - Whether to show a confirmation dialog when the discard button is clicked
  - Default: `false`
  - When `true`, clicking the discard button shows a confirmation dialog
  - When `false`, the discard action executes immediately

- **className**: `string`
  - Additional CSS class name for custom styling
  - Applied to the save bar container

### Internalized Buttons API (New)

- **onSave**: `() => void`
  - Callback function when the save button is clicked
  - When provided, the save button is rendered internally

- **onDiscard**: `() => void`
  - Callback function when the discard button is clicked
  - When provided, the discard button is rendered internally

- **saveText**: `string`
  - Text for the save button
  - Default: `"Save"`

- **discardText**: `string`
  - Text for the discard button
  - Default: `"Discard"`

- **saveLoading**: `boolean`
  - Whether the save button is in a loading state
  - Default: `false`
  - Shows a spinner and disables the button when `true`

- **discardLoading**: `boolean`
  - Whether the discard button is in a loading state
  - Default: `false`
  - Shows a spinner and disables the button when `true`

### Legacy Children API (Still Supported)

- **children**: `ReactNode`
  - HTML button elements to hook into the Save and Discard buttons
  - The button with `variant="primary"` becomes the Discard button
  - The button without a variant becomes the Save button
  - Only used when `onSave` and `onDiscard` are not provided

## Button Identification

The ContextualSaveBar automatically identifies Save and Discard buttons based on their `variant` prop:

- **Save Button**: Any button without a variant or with a variant other than "primary" (default styling)
- **Discard Button**: Any button with `variant="primary"` (primary styling for destructive action)

```tsx
<ContextualSaveBar id="my-save-bar" open>
  <Button onClick={handleSave}>Save</Button> {/* Save button */}
  <Button variant="primary" onClick={handleDiscard}>
    Discard
  </Button>{" "}
  {/* Discard button */}
</ContextualSaveBar>
```

## Button States

Buttons within the SaveBar support all standard states:

### Loading State

```tsx
<ContextualSaveBar id="my-save-bar" open>
  <button variant="primary" loading onClick={handleSave}>
    Save
  </button>
  <button loading onClick={handleDiscard}>
    Discard
  </button>
</ContextualSaveBar>
```

### Disabled State

```tsx
<ContextualSaveBar id="my-save-bar" open>
  <button variant="primary" disabled onClick={handleSave}>
    Save
  </button>
  <button disabled onClick={handleDiscard}>
    Discard
  </button>
</ContextualSaveBar>
```

## Discard Confirmation

When `discardConfirmation` is enabled, clicking any discard button will show a confirmation dialog:

```tsx
<ContextualSaveBar id="my-save-bar" open discardConfirmation>
  <button variant="primary" onClick={handleSave}>
    Save
  </button>
  <button onClick={handleDiscard}>Discard</button>
</ContextualSaveBar>
```

The confirmation dialog includes:

- A clear title: "Discard changes"
- A descriptive message explaining the action
- A "Cancel" button to abort the action
- A "Discard changes" button to confirm the action

## Form Integration

The SaveBar works excellently with forms to automatically show when there are unsaved changes:

```tsx
import { ContextualSaveBar } from "@storeware/polaris";
import { useState, useEffect } from "react";

function FormWithSaveBar() {
  const [formData, setFormData] = useState({ title: "", description: "" });
  const [originalData, setOriginalData] = useState({
    title: "",
    description: "",
  });
  const [saveBarOpen, setSaveBarOpen] = useState(false);

  // Show save bar when form data changes
  useEffect(() => {
    const hasChanges =
      JSON.stringify(formData) !== JSON.stringify(originalData);
    setSaveBarOpen(hasChanges);
  }, [formData, originalData]);

  const handleSave = () => {
    // Save the form data
    setOriginalData({ ...formData });
    setSaveBarOpen(false);
  };

  const handleDiscard = () => {
    // Revert to original data
    setFormData({ ...originalData });
    setSaveBarOpen(false);
  };

  return (
    <>
      <form>
        <input
          value={formData.title}
          onChange={e => setFormData({ ...formData, title: e.target.value })}
        />
        <textarea
          value={formData.description}
          onChange={e =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
      </form>

      <ContextualSaveBar
        id="form-save-bar"
        open={saveBarOpen}
        discardConfirmation>
        <button variant="primary" onClick={handleSave}>
          Save
        </button>
        <button onClick={handleDiscard}>Discard</button>
      </ContextualSaveBar>
    </>
  );
}
```

## Styling

The ContextualSaveBar uses a dark theme with the following characteristics:

- **Position**: Fixed at the bottom of the viewport
- **Background**: Dark gray (`bg-gray-800`)
- **Text**: White text for contrast
- **Animation**: Smooth slide up/down transition
- **Shadow**: Elevated appearance with shadow
- **Border**: Subtle top border for definition

### Custom Styling

You can customize the appearance using the `className` prop:

```tsx
<ContextualSaveBar
  id="my-save-bar"
  open
  className="bg-blue-900 border-blue-700">
  <button variant="primary">Save</button>
  <button>Discard</button>
</ContextualSaveBar>
```

## Accessibility

The ContextualSaveBar includes several accessibility features:

- **Unique ID**: Each save bar has a unique identifier
- **Keyboard Navigation**: All buttons are keyboard accessible
- **Screen Reader Support**: Proper ARIA labels and descriptions
- **Focus Management**: Focus is properly managed in confirmation dialogs

## App Bridge Compatibility

This component provides 100% API compatibility with Shopify's App Bridge SaveBar component:

```tsx
// App Bridge SaveBar
import { SaveBar } from "@shopify/app-bridge-react";

// Storeware Polaris ContextualSaveBar (drop-in replacement)
import { ContextualSaveBar } from "@storeware/polaris";
```

## Related Components

- [Button](../Button/BUTTON_DOCS.md) - Used for Save and Discard actions
- [Modal](../Modal/MODAL_DOCS.md) - For confirmation dialogs
- [Form](../Form/FORM_DOCS.md) - For form integration

## Best Practices

1. **Always provide an ID**: Each SaveBar should have a unique identifier
2. **Use appropriate button variants**: Primary for save, default for discard
3. **Enable confirmation for destructive actions**: Use `discardConfirmation` when discarding could lose important data
4. **Integrate with form state**: Show the SaveBar automatically when forms have unsaved changes
5. **Handle loading states**: Show loading indicators during save/discard operations
6. **Provide clear feedback**: Use console logs or notifications to confirm actions

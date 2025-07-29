# Popover Component Documentation

## Overview

The Popover component provides 100% API compatibility with Shopify's Polaris Popover component while being built on shadcn/ui foundation with Tailwind CSS. Popovers are small overlays that open on demand. They let merchants access additional content and actions without cluttering the page.

## Installation

```bash
pnpm install @storeware/polaris
```

## Basic Usage

```tsx
import { Popover, Button } from "@storeware/polaris";
import { useState, useCallback } from "react";

function MyComponent() {
  const [popoverActive, setPopoverActive] = useState(false);

  const togglePopoverActive = useCallback(
    () => setPopoverActive((popoverActive) => !popoverActive),
    [],
  );

  const activator = (
    <Button onClick={togglePopoverActive} disclosure>
      More actions
    </Button>
  );

  return (
    <Popover
      active={popoverActive}
      activator={activator}
      autofocusTarget="first-node"
      onClose={togglePopoverActive}
    >
      <div>Popover content goes here</div>
    </Popover>
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

- **`active`** (boolean, required): Show or hide the Popover
- **`activator`** (React.ReactElement, required): The element to activate the Popover
- **`onClose`** (function, required): Callback when popover is closed

### Positioning Props

- **`preferredPosition`** ("above" | "below" | "mostSpace" | "cover"): The preferred direction to open the popover
- **`preferredAlignment`** ("left" | "center" | "right"): The preferred alignment of the popover relative to its activator

### Layout Props

- **`sectioned`** (boolean): Automatically add wrap content in a section
- **`fullWidth`** (boolean): Allow popover to stretch to the full width of its activator
- **`fullHeight`** (boolean): Allow popover to stretch to fit content vertically
- **`fluidContent`** (boolean): Allow popover content to determine the overlay width and height

### Advanced Props

- **`preferInputActivator`** (boolean): Use the activator's input element to calculate the Popover position
- **`activatorWrapper`** (string): The element type to wrap the activator with
- **`zIndexOverride`** (number): Override on the default z-index of 400
- **`preventFocusOnClose`** (boolean): Prevents focusing the activator or the next focusable element when the popover is deactivated
- **`fixed`** (boolean): Remains in a fixed position
- **`ariaHaspopup`** (boolean | string): Used to illustrate the type of popover element
- **`hideOnPrint`** (boolean): Allow the popover overlay to be hidden when printing
- **`autofocusTarget`** ("none" | "first-node" | "container"): The preferred auto focus target
- **`preventCloseOnChildOverlayClick`** (boolean): Prevents closing the popover when other overlays are clicked
- **`captureOverscroll`** (boolean): Prevents page scrolling when the end of the scrollable Popover overlay content is reached

## Examples

### With Action List

```tsx
import { Popover, Button, ActionList } from "@storeware/polaris";

function PopoverWithActionList() {
  const [popoverActive, setPopoverActive] = useState(false);

  const togglePopoverActive = useCallback(
    () => setPopoverActive((popoverActive) => !popoverActive),
    [],
  );

  const activator = (
    <Button onClick={togglePopoverActive} disclosure>
      More actions
    </Button>
  );

  return (
    <Popover
      active={popoverActive}
      activator={activator}
      autofocusTarget="first-node"
      onClose={togglePopoverActive}
    >
      <ActionList
        actionRole="menuitem"
        items={[{content: 'Import'}, {content: 'Export'}]}
      />
    </Popover>
  );
}
```

### With Custom Content

```tsx
import { Popover, Button, Text } from "@storeware/polaris";

function PopoverWithContent() {
  const [popoverActive, setPopoverActive] = useState(false);

  const togglePopoverActive = useCallback(
    () => setPopoverActive((popoverActive) => !popoverActive),
    [],
  );

  const activator = (
    <Button onClick={togglePopoverActive}>
      Show details
    </Button>
  );

  return (
    <Popover
      active={popoverActive}
      activator={activator}
      onClose={togglePopoverActive}
      sectioned
    >
      <Text as="h3" variant="headingMd">
        Product details
      </Text>
      <Text variant="bodyMd">
        This product has been updated recently.
      </Text>
    </Popover>
  );
}
```

### Positioned Above

```tsx
<Popover
  active={popoverActive}
  activator={activator}
  onClose={togglePopoverActive}
  preferredPosition="above"
  preferredAlignment="left"
>
  <div>Content positioned above the activator</div>
</Popover>
```

## Best Practices

Popovers should:

- Always be positioned next to the button or other interface element that triggers them
- Be used for secondary or less important information and actions since they're hidden until merchants hit the trigger
- Contain navigation or actions that share a relationships to each other
- Be triggered by a clearly labeled button
- Use a default or tertiary button as the activator

## Content Guidelines

### Popover Content

If a popover contains actions, they should:

- Be clear and predictable: merchants should be able to anticipate what will happen when they click on an action item
- Be action-led: buttons should always lead with a strong verb that encourages action
- Be scannable, especially when the popover contains a list of actions or options

## Accessibility

- When a popover opens, focus moves to the first focusable element or to the popover container
- Merchants can dismiss the popover by tabbing out of it, pressing the esc key, or clicking outside of it
- When the popover is closed, focus returns to the element that launched it
- Use `autofocusTarget="first-node"` to assist screen readers with sending focus to action lists

## Compatibility

This component maintains 100% API compatibility with Shopify's Polaris Popover component, making it a drop-in replacement for existing Polaris applications.

import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Modal } from "./modal";
import { TitleBar } from "./titleBar";
import { Button } from "../Button/button";
import { Box } from "../Box/box";
import { Text } from "../Text/Text";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
# Modal Component Documentation

## Overview

The Modal component provides 100% API compatibility with Shopify's App Bridge Modal component while being built on shadcn/ui Dialog foundation with Tailwind CSS. The Modal API allows you to display an overlay that prevents interaction with the rest of the app until dismissed.

## Features

- **100% App Bridge Compatible**: Perfect API and visual compatibility with Shopify's App Bridge Modal component
- **shadcn/ui Foundation**: Built on proven shadcn/ui Dialog patterns for reliability and customization
- **TypeScript First**: Full type safety with excellent IntelliSense support
- **Tailwind CSS**: Highly customizable styling system
- **Modern React**: Uses latest React patterns and best practices

## Variants

The Modal component supports different size variants:

- **small**: Compact modal for simple confirmations
- **base**: Standard modal size (default)
- **large**: Larger modal for more content
- **max**: Maximum size modal for complex interfaces

## Usage with TitleBar

The Modal component works seamlessly with the TitleBar component to provide a complete modal experience:

\`\`\`tsx
import { Modal, TitleBar, Button } from "@storeware/polaris";

function MyModal() {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal id="my-modal" open={open} onOpenChange={setOpen}>
        <TitleBar title="My Modal Title">
          <Button variant="primary">Save</Button>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
        </TitleBar>
        <div className="p-6">
          <p>Modal content goes here</p>
        </div>
      </Modal>
    </>
  );
}
\`\`\`

## Props

### Modal Props

- **id**: string - A unique identifier for the Modal
- **children**: ReactNode - The content to display within a Modal
- **src**: string (optional) - The URL of the content to display within a Modal
- **variant**: "small" | "base" | "large" | "max" - The size of the modal
- **open**: boolean - Controls whether the modal is open (controlled mode)
- **onShow**: () => void - Callback when modal is showing
- **onHide**: () => void - Callback when modal is hiding
- **onOpenChange**: (open: boolean) => void - Standard React callback for open state changes
- **className**: string - Additional CSS class name

### TitleBar Props

- **title**: string - The title of the title bar
- **children**: ReactNode - The children of the title bar (typically buttons)
- **className**: string - Additional CSS class name
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["small", "base", "large", "max"],
    },
    open: {
      control: { type: "boolean" },
    },
    showCloseButton: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

// Basic Modal Example
export const Basic: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal id="basic-modal" open={open} onOpenChange={setOpen}>
          <TitleBar title="My Modal" />
          <div className="p-6">
            <p>Hello, World!</p>
          </div>
        </Modal>
      </>
    );
  },
};

// Modal with Actions
export const WithActions: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal
          id="actions-modal"
          variant="base"
          open={open}
          onOpenChange={setOpen}
          actions={
            <>
              <Button onClick={() => setOpen(false)}>Cancel</Button>
              <Button
                variant="primary"
                onClick={() => {
                  // Handle save action
                  setOpen(false);
                }}>
                Save
              </Button>
            </>
          }>
          <TitleBar title="My Modal" />

          <Box padding="400">
            <Text as="p">
              This modal demonstrates the new actions prop that displays buttons
              at the bottom of the modal with a border separator.
            </Text>
          </Box>
        </Modal>
      </>
    );
  },
};

// Small Modal
export const SmallModal: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Small Modal</Button>
        <Modal
          id="small-modal"
          variant="small"
          open={open}
          onOpenChange={setOpen}>
          <TitleBar title="Small Modal">
            <Button variant="primary">Primary action</Button>
            <Button>Secondary action</Button>
          </TitleBar>
          <Box padding="400">
            <Text as="p">
              This modal demonstrates the new actions prop that displays buttons
              at the bottom of the modal with a border separator.
            </Text>
          </Box>
        </Modal>
      </>
    );
  },
};

// Large Modal
export const LargeModal: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Large Modal</Button>
        <Modal
          id="large-modal"
          variant="large"
          open={open}
          onOpenChange={setOpen}>
          <TitleBar title="Large Modal">
            <Button variant="primary">Primary action</Button>
            <Button>Secondary action</Button>
          </TitleBar>
          <Box padding="400">
            <Text as="p">
              This modal demonstrates the new actions prop that displays buttons
              at the bottom of the modal with a border separator.
            </Text>
          </Box>
        </Modal>
      </>
    );
  },
};

// Max Modal
export const MaxModal: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Max Modal</Button>
        <Modal id="max-modal" variant="max" open={open} onOpenChange={setOpen}>
          <TitleBar title="Max Modal">
            <Button variant="primary">Primary action</Button>
            <Button>Secondary action</Button>
          </TitleBar>
          <div className="p-6">
            <p>
              This is a maximum size modal that takes up most of the viewport.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
                Content Area 1
              </div>
              <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
                Content Area 2
              </div>
              <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
                Content Area 3
              </div>
              <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
                Content Area 4
              </div>
            </div>
          </div>
        </Modal>
      </>
    );
  },
};

// Critical Action Modal
export const CriticalAction: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Delete Resource</Button>
        <Modal
          id="critical-modal"
          open={open}
          onOpenChange={setOpen}
          actions={
            <>
              <Button onClick={() => setOpen(false)}>Cancel</Button>
              <Button
                variant="primary"
                tone="critical"
                onClick={() => {
                  // Handle delete action
                  setOpen(false);
                }}>
                Delete
              </Button>
            </>
          }>
          <TitleBar title="Delete this resource" />
          <div className="p-6">
            <p>If you delete this resource, it cannot be undone.</p>
          </div>
        </Modal>
      </>
    );
  },
};

// Modal with Events
export const WithEvents: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const [eventLog, setEventLog] = useState<string[]>([]);

    const addEvent = (event: string) => {
      setEventLog(prev => [
        ...prev,
        `${new Date().toLocaleTimeString()}: ${event}`,
      ]);
    };

    return (
      <>
        <div className="space-y-4">
          <Button onClick={() => setOpen(true)}>Open Modal</Button>

          {eventLog.length > 0 && (
            <div className="p-4 bg-gray-50 rounded">
              <h4 className="font-semibold mb-2">Event Log:</h4>
              <ul className="text-sm space-y-1">
                {eventLog.map((event, index) => (
                  <li key={index}>{event}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <Modal
          id="events-modal"
          open={open}
          onOpenChange={setOpen}
          onShow={() => addEvent("Modal is showing")}
          onHide={() => addEvent("Modal is hiding")}>
          <TitleBar title="Modal Events">
            <Button onClick={() => setOpen(false)}>Close</Button>
          </TitleBar>
          <div className="p-6">
            <p>
              This modal demonstrates the onShow and onHide event callbacks.
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Check the event log above to see when events are triggered.
            </p>
          </div>
        </Modal>
      </>
    );
  },
};

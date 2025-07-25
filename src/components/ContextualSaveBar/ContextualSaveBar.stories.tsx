import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { ContextualSaveBar } from "./contextualSaveBar";
import { Button } from "../Button/button";
import { Box } from "../Box/box";
import { Text } from "../Text/Text";

const meta: Meta<typeof ContextualSaveBar> = {
  title: "Components/ContextualSaveBar",
  component: ContextualSaveBar,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
# ContextualSaveBar Component Documentation

## Overview

The ContextualSaveBar component provides 100% API compatibility with Shopify's App Bridge SaveBar component while being built on shadcn/ui foundation with Tailwind CSS. The SaveBar API is used to indicate that a form on the current page has unsaved information.

## Features

- **100% App Bridge Compatible**: Perfect API and visual compatibility with Shopify's App Bridge SaveBar component
- **shadcn/ui Foundation**: Built on proven shadcn/ui patterns for reliability and customization
- **TypeScript First**: Full type safety with excellent IntelliSense support
- **Tailwind CSS**: Highly customizable styling system
- **Modern React**: Uses latest React patterns and best practices

## Usage

The SaveBar component can be controlled declaratively and appears as a sticky bar at the bottom of the page when there are unsaved changes.

\`\`\`tsx
import { ContextualSaveBar, Button } from "@storeware/polaris";

function MyApp() {
  const [saveBarOpen, setSaveBarOpen] = useState(false);

  const handleSave = () => {
    console.log('Saving');
    setSaveBarOpen(false);
  };

  const handleDiscard = () => {
    console.log('Discarding');
    setSaveBarOpen(false);
  };

  return (
    <>
      <button onClick={() => setSaveBarOpen(true)}>
        Show Save Bar
      </button>
      <ContextualSaveBar id="my-save-bar" open={saveBarOpen}>
        <button variant="primary" onClick={handleSave}>Save</button>
        <button onClick={handleDiscard}>Discard</button>
      </ContextualSaveBar>
    </>
  );
}
\`\`\`

## Button Identification

- The button with \`variant="primary"\` becomes the Save button
- The button without a variant becomes the Discard button
- Buttons can have loading and disabled states

## Discard Confirmation

When \`discardConfirmation\` is enabled, clicking the discard button will show a confirmation dialog before executing the discard action.

## App Bridge Equivalent

\`\`\`tsx
// App Bridge SaveBar
import { SaveBar } from "@shopify/app-bridge-react";

// Storeware Polaris ContextualSaveBar (drop-in replacement)
import { ContextualSaveBar } from "@storeware/polaris";
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    id: {
      control: "text",
      description: "A unique identifier for the save bar",
    },
    open: {
      control: "boolean",
      description: "Controls whether the save bar is visible",
    },
    discardConfirmation: {
      control: "boolean",
      description:
        "Whether to show a confirmation dialog when the discard button is clicked",
    },
    children: {
      control: false,
      description:
        "HTML button elements to hook into the Save and Discard buttons",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ContextualSaveBar>;

// Basic SaveBar Example
export const Basic: Story = {
  render: () => {
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
      <div className="min-h-screen bg-gray-50 p-6">
        <Box padding="400">
          <Text as="h1" variant="headingLg">
            SaveBar Example
          </Text>
          <Text as="p" variant="bodyMd" tone="subdued">
            Click the button below to show the save bar at the bottom of the
            page.
          </Text>
          <div className="mt-4">
            <Button onClick={() => setSaveBarOpen(true)}>Show Save Bar</Button>
          </div>
        </Box>

        <ContextualSaveBar id="basic-save-bar" open={saveBarOpen}>
          <Button variant="primary" onClick={handleDiscard}>
            Discard
          </Button>
          <Button onClick={handleSave}>Save</Button>
        </ContextualSaveBar>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Basic SaveBar that appears at the bottom of the page with Save and Discard buttons.",
      },
    },
  },
};

// SaveBar with Loading States
export const WithLoadingStates: Story = {
  render: () => {
    const [saveBarOpen, setSaveBarOpen] = useState(false);
    const [saving, setSaving] = useState(false);
    const [discarding, setDiscarding] = useState(false);

    const handleSave = async () => {
      setSaving(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSaving(false);
      setSaveBarOpen(false);
    };

    const handleDiscard = async () => {
      setDiscarding(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setDiscarding(false);
      setSaveBarOpen(false);
    };

    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <Box padding="400">
          <Text as="h1" variant="headingLg">
            SaveBar with Loading States
          </Text>
          <Text as="p" variant="bodyMd" tone="subdued">
            This example shows loading states on the Save and Discard buttons.
          </Text>
          <div className="mt-4">
            <Button onClick={() => setSaveBarOpen(true)}>Show Save Bar</Button>
          </div>
        </Box>

        <ContextualSaveBar id="loading-save-bar" open={saveBarOpen}>
          <Button loading={saving} onClick={handleSave}>
            Save
          </Button>
          <Button
            variant="primary"
            loading={discarding}
            onClick={handleDiscard}>
            Discard
          </Button>
        </ContextualSaveBar>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "SaveBar with loading states on both Save and Discard buttons to show progress during async operations.",
      },
    },
  },
};

// SaveBar with Discard Confirmation
export const WithDiscardConfirmation: Story = {
  render: () => {
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
      <div className="min-h-screen bg-gray-50 p-6">
        <Box padding="400">
          <Text as="h1" variant="headingLg">
            SaveBar with Discard Confirmation
          </Text>
          <Text as="p" variant="bodyMd" tone="subdued">
            This example shows a confirmation dialog when the discard button is
            clicked.
          </Text>
          <div className="mt-4">
            <Button onClick={() => setSaveBarOpen(true)}>Show Save Bar</Button>
          </div>
        </Box>

        <ContextualSaveBar
          id="confirmation-save-bar"
          open={saveBarOpen}
          discardConfirmation>
          <Button onClick={handleSave}>Save</Button>
          <Button variant="primary" onClick={handleDiscard}>
            Discard
          </Button>
        </ContextualSaveBar>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "SaveBar with discard confirmation enabled. Clicking the discard button will show a confirmation dialog.",
      },
    },
  },
};

// SaveBar Controls Example
export const SaveBarControls: Story = {
  render: () => {
    const [saveBarOpen, setSaveBarOpen] = useState(false);

    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <Box padding="400">
          <Text as="h1" variant="headingLg">
            SaveBar Controls
          </Text>
          <Text as="p" variant="bodyMd" tone="subdued">
            This example shows how to control the SaveBar visibility
            programmatically.
          </Text>
          <div className="mt-4 flex gap-3">
            <Button onClick={() => setSaveBarOpen(true)}>Show Save Bar</Button>
            <Button onClick={() => setSaveBarOpen(false)}>Hide Save Bar</Button>
          </div>
        </Box>

        <ContextualSaveBar id="controls-save-bar" open={saveBarOpen}>
          {/* Empty SaveBar for demonstration */}
        </ContextualSaveBar>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Example showing how to control SaveBar visibility with external buttons.",
      },
    },
  },
};

// Complete Form Example
export const CompleteFormExample: Story = {
  render: () => {
    const [saveBarOpen, setSaveBarOpen] = useState(false);
    const [formData, setFormData] = useState({
      title: "",
      description: "",
    });
    const [originalData, setOriginalData] = useState({
      title: "",
      description: "",
    });

    const hasChanges =
      JSON.stringify(formData) !== JSON.stringify(originalData);

    React.useEffect(() => {
      setSaveBarOpen(hasChanges);
    }, [hasChanges]);

    const handleSave = () => {
      console.log("Saving form data:", formData);
      setOriginalData({ ...formData });
      setSaveBarOpen(false);
    };

    const handleDiscard = () => {
      console.log("Discarding changes");
      setFormData({ ...originalData });
      setSaveBarOpen(false);
    };

    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <Box padding="400">
          <Text as="h1" variant="headingLg">
            Complete Form Example
          </Text>
          <Text as="p" variant="bodyMd" tone="subdued">
            This example shows the SaveBar appearing automatically when form
            data changes.
          </Text>

          <div className="mt-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Title
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={e =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter title..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={e =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
                placeholder="Enter description..."
              />
            </div>
          </div>
        </Box>

        <ContextualSaveBar
          id="form-save-bar"
          open={saveBarOpen}
          discardConfirmation>
          <Button onClick={handleSave}>Save</Button>
          <Button variant="primary" onClick={handleDiscard}>
            Discard
          </Button>
        </ContextualSaveBar>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Complete example showing SaveBar integration with a form that automatically shows when there are unsaved changes.",
      },
    },
  },
};

// SaveBar with Disabled States
export const WithDisabledStates: Story = {
  render: () => {
    const [saveBarOpen, setSaveBarOpen] = useState(false);

    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <Box padding="400">
          <Text as="h1" variant="headingLg">
            SaveBar with Disabled States
          </Text>
          <Text as="p" variant="bodyMd" tone="subdued">
            This example shows disabled states on the buttons.
          </Text>
          <div className="mt-4">
            <Button onClick={() => setSaveBarOpen(true)}>Show Save Bar</Button>
          </div>
        </Box>

        <ContextualSaveBar id="disabled-save-bar" open={saveBarOpen}>
          <Button disabled>Save</Button>
          <Button
            variant="primary"
            disabled
            onClick={() => setSaveBarOpen(false)}>
            Discard
          </Button>
        </ContextualSaveBar>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "SaveBar with disabled buttons to prevent user interaction when actions are not available.",
      },
    },
  },
};

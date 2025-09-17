import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Tabs } from "./tabs";
import { Card } from "../Card/card";

const meta = {
  title: "Navigation/Tabs",
  component: Tabs,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    tabs: {
      description: "The items that map to each Tab",
      control: { type: "object" },
    },
    selected: {
      description: "The index of the currently selected Tab",
      control: { type: "number" },
    },
    disabled: {
      description: "Whether the Tabs are disabled or not",
      control: { type: "boolean" },
    },
    fitted: {
      description: "Fit tabs to container",
      control: { type: "boolean" },
    },
    onSelect: { action: "tab-selected" },
  },
  args: {
    onSelect: fn(),
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default example
export const Default: Story = {
  args: {
    tabs: [
      {
        id: "all-customers-1",
        content: "All",
        accessibilityLabel: "All customers",
        panelID: "all-customers-content-1",
      },
      {
        id: "accepts-marketing-1",
        content: "Accepts marketing",
        panelID: "accepts-marketing-content-1",
      },
      {
        id: "repeat-customers-1",
        content: "Repeat customers",
        panelID: "repeat-customers-content-1",
      },
      {
        id: "prospects-1",
        content: "Prospects",
        panelID: "prospects-content-1",
      },
    ],
    selected: 0,
    children: (
      <Card>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Tab Content</h3>
          <p>This is the tab content area.</p>
        </div>
      </Card>
    ),
  },
};

export const Fitted: Story = {
  args: {
    tabs: [
      {
        id: "all-customers-fitted",
        content: "All",
        accessibilityLabel: "All customers",
        panelID: "all-customers-fitted-content",
      },
      {
        id: "accepts-marketing-fitted",
        content: "Accepts marketing",
        panelID: "accepts-marketing-fitted-content",
      },
    ],
    selected: 0,
    fitted: true,
    children: (
      <Card>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Fitted Tabs</h3>
          <p>These tabs are fitted to the container width.</p>
        </div>
      </Card>
    ),
  },
};

export const WithBadges: Story = {
  args: {
    tabs: [
      {
        id: "all-customers-badges",
        content: "All",
        badge: "10+",
        accessibilityLabel: "All customers",
        panelID: "all-customers-badges-content",
      },
      {
        id: "accepts-marketing-badges",
        content: "Accepts marketing",
        badge: "4",
        panelID: "accepts-marketing-badges-content",
      },
    ],
    selected: 0,
    fitted: true,
    children: (
      <Card>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Tabs with Badges</h3>
          <p>These tabs show badge counts.</p>
        </div>
      </Card>
    ),
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import { InlineStack } from "./inlineStack";
import DOCS from "./INLINESTACK_DOCS.md?raw";

const meta: Meta<typeof InlineStack> = {
  title: "Layout and structure/InlineStack",
  component: InlineStack,
  parameters: {
    docs: {
      description: {
        component: DOCS,
      },
    },
  },
  argTypes: {
    children: {
      control: false,
      description: "Content to display inside the inline stack",
    },
    as: {
      control: { type: "select" },
      options: ["div", "span", "li", "ol", "ul"],
      description: "HTML Element type",
    },
    align: {
      control: { type: "select" },
      options: [
        "start",
        "center",
        "end",
        "space-around",
        "space-between",
        "space-evenly",
      ],
      description: "Horizontal alignment of children",
    },
    direction: {
      control: { type: "select" },
      options: ["row", "row-reverse"],
      description: "Horizontal direction in which children are laid out",
    },
    blockAlign: {
      control: { type: "select" },
      options: ["start", "center", "end", "baseline", "stretch"],
      description: "Vertical alignment of children",
    },
    gap: {
      control: { type: "select" },
      options: [
        "0",
        "025",
        "050",
        "100",
        "150",
        "200",
        "300",
        "400",
        "500",
        "600",
        "800",
        "1000",
        "1200",
        "1600",
        "2000",
        "2400",
        "2800",
        "3200",
      ],
      description: "The spacing between elements",
    },
    wrap: {
      control: { type: "boolean" },
      description:
        "Wrap stack elements to additional rows as needed on small screens",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Placeholder component for visual examples
const Placeholder = ({
  width = "auto",
  height = "auto",
  showBorder = false,
  children,
}: {
  width?: string;
  height?: string;
  showBorder?: boolean;
  children?: React.ReactNode;
}) => {
  return (
    <div
      style={{
        background: "var(--p-color-text-info, #0066cc)",
        height: height,
        width: width,
        borderInlineStart: showBorder
          ? "1px dashed var(--p-color-bg-surface-success, #4caf50)"
          : "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontSize: "12px",
        fontWeight: "500",
        borderRadius: "4px",
      }}>
      {children}
    </div>
  );
};

export const Default: Story = {
  args: {
    gap: "400",
  },
  render: args => (
    <InlineStack {...args}>
      <Placeholder width="80px" height="40px">
        Item 1
      </Placeholder>
      <Placeholder width="80px" height="40px">
        Item 2
      </Placeholder>
      <Placeholder width="80px" height="40px">
        Item 3
      </Placeholder>
    </InlineStack>
  ),
};

export const NonWrapping: Story = {
  name: "Non-wrapping",
  args: {
    wrap: false,
  },
  render: args => (
    <InlineStack {...args}>
      <Placeholder width="106px" height="36px">
        Item 1
      </Placeholder>
      <Placeholder width="106px" height="20px" showBorder>
        Item 2
      </Placeholder>
      <Placeholder width="106px" height="20px" showBorder>
        Item 3
      </Placeholder>
      <Placeholder width="106px" height="20px" showBorder>
        Item 4
      </Placeholder>
      <Placeholder width="106px" height="20px" showBorder>
        Item 5
      </Placeholder>
      <Placeholder width="106px" height="20px" showBorder>
        Item 6
      </Placeholder>
    </InlineStack>
  ),
};

export const Gap: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <h3
          style={{ marginBottom: "1rem", fontSize: "14px", fontWeight: "600" }}>
          No gap
        </h3>
        <InlineStack gap="0">
          <Placeholder width="60px" height="40px">
            1
          </Placeholder>
          <Placeholder width="60px" height="40px">
            2
          </Placeholder>
          <Placeholder width="60px" height="40px">
            3
          </Placeholder>
        </InlineStack>
      </div>

      <div>
        <h3
          style={{ marginBottom: "1rem", fontSize: "14px", fontWeight: "600" }}>
          Small gap (200)
        </h3>
        <InlineStack gap="200">
          <Placeholder width="60px" height="40px">
            1
          </Placeholder>
          <Placeholder width="60px" height="40px">
            2
          </Placeholder>
          <Placeholder width="60px" height="40px">
            3
          </Placeholder>
        </InlineStack>
      </div>

      <div>
        <h3
          style={{ marginBottom: "1rem", fontSize: "14px", fontWeight: "600" }}>
          Medium gap (400)
        </h3>
        <InlineStack gap="400">
          <Placeholder width="60px" height="40px">
            1
          </Placeholder>
          <Placeholder width="60px" height="40px">
            2
          </Placeholder>
          <Placeholder width="60px" height="40px">
            3
          </Placeholder>
        </InlineStack>
      </div>

      <div>
        <h3
          style={{ marginBottom: "1rem", fontSize: "14px", fontWeight: "600" }}>
          Large gap (800)
        </h3>
        <InlineStack gap="800">
          <Placeholder width="60px" height="40px">
            1
          </Placeholder>
          <Placeholder width="60px" height="40px">
            2
          </Placeholder>
          <Placeholder width="60px" height="40px">
            3
          </Placeholder>
        </InlineStack>
      </div>
    </div>
  ),
};

export const BlockAlign: Story = {
  name: "Block align (Vertical alignment)",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <h3
          style={{ marginBottom: "1rem", fontSize: "14px", fontWeight: "600" }}>
          Start (default)
        </h3>
        <InlineStack blockAlign="start" gap="400">
          <Placeholder width="60px" height="60px">
            Tall
          </Placeholder>
          <Placeholder width="60px" height="30px">
            Short
          </Placeholder>
          <Placeholder width="60px" height="45px">
            Medium
          </Placeholder>
        </InlineStack>
      </div>

      <div>
        <h3
          style={{ marginBottom: "1rem", fontSize: "14px", fontWeight: "600" }}>
          Center
        </h3>
        <InlineStack blockAlign="center" gap="400">
          <Placeholder width="60px" height="60px">
            Tall
          </Placeholder>
          <Placeholder width="60px" height="30px">
            Short
          </Placeholder>
          <Placeholder width="60px" height="45px">
            Medium
          </Placeholder>
        </InlineStack>
      </div>

      <div>
        <h3
          style={{ marginBottom: "1rem", fontSize: "14px", fontWeight: "600" }}>
          End
        </h3>
        <InlineStack blockAlign="end" gap="400">
          <Placeholder width="60px" height="60px">
            Tall
          </Placeholder>
          <Placeholder width="60px" height="30px">
            Short
          </Placeholder>
          <Placeholder width="60px" height="45px">
            Medium
          </Placeholder>
        </InlineStack>
      </div>

      <div>
        <h3
          style={{ marginBottom: "1rem", fontSize: "14px", fontWeight: "600" }}>
          Stretch
        </h3>
        <InlineStack blockAlign="stretch" gap="400">
          <Placeholder width="60px" height="60px">
            Tall
          </Placeholder>
          <Placeholder width="60px" height="30px">
            Short
          </Placeholder>
          <Placeholder width="60px" height="45px">
            Medium
          </Placeholder>
        </InlineStack>
      </div>
    </div>
  ),
};

export const Align: Story = {
  name: "Align (Horizontal alignment)",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <h3
          style={{ marginBottom: "1rem", fontSize: "14px", fontWeight: "600" }}>
          Start (default)
        </h3>
        <div style={{ border: "1px dashed #ccc", padding: "1rem" }}>
          <InlineStack align="start" gap="400">
            <Placeholder width="60px" height="40px">
              1
            </Placeholder>
            <Placeholder width="60px" height="40px">
              2
            </Placeholder>
            <Placeholder width="60px" height="40px">
              3
            </Placeholder>
          </InlineStack>
        </div>
      </div>

      <div>
        <h3
          style={{ marginBottom: "1rem", fontSize: "14px", fontWeight: "600" }}>
          Center
        </h3>
        <div style={{ border: "1px dashed #ccc", padding: "1rem" }}>
          <InlineStack align="center" gap="400">
            <Placeholder width="60px" height="40px">
              1
            </Placeholder>
            <Placeholder width="60px" height="40px">
              2
            </Placeholder>
            <Placeholder width="60px" height="40px">
              3
            </Placeholder>
          </InlineStack>
        </div>
      </div>

      <div>
        <h3
          style={{ marginBottom: "1rem", fontSize: "14px", fontWeight: "600" }}>
          End
        </h3>
        <div style={{ border: "1px dashed #ccc", padding: "1rem" }}>
          <InlineStack align="end" gap="400">
            <Placeholder width="60px" height="40px">
              1
            </Placeholder>
            <Placeholder width="60px" height="40px">
              2
            </Placeholder>
            <Placeholder width="60px" height="40px">
              3
            </Placeholder>
          </InlineStack>
        </div>
      </div>

      <div>
        <h3
          style={{ marginBottom: "1rem", fontSize: "14px", fontWeight: "600" }}>
          Space between
        </h3>
        <div style={{ border: "1px dashed #ccc", padding: "1rem" }}>
          <InlineStack align="space-between" gap="0">
            <Placeholder width="60px" height="40px">
              1
            </Placeholder>
            <Placeholder width="60px" height="40px">
              2
            </Placeholder>
            <Placeholder width="60px" height="40px">
              3
            </Placeholder>
          </InlineStack>
        </div>
      </div>

      <div>
        <h3
          style={{ marginBottom: "1rem", fontSize: "14px", fontWeight: "600" }}>
          Space around
        </h3>
        <div style={{ border: "1px dashed #ccc", padding: "1rem" }}>
          <InlineStack align="space-around" gap="0">
            <Placeholder width="60px" height="40px">
              1
            </Placeholder>
            <Placeholder width="60px" height="40px">
              2
            </Placeholder>
            <Placeholder width="60px" height="40px">
              3
            </Placeholder>
          </InlineStack>
        </div>
      </div>

      <div>
        <h3
          style={{ marginBottom: "1rem", fontSize: "14px", fontWeight: "600" }}>
          Space evenly
        </h3>
        <div style={{ border: "1px dashed #ccc", padding: "1rem" }}>
          <InlineStack align="space-evenly" gap="0">
            <Placeholder width="60px" height="40px">
              1
            </Placeholder>
            <Placeholder width="60px" height="40px">
              2
            </Placeholder>
            <Placeholder width="60px" height="40px">
              3
            </Placeholder>
          </InlineStack>
        </div>
      </div>
    </div>
  ),
};

export const Direction: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <h3
          style={{ marginBottom: "1rem", fontSize: "14px", fontWeight: "600" }}>
          Row (default)
        </h3>
        <InlineStack direction="row" gap="400">
          <Placeholder width="60px" height="40px">
            First
          </Placeholder>
          <Placeholder width="60px" height="40px">
            Second
          </Placeholder>
          <Placeholder width="60px" height="40px">
            Third
          </Placeholder>
        </InlineStack>
      </div>

      <div>
        <h3
          style={{ marginBottom: "1rem", fontSize: "14px", fontWeight: "600" }}>
          Row reverse
        </h3>
        <InlineStack direction="row-reverse" gap="400">
          <Placeholder width="60px" height="40px">
            First
          </Placeholder>
          <Placeholder width="60px" height="40px">
            Second
          </Placeholder>
          <Placeholder width="60px" height="40px">
            Third
          </Placeholder>
        </InlineStack>
      </div>
    </div>
  ),
};

export const ResponsiveGap: Story = {
  name: "Responsive gap",
  args: {
    gap: { xs: "200", md: "400", lg: "800" },
  },
  render: args => (
    <div>
      <p style={{ marginBottom: "1rem", fontSize: "14px", color: "#666" }}>
        Resize the viewport to see different gap sizes: small (8px) → medium
        (16px) → large (32px)
      </p>
      <InlineStack {...args}>
        <Placeholder width="80px" height="40px">
          Item 1
        </Placeholder>
        <Placeholder width="80px" height="40px">
          Item 2
        </Placeholder>
        <Placeholder width="80px" height="40px">
          Item 3
        </Placeholder>
        <Placeholder width="80px" height="40px">
          Item 4
        </Placeholder>
      </InlineStack>
    </div>
  ),
};

export const SemanticElements: Story = {
  name: "Semantic HTML elements",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <h3
          style={{ marginBottom: "1rem", fontSize: "14px", fontWeight: "600" }}>
          As unordered list
        </h3>
        <InlineStack
          as="ul"
          gap="300"
          style={{ listStyle: "none", margin: 0, padding: 0 }}>
          <li>
            <Placeholder width="80px" height="40px">
              Item 1
            </Placeholder>
          </li>
          <li>
            <Placeholder width="80px" height="40px">
              Item 2
            </Placeholder>
          </li>
          <li>
            <Placeholder width="80px" height="40px">
              Item 3
            </Placeholder>
          </li>
        </InlineStack>
      </div>

      <div>
        <h3
          style={{ marginBottom: "1rem", fontSize: "14px", fontWeight: "600" }}>
          As span (inline)
        </h3>
        <p>
          Here is some text with{" "}
          <InlineStack as="span" gap="100">
            <span
              style={{
                background: "#e3f2fd",
                padding: "2px 6px",
                borderRadius: "3px",
              }}>
              inline
            </span>
            <span
              style={{
                background: "#e3f2fd",
                padding: "2px 6px",
                borderRadius: "3px",
              }}>
              stack
            </span>
            <span
              style={{
                background: "#e3f2fd",
                padding: "2px 6px",
                borderRadius: "3px",
              }}>
              items
            </span>
          </InlineStack>{" "}
          in the middle of it.
        </p>
      </div>
    </div>
  ),
};

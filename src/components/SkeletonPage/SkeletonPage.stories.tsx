import type { Meta, StoryObj } from "@storybook/react";
import { SkeletonPage } from "./skeletonPage";
import { Card } from "../Card/card";
import { SkeletonBodyText } from "../SkeletonBodyText/skeletonBodyText";
import { BlockStack } from "../BlockStack/blockStack";
import React from "react";

/**
 * # SkeletonPage Component Documentation
 *
 * Skeleton page is used with other skeleton loading components to provide a low fidelity representation of the user interface (UI) before content appears on the page. It improves load times perceived by merchants.
 *
 * ## Overview
 *
 * The SkeletonPage component provides 100% API compatibility with Shopify's Polaris SkeletonPage component while being built on shadcn/ui foundation with Tailwind CSS. Skeleton page is used with other skeleton loading components to provide a low fidelity representation of the user interface (UI) before content appears on the page. It improves load times perceived by merchants.
 *
 * ## Installation
 *
 * ```bash
 * pnpm install @storeware/polaris
 * ```
 *
 * ## Basic Usage
 *
 * ```tsx
 * import { SkeletonPage, Card, SkeletonBodyText } from "@storeware/polaris";
 *
 * function MyComponent() {
 *   return (
 *     <SkeletonPage primaryAction>
 *       <Card>
 *         <SkeletonBodyText />
 *       </Card>
 *     </SkeletonPage>
 *   );
 * }
 * ```
 *
 * ## Import Styles
 *
 * Make sure to import the component styles in your application:
 *
 * ```tsx
 * import "@storeware/polaris/styles";
 * ```
 *
 * ## Props
 *
 * ### Core Props
 *
 * | Prop | Type | Default | Description |
 * |------|------|---------|-------------|
 * | `title` | `string` | - | Page title, in large type |
 * | `fullWidth` | `boolean` | `false` | Remove the normal max-width on the page |
 * | `narrowWidth` | `boolean` | `false` | Decreases the maximum layout width. Intended for single-column layouts |
 * | `primaryAction` | `boolean` | `false` | Shows a skeleton over the primary action |
 * | `backAction` | `boolean` | `false` | Shows a skeleton over the backAction |
 * | `children` | `React.ReactNode` | - | The child elements to render in the skeleton page |
 * | `className` | `string` | - | Additional CSS class name |
 *
 * ## Best Practices
 *
 * Skeleton page component should:
 *
 * - Be used for pages where all content loads at the same time.
 * - Give merchants an indication of what the page layout will be once loaded. Do this by mimicking its layout similarly to the state that will be loaded.
 *
 * ## Content Guidelines
 *
 * Show page titles that never change for a page. For example, keep the title "Products" on the product list page, but use skeleton loading for titles that change on the product details page. Don't use placeholder content for titles that will change when the page fully loads.
 *
 * Secondary actions are always represented with skeleton content. You can change the number of skeleton actions that best represent the number of actions once loaded.
 *
 * **Do**: Use skeleton loading for dynamic content, and use actual content for content that doesn't change.
 *
 * **Don't**: Use placeholder content that will change when the page fully loads. This will confuse merchants and create a jumpy loading experience.
 *
 * ## Related Components
 *
 * - Use the Skeleton body text and Skeleton display text components to represent blocks of content.
 * - When giving feedback for in-context operations, use Progress bar or Spinner component.
 *
 * ## Technical Details
 *
 * ### Component Structure
 *
 * The SkeletonPage component is built using:
 * - **React.forwardRef** for ref forwarding
 * - **CVA (Class Variance Authority)** for variant management
 * - **Tailwind CSS** for styling
 * - **CSS animations** for the pulse effect
 *
 * ### Styling
 *
 * The component uses Tailwind's `animate-pulse` utility for the shimmer animation and provides:
 * - **Max width**: 7xl (max-w-7xl) by default
 * - **Full width**: No max-width when `fullWidth` is true
 * - **Narrow width**: 3xl (max-w-3xl) when `narrowWidth` is true
 * - **Responsive padding**: Adjusts based on screen size
 *
 * ## TypeScript Support
 *
 * The component is fully typed with TypeScript:
 *
 * ```tsx
 * import type { SkeletonPageProps } from "@storeware/polaris";
 * ```
 *
 * ## Compatibility
 *
 * This component maintains 100% API compatibility with Shopify's Polaris SkeletonPage component, ensuring a seamless migration path and consistent behavior across your application.
 */
const meta = {
  title: "Feedback Indicators/SkeletonPage",
  component: SkeletonPage,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "Page title, in large type",
      table: {
        type: { summary: "string" },
      },
    },
    fullWidth: {
      control: "boolean",
      description: "Remove the normal max-width on the page",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    narrowWidth: {
      control: "boolean",
      description:
        "Decreases the maximum layout width. Intended for single-column layouts",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    primaryAction: {
      control: "boolean",
      description: "Shows a skeleton over the primary action",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    backAction: {
      control: "boolean",
      description: "Shows a skeleton over the backAction",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
  },
} satisfies Meta<typeof SkeletonPage>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Use this component to compose a loading version of a page where the page title
 * and header content are dynamic, meaning, the content changes.
 */
export const WithDynamicContent: Story = {
  args: {
    primaryAction: true,
  },
  render: (args) => (
    <SkeletonPage {...args}>
      <BlockStack gap="400">
        <Card>
          <SkeletonBodyText />
        </Card>
        <Card>
          <SkeletonBodyText />
        </Card>
        <Card>
          <SkeletonBodyText />
        </Card>
      </BlockStack>
    </SkeletonPage>
  ),
};

/**
 * Use this component to compose a loading version of a page where the page title
 * and header content are known and stay the same.
 */
export const WithStaticContent: Story = {
  args: {
    title: "Products",
    primaryAction: true,
  },
  render: (args) => (
    <SkeletonPage {...args}>
      <BlockStack gap="400">
        <Card title="Images">
          <SkeletonBodyText />
        </Card>
        <Card title="Variants">
          <SkeletonBodyText />
        </Card>
      </BlockStack>
    </SkeletonPage>
  ),
};

/**
 * Example with back action skeleton.
 */
export const WithBackAction: Story = {
  args: {
    backAction: true,
    primaryAction: true,
  },
  render: (args) => (
    <SkeletonPage {...args}>
      <Card>
        <SkeletonBodyText />
      </Card>
    </SkeletonPage>
  ),
};

/**
 * Example with full width layout.
 */
export const FullWidth: Story = {
  args: {
    fullWidth: true,
    primaryAction: true,
  },
  render: (args) => (
    <SkeletonPage {...args}>
      <Card>
        <SkeletonBodyText />
      </Card>
    </SkeletonPage>
  ),
};

/**
 * Example with narrow width layout.
 */
export const NarrowWidth: Story = {
  args: {
    narrowWidth: true,
    primaryAction: true,
  },
  render: (args) => (
    <SkeletonPage {...args}>
      <Card>
        <SkeletonBodyText />
      </Card>
    </SkeletonPage>
  ),
};


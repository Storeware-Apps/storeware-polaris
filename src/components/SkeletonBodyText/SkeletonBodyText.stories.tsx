import type { Meta, StoryObj } from "@storybook/react";
import { SkeletonBodyText } from "./skeletonBodyText";
import React from "react";

/**
 * # SkeletonBodyText Component Documentation
 *
 * Skeleton body text is used to provide a low fidelity representation of content before it appears on the page, and improves load times perceived by merchants. Can be used for content in or outside of a card.
 *
 * ## Overview
 *
 * The SkeletonBodyText component provides 100% API compatibility with Shopify's Polaris SkeletonBodyText component while being built on shadcn/ui foundation with Tailwind CSS. Skeleton body text is used to provide a low fidelity representation of content before it appears on the page, and improves load times perceived by merchants. Can be used for content in or outside of a card.
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
 * import { SkeletonBodyText } from "@storeware/polaris";
 *
 * function MyComponent() {
 *   return <SkeletonBodyText />;
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
 * | `lines` | `number` | `3` | Number of lines to display |
 * | `className` | `string` | - | Additional CSS class name |
 *
 * ## Best Practices
 *
 * Skeleton body text component should:
 *
 * - Be used with Skeleton page when page content loads all at once. Together, these components give merchants an indication of what the page layout will be once loaded.
 * - Be used on its own, inside any content container component (like a card), and when content loads after the main page load.
 * - Try to match the number of lines to the content being loaded so it gives an accurate representation.
 *
 * ## Content Guidelines
 *
 * ### Skeleton Body Text
 *
 * Show static content that never changes on a page and use skeleton loading for dynamic content. Skeleton body text can sometimes be used to represent non-typographic content such as forms. Don't use placeholder content that will change when the page fully loads.
 *
 * **Do**: Use skeleton body text for dynamic content.
 *
 * **Don't**: Use skeleton body text for static content or use placeholder content for dynamic content.
 *
 * ## Related Components
 *
 * - Use this component with Skeleton page and Skeleton display text to represent the content of a page while it's loading.
 * - When giving feedback for in-context operations, use Progress bar or Spinner component.
 *
 * ## Technical Details
 *
 * ### Component Structure
 *
 * The SkeletonBodyText component is built using:
 * - **React.forwardRef** for ref forwarding
 * - **CVA (Class Variance Authority)** for variant management
 * - **Tailwind CSS** for styling
 * - **CSS animations** for the pulse effect
 *
 * ### Styling
 *
 * The component uses Tailwind's `animate-pulse` utility for the shimmer animation. Each line is rendered as a gray bar with:
 * - **Height**: 8px (h-2)
 * - **Background**: Gray 200
 * - **Border radius**: Rounded
 * - **Last line**: 75% width (when multiple lines)
 *
 * ## TypeScript Support
 *
 * The component is fully typed with TypeScript:
 *
 * ```tsx
 * import type { SkeletonBodyTextProps } from "@storeware/polaris";
 * ```
 *
 * ## Compatibility
 *
 * This component maintains 100% API compatibility with Shopify's Polaris SkeletonBodyText component, ensuring a seamless migration path and consistent behavior across your application.
 */
const meta = {
  title: "Feedback Indicators/SkeletonBodyText",
  component: SkeletonBodyText,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    lines: {
      control: "number",
      description: "Number of lines to display",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "3" },
      },
    },
  },
} satisfies Meta<typeof SkeletonBodyText>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Use this component to represent a block of content being loaded. For example,
 * you could use it to represent an entire product description card on the product page.
 */
export const Default: Story = {
  args: {},
};

/**
 * Use this component to represent a short, single line of text, like a timestamp.
 */
export const SingleLineContent: Story = {
  args: {
    lines: 1,
  },
};

/**
 * Example with custom number of lines.
 */
export const CustomLines: Story = {
  args: {
    lines: 5,
  },
};


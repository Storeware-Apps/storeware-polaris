// import type { Preview } from "@storybook/react-vite";
import "../src/styles/globals.css";

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      description: {
        component:
          "Polaris-compatible React components built with shadcn/ui and Tailwind CSS",
      },
    },
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: "#ffffff",
        },
        {
          name: "dark",
          value: "#1a1a1a",
        },
      ],
    },
  },
};

export default preview;

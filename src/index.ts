// Export main Button component with both Polaris API and shadcn/ui functionality
export { Button, buttonVariants } from "./components/Button/button.js";

// Export types
export type {
  PolarisButtonProps,
  EnhancedButtonProps,
  PolarisButtonSize,
  PolarisButtonTextAlign,
  PolarisButtonTone,
  PolarisButtonVariant,
  PolarisButtonDisclosure,
  PolarisButtonTarget,
} from "./components/Button/button";

// Export utilities
export { cn } from "./lib/utils.js";

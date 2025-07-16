// Export main Button component with both Polaris API and shadcn/ui functionality
export { Button, buttonVariants } from "./components/Button/button.js";

// Export ButtonGroup component
export {
  ButtonGroup,
  buttonGroupVariants,
} from "./components/ButtonGroup/buttonGroup.js";

// Export Box component
export { Box, boxVariants } from "./components/Box/box.js";

// Export Button types (now consolidated in button.tsx following shadcn/ui pattern)
export type {
  PolarisButtonProps,
  EnhancedButtonProps,
  ButtonSize,
  ButtonTextAlign,
  ButtonTone,
  ButtonVariant,
  ButtonDisclosure,
  ButtonTarget,
  // Backward compatibility aliases
  PolarisButtonSize,
  PolarisButtonTextAlign,
  PolarisButtonTone,
  PolarisButtonVariant,
  PolarisButtonDisclosure,
  PolarisButtonTarget,
} from "./components/Button/button";

// Export ButtonGroup types
export type {
  PolarisButtonGroupProps,
  EnhancedButtonGroupProps,
  ButtonGroupGap,
  ButtonGroupVariant,
  // Backward compatibility aliases
  PolarisButtonGroupGap,
  PolarisButtonGroupVariant,
} from "./components/ButtonGroup/buttonGroup";

// Export Box types (consolidated in box.tsx following shadcn/ui pattern)
export type {
  PolarisBoxProps,
  EnhancedBoxProps,
  ColorBackgroundAlias,
  ColorBorderAlias,
  ColorTextAlias,
  SpaceScale,
  BorderRadiusAliasOrScale,
  BorderWidthScale,
  ShadowAliasOrScale,
  BreakpointsAlias,
  ResponsiveSpacing,
} from "./components/Box/box";

// Export utilities
export { cn } from "./lib/utils.js";

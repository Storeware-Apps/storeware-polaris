import "./styles/globals.css";

// Export main Button component with both Polaris API and shadcn/ui functionality
export { Button, buttonVariants } from "./components/Button/button.js";

// Export ButtonGroup component
export {
  ButtonGroup,
  buttonGroupVariants,
} from "./components/ButtonGroup/buttonGroup.js";

// Export Box component
export { Box, boxVariants } from "./components/Box/box.js";

// Export Text component
export { Text, textVariants } from "./components/Text/Text.js";

// Export TextField component
export {
  TextField,
  textFieldVariants,
} from "./components/TextField/TextField.js";

// Export Popover component
export {
  Popover,
  polarisPopoverVariants,
} from "./components/Popover/popover.js";

// Export Card component
export { Card, polarisCardVariants } from "./components/Card/card.js";

// Export Bleed component
export { Bleed, bleedVariants } from "./components/Bleed/bleed.js";

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

// Export Text types (consolidated in Text.tsx following shadcn/ui pattern)
export type {
  PolarisTextProps,
  EnhancedTextProps,
  TextProps,
  TextVariant,
  TextAlignment,
  TextTone,
  TextFontWeight,
  TextElement,
  // Backward compatibility aliases
  PolarisTextVariant,
  PolarisTextAlignment,
  PolarisTextTone,
  PolarisTextFontWeight,
  PolarisTextElement,
} from "./components/Text/Text";

// Export TextField types (consolidated in TextField.tsx following shadcn/ui pattern)
export type {
  PolarisTextFieldProps,
  EnhancedTextFieldProps,
  TextFieldProps,
  TextFieldType,
  TextFieldAlignment,
  TextFieldInputMode,
  TextFieldSize,
  TextFieldVariant,
  TextFieldTone,
  TextFieldError,
} from "./components/TextField/TextField";

// Export Popover types (consolidated in popover.tsx following shadcn/ui pattern)
export type {
  PolarisPopoverProps,
  EnhancedPopoverProps,
  PopoverCloseSource,
  PopoverPreferredPosition,
  PopoverPreferredAlignment,
  PopoverAutofocusTarget,
  // Backward compatibility aliases
  PolarisPopoverCloseSource,
  PolarisPopoverPreferredPosition,
  PolarisPopoverPreferredAlignment,
  PolarisPopoverAutofocusTarget,
  PolarisEnhancedPopoverProps,
} from "./components/Popover/popover";

// Export Card types (consolidated in card.tsx following shadcn/ui pattern)
export type {
  PolarisCardProps,
  EnhancedCardProps,
  CardBackground,
  CardPadding,
  CardRoundedAbove,
  // Backward compatibility aliases
  PolarisCardBackground,
  PolarisCardPadding,
  PolarisCardRoundedAbove,
  PolarisEnhancedCardProps,
} from "./components/Card/card";

// Export Bleed types (consolidated in bleed.tsx following shadcn/ui pattern)
export type {
  PolarisBleedProps,
  EnhancedBleedProps,
} from "./components/Bleed/bleed";

// Export utilities
export { cn } from "./lib/utils.js";

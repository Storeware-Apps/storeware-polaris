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

// Export Select component
export { Select, polarisSelectVariants } from "./components/Select/select.js";

// Export Popover component
export {
  Popover,
  polarisPopoverVariants,
} from "./components/Popover/popover.js";

// Export ChoiceList component
export {
  ChoiceList,
  polarisChoiceListVariants,
} from "./components/ChoiceList/choiceList.js";

// Export Card component
export { Card, polarisCardVariants } from "./components/Card/card.js";

// Export Modal component
export { Modal, modalVariants } from "./components/Modal/modal.js";

// Export TitleBar component
export { TitleBar, titleBarVariants } from "./components/Modal/titleBar.js";

// Export Bleed component
export { Bleed, bleedVariants } from "./components/Bleed/bleed.js";

// Export Page component
export { Page, polarisPageVariants } from "./components/Page/page.js";

// Export Badge component
export { Badge, badgeVariants } from "./components/Badge/badge.js";

// Export InlineStack component
export {
  InlineStack,
  inlineStackVariants,
} from "./components/InlineStack/inlineStack.js";

// Export BlockStack component
export {
  BlockStack,
  blockStackVariants,
} from "./components/BlockStack/blockStack.js";

// Export Pagination component
export {
  Pagination,
  paginationVariants,
} from "./components/Pagination/pagination.js";

// Export IndexFilters component
export {
  IndexFilters,
  indexFiltersVariants,
  useSetIndexFiltersMode,
} from "./components/IndexFilters/indexFilters.js";

// Export IndexTable component
export {
  IndexTable,
  indexTableVariants,
  useIndexResourceState,
} from "./components/IndexTable/indexTable.js";

// Export ContextualSaveBar component
export {
  ContextualSaveBar,
  saveBarVariants,
} from "./components/ContextualSaveBar/contextualSaveBar.js";

// Export Icon component
export { Icon, iconVariants } from "./components/Icon/icon.js";

// Export Toast component
export { Toaster, toast, toastVariants } from "./components/Toast/toast.js";

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

// Export Modal types (consolidated in modal.tsx following shadcn/ui pattern)
export type {
  AppBridgeModalProps,
  EnhancedModalProps,
  ModalVariant,
} from "./components/Modal/modal";

// Export TitleBar types (consolidated in titleBar.tsx following shadcn/ui pattern)
export type {
  AppBridgeTitleBarProps,
  EnhancedTitleBarProps,
} from "./components/Modal/titleBar";

// Export Bleed types (consolidated in bleed.tsx following shadcn/ui pattern)
export type {
  PolarisBleedProps,
  EnhancedBleedProps,
} from "./components/Bleed/bleed";

// Export Page types (consolidated in page.tsx following shadcn/ui pattern)
export type {
  PolarisPageProps,
  EnhancedPageProps,
  LinkAction,
  CallbackAction,
  MenuGroupDescriptor as PageMenuGroupDescriptor,
  PaginationProps as PagePaginationProps,
} from "./components/Page/page";

// Export Badge types (consolidated in badge.tsx following shadcn/ui pattern)
export type {
  PolarisBadgeProps,
  EnhancedBadgeProps,
  BadgeProps,
  BadgeTone,
  BadgeProgress,
  BadgeSize,
} from "./components/Badge/badge";

// Export InlineStack types (consolidated in inlineStack.tsx following shadcn/ui pattern)
export type {
  PolarisInlineStackProps,
  EnhancedInlineStackProps,
  InlineStackAlign,
  InlineStackDirection,
  InlineStackBlockAlign,
  InlineStackAs,
  ResponsiveGap,
} from "./components/InlineStack/inlineStack";

// Export BlockStack types (consolidated in blockStack.tsx following shadcn/ui pattern)
export type {
  PolarisBlockStackProps,
  EnhancedBlockStackProps,
  BlockStackAlign,
  BlockStackInlineAlign,
  BlockStackAs,
  ResponsiveGap as BlockStackResponsiveGap,
} from "./components/BlockStack/blockStack";

// Export Pagination types (consolidated in pagination.tsx following shadcn/ui pattern)
export type {
  PaginationProps,
  EnhancedPaginationProps,
  AccessibilityLabels,
  Key,
  // Backward compatibility aliases
  PolarisPaginationProps,
  PolarisAccessibilityLabels,
  PolarisKey,
} from "./components/Pagination/pagination";

// Export IndexFilters types (consolidated in indexFilters.tsx following shadcn/ui pattern)
export type {
  IndexFiltersProps,
  EnhancedIndexFiltersProps,
  SortButtonChoice,
  TabProps,
  TabAction,
  IndexFiltersPrimaryAction,
  IndexFiltersCancelAction,
  FilterDescriptor,
  AppliedFilter,
  IndexFiltersMode,
  // Backward compatibility aliases
  PolarisIndexFiltersProps,
  PolarisTabProps,
  PolarisSortButtonChoice,
  PolarisFilterDescriptor,
  PolarisAppliedFilter,
  PinnedFilter,
  PinnedFilterChoice,
  PolarisPinnedFilter,
  PolarisPinnedFilterChoice,
} from "./components/IndexFilters/indexFilters";

// Export ChoiceList types (consolidated in choiceList.tsx following shadcn/ui pattern)
export type {
  ChoiceListProps,
  EnhancedChoiceListProps,
  Choice,
  // Backward compatibility aliases
  PolarisChoiceListProps,
  PolarisChoice,
} from "./components/ChoiceList/choiceList";

// Export IndexTable types (consolidated in indexTable.tsx following shadcn/ui pattern)
export type {
  IndexTableProps,
  EnhancedIndexTableProps,
  IndexTableHeading,
  IndexTableHeadingTitleString,
  IndexTableHeadingTitleNode,
  IndexTableSortToggleLabels,
  BulkAction,
  MenuGroupDescriptor as IndexTableMenuGroupDescriptor,
  SelectionType,
  Range,
  IndexTableRowProps,
  IndexTableCellProps,
  // Backward compatibility aliases
  PolarisIndexTableProps,
  PolarisIndexTableHeading,
  PolarisBulkAction,
  PolarisMenuGroupDescriptor,
} from "./components/IndexTable/indexTable";

// Export ContextualSaveBar types (consolidated in contextualSaveBar.tsx following shadcn/ui pattern)
export type {
  AppBridgeSaveBarProps,
  EnhancedContextualSaveBarProps,
} from "./components/ContextualSaveBar/contextualSaveBar";

// Export Icon types (consolidated in icon.tsx following shadcn/ui pattern)
export type {
  PolarisIconProps,
  EnhancedIconProps,
  IconProps,
  IconTone,
  // Backward compatibility aliases
  PolarisIconTone,
} from "./components/Icon/icon";

// Export Toast types (consolidated in toast.tsx following shadcn/ui pattern)
export type {
  ToastAction,
  ToastOptions,
  AppBridgeToastAPI,
  EnhancedToastProps,
} from "./components/Toast/toast";

// Export Select types (consolidated in select.tsx following shadcn/ui pattern)
export type {
  PolarisSelectProps,
  EnhancedSelectProps,
  SelectProps,
  SelectOption,
  StrictOption,
  SelectGroup,
  SelectError,
} from "./components/Select/select";

// Export utilities
export { cn } from "./lib/utils.js";

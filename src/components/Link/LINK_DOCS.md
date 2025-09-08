# Link Component Documentation

## Overview

The Link component provides 100% API compatibility with Shopify's Polaris Link component while being built on shadcn/ui foundation with Tailwind CSS. Links take users to another place, and usually appear within or directly following a sentence.

## Installation

```bash
pnpm install @storeware/polaris
```

## Basic Usage

```tsx
import { Link } from "@storeware/polaris";

function MyComponent() {
  return (
    <p>
      Learn more about <Link url="https://help.shopify.com/manual">fulfilling orders</Link>.
    </p>
  );
}
```

## Import Styles

Make sure to import the component styles in your application:

```tsx
import "@storeware/polaris/styles";
```

## Props

### Core Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `url` | `string` | - | The url to link to |
| `children` | `React.ReactNode` | - | The content to display inside the link |
| `target` | `LinkTarget` | - | Where to display the url |
| `external` | `boolean` | `false` | Makes the link open in a new tab (deprecated - use `target` instead) |
| `monochrome` | `boolean` | `false` | Makes the link color the same as the current text color and adds an underline |
| `removeUnderline` | `boolean` | `false` | Removes text decoration underline to the link |
| `onClick` | `() => void` | - | Callback when a link is clicked |
| `accessibilityLabel` | `string` | - | Descriptive text to be read to screenreaders |
| `dataPrimaryLink` | `boolean` | `false` | Indicates whether the link is the primary navigation link |
| `id` | `string` | - | ID for the link |
| `className` | `string` | - | Additional CSS class name |

### Target Values

The `target` prop accepts standard HTML target values:

| Value | Description |
|-------|-------------|
| `"_blank"` | Opens in a new tab or window |
| `"_self"` | Opens in the same frame (default) |
| `"_parent"` | Opens in the parent frame |
| `"_top"` | Opens in the full body of the window |

## Examples

### Default Link

```tsx
<p>
  Learn more about <Link url="https://help.shopify.com/manual">fulfilling orders</Link>.
</p>
```

### External Link

```tsx
<Link url="https://help.shopify.com/manual" target="_blank">
  Shopify Help Center
</Link>
```

### Monochrome Link

```tsx
<p>
  Learn more about <Link url="https://help.shopify.com/manual" monochrome>fulfilling orders</Link>.
</p>
```

### Link Without Underline

```tsx
<Link url="/dashboard" removeUnderline>
  Dashboard
</Link>
```

### Link with Click Handler

```tsx
<Link 
  url="https://help.shopify.com/manual" 
  onClick={() => console.log('Link clicked!')}
>
  fulfilling orders
</Link>
```

### Link with Accessibility Label

```tsx
<p>
  Click <Link 
    url="https://help.shopify.com/manual" 
    accessibilityLabel="Learn more about fulfilling orders"
  >
    here
  </Link> to learn more about fulfilling orders.
</p>
```

### Primary Link (for IndexTable)

```tsx
<Link url="/products/123" dataPrimaryLink>
  Product Name
</Link>
```

### Navigation Links

```tsx
<nav>
  <ul>
    <li><Link url="/dashboard">Dashboard</Link></li>
    <li><Link url="/products">Products</Link></li>
    <li><Link url="/orders">Orders</Link></li>
    <li><Link url="/customers">Customers</Link></li>
  </ul>
</nav>
```

### Links in Banner

```tsx
import { Banner, Link } from "@storeware/polaris";

function BannerWithLink() {
  return (
    <Banner>
      Learn more about{' '}
      <Link url="https://help.shopify.com/manual">fulfilling orders</Link>
    </Banner>
  );
}
```

### Multiple Links in Content

```tsx
<div>
  <p>
    For more information, see our{' '}
    <Link url="https://help.shopify.com/manual">help documentation</Link>{' '}
    or contact our{' '}
    <Link url="https://help.shopify.com/questions">support team</Link>.
  </p>
  <p>
    You can also visit the{' '}
    <Link url="https://community.shopify.com" target="_blank">
      Shopify Community
    </Link>{' '}
    for additional resources.
  </p>
</div>
```

## Best Practices

### Buttons versus Links

**Links** are used primarily for navigation, and usually appear within or directly following a sentence.

**Buttons** are used primarily for actions, such as "Add", "Close", "Cancel", or "Save". Plain buttons, which look similar to links, are used for less important or less commonly used actions.

The HTML that renders for the Button and Link components carries meaning. Using these components intentionally and consistently results in:

- A more inclusive experience for assistive technology users
- A more cohesive visual experience for sighted users
- Products that are easier to maintain at scale

### External Links

- Use default links whenever possible to avoid disorienting merchants and causing accessibility problems by opening a new tab
- External links should be used when merchants are:
  - Performing a task or workflow, like creating a product
  - Navigating to a page outside of the Shopify admin

### Link Text

- Give links text that clearly describes their purpose
- Use the same text for links that navigate to the same content
- Use different text for links that navigate to different content

### Do

```tsx
<Link url="https://help.shopify.com/manual">fulfilling orders</Link>
```

### Don't

```tsx
<Link>fulfilling orders</Link> // Missing URL
```

## Accessibility

The Link component follows accessibility best practices:

- **Valid href**: The `url` prop provides a valid href value for assistive technologies
- **Keyboard Support**: Links use browser defaults for keyboard interaction
- **Screen Reader Support**: The `accessibilityLabel` prop adds an aria-label attribute
- **Visual Indicators**: Links are underlined to provide visual indication of interactivity
- **External Link Security**: Automatically adds `rel="noopener noreferrer"` for external links

### Keyboard Support

- **Tab**: Give links keyboard focus (Shift + Tab when tabbing backwards)
- **Enter/Return**: Activate links

### Labeling

- The `accessibilityLabel` prop adds an aria-label attribute to the link
- This label text replaces the visible text on the link for merchants who use assistive technology
- Use consistent and clear labeling for better accessibility

## Related Components

- **Button**: Use for actions that don't appear within or directly following a sentence
- **UnstyledLink**: Use if existing link styles don't meet your project needs

## Type Definitions

```tsx
interface LinkProps {
  id?: string;
  url?: string;
  children?: React.ReactNode;
  external?: boolean; // deprecated
  target?: LinkTarget;
  monochrome?: boolean;
  removeUnderline?: boolean;
  onClick?(): void;
  accessibilityLabel?: string;
  dataPrimaryLink?: boolean;
  className?: string;
}

type LinkTarget = "_blank" | "_self" | "_parent" | "_top";
```

## Migration from External Prop

The `external` prop is deprecated. Use the `target` prop instead:

```tsx
// Old (deprecated)
<Link url="https://example.com" external>External link</Link>

// New (recommended)
<Link url="https://example.com" target="_blank">External link</Link>
```

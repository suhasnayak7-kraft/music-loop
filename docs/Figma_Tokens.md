# Figma Design Tokens: Interaction Sound Lab

This document defines the design primitives and semantic tokens used throughout the application. These values directly map to the Tailwind CSS classes implemented in the codebase and can be directly imported into Figma Variables or Tokens Studio.

---

## 1. Color Primitives (The Palette)

These are the raw color values utilized in the application. In Figma, these should be created as your foundation variables.

### Slate (Neutral/Grayscale)
*Used for backgrounds, text, and structural borders.*
- `slate-50`: `#F8FAFC`
- `slate-100`: `#F1F5F9`
- `slate-200`: `#E2E8F0`
- `slate-300`: `#CBD5E1`
- `slate-400`: `#94A3B8`
- `slate-500`: `#64748B`
- `slate-600`: `#475569`
- `slate-800`: `#1E293B`
- `slate-900`: `#0F172A`

### Blue (Navigation Category)
*Used for ~400Hz semantic group.*
- `blue-50`: `#EFF6FF`
- `blue-100`: `#DBEAFE`
- `blue-200`: `#BFDBFE`
- `blue-300`: `#93C5FD`
- `blue-500`: `#3B82F6`
- `blue-600`: `#2563EB`

### Rose (Data Actions Category)
*Used for ~300Hz semantic group.*
- `rose-50`: `#FFF1F2`
- `rose-100`: `#FFE4E6`
- `rose-200`: `#FECDD3`
- `rose-300`: `#FDA4AF`
- `rose-500`: `#F43F5E`
- `rose-600`: `#E11D48`

### Violet (User & System Category)
*Used for ~500Hz semantic group.*
- `violet-50`: `#F5F3FF`
- `violet-100`: `#EDE9FE`
- `violet-200`: `#DDD6FE`
- `violet-300`: `#C4B5FD`
- `violet-500`: `#8B5CF6`
- `violet-600`: `#7C3AED`

### Emerald (Utilities Category)
*Used for ~600Hz semantic group.*
- `emerald-50`: `#ECFDF5`
- `emerald-100`: `#D1FAE5`
- `emerald-200`: `#A7F3D0`
- `emerald-300`: `#6EE7B7`
- `emerald-500`: `#10B981`
- `emerald-600`: `#059669`

---

## 2. Semantic Color Tokens

In Figma, alias these semantic tokens to the color primitives above.

### Global UI
| Token | Light Mode Value | Dark Mode Value | Usage |
|-------|------------------|-----------------|-------|
| `bg-app` | `slate-50` | `slate-950` | App background |
| `bg-surface` | `white` | `slate-900` | Cards, grids, controls |
| `bg-surface-elevated` | `white` | `slate-950` | Squircles, selects |
| `border-subtle` | `slate-200` | `slate-800` | Borders for squircles/controls |
| `border-divider` | `slate-100` | `slate-800` | Grid separating lines |
| `text-primary` | `slate-900` | `white` | Headings |
| `text-secondary` | `slate-500` | `slate-400` | Descriptions, inactive tabs |
| `text-tertiary` | `slate-400` | `slate-500` | Labels, grid titles |

### Interactive States (Per Category)
For each of the 4 semantic categories (Blue, Rose, Violet, Emerald), the logic is strictly bound to these tonal ramps:

- `category-default`: `color-500` (The active state, Rings, Visualizer background)
- `category-hover-bg`: `color-50` (Background of squircle on hover)
- `category-active-bg`: `color-100` (Background of squircle on click)
- `category-hover-border`: `color-300` (Border of squircle on hover)
- `category-text-hover`: `color-500` (Label text on hover)
- `category-text-active`: `color-600` (Label text and Icon on click/active)
- `category-shadow`: `color-200` (Glow/drop-shadow effect)

---

## 3. Typography Variables

The application uses standard system sans-serif fonts, scaled neatly using Tailwind's default configuration.

### Font Families
- `sans` (Inter): `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial`
- `poppins`: `"Poppins", sans-serif`
- `space-grotesk`: `"Space Grotesk", sans-serif`
- `roboto`: `"Roboto", sans-serif`
- `urbanist`: `"Urbanist", sans-serif`

### Font Sizes & Line Heights
- `text-4xl`: Size: `36px` / Line Height: `40px` (Used for App Title)
- `text-lg`: Size: `18px` / Line Height: `28px` (Used for App Description)
- `text-sm`: Size: `14px` / Line Height: `20px` (Used for Mood Tabs / Dropdown)
- `text-xs`: Size: `12px` / Line Height: `16px` (Used for Grid Titles and Icon Labels)

### Font Weights
- `font-extrabold`: `800` (App Title)
- `font-bold`: `700` (Grid Titles)
- `font-semibold`: `600` (Mood Tabs, Dropdown, Icon Labels)

### Letter Spacing (Tracking)
- `tracking-tight`: `-0.025em` (App Title, keeps large text compact)
- `tracking-widest`: `0.1em` (Grid Titles, aids readability of uppercase)

---

## 4. Spacing & Sizing Variables

Map these absolute pixel sizes to variables in Figma to maintain the grid system perfectly. 

### Padding & Margins
- `spacing-1`: `4px` (Gap between mood buttons)
- `spacing-1.5`: `6px` (Padding inside mood selector container)
- `spacing-2.5`: `10px` (Vertical padding on mood buttons)
- `spacing-3`: `12px` (Gap/Bottom padding on icon elements)
- `spacing-4`: `16px` (Gap inside icon grid)
- `spacing-6`: `24px` (Horizontal padding on mood buttons)
- `spacing-8`: `32px` (Global page padding, gap between category columns)
- `spacing-12`: `48px` (Spacing between massive section blocks)
- `spacing-16`: `64px` (Margin around the central visualizer)

### Element Sizing (Width/Height)
- `size-16`: `64px` x `64px` (The precise size of the Icon Squircle buttons)
- `size-24`: `96px` x `96px` (The precise size of the central default visualizer)
- `size-icon-base`: `28px` (Size of the Lucide icons inside the grid)
- `size-icon-large`: `40px` (Size of the central visualizer icon)

### Border Radius (Corner Rounding)
- `rounded-xl`: `12px` (Mood buttons)
- `rounded-2xl`: `16px` (Icon squircles, mood toggle container)
- `rounded-3xl`: `24px` (Large glassmorphism UI card)
- `rounded-full`: `9999px` (Central visualizer, makes a perfect circle)

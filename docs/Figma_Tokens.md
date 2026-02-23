# Figma Design Tokens: Interaction Sound Lab (v2.0.0)

This master document defines the design primitives, semantic tokens, and systemic constraints used throughout the Interaction Sound Lab. These values are mapped to Tailwind CSS classes and serve as the single source of truth for both Design (Figma) and Engineering (React).

---

## 1. Color Primitives (The Master Palette)

All colors are derived from curated HSL scales to ensure accessibility and consistent vibrance.

### Slate (Neutral/Structure)
*Primary structural tokens for background and text contrast.*
- `slate-50`: `#F8FAFC` (App Background Light)
- `slate-100`: `#F1F5F9` (Surface Subtle)
- `slate-200`: `#E2E8F0` (Borders Subtle)
- `slate-400`: `#94A3B8` (Tertiary Text)
- `slate-500`: `#64748B` (Secondary Text)
- `slate-900`: `#0F172A` (Primary Text Light)
- `slate-950`: `#020617` (App Background Dark)

### Semantic Tones (Auditory Mappings)
*Each tone corresponds to a specific pitch frequency range (~300Hz to ~600Hz).*
- **Blue (Navigation / 400Hz):** `blue-500` (#3B82F6), `blue-600` (#2563EB)
- **Rose (Destructive Actions / 300Hz):** `rose-500` (#F43F5E), `rose-600` (#E11D48)
- **Violet (System Logic / 500Hz):** `violet-500` (#8B5CF6), `violet-600` (#7C3AED)
- **Emerald (Success/Utility / 600Hz):** `emerald-500` (#10B981), `emerald-600` (#059669)

---

## 2. Typography System

Typography is used to dictate the "perceptive weight" of the procedural audio.

### Font Hierarchy
- **Heading 1 (App Title):** `Space Grotesk`, Extrabold (800), 36px/40px, -0.025em tracking.
- **Heading 2 (Section):** `Space Grotesk`, Bold (700), 24px/32px, -0.01em tracking.
- **Body Large (Description):** `Urbanist`, Medium (500), 18px/28px.
- **Body Small (Controls):** `Urbanist`, Semibold (600), 14px/20px.
- **Labels (Grid):** `Inter`, Semibold (600), 12px/16px, 0.1em tracking (Uppercase).

### Line Height Strategy
- **Display:** 1.1x (Compact, high impact)
- **Body:** 1.5x (Optimal legibility)
- **Controls:** 1.3x (Balanced vertical centering)

---

## 3. Spacing & Grid (The 4px Baseline)

The application uses an arithmetic spacing system where every value is a multiple of 4.

### Global Spacing Tokens
| Token | Value | Figma Rem | Usage |
|-------|-------|-----------|-------|
| `space-1` | 4px | 0.25rem | Micro-gaps (Buttons) |
| `space-2` | 8px | 0.5rem | Internal padding |
| `space-4` | 16px | 1.0rem | Standard grid gap |
| `space-6` | 24px | 1.5rem | Section internal padding |
| `space-8` | 32px | 2.0rem | Container padding |
| `space-12` | 48px | 3.0rem | Vertical section separation |
| `space-16` | 64px | 4.0rem | Large visualizer margins |

### Component Sizing
- **Icon Squircles:** 64px x 64px (`size-16`)
- **Central Visualizer:** 128px x 128px (`size-32`)
- **Mood Selector:** 40px Height (`h-10`)

---

## 4. Interaction Physics (Motion Tokens)

These tokens define the "feel" of the UI, synchronized with the `AudioContext` lifecycle.

### Motion Curves
- **Standard:** `ease-in-out` (For hover elevation)
- **Aggressive:** `cubic-bezier(0.4, 0, 0.2, 1)` (For click depression)

### Transform Scales
- **Hover Elevation:** `-translate-y-2`, `scale-[1.05]`
- **Active Depression:** `scale-[0.95]`
- **Active Glow:** `shadow-[0_0_30px_rgba(var(--color-primary),0.3)]`

---

## 5. Border & Radius System

- **Token `rounded-xl`:** 12px (Small buttons, mood toggles)
- **Token `rounded-2xl`:** 16px (Icon squircles, primary cards)
- **Token `rounded-full`:** 9999px (Circular pulse triggers, visualizer)
- **Token `border-subtle`:** 1px solid `slate-200` (Light) / `slate-800` (Dark)

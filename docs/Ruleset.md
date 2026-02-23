# Master Reference Ruleset

This document serves as the hub mapping out the design decisions, technical implementation standards, and architectural paradigms across the **Interaction Sound Lab** project. It is meant to be read by developers or AI assistants working on this application to ensure consistency, prevent context loss, and enforce our specific flavor of "Clean SaaS" engineering.

---

## 1. Documentation Ecosystem
Before implementing any major features, refer to these specialized documents to maintain strict alignment with the product vision:

- **[Design Requirements Document (DRD)](Design_Requirements.md):** The core product spec outlining the visual layout, target audience, feature roadmap, and the logic guiding our UI/UX decision-making.
- **[Figma Tokens](Figma_Tokens.md):** The absolute, invariant source of truth for all color primitives, spacing arrays, breakpoints, and Typography mappings found in `tailwind.config.js`. **Do not introduce rogue hex codes.** Consult this file before making any CSS class choices.
- **[Beginner Guide](Beginner_Guide.md):** The technical deep-dive explaining exactly how React state (`useState`, `useEffect`), layout mapping, and the complex Web Audio API physics engine behave under the hood. 
- **[Version History](Version_History.md):** The historical log of pivots (e.g., Beat Maker to Sound Lab) and major structural refactors (e.g., modularising the monolithic App.jsx, migrating to Shadcn, adding Dark Mode).

---

## 2. Design Ideas & Aesthetic Guidelines

### 2.1. The "Clean SaaS" Identity
The application must feel incredibly premium, utilizing glassmorphism, depth, and highly intentional color coding.
- **The Neutral Foundation:** The app must strictly follow the `slate` scale for all neutral backgrounds and borders. 
- **Semantic Colors Only:** Reserve vibrant colors *only* for semantic categorization (Navigation = Blue, Data Actions = Rose, User/System = Violet, Utilities = Emerald) and active visualization states.
- **Do NOT** use completely flat colors. Emphasize subtle dimensionality using `shadow-sm`, `border-slate-200`, and translucent `bg-white/50` combined with `backdrop-blur-sm` for glassmorphic depth.
- **Dark Mode Equality:** The application features a native Dark Mode. **Always** implement the `dark:` variant equivalent for *every* new element created (e.g., `bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800`).

### 2.2. Fluid Interaction Physics
Interactions must feel snappy, tactile, and distinct before a click is even registered.
- **Hover States:** Must use `transition-all duration-300 ease-in-out` transitions. Pop the element `hover:scale-[1.05]` and shift it `hover:-translate-y-2` while increasing the drop shadow to signify clickability and weight.
- **Active States:** Must dip down firmly to `active:scale-95` on mouse down, immediately followed by the synthesizer auditory response to create flawless zero-latency cross-modal feedback (seeing and hearing the physical press simultaneously).

---

## 3. Web Audio Synthesis Mandate
**Never introduce static audio files (no `.mp3`, `.wav`, or `.ogg`).**

The core premise of this project is procedural generation under our "80-permutation" mathematical requirement. 
- **The 20 Frequencies:** Every individual icon must have a distinct mathematical base pitch (Hz) hardcoded in `constants.js` (e.g., a "Delete" action is grounded at 220Hz, while "Create" spikes cheerfully at 680Hz).
- **The 4 Modifiers:** These base pitches must scale dynamically under the 4 Mood modifier equations found in `useAudio.js`:
  - **Neutral:** Sine wave, no pitch modifier, smooth envelope.
  - **Playful:** Triangle wave, exponentially sweeping pitch bend upward (1.5x).
  - **Secure:** Square wave, chopped pitch (0.5x), instantaneous decay envelope, secondary 100Hz "pop" transient added for physical weight.
  - **Urgent:** Sawtooth wave, shrill pitch modifier (1.25x), triggering a secondary detuned beep recursively to form a siren.

---

## 4. Framework & UI Component Pipeline

### 4.1. React Component Architecture
- **Strict Modularization:** The application must remain highly split. Do not bloat `App.jsx`. Extract logical UI blocks (like `HeaderControls.jsx`, `MoodSelector.jsx`, `IconGrid.jsx`) independently into the `src/components/` directory.
- **State Management:** Keep state as high up the component tree as necessary (usually in `App.jsx`), passing down strict prop arguments to children. Avoid implementing heavy React Context Providers unless dealing with persistent global themes.

### 4.2. Shadcn UI & Styling Mandate
- **Shadcn as a Baseline:** We utilize Shadcn UI elements (`<Select>`, `<Switch>`, etc.) to ensure robust ADA accessibility, perfect dark mode compatibility, and rapid development without tying ourselves down to a heavy monolithic npm component library. 
- **The Rule of Acquisition:** To add new UI components, **always** fetch them via the terminal using the Shadcn CLI: `npx shadcn@latest add [component-name]`. **Do not build complex base elements (like Dropdowns, Dialogs, or Accordions) from scratch.**
- **File Structure Governance:** All fetched Shadcn components automatically dump into `src/components/ui/`. **Never modify these raw `.jsx` files directly** unless absolutely required for an emergency bug fix; instead, compose, wrap, or pass specific Tailwind class overrides to them from your higher-level parent components.
- **Tailwind Extension Utility:** We strictly mandate the use of the `cn()` utility function (a wrapper combining `clsx` and `tailwind-merge`) provided directly by the Shadcn library. Use this to safely construct complex conditional CSS class strings without breaking Tailwind's cascading specificity algorithms.

---

## 5. Development Workflow & Git Standards
Whenever a new feature, bug fix, or design tweak is implemented, follow this strict cadence:

1. **Verify Design Laws:** Ensure your change complies with the Figma Tokens and Semantic mappings.
2. **Modularize:** Fetch a Shadcn component if applicable, or build a clean functional component locally.
3. **Document Structural Pivots:** Immediately append a new `<H2>` block to the `Version_History.md` document if the change introduces a new feature set or significantly modifies structure (e.g., adding a database, adding a new mood).
4. **Immediate Version Control:** Once the server hot-reloads flawlessly, execute `git add . && git commit -m "[Conventional Commit Title]" && git push origin main` seamlessly. Do not let uncommitted work linger in the repository.

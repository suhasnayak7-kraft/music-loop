# Master Reference Ruleset

This document serves as the hub mapping out the design decisions and architectural standards across the **Interaction Sound Lab** project. It is meant to be read by developers or AI assistants working on this application to ensure consistency and prevent context loss.

## 1. Documentation Map
Before implementing any major features, refer to these specialized documents:
- **[Design Requirements Document (DRD)](Design_Requirements.md):** The core product spec outlining the visual layout, target audience, and feature roadmap.
- **[Figma Tokens](Figma_Tokens.md):** The absolute source of truth for all color primitives, spacing arrays, breakpoints, and Typography mappings in `tailwind.config.js`. Do not introduce rogue hex codes.
- **[Beginner Guide](Beginner_Guide.md):** The technical deep-dive explaining exactly how React state, layout mapping, and the Web Audio API physics engine behave.
- **[Version History](Version_History.md):** The historical log of pivots (e.g., Beat Maker to Sound Lab) and major refactors (e.g., removing monolith App.jsx).

## 2. Design Ideas & Guidelines

### 2.1. The "Clean SaaS" Aesthetic
The application must strictly follow the `slate` scale for all neutral backgrounds and borders, reserving vibrant colors *only* for the semantic categories (Navigation=Blue, Data=Rose, System=Violet, Utils=Emerald) and the Active states.
- **Do NOT** use completely flat colors. Emphasize subtle dimensionality using `shadow-sm`, `border-slate-200`, and `bg-white/50` with `backdrop-blur` for glassmorphic depth.
- Always implement the `dark:` variant equivalents for every new element.

### 2.2. Fluid Interaction Model 
Interactions must feel incredibly snappy but distinct.
- **Hover States:** Must use `ease-in-out` transitions. Pop the element `scale-[1.05]` and shift it `-translate-y-2` to signify clickability.
- **Active States:** Must dip down to `scale-95` on mouse down, immediately followed by the auditory response for zero-latency cross-modal feedback.

### 2.3. Web Audio Synthesis Mandate
**Never introduce static audio files.**
The core premise of this project is procedural generation under the 80-permutation requirement. Every icon must have a mathematical base pitch hardcoded in `constants.js` that scales dynamically under the 4 Mood modifier functions in `useAudio.js` (Sine, Triangle, Square, Sawtooth + pitch multipliers).

## 3. Workflow Commit Standards
Whenever a new feature or design tweak is implemented, follow this strict cadence:
1. Modularize code if possible (e.g., fetching a Shadcn component to `src/components/ui`).
2. Update the `Version_History.md` if the change is structural.
3. Automatically execute `git add`, `git commit` with descriptive messages, and `git push` seamlessly.

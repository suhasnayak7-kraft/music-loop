# Project Version History: Interaction Sound Lab

This document tracks all major iterations, technical pivots, and feature implementations since the project's inception.

## [v2.0.0] - The Polished Engine
**Date:** 2026-02-23  
**Focus:** Design Systems, Modularization, Personalization

### Added
- **Dynamic Color Categories:** Grouped the 20 icons into 4 distinct Tailwind semantic groupings (Blue, Rose, Violet, Emerald) to act as visual cues for the auditory feedback pitch ranges (Nav = Mid, Data = Deep, System = High-Mid, Utils = High).
- **Responsive Navigation:** Converted the desktop Mood Tabs to a native Shadcn UI dropdown on mobile devices for better space management.
- **Topography Customization:** Connected Google Fonts API alongside a Shadcn UI header dropdown to hot-swap between 5 brand fonts (Inter, Poppins, Roboto, Space Grotesk, Urbanist).
- **Native Dark Mode:** Implemented a full React Context/Tailwind `dark:` variant logic toggle allowing users to swap the entire UI between Day/Night modes, complete with custom styled dark variant borders and backgrounds.
- **Interaction Enhancements:** Replaced custom bezier curves with standard `ease-in-out` transitions and added fluid `hover:scale-105` interaction feedback across grid items and mood tabs.

### Refactored
- **Codebase Modularization:** Destroyed the monolithic `App.jsx` file, extracting the UI into reusable components: `MoodSelector.jsx`, `ActiveVisualizer.jsx`, `HeaderControls.jsx`, and `IconGrid.jsx`.
- **Documentation Overhaul:** Moved all reference documents to a centralized `/docs` directory and updated the `README.md` to reflect the lab tools scope instead of the outdated Beat Maker scope.

---

## [v1.0.0] - The Synthesizer Pipeline
**Date:** 2026-02-23  
**Focus:** The 80 Auditory Permutations 

### Added
- **Web Audio Infrastructure:** Built the initial custom `useAudio.js` hook, correctly bypassing browser autoplay policies through a one-off `useEffect` interaction listener.
- **20 Unique Frequencies:** Ditched generic pitch mapping in favor of assigning every single Lucide icon a hard-coded bespoke Herzt pitch in `constants.js` (e.g., Delete is deeply pitched at 220Hz, whereas Create is pitched joyfully at 680Hz).
- **The 4 Mood Operators (The 80 Permutations):** Completed the complex mathematical physics engine binding. The 4 moods behave as modifiers to the base frequencies:
    - **Neutral:** Sine wave, 0 pitch mod, 150ms drop.
    - **Playful:** Triangle wave, 1.5x exponential pitch slide upward, bouncy envelope.
    - **Secure:** Square wave, 0.4x pitch cut, 100Hz secondary pop transient, instantaneous fast decay envelope.
    - **Urgent:** Sawtooth wave, 1.25x pitch multiplier, double-trigger siren delay effect.

### Fixed
- Identified and fixed a fatal white-screen build bug in Vite caused by a missing dictionary export map in `App.jsx`.

---

## [v0.1.0] - Project Inception to Pivot
**Date:** 2026-02-23  
**Focus:** Planning and Foundation

### Initial Goal
- The project began conceptually as a "Sound to Loop Beat Maker". Initial ideation included audio file exports, database configurations with Supabase, a backend UI for sample libraries, and 16-step sequencing algorithms.

### Pivot
- Based on the user's `Design_Requirements.md` submission, the scope was aggressively scoped down and pivoted to become the **Interaction Sound Lab**. 
- Supabase integrations and external `.mp3/.wav` sound libraries were scrapped in favor of a purely procedural frontend application focusing exclusively on programmatic UX/UI feedback sounds using the Web Audio API.

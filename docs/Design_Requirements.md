# Design Requirements Document (DRD)

## Project: Interaction Sound Lab UI

### 1. Executive Summary

- **Product Name:** Interaction Sound Lab
- **Objective:** To provide an interactive, web-based tool for UX designers, developers, and stakeholders to test, preview, and process procedural auditory feedback across different UI states and application "moods."
- **Platform:** Web (Desktop optimized, fully responsive mobile dropdowns)
- **Tech Stack:** React 18, Vite, Tailwind CSS, Shadcn UI, Native Web Audio API

### 2. Core Features

- **Thematic "Mood" Switching:** Users can toggle between 4 distinct audio profiles that completely alter the synthesizer parameters. Responsive layout utilizing Shadcn `<Select>` on mobile and native tabs on desktop.
- **Topography Customization:** A top-level dropdown allowing users to hot-swap between 5 Google Fonts (Inter, Poppins, Roboto, Space Grotesk, Urbanist) to see how sound pairs with typography styles.
- **Dark Mode Support:** Built-in semantic dark mode toggle applying strict Tailwind `dark:` variant standards to backgrounds, borders, and typography.
- **Standardized Icon Grid:** A 20-icon grid representing high-frequency user actions, categorized logically into 4 semantic groups.
- **Procedural Audio Synthesis:** Real-time sound generation using the Web Audio API (zero pre-recorded files, generating 80 mathematically distinct sound permutations).
- **Cross-Modal Visual Feedback:** An active visualizer and grid component that dynamically changes its color class based on the category interacted with, pulsing in sync with the audio.

### 3. UI/UX Specifications

#### 3.1. Layout Structure
- **Global Controls:** High-level flex container housing Typography Selector and Light/Dark Mode switch. 
- **Header:** Centered title and brief instructional subtitle.
- **Navigation (Moods):** A pill-shaped segmented control containing 4 mood tabs (collapses to Shadcn dropdown on mobile).
- **Active Visualizer:** A large, central circular indicator that pulses upon interaction.
- **Icon Grid:** A modular 4-column layout (on desktop) grouping icons into 4 distinct functional categories.

#### 3.2. Visual Styling & Semantic Components
- **Base Theme:** Clean, modern, "SaaS-like" aesthetic with smooth `ease-in-out` transitions.
- **Semantic Colors:**
  - **Navigation Category:** Blue semantic scale (`blue-500` default).
  - **Data Actions Category:** Rose semantic scale (`rose-500` default).
  - **User/System Category:** Violet semantic scale (`violet-500` default).
  - **Utilities Category:** Emerald semantic scale (`emerald-500` default).

**Icon Containers (Squircles):**
- **Size:** 64x64px (`w-16 h-16`).
- **Shape:** Highly rounded corners (`rounded-2xl`).
- **Default State:** Semantic border tint on hover, `scale-105` pop effect using `ease-in-out` curves.
- **Active/Selected State:** Semantic ring border, scale down (`scale-95`).

### 4. Audio & Synthesizer Specifications (V2)

The system utilizes mathematically generated `OscillatorNode` and `GainNode` architectures to procedurally generate sound.

#### 4.1. The 20 Base Frequencies
Instead of generic grouping, every single icon has a hardcoded, highly specific base pitch mapping ranging from 200Hz to 680Hz (See `constants.js` for full mapping).

#### 4.2. Mood Profiles (The 80 Permutations)
The 4 Moods act as mathematical modifiers against the 20 base frequencies to yield 80 unique tones.

| Mood Tab | Industry Fit | Waveform | Engine Physics |
| :--- | :--- | :--- | :--- |
| **Neutral** | OS, Dashboards | Sine | Smooth attack, quick fade. Unobtrusive digital blip. Duration: 150ms. |
| **Playful** | Social, Games | Triangle | Bouncy. Drastic exponential frequency slide upward (pitch bend 1.5x). Duration: 300ms. |
| **Secure** | Fintech, Security | Square | Heavy pitch modifier (0.4x). Extremely fast decay (a solid metallic "thud"). Appends a secondary 100Hz "pop" transient for weight. |
| **Urgent** | Healthcare, Alerts | Sawtooth | Sharp, piercing. High pitch modifier (1.25x). Engine triggers a detuned double-pulse pattern (siren). |

### 5. Interaction Lifecycle Framework
1. **User Gesture:** Click event captured.
2. **Context Unlock:** Hidden `AudioContext` initializes (bypassing browser autoplay blocks).
3. **State Mutators:** React sets Active Icon, Active Colors, and `isPlaying=true`.
4. **Synthesis Engine:** `playTone()` executes Web Audio API math.
5. **Animation Frame:** React removes `isPlaying` state after 300ms timeout to clear visualizer ping/pulse css classes.

---
**Reference Documents:**
- Setup & Explanations: `docs/Beginner_Guide.md`
- Figma Handoff & Typography: `docs/Figma_Tokens.md`
- Project Changelog: `docs/Version_History.md`

**Document Version:** 2.0

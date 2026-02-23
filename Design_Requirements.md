# Design Requirements Document (DRD)

## Project: Interaction Sound Lab UI

### 1. Executive Summary

- **Product Name:** Interaction Sound Lab
- **Objective:** To provide an interactive, web-based tool for UX designers, developers, and stakeholders to test, preview, and compare procedural auditory feedback across different UI states and application "moods."
- **Platform:** Web (Desktop optimized, mobile-responsive)

### 2. Core Features

- **Thematic "Mood" Switching:** Users can toggle between 4 distinct audio profiles that completely alter the synthesizer parameters.
- **Standardized Icon Grid:** A 20-icon grid representing high-frequency user actions, categorized logically.
- **Procedural Audio Synthesis:** Real-time sound generation using the Web Audio API (no pre-recorded .mp3 or .wav files).
- **Visual Audio Feedback:** An active visualizer that pulses and highlights to synchronize visual feedback with the audio output.

### 3. UI/UX Specifications

#### 3.1. Layout Structure
- **Header:** Centered title and brief instructional subtitle.
- **Navigation (Moods):** A pill-shaped segmented control containing 4 mood tabs.
- **Active Visualizer:** A large, central circular indicator that pulses upon interaction.
- **Icon Grid:** A 4-column layout (on desktop) grouping icons into 4 distinct functional categories.

#### 3.2. Visual Styling & Components
- **Base Theme:** Clean, modern, "SaaS-like" aesthetic.
- **Background:** Light Slate (`bg-slate-50`).
- **Accent Color:** Vibrant Pink (`pink-500` for active states, `pink-300` for borders, `pink-50` for hover backgrounds).

**Icon Containers (Squircles):**
- **Size:** 64x64px (`w-16 h-16`).
- **Shape:** Highly rounded corners (`rounded-2xl`).
- **Default State:** White background, subtle slate border.
- **Hover State:** Pink background tint, shadow elevation, slight upward translation (`-translate-y-1`).
- **Active/Selected State:** Pink ring border, scale down (`scale-95`).

#### 3.3. Information Architecture (Icon Groupings)
Icons are strictly categorized into 4 groups of 5:
- **Navigation:** Back, Home, Menu, Reject (X), Correct (Check)
- **Data Actions:** Delete, Edit, Create (+), Search, Filter
- **User & System:** Profile, Settings, Notify, Logout, View
- **Utilities:** Share, Download, Upload, Refresh, Options

### 4. Audio & Synthesizer Specifications

The system utilizes an oscillator node and a gain node to procedurally generate sound.

#### 4.1. Base Frequencies (Action Types)
- **Positive/Forward Actions** (Correct, Create, Upload, Home): High pitch (600Hz).
- **Negative/Destructive/Backward Actions** (Reject, Delete, Logout, Download): Low pitch (200Hz).
- **Neutral Actions** (All others): Mid pitch (400Hz).

#### 4.2. Mood Profiles (Waveforms & Envelopes)

| Mood Tab | Industry Fit | Waveform | Envelope / Characteristics |
| :--- | :--- | :--- | :--- |
| **Neutral / System** | OS, Dashboards | Sine | Smooth attack, quick fade. Unobtrusive digital blip. Duration: 150ms. |
| **Playful / Pop** | Social, Games | Triangle | Bouncy. Exponential frequency slide upward (pitch bend). Duration: 300ms. |
| **Secure / Trust** | Fintech, Security | Square | Heavy, lower pitch modifier (0.5x). Fast attack and fast decay (a solid "thud"). Duration: 100ms. |
| **Urgent / High-Vis** | Healthcare, Alerts | Sawtooth | Sharp, piercing. Higher pitch modifier (1.2x). Triggers a double-beep pattern. |

### 5. Technical Requirements

- **Framework:** React (Functional components, Hooks).
- **Styling:** Tailwind CSS.
- **Icons:** `lucide-react` (SVG-based).
- **Audio:** Native Browser Web Audio API (`AudioContext`, `OscillatorNode`, `GainNode`).
- **State Management:** React `useState` (for active mood, active icon, playing state) and `useRef` (for audio context initialization).
- **Browser Policy Handling:** Must require a user gesture (`onClick`) to initialize `AudioContext` to bypass browser autoplay restrictions.

---
**Document Version:** 1.0

# Interaction Sound Lab

Interaction Sound Lab is a web application designed to help developers and UI/UX designers test and compare procedural auditory feedback for UI interactions. It generates distinct, dynamic computer-synthesized sounds (not pre-recorded files) based on icon context and user mood using the native Web Audio API.

## Features

- **Procedural Sound Generation:** Uses mathematical Web Audio API oscillators and ADSR envelopes instead of `.mp3` files for zero-latency auditory feedback.
- **80 Distinct Sound Permutations:** Maps 20 unique base frequencies to robust icon categories, modified dynamically by 4 distinct "Mood" wave/pitch combinations.
- **Mood Modifiers:**
  - **Neutral / System:** Smooth sine wave `blips`
  - **Playful / Pop:** Bouncy triangle wave pitch slides
  - **Secure / Trust:** Weighted, metallic square wave `thuds`
  - **Urgent / High-Vis:** Siren-like sawtooth double-pulses
- **Category Styling:** Dynamically updates UI color palettes (Blue, Rose, Violet, Emerald) based on the current frequency grouping for cohesive cross-modal feedback.

## Setup Instructions

1. **Prerequisites:** Ensure you have Node.js installed.
2. **Install Dependencies:**
   ```bash
   npm install
   ```
3. **Run the Development Server:**
   ```bash
   npm run dev
   ```
   *Navigate to `http://localhost:5173/` in your browser.*

4. **Build for Production:**
   ```bash
   npm run build
   ```

## Documentation & Resources

Various project documents have been gathered in the `docs/` folder:

- [Beginner's Guide (How the Math/Code Works)](docs/Beginner_Guide.md)
- [Figma Design Tokens & Styling Details](docs/Figma_Tokens.md)
- [Initial Design Requirements](docs/Design_Requirements.md)

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Shadcn UI
- Lucide React (Icons)
- Native Web Audio API
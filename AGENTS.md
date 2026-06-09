# Rural Utility Cost - Agent Instructions

## Core Identity & Tone
- **Persona:** Act as a precise, practical, and highly organized Software Engineer specializing in rural logistics and utility-focused applications.
- **Tone:** Professional, straightforward, and clinical. Avoid marketing fluff or overly promotional language. 
- **Goal:** Instill confidence through technical accuracy, simplicity, and systematic organization. Focus purely on functional outcomes.

## Ecosystem Architecture Constraints
- **Centralized Legal/Brand:** All subdomains (like Transport) belonging to the `ruralutilitycost.com` ecosystem must rely on the centralized legal and about pages setup in `config/legal.ts`.
- **Disclaimer Enforcement:** Every calculator built must include the `<CalculatorDisclaimer />` component or an equivalent disclaimer notice natively.
- **Data Privacy & Storage:** Prefer browser `localStorage` for simple preferences (like Favorites). Do not build external monolithic databases for simple estimators unless specifically requested.

## Design System (Clean Utility / Minimal)
- **Palette:** 
  - Primary: Deep Blue (`#1e3a8a`, `blue-900`/`blue-800`).
  - Secondary: Earthy Green (`#4d7c0f`).
  - Backgrounds: Very light grays/slates (`bg-slate-50`, `bg-white`).
- **Typography:** `Inter` for general UI, sometimes monospace for raw data outputs. Semantic layout using `text-slate-900` for headers and `text-slate-600` for body.
- **Structure:** Card-heavy layouts (`border-slate-200`, `rounded-xl`, `shadow-sm`). High contrast for results, clear distinction between inputs and outputs.
- **Anti-Pattern:** Do not use gradient text, heavy drop shadows, or unnecessary animations. 

## Code Standards
- **Framework:** React + Vite + TypeScript + Tailwind CSS.
- **Icons:** Use `lucide-react` exclusively.
- **Structure:** Highly componentized. Separate complex calculation logic into pure functions when appropriate. Keep UI views pure and declarative.

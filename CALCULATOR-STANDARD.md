# Calculator Standard Operating Procedure (SOP)

This document outlines the standard architecture, design patterns, and legal requirements for developing any calculator or estimator within the **Rural Utility Cost** ecosystem.

## 1. Structural Pattern
Every calculator must follow a strict input/output separation pattern:
- **Header:** Include an identifying icon, title, and a clear, 1-2 sentence description.
- **Input Area:** Form fields must be clearly labeled with units specified (e.g., "Distance (Miles)", "Cost per Mile ($)").
- **Result Area:** The outcome must be visually distinct, typically utilizing a slightly shaded background (e.g., `bg-slate-50`) with large, highly legible typography for the final number.
- **Disclaimer Area:** The component `<CalculatorDisclaimer />` MUST be injected at the bottom of the calculator card to fulfill legal requirements.

## 2. Technical Stack
- **State Management:** Use standard React `useState` hooks for input values. Keep values as string representations of numbers in state to handle empty inputs cleanly, converting to floats/ints during calculation.
- **Responsiveness:** Inputs should stack on mobile (`grid-cols-1`) and align horizontally or in a grid on larger screens (`md:grid-cols-2`).
- **Data Validation:** Use HTML attributes (`min="0"`, `step="any"`) to prevent erroneous negative inputs or invalid characters where appropriate.

## 3. Theming & Styling (Clean Utility)
- **Input Fields:** Use standard borders (`border-slate-300`), rounded corners (`rounded-md`), and clear focus rings (`focus:ring-[#1e3a8a]`).
- **Results:** Emphasize the primary result using the secondary brand color if appropriate (e.g., text-green-700 or `#4d7c0f` for positive financial outcomes).
- **Labels:** Use small, bold, uppercase tracking formats for data labels (e.g., `text-xs font-bold text-slate-700 uppercase tracking-wider`).

## 4. Legal & Compliance
As defined in the ecosystem guidelines, calculators are **Decision Support Tools** only. Never imply that the tool provides an absolute or guaranteed figure.

All calculators must import and render the `CalculatorDisclaimer` component:
```tsx
import { CalculatorDisclaimer } from '../../components/shared/CalculatorDisclaimer';

// ... inside the calculator layout
<CalculatorDisclaimer />
```

## 5. Extensibility
If a calculator involves complex, multi-step math (e.g., complex depreciation algorithms, multi-stop routing algorithms), extract the calculation logic into a testable pure function located in `src/lib/calculators/` rather than bloating the React component.

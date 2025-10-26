## Repository quick-start for AI coding assistants

This repo is a small Create React App-based personal website. The goal of these instructions is to help an AI coding agent be immediately productive making UI/UX or content changes, running builds, and preparing the site for GitHub Pages.

- Project type: Create React App (react-scripts). Key scripts live in `package.json`.
- Local dev: `npm start` (runs `react-scripts start`).
- Production build: `npm run build` (runs `react-scripts build`).
- Prepare for GitHub Pages: `npm run prep` — this runs the build then moves the generated `build` folder to `docs/` (the repo uses `docs/` as the published site directory).

Why these matter:
- The `prep` script is the canonical deployment step — CI or a maintainer will usually run it and then push the `docs/` folder. Do not manually move files unless you understand this flow.

Architecture & important files
- `src/` contains all React source. Entry: `src/index.jsx` -> `src/App.jsx`.
- Component folder: `src/components/` — small, focused components (examples:
  - `Header.jsx` — avatar + typed headings using MUI `Typography` and local `images/panda.jpg`.
  - `ContactChips.jsx` — uses MUI `Chip` and icons from `@mui/icons-material`.
  - `TechChips.jsx` — uses `react-icons/si` with a `techStack` array and a small presentational `RoundedIconChip` in `src/components/ui/`.

Patterns & conventions to follow
- UI library: Material-UI (MUI) is used throughout. New components should prefer MUI primitives (Stack, Box, Typography, Chip) and the `sx` prop for styling, consistent with current code.
- Icon usage: two patterns exist:
  - MUI icons: `import GitHubIcon from '@mui/icons-material/GitHub'` (used in `ContactChips.jsx`).
  - react-icons for brand/tech icons: `import { SiPython } from 'react-icons/si'` and usage via `<SiPython size={18} color={...} />` (see `TechChips.jsx`). Match whichever pattern fits the icon set.
- The project uses functional components and default exports. Keep new components simple, colocate small components under `src/components/` and UI primitives under `src/components/ui/`.
- The theme is created in `App.jsx` using MUI `createTheme({ palette: { mode: 'dark' } })`. Use the theme and `ThemeProvider` for color/typography decisions.

Build, test, and verification notes
- Unit/integration tests: `npm test` uses react-scripts test runner. Tests are minimal; run them after making changes that alter behavior.
- Quick verification after UI edits:
  1. `npm start` and inspect http://localhost:3000.
 2. `npm run build` then `npm run prep` to create `docs/` and verify the static files appear in `docs/index.html`.

Integration points & external deps
- MUI: `@mui/material` and `@mui/icons-material` (styling & components).
- react-icons: used for tech icons in `TechChips.jsx` (package `react-icons`).
- No backend in this repo — everything is static front-end.

Common edits examples (copyable guidance)
- Add a new contact chip: edit `src/components/ContactChips.jsx`, add another `<Chip icon={<SomeIcon/>} label="..." component="a" href="..." />` and keep `variant="outlined"` for consistency.
- Add a new tech entry: in `src/components/TechChips.jsx` add an object to the `techStack` array — for example: `name: 'NewTech', color: '3776AB' (hex without #), icon: SiNew`. Import `SiNew` from `react-icons/si`.

Edge cases & gotchas
- Images live under `src/images/` and are imported directly (e.g., `import pandaImg from '../images/panda.jpg'`) — keep paths relative to the importing file.
- The `prep` script replaces `docs/` — don't store long-lived manual modifications in `docs/` because they will be overwritten by `npm run prep`.

Where to look first when debugging
- `src/App.jsx` — overall layout, theme provider, and page composition.
- `src/components/*` — individual UI bits.
- `package.json` — scripts (especially `prep`).

If uncertain, ask the maintainer for:
- preferred GitHub Pages publish branch/settings (if you plan to push `docs/`).
- whether to add new third-party dependencies (the repo is small and prefers minimal additions).

If you make changes, run: `npm start` (fast feedback) and `npm run prep` (verifies production output).

— End of instructions —
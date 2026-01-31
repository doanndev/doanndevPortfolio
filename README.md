<div align="center">
	<img src="/screenshot.png" alt="Terminal Dev Portfolio screenshot" width="1200" />
</div>

# Terminal Dev Portfolio

>A terminal-inspired developer portfolio with a boot-style typing animation, cyber-terminal theme, and clean responsive layout.

This repo contains a minimal, production-ready frontend built with React, TypeScript, Tailwind CSS and Vite. It showcases projects and experience in a terminal-like UI designed for engineers.

## Demo Screenshot

The screenshot above is referenced from `/screenshot.png` in the public folder — place your exported screenshot there and it will render in this README.

## Features

- Terminal-style boot animation with typed commands
- Staged reveal of UI sections (boot / banner / cards)
- Terminal aesthetic: blinking cursor, monospace UI, system stats
- Responsive layout with project cards and experience list
- Reusable components and small hook for boot sequence

## Tech Stack

- React 19 + TypeScript
- Tailwind CSS (v4) + Tailwind plugins
- Vite (dev server & build)
- React Router for client-side routing
- shadcn UI small components (progress)

## Quickstart (local)

1. Install dependencies

```bash
npm install
```

2. Start the dev server

```bash
npm run dev
```

3. Open http://localhost:5173 (or the port Vite reports)

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```
.
├── components/         # UI components (TerminalLayout, ProjectCard, etc.)
├── pages/              # Route pages: Home, Projects, Experience, Contact
├── hooks/              # Custom hooks (useBootSequence)
├── public/             # Static assets (images, favicon)
├── index.html          # App entry (includes inline tailwind config)
├── index.css           # Tailwind directives + styles
├── tailwind.config.cjs # Tailwind configuration
├── postcss.config.cjs  # PostCSS configuration
└── package.json
```

## Customize

- Replace images in `public/imgs/` or import images into `constants.tsx`.
- Update `PROJECTS_DATA` and `EXPERIENCE_DATA` in `constants.tsx`.
- Adjust colors/animation in `tailwind.config.cjs` and `index.css`.

## Notes

- The project uses a small module-level flag so the boot animation runs once per full page load (navigating inside the SPA won't replay it). If you'd like the animation to run once per session instead, switch to `sessionStorage` in the hook.

## Contributing

Contributions welcome. Open an issue or submit a PR with improvements or bug fixes.

## License

MIT

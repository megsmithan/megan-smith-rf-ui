# RainFocus UI Challenge — Megan Smith

A single-page event-management dashboard ("RainFocus Summit — Event setup guide")
built to match the provided Figma design.

## Tech stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **SCSS** (CSS Modules) — no CSS frameworks; all layout built from scratch
- **Inter** font, self-hosted via `next/font/google`

## Features

- Pixel-faithful reproduction of the Figma design
- Responsive from desktop down to 320px (sidebar collapses into a hamburger drawer)
- Light interactivity:
  - Clickable nav items (active state)
  - Typeable search field
  - Click "Edit event" or "Add Registration Workflow" to open a modal

## Running locally

Requires **Node.js 18+** (developed on Node 22).

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Then open **http://localhost:3000** in your browser.

## Production build (static export)

This project is configured for static export (`output: "export"`), which emits a
fully static site into the **`build/`** folder.

```bash
npm run build
```

To view the built site, serve the `build/` folder with any static file server:

```bash
npx serve build
```

…then open the URL it prints (e.g. http://localhost:3000). You can also open
`build/index.html` directly in a browser.

## Project structure

```
src/
  app/                  # Next.js App Router entry (layout, page, global styles)
  components/
    AppShell/           # Responsive 3-region shell + mobile drawer state
    IconRail/           # Thin left icon rail (logo, app icon, avatar)
    Sidebar/            # Nav panel: title, search, nav list
    MainPanel/          # Header, "Event setup guide", the Attendee module + cards
    Modal/              # Reusable modal
  data/                 # Nav + step content as plain data
public/icons/           # Exported icons & logo
```

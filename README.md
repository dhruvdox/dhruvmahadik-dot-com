# Dhruv Mahadik — portfolio

Single-page scroll site. Next.js 15 (App Router) + Tailwind CSS v4 + Framer Motion.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Design system

Tokens live in [`src/app/globals.css`](src/app/globals.css) under Tailwind v4's
`@theme` block — `red-brand`, `red-deep`, `near-black`, `paper`, `ink`.

Type: **Archivo Black** (display/labels), **Fraunces** (the one serif accent word
per section title), **Inter** (body). Loaded via `next/font/google`.

> The font CSS variables are set on `<html>`, not `<body>`. Tailwind's `@theme`
> resolves `--font-display` on `:root`; if the variables were defined on a
> descendant, that declaration would be invalid and silently fall back.

Shared primitives are in [`src/components/Primitives.tsx`](src/components/Primitives.tsx):
`Reveal`, `DiagonalRule`, `SectionTitle`, `Section`, `PhotoPlaceholder`.

The diagonal motif is used exactly twice — after About, and after the short film.

```bash
npm run typecheck   # TypeScript check without building
```

## Section order

Hero → Who I Am → Ventures → Work → Credentials → Music → Short Film → Off the Clock → Contact.
Composed in [`src/app/page.tsx`](src/app/page.tsx).

## Images

All site images live in [`public/images/`](public/images/). Next.js resizes and
compresses them automatically, so full-resolution JPG/PNG files are fine.

### Adding the Off the Clock photos (sailing, horses)

1. Put the photo in `public/images/`, e.g. `public/images/sailing.jpg`.
2. In [`src/components/OffTheClock.tsx`](src/components/OffTheClock.tsx), type the
   filename into that slot's `file` field:

   ```ts
   { file: "sailing.jpg", label: "Sailing", alt: "..." },
   ```

Leave `file` empty (`""`) and the slot shows a placeholder. Photos are cropped to a
3:4 portrait frame, centred. Filenames are case-sensitive once deployed.

The hero is an image-free gradient backdrop
([`HeroBackdrop.tsx`](src/components/HeroBackdrop.tsx)). A photo or video can sit
beneath it inside a `.duotone-wrap` to pick up the red/black treatment.

## Open questions for the client

1. **Stage name.** The brief says *Mach 1*, and the copy uses that. On Spotify the
   mixtape (*Breaking Coffins*) credits most tracks to **Fly Mach**, with *Destiny
   – Freestyle* credited to **Mach 1**. Confirm which to lead with.
2. **Steam Engine dates.** The momo truck is in the bio but not the CV, so its
   card shows a location rather than a period. Need start/end dates.
3. **Work history dates** are taken from the CV. Worth a read-through against the
   bio before this goes live.
4. **Music prominence.** Currently a full-weight section running hotter than the
   rest of the page. Easy to dial down once the hero asset lands.

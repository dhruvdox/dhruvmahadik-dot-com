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

The diagonal motif is used exactly twice — after About, and after Music.

## Section order

Hero → Who I Am → Ventures → Work → Credentials → Music → Off the Clock → Contact.
Composed in [`src/app/page.tsx`](src/app/page.tsx).

## Image slots still to fill

Every one is a `<PhotoPlaceholder>` labelled with what belongs there. Replace the
component with `next/image` at the same aspect ratio; `duotone` slots keep their
treatment via the `.duotone` / `.duotone-wrap` classes.

| Section | Slot |
| --- | --- |
| Hero | Full-bleed photo or looping video (duotone) |
| Ventures | Steam Engine truck · Marsera India · Hackathon / guest lecture |
| Music | Performance photo or clip (duotone) |
| Off the Clock | Sailing · Kerala, horses |

The hero currently renders a duotone gradient stand-in. Drop the real asset into
the same wrapper and the red/black treatment carries over unchanged.

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

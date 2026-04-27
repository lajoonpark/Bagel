# Bagels Beyond

A modern, responsive landing page for the **Bagels Beyond** bakery brand.

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- TypeScript
- Tailwind CSS v4
- Google Fonts: **Boogaloo** (headings) + **Nunito** (body), loaded via `<link>` tags

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Tailwind imports + brand theme tokens
│   ├── layout.tsx       # Root layout with font links + metadata
│   └── page.tsx         # Landing page (all sections)
└── components/
    ├── Button.tsx        # Primary & secondary button variants
    ├── SectionWrapper.tsx# Consistent section padding wrapper
    ├── MenuList.tsx      # Bagel menu column component
    └── BagelSVG.tsx      # SVG bagel illustration placeholder
```

## Sections

1. **Hero** — Orange full-screen with logo, subheading, CTA and bagel illustration
2. **Feature Strip** — Hand Rolled · Baked Fresh Daily · No Preservatives
3. **Deal** — The 6 Bagel Deal with CTA
4. **Menu** — Classic and Unique flavour columns
5. **Trust** — Star rating, "Loved by locals", Addington location
6. **Footer** — Business name, location, nav links

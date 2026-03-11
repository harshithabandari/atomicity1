This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

---

## Challenge Notes

**Feature chosen:** A set of animated cards representing CPU usage, memory usage, and cost savings, inspired by the 0:30–0:40 portion of the product video. I picked this section because it allowed inclusion of count‑up numbers, hover effects and a clear data-driven design that felt like a typical product feature panel.

**Animation approach:** Scroll‑based animations using Framer Motion. The parent container uses `whileInView` with staggered child variants to fade/slide cards in. Numbers are animated via a custom `AnimatedNumber` component that drives a `motion.span` with a hidden `val` property, updating state on each frame. Intersection tracking leverages Framer’s built‑in `useInView` hook to avoid external dependencies.

**Tokens and styles:** Tailwind CSS provides the styling tokens (spacing, colors, typography). I used a design‑system‑like palette (indigo accents, zinc backgrounds, dark mode) directly via Tailwind utility classes. Reusable components (`Card`, `AnimatedNumber`, `Providers`) encapsulate styles and behavior; icons are hard‑coded emoji for simplicity.

**Data fetching & caching:** Implemented a mock API route (`/api/metrics`) returning random values. React Query (`@tanstack/react-query`) handles fetching and caching. A `Providers` client component wraps the app’s layout and instantiates a `QueryClient`. Queries use the v5 object syntax with `refetchOnWindowFocus: false`.

**Libraries used:**
- **Next.js** – framework with built‑in routing and API routes.
- **React** & **TypeScript** – type safety and component model.
- **Framer Motion** – preferred for animations and scroll triggers.
- **Tailwind CSS** – utility‑first styling ensures responsive layouts quickly.
- **@tanstack/react-query** – simplifies async data management and caching.

The only external UI dependency is Tailwind; everything else is custom to demonstrate component-building skills.

**Tradeoffs / decisions:**
- I avoided heavy packages like `react-intersection-observer` by leaning on Framer Motion for view detection. That reduced bundle size but required some TypeScript casting hacks.
- The design is kept minimal; with more time I’d replace emojis with SVG icons and refine the color palette.
- I chose a client component for animations to keep the server components simple, which necessitated a React Query provider in a separate client component to avoid serialization errors.

**Future improvements if more time:**
1. Add real API integration with live metrics and WebSocket updates.
2. Implement better accessibility (ARIA roles, keyboard focus states).
3. Introduce a dark/light theme toggle.
4. Extract design tokens into a central config file to allow theming.
5. Add unit/integration tests for components and hooks.

---

## Deploy on Vercel

This project is currently live at: https://atomicity1-tu9a.vercel.app

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

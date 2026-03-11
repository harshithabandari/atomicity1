import Image from "next/image";
import FeatureSection from "../components/FeatureSection";


export default function Home() {
  return (
    <div className="bg-zinc-50 dark:bg-black font-sans">
      {/* hero area */}
      <header className="flex flex-col items-center justify-center min-h-screen px-8 py-24 text-center">
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight text-zinc-900 dark:text-zinc-50">
          Atomicity Frontend Challenge
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl">
          A scroll‑triggered animated section built with Next.js, Framer Motion,
          React Query and Tailwind CSS. Resize the window or view on mobile to
          see responsive behaviour.
        </p>
      </header>

      {/* main content with feature section */}
      <main className="relative z-10 mx-auto max-w-5xl px-6 pb-32">
        <FeatureSection />
      </main>

      {/* optional footer/hints */}
      <footer className="text-center py-6 text-sm text-zinc-500 dark:text-zinc-400">
        Scroll to reveal the cards above ↓
      </footer>
    </div>
  );
}

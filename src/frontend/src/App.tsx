import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export default function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "dark bg-neutral-950" : "bg-white"
      }`}
    >
      {/* Header */}
      <header className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 backdrop-blur-sm bg-white/80 dark:bg-neutral-950/80 border-b border-neutral-100 dark:border-neutral-800">
        <span className="font-bold text-lg tracking-tight text-neutral-900 dark:text-white">
          Jelle van Meerendonk
        </span>
        <button
          type="button"
          data-ocid="darkmode.toggle"
          onClick={() => setIsDark(!isDark)}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          className="p-2 rounded-full text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </header>

      {/* Main */}
      <main className="flex flex-col items-center px-4 py-12 md:py-20">
        {/* Hero Image */}
        <div className="w-full max-w-3xl mx-auto mb-12 md:mb-16">
          <img
            src="/assets/poke_game.jpg"
            alt="Poke a Nose — illustrated black and white artwork by Jelle van Meerendonk"
            className={`w-full h-auto block rounded-sm transition-all duration-300 ${
              isDark ? "invert" : ""
            }`}
          />
        </div>

        {/* Text content */}
        <div className="text-center max-w-xl mx-auto space-y-5">
          <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tight text-neutral-900 dark:text-white leading-none">
            Poke a Nose
          </h1>
          <p className="text-lg md:text-xl font-semibold text-neutral-700 dark:text-neutral-200">
            A video game by Jelle van Meerendonk
          </p>
          <div className="pt-4">
            <a
              href="https://www.pokeanose.com/"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="hero.primary_button"
              className="inline-block px-8 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold text-sm rounded-full hover:opacity-80 transition-opacity"
            >
              Visit Poke A Nose
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 py-8 text-center text-xs text-neutral-400 dark:text-neutral-600 border-t border-neutral-100 dark:border-neutral-800">
        <p>© 2026</p>
      </footer>
    </div>
  );
}

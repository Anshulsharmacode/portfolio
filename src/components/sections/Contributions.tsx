"use client";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";

export function Contributions() {
  const { resolvedTheme } = useTheme();

  return (
    <section
      id="contributions"
      aria-labelledby="contributions-heading"
      className="portfolio-section"
    >
      <div className="mb-10 flex items-baseline justify-between gap-6">
        <h2
          id="contributions-heading"
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Open Source
        </h2>
        <a
          href="https://github.com/Anshulsharmacode"
          target="_blank"
          rel="noopener noreferrer"
          className="text-link shrink-0 text-sm"
        >
          GitHub <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className="w-full border-b border-border/60 pb-9 md:pb-10">
        <div className="w-full overflow-x-auto pb-2">
          <GitHubCalendar
            username="Anshulsharmacode"
            colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
            theme={{
              light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
              dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
            }}
            blockSize={14}
            blockMargin={4}
            fontSize={12}
          />
        </div>
      </div>
    </section>
  );
}

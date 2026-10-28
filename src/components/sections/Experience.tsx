import { experienceDisplayData } from "@/constants/experience";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="portfolio-section"
    >
      <div>
        <h2
          id="experience-heading"
          className="mb-10 text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Experience
        </h2>

        <ol className="divide-y divide-border/60">
          {experienceDisplayData.map((item) => (
            <li key={item.id} className="py-9 first:pt-0 last:pb-0 md:py-10">
              <article>
                <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-4 sm:gap-y-1">
                  <h3 className="text-2xl font-bold tracking-tight">
                    {item.website ? (
                      <a
                        href={item.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-sm underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                      >
                        {item.companyName}
                      </a>
                    ) : (
                      item.companyName
                    )}
                  </h3>
                  <p className="text-sm font-semibold text-muted-foreground">
                    {item.role}
                  </p>
                  {(item.fromDate || item.toDate) && (
                    <p className="text-sm text-muted-foreground">
                      {[item.fromDate, item.toDate].filter(Boolean).join(" – ")}
                    </p>
                  )}
                </div>

                <p className="mt-4 max-w-4xl text-base leading-relaxed text-foreground">
                  {item.summary}
                </p>
                {item.additionalSummary && (
                  <p className="mt-4 max-w-4xl text-base leading-relaxed text-foreground">
                    {item.additionalSummary}
                  </p>
                )}

                <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm leading-relaxed text-muted-foreground">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex max-w-full items-start gap-2.5">
                      <span aria-hidden="true" className="shrink-0">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

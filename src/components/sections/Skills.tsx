"use client";
import { skillCategories } from "@/constants/constant";
import { Star } from "@/components/vectors";

export function Skills() {
  return (
    <section className="relative mx-4 my-12 overflow-hidden rounded-3xl bg-gradient-to-b from-secondary/10 via-background to-background px-6 py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <h2 className="flex items-center justify-center gap-4 text-4xl font-display font-bold md:text-5xl">
            <Star className="w-8 h-8 text-secondary" />
            Skills & Tools
            <Star className="w-8 h-8 text-secondary" />
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
            Technologies I use to build full-stack apps, AI integrations, and production-ready systems.
          </p>
        </div>

        <div className="divide-y divide-border/70 rounded-2xl border border-border/60 bg-background/60 backdrop-blur-sm">
          {skillCategories.map((cat, idx) => {
            const CategoryIcon = cat.icon;
            return (
              <div key={idx} className="grid grid-cols-1 gap-4 p-5 md:grid-cols-12 md:gap-6 md:p-6">
                <div className="md:col-span-3">
                  <div className="inline-flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <CategoryIcon className="h-5 w-5" />
                    </span>
                    <h3 className="font-display text-xl font-bold text-foreground">
                      {cat.title}
                    </h3>
                  </div>
                </div>

                <div className="md:col-span-9">
                  <div className="flex flex-wrap gap-2.5">
                    {cat.skills.map((skill, sIdx) => {
                      const SkillIcon = skill.icon;
                      return (
                        <span
                          key={sIdx}
                          className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-primary/10"
                        >
                          <SkillIcon className="h-4 w-4 text-primary" />
                          {skill.label}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground">
          <span className="rounded-full border border-border bg-background px-3 py-1">
            Core stack + AI workflows
          </span>
          <span className="rounded-full border border-border bg-background px-3 py-1">
            APIs, cloud, and database foundations
          </span>
          <span className="rounded-full border border-border bg-background px-3 py-1">
            Git-first delivery
          </span>
        </div>
      </div>
    </section>
  );
}

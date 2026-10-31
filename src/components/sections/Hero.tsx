import Image from "next/image";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="flex min-h-[88svh] items-center py-20 md:py-28"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
        <div>
          <h1
            id="hero-heading"
            className="text-6xl font-black leading-[0.98] tracking-[-0.055em] text-[#111111] sm:text-7xl lg:text-8xl dark:text-white"
          >
            Anshul
            <br />
            <span className="text-[#adadab]">Sharma</span>
          </h1>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Software engineer building thoughtful applications and practical AI
            solutions.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#experience"
              className="inline-flex min-h-12 items-center justify-center bg-foreground px-7 py-3 font-medium text-background transition-colors hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
            >
              View work
            </a>
            <a
              href="https://drive.google.com/file/d/1Jx1HCYuP33tTLKH5dn7swsfQg-D2-Cf5/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resume (opens in a new tab)"
              className="inline-flex min-h-12 items-center justify-center gap-2 border border-foreground px-7 py-3 font-medium transition-colors hover:bg-foreground/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
            >
              Resume <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="relative aspect-[14/15] w-full max-w-md md:justify-self-end">
          <Image
            src="/image copy.png"
            alt="Anshul Sharma"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) calc(100vw - 32px), (max-width: 1024px) 45vw, 448px"
          />
        </div>
      </div>
    </section>
  );
}

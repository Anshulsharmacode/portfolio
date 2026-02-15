"use client";
import { Arrow, Star, Scribble } from "@/components/vectors";
import { FloatingElement } from "@/components/ui/floating-element";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex min-h-[88vh] flex-col justify-center overflow-hidden px-2 pt-28 pb-12 md:px-0 md:pt-24">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-8 md:grid-cols-2 md:gap-14">
        {/* Left: Text */}
        <div className="space-y-8 relative z-10 order-2 md:order-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card/80 px-3 py-1 text-sm font-medium text-primary backdrop-blur">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Available for new projects
            </div>
            <h1 className="text-5xl md:text-8xl font-display font-bold leading-[0.9] tracking-tight">
              Software
              <br />
              <span className="text-gradient relative">
                Engineer
                <Scribble className="absolute -bottom-4 left-0 w-full text-secondary opacity-45" />
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-md font-light mx-auto md:mx-0"
          >
            I build digital experiences that blend{" "}
            <strong className="text-foreground">biomedical insight</strong> with{" "}
            <strong className="text-foreground">
              modern software engineering
            </strong>
            .
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-3 justify-center md:justify-start"
          >
            <button
              onClick={() => scrollTo("work")}
              className="rounded-xl bg-foreground px-7 py-3.5 font-medium text-background shadow-lg transition-all hover:-translate-y-0.5 hover:bg-foreground/90 hover:shadow-xl"
            >
              See My Work
            </button>
            <button
              onClick={() =>
                window.scrollTo({
                  top: document.body.scrollHeight,
                  behavior: "smooth",
                })
              }
              className="rounded-xl border border-border bg-card/70 px-7 py-3.5 font-medium transition-colors hover:bg-secondary/10"
            >
              Contact Me
            </button>
            <a
              href="https://drive.google.com/file/d/1RSQXwN-lF9jSPgup2F2GXgQMaqEjNe6Y/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-border bg-card/70 px-7 py-3.5 font-medium text-primary transition-colors hover:bg-primary/10"
            >
              <FileText className="w-4 h-4" /> Resume
            </a>
          </motion.div>
        </div>

        {/* Right: Visual Playground */}
        <div className="relative h-[350px] md:h-[600px] w-full order-1 md:order-2 flex justify-center items-center">
          {/* Desktop Decorative Elements */}
          <div className="hidden md:block">
            <FloatingElement depth={1} className="absolute top-10 right-10">
              <div className="h-32 w-32 rounded-2xl bg-gradient-to-br from-secondary to-primary rotate-12 opacity-80 shadow-2xl" />
            </FloatingElement>

            <FloatingElement depth={2} className="absolute bottom-20 left-10">
              <div className="h-24 w-24 rounded-full border border-white/20 bg-gradient-to-br from-accent to-secondary opacity-80 shadow-xl" />
            </FloatingElement>

            <Star className="absolute top-20 left-20 text-accent w-12 h-12 animate-pulse" />
          </div>

          {/* Arrow - Repositioned to point from text to image on desktop */}
          <Arrow className="hidden md:block absolute bottom-1/4 -left-12 text-foreground w-20 h-20 rotate-[-45deg] z-20" />

          {/* Photo - Centered */}
          <FloatingElement depth={0.5} className="relative z-10">
            <div className="group relative h-80 w-64 rounded-2xl border border-border bg-card p-3 shadow-2xl transition-transform duration-500 hover:rotate-0 md:h-96 md:w-80 md:rotate-[-6deg]">
              <div className="relative h-full w-full overflow-hidden rounded-xl">
                <Image
                  src="/image.png"
                  alt="Anshul Sharma"
                  fill
                  className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  priority
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <span className="text-white font-display font-bold text-xl">
                    Anshul Sharma
                  </span>
                </div>
              </div>
            </div>
          </FloatingElement>
        </div>
      </div>
    </section>
  );
}

import { Hero } from "@/components/sections/Hero";
import { Work } from "@/components/sections/Work";
import { Contributions } from "@/components/sections/Contributions";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Footer } from "@/components/Footer";
import { ModeToggle } from "@/components/ModeToggle";
import { Blog } from "@/components/sections/Blog";

export default function Home() {
  return (
    <main className="relative w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-radial-soft" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-pattern [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" />
      <ModeToggle />
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <Hero />
        <div className="space-y-8 pb-12 md:space-y-10 md:pb-16">
          <Work />
          <Blog />
          <Contributions />
          <Skills />
          <Experience />
        </div>
      </div>
      <Footer />
    </main>
  );
}

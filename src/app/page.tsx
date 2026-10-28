import { Hero } from "@/components/sections/Hero";
import { Work } from "@/components/sections/Work";
import { Contributions } from "@/components/sections/Contributions";
// import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Footer } from "@/components/Footer";
import { ModeToggle } from "@/components/ModeToggle";
import { Blog } from "@/components/sections/Blog";

export default function Home() {
  return (
    <main className="relative w-full overflow-hidden bg-background">
      <ModeToggle />
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <Hero />
        <div className="[&>section]:border-t [&>section]:border-border/60">
          <Experience />
          <Blog />

          {/* <Work limit={3} /> */}
          <Contributions />
          {/* <Skills /> */}
        </div>
      </div>
      <Footer />
    </main>
  );
}

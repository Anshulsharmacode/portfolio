import Link from "next/link";
import { Work } from "@/components/sections/Work";
import { Footer } from "@/components/Footer";
import { ModeToggle } from "@/components/ModeToggle";

export const metadata = {
  title: "All Projects",
};

export default function ProjectsPage() {
  return (
    <main className="relative w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-radial-soft" />
      <ModeToggle />
      <div className="mx-auto max-w-[1400px] px-4 py-8 sm:px-6 lg:px-10">
        <Link
          href="/"
          className="mb-6 inline-block text-sm font-semibold text-primary hover:underline"
        >
          ← Back to home
        </Link>
        <Work />
      </div>
      <Footer />
    </main>
  );
}

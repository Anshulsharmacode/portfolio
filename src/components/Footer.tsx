"use client";
import { socialLinks } from "@/constants/constant";

export function Footer() {
  return (
    <footer className='mx-auto mb-6 mt-10 max-w-[1400px] px-4 sm:px-6 lg:px-10'>
      <div className='rounded-3xl border border-border/70 bg-foreground px-6 py-16 text-background md:px-10 md:py-20'>
        <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12'>
          <div className='space-y-6'>
            <h2 className='text-6xl md:text-8xl font-display font-bold tracking-tight'>
              Be in
              <br />
              Touch.
            </h2>
            <a
              href='mailto:anshulsharma8386@gmail.com'
              className='inline-block text-xl border-b border-background/20 pb-1 hover:border-background transition-colors'
            >
              anshulsharma8386@gmail.com
            </a>
          </div>

          <div className='flex flex-wrap gap-4'>
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target='_blank'
                rel='noopener noreferrer'
                className='px-6 py-3 rounded-full border border-background/20 hover:bg-background hover:text-foreground transition-all flex items-center gap-2 group'
              >
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>
        <div className='max-w-7xl mx-auto mt-14 pt-6 border-t border-background/10 flex justify-between text-sm text-background/60 font-mono'>
          <p>© {new Date().getFullYear()} Anshul Sharma</p>
          <p>Crafted with code.</p>
        </div>
      </div>
    </footer>
  );
}

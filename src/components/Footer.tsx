"use client";
import { socialLinks } from "@/constants/constant";

export function Footer() {
  return (
    <footer className='mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10'>
      <div className='mx-auto max-w-6xl border-t-2 border-foreground/25 py-16 md:py-28'>
        <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12'>
          <div className='space-y-6'>
            <h2 className='text-6xl font-black leading-[0.98] tracking-[-0.055em] md:text-8xl'>
              Be in
              <br />
              <span className="text-[#adadab]">Touch.</span>
            </h2>
            <a
              href='mailto:anshulsharma8386@gmail.com'
              className='inline-block max-w-full break-all border-b border-border pb-1 text-base transition-colors hover:border-foreground sm:text-xl'
            >
              anshulsharma8386@gmail.com
            </a>
          </div>

          <div className='flex flex-wrap gap-x-6 gap-y-2'>
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target='_blank'
                rel='noopener noreferrer'
                className='text-link'
              >
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>
        <div className='mx-auto mt-14 flex flex-wrap justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground'>
          <p>© {new Date().getFullYear()} Anshul Sharma</p>
        </div>
      </div>
    </footer>
  );
}

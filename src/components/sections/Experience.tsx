"use client";
import { internshipData } from "@/constants/constant";
import { Scribble } from "@/components/vectors";
import { motion } from "framer-motion";

export function Experience() {
  return (
    <section
      id='experience'
      className='rounded-3xl border border-border/70 bg-card/40 px-5 py-16 backdrop-blur-md md:px-8 md:py-20 relative overflow-hidden'
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className='max-w-5xl mx-auto relative z-10'>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='flex flex-col items-center mb-20 text-center'
        >
          <div className="flex items-center gap-4 mb-2">
            <h2 className='text-4xl md:text-5xl font-display font-bold tracking-tight'>Work Experience</h2>
            <Scribble className='w-20 md:w-24 text-primary opacity-80' />
          </div>
          <p className="text-muted-foreground max-w-lg">My professional journey and contract contributions in the software industry.</p>
        </motion.div>

        <div className='relative'>
          {/* Center Line (Desktop) with Gradient */}
          <div className='absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-border/60 to-transparent md:-translate-x-1/2' />

          <div className='space-y-16 md:space-y-24'>
            {internshipData.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-0 group ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content Half */}
                <div className='md:w-1/2 ml-16 md:ml-0 md:px-10'>
                  <div
                    className={`p-6 md:p-8 bg-card/50 border border-border/80 rounded-[2rem] shadow-xl hover:shadow-primary/5 hover:border-primary/30 transition-all duration-500 relative backdrop-blur-sm ${
                      i % 2 === 0 ? "md:text-left" : "md:text-right"
                    }`}
                  >
                    {/* Subtle Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]" />

                    {/* Arrow styling */}
                    <div
                      className={`absolute top-10 w-4 h-4 bg-card border-border rotate-45 
                              md:block hidden
                              ${
                                i % 2 === 0
                                  ? "-left-2 border-l border-b"
                                  : "-right-2 border-r border-t"
                              }
                           `}
                    />
                    {/* Mobile Arrow */}
                    <div className='md:hidden absolute top-10 -left-2 w-4 h-4 bg-card border-l border-b border-border rotate-45' />

                    <div
                      className={`flex flex-col gap-1 relative z-10 ${
                        i % 2 !== 0 ? "md:items-end" : ""
                      }`}
                    >
                      <div className={`flex items-center gap-3 mb-1 flex-wrap ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
                        <h3 className='text-2xl font-bold font-display tracking-tight'>
                          {item.role}
                        </h3>
                        <span className="text-[10px] uppercase tracking-widest bg-primary/10 text-primary px-2.5 py-1 rounded-full font-bold">
                          {item.modeOfWork}
                        </span>
                      </div>
                      
                      <p className='text-lg font-semibold text-primary/90'>
                        {item.companyName}
                      </p>
                      
                      <span className={`font-mono text-xs text-muted-foreground/80 mb-6 flex items-center gap-2 ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                        {item.fromDate} — {item.toDate}
                      </span>
                    </div>

                    <ul
                      className={`space-y-3 text-sm md:text-[15px] text-muted-foreground/90 relative z-10 ${
                        i % 2 !== 0 ? "md:flex md:flex-col md:items-end" : ""
                      }`}
                    >
                      {item.workDone.map((w, idx) => (
                        <li key={idx} className={`leading-relaxed flex gap-3 ${i % 2 !== 0 ? "flex-row-reverse text-right" : ""}`}>
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0 opacity-40" />
                          <span>{w}</span>
                        </li>
                      ))}
                    </ul>

                    {item.TechStack.length > 0 && (
                      <div
                        className={`mt-8 flex flex-wrap gap-2 relative z-10 ${
                          i % 2 !== 0 ? "md:justify-end" : ""
                        }`}
                      >
                        {item.TechStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className='text-[10px] font-mono bg-background/50 border border-border px-3 py-1 rounded-full group-hover:border-primary/20 group-hover:bg-primary/5 transition-all duration-300'
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Center Bead */}
                <div className='absolute left-8 md:left-1/2 -translate-x-1/2 top-10 flex items-center justify-center'>
                   <div className='w-5 h-5 rounded-full bg-background border-2 border-border flex items-center justify-center z-10 group-hover:border-primary transition-colors duration-500 shadow-sm'>
                    <div className='w-2 h-2 rounded-full bg-primary group-hover:scale-125 transition-transform duration-500' />
                  </div>
                  <div className="absolute w-12 h-12 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Empty Half for spacing */}
                <div className='md:w-1/2 hidden md:block' />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

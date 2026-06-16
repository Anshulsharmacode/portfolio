"use client";
import { internshipData, Internship } from "@/constants/constant";
import { Scribble } from "@/components/vectors";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Calendar, Briefcase, Sparkles } from "lucide-react";

export function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      id='experience'
      className='rounded-[2.5rem] border border-border/70 bg-card/40 px-4 py-16 backdrop-blur-md md:px-8 md:py-24 relative overflow-hidden'
    >
      {/* Dynamic Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[30rem] h-[30rem] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[20rem] h-[20rem] bg-secondary/5 rounded-full blur-[80px] pointer-events-none" />
      
      <div className='max-w-4xl mx-auto relative z-10'>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='flex flex-col items-center mb-12 md:mb-20 text-center'
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            My Journey
          </div>
          <div className="flex flex-col items-center gap-2 mb-6">
            <h2 className='text-4xl md:text-6xl font-display font-bold tracking-tight'>Work Experience</h2>
            <Scribble className='w-24 md:w-32 text-primary opacity-60' />
          </div>
          <p className="text-muted-foreground text-base md:text-xl max-w-xl leading-relaxed">
            Professional roles and contract work where I&apos;ve built scalable systems and AI-powered solutions.
          </p>
        </motion.div>

        <div className='space-y-4 md:space-y-6'>
          {internshipData.map((item, i) => (
            <ExperienceAccordionItem
              key={i}
              item={item}
              isOpen={expandedIndex === i}
              onToggle={() => toggleAccordion(i)}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceAccordionItem({ 
  item, 
  isOpen, 
  onToggle,
  index 
}: { 
  item: Internship; 
  isOpen: boolean; 
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`group overflow-hidden rounded-3xl border transition-all duration-500 ${
        isOpen 
          ? "border-primary/40 bg-primary/[0.03] shadow-2xl shadow-primary/5 ring-1 ring-primary/20" 
          : "border-border/60 bg-background/20 hover:border-primary/30 hover:bg-background/40"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full text-left p-6 md:p-8 flex items-start md:items-center justify-between gap-4 select-none"
      >
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 flex-1 min-w-0">
          <div className="flex flex-col min-w-0">
            <h3 className={`text-xl md:text-2xl font-bold font-display transition-colors duration-300 truncate ${isOpen ? "text-primary" : "text-foreground"}`}>
              {item.role}
            </h3>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-medium mt-1.5">
              <span className="text-primary font-bold">{item.companyName}</span>
              <span className="hidden md:block w-1 h-1 rounded-full bg-border" />
              <span className="text-muted-foreground/80 px-2 py-0.5 rounded-md bg-muted/50 border border-border/50 text-[11px] md:text-xs uppercase tracking-wider font-bold">
                {item.modeOfWork}
              </span>
            </div>
          </div>
          
          <div className="md:ml-auto flex items-center shrink-0">
            <div className="flex items-center gap-2 text-[11px] md:text-xs font-mono text-muted-foreground font-medium bg-background/60 px-4 py-1.5 rounded-full border border-border/60 group-hover:border-primary/20 transition-colors">
              <Calendar className="w-3.5 h-3.5 text-primary/70" />
              <span className="whitespace-nowrap">{item.fromDate} — {item.toDate}</span>
            </div>
          </div>
        </div>

        <div className={`shrink-0 w-10 h-10 rounded-2xl border border-border flex items-center justify-center transition-all duration-500 ${isOpen ? "rotate-180 bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/30" : "text-muted-foreground bg-background group-hover:border-primary/40 group-hover:text-primary"}`}>
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="px-6 pb-8 md:px-8 md:pb-10 pt-0 border-t border-primary/10">
              <div className="mt-8 space-y-8">
                <div>
                  <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-primary/80 mb-5 flex items-center gap-2.5">
                    <div className="w-4 h-[1px] bg-primary/30" />
                    <Briefcase className="w-3.5 h-3.5" />
                    Contributions & Impact
                  </h4>
                  <ul className="grid grid-cols-1 gap-4">
                    {item.workDone.map((bullet, idx) => (
                      <motion.li 
                        key={idx}
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 + (idx * 0.08) }}
                        className="flex gap-4 text-sm md:text-base leading-relaxed text-muted-foreground/90 group/item"
                      >
                        <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0 group-hover/item:bg-primary group-hover/item:scale-125 transition-all duration-300" />
                        <span className="group-hover/item:text-foreground transition-colors duration-300">{bullet}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {item.TechStack.length > 0 && (
                  <div>
                    <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-primary/80 mb-4 flex items-center gap-2.5">
                      <div className="w-4 h-[1px] bg-primary/30" />
                      Core Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2.5">
                      {item.TechStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3.5 py-1.5 text-[11px] font-mono rounded-xl border border-border bg-background/40 text-muted-foreground hover:border-primary/40 hover:bg-primary/5 hover:text-primary transition-all duration-300 cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

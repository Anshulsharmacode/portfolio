"use client";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { projectsData } from "@/constants/constant";
import { Arrow } from "@/components/vectors";
import { ChevronLeft, ChevronRight, ExternalLink, Github, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Work() {
  const allProjects = projectsData;
  const [activeGallery, setActiveGallery] = useState<{
    projectName: string;
    images: string[];
    currentIndex: number;
  } | null>(null);

  const openGallery = (project: (typeof projectsData)[number], startIndex = 0) => {
    if (!project.gallery.length) return;
    setActiveGallery({
      projectName: project.name,
      images: project.gallery,
      currentIndex: startIndex,
    });
  };

  const closeGallery = () => setActiveGallery(null);

  const showNextImage = () => {
    setActiveGallery((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        currentIndex: (prev.currentIndex + 1) % prev.images.length,
      };
    });
  };

  const showPreviousImage = () => {
    setActiveGallery((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length,
      };
    });
  };

  useEffect(() => {
    if (!activeGallery) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeGallery();
      if (event.key === "ArrowRight") showNextImage();
      if (event.key === "ArrowLeft") showPreviousImage();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeGallery]);

  return (
    <section id='work' className='py-24 px-6 relative bg-muted/30'>
      <div className='max-w-7xl mx-auto mb-12 flex justify-between items-end'>
        <div>
          <h2 className='text-4xl md:text-5xl font-display font-bold mb-4'>
            Featured Projects
          </h2>
          <p className='text-muted-foreground text-lg max-w-xl'>
            Technical projects focused on AI, full-stack development, and practical problem solving.
          </p>
        </div>
        <Arrow className='hidden md:block w-24 h-24 text-primary rotate-90' />
      </div>

      <BentoGrid className='max-w-7xl mx-auto'>
        {allProjects.map((project, i) => (
          <BentoGridItem
            key={i}
            title={project.name}
            description={
              <ProjectDescription
                project={project}
                onOpenGallery={() => openGallery(project)}
              />
            }
            header={
              <div className='relative -mx-4 -mt-4 mb-2 overflow-hidden border-b border-border/40 bg-muted/40'>
                {project.imageSrc ? (
                  <div className='relative aspect-[16/9] w-full'>
                    <Image
                      src={project.imageSrc}
                      alt={project.name}
                      fill
                      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                      className='object-contain p-2 transition-transform duration-500 group-hover:scale-[1.01]'
                    />
                  </div>
                ) : (
                  <div className='aspect-[16/9] w-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-5xl font-display opacity-30'>
                    {project.name.charAt(0)}
                  </div>
                )}
              </div>
            }
            className={`${i === 3 || i === 6 ? "md:col-span-2" : ""} overflow-hidden`}
            icon={
              <div className='flex gap-2 mb-2 items-center'>
                {project.techStacks
                  .split(/,|and/)
                  .slice(0, 3)
                  .map((t, idx) => (
                    <span
                      key={idx}
                      className='text-[10px] font-mono bg-primary/10 text-primary px-2 py-1 rounded-full border border-primary/20'
                    >
                      {t.trim()}
                    </span>
                  ))}
              </div>
            }
          />
        ))}
      </BentoGrid>

      {activeGallery && (
        <div
          className='fixed inset-0 z-50 bg-black/80 backdrop-blur-sm p-4 md:p-8'
          onClick={closeGallery}
        >
          <div
            className='relative mx-auto h-full w-full max-w-5xl rounded-xl border border-white/20 bg-black/70 p-4'
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type='button'
              className='absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/20'
              onClick={closeGallery}
              aria-label='Close gallery'
            >
              <X className='h-5 w-5' />
            </button>

            <p className='mb-3 pr-12 text-sm font-medium text-white/90'>
              {activeGallery.projectName}
            </p>

            <div className='relative h-[68vh] w-full overflow-hidden rounded-lg bg-black'>
              <Image
                src={activeGallery.images[activeGallery.currentIndex]}
                alt={`${activeGallery.projectName} screenshot ${activeGallery.currentIndex + 1}`}
                fill
                className='object-contain'
                sizes='100vw'
              />

              {activeGallery.images.length > 1 && (
                <>
                  <button
                    type='button'
                    className='absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white hover:bg-white/30'
                    onClick={showPreviousImage}
                    aria-label='Previous image'
                  >
                    <ChevronLeft className='h-5 w-5' />
                  </button>
                  <button
                    type='button'
                    className='absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white hover:bg-white/30'
                    onClick={showNextImage}
                    aria-label='Next image'
                  >
                    <ChevronRight className='h-5 w-5' />
                  </button>
                </>
              )}
            </div>

            <p className='mt-3 text-center text-xs text-white/80'>
              {activeGallery.currentIndex + 1} / {activeGallery.images.length}
            </p>

            {activeGallery.images.length > 1 && (
              <div className='mt-3 flex gap-2 overflow-x-auto pb-1'>
                {activeGallery.images.map((imageSrc, index) => (
                  <button
                    key={imageSrc}
                    type='button'
                    onClick={() =>
                      setActiveGallery((prev) =>
                        prev ? { ...prev, currentIndex: index } : prev
                      )
                    }
                    className={`relative h-14 w-24 shrink-0 overflow-hidden rounded border ${
                      index === activeGallery.currentIndex
                        ? "border-white"
                        : "border-white/25"
                    }`}
                    aria-label={`Open image ${index + 1}`}
                  >
                    <Image
                      src={imageSrc}
                      alt={`${activeGallery.projectName} thumbnail ${index + 1}`}
                      fill
                      className='object-cover'
                      sizes='96px'
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

function ProjectDescription({
  project,
  onOpenGallery,
}: {
  project: (typeof projectsData)[number];
  onOpenGallery: () => void;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const text = project.description;

  if (!text) return null;

  const shouldTruncate = text.length > 120;

  return (
    <div className='relative z-20'>
      <p className='text-sm text-muted-foreground leading-relaxed'>
        {isExpanded || !shouldTruncate ? text : `${text.slice(0, 120)}...`}
      </p>
      {shouldTruncate && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsExpanded(!isExpanded);
          }}
          className='text-xs font-bold text-primary mt-1 hover:underline focus:outline-none'
        >
          {isExpanded ? "Show Less" : "Read More"}
        </button>
      )}

      <div className='mt-3 flex flex-wrap gap-2'>
        <button
          type='button'
          onClick={onOpenGallery}
          className='inline-flex items-center gap-1 rounded-md border border-primary/30 bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary hover:bg-primary/15'
        >
          Screenshots
        </button>

        {project.liveLink && (
          <a
            href={project.liveLink}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-1 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 hover:bg-emerald-500/15 dark:text-emerald-400'
          >
            <ExternalLink className='h-3.5 w-3.5' />
            Live
          </a>
        )}

        <a
          href={project.githubLink}
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center gap-1 rounded-md border border-neutral-400/30 bg-neutral-500/10 px-2.5 py-1 text-[11px] font-semibold text-neutral-700 hover:bg-neutral-500/15 dark:text-neutral-300'
        >
          <Github className='h-3.5 w-3.5' />
          GitHub
        </a>
      </div>
    </div>
  );
}

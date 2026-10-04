"use client";
import { projectsData } from "@/constants/constant";
import { Arrow } from "@/components/vectors";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export function Work({ limit }: { limit?: number } = {}) {
  const allProjects = limit ? projectsData.slice(0, limit) : projectsData;
  const hasMore = limit !== undefined && projectsData.length > limit;
  const [activeGallery, setActiveGallery] = useState<{
    projectName: string;
    images: string[];
    currentIndex: number;
  } | null>(null);

  const openGallery = (
    project: (typeof projectsData)[number],
    startIndex = 0,
  ) => {
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
        currentIndex:
          (prev.currentIndex - 1 + prev.images.length) % prev.images.length,
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
    <section
      id="work"
      className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/60 px-5 py-16 backdrop-blur-sm md:px-8 md:py-20"
    >
      <div className="mx-auto mb-12 flex max-w-7xl items-end justify-between gap-8">
        <div className="space-y-4">
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Selected Builds
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            {limit ? "Featured Projects" : "All Projects"}
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            Technical projects focused on AI, full-stack development, and
            practical problem solving.
          </p>
        </div>
        <Arrow className="hidden md:block h-24 w-24 rotate-90 text-primary" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-5 sm:grid-cols-2 lg:grid-cols-12 lg:gap-6">
        {allProjects.map((project, i) => (
          <article
            key={i}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-border/70 bg-background/90 shadow-[0_8px_30px_hsl(var(--foreground)/0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_hsl(var(--foreground)/0.14)] sm:col-span-1 lg:col-span-4"
          >
            <div className="pointer-events-none absolute -left-24 -top-24 h-44 w-44 rounded-full bg-primary/10 blur-3xl transition-opacity duration-500 group-hover:opacity-80" />
            <div className="relative overflow-hidden border-b border-border/50 bg-muted/30">
              <div className="absolute left-3 top-3 z-10 rounded-full border border-white/30 bg-black/45 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur">
                Project {i + 1}
              </div>
              {project.imageSrc ? (
                <div className="relative w-full aspect-[16/9]">
                  <Image
                    src={project.imageSrc}
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                  />
                </div>
              ) : (
                <div className="flex aspect-[16/9] w-full items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 text-5xl font-display opacity-30">
                  {project.name.charAt(0)}
                </div>
              )}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/35 to-transparent" />
            </div>

            <div className="relative z-10 flex h-full flex-col space-y-4 p-5 md:p-6">
              <div className="flex flex-wrap gap-2">
                {project.techStacks
                  .split(/,|and/)
                  .slice(0, 4)
                  .map((t, idx) => (
                    <span
                      key={idx}
                      className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-[10px] font-mono text-primary"
                    >
                      {t.trim()}
                    </span>
                  ))}
              </div>

              <h3 className="font-display text-xl font-bold text-foreground">
                {project.name}
              </h3>

              <div>
                <ProjectDescription
                  project={project}
                  onOpenGallery={() => openGallery(project)}
                />
              </div>
            </div>
          </article>
        ))}
      </div>

      {hasMore && (
        <div className="mx-auto mt-10 flex max-w-7xl justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-6 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/15"
          >
            View all projects ({projectsData.length})
          </Link>
        </div>
      )}

      {activeGallery && (
        <GalleryModal
          gallery={activeGallery}
          onClose={closeGallery}
          onNext={showNextImage}
          onPrev={showPreviousImage}
          onSelect={(index) =>
            setActiveGallery((prev) =>
              prev ? { ...prev, currentIndex: index } : prev,
            )
          }
        />
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
    <div className="relative z-20">
      <p className="text-sm leading-relaxed text-muted-foreground">
        {isExpanded || !shouldTruncate ? text : `${text.slice(0, 120)}...`}
      </p>
      {shouldTruncate && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsExpanded(!isExpanded);
          }}
          className="mt-1 text-xs font-semibold text-primary hover:underline focus:outline-none"
        >
          {isExpanded ? "Show Less" : "Read More"}
        </button>
      )}

      <div className="mt-4 flex flex-wrap gap-2.5">
        {project.gallery && project.gallery.length > 0 && (
          <button
            type="button"
            onClick={onOpenGallery}
            className="inline-flex items-center gap-1.5 rounded-lg border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary transition-colors hover:bg-primary/15"
          >
            Screenshots
          </button>
        )}

        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-700 transition-colors hover:bg-emerald-500/15 dark:text-emerald-400"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Live
          </a>
        )}

        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-400/30 bg-neutral-500/10 px-3 py-1.5 text-xs font-semibold text-neutral-700 transition-colors hover:bg-neutral-500/15 dark:text-neutral-300"
          >
            <Github className="h-3.5 w-3.5" />
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}

function GalleryModal({
  gallery,
  onClose,
  onNext,
  onPrev,
  onSelect,
}: {
  gallery: { projectName: string; images: string[]; currentIndex: number };
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onSelect: (index: number) => void;
}) {
  const touchStartX = useRef<number | null>(null);
  const activeThumb = useRef<HTMLButtonElement | null>(null);
  const { projectName, images, currentIndex } = gallery;
  const many = images.length > 1;

  // lock page scroll while the modal is open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  // keep the active thumbnail in view
  useEffect(() => {
    activeThumb.current?.scrollIntoView({
      inline: "center",
      block: "nearest",
      behavior: "smooth",
    });
  }, [currentIndex]);

  // Rendered in a portal: the section's backdrop-blur would otherwise trap
  // `position: fixed` inside the section instead of the viewport.
  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-black/90 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`${projectName} screenshots`}
      onClick={onClose}
    >
      <div className="flex items-center justify-between gap-3 px-4 py-3 md:px-6 md:py-4">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-white md:text-base">
            {projectName}
          </p>
          <p className="text-xs text-white/60">
            {currentIndex + 1} / {images.length}
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close gallery"
          className="shrink-0 rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div
        className="relative min-h-0 flex-1 px-4 md:px-16"
        onTouchStart={(e) => {
          touchStartX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchStartX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchStartX.current;
          touchStartX.current = null;
          if (Math.abs(dx) > 50) (dx < 0 ? onNext : onPrev)();
        }}
      >
        <div
          className="relative h-full w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            key={images[currentIndex]}
            src={images[currentIndex]}
            alt={`${projectName} screenshot ${currentIndex + 1}`}
            fill
            priority
            className="object-contain"
            sizes="100vw"
          />
        </div>

        {many && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/15 p-2.5 text-white backdrop-blur transition-colors hover:bg-white/30 md:left-4 md:p-3"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              aria-label="Next image"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/15 p-2.5 text-white backdrop-blur transition-colors hover:bg-white/30 md:right-4 md:p-3"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>

      {many && (
        <div
          className="flex gap-2 overflow-x-auto px-4 py-3 md:justify-center md:px-6 md:py-4"
          onClick={(e) => e.stopPropagation()}
        >
          {images.map((src, index) => (
            <button
              key={src}
              ref={index === currentIndex ? activeThumb : null}
              type="button"
              onClick={() => onSelect(index)}
              aria-label={`Open image ${index + 1}`}
              className={`relative h-12 w-20 shrink-0 overflow-hidden rounded-md border-2 transition-opacity md:h-14 md:w-24 ${
                index === currentIndex
                  ? "border-white"
                  : "border-transparent opacity-50 hover:opacity-100"
              }`}
            >
              <Image
                src={src}
                alt={`${projectName} thumbnail ${index + 1}`}
                fill
                className="object-cover"
                sizes="96px"
              />
            </button>
          ))}
        </div>
      )}
    </div>,
    document.body,
  );
}

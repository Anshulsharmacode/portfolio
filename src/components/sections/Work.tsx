"use client";
import { projectsData } from "@/constants/constant";
import {
  ChevronLeft,
  ChevronRight,
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
      className="portfolio-section"
    >
      <div className="mb-12">
        <div className="space-y-4">
          <h2 className="section-heading">
            {limit ? <>Selected <span className="text-[#adadab]">work.</span></> : "All projects."}
          </h2>
          <p className="section-description">
            A few things I’ve built.
          </p>
        </div>
      </div>

      <div className="space-y-16 md:space-y-24">
        {allProjects.map((project, i) => (
          <article
            key={i}
            className="grid min-w-0 items-center gap-8 md:grid-cols-2 md:gap-16 lg:gap-24"
          >
            <div className="relative overflow-hidden bg-muted/30 md:order-2">
              {project.imageSrc ? (
                <div className="relative w-full aspect-[16/9]">
                  <Image
                    src={project.imageSrc}
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="flex aspect-[16/9] w-full items-center justify-center bg-muted text-5xl font-black text-muted-foreground">
                  {project.name.charAt(0)}
                </div>
              )}
            </div>

            <div className="flex flex-col space-y-4 md:order-1">
              <h3 className="text-2xl font-bold tracking-tight text-foreground">
                {project.name}
              </h3>

              <p className="text-sm leading-relaxed text-muted-foreground">{project.techStacks}</p>
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
        <div className="mt-12 flex">
          <Link
            href="/projects"
            className="text-link"
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
  return (
    <div>
      <p className="text-base leading-relaxed text-muted-foreground md:text-lg">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
        {project.gallery && project.gallery.length > 0 && (
          <button
            type="button"
            onClick={onOpenGallery}
            className="text-link"
          >
            Screenshots
          </button>
        )}

        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            Live
          </a>
        )}

        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
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

  // Keep the gallery at the document root, above the page content.
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

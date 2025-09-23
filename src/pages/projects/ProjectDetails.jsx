import { useState, useCallback, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import projects from "../../data/projects";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const openLightbox = useCallback((index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  const goToNext = useCallback(() => {
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  }, [project?.images.length]);

  const goToPrev = useCallback(() => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  }, [project?.images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "ArrowLeft") goToPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxOpen, goToNext, goToPrev, closeLightbox]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-transparent">
        <div className="text-center p-8">
          <p className="text-xl text-red-500 mb-4">Project not found.</p>
          <Link
            to="/projects"
            className="inline-flex items-center text-green-600 hover:text-green-700 font-medium transition"
          >
            <span className="mr-2">←</span> Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  // Responsive limit: 4 images for mobile, 6 for desktop
  const getVisibleImages = () => {
    if (showAll) return project.images;
    if (window.innerWidth < 768) return project.images.slice(0, 4);
    return project.images.slice(0, 6);
  };

  const visibleImages = getVisibleImages();

  return (
    <div className="min-h-screen bg-transparent py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 bg-clip-text text-transparent mb-4 tracking-tight">
            {project.title}
          </h1>
          <p className="text-zinc-600 dark:text-zinc-300 text-lg max-w-3xl mx-auto">
            A modern showcase of creativity, technology, and design.
          </p>
        </div>

        {/* About Section */}
        <section className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            About the Project
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-4xl mx-auto">
            {project.description}
          </p>
        </section>

        {/* Tech Stack */}
        <section className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            Tech Stack
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto rounded-full mb-6"></div>
          <div className="flex flex-wrap justify-center gap-4">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="px-5 py-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 
        dark:from-indigo-600/20 dark:to-purple-600/20 border border-indigo-400/30 
        dark:border-indigo-500/40 text-indigo-700 dark:text-indigo-300
        rounded-full text-sm font-medium shadow-sm backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Links */}
        <section className="mb-16 text-center flex flex-wrap justify-center gap-6">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full shadow-lg hover:shadow-xl transition transform hover:scale-105 font-semibold"
            >
              Live Project
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gradient-to-r from-zinc-800 to-zinc-900 text-white rounded-full shadow-lg hover:shadow-xl transition transform hover:scale-105 font-semibold"
            >
              View Code
            </a>
          )}
        </section>

        {/* Image Gallery */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-center text-zinc-900 dark:text-zinc-100">
            Project Gallery
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto rounded-full mb-8"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {visibleImages.map((img, idx) => (
              <div
                key={idx}
                onClick={() => openLightbox(idx)}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-xl"
              >
                <img
                  src={img}
                  alt={`${project.title} screenshot ${idx + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent 
                opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                  <span className="text-white font-medium">Click to view</span>
                </div>
              </div>
            ))}
          </div>

          {/* Show All */}
          {project.images.length > visibleImages.length && !showAll && (
            <div className="mt-10 text-center">
              <button
                onClick={() => setShowAll(true)}
                className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full shadow-lg hover:shadow-xl transition transform hover:scale-105 font-semibold"
              >
                Show Full Gallery
              </button>
            </div>
          )}
        </section>

        {/* Back Button */}
        <div className="text-center">
          <Link
            to="/projects"
            className="inline-flex items-center text-green-600 hover:text-green-700 font-medium transition"
          >
            <span className="mr-2">←</span> Back to Projects
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-gray-300 text-3xl transition"
          >
            ✕
          </button>
          <button
            onClick={goToPrev}
            className="absolute left-6 text-white hover:text-gray-300 transition text-4xl"
          >
            ‹
          </button>
          <div className="max-w-6xl max-h-[85vh] flex items-center justify-center">
            <img
              src={project.images[currentImageIndex]}
              alt={`${project.title} screenshot ${currentImageIndex + 1}`}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
          <button
            onClick={goToNext}
            className="absolute right-6 text-white hover:text-gray-300 transition text-4xl"
          >
            ›
          </button>
          <div className="absolute bottom-6 text-white text-center w-full text-sm opacity-80">
            {currentImageIndex + 1} / {project.images.length}
          </div>
        </div>
      )}
    </div>
  );
}

"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ExternalLink, Tag } from "lucide-react";
import clsx from "clsx";
import { useTheme } from "../contexts/ThemeContext";

// Project data type
type Project = {
  title: string;
  description: string;
  category: "Web" | "Mobile" | "Games" | "Other";
  tags: string[];
  image: string;
  link: string;
  github?: string;
  screenshots?: string[];
  tech: string[];
};

const projects: Project[] = [
  {
    title: "Modern Portfolio (Kamidzu9.github.io)",
    description:
      "Mein persönliches Portfolio: Next.js, Tailwind, Framer Motion, Dark/Light Mode, animierte Sections, Premium-Design.",
    category: "Web",
    tags: ["Next.js", "Portfolio", "TailwindCSS", "Framer Motion"],
    image: "/file.svg",
    link: "https://github.com/Kamidzu9/Kamidzu9.github.io",
    github: "https://github.com/Kamidzu9/Kamidzu9.github.io",
    tech: ["Next.js", "TailwindCSS", "Framer Motion", "TypeScript"],
    screenshots: ["/globe.svg", "/vercel.svg"],
  },
  {
    title: "Calendar App (Next.js, Local Storage)",
    description:
      "Moderne Kalender-App als reine Next.js-Anwendung. Speichert Events lokal im Browser (Local Storage), keine externe API oder Backend, komplett clientseitig.",
    category: "Web",
    tags: ["Next.js", "Calendar", "Local Storage", "TypeScript"],
    image: "/next.svg",
    link: "https://github.com/Kamidzu9/calendar",
    github: "https://github.com/Kamidzu9/calendar",
    tech: ["Next.js", "TypeScript", "Local Storage"],
    screenshots: ["/file.svg"],
  },
  {
    title: "Shopware 6 Bewertung Plugin",
    description:
      "Shopware 6 Plugin für Produktbewertungen, Admin-UI, E-Mail-Benachrichtigung, DSGVO-ready.",
    category: "Web",
    tags: ["Shopware Plugin", "PHP", "Shopware 6", "Bewertung"],
    image: "/window.svg",
    link: "",
    tech: ["PHP", "Shopware 6", "Symfony"],
    screenshots: ["/vercel.svg"],
  },
  {
    title: "Shopware & WordPress Theme Development",
    description:
      "Individuelle Themes für Shopware 6 und WordPress: Modern, performant, mit Customizer und Block-Editor.",
    category: "Web",
    tags: ["Shopware Theme", "WordPress Theme", "SCSS", "Twig", "Gutenberg"],
    image: "/file.svg",
    link: "",
    tech: ["SCSS", "Twig", "PHP", "WordPress", "Shopware 6"],
    screenshots: ["/globe.svg"],
  },
  {
    title: "Automatisierte Backup Scripts (SW6 & WP)",
    description:
      "Node.js/JS-Skripte für automatische Backups & Erkennung von Shopware 6 und WordPress Instanzen.",
    category: "Web",
    tags: ["Backup", "Shopware 6", "WordPress", "Automation"],
    image: "/vercel.svg",
    link: "",
    tech: ["Shell"],
    screenshots: ["/window.svg"],
  },
  {
    title: "Next.js Ausbildung Plattform + Docker",
    description:
      "Next.js App für Ausbildungsmanagement, Landingpage, Multi-Page, Payload CMS, Dockerized, API-Integration.",
    category: "Web",
    tags: ["Next.js", "Payload", "Docker", "Landingpage", "Ausbildung"],
    image: "/next.svg",
    link: "",
    tech: ["Next.js", "Payload", "Docker", "TypeScript"],
    screenshots: ["/file.svg"],
  },
];

const categories = [
  { label: "Alle", value: "all" },
  { label: "Web", value: "Web" },
  { label: "Mobile", value: "Mobile" },
  { label: "Games", value: "Games" },
  { label: "Other", value: "Other" },
];

const colorSchemes = {
  light: {
    bg: "",
    card: "bg-white/90",
    accent: "bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-orange-400",
    text: "text-indigo-900",
    modal: "bg-white/95 text-indigo-900",
    shadow: "shadow-xl shadow-indigo-200/40",
    tag: "bg-indigo-100 text-indigo-700",
    search: "bg-white/80",
  },
  dark: {
    bg: "",
    card: "bg-neutral-900/90",
    accent: "bg-gradient-to-r from-indigo-400 via-fuchsia-500 to-orange-400",
    text: "text-white",
    modal: "bg-neutral-900/95 text-white",
    shadow: "shadow-2xl shadow-indigo-900/40",
    tag: "bg-fuchsia-900/40 text-fuchsia-200",
    search: "bg-neutral-900/80",
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 80, damping: 18 },
  },
};

const ProjectsSection: React.FC = () => {
  const { theme } = useTheme();
  const [category, setCategory] = useState<string>("all");
  const [search, setSearch] = useState<string>("");
  const [modal, setModal] = useState<Project | null>(null);

  const colors = colorSchemes[theme];

  // Filtered projects
  const filtered = useMemo(() => {
    return projects.filter(
      (p) =>
        (category === "all" || p.category === category) &&
        (search.trim() === "" ||
          p.title.toLowerCase().includes(search.toLowerCase()) ||
          p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase())) ||
          p.description.toLowerCase().includes(search.toLowerCase()))
    );
  }, [category, search]);

  // Unique tags for tag system
  const allTags = useMemo(
    () => Array.from(new Set(projects.flatMap((p) => p.tags))).sort(),
    []
  );
  const [activeTag, setActiveTag] = useState<string | null>(null);

  // Masonry/3D/Flip/Parallax effect helpers
  // (for demo: simple 3D parallax on hover, flip on click for details)

  return (
    <section
      id="projects"
      className={clsx(
        "relative min-h-screen py-24 px-2 md:px-4 overflow-visible transition-colors duration-700",
        colors.bg
      )}
    >
      {/* Section header */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring" as const, stiffness: 80, damping: 14 }}
        className={clsx(
          "text-6xl md:text-7xl font-black mb-20 text-center bg-clip-text text-transparent drop-shadow-2xl tracking-tight relative z-30 select-none",
          colors.accent
        )}
      >
        <span className="inline-block">Projekte</span>
      </motion.h2>

      {/* Filter & Search */}
      <div className="flex flex-wrap gap-4 justify-center mb-10 z-20 relative">
        {categories.map((cat) => (
          <button
            key={cat.value}
            className={clsx(
              "px-6 py-2 rounded-full font-semibold border transition text-lg",
              category === cat.value
                ? "bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-orange-400 text-white shadow-lg"
                : "bg-white/80 border-indigo-200 text-indigo-900 hover:bg-indigo-100 dark:bg-neutral-900/80 dark:border-indigo-900 dark:text-white dark:hover:bg-indigo-950"
            )}
            onClick={() => {
              setCategory(cat.value);
              setActiveTag(null);
            }}
          >
            {cat.label}
          </button>
        ))}
        <div
          className={clsx(
            "flex items-center gap-2 px-4 py-2 rounded-full",
            colors.search
          )}
        >
          <Search className="w-5 h-5 opacity-60" />
          <input
            type="text"
            placeholder="Suche Projekte..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={clsx(
              "bg-transparent outline-none text-base w-32 md:w-48",
              colors.text
            )}
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="ml-2 text-indigo-400 hover:text-orange-400 transition"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Tag System */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {allTags.map((tag) => (
          <button
            key={tag}
            className={clsx(
              "flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold border transition",
              activeTag === tag
                ? "bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-orange-400 text-white border-transparent shadow"
                : colors.tag +
                    " border-indigo-200 dark:border-fuchsia-900/40 hover:bg-indigo-200 dark:hover:bg-fuchsia-800/40 hover:text-indigo-900 dark:hover:text-fuchsia-100"
            )}
            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
          >
            <Tag className="w-3 h-3" /> {tag}
          </button>
        ))}
      </div>

      {/* Masonry/3D/Flip Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14 xl:gap-16 mx-auto max-w-6xl"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence>
          {filtered
            .filter((p) => !activeTag || p.tags.includes(activeTag))
            .map((proj, idx) => (
              <motion.div
                key={proj.title}
                variants={fadeIn}
                whileHover={{
                  rotateY: 8,
                  scale: 1.04,
                  boxShadow: "0 16px 48px 0 rgba(99,102,241,0.18)",
                }}
                whileTap={{ rotateY: -8, scale: 0.98 }}
                className={clsx(
                  "group perspective-1000 cursor-pointer relative min-h-[340px] flex flex-col justify-between rounded-3xl border p-7 md:p-9 overflow-visible transition-all duration-700 backdrop-blur-xl",
                  colors.card,
                  colors.shadow,
                  "hover:scale-[1.04] hover:shadow-2xl hover:z-30"
                )}
                onClick={() => setModal(proj)}
                tabIndex={0}
                aria-label={proj.title}
              >
                {/* Card Front */}
                <div className="flex flex-col gap-4">
                  <div className="relative w-full h-40 mb-2 rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-100 via-fuchsia-100 to-orange-100 flex items-center justify-center">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="object-contain w-24 h-24 drop-shadow-xl opacity-90 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-lg md:text-xl text-indigo-700 dark:text-fuchsia-300">
                      {proj.title}
                    </span>
                  </div>
                  <div className="text-sm text-indigo-400 dark:text-fuchsia-200 mb-2">
                    {proj.category}
                  </div>
                  <div className={clsx("mb-2 text-base", colors.text)}>
                    {proj.description}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {proj.tags.map((t) => (
                      <span
                        key={t}
                        className={clsx(
                          "px-3 py-1 rounded-full text-xs font-semibold shadow-sm border",
                          colors.tag,
                          "border-indigo-200 dark:border-fuchsia-900/40"
                        )}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Card Action */}
                <div className="flex items-center gap-3 mt-4">
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-indigo-500 hover:text-orange-500 font-medium transition"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Details <ExternalLink className="w-4 h-4" />
                  </a>
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-indigo-400 hover:text-indigo-700 dark:hover:text-fuchsia-300 font-medium transition"
                      onClick={(e) => e.stopPropagation()}
                    >
                      GitHub <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
                {/* Animated Border Glow */}
                <span className="absolute inset-0 rounded-3xl border-2 border-transparent pointer-events-none group-hover:border-indigo-400/60 group-hover:shadow-[0_0_32px_8px_rgba(99,102,241,0.18)] group-hover:animate-border-glow transition-all duration-700" />
              </motion.div>
            ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal for details */}
      <AnimatePresence>
        {modal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
            onClick={() => setModal(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 40 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className={clsx(
                "max-w-2xl w-full p-10 rounded-3xl border shadow-2xl relative",
                colors.modal
              )}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1 flex flex-col gap-4">
                  <div className="flex items-center gap-4 mb-2">
                    <img
                      src={modal.image}
                      alt={modal.title}
                      className="w-20 h-20 rounded-2xl object-contain drop-shadow-xl"
                    />
                    <div>
                      <div
                        className={clsx(
                          "font-bold text-2xl md:text-3xl",
                          colors.text
                        )}
                      >
                        {modal.title}
                      </div>
                      <div className="text-sm text-indigo-400 font-semibold mt-1">
                        {modal.category}
                      </div>
                    </div>
                  </div>
                  <div className={clsx("mb-2 text-base", colors.text)}>
                    {modal.description}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {modal.tags.map((t) => (
                      <span
                        key={t}
                        className={clsx(
                          "px-3 py-1 rounded-full text-xs font-semibold shadow-sm border",
                          colors.tag,
                          "border-indigo-200 dark:border-fuchsia-900/40"
                        )}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {modal.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-indigo-50 dark:bg-fuchsia-900/40 text-indigo-600 dark:text-fuchsia-200 rounded text-xs font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 mt-2">
                    <a
                      href={modal.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-indigo-500 hover:text-orange-500 font-medium transition"
                    >
                      Live <ExternalLink className="w-4 h-4" />
                    </a>
                    {modal.github && (
                      <a
                        href={modal.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-indigo-400 hover:text-indigo-700 dark:hover:text-fuchsia-300 font-medium transition"
                      >
                        GitHub <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
                {/* Screenshots */}
                {modal.screenshots && modal.screenshots.length > 0 && (
                  <div className="flex-1 flex flex-col gap-4 items-center justify-center">
                    <div className="grid grid-cols-1 gap-3 w-full">
                      {modal.screenshots.map((src, i) => (
                        <img
                          key={i}
                          src={src}
                          alt={modal.title + " Screenshot " + (i + 1)}
                          className="rounded-xl object-contain w-full max-h-40 border border-indigo-100 dark:border-fuchsia-900/40 shadow"
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <button
                className="absolute top-4 right-4 p-2 rounded-full bg-indigo-100 dark:bg-indigo-900 hover:bg-indigo-200 dark:hover:bg-indigo-800 transition"
                onClick={() => setModal(null)}
                aria-label="Schließen"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;

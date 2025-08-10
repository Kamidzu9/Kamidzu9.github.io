"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ExternalLink, Tag, Github, Eye } from "lucide-react";
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
      "Custom E-Commerce und Blog Themes, responsives Design, SEO-optimiert, benutzerfreundlich.",
    category: "Web",
    tags: ["Shopware", "WordPress", "Theme", "E-Commerce"],
    image: "/globe.svg",
    link: "",
    tech: ["PHP", "CSS", "JavaScript", "Shopware", "WordPress"],
    screenshots: ["/file.svg", "/vercel.svg"],
  },
];

const categories = [
  { value: "All", label: "Alle" },
  { value: "Web", label: "Web" },
  { value: "Mobile", label: "Mobile" },
  { value: "Games", label: "Games" },
  { value: "Other", label: "Sonstige" },
];

const ProjectsSection: React.FC = () => {
  const { theme } = useTheme();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    return projects.filter(
      (p) =>
        (selectedCategory === "All" || p.category === selectedCategory) &&
        (searchTerm.trim() === "" ||
          p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase())) ||
          p.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [selectedCategory, searchTerm]);

  return (
    <section
      id="projects"
      className="relative py-24 px-4 md:px-8 bg-theme-primary"
    >
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb-1"></div>
        <div className="orb-2"></div>
        <div className="orb-3"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6 gradient-accent bg-clip-text text-transparent">
            Meine Projekte
          </h2>
          <p className="text-xl text-theme-secondary max-w-3xl mx-auto leading-relaxed">
            Eine Auswahl meiner neuesten Arbeiten und Projekte. Von
            Webanwendungen bis hin zu Plugins – hier sehen Sie, was ich erstelle.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((cat) => (
              <motion.button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={clsx(
                  "px-6 py-3 rounded-full font-semibold transition-all duration-300",
                  selectedCategory === cat.value
                    ? "bg-theme-accent text-white shadow-lg"
                    : "bg-theme-secondary border border-theme-primary text-theme-primary hover:border-theme-accent"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat.label}
              </motion.button>
            ))}
          </div>

          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-theme-secondary" />
            </div>
            <input
              type="text"
              placeholder="Projekte suchen..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-10 py-3 bg-theme-secondary border border-theme-primary rounded-full text-theme-primary placeholder-theme-secondary focus:ring-2 focus:ring-theme-accent focus:border-theme-accent transition-all duration-200"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-theme-secondary hover:text-theme-accent"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-theme-secondary border border-theme-primary rounded-xl shadow-theme-secondary hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Hover Actions */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-theme-accent transition-colors duration-200"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-theme-accent transition-colors duration-200"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-theme-accent transition-colors duration-200"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-theme-primary mb-3 group-hover:text-theme-accent transition-colors duration-200">
                    {project.title}
                  </h3>
                  
                  <p className="text-theme-secondary mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 text-xs bg-theme-accent/10 text-theme-accent rounded-md font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 text-xs text-theme-secondary">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Tech Stack */}
                  <div className="text-xs text-theme-secondary">
                    <span className="font-semibold">Tech: </span>
                    {project.tech.join(", ")}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-xl text-theme-secondary">
              Keine Projekte gefunden. Versuchen Sie einen anderen Suchbegriff.
            </p>
          </motion.div>
        )}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative bg-theme-secondary border border-theme-primary rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 text-theme-secondary hover:text-theme-accent z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-theme-primary mb-4">
                  {selectedProject.title}
                </h3>
                
                <p className="text-theme-secondary mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-theme-primary mb-2">Kategorie</h4>
                    <span className="px-3 py-1 bg-theme-accent/10 text-theme-accent rounded-full text-sm">
                      {selectedProject.category}
                    </span>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-theme-primary mb-2">Technologien</h4>
                    <div className="flex flex-wrap gap-1">
                      {selectedProject.tech.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs bg-theme-primary text-theme-secondary rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Projekt ansehen
                    </a>
                  )}
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;

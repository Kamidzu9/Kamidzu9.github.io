"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  RotateCcw,
  Calendar,
  Award,
  BookOpen,
  Palette,
  Server,
  Database,
  Cloud,
  Smartphone,
  PenTool,
  Heart,
  Zap,
  Code,
  Layers,
  Terminal,
  ShoppingCart,
} from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { useTranslation } from "react-i18next";

// Types
interface Skill {
  id: string;
  name: string;
  category: string;
  level: number;
  yearsExperience: number;
  projectsCount: number;
  description: string;
  icon: React.ReactNode;
  color: string;
  gradient: string;
  tags: string[];
  isFavorite: boolean;
  lastUsed: string;
}

interface SkillCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  gradient: string;
}

const SkillsSection: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useTranslation("skills");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<"level" | "experience" | "projects">(
    "level"
  );

  // Categories with translations
  const categories: SkillCategory[] = [
    {
      id: "all",
      name: t("all"),
      icon: <Layers className="w-6 h-6" />,
      color: "text-purple-500",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: "frontend",
      name: t("frontend"),
      icon: <Palette className="w-6 h-6" />,
      color: "text-blue-500",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: "backend",
      name: t("backend"),
      icon: <Server className="w-6 h-6" />,
      color: "text-green-500",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      id: "database",
      name: t("databases"),
      icon: <Database className="w-6 h-6" />,
      color: "text-orange-500",
      gradient: "from-orange-500 to-red-500",
    },
    {
      id: "devops",
      name: t("devops"),
      icon: <Cloud className="w-6 h-6" />,
      color: "text-indigo-500",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      id: "mobile",
      name: t("mobile"),
      icon: <Smartphone className="w-6 h-6" />,
      color: "text-pink-500",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      id: "design",
      name: t("design"),
      icon: <PenTool className="w-6 h-6" />,
      color: "text-yellow-500",
      gradient: "from-yellow-500 to-orange-500",
    },
  ];

  const skills: Skill[] = [
    // Frontend Languages & Core
    {
      id: "html5",
      name: "HTML5",
      category: "frontend",
      level: 90,
      yearsExperience: 2,
      projectsCount: 20,
      description:
        "Modern semantic HTML with accessibility best practices and web standards compliance.",
      icon: <Code className="w-8 h-8" />,
      color:
        "text-orange-500 dark:text-orange-400 group-[.black]:text-orange-400",
      gradient: "from-orange-500 to-red-500",
      tags: ["Semantic", "Accessibility", "Web Standards", "SEO"],
      isFavorite: true,
      lastUsed: "2024-01",
    },
    {
      id: "css3",
      name: "CSS3",
      category: "frontend",
      level: 88,
      yearsExperience: 2,
      projectsCount: 20,
      description:
        "Advanced CSS with animations, flexbox, grid, and responsive design principles.",
      icon: <Palette className="w-8 h-8" />,
      color: "text-blue-500 dark:text-blue-400 group-[.black]:text-blue-400",
      gradient: "from-blue-500 to-blue-700",
      tags: ["Flexbox", "Grid", "Animations", "Responsive"],
      isFavorite: true,
      lastUsed: "2024-01",
    },
    {
      id: "javascript",
      name: "JavaScript",
      category: "frontend",
      level: 85,
      yearsExperience: 2,
      projectsCount: 10,
      description:
        "Modern ES6+ JavaScript with DOM manipulation, async programming, and API integration.",
      icon: <Zap className="w-8 h-8" />,
      color:
        "text-yellow-500 dark:text-yellow-400 group-[.black]:text-yellow-400",
      gradient: "from-yellow-400 to-yellow-600",
      tags: ["ES6+", "DOM", "Async/Await", "APIs"],
      isFavorite: true,
      lastUsed: "2024-01",
    },
    {
      id: "typescript",
      name: "TypeScript",
      category: "frontend",
      level: 80,
      yearsExperience: 1,
      projectsCount: 6,
      description:
        "Type-safe JavaScript development with interfaces, generics, and advanced type systems.",
      icon: <BookOpen className="w-8 h-8" />,
      color: "text-blue-600 dark:text-blue-500 group-[.black]:text-blue-500",
      gradient: "from-blue-600 to-blue-800",
      tags: ["Types", "Interfaces", "Generics", "Type Safety"],
      isFavorite: true,
      lastUsed: "2024-01",
    },
    {
      id: "sass",
      name: "Sass/SCSS",
      category: "frontend",
      level: 75,
      yearsExperience: 2,
      projectsCount: 4,
      description:
        "CSS preprocessor with variables, mixins, and modular architecture.",
      icon: <Sparkles className="w-8 h-8" />,
      color: "text-pink-500 dark:text-pink-400 group-[.black]:text-pink-400",
      gradient: "from-pink-500 to-rose-500",
      tags: ["Variables", "Mixins", "Modules", "Preprocessing"],
      isFavorite: false,
      lastUsed: "2023-12",
    },

    // Frontend Frameworks
    {
      id: "react",
      name: "React",
      category: "frontend",
      level: 82,
      yearsExperience: 1,
      projectsCount: 4,
      description:
        "Component-based UI library with hooks, state management, and modern patterns.",
      icon: <Smartphone className="w-8 h-8" />,
      color: "text-cyan-400 dark:text-cyan-300 group-[.black]:text-cyan-300",
      gradient: "from-cyan-400 to-blue-500",
      tags: ["Hooks", "Components", "JSX", "State Management"],
      isFavorite: true,
      lastUsed: "2024-01",
    },
    {
      id: "nextjs",
      name: "Next.js",
      category: "frontend",
      level: 78,
      yearsExperience: 1,
      projectsCount: 2,
      description:
        "Full-stack React framework with SSR, API routes, and optimized performance.",
      icon: <Server className="w-8 h-8" />,
      color: "text-gray-800 dark:text-gray-300 group-[.black]:text-gray-300",
      gradient: "from-gray-800 to-black",
      tags: ["SSR", "API Routes", "Performance", "Full-stack"],
      isFavorite: true,
      lastUsed: "2024-01",
    },
    {
      id: "vuejs",
      name: "Vue.js",
      category: "frontend",
      level: 70,
      yearsExperience: 1,
      projectsCount: 2,
      description:
        "Progressive JavaScript framework with reactive data binding and component system.",
      icon: <Palette className="w-8 h-8" />,
      color: "text-green-500 dark:text-green-400 group-[.black]:text-green-400",
      gradient: "from-green-500 to-emerald-500",
      tags: ["Reactive", "Components", "Directives", "Progressive"],
      isFavorite: false,
      lastUsed: "2023-11",
    },
    {
      id: "tailwind",
      name: "Tailwind CSS",
      category: "frontend",
      level: 85,
      yearsExperience: 1,
      projectsCount: 2,
      description:
        "Utility-first CSS framework for rapid UI development and custom designs.",
      icon: <Layers className="w-8 h-8" />,
      color: "text-cyan-500 dark:text-cyan-400 group-[.black]:text-cyan-400",
      gradient: "from-cyan-500 to-teal-500",
      tags: ["Utility-first", "Responsive", "Custom Design", "JIT"],
      isFavorite: true,
      lastUsed: "2024-01",
    },
    {
      id: "bootstrap",
      name: "Bootstrap",
      category: "frontend",
      level: 75,
      yearsExperience: 2,
      projectsCount: 6,
      description:
        "Popular CSS framework for responsive design and component library.",
      icon: <Award className="w-8 h-8" />,
      color:
        "text-purple-600 dark:text-purple-400 group-[.black]:text-purple-400",
      gradient: "from-purple-600 to-indigo-600",
      tags: ["Grid System", "Components", "Responsive", "Utilities"],
      isFavorite: false,
      lastUsed: "2023-10",
    },
    {
      id: "vite",
      name: "Vite",
      category: "frontend",
      level: 72,
      yearsExperience: 1,
      projectsCount: 4,
      description:
        "Fast build tool and development server for modern web projects.",
      icon: <Zap className="w-8 h-8" />,
      color:
        "text-yellow-400 dark:text-yellow-300 group-[.black]:text-yellow-300",
      gradient: "from-yellow-400 to-orange-400",
      tags: ["Build Tool", "Fast", "HMR", "Modern"],
      isFavorite: false,
      lastUsed: "2023-12",
    },

    // Backend
    {
      id: "php",
      name: "PHP",
      category: "backend",
      level: 88,
      yearsExperience: 2,
      projectsCount: 8,
      description:
        "Server-side scripting with modern PHP features, OOP, and web development.",
      icon: <Database className="w-8 h-8" />,
      color:
        "text-purple-600 dark:text-purple-400 group-[.black]:text-purple-400",
      gradient: "from-purple-600 to-indigo-600",
      tags: ["OOP", "Web Development", "Server-side", "Modern PHP"],
      isFavorite: true,
      lastUsed: "2024-01",
    },
    {
      id: "laravel",
      name: "Laravel",
      category: "backend",
      level: 82,
      yearsExperience: 2,
      projectsCount: 4,
      description:
        "Elegant PHP framework with MVC architecture, Eloquent ORM, and rich ecosystem.",
      icon: <Layers className="w-8 h-8" />,
      color: "text-red-500 dark:text-red-400 group-[.black]:text-red-400",
      gradient: "from-red-500 to-orange-500",
      tags: ["MVC", "Eloquent", "Artisan", "Ecosystem"],
      isFavorite: true,
      lastUsed: "2023-12",
    },
    {
      id: "nodejs",
      name: "Node.js",
      category: "backend",
      level: 75,
      yearsExperience: 1,
      projectsCount: 4,
      description:
        "JavaScript runtime for server-side development with npm ecosystem.",
      icon: <Server className="w-8 h-8" />,
      color: "text-green-600 dark:text-green-400 group-[.black]:text-green-400",
      gradient: "from-green-600 to-green-800",
      tags: ["Runtime", "npm", "Server-side", "JavaScript"],
      isFavorite: true,
      lastUsed: "2024-01",
    },
    {
      id: "python",
      name: "Python",
      category: "backend",
      level: 68,
      yearsExperience: 1,
      projectsCount: 2,
      description:
        "Versatile programming language for scripting, automation, and web development.",
      icon: <BookOpen className="w-8 h-8" />,
      color: "text-blue-500 dark:text-blue-400 group-[.black]:text-blue-400",
      gradient: "from-blue-500 to-green-500",
      tags: ["Scripting", "Automation", "Versatile", "Clean Syntax"],
      isFavorite: false,
      lastUsed: "2023-11",
    },

    // Databases
    {
      id: "mysql",
      name: "MySQL",
      category: "database",
      level: 85,
      yearsExperience: 2,
      projectsCount: 15,
      description:
        "Relational database with SQL queries, joins, and performance optimization.",
      icon: <Database className="w-8 h-8" />,
      color: "text-blue-700 dark:text-blue-400 group-[.black]:text-blue-400",
      gradient: "from-blue-700 to-blue-900",
      tags: ["SQL", "Relational", "Queries", "Performance"],
      isFavorite: true,
      lastUsed: "2024-01",
    },
    {
      id: "postgresql",
      name: "PostgreSQL",
      category: "database",
      level: 70,
      yearsExperience: 1,
      projectsCount: 3,
      description:
        "Advanced relational database with JSON support and complex queries.",
      icon: <Database className="w-8 h-8" />,
      color: "text-blue-600 dark:text-blue-400 group-[.black]:text-blue-400",
      gradient: "from-blue-600 to-indigo-600",
      tags: ["Advanced SQL", "JSON", "ACID", "Complex Queries"],
      isFavorite: false,
      lastUsed: "2023-10",
    },
    {
      id: "mongodb",
      name: "MongoDB",
      category: "database",
      level: 65,
      yearsExperience: 1,
      projectsCount: 2,
      description:
        "NoSQL document database for flexible data models and scaling.",
      icon: <Database className="w-8 h-8" />,
      color: "text-green-700 dark:text-green-400 group-[.black]:text-green-400",
      gradient: "from-green-700 to-green-900",
      tags: ["NoSQL", "Documents", "Flexible", "Scaling"],
      isFavorite: false,
      lastUsed: "2023-09",
    },

    // DevOps & Tools
    {
      id: "docker",
      name: "Docker",
      category: "devops",
      level: 72,
      yearsExperience: 1,
      projectsCount: 8,
      description:
        "Containerization platform for application deployment and development.",
      icon: <Cloud className="w-8 h-8" />,
      color: "text-blue-500 dark:text-blue-400 group-[.black]:text-blue-400",
      gradient: "from-blue-500 to-cyan-500",
      tags: ["Containers", "Deployment", "Isolation", "Scalable"],
      isFavorite: true,
      lastUsed: "2024-01",
    },
    {
      id: "git",
      name: "Git",
      category: "devops",
      level: 88,
      yearsExperience: 2,
      projectsCount: 25,
      description:
        "Version control system for tracking changes and collaboration.",
      icon: <Code className="w-8 h-8" />,
      color:
        "text-orange-600 dark:text-orange-400 group-[.black]:text-orange-400",
      gradient: "from-orange-600 to-red-600",
      tags: ["Version Control", "Branching", "Collaboration", "History"],
      isFavorite: true,
      lastUsed: "2024-01",
    },
    {
      id: "github",
      name: "GitHub",
      category: "devops",
      level: 85,
      yearsExperience: 2,
      projectsCount: 22,
      description:
        "Git repository hosting with collaboration tools and CI/CD integration.",
      icon: <Cloud className="w-8 h-8" />,
      color: "text-gray-700 dark:text-gray-300 group-[.black]:text-gray-300",
      gradient: "from-gray-700 to-black",
      tags: ["Repository", "Collaboration", "CI/CD", "Issues"],
      isFavorite: true,
      lastUsed: "2024-01",
    },
    {
      id: "github-actions",
      name: "GitHub Actions",
      category: "devops",
      level: 68,
      yearsExperience: 1,
      projectsCount: 5,
      description:
        "CI/CD automation platform for building, testing, and deploying.",
      icon: <Zap className="w-8 h-8" />,
      color: "text-blue-600 dark:text-blue-400 group-[.black]:text-blue-400",
      gradient: "from-blue-600 to-purple-600",
      tags: ["CI/CD", "Automation", "Workflows", "Testing"],
      isFavorite: false,
      lastUsed: "2023-12",
    },
    {
      id: "vercel",
      name: "Vercel",
      category: "devops",
      level: 75,
      yearsExperience: 1,
      projectsCount: 2,
      description:
        "Frontend deployment platform with global CDN and serverless functions.",
      icon: <Cloud className="w-8 h-8" />,
      color: "text-black dark:text-white group-[.black]:text-white",
      gradient: "from-gray-800 to-black",
      tags: ["Deployment", "CDN", "Serverless", "Frontend"],
      isFavorite: true,
      lastUsed: "2024-01",
    },
    {
      id: "npm",
      name: "npm",
      category: "devops",
      level: 80,
      yearsExperience: 1,
      projectsCount: 6,
      description: "Package manager for JavaScript with dependency management.",
      icon: <Layers className="w-8 h-8" />,
      color: "text-red-500 dark:text-red-400 group-[.black]:text-red-400",
      gradient: "from-red-500 to-red-700",
      tags: ["Package Manager", "Dependencies", "JavaScript", "Registry"],
      isFavorite: true,
      lastUsed: "2024-01",
    },
    {
      id: "bash",
      name: "Bash",
      category: "devops",
      level: 78,
      yearsExperience: 2,
      projectsCount: 12,
      description:
        "Shell scripting for automation, system administration, and command-line tools.",
      icon: <Terminal className="w-8 h-8" />,
      color: "text-green-600 dark:text-green-400 group-[.black]:text-green-400",
      gradient: "from-green-600 to-green-800",
      tags: ["Scripting", "Automation", "CLI", "System Admin"],
      isFavorite: false,
      lastUsed: "2024-01",
    },
    {
      id: "linux",
      name: "Linux",
      category: "devops",
      level: 82,
      yearsExperience: 2,
      projectsCount: 15,
      description:
        "Unix-like operating system for servers, development, and system administration.",
      icon: <Server className="w-8 h-8 text-yellow-500" />,
      color: "text-yellow-500",
      gradient: "from-yellow-500 to-orange-500",
      tags: ["Operating System", "Servers", "CLI", "Open Source"],
      isFavorite: true,
      lastUsed: "2024-01",
    },
    {
      id: "apache",
      name: "Apache",
      category: "devops",
      level: 70,
      yearsExperience: 2,
      projectsCount: 8,
      description:
        "Web server software for hosting websites and web applications.",
      icon: <Server className="w-8 h-8 text-red-600" />,
      color: "text-red-600",
      gradient: "from-red-600 to-red-800",
      tags: ["Web Server", "Hosting", "Configuration", "Modules"],
      isFavorite: false,
      lastUsed: "2023-11",
    },
    {
      id: "vscode",
      name: "VS Code",
      category: "devops",
      level: 90,
      yearsExperience: 2,
      projectsCount: 25,
      description:
        "Code editor with extensions, debugging, and integrated development features.",
      icon: <Code className="w-8 h-8 text-blue-500" />,
      color: "text-blue-500",
      gradient: "from-blue-500 to-blue-700",
      tags: ["Code Editor", "Extensions", "Debugging", "IDE"],
      isFavorite: true,
      lastUsed: "2024-01",
    },

    // CMS & Platforms
    {
      id: "wordpress",
      name: "WordPress",
      category: "cms",
      level: 75,
      yearsExperience: 2,
      projectsCount: 4,
      description:
        "Content management system for websites, blogs, and e-commerce.",
      icon: <PenTool className="w-8 h-8 text-blue-600" />,
      color: "text-blue-600",
      gradient: "from-blue-600 to-blue-800",
      tags: ["CMS", "Themes", "Plugins", "Content"],
      isFavorite: false,
      lastUsed: "2023-10",
    },
    {
      id: "shopware",
      name: "Shopware",
      category: "cms",
      level: 70,
      yearsExperience: 1,
      projectsCount: 4,
      description:
        "E-commerce platform for online stores and digital commerce solutions.",
      icon: <ShoppingCart className="w-8 h-8 text-purple-600" />,
      color: "text-purple-600",
      gradient: "from-purple-600 to-pink-600",
      tags: ["E-commerce", "Online Store", "Commerce", "Platform"],
      isFavorite: false,
      lastUsed: "2023-09",
    },
  ];

  const filteredSkills = skills.filter(
    (skill) => selectedCategory === "all" || skill.category === selectedCategory
  );

  // Show more logic
  const [showAll, setShowAll] = useState(false);
  const skillsPerPage = 6;
  const sortedSkills = [...filteredSkills].sort((a, b) => {
    switch (sortBy) {
      case "level":
        return b.level - a.level;
      case "experience":
        return b.yearsExperience - a.yearsExperience;
      case "projects":
        return b.projectsCount - a.projectsCount;
      default:
        return 0;
    }
  });
  const visibleSkills = showAll
    ? sortedSkills
    : sortedSkills.slice(0, skillsPerPage);

  const favoriteSkills = skills.filter((skill) => skill.isFavorite);

  return (
    <section id="skills" className="py-20 bg-theme-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-theme-accent" />
            <h2
              className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent
                dark:bg-gradient-to-r dark:from-cyan-400 dark:to-blue-600
                group-[.black]:bg-gradient-to-r group-[.black]:from-white group-[.black]:to-gray-400"
            >
              {t("title")}
            </h2>
            <Sparkles className="w-8 h-8 text-theme-accent" />
          </div>
          <p className="text-xl text-theme-secondary max-w-3xl mx-auto">
            {t("description")}
          </p>
        </motion.div>

        {/* Favorite Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-6">
            <Heart className="w-6 h-6 text-red-500" />
            <h3 className="text-2xl font-bold text-theme-primary">
              {t("favorite_technologies")}
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {favoriteSkills.map((skill) => (
              <motion.div
                key={skill.id}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 bg-theme-secondary border border-theme-accent rounded-full shadow-theme-secondary flex items-center gap-2"
              >
                <div className="text-theme-accent">{skill.icon}</div>
                <span className="font-semibold text-theme-primary">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          {/* Category Filter */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-theme-primary mb-4">
              {t("categories")}
            </h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-3
                    ${
                      selectedCategory === category.id
                        ? "bg-theme-accent text-white shadow-lg"
                        : "bg-theme-secondary border border-theme-primary text-theme-primary hover:border-theme-accent"
                    }
                  `}
                >
                  <span
                    className={
                      selectedCategory === category.id
                        ? "text-white"
                        : category.color
                    }
                  >
                    {category.icon}
                  </span>
                  {category.name}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Sort Options */}
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 w-full">
            <span className="text-theme-primary font-semibold min-w-max mb-1 md:mb-0">
              {t("sort_by")}
            </span>
            <div className="flex flex-col sm:flex-row gap-2 w-full">
              {[
                { key: "level", label: t("skill_level") },
                { key: "experience", label: t("experience") },
                { key: "projects", label: t("projects") },
              ].map((option) => (
                <motion.button
                  key={option.key}
                  onClick={() => setSortBy(option.key as typeof sortBy)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    w-full sm:w-auto px-4 py-3 rounded-lg font-medium transition-all duration-200
                    ${
                      sortBy === option.key
                        ? "bg-theme-accent text-white"
                        : "bg-theme-secondary border border-theme-primary text-theme-primary hover:border-theme-accent"
                    }
                  `}
                >
                  {option.label}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Skills Grid */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="wait">
            {visibleSkills.map((skill, index) => (
              <motion.div
                key={skill.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  layout: { duration: 0.3 },
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                onHoverStart={() => setHoveredSkill(skill.id)}
                onHoverEnd={() => setHoveredSkill(null)}
                className="relative p-6 bg-theme-secondary border border-theme-primary rounded-xl shadow-theme-secondary hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Favorite Badge */}
                {skill.isFavorite && (
                  <div className="absolute top-4 right-4">
                    <Heart className="w-5 h-5 text-red-500 fill-current" />
                  </div>
                )}

                {/* Icon & Name */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="group-hover:scale-110 transition-transform duration-200">
                    {/* Icon with colored circle background accent */}
                    <span
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${skill.gradient}`}
                    >
                      {/* Render icon as component with text-white */}
                      {(() => {
                        const IconComp = (skill.icon as React.ReactElement)
                          .type;
                        return <IconComp className="w-8 h-8 text-white" />;
                      })()}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-theme-primary">
                      {skill.name}
                    </h3>
                    <span className="text-sm text-theme-secondary capitalize">
                      {categories.find((c) => c.id === skill.category)?.name}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-theme-secondary mb-4 text-sm leading-relaxed">
                  {skill.description}
                </p>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-theme-primary">
                      {t("skill_level")}
                    </span>
                    <span className="text-sm font-bold text-theme-accent">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-theme-primary rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-full gradient-accent"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-theme-primary">
                      {skill.yearsExperience}
                    </div>
                    <div className="text-xs text-theme-secondary">
                      {t("years")}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-theme-primary">
                      {skill.projectsCount}
                    </div>
                    <div className="text-xs text-theme-secondary">
                      {t("projects")}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-theme-secondary">
                      {t("last_used")}
                    </div>
                    <div className="text-xs font-medium text-theme-accent">
                      {skill.lastUsed}
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {skill.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs bg-theme-accent/10 text-theme-accent rounded-md font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                  {skill.tags.length > 3 && (
                    <span className="px-2 py-1 text-xs text-theme-secondary">
                      +{skill.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 gradient-accent opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300"
                  initial={false}
                  animate={{ opacity: hoveredSkill === skill.id ? 0.05 : 0 }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More / Show Less Button */}
        {sortedSkills.length > skillsPerPage && (
          <div className="flex justify-center mt-6">
            {showAll ? (
              <button
                className="px-6 py-3 rounded-full bg-theme-secondary text-theme-primary font-semibold shadow-lg border border-theme-accent hover:scale-105 transition-all duration-200"
                onClick={() => setShowAll(false)}
              >
                {t("show_less")}
              </button>
            ) : (
              <button
                className="px-6 py-3 rounded-full bg-theme-accent text-white font-semibold shadow-lg hover:scale-105 transition-all duration-200"
                onClick={() => setShowAll(true)}
              >
                {t("show_more")}
              </button>
            )}
          </div>
        )}

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 p-8 bg-theme-secondary border border-theme-primary rounded-xl shadow-theme-secondary"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-black bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent mb-2">
                {skills.length}
              </div>
              <div className="text-theme-secondary font-medium">
                {t("technologies", { count: skills.length })}
              </div>
            </div>
            <div>
              <div className="text-3xl font-black bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent mb-2">
                {Math.max(...skills.map((s) => s.yearsExperience))}+
              </div>
              <div className="text-theme-secondary font-medium">
                {t("years_experience")}
              </div>
            </div>
            <div>
              <div className="text-3xl font-black bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent mb-2">
                {skills.reduce((acc, skill) => acc + skill.projectsCount, 0)}+
              </div>
              <div className="text-theme-secondary font-medium">
                {t("projects")}
              </div>
            </div>
            <div>
              <div className="text-3xl font-black bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent mb-2">
                {Math.round(
                  skills.reduce((acc, skill) => acc + skill.level, 0) /
                    skills.length
                )}
                %
              </div>
              <div className="text-theme-secondary font-medium">
                {t("average_level")}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;

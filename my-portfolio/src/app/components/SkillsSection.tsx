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

// Color schemes for dark/light mode
const colorSchemes = {
  light: {
    bg: "",
    card: "bg-white/90",
    accent: "bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-orange-400",
    text: "text-indigo-900",
    subtext: "text-indigo-600",
    button:
      "bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white hover:from-fuchsia-500 hover:to-orange-400",
    shadow: "shadow-xl shadow-indigo-200/40",
    border: "border-indigo-200",
  },
  dark: {
    bg: "",
    card: "bg-neutral-900/90",
    accent: "bg-gradient-to-r from-indigo-400 via-fuchsia-500 to-orange-400",
    text: "text-white",
    subtext: "text-indigo-300",
    button:
      "bg-gradient-to-r from-indigo-400 to-fuchsia-500 text-white hover:from-fuchsia-500 hover:to-orange-400",
    shadow: "shadow-2xl shadow-indigo-900/40",
    border: "border-indigo-900",
  },
};

// Mock Data
const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    name: "Frontend",
    icon: <Palette className="w-5 h-5" />,
    color: "from-pink-500 to-violet-600",
    gradient: "bg-gradient-to-br from-pink-500/20 to-violet-600/20",
  },
  {
    id: "backend",
    name: "Backend",
    icon: <Server className="w-5 h-5" />,
    color: "from-emerald-500 to-teal-600",
    gradient: "bg-gradient-to-br from-emerald-500/20 to-teal-600/20",
  },
  {
    id: "database",
    name: "Database",
    icon: <Database className="w-5 h-5" />,
    color: "from-orange-500 to-red-600",
    gradient: "bg-gradient-to-br from-orange-500/20 to-red-600/20",
  },
  {
    id: "devops",
    name: "DevOps & Tools",
    icon: <Cloud className="w-5 h-5" />,
    color: "from-blue-500 to-indigo-600",
    gradient: "bg-gradient-to-br from-blue-500/20 to-indigo-600/20",
  },
  {
    id: "cms",
    name: "CMS & Platforms",
    icon: <PenTool className="w-5 h-5" />,
    color: "from-amber-500 to-orange-600",
    gradient: "bg-gradient-to-br from-amber-500/20 to-orange-600/20",
  },
];

const skillsData: Skill[] = [
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
    icon: <Code className="w-8 h-8 text-orange-500" />,
    color: "text-orange-500",
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
    icon: <Palette className="w-8 h-8 text-blue-500" />,
    color: "text-blue-500",
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
    icon: <Zap className="w-8 h-8 text-yellow-500" />,
    color: "text-yellow-500",
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
    icon: <BookOpen className="w-8 h-8 text-blue-600" />,
    color: "text-blue-600",
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
    icon: <Sparkles className="w-8 h-8 text-pink-500" />,
    color: "text-pink-500",
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
    icon: <Smartphone className="w-8 h-8 text-cyan-400" />,
    color: "text-cyan-400",
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
    icon: <Server className="w-8 h-8 text-gray-800" />,
    color: "text-gray-800",
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
    icon: <Palette className="w-8 h-8 text-green-500" />,
    color: "text-green-500",
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
    icon: <Layers className="w-8 h-8 text-cyan-500" />,
    color: "text-cyan-500",
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
    icon: <Award className="w-8 h-8 text-purple-600" />,
    color: "text-purple-600",
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
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    color: "text-yellow-400",
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
    icon: <Database className="w-8 h-8 text-purple-600" />,
    color: "text-purple-600",
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
    icon: <Layers className="w-8 h-8 text-red-500" />,
    color: "text-red-500",
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
    icon: <Server className="w-8 h-8 text-green-600" />,
    color: "text-green-600",
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
    icon: <BookOpen className="w-8 h-8 text-blue-500" />,
    color: "text-blue-500",
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
    icon: <Database className="w-8 h-8 text-blue-700" />,
    color: "text-blue-700",
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
    icon: <Database className="w-8 h-8 text-blue-600" />,
    color: "text-blue-600",
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
    icon: <Database className="w-8 h-8 text-green-700" />,
    color: "text-green-700",
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
    icon: <Cloud className="w-8 h-8 text-blue-500" />,
    color: "text-blue-500",
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
    icon: <Code className="w-8 h-8 text-orange-600" />,
    color: "text-orange-600",
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
    icon: <Cloud className="w-8 h-8 text-gray-700" />,
    color: "text-gray-700",
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
    icon: <Zap className="w-8 h-8 text-blue-600" />,
    color: "text-blue-600",
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
    icon: <Cloud className="w-8 h-8 text-black" />,
    color: "text-black",
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
    icon: <Layers className="w-8 h-8 text-red-500" />,
    color: "text-red-500",
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
    icon: <Terminal className="w-8 h-8 text-green-600" />,
    color: "text-green-600",
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

// Components
const SkillCard: React.FC<{
  skill: Skill;
  index: number;
  isFlipped: boolean;
  onFlip: () => void;
}> = ({ skill, index, isFlipped, onFlip }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 60, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -60, scale: 0.8 }}
      transition={{
        delay: index * 0.08,
        duration: 0.7,
        type: "spring",
        stiffness: 120,
      }}
      className="group relative h-96 w-full"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="relative w-full h-full cursor-pointer preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        onClick={onFlip}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 w-full h-full rounded-[2rem] p-6 border shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-xl border-gray-200/60"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <motion.div
                  className="text-4xl filter drop-shadow-lg"
                  animate={{
                    scale: isHovered ? 1.3 : 1,
                    rotate: isHovered ? 15 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {skill.icon}
                </motion.div>
                <div>
                  <h3 className="font-bold text-xl text-gray-800 mb-1">
                    {skill.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    {skill.isFavorite && (
                      <Heart className="w-4 h-4 text-red-500 fill-current" />
                    )}
                    <span className="text-sm text-gray-500 font-medium">
                      {
                        skillCategories.find((cat) => cat.id === skill.category)
                          ?.name
                      }
                    </span>
                  </div>
                </div>
              </div>
              <motion.div
                className="text-xs text-gray-400 bg-gray-100 px-3 py-1 rounded-full"
                animate={{ opacity: isHovered ? 1 : 0.7 }}
              >
                Flip me
              </motion.div>
            </div>

            {/* Level Bar */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-semibold text-gray-700">
                  Skill Level
                </span>
                <span className={`text-lg font-bold ${skill.color}`}>
                  {skill.level}%
                </span>
              </div>
              <div className="w-full h-4 rounded-full overflow-hidden bg-gray-200 shadow-inner">
                <motion.div
                  className={`h-full bg-gradient-to-r ${skill.gradient} rounded-full shadow-md`}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{
                    delay: index * 0.1 + 0.6,
                    duration: 1.8,
                    ease: "easeOut",
                  }}
                />
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <motion.div
                className="text-center p-4 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-sm border border-gray-200/50"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div
                  className={`text-2xl font-bold bg-gradient-to-r ${skill.gradient} bg-clip-text text-transparent mb-1`}
                >
                  {skill.yearsExperience}
                </div>
                <div className="text-xs text-gray-600 font-medium">
                  Years Experience
                </div>
              </motion.div>
              <motion.div
                className="text-center p-4 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-sm border border-gray-200/50"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div
                  className={`text-2xl font-bold bg-gradient-to-r ${skill.gradient} bg-clip-text text-transparent mb-1`}
                >
                  {skill.projectsCount}
                </div>
                <div className="text-xs text-gray-600 font-medium">
                  Projects Built
                </div>
              </motion.div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {skill.tags.slice(0, 3).map((tag, tagIndex) => (
                <motion.span
                  key={tagIndex}
                  className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700 border border-gray-200"
                  whileHover={{ scale: 1.1, backgroundColor: "#f3f4f6" }}
                >
                  {tag}
                </motion.span>
              ))}
              {skill.tags.length > 3 && (
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-200 text-gray-600">
                  +{skill.tags.length - 3}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 w-full h-full rounded-[2rem] p-6 border shadow-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl border-purple-200/60"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-xl text-gray-800">
                {skill.name} Details
              </h3>
              <motion.div
                className="text-xs text-gray-500 bg-white/60 px-3 py-1 rounded-full"
                animate={{ opacity: isHovered ? 1 : 0.7 }}
              >
                Flip back
              </motion.div>
            </div>

            <div className="space-y-5 flex-1">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-5 h-5 text-blue-500" />
                  <span className="text-sm font-semibold text-gray-700">
                    Description
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-semibold text-gray-700">
                    Last Used
                  </span>
                </div>
                <p className="text-sm text-gray-600 font-medium">
                  {skill.lastUsed}
                </p>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-5 h-5 text-yellow-500" />
                  <span className="text-sm font-semibold text-gray-700">
                    All Technologies
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {skill.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-white/70 text-gray-700 border border-gray-200/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const SkillsSection: React.FC = () => {
  const { theme } = useTheme();
  const colors = colorSchemes[theme];
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"name" | "level" | "experience">(
    "level"
  );
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());
  const [showAll, setShowAll] = useState(false);

  const INITIAL_DISPLAY_COUNT = 8; // Show only 8 skills initially

  const filteredSkills = skillsData
    .filter(
      (skill) =>
        (selectedCategory === "all" || skill.category === selectedCategory) &&
        (!showFavoritesOnly || skill.isFavorite)
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "level":
          return b.level - a.level;
        case "experience":
          return b.yearsExperience - a.yearsExperience;
        default:
          return 0;
      }
    });

  // Limit displayed skills based on showAll state
  const displayedSkills = showAll
    ? filteredSkills
    : filteredSkills.slice(0, INITIAL_DISPLAY_COUNT);

  const handleCardFlip = (skillId: string) => {
    setFlippedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(skillId)) {
        newSet.delete(skillId);
      } else {
        newSet.add(skillId);
      }
      return newSet;
    });
  };

  const resetFilters = () => {
    setSelectedCategory("all");
    setSortBy("level");
    setShowFavoritesOnly(false);
    setFlippedCards(new Set());
    setShowAll(false);
  };

  return (
    <section
      className="min-h-screen py-24 px-4 relative overflow-hidden"
      id="skills"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.1) 0%, transparent 50%),
              linear-gradient(45deg, transparent 40%, rgba(59, 130, 246, 0.03) 50%, transparent 60%)
            `,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="text-center mb-12 sm:mb-20"
        >
          <div className="flex justify-center items-center gap-3 sm:gap-6 mb-6 sm:mb-8">
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="w-8 h-8 sm:w-16 sm:h-16 text-purple-600" />
            </motion.div>
            <h1 className="text-4xl sm:text-7xl md:text-8xl font-black tracking-tight bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Skills Universe
            </h1>
            <motion.div
              animate={{ rotate: [0, -15, 15, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            >
              <Zap className="w-8 h-8 sm:w-16 sm:h-16 text-pink-600" />
            </motion.div>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-base sm:text-xl max-w-4xl mx-auto text-gray-700 leading-relaxed px-4 sm:px-0"
          >
            Interactive exploration of my technical expertise with dynamic
            filtering, animated progress tracking, and immersive card
            experiences. Click any card to reveal detailed insights.
          </motion.p>
        </motion.div>

        {/* Enhanced Controls */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="backdrop-blur-xl rounded-3xl p-4 sm:p-8 mb-16 border bg-white/60 border-gray-200/60 shadow-xl"
        >
          <div className="flex flex-col gap-6">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-start">
              <motion.button
                onClick={() => setSelectedCategory("all")}
                className={`px-3 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === "all"
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25"
                    : "bg-white/80 text-gray-700 hover:bg-white border border-gray-200 hover:shadow-md"
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Layers className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1 sm:mr-2" />
                All Skills
              </motion.button>
              {skillCategories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-3 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-1 sm:gap-2 ${
                    selectedCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : "bg-white/80 text-gray-700 hover:bg-white border border-gray-200 hover:shadow-md"
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {React.cloneElement(
                    category.icon as React.ReactElement,
                    {
                      className: "w-3 h-3 sm:w-5 sm:h-5",
                    } as any
                  )}
                  <span className="hidden sm:inline">{category.name}</span>
                  <span className="sm:hidden">
                    {category.name.split(" ")[0]}
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Additional Controls */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center sm:justify-end">
              <motion.button
                onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
                className={`w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                  showFavoritesOnly
                    ? "bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg shadow-red-500/25"
                    : "bg-white/80 text-gray-700 hover:bg-white border border-gray-200 hover:shadow-md"
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
                Favorites
              </motion.button>

              <select
                value={sortBy}
                onChange={(e) =>
                  setSortBy(e.target.value as "name" | "level" | "experience")
                }
                className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-semibold border bg-white/80 border-gray-200 text-gray-700 hover:bg-white hover:shadow-md transition-all duration-300"
              >
                <option value="level">Sort by Skill Level</option>
                <option value="name">Sort by Name</option>
                <option value="experience">Sort by Experience</option>
              </select>

              <motion.button
                onClick={resetFilters}
                className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 bg-white/80 text-gray-700 hover:bg-white border border-gray-200 hover:shadow-md"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <RotateCcw className="w-3 h-3 sm:w-4 sm:h-4" />
                Reset All
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {displayedSkills.map((skill, index) => (
              <SkillCard
                key={skill.id}
                skill={skill}
                index={index}
                isFlipped={flippedCards.has(skill.id)}
                onFlip={() => handleCardFlip(skill.id)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More Button */}
        {!showAll && filteredSkills.length > INITIAL_DISPLAY_COUNT && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex justify-center mt-12"
          >
            <motion.button
              onClick={() => setShowAll(true)}
              className="px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 flex items-center gap-3"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Sparkles className="w-5 h-5" />
              Show {filteredSkills.length - INITIAL_DISPLAY_COUNT} More Skills
              <Sparkles className="w-5 h-5" />
            </motion.button>
          </motion.div>
        )}

        {/* Show Less Button */}
        {showAll && filteredSkills.length > INITIAL_DISPLAY_COUNT && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex justify-center mt-12"
          >
            <motion.button
              onClick={() => setShowAll(false)}
              className="px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 bg-gradient-to-r from-gray-600 to-gray-700 text-white shadow-lg hover:shadow-xl flex items-center gap-3"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <RotateCcw className="w-5 h-5" />
              Show Less
            </motion.button>
          </motion.div>
        )}

        {filteredSkills.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-24"
          >
            <div className="text-8xl mb-6 opacity-20">🔍</div>
            <h3 className="text-2xl font-bold text-gray-600 mb-2">
              No Skills Found
            </h3>
            <p className="text-lg text-gray-500">
              Try adjusting your filters to see more results
            </p>
          </motion.div>
        )}

        {/* Enhanced Stats Footer */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-24 backdrop-blur-xl rounded-3xl p-10 border bg-white/60 border-gray-200/60 shadow-xl"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-2">
              Portfolio Statistics
            </h3>
            <p className="text-gray-600">
              A comprehensive overview of my technical journey
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-5xl font-black bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
                {skillsData.length}
              </div>
              <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                Total Skills
              </div>
            </motion.div>
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-5xl font-black bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-2">
                {Math.round(
                  skillsData.reduce(
                    (sum, skill) => sum + skill.yearsExperience,
                    0
                  ) / skillsData.length
                )}
              </div>
              <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                Avg Experience
              </div>
            </motion.div>
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-5xl font-black bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent mb-2">
                {skillsData.reduce(
                  (sum, skill) => sum + skill.projectsCount,
                  0
                )}
              </div>
              <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                Total Projects
              </div>
            </motion.div>
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-5xl font-black bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2">
                {skillsData.filter((skill) => skill.isFavorite).length}
              </div>
              <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                Favorite Tools
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;

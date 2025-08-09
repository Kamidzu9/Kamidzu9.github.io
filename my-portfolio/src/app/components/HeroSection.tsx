"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  MapPin,
  Code,
  Sparkles,
  ArrowDown,
  Star,
  Zap,
  Heart,
  Coffee,
  Monitor,
  Server,
  Database,
  Container,
  Rocket,
  Cpu,
  Palette,
  Flame,
} from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/Kamidzu9",
    icon: (
      <Github className="w-6 h-6 text-gray-900 group-hover:text-white transition-colors duration-200" />
    ),
    color: "hover:bg-gray-800",
    textColor: "hover:text-white",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mykhailo-solovey-34345934a/",
    icon: (
      <Linkedin className="w-6 h-6 text-gray-900 group-hover:text-white transition-colors duration-200" />
    ),
    color: "hover:bg-blue-600",
    textColor: "hover:text-white",
  },
  {
    name: "Email",
    href: "mailto:msolovey.job@gmail.com",
    icon: (
      <Mail className="w-6 h-6 text-gray-900 group-hover:text-white transition-colors duration-200" />
    ),
    color: "hover:bg-red-500",
    textColor: "hover:text-white",
  },
];

const skills = [
  { name: "Frontend", icon: <Monitor className="w-8 h-8" />, level: 85 },
  { name: "Backend", icon: <Server className="w-8 h-8" />, level: 80 },
  { name: "Database", icon: <Database className="w-8 h-8" />, level: 75 },
  { name: "DevOps", icon: <Container className="w-8 h-8" />, level: 70 },
];

const FloatingElement: React.FC<{
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}> = ({ children, delay = 0, duration = 8, className = "" }) => (
  <motion.div
    className={`absolute ${className}`}
    animate={{
      y: [0, -15, 0],
      x: [0, 10, 0],
      rotate: [0, 3, -3, 0],
    }}
    transition={{
      duration,
      repeat: Infinity,
      delay,
      ease: "easeInOut",
    }}
  >
    {children}
  </motion.div>
);

const TypingEffect: React.FC<{ texts: string[]; className?: string }> = ({
  texts,
  className = "",
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    let timeoutId: NodeJS.Timeout;

    if (isTyping) {
      if (displayText.length < currentText.length) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, 100);
      } else {
        timeoutId = setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, isTyping, currentTextIndex, texts]);

  return (
    <span className={className}>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="text-purple-500"
      >
        |
      </motion.span>
    </span>
  );
};

// Color schemes for dark/light mode
const colorSchemes = {
  light: {
    bg: "bg-gradient-to-br from-white via-blue-50 to-indigo-100",
    text: "text-indigo-900",
    subtext: "text-indigo-600",
    accent: "bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-orange-400",
    button:
      "bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white hover:from-fuchsia-500 hover:to-orange-400",
    card: "bg-white/80 backdrop-blur-sm",
    icon: "text-indigo-500",
  },
  dark: {
    bg: "bg-gradient-to-br from-neutral-900 via-indigo-950 to-purple-900",
    text: "text-white",
    subtext: "text-indigo-300",
    accent: "bg-gradient-to-r from-indigo-400 via-fuchsia-500 to-orange-400",
    button:
      "bg-gradient-to-r from-indigo-400 to-fuchsia-500 text-white hover:from-fuchsia-500 hover:to-orange-400",
    card: "bg-neutral-900/80 backdrop-blur-sm",
    icon: "text-fuchsia-300",
  },
};

const HeroSection: React.FC<{ scrollTo: (id: string) => void }> = ({
  scrollTo,
}) => {
  const { theme } = useTheme();
  const colors = colorSchemes[theme];
  const controls = useAnimation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollIndicator(window.scrollY < 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Advanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{
            left: `${20 + mousePosition.x * 0.05}%`,
            top: `${10 + mousePosition.y * 0.05}%`,
          }}
        />
        <motion.div
          className="absolute w-80 h-80 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{
            right: `${15 + mousePosition.x * 0.03}%`,
            bottom: `${20 + mousePosition.y * 0.03}%`,
          }}
        />

        {/* Floating Elements */}
        <FloatingElement
          delay={0}
          className="top-20 left-20 text-purple-500 opacity-30"
        >
          <Code className="w-12 h-12" />
        </FloatingElement>
        <FloatingElement
          delay={2}
          className="top-32 right-32 text-pink-500 opacity-30"
        >
          <Rocket className="w-10 h-10" />
        </FloatingElement>
        <FloatingElement
          delay={4}
          className="bottom-32 left-32 text-blue-500 opacity-30"
        >
          <Cpu className="w-10 h-10" />
        </FloatingElement>
        <FloatingElement
          delay={1}
          className="bottom-20 right-20 text-purple-600 opacity-30"
        >
          <Zap className="w-12 h-12" />
        </FloatingElement>
        <FloatingElement
          delay={3}
          className="top-1/2 left-10 text-pink-400 opacity-30"
        >
          <Palette className="w-8 h-8" />
        </FloatingElement>
        <FloatingElement
          delay={5}
          className="top-1/2 right-10 text-orange-400 opacity-30"
        >
          <Flame className="w-8 h-8" />
        </FloatingElement>
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4 text-center"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* Avatar with Advanced Effects */}
        <motion.div
          variants={itemVariants}
          className="relative mx-auto mb-8 w-48 h-48 group"
        >
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 p-1"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-full h-full rounded-full bg-white p-2">
              <motion.div
                className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src="/avatar.jpg"
                  alt="Mykhailo Solovey"
                  className="w-full h-full object-cover rounded-full"
                />
                <motion.div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </div>
          </motion.div>

          {/* Status Indicator */}
          <motion.div
            className="absolute bottom-4 right-4 w-6 h-6 bg-green-400 rounded-full border-4 border-white shadow-lg"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-full h-full bg-green-400 rounded-full animate-ping" />
          </motion.div>
        </motion.div>

        {/* Name and Title */}
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Mykhailo
            </span>{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Solovey
            </span>
          </h1>

          <div className="text-2xl md:text-3xl font-bold text-gray-700 mb-4 h-12">
            <TypingEffect
              texts={[
                "Webentwickler in Ausbildung",
                "Frontend Specialist",
                "Backend Developer",
                "Full-Stack Enthusiast",
                "UI/UX Lover",
              ]}
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500"
            />
          </div>

          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Leidenschaftlicher Azubi mit 2 Jahren Erfahrung in modernen
            Webtechnologien. Spezialisiert auf{" "}
            <span className="font-semibold text-purple-600">React</span>,
            <span className="font-semibold text-blue-600"> PHP</span> und
            <span className="font-semibold text-pink-600"> schönes Design</span>
            .
          </motion.p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -3, scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <div className="text-purple-600 mb-3">{skill.icon}</div>
              <h3 className="font-bold text-gray-800 mb-2">{skill.name}</h3>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <motion.div
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ delay: 1 + index * 0.2, duration: 1 }}
                />
              </div>
              <span className="text-sm text-gray-600 font-medium">
                {skill.level}%
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Location & Availability */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center items-center gap-6 mb-12"
        >
          <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
            <MapPin className="w-5 h-5 text-purple-600" />
            <span className="text-gray-700 font-medium">Deutschland</span>
          </div>
          <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
            <Coffee className="w-5 h-5 text-pink-600" />
            <span className="text-gray-700 font-medium">
              Verfügbar für Projekte
            </span>
          </div>
          <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
            <Heart className="w-5 h-5 text-red-500" />
            <span className="text-gray-700 font-medium">
              Code mit Leidenschaft
            </span>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-4 mb-12"
        >
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 transition-all duration-300 text-gray-600 ${social.color} ${social.textColor}`}
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
            >
              {social.icon}

              {/* Tooltip */}
              <motion.div
                className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                initial={{ y: 10 }}
                whileHover={{ y: 0 }}
              >
                {social.name}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800" />
              </motion.div>
            </motion.a>
          ))}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            onClick={() => scrollTo("contact")}
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center gap-2">
              <Mail className="w-6 h-6" />
              Kontakt aufnehmen
            </span>
          </motion.button>

          <motion.button
            onClick={() => window.open("#", "_blank")}
            className="group relative px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 border-2 border-purple-200 rounded-2xl font-bold text-lg hover:bg-purple-50 hover:border-purple-300 transition-all duration-300"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="flex items-center gap-2">
              <Download className="w-6 h-6" />
              Lebenslauf herunterladen
            </span>
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        {showScrollIndicator && (
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: [0, 1, 1, 0],
              y: [20, 0, 0, -10],
            }}
            transition={{
              duration: 2.2,
              times: [0, 0.3, 0.7, 1],
              repeat: Infinity,
              repeatDelay: 1.5,
            }}
          >
            <motion.div
              className="flex flex-col items-center text-gray-400/80 cursor-pointer"
              onClick={() => scrollTo("skills")}
              whileHover={{ scale: 1.1, y: -2 }}
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 0.7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowDown className="w-8 h-8 text-purple-400" />
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default HeroSection;

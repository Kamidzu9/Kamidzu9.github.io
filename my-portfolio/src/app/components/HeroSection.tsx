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
import { useTranslation } from "react-i18next";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/Kamidzu9",
    icon: Github,
    color: "hover:bg-gray-800",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mykhailo-solovey-34345934a/",
    icon: Linkedin,
    color: "hover:bg-blue-600",
  },
  {
    name: "Email",
    href: "mailto:msolovey.job@gmail.com",
    icon: Mail,
    color: "hover:bg-red-500",
  },
];

const skills = [
  { name: "Frontend", icon: Monitor, level: 85 },
  { name: "Backend", icon: Server, level: 80 },
  { name: "Database", icon: Database, level: 75 },
  { name: "DevOps", icon: Container, level: 70 },
];

const techIcons = [
  { icon: Code, delay: 0, position: "top-20 left-20" },
  { icon: Rocket, delay: 2, position: "top-32 right-32" },
  { icon: Cpu, delay: 4, position: "bottom-32 left-32" },
  { icon: Zap, delay: 1, position: "bottom-20 right-20" },
  { icon: Palette, delay: 3, position: "top-1/2 left-10" },
  { icon: Flame, delay: 5, position: "top-1/2 right-10" },
];

const FloatingElement: React.FC<{
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}> = ({ children, delay = 0, duration = 8, className = "" }) => (
  <motion.div
    className={`absolute opacity-30 text-theme-accent ${className}`}
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
        className="text-theme-accent"
      >
        |
      </motion.span>
    </span>
  );
};

const HeroSection: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useTranslation("hero");
  const controls = useAnimation();
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide scroll indicator when scrolling down past 100px
      if (currentScrollY > 100) {
        setShowScrollIndicator(false);
      } else if (currentScrollY < lastScrollY && currentScrollY < 50) {
        // Show again when scrolling back up to near top
        setShowScrollIndicator(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

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

  const scrollToNextSection = () => {
    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center transition-colors duration-700 rjustify-center overflow-hidden pt-20 bg-theme-primary"
    >
      {/* Floating Tech Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {techIcons.map((item, index) => (
          <FloatingElement
            key={index}
            delay={item.delay}
            className={item.position}
          >
            <item.icon className="w-8 h-8 md:w-12 md:h-12" />
          </FloatingElement>
        ))}
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
          className="relative mx-auto mb-8 w-40 h-40 md:w-48 md:h-48 group"
        >
          <motion.div
            className="absolute inset-0 rounded-full gradient-accent p-1"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-full h-full rounded-full bg-theme-primary p-2">
              <motion.div
                className="relative w-full h-full rounded-full overflow-hidden bg-theme-secondary shadow-2xl border-2 border-theme-accent"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src="/avatar.jpg"
                  alt="Mykhailo Solovey"
                  className="w-full h-full object-cover rounded-full"
                />
                <motion.div className="absolute inset-0 gradient-accent opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300" />
              </motion.div>
            </div>
          </motion.div>

          {/* Status Indicator */}
          <motion.div
            className="absolute bottom-4 right-4 w-6 h-6 bg-green-400 rounded-full border-4 border-theme-primary shadow-lg"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-full h-full bg-green-400 rounded-full animate-ping" />
          </motion.div>
        </motion.div>

        {/* Name and Title */}
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4">
            <span className="text-theme-primary">Mykhailo</span>{" "}
            <span className="text-theme-primary">Solovey</span>
          </h1>

          <div className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 h-12">
            <TypingEffect
              texts={[
                t("roles.web_developer"),
                t("roles.frontend_specialist"),
                t("roles.backend_developer"),
                t("roles.fullstack_enthusiast"),
                t("roles.ui_ux_lover"),
              ]}
              className="text-theme-accent"
            />
          </div>

          <motion.p
            className="text-lg md:text-xl text-theme-secondary max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            {t("description")}
          </motion.p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 max-w-4xl mx-auto"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="card-glass p-4 md:p-6 rounded-xl shadow-theme-secondary hover:shadow-2xl transition-all duration-300 border border-theme-primary"
              whileHover={{ y: -3, scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <div className="text-theme-accent mb-3 flex justify-center">
                <skill.icon className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <h3 className="font-bold text-theme-primary mb-2 text-sm md:text-base">
                {skill.name}
              </h3>
              <div className="w-full bg-theme-primary rounded-full h-2 mb-2">
                <motion.div
                  className="gradient-accent h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ delay: 1 + index * 0.2, duration: 1 }}
                />
              </div>
              <span className="text-xs md:text-sm text-theme-secondary font-medium">
                {skill.level}%
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Location & Availability */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center items-center gap-3 md:gap-6 mb-12"
        >
          <div className="flex items-center gap-2 card-glass px-3 md:px-4 py-2 rounded-full shadow-theme-secondary border border-theme-primary">
            <MapPin className="w-4 h-4 md:w-5 md:h-5 text-theme-accent" />
            <span className="text-theme-primary font-medium text-sm md:text-base">
              {t("location")}
            </span>
          </div>
          <div className="flex items-center gap-2 card-glass px-3 md:px-4 py-2 rounded-full shadow-theme-secondary border border-theme-primary">
            <Coffee className="w-4 h-4 md:w-5 md:h-5 text-theme-accent" />
            <span className="text-theme-primary font-medium text-sm md:text-base">
              {t("availability")}
            </span>
          </div>
          <div className="flex items-center gap-2 card-glass px-3 md:px-4 py-2 rounded-full shadow-theme-secondary border border-theme-primary">
            <Heart className="w-4 h-4 md:w-5 md:h-5 text-red-500" />
            <span className="text-theme-primary font-medium text-sm md:text-base">
              {t("passion")}
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
              className={`
                group relative p-3 md:p-4 card-glass rounded-xl shadow-theme-secondary 
                border border-theme-primary transition-all duration-300 text-theme-primary 
                hover:scale-110 hover:shadow-lg ${social.color}
              `}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
            >
              <social.icon className="w-5 h-5 md:w-6 md:h-6 group-hover:text-black dark:group-hover:text-white group-[.black]:group-hover:text-white transition-colors duration-200" />

              {/* Tooltip */}
              <motion.div
                className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-theme-primary text-theme-secondary px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg border border-theme-primary"
                initial={{ y: 10 }}
                whileHover={{ y: 0 }}
              >
                {social.name}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-theme-primary" />
              </motion.div>
            </motion.a>
          ))}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-32"
        >
          <motion.a
            href="#contact"
            className="btn-primary"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail className="w-5 h-5 md:w-6 md:h-6" />
            {t("cta.contact")}
          </motion.a>

          <motion.a
            href="/resume.pdf"
            download
            className="btn-secondary"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            <Download className="w-5 h-5 md:w-6 md:h-6" />
            {t("cta.download_cv")}
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        {showScrollIndicator && (
          <motion.div
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <motion.button
              className="flex flex-col items-center text-theme-primary cursor-pointer group hover:text-theme-accent transition-colors duration-300 bg-theme-primary/20 backdrop-blur-md border border-theme-accent/30 rounded-2xl px-6 py-4 shadow-lg"
              onClick={scrollToNextSection}
              whileHover={{ scale: 1.05, y: -2 }}
              animate={{ y: [0, 5, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span className="text-sm md:text-base font-semibold mb-3 text-theme-primary">
                {t("scroll_down")}
              </span>
              <div className="w-8 h-12 md:w-10 md:h-16 border-3 border-theme-accent rounded-full flex justify-center bg-theme-primary/10 backdrop-blur-sm">
                <motion.div
                  className="w-1.5 h-4 md:w-2 md:h-6 bg-theme-accent rounded-full mt-2 md:mt-3"
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <ArrowDown className="w-6 h-6 md:w-8 md:h-8 mt-3 group-hover:animate-bounce text-theme-accent" />
            </motion.button>
          </motion.div>
        )}
      </motion.div>

      {/* Floating Particles (static positions, no random movement on scroll) */}
      {[
        { left: "10%", top: "20%", delay: 0 },
        { left: "25%", top: "40%", delay: 0.5 },
        { left: "40%", top: "15%", delay: 1 },
        { left: "60%", top: "30%", delay: 1.5 },
        { left: "80%", top: "25%", delay: 0.2 },
        { left: "15%", top: "60%", delay: 0.7 },
        { left: "35%", top: "70%", delay: 1.2 },
        { left: "55%", top: "80%", delay: 0.4 },
        { left: "75%", top: "60%", delay: 1.1 },
        { left: "90%", top: "75%", delay: 0.9 },
        { left: "20%", top: "85%", delay: 0.3 },
        { left: "50%", top: "50%", delay: 1.3 },
        { left: "70%", top: "10%", delay: 0.6 },
        { left: "85%", top: "50%", delay: 1.4 },
        { left: "60%", top: "60%", delay: 0.8 },
      ].map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 md:w-2 md:h-2 bg-theme-accent rounded-full opacity-30"
          style={{ left: pos.left, top: pos.top }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: pos.delay,
          }}
        />
      ))}
    </section>
  );
};

export default HeroSection;

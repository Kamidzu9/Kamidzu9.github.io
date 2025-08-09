"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import clsx from "clsx";
import { useTheme } from "../contexts/ThemeContext";

// Color schemes for dark/light mode
const colorSchemes = {
  light: {
    bg: "",
    card: "bg-white/90 border-indigo-100",
    accent: "bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-orange-400",
    text: "text-indigo-900",
    subtext: "text-indigo-400",
    icon: "text-indigo-500",
    border: "border-indigo-100",
    link: "hover:text-orange-500 hover:underline underline-offset-4",
    glow: "hover:shadow-[0_0_16px_2px_rgba(236,72,153,0.18)]",
  },
  dark: {
    bg: "",
    card: "bg-neutral-900/90 border-indigo-900",
    accent: "bg-gradient-to-r from-indigo-400 via-fuchsia-500 to-orange-400",
    text: "text-white",
    subtext: "text-fuchsia-300",
    icon: "text-fuchsia-300",
    border: "border-indigo-900",
    link: "hover:text-orange-400 hover:underline underline-offset-4",
    glow: "hover:shadow-[0_0_16px_2px_rgba(236,72,153,0.28)]",
  },
};

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/Kamidzu9",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mykhailo-solovey-34345934a/",
    icon: Linkedin,
  },
  {
    name: "Mail",
    href: "mailto:msolovey.job@gmail.com",
    icon: Mail,
  },
];

const navLinks = [
  { name: "Projekte", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Erfahrung", href: "#experience" },
  { name: "Kontakt", href: "#contact" },
];

const Footer: React.FC = () => {
  const { theme } = useTheme();
  const colors = colorSchemes[theme];

  // Scroll to top
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer
      className={clsx(
        "w-full pt-16 pb-8 px-4 md:px-10 xl:px-0 transition-colors duration-700",
        colors.bg
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 18 }}
        className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-10 md:gap-0"
      >
        {/* Branding & Socials */}
        <div className="flex-1 flex flex-col gap-4 md:gap-6 items-center md:items-start">
          <div className="flex items-center gap-3 mb-2">
            <span
              className={clsx(
                "font-black text-2xl tracking-tight",
                colors.text
              )}
            >
              Mykhailo Solovey
            </span>
            <span
              className={clsx(
                "px-3 py-1 rounded-full text-xs font-bold shadow border",
                colors.accent,
                colors.text
              )}
            >
              Portfolio
            </span>
          </div>
          <div className="flex gap-4 mt-1">
            {socials.map((s, i) => (
              <motion.a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.18, rotate: i === 2 ? -10 : 10 }}
                whileTap={{ scale: 0.95 }}
                className={clsx(
                  "rounded-full p-2 shadow border transition-all duration-300 flex items-center justify-center bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl",
                  colors.icon,
                  colors.glow
                )}
                aria-label={s.name}
              >
                <s.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 flex flex-col items-center">
          <nav className="flex flex-wrap gap-6 justify-center mb-2">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ scale: 1.08 }}
                className={clsx(
                  "font-semibold text-base transition-all duration-200 px-2 py-1 rounded",
                  colors.text,
                  colors.link
                )}
              >
                {link.name}
              </motion.a>
            ))}
          </nav>
        </div>
      </motion.div>
      <div
        className={clsx(
          "mt-10 text-center text-xs font-medium",
          colors.subtext
        )}
      >
        © {new Date().getFullYear()} Mykhailo Solovey. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

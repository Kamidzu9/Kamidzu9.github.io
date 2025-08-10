"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  ArrowUpRight,
  Sun,
  Moon,
  Square,
} from "lucide-react";
import clsx from "clsx";
import { useTheme } from "../contexts/ThemeContext";

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
  { name: "Skills", href: "#skills" },
  { name: "Erfahrung", href: "#experience" },
  { name: "Projekte", href: "#projects" },
  { name: "Kontakt", href: "#contact" },
];

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);
  const [active, setActive] = useState<string>("");
  const [scroll, setScroll] = useState(0);

  // Scroll progress bar
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setScroll(docHeight > 0 ? scrollTop / docHeight : 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active nav highlight
  useEffect(() => {
    const onScroll = () => {
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      let found = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY + 80 >= el.offsetTop) found = id;
      }
      setActive(found);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const ThemeIcon = () => {
    switch (theme) {
      case "light":
        return <Sun className="w-5 h-5" />;
      case "dark":
        return <Moon className="w-5 h-5" />;
      case "black":
        return <Square className="w-5 h-5" />;
      default:
        return <Sun className="w-5 h-5" />;
    }
  };

  const getThemeLabel = () => {
    switch (theme) {
      case "light":
        return "Light";
      case "dark":
        return "Dark";
      case "black":
        return "Black";
      default:
        return "Light";
    }
  };

  const cycleTheme = () => {
    const themes = ["light", "dark", "black"] as const;
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 card-glass transition-all duration-300">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 w-full z-[60] gradient-accent"
        style={{ scaleX: scroll, transformOrigin: "left" }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scroll }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
      />

      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-3">
        {/* Branding */}
        <a href="#home" className="flex items-center gap-3 group">
          <img
            src="/avatar.jpg"
            alt="Avatar"
            className="w-12 h-12 rounded-full border-2 border-theme-accent group-hover:scale-105 transition-transform duration-200"
          />
          <span className="font-black text-2xl tracking-tight text-blue-600">
            Mykhailo Solovey
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className={clsx(
                "relative font-semibold text-lg px-2 py-1 transition-all duration-200 text-theme-primary",
                active === link.href.replace("#", "")
                  ? "text-theme-accent"
                  : "hover:text-theme-accent"
              )}
              whileHover={{ y: -2, scale: 1.06 }}
            >
              {link.name}
              {active === link.href.replace("#", "") && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 w-full h-0.5 rounded gradient-accent"
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                />
              )}
            </motion.a>
          ))}

          <motion.a
            href="#contact"
            className="ml-4 btn-primary"
            whileHover={{ scale: 1.08, y: -2 }}
          >
            Contact Me <ArrowUpRight className="inline w-4 h-4 ml-1 -mt-1" />
          </motion.a>

          {/* Theme Switcher */}
          <div className="relative ml-4">
            <button
              onClick={cycleTheme}
              className="px-3 py-2 rounded-full bg-theme-secondary border border-theme-primary shadow-theme-primary flex items-center justify-center gap-2 transition-all duration-300 hover:scale-110 text-theme-primary"
              aria-label="Toggle Theme"
              type="button"
            >
              <ThemeIcon />
              <span className="text-sm font-medium">{getThemeLabel()}</span>
            </button>
          </div>
        </nav>

        {/* Mobile Burger */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded-full bg-theme-secondary border border-theme-primary shadow-theme-primary hover:scale-110 transition-all text-theme-primary"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Menü öffnen"
        >
          {mobileOpen ? (
            <X className="w-7 h-7" />
          ) : (
            <Menu className="w-7 h-7" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ type: "spring", stiffness: 180, damping: 22 }}
            className="md:hidden fixed top-16 left-0 w-full z-40 px-4 pb-8 pt-6 flex flex-col gap-4 card-glass border-b border-theme-primary shadow-lg"
            style={{
              background: "rgba(255,255,255,0.95)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={clsx(
                  "font-bold text-xl py-2 px-3 rounded transition-all text-theme-primary",
                  active === link.href.replace("#", "")
                    ? "text-theme-accent"
                    : "hover:text-theme-accent"
                )}
                onClick={() => {
                  setMobileOpen(false);
                  // Scroll to section if anchor
                  if (link.href.startsWith("#")) {
                    const el = document.getElementById(
                      link.href.replace("#", "")
                    );
                    if (el) {
                      setTimeout(() => {
                        el.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }, 100);
                    }
                  }
                }}
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              className="mt-2 btn-primary text-center"
              onClick={() => {
                setMobileOpen(false);
                const el = document.getElementById("contact");
                if (el) {
                  setTimeout(() => {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }, 100);
                }
              }}
            >
              Contact Me <ArrowUpRight className="inline w-4 h-4 ml-1 -mt-1" />
            </a>

            {/* Mobile Theme Switcher */}
            <button
              onClick={cycleTheme}
              className="mt-2 px-6 py-3 rounded-full bg-theme-secondary border border-theme-primary shadow-theme-primary flex items-center justify-center gap-2 transition-all duration-300 font-semibold text-theme-primary"
              aria-label="Toggle Theme"
              type="button"
            >
              <ThemeIcon />
              {getThemeLabel()} Mode
            </button>

            <div className="flex gap-4 mt-4 justify-center">
              {socials.map((s, i) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full p-2 shadow-theme-primary border border-theme-primary transition-all duration-300 flex items-center justify-center bg-theme-secondary backdrop-blur-xl group"
                  aria-label={s.name}
                >
                  <s.icon className="w-6 h-6 group-hover:text-black dark:group-hover:text-white group-[.black]:group-hover:text-white transition-colors duration-200" />
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Menu, X, ArrowUpRight } from "lucide-react";
import clsx from "clsx";
import { useTheme } from "../contexts/ThemeContext";

const colorSchemes = {
  light: {
    bg: "bg-white/80 backdrop-blur",
    text: "text-indigo-900",
    accent: "bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-orange-400",
    nav: "hover:text-orange-500",
    navActive: "text-orange-500 underline underline-offset-8",
    cta: "bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-orange-400 text-white hover:from-fuchsia-500 hover:to-orange-400",
    icon: "text-indigo-500",
    border: "",
    shadow: "shadow-xl shadow-indigo-200/30",
  },
  dark: {
    bg: "bg-neutral-900/80 backdrop-blur",
    text: "text-white",
    accent: "bg-gradient-to-r from-indigo-400 via-fuchsia-500 to-orange-400",
    nav: "hover:text-orange-400",
    navActive: "text-orange-400 underline underline-offset-8",
    cta: "bg-gradient-to-r from-indigo-400 via-fuchsia-500 to-orange-400 text-white hover:from-fuchsia-500 hover:to-orange-400",
    icon: "text-fuchsia-300",
    border: "",
    shadow: "shadow-xl shadow-indigo-900/30",
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
  { name: "Skills", href: "#skills" },
  { name: "Erfahrung", href: "#experience" },
  { name: "Projekte", href: "#projects" },
  { name: "Kontakt", href: "#contact" },
];

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const [scroll, setScroll] = useState(0);

  const colors = colorSchemes[theme];

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

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-colors duration-700",
        colors.bg,
        colors.shadow
      )}
    >
      {/* Scroll Progress Bar */}
      <motion.div
        className={clsx("fixed top-0 left-0 h-1 w-full z-[60]", colors.accent)}
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
            className="w-12 h-12 rounded-full border-2 border-indigo-300 group-hover:scale-105 transition-transform duration-200"
          />
          <span
            className={clsx(
              "font-black text-2xl tracking-tight bg-clip-text text-transparent",
              colors.accent
            )}
          >
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
                "relative font-semibold text-lg px-2 py-1 transition-all duration-200",
                colors.text,
                active === link.href.replace("#", "")
                  ? colors.navActive
                  : colors.nav
              )}
              whileHover={{ y: -2, scale: 1.06 }}
            >
              {link.name}
              <motion.span
                layoutId="underline"
                className={clsx(
                  "absolute left-0 -bottom-1 w-full h-0.5 rounded bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-orange-400",
                  active === link.href.replace("#", "")
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-60"
                )}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
              />
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            className={clsx(
              "ml-4 px-6 py-2 rounded-full font-bold text-base shadow border border-transparent transition-all duration-300",
              colors.cta
            )}
            whileHover={{ scale: 1.08, y: -2 }}
          >
            Contact Me <ArrowUpRight className="inline w-4 h-4 ml-1 -mt-1" />
          </motion.a>
          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="ml-4 px-3 py-2 rounded-full border border-transparent bg-white/70 dark:bg-neutral-900/80 shadow flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="Toggle Theme"
            type="button"
          >
            {theme === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-yellow-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.95l-.71.71M21 12h-1M4 12H3m16.95 7.05l-.71-.71M4.05 4.05l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
                />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Burger */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded-full border border-transparent bg-white/70 dark:bg-neutral-900/80 shadow hover:scale-110 transition-all"
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
            className={clsx(
              "md:hidden fixed top-16 left-0 w-full z-40 px-4 pb-8 pt-6 flex flex-col gap-4 bg-white/95 dark:bg-neutral-900/95 border-b border-indigo-100 dark:border-indigo-900 shadow-xl backdrop-blur-xl",
              colors.text
            )}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={clsx(
                  "font-bold text-xl py-2 px-3 rounded transition-all",
                  active === link.href.replace("#", "")
                    ? colors.navActive
                    : colors.nav
                )}
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className={clsx(
                "mt-2 px-6 py-3 rounded-full font-bold text-lg shadow border border-transparent transition-all duration-300 text-center",
                colors.cta
              )}
              onClick={() => setMobileOpen(false)}
            >
              Contact Me <ArrowUpRight className="inline w-4 h-4 ml-1 -mt-1" />
            </a>
            {/* Mobile Theme Switcher */}
            <button
              onClick={toggleTheme}
              className="mt-2 px-6 py-3 rounded-full border border-transparent bg-white/70 dark:bg-neutral-900/80 shadow flex items-center justify-center gap-2 transition-all duration-300 font-semibold"
              aria-label="Toggle Theme"
              type="button"
            >
              {theme === "dark" ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-yellow-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.95l-.71.71M21 12h-1M4 12H3m16.95 7.05l-.71-.71M4.05 4.05l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  Light Mode
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
                    />
                  </svg>
                  Dark Mode
                </>
              )}
            </button>
            <div className="flex gap-4 mt-4 justify-center">
              {socials.map((s, i) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={clsx(
                    "rounded-full p-2 shadow border transition-all duration-300 flex items-center justify-center bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl",
                    colors.icon
                  )}
                  aria-label={s.name}
                >
                  <s.icon className="w-6 h-6" />
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

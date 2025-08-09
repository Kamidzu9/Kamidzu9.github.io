"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
  CheckCircle,
} from "lucide-react";
import clsx from "clsx";
import { useTheme } from "../contexts/ThemeContext";

// Color schemes for dark/light mode
const colorSchemes = {
  light: {
    bg: "",
    card: "bg-white/90",
    accent: "bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-orange-400",
    text: "text-indigo-900",
    input: "bg-white/80 text-indigo-900",
    button:
      "bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white hover:from-fuchsia-500 hover:to-orange-400",
    shadow: "shadow-2xl shadow-indigo-200/40",
    icon: "text-indigo-500",
    overlay: "bg-white/90 text-indigo-900",
  },
  dark: {
    bg: "",
    card: "bg-neutral-900/90",
    accent: "bg-gradient-to-r from-indigo-400 via-fuchsia-500 to-orange-400",
    text: "text-white",
    input: "bg-neutral-900/80 text-white",
    button:
      "bg-gradient-to-r from-indigo-400 to-fuchsia-500 text-white hover:from-fuchsia-500 hover:to-orange-400",
    shadow: "shadow-2xl shadow-indigo-900/40",
    icon: "text-fuchsia-300",
    overlay: "bg-neutral-900/95 text-white",
  },
};

// Socials
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

// Animation variants
const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};
const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 80, damping: 18 },
  },
};

// Form validation helper
const validate = (values: any) => {
  const errors: any = {};
  if (!values.name || values.name.length < 2)
    errors.name = "Bitte Name eingeben.";
  if (!values.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email))
    errors.email = "Gültige E-Mail eingeben.";
  if (!values.message || values.message.length < 10)
    errors.message = "Nachricht zu kurz.";
  return errors;
};

const ContactSection: React.FC = () => {
  // Theme detection
  const { theme } = useTheme();
  // Form state
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<any>({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const colors = colorSchemes[theme];

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setLoading(true);
    // Simulate async send
    setTimeout(() => {
      setSent(true);
      setLoading(false);
      setValues({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 2500);
    }, 1200);
  };

  // Branding/visuals: gradient, glass, logo, map
  return (
    <section
      id="contact"
      className={clsx(
        "relative py-32 px-2 md:px-4 overflow-visible transition-colors duration-700 flex flex-col items-center justify-center min-h-screen",
        colors.bg
      )}
    >
      {/* Floating gradient blobs for glassmorphism */}
      <div className="pointer-events-none select-none absolute inset-0 w-full h-full z-0">
        <motion.div
          className="absolute left-1/2 top-0 -translate-x-1/2 w-[90vw] h-[60vh] rounded-b-[5rem] bg-gradient-to-br from-indigo-400/30 via-fuchsia-400/20 to-orange-300/10 blur-3xl opacity-70"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        />
        <motion.div
          className="absolute right-10 bottom-10 w-40 h-40 rounded-full bg-gradient-to-br from-orange-400/30 via-fuchsia-400/30 to-indigo-400/30 blur-2xl opacity-60 animate-pulse"
          animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-10 top-24 w-32 h-32 rounded-full bg-gradient-to-br from-fuchsia-400/30 via-indigo-400/30 to-orange-400/30 blur-2xl opacity-50 animate-pulse"
          animate={{ y: [0, -18, 0], x: [0, 12, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Section header with animated divider and branding */}
      <motion.div
        className="relative z-10 flex flex-col items-center mb-16"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.div variants={fadeIn} className="mb-4">
          <span
            className={clsx(
              "inline-block px-8 py-3 rounded-full font-black text-2xl tracking-widest uppercase shadow-2xl border-4 border-transparent bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-orange-400 animate-gradient-x",
              colors.accent
            )}
            style={{ letterSpacing: "0.18em" }}
          >
            Kontakt
          </span>
        </motion.div>
        <motion.div
          variants={fadeIn}
          className="w-32 h-2 rounded-full bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-orange-400 mb-6 animate-pulse"
        />
        <motion.h2
          variants={fadeIn}
          className={clsx(
            "text-5xl md:text-6xl font-black text-center mb-4 drop-shadow-2xl tracking-tight",
            colors.text
          )}
        >
          Lass uns zusammenarbeiten
        </motion.h2>
        <motion.p
          variants={fadeIn}
          className={clsx(
            "max-w-2xl text-xl md:text-2xl text-center mb-2 font-medium",
            colors.text,
            "opacity-80"
          )}
        >
          Du hast ein spannendes Projekt, eine Idee oder möchtest einfach nur
          Hallo sagen? Schreib mir gern eine Nachricht oder nutze die Socials!
        </motion.p>
      </motion.div>

      {/* Socials with animated icons and parallax */}
      <motion.div
        className="flex gap-7 justify-center mb-12 z-20 relative"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {socials.map((s, i) => (
          <motion.a
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeIn}
            whileHover={{ scale: 1.22, rotate: i === 2 ? -12 : 12, y: -6 }}
            whileTap={{ scale: 0.95 }}
            className={clsx(
              "rounded-full p-4 shadow-2xl border-2 border-transparent transition-all duration-300 flex items-center justify-center bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl",
              colors.icon,
              "hover:border-orange-400 hover:bg-orange-50 dark:hover:bg-fuchsia-900/40 hover:shadow-orange-200"
            )}
            aria-label={s.name}
            style={{ boxShadow: "0 4px 32px 0 rgba(99,102,241,0.13)" }}
          >
            <s.icon className="w-8 h-8" />
          </motion.a>
        ))}
      </motion.div>

      {/* Animated message sent overlay */}
      <AnimatePresence>
        {sent && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className={clsx(
              "fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm",
              colors.overlay
            )}
            onClick={() => setSent(false)}
          >
            <div className="flex flex-col items-center gap-4 p-12 rounded-3xl border-2 shadow-2xl">
              <CheckCircle className="w-20 h-20 text-green-500 mb-2 animate-bounce" />
              <div
                className={clsx("text-3xl font-black text-center", colors.text)}
              >
                Nachricht gesendet!
              </div>
              <div className="text-lg text-center opacity-80">
                Vielen Dank für deine Nachricht. Ich melde mich schnellstmöglich
                zurück.
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Optional: Mini-Map/Standortanzeige (static, for branding) */}
      <motion.div
        className="mt-20 flex flex-col items-center gap-2 opacity-90"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      >
        <MapPin className="w-10 h-10 text-orange-400 mb-1 animate-pulse" />
        <span className={clsx("font-bold text-lg", colors.text)}>
          Standort: Thüringen, Deutschland
        </span>
      </motion.div>
    </section>
  );
};

export default ContactSection;

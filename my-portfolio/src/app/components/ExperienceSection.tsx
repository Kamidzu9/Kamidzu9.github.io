"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, GraduationCap, Award, Info, Filter } from "lucide-react";
import clsx from "clsx";
import { useTheme } from "../contexts/ThemeContext";

// Experience/Education data type
interface Entry {
  type: "experience" | "education";
  title: string;
  institution: string;
  period: string;
  description: string;
  highlights?: string[];
  awards?: string[];
  icon: React.ReactNode;
  color: string;
  projects?: string[];
}

const entries: Entry[] = [
  {
    type: "experience",
    title: "Trainee IT Specialist - Application Development",
    institution: "HQ GmbH",
    period: "Aug. 2023 - Present",
    description:
      "Linux, Teamwork, application development with various technologies.",
    highlights: ["Agile Teamwork", "Modern Tech Stack", "Linux Expertise"],
    icon: <Briefcase className="w-7 h-7" />,
    color: "from-indigo-500 to-fuchsia-500",
    projects: ["Internal Tools", "Automation Scripts"],
  },
  {
    type: "education",
    title: "IT Specialist as Application Developer (Ausbildung)",
    institution: "BSZ Hermsdorf-Schleiz-Pößneck",
    period: "Aug. 2023 - Aug. 2026",
    description: "Dual education in software development, theory & practice.",
    highlights: ["Dual System", "Project Work", "Industry Placement"],
    icon: <GraduationCap className="w-7 h-7" />,
    color: "from-fuchsia-500 to-orange-400",
    awards: ["Top 10% of class"],
  },
  {
    type: "education",
    title: "High School Diploma, Geisteswissenschaftliches Profil",
    institution: "Schule Nr. 7 Sosniwka",
    period: "Sept. 2011 - Sept. 2022",
    description: "Focus on humanities, literature, and research.",
    highlights: ["Epam Courses", "Ukrainian Literature Research", "Olympiads"],
    icon: <GraduationCap className="w-7 h-7" />,
    color: "from-orange-400 to-indigo-500",
    awards: ["Grade: 1,83"],
  },
];

const colorSchemes = {
  light: {
    bg: "",
    card: "bg-white/90",
    accent: "bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-orange-400",
    text: "text-indigo-900",
    modal: "bg-white/95 text-indigo-900",
    shadow: "shadow-xl shadow-indigo-200/40",
  },
  dark: {
    bg: "",
    card: "bg-neutral-900/90",
    accent: "bg-gradient-to-r from-indigo-400 via-fuchsia-500 to-orange-400",
    text: "text-white",
    modal: "bg-neutral-900/95 text-white",
    shadow: "shadow-2xl shadow-indigo-900/40",
  },
};

const tabs = [
  { label: "Alle", value: "all" },
  { label: "Berufserfahrung", value: "experience" },
  { label: "Ausbildung", value: "education" },
];

const ExperienceSectionNew: React.FC = () => {
  const { theme } = useTheme();
  const [tab, setTab] = useState<"all" | "experience" | "education">("all");
  const [modalEntry, setModalEntry] = useState<Entry | null>(null);

  const colors = colorSchemes[theme];

  // Filtered entries
  const filtered = entries.filter((e) => tab === "all" || e.type === tab);

  return (
    <section
      id="experience"
      className={clsx(
        "relative min-h-screen py-24 px-2 md:px-4 overflow-visible transition-colors duration-700",
        colors.bg
      )}
    >
      {/* Full-width animated background orbs (not limited by max-width) */}
      <div className="pointer-events-none fixed inset-0 w-screen h-screen -z-50">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[90vw] h-[36vw] max-w-none bg-gradient-to-br from-indigo-200/40 via-fuchsia-100/30 to-orange-100/20 blur-3xl rounded-full animate-float-orb" />
        <div className="absolute bottom-8 right-8 w-[28vw] h-[28vw] max-w-none bg-gradient-to-tr from-orange-200/30 to-fuchsia-100/10 blur-2xl rounded-full animate-float-orb2" />
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 14 }}
          className={clsx(
            "text-6xl md:text-7xl font-black mb-20 text-center bg-clip-text text-transparent drop-shadow-2xl tracking-tight relative z-30 select-none",
            colors.accent
          )}
        >
          <span className="inline-block">Erfahrung & Ausbildung</span>
        </motion.h2>

        {/* Tabs/Filter */}
        <div className="flex flex-wrap gap-4 justify-center mb-12 z-20 relative">
          {tabs.map((t) => (
            <button
              key={t.value}
              className={clsx(
                "px-6 py-2 rounded-full font-semibold border transition text-lg",
                tab === t.value
                  ? "bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-orange-400 text-white shadow-lg"
                  : "bg-white/80 border-indigo-200 text-indigo-900 hover:bg-indigo-100 dark:bg-neutral-900/80 dark:border-indigo-900 dark:text-white dark:hover:bg-indigo-950"
              )}
              onClick={() => setTab(t.value as any)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Experience/Education Cards only, no timeline */}
        <div className="relative flex flex-col gap-16 items-center w-full">
          <AnimatePresence>
            {filtered.map((entry, idx) => (
              <motion.div
                key={entry.title}
                initial={{ opacity: 0, y: 60, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 60, scale: 0.92 }}
                transition={{
                  delay: idx * 0.12,
                  type: "spring",
                  stiffness: 90,
                  damping: 18,
                }}
                whileHover={{
                  scale: 1.07,
                  y: -14,
                  boxShadow:
                    "0 24px 64px 0 rgba(99,102,241,0.22), 0 0 0 10px rgba(232,121,249,0.13)",
                }}
                className={clsx(
                  "group relative rounded-3xl border p-7 md:p-10 flex flex-col items-start cursor-pointer transition-all duration-700 overflow-visible w-full max-w-2xl mx-auto backdrop-blur-xl",
                  colors.card,
                  colors.shadow,
                  "hover:scale-[1.07] hover:shadow-2xl hover:z-30"
                )}
                onClick={() => setModalEntry(entry)}
                tabIndex={0}
                aria-label={entry.title}
                style={{
                  marginBottom: idx !== filtered.length - 1 ? "4.5rem" : 0,
                  borderColor: "rgba(99,102,241,0.13)",
                  background:
                    theme === "dark"
                      ? "linear-gradient(120deg, rgba(30,27,75,0.98) 80%, rgba(232,121,249,0.07) 100%)"
                      : "linear-gradient(120deg, rgba(255,255,255,0.98) 80%, rgba(232,121,249,0.09) 100%)",
                }}
              >
                {/* 3D Card Accent + Glass Reflection */}
                <span
                  className={clsx(
                    "absolute -top-4 -left-4 w-16 h-16 rounded-full blur-2xl z-0",
                    `bg-gradient-to-br ${entry.color} opacity-40`
                  )}
                />
                <span className="absolute left-8 top-7 w-2/3 h-8 bg-gradient-to-r from-white/70 to-transparent rounded-xl opacity-0 group-hover:opacity-70 transition-opacity duration-700 pointer-events-none blur-md" />
                {/* Icon & Title */}
                <div className="flex items-center gap-4 mb-4 relative z-10">
                  <div
                    className={clsx(
                      "w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br",
                      entry.color,
                      "shadow-lg border-2 border-white/60 dark:border-neutral-900/60"
                    )}
                  >
                    {entry.icon}
                  </div>
                  <div>
                    <div
                      className={clsx(
                        "font-bold text-2xl md:text-3xl",
                        colors.text
                      )}
                    >
                      {entry.title}
                    </div>
                    <div className="text-sm md:text-base text-indigo-400 font-semibold mt-1">
                      {entry.institution}
                    </div>
                  </div>
                </div>
                {/* Period & Description */}
                <div className="flex items-center gap-2 mb-2 text-xs md:text-sm text-indigo-500 dark:text-fuchsia-300">
                  <Info className="w-4 h-4 opacity-60" />
                  <span>{entry.period}</span>
                </div>
                <div className={clsx("mb-4 text-base md:text-lg", colors.text)}>
                  {entry.description}
                </div>
                {/* Highlights */}
                {entry.highlights && (
                  <div className="flex flex-wrap gap-2 mb-2">
                    {entry.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-indigo-100 dark:bg-fuchsia-900/40 text-indigo-700 dark:text-fuchsia-200 text-xs md:text-sm font-semibold shadow-sm"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                )}
                {/* Awards */}
                {entry.awards && (
                  <div className="flex flex-wrap gap-2 mb-2">
                    {entry.awards.map((a, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-200 text-xs md:text-sm font-semibold shadow-sm flex items-center gap-1"
                      >
                        <Award className="w-4 h-4" /> {a}
                      </span>
                    ))}
                  </div>
                )}
                {/* Projects */}
                {entry.projects && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {entry.projects.map((p, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-fuchsia-100 dark:bg-indigo-900/40 text-fuchsia-700 dark:text-indigo-200 text-xs md:text-sm font-semibold shadow-sm"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                )}
                {/* Animated Border Glow */}
                <span className="absolute inset-0 rounded-3xl border-2 border-transparent pointer-events-none group-hover:border-indigo-400/70 group-hover:shadow-[0_0_40px_10px_rgba(99,102,241,0.22)] group-hover:animate-border-glow transition-all duration-700" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal for details */}
      <AnimatePresence>
        {modalEntry && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
            onClick={() => setModalEntry(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 40 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className={clsx(
                "max-w-lg w-full p-8 rounded-3xl border shadow-2xl relative",
                colors.modal
              )}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={clsx(
                    "w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br",
                    modalEntry.color,
                    "shadow-lg"
                  )}
                >
                  {modalEntry.icon}
                </div>
                <div>
                  <div className={clsx("font-bold text-2xl", colors.text)}>
                    {modalEntry.title}
                  </div>
                  <div className="text-sm text-indigo-400 font-semibold mt-1">
                    {modalEntry.institution}
                  </div>
                </div>
              </div>
              <div className="mb-2 text-xs text-indigo-500 dark:text-fuchsia-300 flex items-center gap-2">
                <Info className="w-4 h-4 opacity-60" />
                <span>{modalEntry.period}</span>
              </div>
              <div className={clsx("mb-4 text-base", colors.text)}>
                {modalEntry.description}
              </div>
              {modalEntry.highlights && (
                <div className="flex flex-wrap gap-2 mb-2">
                  {modalEntry.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-indigo-100 dark:bg-fuchsia-900/40 text-indigo-700 dark:text-fuchsia-200 text-xs font-semibold shadow-sm"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              )}
              {modalEntry.awards && (
                <div className="flex flex-wrap gap-2 mb-2">
                  {modalEntry.awards.map((a, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-200 text-xs font-semibold shadow-sm flex items-center gap-1"
                    >
                      <Award className="w-4 h-4" /> {a}
                    </span>
                  ))}
                </div>
              )}
              {modalEntry.projects && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {modalEntry.projects.map((p, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-fuchsia-100 dark:bg-indigo-900/40 text-fuchsia-700 dark:text-indigo-200 text-xs font-semibold shadow-sm"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              )}
              <button
                className="absolute top-4 right-4 p-2 rounded-full bg-indigo-100 dark:bg-indigo-900 hover:bg-indigo-200 dark:hover:bg-indigo-800 transition"
                onClick={() => setModalEntry(null)}
                aria-label="Schließen"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M6 6l8 8M6 14L14 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ExperienceSectionNew;

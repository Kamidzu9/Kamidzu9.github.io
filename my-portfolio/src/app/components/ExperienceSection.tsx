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
    period: "2009 - 2021",
    description: "High School in Ukraine, focus on humanities.",
    highlights: ["Humanities Focus", "Language Skills", "Cultural Studies"],
    icon: <GraduationCap className="w-7 h-7" />,
    color: "from-orange-400 to-red-500",
    awards: ["Academic Excellence"],
  },
];

const ExperienceSection: React.FC = () => {
  const { theme } = useTheme();
  const [filter, setFilter] = useState<"all" | "experience" | "education">(
    "all"
  );

  const filteredEntries = entries.filter(
    (entry) => filter === "all" || entry.type === filter
  );

  return (
    <section
      id="experience"
      className="relative min-h-screen py-24 px-2 md:px-4 overflow-visible transition-colors duration-700 bg-theme-primary"
    >
      {/* Full-width animated background orbs (not limited by max-width) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb-1"></div>
        <div className="orb-2"></div>
        <div className="orb-3"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent
              dark:bg-gradient-to-r dark:from-cyan-400 dark:to-blue-600
              group-[.black]:bg-gradient-to-r group-[.black]:from-white group-[.black]:to-gray-400"
          >
            Mein Werdegang
          </h2>
          <p className="text-xl text-theme-secondary max-w-3xl mx-auto leading-relaxed">
            Von der Ausbildung bis hin zu praktischen Projekten – hier ist mein
            bisheriger Weg in der IT-Welt.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="flex bg-theme-secondary border border-theme-primary rounded-full p-2 shadow-theme-secondary">
            {[
              {
                key: "all",
                label: "Alle",
                icon: <Filter className="w-4 h-4" />,
              },
              {
                key: "experience",
                label: "Erfahrung",
                icon: <Briefcase className="w-4 h-4" />,
              },
              {
                key: "education",
                label: "Bildung",
                icon: <GraduationCap className="w-4 h-4" />,
              },
            ].map((item) => (
              <motion.button
                key={item.key}
                onClick={() => setFilter(item.key as typeof filter)}
                className={clsx(
                  "flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300",
                  filter === item.key
                    ? "bg-theme-accent text-white shadow-lg"
                    : "text-theme-primary hover:bg-theme-primary/10"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.icon}
                {item.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-transparent via-theme-accent to-transparent h-full"></div>

          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              {filteredEntries.map((entry, index) => (
                <motion.div
                  key={`${entry.title}-${entry.period}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={clsx(
                    "relative flex",
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  )}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-theme-accent rounded-full border-4 border-theme-primary shadow-lg z-10"></div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={clsx(
                      "w-full md:w-5/12 p-8 bg-theme-secondary border border-theme-primary rounded-2xl shadow-theme-secondary",
                      index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                    )}
                  >
                    {/* Card Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className={`flex-shrink-0 p-3 rounded-xl bg-gradient-to-r ${entry.color} text-white shadow-lg`}
                      >
                        {entry.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-theme-primary mb-1">
                          {entry.title}
                        </h3>
                        <p className="text-theme-accent font-semibold mb-1">
                          {entry.institution}
                        </p>
                        <p className="text-sm text-theme-secondary font-medium">
                          {entry.period}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-theme-secondary mb-4 leading-relaxed">
                      {entry.description}
                    </p>

                    {/* Highlights */}
                    {entry.highlights && (
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-theme-primary mb-2 flex items-center gap-2">
                          <Info className="w-4 h-4" />
                          Schwerpunkte
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {entry.highlights.map((highlight, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 text-xs bg-theme-accent/10 text-theme-accent rounded-full font-medium border border-theme-accent/20"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Projects */}
                    {entry.projects && (
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-theme-primary mb-2">
                          Projekte
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {entry.projects.map((project, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 text-xs bg-theme-primary text-theme-secondary rounded-full font-medium"
                            >
                              {project}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Awards */}
                    {entry.awards && (
                      <div>
                        <h4 className="text-sm font-semibold text-theme-primary mb-2 flex items-center gap-2">
                          <Award className="w-4 h-4 text-yellow-500" />
                          Auszeichnungen
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {entry.awards.map((award, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 text-xs bg-yellow-500/10 text-yellow-600 rounded-full font-medium border border-yellow-500/20"
                            >
                              {award}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 p-8 bg-theme-secondary border border-theme-primary rounded-2xl shadow-theme-secondary"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-black bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent mb-2">
                2+
              </div>
              <div className="text-theme-secondary font-semibold">
                Jahre Erfahrung
              </div>
            </div>
            <div>
              <div className="text-4xl font-black bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent mb-2">
                3
              </div>
              <div className="text-theme-secondary font-semibold">
                Bildungsabschlüsse
              </div>
            </div>
            <div>
              <div className="text-4xl font-black bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent mb-2">
                ∞
              </div>
              <div className="text-theme-secondary font-semibold">
                Lernbereitschaft
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;

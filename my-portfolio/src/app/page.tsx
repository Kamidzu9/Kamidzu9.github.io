"use client";
import { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/24/outline";

export default function Home() {
  const [isAtTop, setIsAtTop] = useState(true);

  // Scroll-Button Logik
  if (typeof window !== "undefined") {
    window.onscroll = () => setIsAtTop(window.scrollY < 10);
  }

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header />
      <main className="min-h-screen text-neutral-900 relative overflow-x-hidden">
        <HeroSection scrollTo={scrollTo} />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
        {/* Floating Scroll-Button */}
        <div className="fixed bottom-6 right-6 z-50">
          {isAtTop ? (
            <button
              onClick={() => scrollTo("contact")}
              className="bg-indigo-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all"
            >
              <ArrowDownIcon className="w-6 h-6" />
            </button>
          ) : (
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="bg-indigo-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all"
            >
              <ArrowUpIcon className="w-6 h-6" />
            </button>
          )}
        </div>
      </main>
    </>
  );
}

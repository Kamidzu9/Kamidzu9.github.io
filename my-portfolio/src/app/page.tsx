"use client";
import { useState, useEffect } from "react";
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

  // Scroll-Button Logik - fixed for hydration
  useEffect(() => {
    const handleScroll = () => setIsAtTop(window.scrollY < 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header />
      <main className="min-h-screen relative overflow-x-hidden bg-theme-primary text-theme-primary">
        <HeroSection />
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
              className="bg-theme-accent text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all"
            >
              <ArrowDownIcon className="w-6 h-6" />
            </button>
          ) : (
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="bg-theme-accent text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all"
            >
              <ArrowUpIcon className="w-6 h-6" />
            </button>
          )}
        </div>
      </main>
    </>
  );
}

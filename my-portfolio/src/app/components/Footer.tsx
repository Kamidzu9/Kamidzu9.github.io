"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Heart,
  ArrowUp,
  MapPin,
  Phone,
  Globe,
  Coffee,
  Code,
  Sparkles,
} from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useTranslation(["navigation", "common"]);
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/Kamidzu9",
      icon: Github,
      color: "hover:text-gray-400",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/mykhailo-solovey-34345934a/",
      icon: Linkedin,
      color: "hover:text-blue-400",
    },
    {
      name: "Email",
      href: "mailto:msolovey.job@gmail.com",
      icon: Mail,
      color: "hover:text-red-400",
    },
  ];

  const quickLinks = [
    { name: t("navigation:about"), href: "#home" },
    { name: t("navigation:skills"), href: "#skills" },
    { name: t("navigation:experience"), href: "#experience" },
    { name: t("navigation:projects"), href: "#projects" },
    { name: t("navigation:contact"), href: "#contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-theme-primary border-t border-theme-primary">
      {/* Decorative Top Line */}
      <div className="w-full h-1 gradient-accent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand & Description */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <img
                src="/avatar.jpg"
                alt="Mykhailo Solovey"
                className="w-12 h-12 rounded-full border-2 border-theme-accent"
              />
              <div>
                <h3 className="font-black text-2xl tracking-tight text-blue-600">
                  Mykhailo Solovey
                </h3>
                <p className="text-sm text-theme-secondary">
                  Full-Stack Developer
                </p>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-theme-secondary mb-6 leading-relaxed"
            >
              {t("common:footerDescription")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 text-theme-secondary mb-2"
            >
              <MapPin className="w-4 h-4 text-theme-accent" />
              <span>{t("common:location")}</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-2 text-theme-secondary"
            >
              <Globe className="w-4 h-4 text-theme-accent" />
              <span>{t("common:remoteAvailable")}</span>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg font-bold text-theme-primary mb-4"
            >
              {t("common:quickLinks")}
            </motion.h4>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-2"
            >
              {quickLinks.map((link, index) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    className="text-theme-secondary hover:text-theme-accent transition-colors duration-200 flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-1 h-1 bg-theme-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Contact & Social */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg font-bold text-theme-primary mb-4"
            >
              {t("navigation:contact")}
            </motion.h4>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-3 mb-6"
            >
              <a
                href="mailto:msolovey.job@gmail.com"
                className="flex items-center gap-2 text-theme-secondary hover:text-theme-accent transition-colors duration-200 group"
              >
                <Mail className="w-4 h-4" />
                <span className="group-hover:underline">
                  msolovey.job@gmail.com
                </span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex gap-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-theme-secondary border border-theme-primary rounded-full shadow-theme-secondary transition-all duration-300 text-theme-primary ${social.color} hover:scale-110 hover:shadow-lg`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-theme-primary flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="flex items-center gap-2 text-theme-secondary">
            <span>© {currentYear} Mykhailo Solovey.</span>
            <span>{t("common:builtWith")}</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>{t("common:and")}</span>
            <Coffee className="w-4 h-4 text-yellow-600" />
            <span>{t("common:inMunich")}</span>
          </div>

          <div className="flex items-center gap-4">
            <motion.div
              className="flex items-center gap-2 text-theme-secondary"
              whileHover={{ scale: 1.05 }}
            >
              <Code className="w-4 h-4 text-theme-accent" />
              <span className="text-sm">Next.js + TypeScript</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Tech Stack Credits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 pt-6 border-t border-theme-primary/30"
        >
          <div className="flex flex-wrap justify-center items-center gap-4 text-xs text-theme-secondary">
            <span>{t("common:builtWith")}:</span>
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Framer Motion",
            ].map((tech, index) => (
              <motion.span
                key={tech}
                className="px-2 py-1 bg-theme-secondary/50 rounded-md border border-theme-primary/30"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-theme-accent rounded-full opacity-30"
          style={{
            left: `${20 + i * 20}%`,
            top: `${20 + i * 10}%`,
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}
    </footer>
  );
};

export default Footer;

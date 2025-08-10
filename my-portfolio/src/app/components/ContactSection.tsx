"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  MessageCircle,
  User,
  PenTool,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const ContactSection: React.FC = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate form submission
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "E-Mail",
      value: "msolovey.job@gmail.com",
      href: "mailto:msolovey.job@gmail.com",
      color: "text-red-500",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Standort",
      value: "Thüringen, Deutschland",
      href: null,
      color: "text-green-500",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      label: "Status",
      value: "Verfügbar für Projekte",
      href: null,
      color: "text-blue-500",
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/mykhailo-solovey-34345934a/",
      icon: <Linkedin className="w-6 h-6" />,
      color: "hover:bg-blue-600",
    },
    {
      name: "GitHub",
      href: "https://github.com/Kamidzu9",
      icon: <Github className="w-6 h-6" />,
      color: "hover:bg-gray-800",
    },
    {
      name: "E-Mail",
      href: "mailto:msolovey.job@gmail.com",
      icon: <Mail className="w-6 h-6" />,
      color: "hover:bg-red-600",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 px-4 md:px-8 bg-theme-primary"
    >
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb-1"></div>
        <div className="orb-2"></div>
        <div className="orb-3"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent">
            Kontakt
          </h2>
          <p className="text-xl text-theme-secondary max-w-3xl mx-auto leading-relaxed">
            Haben Sie ein spannendes Projekt oder möchten Sie einfach nur Hallo
            sagen? Ich freue mich darauf, von Ihnen zu hören!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-theme-primary mb-6">
                Lass uns zusammenarbeiten
              </h3>
              <p className="text-theme-secondary leading-relaxed mb-8">
                Ich bin immer offen für neue Herausforderungen und interessante
                Projekte. Ob Sie eine Webanwendung, ein Plugin oder eine
                maßgeschneiderte Lösung benötigen – lassen Sie uns darüber
                sprechen!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-theme-secondary border border-theme-primary rounded-xl shadow-theme-secondary hover:shadow-lg transition-all duration-300"
                >
                  <div
                    className={`flex-shrink-0 p-3 rounded-lg bg-theme-primary ${info.color}`}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-theme-primary">
                      {info.label}
                    </h4>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-theme-secondary hover:text-theme-accent transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-theme-secondary">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-8"
            >
              <h4 className="text-xl font-bold text-theme-primary mb-4">
                Folgen Sie mir
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      p-4 bg-theme-secondary border border-theme-primary rounded-xl shadow-theme-secondary 
                      transition-all duration-300 text-theme-primary hover:text-white hover:scale-110 hover:shadow-lg ${social.color}
                    `}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center p-12 bg-theme-secondary border border-theme-primary rounded-xl shadow-theme-secondary"
        >
          <h3 className="text-3xl font-bold text-theme-primary mb-4">
            Bereit für Ihr nächstes Projekt?
          </h3>
          <p className="text-xl text-theme-secondary mb-8 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam etwas Großartiges schaffen. Von der Idee
            bis zur Umsetzung – ich stehe Ihnen zur Seite.
          </p>
          <motion.a
            href="mailto:msolovey.job@gmail.com"
            className="btn-primary flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-5 h-5" />
            Jetzt Kontakt aufnehmen
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

"use client";

import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion, useAnimation } from "framer-motion";

// Frosted Glass Theme Colors
const COLORS = {
  primary: "#4a6cf7",
  secondary: "#6e4af7",
  glassBg: "rgba(255, 255, 255, 0.15)",
  glassBorder: "rgba(255, 255, 255, 0.25)",
  glassHighlight: "rgba(255, 255, 255, 0.4)",
  darkText: "#1d1d1f",
  lightText: "#f5f5f7",
};

// Animation variants optimized for static export
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  hover: {
    scale: 1.05,
    y: -5,
    transition: { duration: 0.3 },
  },
};

const floatingVariants = {
  float: {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const icons = [
  { icon: <GitHubIcon />, link: "https://github.com/Kamidzu9" },
  { icon: <LinkedInIcon />, link: "https://linkedin.com" },
  { icon: <MailIcon />, link: "mailto:email@example.com" },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const controls = useAnimation();
  const [isMounted, setIsMounted] = useState(false);

  // Fix for static export animations
  useEffect(() => {
    setIsMounted(true);
    controls.start("visible");
  }, [controls]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: `linear-gradient(135deg, #f0f5ff 0%, #e6eeff 100%)`,
        color: COLORS.darkText,
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at 20% 30%, ${COLORS.primary}15, transparent 40%),
                       radial-gradient(circle at 80% 70%, ${COLORS.secondary}15, transparent 40%)`,
          zIndex: 0,
        },
      }}
    >
      {/* Frosted Glass AppBar */}
      <AppBar
        position="sticky"
        sx={{
          background: COLORS.glassBg,
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
          borderBottom: `1px solid ${COLORS.glassBorder}`,
          py: 0.5,
          zIndex: 20,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            sx={{
              justifyContent: "space-between",
              px: 0,
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: 700,
                  letterSpacing: 1.2,
                  color: COLORS.primary,
                }}
              >
                Mykhailo's Portfolio
              </Typography>
            </motion.div>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {["about", "projects", "contact"].map((id) => (
                <motion.div
                  key={id}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    href={`#${id}`}
                    sx={{
                      textTransform: "none",
                      color: COLORS.darkText,
                      borderRadius: "20px",
                      px: 3,
                      py: 1,
                      mx: 1,
                      position: "relative",
                      overflow: "hidden",
                      "&:hover": {
                        backgroundColor: COLORS.glassHighlight,
                        "&::before": {
                          transform: "translateX(0)",
                        },
                      },
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: `linear-gradient(90deg, transparent, ${COLORS.primary}20, transparent)`,
                        transform: "translateX(-100%)",
                        transition: "transform 0.6s ease",
                        zIndex: -1,
                      },
                    }}
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </Button>
                </motion.div>
              ))}
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              sx={{
                display: { xs: "flex", md: "none" },
                color: COLORS.primary,
                zIndex: 30,
              }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Toolbar>
        </Container>

        {/* Mobile Menu */}
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(255,255,255,0.9)",
            backdropFilter: "blur(10px)",
            zIndex: 10,
            display: mobileMenuOpen ? "flex" : "none",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1.5rem",
            transition: "opacity 0.3s ease",
          }}
        >
          {["about", "projects", "contact"].map((id, index) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              animate={mobileMenuOpen ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
            >
              <Button
                href={`#${id}`}
                onClick={() => setMobileMenuOpen(false)}
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: 500,
                  color: COLORS.darkText,
                  textTransform: "none",
                  "&:hover": {
                    color: COLORS.primary,
                  },
                }}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </Button>
            </motion.div>
          ))}
        </Box>
      </AppBar>

      {/* Main Content */}
      <Container
        id="about"
        sx={{
          py: { xs: 6, md: 10 },
          flex: 1,
          position: "relative",
          zIndex: 1,
        }}
      >
        <motion.div
          initial="hidden"
          animate={isMounted ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
            <motion.div
              whileHover={{
                scale: 1.03,
                rotate: [0, -2, 0, 2, 0],
                transition: { duration: 0.5 },
              }}
            >
              <Avatar
                src="/avatar.png"
                alt="Mykhailo"
                sx={{
                  width: { xs: 120, md: 160 },
                  height: { xs: 120, md: 160 },
                  mx: "auto",
                  mb: 4,
                  border: `3px solid ${COLORS.primary}`,
                  boxShadow: `0 5px 25px ${COLORS.primary}40`,
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    top: -5,
                    left: -5,
                    right: -5,
                    bottom: -5,
                    borderRadius: "50%",
                    border: `2px solid ${COLORS.secondary}30`,
                  },
                }}
              />
            </motion.div>
            <motion.div>
              <Typography
                variant="h2"
                component="h1"
                gutterBottom
                sx={{ fontWeight: 700 }}
              >
                <Box
                  component="span"
                  sx={{
                    color: COLORS.primary,
                    display: "block",
                    mb: 1,
                  }}
                >
                  Mykhailo
                </Box>
                <Box
                  component="span"
                  sx={{
                    color: COLORS.darkText,
                    fontSize: "1.5rem",
                    fontWeight: 400,
                  }}
                >
                  Web Developer
                </Box>
              </Typography>
            </motion.div>
          </Box>

          <motion.div whileHover={{ y: -5 }}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 5 },
                background: COLORS.glassBg,
                backdropFilter: "blur(12px)",
                borderRadius: "20px",
                boxShadow: `0 8px 32px ${COLORS.primary}10`,
                border: `1px solid ${COLORS.glassBorder}`,
                position: "relative",
                overflow: "hidden",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "5px",
                  background: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.secondary})`,
                  transform: "translateX(-100%)",
                  transition: "transform 0.6s ease",
                },
                "&:hover::before": {
                  transform: "translateX(0)",
                },
              }}
            >
              <motion.div>
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    color: COLORS.primary,
                    fontWeight: 600,
                    mb: 3,
                  }}
                >
                  Web Developer
                </Typography>
              </motion.div>

              <motion.div>
                <Typography
                  variant="body1"
                  sx={{
                    color: COLORS.darkText,
                    fontSize: "1.1rem",
                    lineHeight: 1.8,
                  }}
                >
                  Apprentice specializing in e-commerce solutions and CMS
                  platforms. Passionate about creating efficient, user-centered
                  applications with modern web technologies.
                </Typography>
              </motion.div>

              <motion.div>
                <Box
                  sx={{
                    background: `linear-gradient(45deg, ${COLORS.primary}10, ${COLORS.secondary}10)`,
                    p: 3,
                    borderRadius: "16px",
                    textAlign: "center",
                    mt: 4,
                    borderLeft: `4px solid ${COLORS.primary}`,
                    position: "relative",
                    overflow: "hidden",
                    backdropFilter: "blur(5px)",
                    border: `1px solid ${COLORS.glassBorder}`,
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontStyle: "italic",
                      color: COLORS.darkText,
                      fontSize: "1.1rem",
                      fontWeight: 500,
                    }}
                  >
                    "Clean code is not just functional - it's communicative."
                  </Typography>
                </Box>
              </motion.div>
            </Paper>
          </motion.div>

          {/* Animated CTA */}
          <motion.div
            style={{ textAlign: "center", marginTop: 50 }}
            whileHover={{ scale: 1.05 }}
          >
            <Button
              variant="contained"
              href="#contact"
              sx={{
                background: `linear-gradient(45deg, ${COLORS.primary}, ${COLORS.secondary})`,
                color: COLORS.lightText,
                borderRadius: "50px",
                px: 6,
                py: 1.5,
                textTransform: "none",
                fontSize: "1.1rem",
                fontWeight: 500,
                boxShadow: `0 5px 20px ${COLORS.primary}40`,
                position: "relative",
                overflow: "hidden",
                zIndex: 1,
                "&:hover": {
                  boxShadow: `0 8px 25px ${COLORS.primary}60`,
                  "&::before": {
                    transform: "translateX(0)",
                  },
                },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: `linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)`,
                  transform: "translateX(-100%)",
                  transition: "transform 0.6s ease",
                  zIndex: -1,
                },
              }}
              component={motion.a}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Collaborate
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      {/* Frosted Glass Footer */}
      <Box
        component="footer"
        sx={{
          background: COLORS.glassBg,
          backdropFilter: "blur(12px)",
          py: { xs: 4, md: 6 },
          mt: "auto",
          borderTop: `1px solid ${COLORS.glassBorder}`,
          position: "relative",
          zIndex: 1,
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: { xs: 3, md: 5 },
              flexWrap: "wrap",
              mb: 4,
            }}
          >
            {icons.map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={isMounted ? "visible" : "hidden"}
                whileHover={{
                  scale: 1.2,
                  rotate: [0, -10, 10, -10, 0],
                  transition: { duration: 0.5 },
                }}
                whileTap={{ scale: 0.9 }}
              >
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <IconButton
                    sx={{
                      bgcolor: COLORS.glassHighlight,
                      color: COLORS.primary,
                      width: 56,
                      height: 56,
                      transition: "0.4s",
                      backdropFilter: "blur(4px)",
                      border: `1px solid ${COLORS.glassBorder}`,
                      "&:hover": {
                        bgcolor: COLORS.primary,
                        color: "white",
                        transform: "scale(1.2)",
                        boxShadow: `0 0 20px ${COLORS.primary}`,
                      },
                    }}
                  >
                    {item.icon}
                  </IconButton>
                </a>
              </motion.div>
            ))}
          </Box>
          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              color: COLORS.darkText,
              opacity: 0.8,
            }}
          >
            © {new Date().getFullYear()} Mykhailo. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
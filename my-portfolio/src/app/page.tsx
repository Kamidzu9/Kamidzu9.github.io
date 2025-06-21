"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import { motion, number, Variants } from "framer-motion";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Avatar,
  Button,
  IconButton,
  Paper,
  Grid,
  useMediaQuery,
  useTheme,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Link,
  TextField,
  Fab,
} from "@mui/material";
import {
  GitHub,
  LinkedIn,
  Mail,
  Menu,
  Close,
  Code,
  Store,
  Web,
  DesignServices,
  Work,
  School,
  ArrowUpward,
  ArrowDownward,
} from "@mui/icons-material";

const COLORS = {
  primary: "#4a6cf7",
  secondary: "#6e4af7",
  glassBg: "rgba(255, 255, 255, 0.15)",
  glassBorder: "rgba(255, 255, 255, 0.25)",
  glassHighlight: "rgba(255, 255, 255, 0.4)",
  darkText: "#1d1d1f",
  lightText: "#f5f5f7",
};

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

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
  hover: {
    scale: 1.05,
    y: -5,
    transition: { duration: 0.3 },
  },
};

const icons = [
  { icon: <GitHub />, link: "https://github.com/Kamidzu9" },
  {
    icon: <LinkedIn />,
    link: "https://www.linkedin.com/in/mykhailo-solovey-34345934a/",
  },
  { icon: <Mail />, link: "mailto:msolovey.job@gmail.com" },
];

const skills = [
  { name: "JavaScript", icon: <Code /> },
  { name: "Python", icon: <Code /> },
  { name: "PHP", icon: <Code /> },
  { name: "HTML5", icon: <Web /> },
  { name: "CSS/SCSS", icon: <DesignServices /> },
  { name: "Node.js", icon: <Code /> },
  { name: "Vue.js", icon: <Code /> },
  { name: "React", icon: <Code /> },
  { name: "Next.js", icon: <Web /> },
  { name: "WordPress", icon: <Store /> },
  { name: "Shopware 6", icon: <Store /> },
];

const experiences = [
  {
    role: "Trainee IT Specialist - Application Development",
    company: "HQ GmbH",
    period: "Aug. 2023 - Present",
    description:
      "Linux, Teamwork, application development with various technologies.",
  },
];

const education = [
  {
    degree: "IT Specialist as Application Developer (Ausbildung)",
    institution: "Staatliches Berufsschulzentrum Hermsdorf-Schleiz-Pößneck",
    period: "Aug. 2023 - Aug. 2026",
  },
  {
    degree: "High School Diploma, Geisteswissenschaftliches Profil",
    institution: "Allgemeinbildende Schule mit Stufen 1-3 Nr. 7 in Sosniwka",
    period: "Sept. 2011 - Sept. 2022",
    note: "Grade: 1,83",
    activities: "Epam Courses, research on Ukrainian literature, Olympiads",
  },
];

export default function Home() {
  const [isAtTop, setIsAtTop] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setIsAtTop(window.scrollY < 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const overflowValue = mobileMenuOpen ? "hidden" : "auto";
    document.body.style.overflow = overflowValue;
    document.documentElement.style.overflow = overflowValue;
    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollToBottom = () =>
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });

  return (
    <div>
      <Head>
        <title>Mykhailo | Web Developer</title>
        <meta name="description" content="Web Developer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        sx={{
          height: "100%",
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
          position="fixed" // Keep this fixed
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
                {["about", "skills", "experience", "projects", "contact"].map(
                  (id) => (
                    <motion.div
                      key={id}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        onClick={() => scrollToSection(id)}
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
                  )
                )}
              </Box>

              {/* Mobile Menu Button */}
              <IconButton
                sx={{
                  display: { xs: "flex", md: "none" },
                  color: COLORS.primary,
                  zIndex: 30,
                  background: COLORS.glassBg,
                  overflow: "hidden" /* statt overflowY */,
                }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <Close /> : <Menu />}
              </IconButton>
            </Toolbar>
          </Container>

          {/* Mobile Menu */}
          <Box
            sx={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              display: mobileMenuOpen ? "flex" : "none",
              justifyContent: "center",
              alignItems: "center",
              background: "rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(25px)",
              WebkitBackdropFilter: "blur(25px)",
              zIndex: 999,
            }}
          >
            <Box
              sx={{
                width: "80%",
                maxWidth: 320,
                p: 4,
                background: "rgba(255, 255, 255, 0.8)",
                border: "1px solid rgba(255, 255, 255, 0.9)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(15px)",
                WebkitBackdropFilter: "blur(15px)",
                borderRadius: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1.5rem",
              }}
            >
              {["about", "skills", "experience", "projects", "contact"].map(
                (id, i) => (
                  <motion.div
                    key={id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={mobileMenuOpen ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Button
                      onClick={() => scrollToSection(id)}
                      sx={{
                        fontSize: "1.25rem",
                        fontWeight: 600,
                        color: COLORS.darkText,
                        textTransform: "none",
                        "&:hover": { color: COLORS.primary },
                      }}
                    >
                      {id.charAt(0).toUpperCase() + id.slice(1)}
                    </Button>
                  </motion.div>
                )
              )}
            </Box>
          </Box>
        </AppBar>

        {/* Main Content */}
        <Container
          id="about"
          sx={{
            py: { xs: 6, md: 10 },
            mt: { xs: 6, md: 10 },
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
                variants={itemVariants}
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
              <motion.div variants={itemVariants}>
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

            <motion.div variants={itemVariants} whileHover={{ y: -5 }}>
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
                <motion.div variants={itemVariants}>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                      color: COLORS.primary,
                      fontWeight: 600,
                      mb: 3,
                    }}
                  >
                    About Me
                  </Typography>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: COLORS.darkText,
                      fontSize: "1.1rem",
                      lineHeight: 1.8,
                    }}
                  >
                    I'm a passionate web developer specializing in creating
                    modern, responsive web applications. With expertise in
                    React, Next.js, and modern JavaScript, I build efficient,
                    user-centered applications that deliver exceptional user
                    experiences.
                  </Typography>
                </motion.div>

                <motion.div variants={itemVariants}>
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
          </motion.div>
        </Container>

        {/* Skills Section */}
        <Container
          id="skills"
          sx={{
            py: { xs: 6, md: 10 },
            position: "relative",
            zIndex: 1,
          }}
        >
          <motion.div
            initial="hidden"
            animate={isMounted ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h3"
                  component="h2"
                  gutterBottom
                  sx={{ fontWeight: 700 }}
                >
                  <Box
                    component="span"
                    sx={{
                      background: `linear-gradient(45deg, ${COLORS.primary}, ${COLORS.secondary})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    My Skills
                  </Box>
                </Typography>
                <Typography variant="body1" sx={{ color: COLORS.darkText }}>
                  Technologies and tools I work with
                </Typography>
              </motion.div>
            </Box>

            <Grid container spacing={3}>
              {skills.map((skill, index) => (
                <Grid item xs={6} sm={4} md={2} key={index}>
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3,
                        textAlign: "center",
                        background: COLORS.glassBg,
                        backdropFilter: "blur(12px)",
                        borderRadius: "16px",
                        border: `1px solid ${COLORS.glassBorder}`,
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mb: 2,
                          color: COLORS.primary,
                          fontSize: "2rem",
                        }}
                      >
                        {skill.icon}
                      </Box>
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: 500, color: COLORS.darkText }}
                      >
                        {skill.name}
                      </Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>

        {/* Experience & Education */}
        <Container
          id="experience"
          sx={{
            py: { xs: 6, md: 10 },
            position: "relative",
            zIndex: 1,
          }}
        >
          <motion.div
            initial="hidden"
            animate={isMounted ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h3"
                  component="h2"
                  gutterBottom
                  sx={{ fontWeight: 700 }}
                >
                  <Box
                    component="span"
                    sx={{
                      background: `linear-gradient(45deg, ${COLORS.primary}, ${COLORS.secondary})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Experience & Education
                  </Box>
                </Typography>
              </motion.div>
            </Box>

            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <motion.div variants={itemVariants}>
                  <Typography
                    variant="h5"
                    sx={{ mb: 3, color: COLORS.primary, fontWeight: 600 }}
                  >
                    Work Experience
                  </Typography>
                  <Paper
                    elevation={0}
                    sx={{
                      background: COLORS.glassBg,
                      backdropFilter: "blur(12px)",
                      borderRadius: "16px",
                      border: `1px solid ${COLORS.glassBorder}`,
                      overflow: "hidden",
                    }}
                  >
                    <List>
                      {experiences.map((exp, index) => (
                        <ListItem
                          key={index}
                          sx={{
                            py: 3,
                            borderBottom:
                              index < experiences.length - 1
                                ? `1px solid ${COLORS.glassBorder}`
                                : "none",
                          }}
                        >
                          <ListItemIcon
                            sx={{ minWidth: 40, color: COLORS.primary }}
                          >
                            <Work />
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                {exp.role}
                              </Typography>
                            }
                            secondary={
                              <>
                                <Typography
                                  variant="body1"
                                  sx={{ fontWeight: 500 }}
                                >
                                  {exp.company}
                                </Typography>
                                <br />
                                <Typography
                                  variant="body2"
                                  sx={{
                                    color: COLORS.darkText,
                                    fontStyle: "italic",
                                  }}
                                >
                                  {exp.period}
                                </Typography>
                                <br />
                                <Typography
                                  variant="body1"
                                  sx={{ mt: 1, color: COLORS.darkText }}
                                >
                                  {exp.description}
                                </Typography>
                              </>
                            }
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Paper>
                </motion.div>
              </Grid>

              <Grid item xs={12} md={6}>
                <motion.div variants={itemVariants}>
                  <Typography
                    variant="h5"
                    sx={{ mb: 3, color: COLORS.primary, fontWeight: 600 }}
                  >
                    Education
                  </Typography>
                  <Paper
                    elevation={0}
                    sx={{
                      background: COLORS.glassBg,
                      backdropFilter: "blur(12px)",
                      borderRadius: "16px",
                      border: `1px solid ${COLORS.glassBorder}`,
                      overflow: "hidden",
                    }}
                  >
                    <List>
                      {education.map((edu, index) => (
                        <ListItem
                          key={index}
                          sx={{
                            py: 3,
                            borderBottom:
                              index < education.length - 1
                                ? `1px solid ${COLORS.glassBorder}`
                                : "none",
                          }}
                        >
                          <ListItemIcon
                            sx={{ minWidth: 40, color: COLORS.primary }}
                          >
                            <School />
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                {edu.degree}
                              </Typography>
                            }
                            secondary={
                              <>
                                <Typography
                                  variant="body1"
                                  sx={{ fontWeight: 500 }}
                                >
                                  {edu.institution}
                                </Typography>
                                <br />
                                <Typography
                                  variant="body2"
                                  sx={{
                                    color: COLORS.darkText,
                                    fontStyle: "italic",
                                  }}
                                >
                                  {edu.period}
                                </Typography>
                              </>
                            }
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Paper>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        </Container>

        {/* Projects Section */}
        <Container
          id="projects"
          sx={{
            py: { xs: 6, md: 10 },
            position: "relative",
            align: "center",
            zIndex: 1,
          }}
        >
          <motion.div
            initial="hidden"
            animate={isMounted ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h3"
                  component="h2"
                  gutterBottom
                  sx={{ fontWeight: 700 }}
                >
                  <Box
                    component="span"
                    sx={{
                      background: `linear-gradient(45deg, ${COLORS.primary}, ${COLORS.secondary})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    My Projects
                  </Box>
                </Typography>
                <Typography variant="body1" sx={{ color: COLORS.darkText }}>
                  Some of my recent work
                </Typography>
              </motion.div>
            </Box>

            {/* <Grid container spacing={4}>
              {[1, 2, 3].map((item, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <motion.div variants={itemVariants} whileHover={{ y: -10 }}>
                    <Paper
                      elevation={0}
                      sx={{
                        height: '100%',
                        background: COLORS.glassBg,
                        backdropFilter: 'blur(12px)',
                        borderRadius: "16px",
                        border: `1px solid ${COLORS.glassBorder}`,
                        overflow: 'hidden',
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-5px)'
                        }
                      }}
                    >
                      <Box sx={{ 
                        height: 200, 
                        background: `linear-gradient(45deg, ${COLORS.primary}20, ${COLORS.secondary}20)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: COLORS.primary,
                        fontSize: '3rem'
                      }}>
                        <Code sx={{ fontSize: 60 }} />
                      </Box>
                      <Box sx={{ p: 3 }}>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                          Project {index + 1}
                        </Typography>
                        <Typography variant="body1" sx={{ color: COLORS.darkText, mb: 2 }}>
                          A modern web application built with React and Next.js.
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                          {['React', 'Next.js', 'MUI'].map((tech, i) => (
                            <Box key={i} sx={{ 
                              px: 1.5, 
                              py: 0.5, 
                              bgcolor: `${COLORS.primary}15`, 
                              borderRadius: '4px',
                              fontSize: '0.75rem',
                              fontWeight: 500,
                              color: COLORS.primary
                            }}>
                              {tech}
                            </Box>
                          ))}
                        </Box>
                        <Button 
                          variant="outlined" 
                          sx={{ 
                            mt: 2, 
                            color: COLORS.primary, 
                            borderColor: COLORS.primary,
                            '&:hover': {
                              borderColor: COLORS.primary,
                              bgcolor: `${COLORS.primary}10`
                            }
                          }}
                        >
                          View Details
                        </Button>
                      </Box>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid> */}
            <Grid container justifyContent="center">
              <Grid item xs={12} md={6}>
                <motion.div variants={itemVariants}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      background: COLORS.glassBg,
                      backdropFilter: "blur(12px)",
                      borderRadius: "16px",
                      border: `1px solid ${COLORS.glassBorder}`,
                      textAlign: "center",
                      color: COLORS.darkText,
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        mb: 2,
                        background: `linear-gradient(45deg, ${COLORS.primary}, ${COLORS.secondary})`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      🚀 Coming soon
                    </Typography>
                    <Typography variant="body1">
                      I’m currently working on some exciting projects - stay
                      tuned!
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        </Container>

        {/* Contact Section */}
        <Container
          id="contact"
          sx={{
            py: { xs: 6, md: 10 },
            position: "relative",
            zIndex: 1,
          }}
        >
          <motion.div
            initial="hidden"
            animate={isMounted ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h3"
                  component="h2"
                  gutterBottom
                  sx={{ fontWeight: 700 }}
                >
                  <Box
                    component="span"
                    sx={{
                      background: `linear-gradient(45deg, ${COLORS.primary}, ${COLORS.secondary})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Get In Touch
                  </Box>
                </Typography>
                <Typography variant="body1" sx={{ color: COLORS.darkText }}>
                  Have a project in mind? Let's collaborate!
                </Typography>
              </motion.div>
            </Box>

            <Grid container justifyContent="center" spacing={4}>
              <Grid item xs={12} md={6}>
                <motion.div variants={itemVariants}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: { xs: 3, md: 4 },
                      background: COLORS.glassBg,
                      backdropFilter: "blur(12px)",
                      borderRadius: "20px",
                      boxShadow: `0 8px 32px ${COLORS.primary}10`,
                      border: `1px solid ${COLORS.glassBorder}`,
                      position: "relative",
                      overflow: "hidden",
                      height: "100%",
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
                    <Typography
                      variant="h5"
                      sx={{ mb: 3, color: COLORS.primary, fontWeight: 600 }}
                    >
                      Contact Information
                    </Typography>

                    <Box sx={{ mb: 3 }}>
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: 500, mb: 1 }}
                      >
                        Email:
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: COLORS.darkText }}
                      >
                        msolovey.job@gmail.com
                      </Typography>
                    </Box>

                    <Box sx={{ mb: 3 }}>
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: 500, mb: 1 }}
                      >
                        Location:
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: COLORS.darkText }}
                      >
                        Thueringen, Germany
                      </Typography>
                    </Box>

                    <Box>
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: 500, mb: 2 }}
                      >
                        Connect with me:
                      </Typography>
                      <Box sx={{ display: "flex", gap: 2 }}>
                        {icons.map((item, index) => (
                          <motion.div
                            key={index}
                            whileHover={{
                              scale: 1.2,
                              rotate: [0, -10, 10, -10, 0],
                              transition: { duration: 0.5 },
                            }}
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
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>

              {/* <Grid item xs={12} md={6}>
                <motion.div variants={itemVariants}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: { xs: 3, md: 4 },
                      background: COLORS.glassBg,
                      backdropFilter: 'blur(12px)',
                      borderRadius: "20px",
                      boxShadow: `0 8px 32px ${COLORS.primary}10`,
                      border: `1px solid ${COLORS.glassBorder}`,
                      position: 'relative',
                      overflow: 'hidden',
                      height: '100%',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '5px',
                        background: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.secondary})`,
                        transform: 'translateX(-100%)',
                        transition: 'transform 0.6s ease',
                      },
                      '&:hover::before': {
                        transform: 'translateX(0)'
                      }
                    }}
                  >
                    <Typography variant="h5" sx={{ mb: 3, color: COLORS.primary, fontWeight: 600 }}>
                      Send a Message
                    </Typography>
                    
                    <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                      <TextField
                        fullWidth
                        label="Your Name"
                        variant="outlined"
                        size="medium"
                      />
                      <TextField
                        fullWidth
                        label="Your Email"
                        variant="outlined"
                        size="medium"
                      />
                      <TextField
                        fullWidth
                        label="Message"
                        variant="outlined"
                        multiline
                        rows={4}
                        size="medium"
                      />
                      
                      <motion.div 
                        style={{ marginTop: 16 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Button
                          variant="contained"
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
                            width: '100%',
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
                        >
                          Send Message
                        </Button>
                      </motion.div>
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>*/}
            </Grid>
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
            {/* <Box
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
                  variants={itemVariants}
                  initial="hidden"
                  animate={isMounted ? "visible" : "hidden"}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: [0, -10, 10, -10, 0],
                    transition: { duration: 0.5 }
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
                        bgcolor: 'rgba(255,255,255,0.1)',
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
            </Box> */}
            <Typography
              variant="body1"
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
      {/* Floating Scroll-Button unten rechts */}
      <Box
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          zIndex: 1000,
        }}
      >
        {isAtTop ? (
          <Fab
            size="small"
            onClick={scrollToBottom}
            sx={{
              bgcolor: COLORS.primary,
              color: "#fff",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.2)",
                bgcolor: COLORS.primary,
              },
            }}
          >
            <ArrowDownward />
          </Fab>
        ) : (
          <Fab
            size="small"
            onClick={scrollToTop}
            sx={{
              bgcolor: COLORS.primary,
              color: "#fff",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.2)",
                bgcolor: COLORS.primary,
              },
            }}
          >
            <ArrowUpward />
          </Fab>
        )}
      </Box>
    </div>
  );
}

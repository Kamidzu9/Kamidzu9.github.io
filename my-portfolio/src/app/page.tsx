"use client";

import React from "react";
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
import { motion } from "framer-motion";

// Animation variants (залишаємо без змін)
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const icons = [
  { icon: <GitHubIcon />, link: "https://github.com/Kamidzu9" },
  { icon: <LinkedInIcon />, link: "https://linkedin.com" },
  { icon: <MailIcon />, link: "mailto:email@example.com" },
];

export default function Home() {
  return (
    <Box
      sx={{
        bgcolor: "surface",
        color: "onSurface",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <AppBar
        position="relative"
        sx={{
          bgcolor: "royalblue",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
          <Typography component="div" sx={{ color: "white" }}>
            {" "}
            MyPortfolio
          </Typography>
          <Box>
            {["about", "projects", "contact"].map((id) => (
              <Button
                key={id}
                href={`#${id}`}
                sx={{
                  textTransform: "none",
                  color: "white",
                  borderRadius: "20px",
                  px: 3,
                  py: 1,
                }}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Container
        id="about"
        sx={{ borderColor: "gray", py: { xs: 4, md: 8 }, flex: 1 }}
      >
        {" "}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
            {" "}
            <motion.div variants={itemVariants}>
              <Avatar
                src="/avatar.png"
                alt="Mykhailo"
                sx={{
                  width: { xs: 100, md: 140 },
                  height: { xs: 100, md: 140 },
                  mx: "auto",
                  mb: 4,
                  border: "3px solid",
                  borderColor: "black",
                }}
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <Typography component="h1" gutterBottom>
                <Box component="span" sx={{ color: "black" }}>
                  Mykhailo
                </Box>
                <br />
                <Box component="span" sx={{ color: "gray" }}>
                  Web Developer
                </Box>
              </Typography>
            </motion.div>
          </Box>

          <Paper
            elevation={1}
            sx={{
              p: { xs: 2, md: 4 },
              bgcolor: "surfaceContainer",
              borderRadius: "12px",
            }}
          >
            <motion.div variants={itemVariants}>
              <Typography gutterBottom sx={{ color: "black" }}>
                {" "}
                Web Developer
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography
                sx={{
                  color: "black",
                }}
              >
                {" "}
                Apprentice specializing in e-commerce solutions and CMS
                platforms. Passionate about creating efficient, user-centered
                applications with modern web technologies.
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Box
                sx={{
                  bgcolor: "surfaceContainerHigh",
                  p: 3,
                  borderRadius: "8px",
                  textAlign: "center",
                  mt: 2,
                }}
              >
                <Typography
                  sx={{
                    fontStyle: "italic",
                    color: "black",
                  }}
                >
                  "Clean code is not just functional - it's communicative."
                </Typography>
              </Box>
            </motion.div>
          </Paper>

          {/* CTA Button */}
          <motion.div variants={itemVariants} style={{ textAlign: "center" }}>
            <Button
              variant="contained"
              href="#contact"
              sx={{
                bgcolor: "white",
                color: "black",
                borderRadius: "20px",
                px: 6,
                py: 1.5,
                textTransform: "none",
              }}
              component={motion.a}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Collaborate
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      <Box
        component="footer"
        sx={{
          bgcolor: "surfaceContainer",
          py: { xs: 3, md: 6 },
          mt: "auto",
        }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: { xs: 2, md: 4 },
            flexWrap: "wrap",
          }}
        >
          {icons.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <IconButton
                  sx={{
                    bgcolor: "grey.200",
                    color: "black",
                    transition: "0.4s",
                    "&:hover": {
                      bgcolor: "royalblue",
                      color: "white",
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                      transform: "scale(1.2)",
                    },
                  }}
                >
                  {item.icon}
                </IconButton>
              </a>
            </motion.div>
          ))}
        </Container>
        <Typography
          sx={{
            textAlign: "center",
            color: "onSurfaceVariant",
            mt: 4,
          }}
        >
          © {new Date().getFullYear()} Mykhailo. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}

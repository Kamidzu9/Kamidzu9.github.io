"use client"

import React from 'react';
import { ThemeProvider, createTheme, darken } from '@mui/material/styles'; // Додано darken
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import { motion } from 'framer-motion';

// Material Design 3 Theme
//let theme = createTheme({
 // palette: {
//    primary: {
 //     main: '#6750A4',
     // onPrimary: '#FFFFFF', // Колір тексту/іконок на primary.main
     // container: '#EADDFF',
     //  onContainer: '#21005E',
   // },
  //  secondary: {
   //   main: '#625B71',
     //  onSecondary: '#FFFFFF', // Колір тексту/іконок на secondary.main
     //  container: '#E8DEF8',
     // onContainer: '#1D192B',
  //  },
    // surface: '#FEF7FF', // Основний колір фону для компонентів
    // onSurface: '#1D1B20', // Колір тексту/іконок на surface
    // surfaceVariant: '#E7E1F0', // Варіант фону, трохи відрізняється від surface
    // onSurfaceVariant: '#49454E', // Колір тексту/іконок на surfaceVariant
    // outline: '#79747E', // Для контурів та роздільників
    // surfaceContainer: '#F3EDF7', // Контейнер на surface, трохи виділений
    // surfaceContainerHigh: '#E7E0EC', // Контейнер на surface, ще більше виділений
    // Додамо інші тональні поверхні MD3 за потреби
    // surfaceContainerLowest, surfaceContainerLow, surfaceContainerHighest
 // },
 // shape: {
  //  borderRadius: 16, // Глобальний радіус скруглення для MD3
 // },
 // typography: {
 //   fontFamily: 'Roboto, sans-serif',
    // displayLarge: {
    //  fontSize: '3.5rem', // 57px
    //  fontWeight: 700,
    //  lineHeight: 1.12, // 64px
 //   },
    // headlineMedium: { // Використовується для заголовків секцій
    //  fontSize: '1.75rem', // 28px
    //  fontWeight: 500,
    //  lineHeight: 1.28, // 36px
  //  },
   // titleLarge: { // Для заголовків в AppBar
    //  fontSize: '1.375rem', // 22px
    //  fontWeight: 500,     // MD3 часто використовує 400 або 500
    //  lineHeight: 1.27, // 28px
    //},
    //bodyLarge: {
     // fontSize: '1rem', // 16px
     // fontWeight: 400,
      //lineHeight: 1.5, // 24px
    //}
    // Можна додати інші ролі типографіки MD3:
    // displayMedium, displaySmall, headlineLarge, headlineSmall,
    // titleMedium, titleSmall, bodyMedium, bodySmall,
    // labelLarge, labelMedium, labelSmall
 // },
  // Залишаємо тіні користувача, але зауважте, що MD3 має свої стандартні значення
  //shadows: ['none', '0px 2px 6px rgba(0,0,0,0.08)', '0px 4px 8px rgba(0,0,0,0.12)'],
//});

// Додаємо responsive після створення (це вже було зроблено добре)
//theme = {
  //...theme,
 // typography: {
  //  ...theme.typography,
  //  displayLarge: {
  //    ...theme.typography.displayLarge,
  //    [theme.breakpoints.down('md')]: {
   //     fontSize: '2.5rem',
   //   },
  //  },
   // headlineMedium: {
   //     ...theme.typography.headlineMedium,
   //     [theme.breakpoints.down('md')]: {
   //       fontSize: '1.5rem', // Приклад адаптивності для headlineMedium
   //     },
  //  }
 // }
//};


// Animation variants (залишаємо без змін)
const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

export default function Home() {
  return (
   /* <ThemeProvider theme={theme*/
      <Box sx={{
        bgcolor: 'surface', // Використовуємо surface для основного фону сторінки
        color: 'onSurface', // Встановлюємо дефолтний колір тексту для surface
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Elevated App Bar */}
        <AppBar
          position="sticky"
          // elevation={0} // MD3 часто використовує tonal elevation замість тіні для AppBar на surface
          sx={{
            bgcolor: 'surfaceContainerHigh', // MD3 TopAppBar часто використовує surface або surfaceContainer
            /*color: theme.palette.onSurfaceVariant,*/ // Колір тексту за замовчуванням для AppBar
            borderRadius: '28px', // "Плаваючий" стиль
            mx: 2,
            mt: 2,
            mb: 4,
           /* boxShadow: theme.shadows[2],*/ // Використовуємо тінь користувача
          }}
        >
          <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
            <Typography /*variant="titleLarge"*/ component="div" sx={{ color: 'primary.main' }}> {/* Змінено варіант та колір */}
              MyPortfolio
            </Typography>
            <Box>
              {['about', 'projects', 'contact'].map((id) => (
                <Button
                  key={id}
                  href={`#${id}`}
                  sx={{
                    textTransform: 'none',
                    color: 'primary.main', // Колір тексту для кнопок навігації
                    borderRadius: '20px', // Залишаємо стиль "пігулки"
                    px: 3,
                    py: 1,
                   /* '&:hover': { bgcolor: theme.palette.primary.container, color: theme.palette.primary.onContainer } */// Кращий ховер
                  }}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>

        {/* Main Content */}
        <Container id="about" sx={{ py: { xs: 4, md: 8 }, flex: 1 }}> {/* Адаптивний padding */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {/* Hero Section */}
            <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}> {/* Адаптивний margin */}
              <motion.div variants={itemVariants}>
                <Avatar
                  src="/avatar.png"
                  alt="Mykhailo"
                  sx={{
                    width: { xs: 100, md: 140 }, // Адаптивний розмір
                    height: { xs: 100, md: 140 },// Адаптивний розмір
                    mx: 'auto',
                    mb: 4,
                    border: '3px solid',
                    borderColor: 'primary.container' // Гарний акцент
                  }}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography /*variant="displayLarge"*/ component="h1" gutterBottom>
                  <Box component="span" sx={{ color: 'primary.main' }}>Mykhailo</Box>
                  <br />
                  <Box component="span" sx={{ color: 'secondary.main' }}>Web Developer</Box>
                </Typography>
              </motion.div>
            </Box>

            {/* About Section (Card) */}
            <Paper
              elevation={1} // MD3 Cards often have elevation 1 or 2
              sx={{
                p: { xs: 2, md: 4 }, // Адаптивний padding
                bgcolor: 'surfaceContainer', // Добре для карток
                borderRadius: '12px', // MD3 картки зазвичай мають 12dp або 16dp
                // boxShadow: theme.shadows[1], // elevation={1} вже застосовує тінь
              }}
            >
              <motion.div variants={itemVariants}>
                <Typography /*variant="headlineMedium"*/ gutterBottom sx={{ color: 'primary.main' }}> {/* Змінено колір на primary.main для акценту */}
                  🇺🇦 Ukrainian Developer in Germany
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography /*variant="bodyLarge" paragraph*/ sx={{ color: 'onSurfaceVariant' }}> {/* Текст на surfaceContainer -> onSurfaceVariant */}
                  Apprentice specializing in e-commerce solutions and CMS platforms. Passionate about creating efficient,
                  user-centered applications with modern web technologies.
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Box sx={{
                  bgcolor: 'surfaceContainerHigh', // Внутрішній блок
                  p: 3,
                  borderRadius: '8px', // Радіус для вкладених елементів
                  textAlign: 'center',
                  mt: 2 // Додано трохи відступу зверху
                }}>
                  <Typography /*variant="bodyLarge"*/ sx={{
                    fontStyle: 'italic',
                    color: 'onSurfaceVariant' // Текст на surfaceContainerHigh -> onSurfaceVariant
                  }}>
                    "Clean code is not just functional - it's communicative."
                  </Typography>
                </Box>
              </motion.div>
            </Paper>

            {/* CTA Button */}
            <motion.div variants={itemVariants} style={{ textAlign: 'center', /*marginTop: theme.spacing(6)*/ }}>
              <Button
                variant="contained" // Filled button
                href="#contact"
                sx={{
                  bgcolor: 'primary.main',
                  color: 'onPrimary', // Правильний колір тексту для primary.main фону
                  borderRadius: '20px', // Стиль "пігулки"
                  px: 6,
                  py: 1.5,
                  textTransform: 'none', // MD3 кнопки часто не мають капсу
                 /* '&:hover': {
                    bgcolor: darken(theme.palette.primary.main, 0.1), // Затемнення при наведенні
                  }*/
                }}
                component={motion.a} // Для анімації кнопки як посилання
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Collaborate
              </Button>
            </motion.div>
          </motion.div>
        </Container>

        {/* Footer */}
        <Box
          component="footer"
          sx={{
            bgcolor: 'surfaceContainer', // MD3 Navigation Bar часто surfaceContainer або Muted
            py: { xs: 3, md: 6 }, // Адаптивний padding
            mt: 'auto',
            // boxShadow: theme.shadows[1] // Можна прибрати тінь, якщо фон достатньо контрастний
          }}
        >
          <Container sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: { xs: 2, md: 4 }, // Адаптивний проміжок
            flexWrap: 'wrap'
          }}>
            {[
              { icon: <GitHubIcon />, link: 'https://github.com/Kamidzu9' },
              { icon: <LinkedInIcon />, link: 'https://linkedin.com' },
              { icon: <MailIcon />, link: 'mailto:email@example.com' }
            ].map((item, index) => (
              <motion.div key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link href={item.link} target="_blank" underline="none">
                  <IconButton sx={{
                    bgcolor: 'primary.container', // Filled Tonal IconButton стиль
                    color: 'primary.onContainer',
                    '&:hover': {
                      bgcolor: 'primary.main', // При наведенні
                      color: 'onPrimary'      // Текст/іконка стає onPrimary
                    }
                  }}>
                    {item.icon}
                  </IconButton>
                </Link>
              </motion.div>
            ))}
          </Container>
           <Typography /*variant="bodyLarge"*/ sx={{ textAlign: 'center', color: 'onSurfaceVariant', mt: 4 }}>
             © {new Date().getFullYear()} Mykhailo. All rights reserved.
           </Typography>
        </Box>
      </Box>
 /*   </ThemeProvider>*/
  );
}
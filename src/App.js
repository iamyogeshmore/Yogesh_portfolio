import React, { useState } from "react";
import { ThemeProvider, createTheme, CssBaseline, Box, useMediaQuery } from "@mui/material";
import {
  Home as HomeIcon,
  Person as PersonIcon,
  Work as WorkIcon,
  Code as CodeIcon,
  School as SchoolIcon,
  Email as EmailIcon,
} from "@mui/icons-material";
import Header from "./components/Header";
import MobileDrawer from "./components/MobileDrawer";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const navLinks = [
  { name: "Home", icon: <HomeIcon />, href: "#home" },
  { name: "About", icon: <PersonIcon />, href: "#about" },
  { name: "Skills", icon: <CodeIcon />, href: "#skills" },
  { name: "Projects", icon: <WorkIcon />, href: "#projects" },
  { name: "Experience", icon: <WorkIcon />, href: "#experience" },
  { name: "Education", icon: <SchoolIcon />, href: "#education" },
  { name: "Contact", icon: <EmailIcon />, href: "#contact" },
];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:900px)");

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: { main: "#3f51b5" },
      secondary: { main: "#f50057" },
      background: {
        default: darkMode ? "#121212" : "#f5f5f5",
        paper: darkMode ? "#1e1e1e" : "#ffffff",
      },
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      h1: { fontWeight: 700 },
      h2: { fontWeight: 600 },
      h3: { fontWeight: 500 },
    },
  });

  const handleThemeChange = () => setDarkMode(!darkMode);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Header
          darkMode={darkMode}
          handleThemeChange={handleThemeChange}
          handleDrawerToggle={handleDrawerToggle}
          isMobile={isMobile}
          navLinks={navLinks}
        />
        <MobileDrawer mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} navLinks={navLinks} />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Hero darkMode={darkMode} theme={theme} />
          <About theme={theme} />
          <Skills darkMode={darkMode} theme={theme} />
          <Projects theme={theme} />
          <Experience darkMode={darkMode} isMobile={isMobile} theme={theme} />
          <Education theme={theme} />
          <Contact darkMode={darkMode} theme={theme} />
        </Box>
        <Footer theme={theme} navLinks={navLinks} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
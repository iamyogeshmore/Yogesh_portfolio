import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  Box,
  IconButton,
  FormControlLabel,
  Switch,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Brightness4 as DarkModeIcon,
  Brightness7 as LightModeIcon,
} from "@mui/icons-material";

const Header = ({
  darkMode,
  handleThemeChange,
  handleDrawerToggle,
  isMobile,
  navLinks,
}) => (
  <AppBar
    position="sticky"
    elevation={4}
    sx={{
      bgcolor: "background.paper",
      borderBottom: darkMode
        ? "1px solid rgba(255, 255, 255, 0.1)"
        : "1px solid rgba(0, 0, 0, 0.1)",
      backgroundImage: darkMode
        ? "linear-gradient(to right, rgba(33, 33, 33, 0.95), rgba(66, 66, 66, 0.95))"
        : "linear-gradient(to right, rgba(255, 255, 255, 0.95), rgba(245, 245, 245, 0.95))",
      backdropFilter: "blur(8px)",
      transition: "all 0.3s ease-in-out",
      color: darkMode ? "#fff" : "#333",
    }}
  >
    <Container>
      <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
        <Typography
          variant="h5"
          component="div"
          sx={{
            fontWeight: 700,
            letterSpacing: 1.2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            textTransform: "uppercase",
            background: darkMode
              ? "linear-gradient(45deg, #00b4d8, #90e0ef)"
              : "linear-gradient(45deg, #0077b6, #023e8a)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            flexGrow: { xs: 1, md: 0 },
            "&:hover": {
              transform: "scale(1.05)",
              transition: "transform 0.2s ease-in-out",
            },
          }}
        >
          Yogesh More
        </Typography>

        {!isMobile && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexGrow: 1,
              gap: 2,
            }}
          >
            {navLinks.map((link) => (
              <Button
                key={link.name}
                href={link.href}
                sx={{
                  mx: 1,
                  px: 2.5,
                  py: 1,
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  borderRadius: "25px",
                  position: "relative",
                  overflow: "hidden",
                  color: darkMode ? "#e0e0e0" : "#333", // High contrast for both themes
                  "&:hover": {
                    backgroundColor: "primary.main",
                    color: "#fff",
                    transform: "translateY(-2px)",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    width: "100%",
                    height: "2px",
                    bottom: 0,
                    left: 0,
                    backgroundColor: "primary.main",
                    transform: "scaleX(0)",
                    transformOrigin: "bottom right",
                    transition: "transform 0.3s ease-out",
                  },
                  "&:hover::after": {
                    transform: "scaleX(1)",
                    transformOrigin: "bottom left",
                  },
                  transition: "all 0.3s ease-in-out",
                }}
              >
                {link.name}
              </Button>
            ))}
          </Box>
        )}

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <FormControlLabel
            control={
              <Switch
                checked={darkMode}
                onChange={handleThemeChange}
                icon={
                  <LightModeIcon
                    sx={{
                      color: "#f4b301",
                      filter: "drop-shadow(0 0 4px rgba(244, 179, 1, 0.5))",
                    }}
                  />
                }
                checkedIcon={
                  <DarkModeIcon
                    sx={{
                      color: "#90e0ef",
                      filter: "drop-shadow(0 0 4px rgba(144, 224, 239, 0.5))",
                    }}
                  />
                }
                sx={{
                  "& .MuiSwitch-track": {
                    backgroundColor: darkMode ? "#90e0ef" : "#f4b301",
                  },
                  "& .MuiSwitch-thumb": {
                    bgcolor: darkMode ? "#fff" : "#fff", // White thumb for contrast
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                  },
                  transition: "all 0.3s ease-in-out",
                }}
              />
            }
            label=""
          />
          {isMobile && (
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                borderRadius: "12px",
                p: 1,
                color: darkMode ? "#e0e0e0" : "#333", // High contrast for both themes
                "&:hover": {
                  backgroundColor: "primary.main",
                  color: "#fff",
                  transform: "rotate(90deg)",
                },
                transition: "all 0.3s ease-in-out",
              }}
            >
              <MenuIcon sx={{ fontSize: 28 }} />
            </IconButton>
          )}
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
);

export default Header;

import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  LinearProgress,
} from "@mui/material";

// Assuming SVGs are in src/assets/skills/
import reactSvg from "../assets/skills/react-2.svg";
import nodejsSvg from "../assets/skills/nodejs-icon.svg";
import expressSvg from "../assets/skills/express-109.svg";
import mongodbSvg from "../assets/skills/mongodb-icon-2.svg";
import javascriptSvg from "../assets/skills/logo-javascript.svg";
import htmlSvg from "../assets/skills/html-1.svg";
import cssSvg from "../assets/skills/css-3.svg";
import materialUiSvg from "../assets/skills/material-ui-1.svg";
import reduxSvg from "../assets/skills/redux.svg";
import dockerSvg from "../assets/skills/docker-3.svg";

const skills = [
  { name: "React.js", level: 90, image: reactSvg },
  { name: "Node.js", level: 85, image: nodejsSvg },
  { name: "Express", level: 80, image: expressSvg },
  { name: "MongoDB", level: 85, image: mongodbSvg },
  { name: "JavaScript", level: 90, image: javascriptSvg },
  { name: "HTML", level: 90, image: htmlSvg },
  { name: "CSS", level: 90, image: cssSvg },
  { name: "Material UI", level: 80, image: materialUiSvg },
  { name: "Redux", level: 75, image: reduxSvg },
  { name: "Docker", level: 85, image: dockerSvg },
];

const Skills = ({ darkMode, theme }) => (
  <Box
    id="skills"
    sx={{
      py: 12,
      bgcolor: darkMode ? "grey.900" : "grey.100",
      background: darkMode
        ? "linear-gradient(135deg, #1a1a1a 0%, #2c3e50 100%)"
        : "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
      position: "relative",
      overflow: "hidden",
    }}
  >
    <Container maxWidth="lg">
      <Box
        sx={{
          textAlign: "center",
          mb: 10,
          position: "relative",
          zIndex: 1,
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: "bold",
            position: "relative",
            display: "inline-block",
            "&::after": {
              content: '""',
              position: "absolute",
              width: "60px",
              height: "3px",
              bottom: "-10px",
              left: "calc(50% - 30px)",
              backgroundColor: theme.palette.primary.main,
            },
          }}
        >
          Technical Expertise
        </Typography>
        <Typography
          variant="subtitle1"
          color={darkMode ? "grey.400" : "grey.600"}
          sx={{
            mt: 3,
            maxWidth: "700px",
            mx: "auto",
            fontSize: "1.2rem",
            fontWeight: 300,
            lineHeight: 1.6,
          }}
        >
          Explore my mastery in cutting-edge web development technologies and
          tools, crafted through hands-on experience and innovation.
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {skills.map((skill) => (
          <Grid item xs={12} sm={6} md={3} key={skill.name}>
            <Paper
              sx={{
                p: 3,
                borderRadius: "16px",
                background: darkMode
                  ? "rgba(255, 255, 255, 0.05)"
                  : "rgba(255, 255, 255, 0.9)",
                backdropFilter: "blur(10px)",
                border: `1px solid ${
                  darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.05)"
                }`,
                transition: "all 0.4s ease",
                "&:hover": {
                  transform: "translateY(-10px) scale(1.02)",
                  boxShadow: `0 15px 30px ${
                    darkMode ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.2)"
                  }`,
                  background: darkMode
                    ? "rgba(255, 255, 255, 0.1)"
                    : "rgba(255, 255, 255, 1)",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 2.5,
                }}
              >
                <Box
                  sx={{
                    mr: 2.5,
                    p: 2,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 64,
                    height: 64,
                    boxShadow: `0 0 5px black`,
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "rotate(360deg)",
                    },
                  }}
                >
                  <img
                    src={skill.image}
                    alt={`${skill.name} logo`}
                    style={{
                      width: "40px", // Increased from 28px to 40px
                      height: "40px", // Increased from 28px to 40px
                      objectFit: "contain",
                    }}
                  />
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    fontSize: "1.25rem",
                    color: darkMode ? "grey.100" : "grey.900",
                    textTransform: "capitalize",
                  }}
                >
                  {skill.name}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default Skills;

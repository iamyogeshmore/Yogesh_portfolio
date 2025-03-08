import React from "react";
import { Box, Container, Typography, Grid, Card, CardContent, CardActions, Button, Chip } from "@mui/material";
import { GitHub as GitHubIcon } from "@mui/icons-material";

const projects = [
  {
    title: "Book Store Application",
    description: "Developed as part of BridgeLabz internship. Includes navigational structures and search functionality.",
    techStack: ["React.js", "Spring Boot", "Material UI"],
    github: "https://github.com/iamyogeshmore",
    demo: "#",
  },
  {
    title: "Employee Payroll Application",
    description: "Built during BridgeLabz internship. Includes employee management features.",
    techStack: ["React.js", "Spring Boot", "Material UI"],
    github: "https://github.com/iamyogeshmore",
    demo: "#",
  },
  {
    title: "Address Book Application",
    description: "Contact management system with CRUD operations.",
    techStack: ["React.js", "Node.js", "MongoDB"],
    github: "https://github.com/iamyogeshmore",
    demo: "#",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website built with React and Material UI.",
    techStack: ["React.js", "Material UI", "Responsive Design"],
    github: "https://github.com/iamyogeshmore",
    demo: "#",
  },
];

const Projects = ({ theme }) => (
  <Box id="projects" sx={{ py: 10 }}>
    <Container>
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Typography
          variant="h3"
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
          Projects
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                borderRadius: "10px",
                transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                "&:hover": { transform: "translateY(-10px)", boxShadow: "0 10px 30px rgba(0,0,0,0.15)" },
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  height: 140,
                  backgroundColor: `${theme.palette.primary.main}${index % 2 === 0 ? "" : "99"}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography variant="h5" sx={{ color: "#fff", fontWeight: "bold" }}>
                  {project.title}
                </Typography>
              </Box>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="body1" paragraph>
                  {project.description}
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}>
                  {project.techStack.map((tech, i) => (
                    <Chip
                      key={i}
                      label={tech}
                      size="small"
                      sx={{
                        backgroundColor: theme.palette.primary.main,
                        color: "#fff",
                        "&:hover": { backgroundColor: theme.palette.primary.dark },
                      }}
                    />
                  ))}
                </Box>
              </CardContent>
              <CardActions sx={{ p: 2 }}>
                <Button
                  size="small"
                  variant="outlined"
                  startIcon={<GitHubIcon />}
                  onClick={() => window.open(project.github, "_blank")}
                >
                  Code
                </Button>
                <Button size="small" variant="contained" onClick={() => window.open(project.demo, "_blank")}>
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default Projects;
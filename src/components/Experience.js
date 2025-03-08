import React from "react";
import { Box, Container, Typography, Paper } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { Work as WorkIcon } from "@mui/icons-material";

const workExperience = [
  {
    role: "MERN Stack Developer",
    company: "EnergiSpeak Analytics",
    period: "Aug 2024 - Present",
    description: (
      <ul style={{ paddingLeft: "20px", margin: 0 }}>
        <li>
          Design and develop user-friendly dashboards using React.js and MUI.
        </li>
        <li>
          Build and optimize scalable web applications with the MERN stack.
        </li>
        <li>
          Create interactive charts and real-time analytics using React Chart.js
          2.
        </li>

        <li>Manage and optimize MongoDB databases for performance.</li>
        <li>Integrate Redux for state management and data flow.</li>
        <li>
          Develop RESTful APIs for efficient front-end and back-end
          communication.
        </li>
      </ul>
    ),
  },
  {
    role: "Junior Software Developer",
    company: "Acumen Cognitive Engineering",
    period: "Oct 2023 - Aug 2024",
    description: (
      <ul style={{ paddingLeft: "20px", margin: 0 }}>
        <li>Developed software solutions based on client requirements.</li>
        <li>
          Built and optimized web applications using React.js, Node.js, and
          Express.js.
        </li>
        <li>Worked with PostgreSQL to optimize database performance.</li>
        <li>
          Collaborated with cross-functional teams to enhance application
          functionality.
        </li>
        <li>
          Contributed to feature enhancements and ensured high-quality code
          delivery.
        </li>
      </ul>
    ),
  },
  {
    role: "Intern",
    company: "BridgeLabz Solutions",
    period: "6 Months",
    description: (
      <ul style={{ paddingLeft: "20px", margin: 0 }}>
        <li>
          Developed and deployed Employee Payroll and Address Book applications.
        </li>
        <li>
          Built backend APIs using Spring Boot for efficient data management.
        </li>
        <li>
          Designed responsive front-end interfaces with React.js and
          Material-UI.
        </li>
        <li>Focused on creating intuitive and user-friendly UIs.</li>
        <li>
          Improved application performance and followed best coding practices.
        </li>
      </ul>
    ),
  },
];

const Experience = ({ darkMode, isMobile, theme }) => (
  <Box
    id="experience"
    sx={{
      py: 10,
      bgcolor: darkMode ? "background.default" : "background.default",
    }}
  >
    <Container maxWidth="lg">
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
          Work Experience
        </Typography>
      </Box>
      <Timeline
        position={isMobile ? "right" : "alternate"}
        sx={{
          "& .MuiTimelineItem-root:before": {
            display: isMobile ? "none" : "block", // Remove default padding on mobile
          },
          m: 0,
          p: 0,
        }}
      >
        {workExperience.map((job, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator
              sx={{
                width: isMobile ? "10%" : "auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <TimelineDot
                color="primary"
                variant="outlined"
                sx={{
                  width: isMobile ? 36 : 48,
                  height: isMobile ? 36 : 48,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  m: 0,
                }}
              >
                <WorkIcon sx={{ fontSize: isMobile ? 20 : 28 }} />
              </TimelineDot>
              {index < workExperience.length - 1 && (
                <TimelineConnector
                  sx={{
                    bgcolor: theme.palette.primary.main,
                    width: "2px",
                    flexGrow: 1,
                  }}
                />
              )}
            </TimelineSeparator>
            <TimelineContent
              sx={{
                width: isMobile ? "90%" : "auto",
                py: isMobile ? 1 : 2,
                px: isMobile ? 2 : 3,
                textAlign: "left", // Ensure content is left-aligned
              }}
            >
              <Paper
                elevation={2}
                sx={{
                  p: isMobile ? 2 : 3,
                  borderRadius: "10px",
                  width: "100%",
                  textAlign: "left", // Explicitly left-align text inside Paper
                  transition:
                    "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                  },
                }}
              >
                <Typography
                  variant={isMobile ? "h6" : "h5"}
                  component="h3"
                  sx={{
                    color: theme.palette.primary.main,
                    fontWeight: "medium",
                  }}
                >
                  {job.role}
                </Typography>
                <Typography
                  variant={isMobile ? "body1" : "h6"}
                  color="text.secondary"
                  sx={{ mb: 1 }}
                >
                  {job.company}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {job.period}
                </Typography>
                <Typography variant="body1" component="div">
                  {job.description}
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Container>
  </Box>
);

export default Experience;

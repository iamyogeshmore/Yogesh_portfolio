import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemText,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Tooltip,
} from "@mui/material";
import {
  ArrowRightAlt as ArrowIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Code as CodeIcon,
  Close as CloseIcon,
} from "@mui/icons-material";

const certifications = [
  {
    name: "Bridegelabz Fellowship Program",
    link: "https://drive.google.com/file/d/1bwKYsl_btzU_WMjXO4tpvkEDpCr2aRfz/view",
    tooltip: "Click to view certificate",
  },
  {
    name: "Frontend Developer (React) - HackerRank",
    link: "https://www.hackerrank.com/certificates/14361747220c",
    tooltip: "Click to view certificate",
  },
  {
    name: "JavaScript Algorithms and Data Structures (Beta) - freeCodeCamp",
    link: "https://www.freecodecamp.org/certification/IamYogeshMore/javascript-algorithms-and-data-structures-v8",
    tooltip: "Click to view certificate",
  },
  {
    name: "JavaScript (Intermediate) - HackerRank",
    link: "https://www.hackerrank.com/certificates/634cdb4a8563",
    tooltip: "Click to view certificate",
  },
  {
    name: "MERN Stack - Great Learning",
    link: "https://drive.google.com/file/d/1bmHNc1_C3cfPJC-ZFSihrgL5rknzOfy3/view?usp=drive_link",
    tooltip: "Click to view certificate",
  },
  {
    name: "MERN full-stack web development course - 30DaysCoding",
    link: "https://courses.30dayscoding.com/verify-certificate?serialno=OD95MFGP",
    tooltip: "Click to view certificate",
  },
];

const codingProfiles = [
  {
    name: "GitHub",
    icon: <GitHubIcon />,
    link: "https://github.com/iamyogeshmore",
    tooltip: "Click to view GitHub profile",
  },
  {
    name: "LeetCode",
    icon: <CodeIcon />,
    link: "https://leetcode.com/u/iamyogeshmore/",
    tooltip: "Click to view LeetCode profile",
  },
  {
    name: "HackerRank",
    icon: <CodeIcon />,
    link: "https://www.hackerrank.com/profile/iyogesh_more",
    tooltip: "Click to view HackerRank profile",
  },
  {
    name: "LinkedIn",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/yogesh-more-28b663266/",
    tooltip: "Click to view LinkedIn profile",
  },
];

// Highlight style for important words
const highlightStyle = (theme) => ({
  fontWeight: "bold",
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.action.hover,
  padding: "0.2em 0.4em",
  borderRadius: "4px",
});

const About = ({ theme }) => {
  const [open, setOpen] = useState(false); // Control popup visibility
  const [selectedCert, setSelectedCert] = useState(null); // Store selected certificate

  const handleOpen = (cert) => {
    setSelectedCert(cert);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedCert(null);
  };

  const handleViewCertificate = () => {
    if (selectedCert) {
      window.open(selectedCert.link, "_blank");
      handleClose(); // Optionally close the popup after opening the link
    }
  };

  return (
    <Box id="about" sx={{ py: 10 }}>
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
            About Me
          </Typography>
        </Box>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Paper
              elevation={2}
              sx={{
                p: 3,
                height: "100%",
                borderRadius: "10px",
                transition:
                  "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                },
              }}
            >
              <Typography
                variant="h5"
                gutterBottom
                sx={{ fontWeight: "medium", color: theme.palette.primary.main }}
              >
                Profile
              </Typography>
              <Typography paragraph>
                Experienced Developer well-versed in the{" "}
                <Typography component="span" sx={highlightStyle(theme)}>
                  MERN stack
                </Typography>{" "}
                and traditional technologies. Expertise in crafting responsive
                UIs, proficient in managing state with{" "}
                <Typography component="span" sx={highlightStyle(theme)}>
                  Redux
                </Typography>
                , and adept at developing{" "}
                <Typography component="span" sx={highlightStyle(theme)}>
                  RESTful APIs
                </Typography>
                . Demonstrated ability in enhancing application features,
                prioritizing security, and fostering collaborative teamwork to
                deliver impactful solutions.
              </Typography>
              <Typography paragraph>
                Currently working as a MERN Stack Developer at{" "}
                <Typography component="span" sx={highlightStyle(theme)}>
                  EnergiSpeak Analytics
                </Typography>
                , with previous experience at{" "}
                <Typography component="span" sx={highlightStyle(theme)}>
                  Acumen Cognitive Engineering
                </Typography>{" "}
                as a Junior Software Developer.
              </Typography>
              <Typography paragraph>
                Based in Navi Mumbai, India, I enjoy challenging myself with new
                technologies and continuously improve my skills.
              </Typography>
              <Box sx={{ mt: 3 }}>
                <Grid>
                  <Grid>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2, // Adds spacing between each item
                        p: 2, // Adds padding inside the box
                        bgcolor: theme.palette.background.default, // Subtle background
                        borderRadius: "8px", // Rounded corners
                        boxShadow: "0 2px 8px rgba(0,0,0,0.05)", // Light shadow for depth
                      }}
                    >
                      {" "}
                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{
                          fontWeight: "medium",
                          color: theme.palette.primary.main,
                        }}
                      >
                        Personal Information
                      </Typography>
                      <Typography variant="body1">
                        <Typography
                          component="span"
                          sx={{ fontWeight: "bold", mr: 1 }}
                        >
                          Location:
                        </Typography>
                        Navi Mumbai, India
                      </Typography>
                      <Typography variant="body1">
                        <Typography
                          component="span"
                          sx={{ fontWeight: "bold", mr: 1 }}
                        >
                          Experience:
                        </Typography>
                        2 Years
                      </Typography>
                      <Typography>
                        <Typography
                          component="span"
                          sx={{ fontWeight: "bold", mr: 1 }}
                        >
                          Hobbies:
                        </Typography>
                        Playing video games, Trekking, Traveling, Photography,
                        Listening to music.
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={2}
              sx={{
                p: 3,
                height: "100%",
                borderRadius: "10px",
                transition:
                  "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                },
              }}
            >
              <Typography
                variant="h5"
                gutterBottom
                sx={{ fontWeight: "medium", color: theme.palette.primary.main }}
              >
                Certifications
              </Typography>
              <List>
                {certifications.map((cert, index) => (
                  <Tooltip
                    key={index}
                    title={cert.tooltip}
                    arrow
                    placement="top"
                    enterDelay={300}
                  >
                    <ListItem
                      sx={{
                        py: 1,
                        cursor: "pointer",
                        "&:hover": {
                          "& .MuiListItemText-primary": {
                            color: theme.palette.primary.main,
                            textDecoration: "underline",
                            textDecorationColor: theme.palette.primary.main,
                            textDecorationThickness: "2px",
                            transition:
                              "color 0.3s ease-in-out, text-decoration 0.3s ease-in-out",
                          },
                        },
                      }}
                      onClick={() => handleOpen(cert)}
                    >
                      <ArrowIcon color="primary" sx={{ mr: 1 }} />
                      <ListItemText primary={cert.name} />
                    </ListItem>
                  </Tooltip>
                ))}
              </List>
              <Divider sx={{ my: 3 }} />
              <Typography
                variant="h5"
                gutterBottom
                sx={{ fontWeight: "medium", color: theme.palette.primary.main }}
              >
                Coding Profiles
              </Typography>
              <Grid container spacing={2} sx={{ mt: 2 }}>
                {codingProfiles.map((profile, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Tooltip
                      title={profile.tooltip}
                      arrow
                      placement="top"
                      enterDelay={300}
                    >
                      <Button
                        fullWidth
                        variant="outlined"
                        startIcon={profile.icon}
                        onClick={() => window.open(profile.link, "_blank")}
                        sx={{
                          p: 1.5,
                          justifyContent: "flex-start",
                          textTransform: "none",
                          fontWeight: "medium",
                          "&:hover": {
                            backgroundColor: theme.palette.primary.main,
                            color: "#fff",
                            transform: "translateY(-2px)",
                            transition:
                              "background-color 0.3s ease-in-out, transform 0.3s ease-in-out",
                          },
                        }}
                      >
                        {profile.name}
                      </Button>
                    </Tooltip>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        </Grid>

        {/* Popup for Certificates */}
        <Dialog
          open={open}
          onClose={handleClose}
          maxWidth="sm"
          fullWidth
          sx={{ "& .MuiDialog-paper": { borderRadius: "10px" } }}
        >
          <DialogTitle
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {selectedCert?.name || "Certificate"}
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent sx={{ p: 2, textAlign: "center" }}>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Click below to view the certificate in a new tab:
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handleViewCertificate}
              sx={{ px: 4, py: 1.5 }}
            >
              View Certificate
            </Button>
          </DialogContent>
        </Dialog>
      </Container>
    </Box>
  );
};

export default About;

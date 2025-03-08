import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Avatar,
  Button,
  IconButton,
  Modal,
} from "@mui/material";
// Import SVG files
import GitHubIcon from "../assets/skills/github-icon-1.svg";
import LinkedInIcon from "../assets/skills/linkedin-icon.svg";
import LeetCodeIcon from "../assets/skills/leetcode-1.svg";
import HackerRankIcon from "../assets/skills/hackerrank-4.svg";
// Import profile photo and resume PDF
import ProfilePhoto from "../assets/profile.jpg";
import ResumePDF from "../assets/Yogesh_More_Resume.pdf";

const jobTitles = [
  "MERN Stack Developer",
  "Full Stack Developer",
  "Software Engineer",
  "Web Developer",
  "Frontend Developer",
  "React.js Specialist",
];

const Hero = ({ darkMode, theme }) => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false); // State for modal

  // Cycle through job titles every 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % jobTitles.length);
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval
  }, []);

  // Handle opening and closing the modal
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  // Handle resume download
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = ResumePDF;
    link.download = "Yogesh_More_Resume.pdf"; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box
      id="home"
      sx={{
        bgcolor: "background.paper",
        pt: 12,
        pb: 8,
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        backgroundImage: `linear-gradient(${
          darkMode ? "120deg, #2c3e50, #000000" : "120deg, #e0eafc, #cfdef3"
        })`,
      }}
    >
      <Container maxWidth="md">
        <Avatar
          alt="Yogesh More"
          src={ProfilePhoto}
          onClick={handleOpenModal} // Open modal on click
          sx={{
            width: 150,
            height: 150,
            margin: "0 auto",
            mb: 3,
            border: `4px solid ${theme.palette.primary.main}`,
            backgroundColor: theme.palette.primary.main,
            boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
            transition: "transform 0.3s ease-in-out",
            cursor: "pointer", // Indicate clickable
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          <Typography variant="h3">YM</Typography>
        </Avatar>

        {/* Modal for full-size image */}
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="profile-modal-title"
          aria-describedby="profile-modal-description"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src={ProfilePhoto}
            alt="Yogesh More Full Size"
            sx={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              objectFit: "contain",
              borderRadius: "8px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
            }}
          />
        </Modal>

        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: "bold",
            mb: 2,
            background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "1px",
          }}
        >
          Yogesh More
        </Typography>
        <Typography
          variant="h4"
          component="div"
          gutterBottom
          sx={{
            mb: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
            fontWeight: 500,
          }}
        >
          <span>I am a</span>
          <Box
            component="span"
            sx={{
              minWidth: "250px",
              color: theme.palette.primary.main,
              animation: "colorChange 3s infinite ease-in-out",
              "@keyframes colorChange": {
                "0%": { color: theme.palette.primary.main },
                "50%": { color: theme.palette.secondary.main },
                "100%": { color: theme.palette.primary.main },
              },
              transition: "opacity 0.3s ease-in-out",
              opacity: 1,
            }}
          >
            {jobTitles[currentTitleIndex]}
          </Box>
        </Typography>
        <Typography
          variant="h6"
          component="div"
          sx={{
            maxWidth: "600px",
            mx: "auto",
            color: darkMode ? "grey.300" : "grey.700",
            lineHeight: 1.6,
          }}
        >
          Experienced Developer well-versed in the MERN stack and traditional
          technologies. Expertise in crafting responsive UIs, proficient in
          managing state with Redux, and adept at developing RESTful APIs.
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Button
            variant="contained"
            size="large"
            sx={{
              mr: 2,
              px: 4,
              py: 1.5,
              mt: 1.5,

              borderRadius: "30px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
              "&:hover": {
                transform: "translateY(-3px)",
                boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
              },
              transition: "all 0.3s ease-in-out",
              backgroundColor: theme.palette.primary.main,
              color: "#fff",
            }}
            href="#contact"
          >
            Hire Me
          </Button>
          <Button
            variant="outlined"
            size="large"
            sx={{
              px: 4,
              py: 1.5,
              mt: 1.5,
              borderRadius: "30px",
              borderColor: theme.palette.primary.main,
              color: theme.palette.primary.main,
              "&:hover": {
                transform: "translateY(-3px)",
                boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
                borderColor: theme.palette.primary.dark,
              },
              transition: "all 0.3s ease-in-out",
            }}
            onClick={handleDownloadResume} // Trigger download
          >
            Download Resume
          </Button>
        </Box>
        <Box sx={{ mt: 6, display: "flex", justifyContent: "center", gap: 2 }}>
          <IconButton
            aria-label="github"
            onClick={() =>
              window.open("https://github.com/iamyogeshmore", "_blank")
            }
            sx={{
              backgroundColor: darkMode
                ? "rgba(255,255,255,0.1)"
                : "rgba(0,0,0,0.1)",
              "&:hover": {
                backgroundColor: theme.palette.primary.main,
                color: "#fff",
                transform: "scale(1.1)",
              },
              transition: "all 0.3s ease-in-out",
            }}
          >
            <img
              src={GitHubIcon}
              alt="GitHub"
              style={{ width: 24, height: 24 }}
            />
          </IconButton>
          <IconButton
            aria-label="linkedin"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/yogesh-more-28b663266/",
                "_blank"
              )
            }
            sx={{
              backgroundColor: darkMode
                ? "rgba(255,255,255,0.1)"
                : "rgba(0,0,0,0.1)",
              "&:hover": {
                backgroundColor: theme.palette.primary.main,
                color: "#fff",
                transform: "scale(1.1)",
              },
              transition: "all 0.3s ease-in-out",
            }}
          >
            <img
              src={LinkedInIcon}
              alt="LinkedIn"
              style={{ width: 24, height: 24 }}
            />
          </IconButton>
          <IconButton
            aria-label="leetcode"
            onClick={() =>
              window.open("https://leetcode.com/u/iamyogeshmore/", "_blank")
            }
            sx={{
              backgroundColor: darkMode
                ? "rgba(255,255,255,0.1)"
                : "rgba(0,0,0,0.1)",
              "&:hover": {
                backgroundColor: theme.palette.primary.main,
                color: "#fff",
                transform: "scale(1.1)",
              },
              transition: "all 0.3s ease-in-out",
            }}
          >
            <img
              src={LeetCodeIcon}
              alt="LeetCode"
              style={{ width: 24, height: 24 }}
            />
          </IconButton>
          <IconButton
            aria-label="hackerrank"
            onClick={() =>
              window.open(
                "https://www.hackerrank.com/profile/iyogesh_more",
                "_blank"
              )
            }
            sx={{
              backgroundColor: darkMode
                ? "rgba(255,255,255,0.1)"
                : "rgba(0,0,0,0.1)",
              "&:hover": {
                backgroundColor: theme.palette.primary.main,
                color: "#fff",
                transform: "scale(1.1)",
              },
              transition: "all 0.3s ease-in-out",
            }}
          >
            <img
              src={HackerRankIcon}
              alt="HackerRank"
              style={{ width: 24, height: 24 }}
            />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;

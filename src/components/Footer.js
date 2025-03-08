import React from "react";
import { Box, Container, Typography, Grid, Button, IconButton } from "@mui/material";
import { GitHub as GitHubIcon, LinkedIn as LinkedInIcon, Code as CodeIcon } from "@mui/icons-material";

const Footer = ({ theme, navLinks }) => (
  <Box
    component="footer"
    sx={{
      py: 4,
      bgcolor: theme.palette.mode === "dark" ? "rgba(0, 0, 0, 0.3)" : "rgba(0, 0, 0, 0.05)",
      borderTop: `1px solid ${theme.palette.divider}`,
    }}
  >
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4} sx={{ mb: { xs: 3, md: 0 } }}>
          <Typography variant="h6" component="div" sx={{ fontWeight: "bold", mb: 2 }}>
            Yogesh More
          </Typography>
          <Typography variant="body2" color="text.secondary">
            MERN Stack Developer based in Navi Mumbai, India, specializing in building exceptional digital experiences.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" component="div" sx={{ fontWeight: "bold", mb: 2 }}>
            Quick Links
          </Typography>
          <Grid container spacing={1}>
            {navLinks.map((link) => (
              <Grid item xs={6} key={link.name}>
                <Button
                  href={link.href}
                  color="inherit"
                  sx={{ justifyContent: "flex-start", px: 0, "&:hover": { color: theme.palette.primary.main } }}
                >
                  {link.name}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" component="div" sx={{ fontWeight: "bold", mb: 2 }}>
            Connect
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <IconButton
              aria-label="github"
              onClick={() => window.open("https://github.com/iamyogeshmore", "_blank")}
              size="small"
              sx={{ "&:hover": { backgroundColor: theme.palette.primary.main, color: "#fff" } }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              aria-label="linkedin"
              onClick={() => window.open("https://www.linkedin.com/in/yogesh-more-28b663266/", "_blank")}
              size="small"
              sx={{ "&:hover": { backgroundColor: theme.palette.primary.main, color: "#fff" } }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              aria-label="leetcode"
              onClick={() => window.open("https://leetcode.com/u/iamyogeshmore/", "_blank")}
              size="small"
              sx={{ "&:hover": { backgroundColor: theme.palette.primary.main, color: "#fff" } }}
            >
              <CodeIcon />
            </IconButton>
            <IconButton
              aria-label="hackerrank"
              onClick={() => window.open("https://www.hackerrank.com/profile/iyogesh_more", "_blank")}
              size="small"
              sx={{ "&:hover": { backgroundColor: theme.palette.primary.main, color: "#fff" } }}
            >
              <CodeIcon />
            </IconButton>
          </Box>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            Email: iyogesh.more1998@gmail.com
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Phone: (+91) 8850055197
          </Typography>
        </Grid>
      </Grid>
      <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 4 }}>
        © {new Date().getFullYear()} Yogesh More. All rights reserved.
      </Typography>
    </Container>
  </Box>
);

export default Footer;
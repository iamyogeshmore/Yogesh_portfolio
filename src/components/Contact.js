import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LinkedIn as LinkedInIcon,
  WhatsApp as WhatsAppIcon,
} from "@mui/icons-material";
import emailjs from "@emailjs/browser";

const Contact = ({ darkMode, theme }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success", // "success" or "error"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_wnrfc4o";
    const templateID = "template_a21iicl";
    const publicKey = "RNjVqcHYnD-TN9QS0";

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: "iyogesh.more1998@gmail.com",
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setSnackbar({
          open: true,
          message: "Email sent successfully!",
          severity: "success",
        });
        setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
      })
      .catch((error) => {
        console.log("FAILED...", error);
        setSnackbar({
          open: true,
          message: "Failed to send email. Please try again.",
          severity: "error",
        });
      });
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <Box
      id="contact"
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
        <Box sx={{ textAlign: "center", mb: 10 }}>
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
            Contact Me
          </Typography>
        </Box>
        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <Paper
              elevation={6}
              sx={{
                p: 4,
                height: "100%",
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
                  transform: "translateY(-10px)",
                  boxShadow: `0 15px 30px ${
                    darkMode ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.2)"
                  }`,
                  background: darkMode
                    ? "rgba(255, 255, 255, 0.1)"
                    : "rgba(255, 255, 255, 1)",
                },
              }}
            >
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  color: theme.palette.primary.main,
                  fontWeight: 700,
                  fontSize: "1.75rem",
                  mb: 3,
                }}
              >
                Get In Touch
              </Typography>
              <Typography
                paragraph
                sx={{
                  color: darkMode ? "grey.300" : "grey.700",
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                  mb: 4,
                }}
              >
                Feel free to reach out for project inquiries, job opportunities,
                or just to connect!
              </Typography>
              <List>
                <ListItem sx={{ px: 0, py: 1.5 }}>
                  <ListItemIcon>
                    <WhatsAppIcon
                      color="primary"
                      sx={{ fontSize: "1.75rem" }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="WhatsApp & Telephone"
                    secondary="(+91) 8850055197"
                    primaryTypographyProps={{
                      fontWeight: 600,
                      fontSize: "1.1rem",
                      color: darkMode ? "grey.100" : "grey.900",
                    }}
                    secondaryTypographyProps={{
                      component: "a",
                      href: "https://wa.me/+918850055197",
                      target: "_blank",
                      color: darkMode ? "grey.400" : "grey.600",
                      fontSize: "1rem",
                      sx: {
                        textDecoration: "none",
                        "&:hover": {
                          textDecoration: "underline",
                          color: theme.palette.primary.main,
                        },
                        transition: "color 0.3s ease",
                      },
                    }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0, py: 1.5 }}>
                  <ListItemIcon>
                    <EmailIcon color="primary" sx={{ fontSize: "1.75rem" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Email"
                    secondary="iyogesh.more1998@gmail.com"
                    primaryTypographyProps={{
                      fontWeight: 600,
                      fontSize: "1.1rem",
                      color: darkMode ? "grey.100" : "grey.900",
                    }}
                    secondaryTypographyProps={{
                      component: "a",
                      href: "mailto:iyogesh.more1998@gmail.com",
                      color: darkMode ? "grey.400" : "grey.600",
                      fontSize: "1rem",
                      sx: {
                        textDecoration: "none",
                        "&:hover": {
                          textDecoration: "underline",
                          color: theme.palette.primary.main,
                        },
                        transition: "color 0.3s ease",
                      },
                    }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0, py: 1.5 }}>
                  <ListItemIcon>
                    <LinkedInIcon
                      color="primary"
                      sx={{ fontSize: "1.75rem" }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="LinkedIn"
                    secondary="yogesh-more-28b663266"
                    primaryTypographyProps={{
                      fontWeight: 600,
                      fontSize: "1.1rem",
                      color: darkMode ? "grey.100" : "grey.900",
                    }}
                    secondaryTypographyProps={{
                      component: "a",
                      href: "https://www.linkedin.com/in/yogesh-more-28b663266/",
                      target: "_blank",
                      color: darkMode ? "grey.400" : "grey.600",
                      fontSize: "1rem",
                      sx: {
                        textDecoration: "none",
                        "&:hover": {
                          textDecoration: "underline",
                          color: theme.palette.primary.main,
                        },
                        transition: "color 0.3s ease",
                      },
                    }}
                  />
                </ListItem>
              </List>
            </Paper>
          </Grid>
          <Grid item xs={12} md={7}>
            <Paper
              elevation={6}
              sx={{
                p: 4,
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
                  transform: "translateY(-10px)",
                  boxShadow: `0 15px 30px ${
                    darkMode ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.2)"
                  }`,
                  background: darkMode
                    ? "rgba(255, 255, 255, 0.1)"
                    : "rgba(255, 255, 255, 1)",
                },
              }}
            >
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  color: theme.palette.primary.main,
                  fontWeight: 700,
                  fontSize: "1.75rem",
                  mb: 3,
                }}
              >
                Send Me a Message
              </Typography>
              <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      variant="outlined"
                      required
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "8px",
                          "&:hover fieldset": {
                            borderColor: theme.palette.primary.main,
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: theme.palette.primary.main,
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      variant="outlined"
                      required
                      type="email"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "8px",
                          "&:hover fieldset": {
                            borderColor: theme.palette.primary.main,
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: theme.palette.primary.main,
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "8px",
                          "&:hover fieldset": {
                            borderColor: theme.palette.primary.main,
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: theme.palette.primary.main,
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      placeholder="Leave a message or share your contact details. I'll get back to you soon! 🚀"
                      value={formData.message}
                      onChange={handleChange}
                      variant="outlined"
                      required
                      multiline
                      rows={4}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "8px",
                          "&:hover fieldset": {
                            borderColor: theme.palette.primary.main,
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: theme.palette.primary.main,
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      sx={{
                        py: 1.5,
                        textTransform: "none",
                        borderRadius: "8px",
                        boxShadow: `0 4px 15px ${theme.palette.primary.main}80`,
                        "&:hover": {
                          boxShadow: `0 6px 20px ${theme.palette.primary.main}99`,
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Snackbar for Email Status */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        sx={{ mt: 8 }} // Adjust margin-top to position below header
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%", borderRadius: "8px" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;

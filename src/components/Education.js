import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import { School as SchoolIcon } from "@mui/icons-material";

const education = [
  {
    degree: "BSc IT",
    institution: "Arunodaya University",
    year: "2024",
  },
  {
    degree: "Diploma",
    institution: "Bharati Vidyapeeth Institute Of Technology (Polytechnic)",
    year: "2020",
  },
];

const Education = ({ theme }) => (
  <Box id="education" sx={{ py: 10 }}>
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
          Education
        </Typography>
      </Box>
      <Grid container spacing={4} justifyContent="center">
        {education.map((edu, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: "100%",
                borderRadius: "10px",
                transition:
                  "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                  backgroundColor: theme.palette.primary.main,
                  "& .MuiTypography-root": { color: "#fff" },
                  "& .MuiAvatar-root": {
                    backgroundColor: "#fff",
                    color: theme.palette.primary.main,
                  },
                },
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  p: 4,
                }}
              >
                <Avatar
                  sx={{
                    width: 80,
                    height: 80,
                    mb: 2,
                    backgroundColor: theme.palette.primary.main,
                    transition: "all 0.3s ease-in-out",
                  }}
                >
                  <SchoolIcon fontSize="large" />
                </Avatar>
                <Typography
                  variant="h5"
                  component="div"
                  gutterBottom
                  sx={{ fontWeight: "medium" }}
                >
                  {edu.degree}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {edu.institution}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Year: {edu.year}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default Education;

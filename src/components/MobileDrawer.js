import React from "react";
import { Drawer, Box, Typography, IconButton, Divider, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";

const MobileDrawer = ({ mobileOpen, handleDrawerToggle, navLinks }) => (
  <Drawer
    variant="temporary"
    open={mobileOpen}
    onClose={handleDrawerToggle}
    ModalProps={{ keepMounted: true }}
    sx={{ display: { xs: "block", md: "none" }, "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 } }}
  >
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Yogesh More
        </Typography>
        <IconButton>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <List>
        {navLinks.map((item) => (
          <ListItem button key={item.name} component="a" href={item.href}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  </Drawer>
);

export default MobileDrawer;
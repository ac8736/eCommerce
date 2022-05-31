import "./Navigation.css";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import { MenuItem } from "@mui/material";
import { useState } from "react";

export default function Navigation() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  function openMenu(event) {
    setAnchorEl(event.currentTarget);
  }
  function handleMenuClose() {
    setAnchorEl(null);
  }
  return (
    <AppBar sx={{ boxShadow: "none", backgroundColor: "white" }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ display: { xs: "none", md: "flex" }, borderBottom: "1px solid black" }}>
          <Box sx={{ display: "flex", width: "100%", gap: "10px", alignItems: "center" }}>
            <Typography variant="h5" sx={{ marginRight: "20px", color: "black" }}>
              Tech Heaven
            </Typography>
            <Typography variant="p" sx={{ fontFamily: "Arial", color: "#4f5154" }}>
              Home
            </Typography>
            <Typography variant="p" sx={{ fontFamily: "Arial", color: "#4f5154" }}>
              Products
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton>
              <ShoppingCart width={"45"} height={"25"} />
            </IconButton>
          </Box>
        </Toolbar>
        <Toolbar
          sx={{
            display: { xs: "flex", md: "none" },
            alignItems: "center",
            borderBottom: "1px solid black",
            marginTop: "15px",
          }}
        >
          <Typography variant="h6">Tech Heaven</Typography>
          <Box sx={{ width: "65%", display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "15px" }}>
            <IconButton>
              <ShoppingCart width={"45"} height={"20"} />
            </IconButton>
            <IconButton onClick={openMenu}>
              <MenuIcon />
            </IconButton>
            <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
              <MenuItem sx={{ color: "#4f5154" }}>Home</MenuItem>
              <MenuItem sx={{ color: "#4f5154" }}>Products</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

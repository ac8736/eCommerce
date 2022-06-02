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
import { Link } from "react-router-dom";
import { MenuItem, Avatar } from "@mui/material";
import { useState } from "react";

export default function Navigation() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [profileAnchor, setProfileAnchor] = useState(null);
  const open = Boolean(anchorEl);
  const profileOpen = Boolean(profileAnchor);

  function handleOpenUserMenu(event) {
    setProfileAnchor(event.currentTarget);
  }
  function handleProfileClose() {
    setProfileAnchor(null);
  }

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
              <Link to="/" style={{ textDecoration: "none" }}>
                Home
              </Link>
            </Typography>
            <Typography variant="p" sx={{ fontFamily: "Arial", color: "#4f5154" }}>
              <Link to="/products" style={{ textDecoration: "none" }}>
                Products
              </Link>
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="current user" sx={{ width: 24, height: 24 }} />
            </IconButton>
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
          <Typography variant="h6" color="black">
            Tech Heaven
          </Typography>
          <Box sx={{ width: "65%", display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="current user" sx={{ width: 24, height: 24 }} />
            </IconButton>
            <IconButton>
              <ShoppingCart width={"45"} height={"20"} />
            </IconButton>
            <IconButton onClick={openMenu}>
              <MenuIcon />
            </IconButton>

            <Menu anchorEl={profileAnchor} open={profileOpen} onClose={handleProfileClose}>
              <MenuItem sx={{ color: "#4f5154" }}>
                <Link to="/" style={{ textDecoration: "none" }}>
                  Profile
                </Link>
              </MenuItem>
              <MenuItem sx={{ color: "#4f5154" }}>
                <Link to="/products" style={{ textDecoration: "none" }}>
                  Logout
                </Link>
              </MenuItem>
            </Menu>

            <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
              <MenuItem sx={{ color: "#4f5154" }}>
                <Link to="/" style={{ textDecoration: "none" }}>
                  Home
                </Link>
              </MenuItem>
              <MenuItem sx={{ color: "#4f5154" }}>
                <Link to="/products" style={{ textDecoration: "none" }}>
                  Products
                </Link>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

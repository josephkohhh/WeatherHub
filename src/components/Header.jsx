/**
 * File: Header.jsx
 * Author: Joseph Koh
 * Description: This component represents the header of the WeatherHub application.
 * It includes a nav bar with a logo/title, nav links and menu icon for small screens.
 * The component uses Material-UI components for styling and responsiveness.
 */

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Stack,
  Menu,
  MenuItem,
} from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Styles for links
const linkStyle = {
  textDecoration: "none",
  color: "inherit",
};

// Header component
export const Header = () => {
  const navLinks = ["Code", "Home", "About"]; // Navbar/menu links

  const [anchorEl, setAnchorEl] = useState(null); // State to manage the menu anchor element
  const handleToggleMenu = (event) => setAnchorEl(event.currentTarget); // Function to handle opening the menu
  const handleCloseMenu = () => setAnchorEl(null); // Function to handle closing the menu

  // useEffect to close the menu when resizing the window on component mount
  useEffect(() => {
    const handleResize = () => handleCloseMenu();
    window.addEventListener("resize", handleResize); // Event listener for window resize
    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup: remove event listener on component unmount
    };
  }, []);
  return (
    <>
      {/* Navigation bar */}
      <AppBar position="static" elevation={0} sx={{ bgcolor: "#325ea8" }}>
        <Toolbar>
          <Stack
            direction={"row"}
            sx={{
              alignItems: "center",
            }}
          >
            {/* Logo */}
            <IconButton disableRipple sx={{ cursor: "none" }}>
              <LightModeIcon
                sx={{
                  color: "#ff7621",
                  fontSize: { xs: "2rem", md: "2.5rem" },
                }}
              />
            </IconButton>
            {/* Title */}
            <Typography sx={{ fontSize: { xs: "1.6rem", md: "2.1rem" } }}>
              WeatherHub
            </Typography>
          </Stack>

          {/* Menu for smaller screens */}
          <Stack
            direction={"row"}
            spacing={2}
            sx={{
              flexGrow: 1,
              display: { xs: "flex", sm: "none", md: "none" },
              justifyContent: "flex-end",
            }}
          >
            <IconButton onClick={handleToggleMenu}>
              <MenuIcon fontSize="large" sx={{ color: "#FFF" }} />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
            >
              {navLinks.map((link) => (
                <MenuItem key={link} onClick={handleCloseMenu}>
                  {link !== "Code" ? (
                    <Link style={linkStyle} to={link}>
                      {link}
                    </Link>
                  ) : (
                    <a
                      style={linkStyle}
                      href={"https://github.com/josephkohhh/WeatherHub"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link}
                    </a>
                  )}
                </MenuItem>
              ))}
            </Menu>
          </Stack>

          {/* Menu for larger screens */}
          <Stack
            direction={"row"}
            spacing={2}
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "flex", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {navLinks.map((link) => (
              <Button
                key={link}
                size="large"
                disableRipple
                sx={{
                  color: "#ECEFF7",
                  fontWeight: "550",
                  textDecoration: "none",
                  "&:hover": {
                    color: "#FFFF",
                    bgcolor: "#2c5599",
                  },
                }}
              >
                {link !== "Code" ? (
                  <Link style={linkStyle} to={link}>
                    {link}
                  </Link>
                ) : (
                  <a
                    style={linkStyle}
                    href={"https://github.com/josephkohhh/WeatherHub"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link}
                  </a>
                )}
              </Button>
            ))}
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

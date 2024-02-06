import {
  AppBar,
  Toolbar,
  Box,
  Stack,
  Typography,
  IconButton,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import { navLinks } from "../../data/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const navLinkStyle = {
    textDecoration: "none",
    color: "#F9F9F9",
  };
  const menuLinkStyle = {
    textDecoration: "none",
    color: "#000",
  };
  const [anchorEl, setAnchorEl] = useState(false);
  const handleOpenMenu = (event) => setAnchorEl(event.currentTarget);
  const handleCloseMenu = () => setAnchorEl(false);

  useEffect(() => {
    const handleResize = () => handleCloseMenu();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("listener", handleResize);
  }, []);
  return (
    <AppBar position={"static"} elevation={0} sx={{ bgcolor: "#325EA8" }}>
      <Toolbar>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* Logo & title */}
          <Stack direction={"row"} alignItems={"center"} spacing={1}>
            <LightModeIcon
              sx={{
                fontSize: { xs: "24px", md: "32px" },
                color: "#FF7621",
              }}
            />
            <Typography
              sx={{ fontSize: { xs: "24px", md: "32px" }, color: "#F9F9F9" }}
            >
              WeatherHub
            </Typography>
          </Stack>

          {/* Nav button links */}
          <Stack
            direction={"row"}
            spacing={2}
            display={{ xs: "none", sm: "flex" }}
          >
            {navLinks.map((link, index) => (
              <Button
                key={index}
                disableRipple
                sx={{
                  "&:hover": {
                    color: "#FFFF",
                    bgcolor: "#2C5599",
                  },
                }}
              >
                {index === 0 ? (
                  <a
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={navLinkStyle}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link style={navLinkStyle} to={link.path}>
                    {link.label}
                  </Link>
                )}
              </Button>
            ))}
          </Stack>

          {/* Hamburger menu (mobile device) */}
          <IconButton
            sx={{ display: { xs: "flex", sm: "none" }, color: "#FFFF" }}
            onClick={handleOpenMenu}
          >
            <MenuIcon />
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
          >
            {navLinks.map((link, index) => (
              <MenuItem
                key={index}
                sx={{ textDecoration: "none", color: "#F9F9F9" }}
              >
                {index === 0 ? (
                  <a
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={menuLinkStyle}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link style={menuLinkStyle} to={link.path}>
                    {link.label}
                  </Link>
                )}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

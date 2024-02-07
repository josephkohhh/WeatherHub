/**
 * File: AboutTitle.jsx
 * Author: Joseph Koh
 * Description: Component for displaying titles in the About page
 */

import { Typography } from "@mui/material";

export const AboutTitle = ({ children }) => {
  return (
    <Typography sx={{ fontSize: { xs: "1.5rem", sm: "2rem", md: "2rem" } }}>
      {children}
    </Typography>
  );
};

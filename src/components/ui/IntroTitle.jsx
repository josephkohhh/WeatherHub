/**
 * File: IntroTitle.jsx
 * Author: Joseph Koh
 * Description: Component for displaying titles in the About page
 */

import { Typography } from "@mui/material";

export const IntroTitle = ({ children }) => {
  return (
    <Typography sx={{ fontSize: { xs: ".8rem", sm: "1rem", md: "1.2rem" } }}>
      {children}
    </Typography>
  );
};

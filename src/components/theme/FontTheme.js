/*
 * File: FontTheme.jsx
 * Author: Joseph Koh
 * Description: Contains FontTheme to standardize the font-family for MUI Typography
 */

import { createTheme } from "@mui/material/styles";

// Create a custom theme called FontTheme
export const FontTheme = createTheme({
  // Customize the typography settings
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

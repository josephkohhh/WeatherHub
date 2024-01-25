/*
 * File: FontTheme.jsx
 * Author: Joseph Koh
 * Description: This component contains FontTheme component to standardize the font-family for MUI Typography
 */

// Import the createTheme function from Material-UI
import { createTheme } from "@mui/material/styles";

// Create a custom theme called FontTheme
export const FontTheme = createTheme({
  // Customize the typography settings
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

/**
 * File: Diagram.jsx
 * Author: Joseph Koh
 * Description: Component to display architectural diagram
 */

import { Typography } from "@mui/material";

export const Diagram = ({ src, alt }) => {
  return (
    <>
      {/* Diagram Image */}
      <img
        style={{
          width: "100%",
          height: "auto",
          boxSizing: "border-box",
          objectFit: "cover",
          border: "1px solid #555555",
          borderRadius: "10px",
        }}
        src={src}
        alt={alt}
      />

      {/* Caption */}
      <Typography
        sx={{
          textAlign: "center",
          fontSize: { xs: ".6rem", sm: ".8rem", md: ".9rem" },
        }}
      >
        Component Diagram
      </Typography>
    </>
  );
};

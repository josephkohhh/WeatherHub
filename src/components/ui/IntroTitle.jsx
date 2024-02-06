import { Typography } from "@mui/material";

export const IntroTitle = ({ children }) => {
  return (
    <Typography sx={{ fontSize: { xs: ".8rem", sm: "1rem", md: "1.2rem" } }}>
      {children}
    </Typography>
  );
};

/**
 * File: Forecast.jsx
 * Author: Joseph Koh
 * Description: Component for displaying forecast information
 */

import { Stack, Typography } from "@mui/material";
import { fontGreyColor } from "../../data/constants";

export const Forecast = ({ i }) => {
  return (
    // Container
    <Stack direction={"column"} alignItems={"center"} m={1}>
      {/* Time */}
      <Typography variant="body2">{i.time}</Typography>
      {/* Icon */}
      <img src={i.image} alt="weather icon" width={"80px"}></img>
      {/* Temp */}
      <Typography variant="h5">
        {i.temperature}°<span style={{ fontSize: "18px" }}>c</span>
      </Typography>
      {/* Description */}
      <Typography
        variant="h6"
        textAlign={"center"}
        style={fontGreyColor}
        marginBottom={1}
      >
        {i.desc}
      </Typography>
    </Stack>
  );
};

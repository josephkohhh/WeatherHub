/**
 * File: AirPollution.jsx
 * Author: Joseph Koh
 * Description: Component for displaying current air quality information
 */

import { Box, Stack, Typography, Divider } from "@mui/material";
import airIcon from "../../assets/images/air.svg";
import { fontGreyColor } from "../../data/constants";

export const AirPollution = ({ pollution }) => {
  return (
    <Box px={2}>
      {/* Title */}
      <Typography variant="body2" my={1} style={fontGreyColor}>
        Current Air Quality
      </Typography>
      <Divider />

      {/* Icon & desc */}
      <Stack direction={"column"} alignItems={"center"} marginBottom={1}>
        <img src={airIcon} alt="air quality icon" width={"120px"}></img>
        <Typography variant="h5" color={pollution.color}>
          {pollution.quality}
        </Typography>
      </Stack>
      <Divider />

      {/* Air quality index */}
      <Stack direction={"row"} justifyContent={"space-between"} px={1}>
        <Typography variant="body2">Air Quality Index</Typography>
        <Typography variant="body2">{pollution.aqi}</Typography>
      </Stack>
      <Divider />

      {/* Air quality desc */}
      <Typography
        variant="body2"
        px={1}
        marginTop={1.5}
        marginBottom={3}
        style={fontGreyColor}
      >
        {pollution.desc}
      </Typography>
    </Box>
  );
};

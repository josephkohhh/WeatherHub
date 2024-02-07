/**
 * File: Current.jsx
 * Author: Joseph Koh
 * Description: Component for displaying current air quality information
 */

import { Box, Stack, Typography, Divider } from "@mui/material";
import { InfoStack } from "../ui/InfoStack";
import { fontGreyColor } from "../../data/constants";

export const Current = ({ current }) => {
  return (
    <Box px={2}>
      {/* Title */}
      <Typography variant="body2" my={1} style={fontGreyColor}>
        Current Weather
      </Typography>
      <Divider />

      {/* Wrapper for main info */}
      <Box
        display={{ xs: "column", lg: "flex" }}
        justifyContent={"center"}
        alignItems={"center"}
        m={1}
      >
        {/* City, icon, temp & desc container */}
        <Box
          sx={{
            width: { md: "100%", lg: "50%" },
            display: "row",
          }}
        >
          {/* City */}
          <Stack
            direction={"row"}
            justifyContent={"center"}
            overflow={"hidden"}
          >
            <Typography variant="h5" textAlign={"center"} style={fontGreyColor}>
              {current.name}
            </Typography>
          </Stack>

          {/* Icon & temp wrapper */}
          <Stack direction={{ md: "column", lg: "row" }} alignItems={"center"}>
            {/* Icon */}
            <img src={current.image} alt="weather icon" width={"130px"} />
            {/* Temp */}
            <Stack direction={"column"}>
              <Typography variant="h3">
                <strong>{current.temperature}</strong>°
                <span style={{ fontSize: "24px" }}>c</span>
              </Typography>
              <Typography variant="body2" style={fontGreyColor}>
                Feels like {current.feels}°c
              </Typography>
            </Stack>
          </Stack>

          {/* Desc */}
          <Stack direction={"row"} justifyContent={"center"} marginBottom={2}>
            <Typography variant="h6" textAlign={"center"} style={fontGreyColor}>
              {current.desc}
            </Typography>
          </Stack>
        </Box>

        {/* Wrapper for side info */}
        <Box
          sx={{
            width: { md: "100%", lg: "50%" },
            flexDirection: "row",
          }}
        >
          <InfoStack>
            <Typography>Rain</Typography>
            <Typography>
              {current.rain === undefined ? "0 mm" : `${current.rain} mm`}
            </Typography>
          </InfoStack>
          <Divider />
          <InfoStack>
            <Typography>Wind</Typography>
            <Typography>{current.speed} m/s</Typography>
          </InfoStack>
          <Divider />
          <InfoStack>
            <Typography>Humidity</Typography>
            <Typography>{current.humidity}%</Typography>
          </InfoStack>
        </Box>
      </Box>
    </Box>
  );
};

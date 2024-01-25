/**
 * File: AirPollution.jsx
 * Author: Joseph Koh
 * Description: This component displays information about air pollution, including the current air quality,
 * air quality index (AQI), and additional details. It also provides a button to toggle between the current air
 * quality and the air quality index information. When data is being fetched, a loading skeleton is displayed.
 */

import { Box, Stack, Typography, Divider, Button } from "@mui/material";
import { useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import airIcon from "../assets/images/air.svg";

// AirPollution Component
export const AirPollution = ({ pollution, pollutionIndex, loading }) => {
  const [aqiIndex, setAqiIndex] = useState(false);

  return (
    <>
      {loading ? (
        <>
          <Skeleton
            animation="wave"
            variant="rect"
            height={"500px"}
            sx={{ borderRadius: "20px", bgcolor: "#fafafa" }}
          />
        </>
      ) : !aqiIndex ? (
        <>
          {/* Title */}
          <Typography
            sx={{
              fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
              p: "10px",
            }}
          >
            Current Air Quality
          </Typography>

          {/* Air Quality Image */}
          <img
            src={airIcon}
            alt="air icon"
            style={{
              maxWidth: "170px",
              width: "100%",
              height: "auto",
              objectFit: "cover",
              display: "block",
              margin: "auto",
            }}
          ></img>

          {/* Air Quality Container */}
          <Stack direction={"column"}>
            {/* Air Quality */}
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                marginBottom: "10px",
                color: pollution.color,
              }}
            >
              {pollution.quality}
            </Typography>

            {/* Air Quality Index */}
            <Divider px={2} />
            <Stack direction={"row"} justifyContent={"space-between"} px={2}>
              <Typography variant="body2">Air Quality Index</Typography>
              <Typography variant="body2">{pollution.aqi}</Typography>
            </Stack>
            <Divider />

            {/* Air Quality Description */}
            <Box
              sx={{
                margin: "5px 0 5px 0",
              }}
              p={2}
            >
              <Typography variant="body2" p={"2"} color={"#555555"}>
                {pollution.desc}
              </Typography>
            </Box>
          </Stack>

          {/* Learn More Button */}
          <Stack direction={"row"} justifyContent={"flex-end"} p={2}>
            <Button
              onClick={() => setAqiIndex(!aqiIndex)}
              variant="contained"
              disableElevation
              disableRipple
              sx={{
                bgcolor: "#325ea8",
                "&:hover": {
                  bgcolor: "#2c5599",
                },
              }}
            >
              Learn More
            </Button>
          </Stack>
        </>
      ) : (
        <>
          {/* Title */}
          <Typography
            sx={{
              fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
              p: "10px",
            }}
          >
            Air Quality Index
          </Typography>

          {/* Air Quality Image */}
          <img
            src={airIcon}
            alt="air icon"
            style={{
              maxWidth: "170px",
              width: "100%",
              height: "auto",
              objectFit: "cover",
              display: "block",
              margin: "auto",
            }}
          ></img>

          {/* Air Quality Description */}
          <Typography
            sx={{
              fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
              p: "10px",
            }}
          >
            The air quality index (AQI) is an indicator to measure the severity
            of air pollution.
          </Typography>

          {/* Air Quality Index Container */}
          <Box>
            {pollutionIndex.map((i, index) => (
              <>
                {/* Air Quality Index */}
                <Stack
                  key={index}
                  direction={"row"}
                  justifyContent={"space-between"}
                  px={2}
                >
                  <Typography>{i.aqi}</Typography>
                  <Typography color={i.color}>{i.quality}</Typography>
                </Stack>
                <Divider />
              </>
            ))}
          </Box>

          {/* Back Button */}
          <Stack direction={"row"} justifyContent={"flex-end"} p={2}>
            <Button
              onClick={() => setAqiIndex(!aqiIndex)}
              variant="contained"
              disableElevation
              disableRipple
              sx={{
                bgcolor: "#325ea8",
                "&:hover": {
                  bgcolor: "#2c5599",
                },
              }}
            >
              Back
            </Button>
          </Stack>
        </>
      )}
    </>
  );
};

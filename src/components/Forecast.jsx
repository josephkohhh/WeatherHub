/**
 * File: Forecast.jsx
 * Author: Joseph Koh
 * Description: This component displays forecast information for a specific time, including
 * the time, weather icon, temperature, description, humidity, and wind speed. It also provides
 * a loading skeleton when data is being fetched.
 */

import { Typography, Stack } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import humidityIcon from "../assets/images/humidity.svg";
import windIcon from "../assets/images/wind.svg";

// Forecast Component
export const Forecast = ({ i, loading }) => {
  return (
    <>
      {loading ? (
        <>
          <Skeleton
            animation="wave"
            variant="rect"
            height={"200px"}
            sx={{ borderRadius: "20px", bgcolor: "#fafafa" }}
          />
        </>
      ) : (
        <>
          {/* Time */}
          <Typography
            sx={{
              fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.9rem" },
            }}
            p={1}
          >
            {i.time}
          </Typography>

          {/* Weather Image and Temperature */}
          <Stack
            direction={"row"}
            marginTop={"20px"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            {/* Weather Image */}
            <img
              style={{
                maxWidth: "40px",
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
              src={`${i.image}`}
              alt="weather icon"
            ></img>
            {/* Temperature */}
            <Typography
              sx={{
                fontSize: {
                  xs: "1rem",
                  sm: "1.5rem",
                  md: "1.5rem",
                  lg: "1.6rem",
                },
              }}
            >
              {parseInt(i.temperature)}°c
            </Typography>
          </Stack>

          {/* Description */}
          <Typography
            textAlign={"center"}
            color={"#555555"}
            paddingX={1}
            sx={{
              fontSize: {
                xs: "0.8rem",
                sm: "1rem",
              },
            }}
          >
            {i.description}
          </Typography>

          {/* Humidity & Wind Container */}
          <Stack
            direction={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            marginBottom={"10px"}
          >
            {/* Humidity */}
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"center"}
              py={1}
            >
              <img
                src={humidityIcon}
                alt="humidity icon"
                style={{
                  maxWidth: "20px",
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
              ></img>
              <Stack direction={"column"} px={1}>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "0.6rem",
                      sm: "0.9rem",
                    },
                  }}
                >
                  {i.humidity}%
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "0.6rem",
                      sm: "0.9rem",
                    },
                  }}
                >
                  Humidity
                </Typography>
              </Stack>
            </Stack>

            {/* Wind */}
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <img
                src={windIcon}
                alt="wind icon"
                style={{
                  maxWidth: "20px",
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
              ></img>
              <Stack direction={"column"} px={1}>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "0.6rem",
                      sm: "0.9rem",
                    },
                  }}
                >
                  {i.wind}m/s
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "0.6rem",
                      sm: "0.9rem",
                    },
                  }}
                >
                  Wind
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </>
      )}
    </>
  );
};

/**
 * File: Current.jsx
 * Author: Joseph koh
 * Description: This component displays the current weather information, including
 * the location, weather icon, temperature, feels-like temperature, weather description,
 * humidity, and wind speed. It also provides a loading skeleton when data is being fetched.
 */

import { Stack, Typography } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import humidityIcon from "../assets/images/humidity.svg";
import windIcon from "../assets/images/wind.svg";

// Current component
export const Current = ({ data, loading }) => {
  return (
    <>
      {loading ? (
        <>
          {" "}
          <Skeleton
            animation="wave"
            variant="rect"
            height={"500px"}
            sx={{ borderRadius: "20px", bgcolor: "#fafafa" }}
          />
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
            Current Weather
          </Typography>

          {/* City */}
          <Typography
            sx={{
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.8rem" },
              textAlign: "center",
              color: "#555555",
            }}
          >
            {data.name}
          </Typography>

          {/* Weather Icon and Temperature */}
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent={"center"}
            alignItems={"center"}
          >
            {/* Image */}
            <img
              src={data.image}
              alt="weather icon"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "140px",
                objectFit: "cover",
              }}
            />

            {/* Temperature */}
            <Stack p={1} direction={"column"}>
              <Typography
                component={"div"}
                sx={{
                  fontSize: {
                    xs: "2rem",
                    sm: "4rem",
                    md: "5rem",
                    lg: "6rem",
                  },
                  textAlign: "center",
                }}
              >
                {parseInt(data.celcius)}°
                <Typography
                  sx={{
                    display: "inline",
                    fontSize: {
                      xs: "1.5rem",
                      sm: "2rem",
                      md: "2.5rem",
                      lg: "3rem",
                    },
                  }}
                >
                  c
                </Typography>
              </Typography>

              <Typography
                sx={{
                  fontSize: {
                    xs: "0.8rem",
                    sm: "0.9rem",
                    md: "1.1rem",
                    lg: "1.2rem",
                  },
                }}
              >
                Feels like {parseInt(data.feels)}°c
              </Typography>
            </Stack>
          </Stack>

          {/* Description */}
          <Typography
            sx={{
              fontSize: {
                xs: "1.1rem",
                sm: "1.5rem",
                md: "2rem",
              },
              color: "#555555",
            }}
            textAlign={"center"}
          >
            {data.description}
          </Typography>

          {/* Humidity & Wind Container */}
          <Stack
            direction={{ xs: "column", md: "row" }}
            alignItems={"center"}
            justifyContent={"center"}
            marginBottom={{ xs: "20px" }}
          >
            {/* Humidity */}
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"center"}
              p={1}
            >
              <img
                src={humidityIcon}
                alt="humidity icon"
                style={{
                  maxWidth: "30px",
                  height: "auto",
                  objectFit: "cover",
                }}
              ></img>
              <Stack direction={"column"} px={1}>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "0.9rem",
                      md: "1rem",
                    },
                  }}
                >
                  {data.humidity}%
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "0.9rem",
                      md: "1rem",
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
              p={1}
            >
              <img
                src={windIcon}
                alt="wind icon"
                style={{
                  maxWidth: "25px",
                  height: "auto",
                  objectFit: "cover",
                }}
              ></img>
              <Stack direction={"column"} px={1}>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "0.9rem",
                      md: "1rem",
                    },
                  }}
                >
                  {data.speed}m/s
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "0.9rem",
                      md: "1rem",
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

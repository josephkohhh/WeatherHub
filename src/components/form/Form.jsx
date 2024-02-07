/**
 * File: Form.jsx
 * Author: Joseph Koh
 * Description: Component for user to submit search request
 */

import { UserInput } from "../ui/UserInput";
import { Stack } from "@mui/material";
import {
  getCurrentWeather,
  getAirPollution,
  getForecast,
} from "../../services/api";
import { pollutionIndex } from "../../data/constants";
import {
  getCurrentDateTime,
  getNextDayMidnightDateTime,
  formatDateTimeTo12Hour,
} from "../../utils/calculateDateTime";
import { useEffect } from "react";

export const Form = ({
  setLoading,
  location,
  current,
  pollution,
  forecast,
  setLocation,
  setCurrent,
  setPollution,
  setForecast,
}) => {
  // Function to fetch weather API data
  const fetchData = async (location) => {
    try {
      setLoading(true);

      // Simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 1300));

      // Call current weather API & update current state
      const currentData = await getCurrentWeather(location);
      setCurrent({
        ...current,
        name: currentData.name,
        image: `https://openweathermap.org/img/w/${currentData.weather[0].icon}.png`,
        temperature: Math.round(currentData.main.temp),
        feels: Math.round(currentData.main.feels_like),
        desc: currentData.weather[0].description,
        rain: currentData.rain?.["1h"],
        speed: currentData.wind.speed,
        humidity: currentData.main.humidity,
      });

      // Get lat & lon
      const lat = currentData.coord.lat;
      const lon = currentData.coord.lon;

      // Call air pollution API & update pollution state
      const pollutionData = await getAirPollution(lat, lon);

      const aqiIndex = pollutionData.list[0].main.aqi;
      const matched = pollutionIndex.find((i) => i.aqi === aqiIndex);

      if (matched) {
        setPollution({
          ...pollution,
          aqi: matched.aqi,
          quality: matched.quality,
          desc: matched.desc,
          color: matched.color,
        });
      }

      // Call forecast API & update forecast state
      const forecastData = await getForecast(lat, lon);
      const currentDateTime = getCurrentDateTime();
      const nextDayMidnightDateTime = getNextDayMidnightDateTime();

      setForecast(
        forecastData.list
          .filter(
            (i) =>
              i.dt_txt >= currentDateTime && i.dt_txt <= nextDayMidnightDateTime
          )
          .slice(0, 6)
          .map((i) => ({
            time: (i.dt_txt = formatDateTimeTo12Hour(i.dt_txt)),
            image: `https://openweathermap.org/img/w/${i.weather[0].icon}.png`,
            temperature: Math.round(i.main.temp),
            desc: i.weather[0].description,
          }))
      );
    } catch (error) {
      // Handle network error
      if (error.message === "Network Error") {
        alert("Network error occurred:", error);
      }
      // Handle invalid location
      else if (error.response && error.response.status === 404) {
        alert(`${location} is not a valid city`);
      }
      // Handle other errors
      else {
        alert("An error occurred, please try again later...");
      }
    } finally {
      setLoading(false);
    }
  };

  // Effect to fetch weather data for SG on first render
  useEffect(() => {
    fetchData("Singapore");
  }, []);

  // Function to handle search location
  const searchLocation = (event) => {
    event.preventDefault();

    fetchData(location);

    setLocation(""); // Reset search field
  };
  return (
    <>
      <form onSubmit={searchLocation}>
        <Stack direction={"row"} justifyContent={"center"} m={3}>
          <UserInput
            sx={{
              width: { xs: "70%", sm: "50%", md: "500px" },
              bgcolor: "#FFFF",
            }}
            placeholder={"Search location..."}
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />
        </Stack>
      </form>
    </>
  );
};

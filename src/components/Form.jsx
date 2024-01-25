/**
 * File: Form.jsx
 * Author: Joseph Koh
 * Description: This component displays a weather form with search functionality,
 * fetching current weather, air pollution, and forecast data from OpenWeatherMap API.
 */

import {
  InputAdornment,
  Stack,
  TextField,
  Grid,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useEffect, useState } from "react";
import { useWeatherState } from "./StateManager";
import { getCurrentWeather, getAirPollution, getForecast } from "./Api";
import { Current } from "./Current";
import { AirPollution } from "./AirPollution";
import { Forecast } from "./Forecast";

// Form component
export const Form = () => {
  // Weather state and actions from the state manager
  const { state, setLocation, setData, setPollution, setForecastData } =
    useWeatherState();
  const { location, data, pollution, forecastData } = state;

  // Loading state for indicating data fetching
  const [loading, setLoading] = useState(false);

  // Air quality index categories
  const pollutionIndex = [
    {
      aqi: 1,
      quality: "Good",
      desc: "Air quality is satisfactory, and air pollution poses little or no risk.",
      color: "green",
    },
    {
      aqi: 2,
      quality: "Fair",
      desc: "Air quality is acceptable. However, there may be a risk for some people, particularly those who are unusually sensitive to air pollution.",
      color: "blue",
    },
    {
      aqi: 3,
      quality: "Moderate",
      desc: "Members of sensitive groups may experience health effects. The general public is less likely to be affected.",
      color: "skyblue",
    },
    {
      aqi: 4,
      quality: "Poor",
      desc: "Some members of the general public may experience health effects; members of sensitive groups may experience more serious health effects.",
      color: "brown",
    },
    {
      aqi: 5,
      quality: "Very Poor",
      desc: "The risk of health effects is increased for everyone.",
      color: "crimson",
    },
  ];

  // useEffect to fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      // Delay the execution by 1 second for better user experience
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Fetch current weather API data
      try {
        const initalLocation = "singapore";
        const currentWeatherData = await getCurrentWeather(initalLocation);
        // Update state with current weather data
        setData({
          ...data,
          image: `https://openweathermap.org/img/w/${currentWeatherData.weather[0].icon}.png`,
          celcius: currentWeatherData.main.temp,
          feels: currentWeatherData.main.feels_like,
          description: currentWeatherData.weather[0].description,
          name: currentWeatherData.name,
          humidity: currentWeatherData.main.humidity,
          speed: currentWeatherData.wind.speed,
        });

        // Extract lat and lon from currentWeatherData
        const latitude = currentWeatherData.coord.lat;
        const longitude = currentWeatherData.coord.lon;

        // Fetch air pollution API data
        try {
          const airPollutionData = await getAirPollution(latitude, longitude);
          const aqi = airPollutionData.list[0].main.aqi;
          const matched = pollutionIndex.find((i) => aqi === i.aqi); // Compare and match the air quality index

          // Update state with matched pollutionIndex
          if (matched) {
            setPollution({
              ...pollution,
              aqi: matched.aqi,
              quality: matched.quality,
              desc: matched.desc,
              color: matched.color,
            });
          }
        } catch (errGetAirPollution) {
          console.log(errGetAirPollution.message);
        }

        // Fetch forecast API data
        try {
          const forecastData = await getForecast(latitude, longitude);

          // Update state with sliced (first 6 objects) forecast data
          setForecastData(
            forecastData.list.slice(0, 6).map((i) => ({
              time: i.dt_txt,
              temperature: i.main.temp,
              description: i.weather[0].description,
              image: `http://openweathermap.org/img/w/${i.weather[0].icon}.png`,
              humidity: i.main.humidity,
              wind: i.wind.speed,
            }))
          );
        } catch (errGetForecast) {
          console.log(errGetForecast.message);
        }
      } catch (errGetCurrentWeather) {
        console.error(errGetCurrentWeather.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Handle search form submission
  const handleSearch = async (event) => {
    event.preventDefault(); // Prevent page reload when submit form
    setLoading(true);

    // Fetch current weather API data
    try {
      const currentWeatherData = await getCurrentWeather(location);
      // Update state with current weather data
      setData({
        ...data,
        image: `http://openweathermap.org/img/w/${currentWeatherData.weather[0].icon}.png`,
        celcius: currentWeatherData.main.temp,
        feels: currentWeatherData.main.feels_like,
        description: currentWeatherData.weather[0].description,
        name: currentWeatherData.name,
        humidity: currentWeatherData.main.humidity,
        speed: currentWeatherData.wind.speed,
      });

      // Extract lat and lon from currentWeatherData
      const latitude = currentWeatherData.coord.lat;
      const longitude = currentWeatherData.coord.lon;

      // Fetch air pollution API data
      try {
        const airPollutionData = await getAirPollution(latitude, longitude);
        const aqi = airPollutionData.list[0].main.aqi;
        const matched = pollutionIndex.find((i) => aqi === i.aqi); // Compare and match the air quality index

        // Update state with matched pollutionIndex
        if (matched) {
          setPollution({
            ...pollution,
            aqi: matched.aqi,
            quality: matched.quality,
            desc: matched.desc,
            color: matched.color,
          });
        }
      } catch (errGetAirPollution) {
        console.log(errGetAirPollution.message);
      }

      // Fetch forecast API data
      try {
        const forecastData = await getForecast(latitude, longitude);
        // Update state with sliced (first 6 objects) forecast data
        setForecastData(
          forecastData.list.slice(0, 6).map((i) => ({
            time: i.dt_txt,
            temperature: i.main.temp,
            description: i.weather[0].description,
            image: `http://openweathermap.org/img/w/${i.weather[0].icon}.png`,
            humidity: i.main.humidity,
            wind: i.wind.speed,
          }))
        );

        setLocation(""); // Reset state
      } catch (errGetForecast) {
        console.log(errGetForecast.message);
      }
    } catch (errGetCurrentWeather) {
      console.log(errGetCurrentWeather.message);
      alert(`${location} is not a valid city`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Weather search form */}
      <form onSubmit={handleSearch}>
        <Stack direction={"row"} my={4} sx={{ justifyContent: "center" }}>
          <TextField
            sx={{ width: { xs: "70%", md: "500px" }, bgcolor: "#F8FAFB" }}
            placeholder="Search Location..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          ></TextField>
        </Stack>
      </form>

      {/* Weather information display (parent grid) */}
      <Grid
        container
        sx={{
          width: { xs: "70%", md: "60%" },
          margin: "auto",
          padding: "16px",
          marginBottom: "300px",
          justifyContent: "space-between",
        }}
      >
        {/* Current weather (child grid) */}
        <Grid
          item
          lg={7.5}
          md={7.5}
          sm={12}
          xs={12}
          sx={{
            borderRadius: "20px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            marginBottom: "10px",
            bgcolor: "#fafafa",
          }}
        >
          <Current data={data} loading={loading} />
        </Grid>

        {/* Air pollution (child grid) */}
        <Grid
          item
          lg={4}
          md={4}
          sm={12}
          xs={12}
          sx={{
            borderRadius: "20px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            bgcolor: "#fafafa",
            marginBottom: "10px",
          }}
        >
          <AirPollution
            pollution={pollution}
            pollutionIndex={pollutionIndex}
            loading={loading}
          />
        </Grid>

        {/* Forecast section (child grid) */}
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          sx={{
            borderRadius: "20px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            marginTop: "10px",
            bgcolor: "#fafafa",
          }}
        >
          <Typography textAlign={"center"}>Forecast</Typography>
        </Grid>

        {/* Forecast data display (child grid) */}
        {forecastData.map((i, index) => (
          <Grid
            item
            key={index}
            lg={2}
            md={4}
            sm={4}
            xs={6}
            sx={{
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "20px",
              marginTop: "10px",
              bgcolor: "#fafafa",
            }}
          >
            <Forecast i={i} loading={loading} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

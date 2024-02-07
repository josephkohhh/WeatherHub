/**
 * File: api.js
 * Author: Joseph Koh
 * Description: Contains functions for fetching data from OpenWeatherMap API
 */

import axios from "axios";

// API key for accessing OpenWeatherMap API
const apiKey = "YOUR_OWN_API_KEY";

// Function to fetch current weather data API
export const getCurrentWeather = async (location) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to fetch air pollution data API
export const getAirPollution = async (lat, lon) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to fetch forecast data API
export const getForecast = async (lat, lon) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * File: Api.js
 * Author: Joseph koh
 * Description: This module provides functions for fetching weather-related data
 * from the OpenWeatherMap API using Axios.
 */

import axios from "axios";

const apiKey = "YOUR_OWN_API_KEY";

/**
 * Function: getCurrentWeather
 * Description: Fetches current weather data for a given location from the OpenWeatherMap API.
 * @param {string} location - The location for which to fetch current weather data.
 * @returns {Promise} A promise that resolves to the current weather data.
 * @throws {Error} An error if the API request fails.
 */
export const getCurrentWeather = async (location) => {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Function: getAirPollution
 * Description: Fetches air pollution data for a given latitude and longitude from the OpenWeatherMap API.
 * @param {number} latitude - The latitude of the location.
 * @param {number} longitude - The longitude of the location.
 * @returns {Promise} A promise that resolves to the air pollution data.
 * @throws {Error} An error if the API request fails.
 */
export const getAirPollution = async (latitude, longitude) => {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Function: getForecast
 * Description: Fetches forecast data for a given latitude and longitude from the OpenWeatherMap API.
 * @param {number} latitude - The latitude of the location.
 * @param {number} longitude - The longitude of the location.
 * @returns {Promise} A promise that resolves to the forecast data.
 * @throws {Error} An error if the API request fails.
 */
export const getForecast = async (latitude, longitude) => {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

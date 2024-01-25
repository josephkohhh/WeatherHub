/**
 * File: StateManager.jsx
 * Author: Joseph Koh
 * Description: This file contains a custom hook (useWeatherState) which provides a state management solution for weather-related data.
 * It initializes state with location, current weather data, air pollution data, and forecast data.
 * The hook returns the current state and functions to update specific parts of the state.
 */

import { useState } from "react";

// Initial state for weather data
const initState = {
  location: "",
  data: {},
  pollution: {},
  forecastData: [{}, {}, {}, {}, {}, {}],
};

/**
 * Custom Hook: useWeatherState
 * Description: Provides state management for weather-related data.
 * @returns {Object} An object containing the current state and functions to update state.
 */
export const useWeatherState = () => {
  const [state, setState] = useState(initState); // State management using React's useState hook

  /**
   * Function: setLocation
   * Description: Updates the location in the weather state.
   * @param {string} location - The new location value.
   */
  const setLocation = (location) => setState((prev) => ({ ...prev, location }));

  /**
   * Function: setData
   * Description: Updates the current weather data in the weather state.
   * @param {Object} data - The new current weather data.
   */
  const setData = (data) => setState((prev) => ({ ...prev, data }));

  /**
   * Function: setPollution
   * Description: Updates the air pollution data in the weather state.
   * @param {Object} pollution - The new air pollution data.
   */
  const setPollution = (pollution) =>
    setState((prev) => ({ ...prev, pollution }));

  /**
   * Function: setForecastData
   * Description: Updates the forecast data in the weather state.
   * @param {Array} forecastData - The new forecast data.
   */
  const setForecastData = (forecastData) =>
    setState((prev) => ({ ...prev, forecastData }));

  // Return the current state and functions to update state
  return {
    state,
    setLocation,
    setData,
    setPollution,
    setForecastData,
  };
};

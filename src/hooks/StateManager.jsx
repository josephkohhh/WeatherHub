/**
 * File: useWeatherState.js
 * Author: Joseph Koh
 * Description: A custom hook for managing weather state
 */

import { useState } from "react";

// Initial state for weather data
const initState = {
  location: "",
  current: {},
  pollution: {},
  forecast: [{}, {}, {}, {}, {}, {}],
};

export const useWeatherState = () => {
  const [state, setState] = useState(initState);

  // Setters
  const setLocation = (location) => setState((prev) => ({ ...prev, location }));

  const setCurrent = (current) => setState((prev) => ({ ...prev, current }));

  const setPollution = (pollution) =>
    setState((prev) => ({ ...prev, pollution }));

  const setForecast = (forecast) => setState((prev) => ({ ...prev, forecast }));

  return {
    state,
    setLocation,
    setCurrent,
    setPollution,
    setForecast,
  };
};

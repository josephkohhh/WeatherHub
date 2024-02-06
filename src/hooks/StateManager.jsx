import { useState } from "react";

const initState = {
  location: "",
  current: {},
  pollution: {},
  forecast: [{}, {}, {}, {}, {}, {}],
};

export const useWeatherState = () => {
  const [state, setState] = useState(initState);

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

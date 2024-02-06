import axios from "axios";

const apiKey = "YOUR_OWN_API_KEY";

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

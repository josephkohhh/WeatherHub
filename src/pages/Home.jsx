/**
 * File: Home.jsx
 * Author: Joseph Koh
 * Description: Home component which serves as the main page of the application
 */

import { Navbar } from "../components/ui/Navbar";
import { WeatherHub } from "../components/containers/WeatherHub";

export const Home = () => {
  return (
    <>
      <Navbar />
      <WeatherHub />
    </>
  );
};

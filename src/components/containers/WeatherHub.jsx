/**
 * File: WeatherHub.jsx
 * Author: Joseph Koh
 * Description: Main component for managing WeatherHub app
 */

import { Form } from "../form/Form";
import { Grid, Typography } from "@mui/material";
import { Current } from "./Current";
import { AirPollution } from "./AirPollution";
import { Forecast } from "./Forecast";
import { fontGreyColor } from "../../data/constants";
import { useWeatherState } from "../../hooks/StateManager";
import { useState } from "react";
import { SkeletonLayout } from "../ui/SkeletonLayout";

export const WeatherHub = () => {
  // Style
  const gridStyles = {
    backgroundColor: "#FFFF",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const { state, setLocation, setCurrent, setPollution, setForecast } =
    useWeatherState();
  const { location, current, pollution, forecast } = state;
  const [loading, setLoading] = useState(false);
  return (
    <>
      {/* Render Form component */}
      <Form
        loading={loading}
        setLoading={setLoading}
        location={location}
        current={current}
        pollution={pollution}
        forecast={forecast}
        setLocation={setLocation}
        setCurrent={setCurrent}
        setPollution={setPollution}
        setForecast={setForecast}
      />

      <Grid
        container
        width={{ xs: "80%", sm: "60%" }}
        margin={"auto"}
        justifyContent={"space-between"}
        gap={1}
      >
        {/* Render Current component */}
        <Grid item xs={12} sm={12} md={7} style={gridStyles}>
          {loading ? (
            <SkeletonLayout>
              <Current current={current} />
            </SkeletonLayout>
          ) : (
            <Current current={current} />
          )}
        </Grid>

        {/* Render AirPollution component */}
        <Grid item xs={12} sm={12} md={4.5} style={gridStyles}>
          {loading ? (
            <SkeletonLayout>
              <AirPollution pollution={pollution} />
            </SkeletonLayout>
          ) : (
            <AirPollution pollution={pollution} />
          )}
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          <Typography variant="body2" px={2} style={fontGreyColor}>
            Weather Forecast (3h interval) &gt;
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        width={{ xs: "80%", sm: "60%" }}
        margin={"auto"}
        justifyContent={"space-between"}
        marginBottom={2}
      >
        {/* Render Forecast component */}
        {forecast.map((i, index) => (
          <Grid
            item
            key={index}
            xs={5.9}
            sm={5.9}
            md={1.9}
            marginTop={1}
            style={gridStyles}
          >
            {loading ? (
              <SkeletonLayout>
                <Forecast i={i} />
              </SkeletonLayout>
            ) : (
              <Forecast i={i} />
            )}
          </Grid>
        ))}
      </Grid>

      <Typography
        width={"60%"}
        margin={"auto"}
        variant="body2"
        style={fontGreyColor}
        marginBottom={10}
      >
        *** The time shown utilizes the current GMT+8 timezone configuration
      </Typography>
    </>
  );
};

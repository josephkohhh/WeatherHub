/**
 * File: constants.js
 * Author: Joseph Koh
 * Description: A file to store data
 */

export const fontGreyColor = { color: "#555555" };
export const navLinks = [
  { label: "Code", path: "https://github.com/josephkohhh/WeatherHub" },
  { label: "Home", path: "/home" },
  { label: "About", path: "/about" },
];
export const pollutionIndex = [
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

// Data stored in app features table
export const tableData = [
  {
    feature: "Navbar",
    description: "App bar to navigate around",
  },
  {
    feature: "Search Location",
    description: "Search any city for weather information",
  },
  {
    feature: "Current Weather",
    description: "Fetch current weather information",
  },
  {
    feature: "Current Air Quality",
    description: "Fetch current air quality information",
  },
  {
    feature: "Weather Forecast",
    description: "Fetch weather forecast information at 3h interval",
  },
  {
    feature: "Responsiveness",
    description: "App is responsive which supports mobile devices",
  },
];
// Code snippets stored in variables
export const routerCodeSnippet = `<Router>
 <Routes>
  <Route index element={<Home />} />
  {/* Home route */}
  <Route path="/Home" element={<Home />} />
  {/* About route */}
  <Route path="/About" element={<About />} />
 </Routes>
</Router>`;
export const useStateCodeSnippet = `const [loading, setLoading] = useState(false);`;
export const useEffectCodeSnippet = `useEffect(() => {
  fetchData("Singapore");
}, []);
`;
export const useCustomHookCodeSnippet = `const { state, setLocation, setCurrent, setPollution, setForecast } = useWeatherState();
const { location, current, pollution, forecast } = state;`;
export const axiosCodeSnippet = `// Current Weather API Call
export const getCurrentWeather = async (location) => {
  try {
    const res = await axios.get(
      'url'
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

// Air Pollution API Call
export const getAirPollution = async (lat, lon) => {
  try {
    const res = await axios.get(
     'url'
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

// Weather Forecast API Call
export const getForecast = async (lat, lon) => {
  try {
    const res = await axios.get(
      'url'
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};`;
export const envVarCodeSnippet = `const myVariable = import.meta.env.MY_VARIABLE_NAME;`;
export const arrayMapCodeSnippet = `{forecast.map((i, index) => (
  <Grid
    item
    key={index}
  >
    <Forecast i={i} />
  </Grid>`;
export const arrayFilterSliceSortCodeSnippet = `setForecast(
  forecastData.list
    .filter(
      (i) =>
        i.dt_txt >= currentDateTime && i.dt_txt <= nextDayMidnightDateTime
    )
    .slice(0, 6)
    .map((i) => ({
      time: (i.dt_txt = formatDateTimeTo12Hour(i.dt_txt)),
      image: url,
      temperature: Math.round(i.main.temp),
      desc: i.weather[0].description,
    }))
);`;
export const viteCodeSnippet = `npx create-vite project_name --template react`;
export const viteDevCodeSnippet = `npm run dev`;
export const viteProdCodeSnippet = `npm run build`;
export const muiCodeSnippet = `npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material`;

export const routerCodeSnippet = `<Router>
{/* Header component for the app's navigational bar */}
<Header />
<Routes>
  {/* Default route to render Form when no path is specified */}
  <Route index element={<Form />} />
  {/* Explicit route to render Form when /home is accessed */}
  <Route path="/home" element={<Form />} />
  {/* Explicit route to render About when /about is accessed */}
  <Route path="/about" element={<About />} />
</Routes>
</Router>`;
export const useStateCodeSnippet = `const [loading, setLoading] = useState(false);`;
export const useEffectCodeSnippet = `useEffect(() => {
  const fetchData = async () => {
    // fetch data code here...
  };
  fetchData();
}, []);`;
export const useCustomHookCodeSnippet = `const { state, setLocation, setData, setPollution, setForecastData } = useWeatherState();
const { location, data, pollution, forecastData } = state;`;
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
export const getAirPollution = async (latitude, longitude) => {
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
export const getForecast = async (latitude, longitude) => {
  try {
    const res = await axios.get(
      'url'
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};
`;
export const environmentVariableCodeSnippet = `const myVariable = import.meta.env.MY_VARIABLE_NAME;`;
export const arrayMapCodeSnippet = `{forecastData.map((i, index) => (
  <Grid
    item
    key={index}
  >
    <Forecast i={i} loading={loading} />
  </Grid>`;
export const arrayFindCodeSnippet = `const matched = pollutionIndex.find((i) => aqi === i.aqi);`;
export const arraySliceCodeSnippet = `setForecastData(
  forecastData.list.slice(0, 6).map((i) => ({
    time: i.time,
    temperature: i.temp,
    description: i.desc,
    image: i.image 
    humidity: i.humidity,
    wind: i.speed,
  }))
);`;
export const viteCodeSnippet = `npx create-vite project_name --template react`;
export const viteDevCodeSnippet = `npm run dev`;
export const viteProdCodeSnippet = `npm run build`;

export const muiCodeSnippet = `npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material`;

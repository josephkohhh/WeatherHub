// File: About.jsx
// Author: Joseph Koh
// Description: This component showcase the component diagram, features, and key concepts applied in the WeatherHub app.

import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  routerCodeSnippet,
  useStateCodeSnippet,
  useEffectCodeSnippet,
  useCustomHookCodeSnippet,
  axiosCodeSnippet,
  arrayMapCodeSnippet,
  arrayFindCodeSnippet,
  arraySliceCodeSnippet,
  viteCodeSnippet,
  viteDevCodeSnippet,
  viteProdCodeSnippet,
  muiCodeSnippet,
  environmentVariableCodeSnippet,
} from "./Constants";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/js-extras";
import vsDark from "react-syntax-highlighter/dist/esm/styles/prism/vs-dark";
import componentDiagram from "../assets/images/component-diagram.png";

SyntaxHighlighter.registerLanguage("jsx", jsx);

// About component
export const About = () => {
  const [expanded, setExpanded] = useState(false); // State for managing accordion expansion

  // Function to handle accordion expansion change
  const handleChange = (isExpanded, panel) => {
    setExpanded(isExpanded ? panel : false);
  };

  // Data for the features table
  const tableData = [
    {
      feature: "Navbar",
      description: "App bar to navigate around",
    },
    {
      feature: "Search location",
      description: "Search any city for weather information",
    },
    {
      feature: "Current Weather",
      description: "Fetch current weather information",
    },
    {
      feature: "Current Air Quality",
      description: "Fetch current air quality index",
    },
    {
      feature: "Weather Forecast",
      description:
        "Fetch weather forecast between today and tomorrow at 3h interval",
    },
    {
      feature: "Responsiveness",
      description: "App is responsive which supports mobile devices",
    },
  ];
  return (
    <Box sx={{ marginBottom: "150px" }}>
      {/* Introduction Title */}
      <Box sx={{ width: "70%", margin: "0 auto", marginTop: "30px" }}>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2rem" },
          }}
        >
          Introducing WeatherHub
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            marginTop: "10px",
            color: "#555555",
            fontSize: { xs: ".8rem", sm: "1rem", md: "1.2rem" },
          }}
        >
          A simple weather forecast API app leveraging React and Material UI
          design. The goal of this app is to reinforce understanding of React's
          component-based architecture, ensuring a solid grasp of its
          fundamental concepts
        </Typography>
      </Box>

      {/* Component Diagram */}
      <Box
        sx={{
          width: "50%",
          margin: "auto",
          marginTop: "30px",
        }}
      >
        <img
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            border: "1px solid #555555",
            borderRadius: "10px",
            boxSizing: "border-box",
          }}
          src={componentDiagram}
          alt="component-diagram"
        />
        <Typography
          sx={{
            textAlign: "center",
            fontSize: { xs: ".7rem", sm: ".8rem", md: ".9rem" },
          }}
        >
          Component Diagram
        </Typography>
      </Box>

      {/* App Features Table */}
      <Box
        sx={{
          width: "70%",
          margin: "0 auto",
          marginTop: "30px",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            marginBottom: "20px",
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2rem" },
          }}
        >
          App Features
        </Typography>
        <TableContainer component={Paper} style={{ overflowX: "auto" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1rem",
                    border: "1px solid #ddd",
                  }}
                >
                  Feature
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1rem",
                    border: "1px solid #ddd",
                  }}
                >
                  Description
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row, index) => (
                <TableRow key={index} sx={{ border: "1px solid #ddd" }}>
                  <TableCell sx={{ border: "1px solid #ddd" }}>
                    {row.feature}
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #ddd" }}>
                    {row.description}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Key Concepts Accordion */}
      <Box
        sx={{
          width: "70%",
          margin: "0 auto",
          marginTop: "30px",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            marginBottom: "20px",
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2rem" },
          }}
        >
          Key Concepts Applied
        </Typography>

        {/* Build Tools Accordion */}
        <Accordion
          expanded={expanded === "panel6"}
          onChange={(event, isExpanded) => handleChange(isExpanded, "panel6")}
        >
          <AccordionSummary
            id="panel6-header"
            aria-controls="panel6-content"
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography
              sx={{ fontSize: { xs: ".8rem", sm: "1rem", md: "1rem" } }}
            >
              Vite
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{ fontSize: { xs: ".8rem", sm: "1rem", md: "1rem" } }}
            >
              Vite is a javascript build tool used to create frontend projects.
            </Typography>
            <SyntaxHighlighter language="jsx" style={vsDark}>
              {viteCodeSnippet}
            </SyntaxHighlighter>
            <Typography
              sx={{ fontSize: { xs: ".8rem", sm: "1rem", md: "1rem" } }}
            >
              The code snippet above is the command line to create a react +
              vite app project
            </Typography>
            <br />
            <SyntaxHighlighter language="jsx" style={vsDark}>
              {viteDevCodeSnippet}
            </SyntaxHighlighter>
            <Typography
              sx={{ fontSize: { xs: ".8rem", sm: "1rem", md: "1rem" } }}
            >
              <b>Development Mode:</b> Vite relies on native ES module support
              in modern browsers for optimal development performance. <br />
              <br />
            </Typography>
            <SyntaxHighlighter language="jsx" style={vsDark}>
              {viteProdCodeSnippet}
            </SyntaxHighlighter>
            <Typography>
              <b>Production Build:</b> When building for production, Vite (using
              Rollup under the hood) can transpile and bundle the code to ensure
              compatibility with a wider range of browsers.
              <br />
              <br />
              Vite is used to create this project instead of traditional CRA. It
              is much faster and also has built in typescript support. However,
              it does not contain built in server side rendering hence using
              Vite for client side application is a good choice.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* React Router Accordon */}
        <Accordion
          expanded={expanded === "panel4"}
          onChange={(event, isExpanded) => handleChange(isExpanded, "panel4")}
        >
          <AccordionSummary
            id="panel4-header"
            aria-controls="panel4-content"
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography
              sx={{ fontSize: { xs: ".8rem", sm: "1rem", md: "1rem" } }}
            >
              React Router
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <SyntaxHighlighter language="jsx" style={vsDark}>
              {routerCodeSnippet}
            </SyntaxHighlighter>
            <Typography
              sx={{ fontSize: { xs: ".8rem", sm: "1rem", md: "1rem" } }}
            >
              Home and About components will be rendered when the corresponding
              routes are matched. Form component is the default route when no
              path is specified.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* React Hooks Accordion */}
        <Accordion
          expanded={expanded === "panel1"}
          onChange={(event, isExpanded) => handleChange(isExpanded, "panel1")}
        >
          <AccordionSummary
            id="panel1-header"
            aria-controls="panel1-content"
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography
              sx={{ fontSize: { xs: ".8rem", sm: "1rem", md: "1rem" } }}
            >
              React Hooks
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{ fontSize: { xs: ".8rem", sm: "1rem", md: "1rem" } }}
            >
              useState Hook
            </Typography>
            <SyntaxHighlighter language="jsx" style={vsDark}>
              {useStateCodeSnippet}
            </SyntaxHighlighter>
            <Typography
              sx={{ fontSize: { xs: ".8rem", sm: "1rem", md: "1rem" } }}
            >
              Using useState hook to manage the loading state, it is set to TRUE
              and displays a placeholder that mimics the structure of the
              content being loaded (MUI Skeleton) while it is fetching data.
              Once content is loaded, it is set back to FALSE.
            </Typography>
            <Typography
              sx={{
                marginTop: "10px",
                fontSize: { xs: ".8rem", sm: "1rem", md: "1rem" },
              }}
            >
              useEffect Hook
            </Typography>
            <SyntaxHighlighter language="jsx" style={vsDark}>
              {useEffectCodeSnippet}
            </SyntaxHighlighter>
            <Typography
              sx={{ fontSize: { xs: ".8rem", sm: "1rem", md: "1rem" } }}
            >
              Using useEffect hook to orchestrate the fetching of various
              weather-related data in Singapore. An empty dependency array is
              used and no cleanup function is required as it is a one-time
              fetch.
            </Typography>
            <Typography
              sx={{
                marginTop: "10px",
                fontSize: { xs: ".8rem", sm: "1rem", md: "1rem" },
              }}
            >
              Custom Hook
            </Typography>
            <SyntaxHighlighter language="jsx" style={vsDark}>
              {useCustomHookCodeSnippet}
            </SyntaxHighlighter>
            <Typography
              sx={{ fontSize: { xs: ".8rem", sm: "1rem", md: "1rem" } }}
            >
              Using a custom hook called useWeatherState to manage the weather
              information states and perform object destructuring to extract
              values from the state returned by the useWeatherState hook.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* React Axios Accordion */}
        <Accordion
          expanded={expanded === "panel2"}
          onChange={(event, isExpanded) => handleChange(isExpanded, "panel2")}
        >
          <AccordionSummary
            id="panel2-header"
            aria-controls="panel2-content"
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography
              sx={{ fontSize: { xs: ".8rem", sm: "1rem", md: "1rem" } }}
            >
              React Axios
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <SyntaxHighlighter language="jsx" style={vsDark}>
              {axiosCodeSnippet}
            </SyntaxHighlighter>
            <Typography
              sx={{ fontSize: { xs: ".8rem", sm: "1rem", md: "1rem" } }}
            >
              Making asynchronous API calls using Axios to fetch weather data.
              Each function is designed to handle the API request and return the
              response data. These functions are housed in a JavaScript file
              (Api.js) for reusability and maintainability.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Environment Variables Accordon */}
        <Accordion
          expanded={expanded === "panel5"}
          onChange={(event, isExpanded) => handleChange(isExpanded, "panel5")}
        >
          <AccordionSummary
            id="panel5-header"
            aria-controls="panel5-content"
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography
              sx={{ fontSize: { xs: ".8rem", sm: "1rem", md: "1rem" } }}
            >
              Environment Variables
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <SyntaxHighlighter language="jsx" style={vsDark}>
              {environmentVariableCodeSnippet}
            </SyntaxHighlighter>
            <Typography
              sx={{ fontSize: { xs: ".8rem", sm: "1rem", md: "1rem" } }}
            >
              Storing sensitive information in a server-side environment
              variable to ensure security.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Array Functions Accordion */}
        <Accordion
          expanded={expanded === "panel3"}
          onChange={(event, isExpanded) => handleChange(isExpanded, "panel3")}
        >
          <AccordionSummary
            id="panel3-header"
            aria-controls="panel3-content"
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography
              sx={{ fontSize: { xs: ".8rem", sm: "1rem", md: "1rem" } }}
            >
              Array Functions
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{ fontSize: { xs: ".8rem", sm: "1rem", md: "1rem" } }}
            >
              Map()
            </Typography>
            <SyntaxHighlighter language="jsx" style={vsDark}>
              {arrayMapCodeSnippet}
            </SyntaxHighlighter>
            <Typography
              sx={{ fontSize: { xs: ".8rem", sm: "1rem", md: "1rem" } }}
            >
              Using map function to iterate over forecastData array, and for
              each element in that array, it renders a Grid component passing
              down the loading state as property.
            </Typography>
            <Typography
              sx={{
                marginTop: "10px",
                fontSize: { xs: ".8rem", sm: "1rem", md: "1rem" },
              }}
            >
              Find()
            </Typography>
            <SyntaxHighlighter language="jsx" style={vsDark}>
              {arrayFindCodeSnippet}
            </SyntaxHighlighter>
            <Typography
              sx={{ fontSize: { xs: ".8rem", sm: "1rem", md: "1rem" } }}
            >
              Using find function to search through the pollutionIndex array for
              an element where the aqi property matches the specified value
              (aqi). If found, it will return the first element in the array.
              Else, it returns undefined.
            </Typography>

            <Typography
              sx={{
                marginTop: "10px",
                fontSize: { xs: ".8rem", sm: "1rem", md: "1rem" },
              }}
            >
              Slice()
            </Typography>
            <SyntaxHighlighter language="jsx" style={vsDark}>
              {arraySliceCodeSnippet}
            </SyntaxHighlighter>
            <Typography
              sx={{ fontSize: { xs: ".8rem", sm: "1rem", md: "1rem" } }}
            >
              Using method chaining, the slice method creates a copy of the
              original array to avoid mutation and takes the first 6 element.
              The map function then iterate over the sliced array and transform
              each element into an object with specific properties and values
              updating the forecastData state.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Material UI Accordon */}
        <Accordion
          expanded={expanded === "panel7"}
          onChange={(event, isExpanded) => handleChange(isExpanded, "panel7")}
        >
          <AccordionSummary
            id="panel7-header"
            aria-controls="panel7-content"
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography
              sx={{ fontSize: { xs: ".8rem", sm: "1rem", md: "1rem" } }}
            >
              Material UI
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <SyntaxHighlighter language="jsx" style={vsDark}>
              {muiCodeSnippet}
            </SyntaxHighlighter>
            <Typography
              sx={{ fontSize: { xs: ".8rem", sm: "1rem", md: "1rem" } }}
            >
              A react UI framework that provides a set of customizable and
              reusable components, styles, and themes following the google
              material design guidelines.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

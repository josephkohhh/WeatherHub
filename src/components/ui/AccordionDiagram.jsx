/**
 * File: AccordionDiagram.jsx
 * Author: Joseph Koh
 * Description: Component showcasing various code snippets and explanations for TaskMaster app features.
 */

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { ReactSyntaxHighligherComponent } from "../../lib/ReactSyntaxHighligherComponent";
import {
  viteCodeSnippet,
  viteDevCodeSnippet,
  viteProdCodeSnippet,
  routerCodeSnippet,
  useStateCodeSnippet,
  useEffectCodeSnippet,
  useCustomHookCodeSnippet,
  axiosCodeSnippet,
  envVarCodeSnippet,
  arrayMapCodeSnippet,
  arrayFilterSliceSortCodeSnippet,
  muiCodeSnippet,
} from "../../data/constants";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

export const AccordionDiagram = () => {
  // Styling for accordion details text
  const textAlignStart = {
    textAlign: "start",
  };
  const fontSizing = {
    sx: { fontSize: { xs: "0.8rem", sm: "1rem", md: "1rem" } },
  };

  // State for managing the expanded accordion panels
  const [expanded, setExpanded] = useState(false);

  // Function to handle change in accordion panel expansion.
  const handleChange = (isExpanded, panel) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      {/* Vite */}
      <Accordion
        expanded={expanded === "panel1"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel1")}
      >
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Vite</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography {...fontSizing} style={textAlignStart}>
            Vite is a javascript build tool to create frontend projects.
          </Typography>
          <ReactSyntaxHighligherComponent
            code={viteCodeSnippet}
            language={"shell"}
          />
          <Typography {...fontSizing} style={textAlignStart}>
            The command line above creates a react + vite app.
          </Typography>
          <ReactSyntaxHighligherComponent
            code={viteDevCodeSnippet}
            language={"shell"}
          />
          <Typography {...fontSizing} style={textAlignStart}>
            Development Mode: Vite relies on native ES module support in modern
            browsers for optimal development performance.
          </Typography>
          <ReactSyntaxHighligherComponent
            code={viteProdCodeSnippet}
            language={"shell"}
          />
          <Typography {...fontSizing} style={textAlignStart}>
            Production Build: When building for production, Vite (using Rollup
            under the hood) can transpile and bundle the code to ensure
            compatibility with a wider range of browsers.
          </Typography>
          <br />
          <Typography {...fontSizing} style={textAlignStart}>
            Vite is used to create this project instead of traditional CRA. It
            is much faster and also has built in typescript support. However, it
            does not contain built in server side rendering hence using Vite for
            client side application is a good choice.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* React router */}
      <Accordion
        expanded={expanded === "panel2"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel2")}
      >
        <AccordionSummary
          id="panel2-header"
          aria-controls="panel2-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>React Router</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ReactSyntaxHighligherComponent
            code={routerCodeSnippet}
            language={"jsx"}
          />
          <Typography {...fontSizing} style={textAlignStart}>
            Home and About page will be rendered when the corresponding routes
            are matched. Home page component is the default route when no path
            is specified.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* React hooks */}
      <Accordion
        expanded={expanded === "panel3"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel3")}
      >
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel3-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>React Hooks</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography {...fontSizing} style={textAlignStart}>
            useState
          </Typography>
          <ReactSyntaxHighligherComponent
            code={useStateCodeSnippet}
            language={"javascript"}
          />
          <Typography {...fontSizing} style={textAlignStart}>
            Using built in useState hook to manage the user input task, nanoid()
            is used to assign the id upon form submission.
          </Typography>

          <br />

          <Typography {...fontSizing} style={textAlignStart}>
            useEffect
          </Typography>
          <ReactSyntaxHighligherComponent
            code={useEffectCodeSnippet}
            language={"javascript"}
          />
          <Typography {...fontSizing} style={textAlignStart}>
            Using useEffect hook to orchestrate the fetching of various
            weather-related data in Singapore. An empty dependency array is used
            and no cleanup function is required as it is a one-time fetch on the
            first render.
          </Typography>

          <br />

          <Typography {...fontSizing} style={textAlignStart}>
            Custom Hook
          </Typography>
          <ReactSyntaxHighligherComponent
            code={useCustomHookCodeSnippet}
            language={"javascript"}
          />
          <Typography {...fontSizing} style={textAlignStart}>
            Using a custom hook called useWeatherState to manage the weather
            information states and perform object destructuring to extract
            values from the state returned by the useWeatherState hook.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* React axios */}
      <Accordion
        expanded={expanded === "panel4"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel4")}
      >
        <AccordionSummary
          id="panel4-header"
          aria-controls="panel4-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>React Axios</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ReactSyntaxHighligherComponent
            code={axiosCodeSnippet}
            language={"javascript"}
          />
          <Typography {...fontSizing} style={textAlignStart}>
            Making asynchronous API calls using Axios to fetch weather data.
            Each function is designed to handle the API request and return the
            response data. These functions are housed in a JavaScript file
            (api.js) for reusability and maintainability.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Environment variable */}
      <Accordion
        expanded={expanded === "panel5"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel5")}
      >
        <AccordionSummary
          id="panel5-header"
          aria-controls="panel5-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Environment Variables</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ReactSyntaxHighligherComponent
            code={envVarCodeSnippet}
            language={"javascript"}
          />
          <Typography {...fontSizing} style={textAlignStart}>
            Storing sensitive information in a server-side environment variable
            to ensure security.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Array functions */}
      <Accordion
        expanded={expanded === "panel6"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel6")}
      >
        <AccordionSummary
          id="panel6-header"
          aria-controls="panel6-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Array Functions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography {...fontSizing} style={textAlignStart}>
            map()
          </Typography>
          <ReactSyntaxHighligherComponent
            code={arrayMapCodeSnippet}
            language={"jsx"}
          />
          <Typography {...fontSizing} style={textAlignStart}>
            Using map function to iterate over forecast array, and for each
            element in that array, it renders a Grid component passing down the
            forecast data as property.
          </Typography>

          <br />
          <Typography {...fontSizing} style={textAlignStart}>
            filter(), slice() and sort()
          </Typography>
          <ReactSyntaxHighligherComponent
            code={arrayFilterSliceSortCodeSnippet}
            language={"javascript"}
          />
          <Typography {...fontSizing} style={textAlignStart}>
            Using method chaining, the filter method will filter and return data
            that is within a certain datetime range, the slice method creates a
            copy of the original array and return the first 6 elements. Finally,
            the map method is use to transform each item of the filtered and
            sliced data into a new object, i.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Material UI */}
      <Accordion
        expanded={expanded === "panel7"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel7")}
      >
        <AccordionSummary
          id="panel7-header"
          aria-controls="panel7-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Material UI</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ReactSyntaxHighligherComponent
            code={muiCodeSnippet}
            language={"shell"}
          />
          <Typography {...fontSizing} style={textAlignStart}>
            A react UI framework that provides a set of customizable and
            reusable components, styles, and themes following the google
            material design guidelines.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

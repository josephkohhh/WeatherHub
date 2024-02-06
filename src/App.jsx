/**
 * File: App.jsx
 * Author: Joseph Koh
 * Description: Entry point for the React application
 */

import "./App.css";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FontTheme } from "./components/theme/FontTheme.js";
import { ThemeProvider } from "@mui/material";
function App() {
  return (
    <>
      {/* Wrap components with custom theme */}
      <ThemeProvider theme={FontTheme}>
        <Router>
          <Routes>
            <Route index element={<Home />} />
            {/* Home route */}
            <Route path="/Home" element={<Home />} />
            {/* About route */}
            <Route path="/About" element={<About />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;

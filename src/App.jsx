import "./App.css";
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { About } from "./components/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { FontTheme } from "./components/FontTheme";

function App() {
  // Render the App component
  return (
    // Apply the FontTheme using MUI's ThemeProvider
    <ThemeProvider theme={FontTheme}>
      <Router>
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
      </Router>
    </ThemeProvider>
  );
}

export default App;

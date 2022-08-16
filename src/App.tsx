import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import "./App.css";
import "./index.css";
import Routes from "./routes/routes";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <Routes />
      </div>
    </ThemeProvider>
  );
}

export default App;

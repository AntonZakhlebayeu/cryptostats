import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import "./App.css";
import LoginForm from "./components/auth/login-form/LoginForm";
import "./index.css";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <LoginForm />
      </div>
    </ThemeProvider>
  );
}

export default App;

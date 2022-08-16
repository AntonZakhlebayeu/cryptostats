import { createTheme, ThemeProvider } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetUserQuery } from "./apis/user.api";
import "./App.css";
import "./index.css";
import Routes from "./routes/routes";
import { setAuthState } from "./slices/auth.slice";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const { data: user } = useGetUserQuery(undefined);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      dispatch(setAuthState({ user }));
      navigate("/");
    }
  }, [user, dispatch, navigate]);

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <Routes />
      </div>
    </ThemeProvider>
  );
}

export default App;

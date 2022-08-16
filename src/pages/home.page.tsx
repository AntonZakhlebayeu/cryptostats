import { Button } from "@mui/material";
import React from "react";

function HomePage() {
  const handleConnectCoinbase = () => {
    if (process.env.REACT_APP_COINBASE_AUTH_URI) {
      window.location.href = process.env.REACT_APP_COINBASE_AUTH_URI;
    }
  };

  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <Button variant="contained" size="large" onClick={handleConnectCoinbase}>
        Connect coinbase
      </Button>
    </div>
  );
}

export default HomePage;

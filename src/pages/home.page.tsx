import { Button } from "@mui/material";
import React from "react";
import { useAppSelector } from "../app/hooks";
import TransactionsGrid from "../components/transactions/transactions-grid.component";
import { selectCurrentUser } from "../slices/auth.slice";

function HomePage() {
  const user = useAppSelector((state) => selectCurrentUser(state));

  const handleConnectCoinbase = () => {
    if (process.env.REACT_APP_COINBASE_AUTH_URI) {
      window.location.href = process.env.REACT_APP_COINBASE_AUTH_URI;
    }
  };

  return (
    <div className="flex justify-center items-center flex-col h-screen">
      {user?.isCoinBaseAuthorized ? (
        <TransactionsGrid />
      ) : (
        <Button
          variant="contained"
          size="large"
          onClick={handleConnectCoinbase}
        >
          Connect coinbase
        </Button>
      )}
    </div>
  );
}

export default HomePage;

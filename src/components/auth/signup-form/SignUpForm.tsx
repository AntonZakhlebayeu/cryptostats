import React, { useState } from "react";
import { Button, TextField, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [emailErrored, setEmailErrored] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordErrored, setPasswordErrored] = useState(false);

  const handleSignUp = () => {
    if (!email) {
      setEmailErrored(true);
    } else {
      setEmailErrored(false);
    }
    if (!password) {
      setPasswordErrored(true);
    } else {
      setPasswordErrored(false);
    }
  };

  return (
    <div className="flex justify-center items-center flex-col h-screen gap-8">
      <h1 className="text-6xl">Cryptostats</h1>
      <div className="flex flex-col gap-2">
        <TextField
          label="Email"
          className="w-80"
          type="email"
          required
          helperText={emailErrored && "Please enter a valid email."}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          error={emailErrored}
        />
        <TextField
          label="Password"
          type="password"
          className="w-80"
          required
          helperText={passwordErrored && "Please enter a valid password."}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          error={passwordErrored}
        />
        <Link to="/login" className="justify-self-start self-start mt-2">
          <MuiLink>Login</MuiLink>
        </Link>
      </div>
      <Button variant="contained" className="w-80" onClick={handleSignUp}>
        <span className="p-1">Sign up</span>
      </Button>
    </div>
  );
}

export default SignUpForm;

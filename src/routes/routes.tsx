import React from "react";
import { Routes as ReactRouterRoutes, Route } from "react-router-dom";
import HomePage from "../pages/home.page";
import LoginPage from "../pages/login.page";
import SignUpPage from "../pages/signup.page";
import ProtectedRoute from "./protected-routes.component";

function Routes() {
  return (
    <ReactRouterRoutes>
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignUpPage />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />
    </ReactRouterRoutes>
  );
}

export default Routes;

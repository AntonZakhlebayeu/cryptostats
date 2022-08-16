import React from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { User } from "../models/User";
import { selectCurrentUser } from "../slices/auth.slice";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProtectedRoute: React.FC<any> = ({ children }) => {
  const user: User | null | undefined = useAppSelector((state) =>
    selectCurrentUser(state)
  );

  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;

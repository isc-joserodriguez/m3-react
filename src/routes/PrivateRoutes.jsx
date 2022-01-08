import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoutes({ children }) {
  const [token] = React.useState(null);

  return token ? children : <Navigate to="/login" />;
}

export { PrivateRoutes };

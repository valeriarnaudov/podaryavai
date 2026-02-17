import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export default function RequireUltra({ children }) {
  const { user } = useContext(AuthContext);

  if (!user || user.plan !== "ultra") {
    return <Navigate to="/pricing" replace />;
  }

  return children;
}

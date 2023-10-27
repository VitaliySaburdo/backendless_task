import { Navigate } from "react-router-dom";

export const DefaultTabLoader = ({
  tabs,
  component: Component,
  redirectTo = "/",
}) => {
  const defaultTab = tabs.find((tab) => tab.order === 0);
  return defaultTab ? <Navigate to={redirectTo} /> : Component;
};

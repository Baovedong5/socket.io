import { useRoutes } from "react-router-dom";
import Login from "./login";
import Chat from "./chat";
import Me from "./me";

const useRouteElement = () => {
  const routeElement = useRoutes([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/me",
      element: <Me />,
    },
    {
      path: "/chat",
      element: <Chat />,
    },
  ]);
  return routeElement;
};

export default useRouteElement;

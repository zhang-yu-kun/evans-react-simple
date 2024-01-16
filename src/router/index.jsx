import { useRoutes, Navigate } from "react-router-dom";

import Home from "../views/Home";
import Page1 from "../views/Page1";
import Page2 from "../views/Page2";
const AppRouter = () => {
  const element = useRoutes([
    { path: "/", element: <Navigate to="/home" /> },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/page1",
      element: <Page1 />,
    },
    {
      path: "/page2",
      element: <Page2 />,
    },
  ]);
  return element;
};
export default AppRouter;

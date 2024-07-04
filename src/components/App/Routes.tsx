import { useRoutes } from "react-router-dom";
import { ROUTES } from "../../utils/constants";
import Login from "../../pages/Login";
import SignUp from "../../pages/Signup";
import HomePage from "../../pages/Homepage";
import ManageVehicle from "../../pages/admin/ManageVehicle";
import { LayoutClient } from "../Layout";

const Routes = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <LayoutClient />,
      children: [{ path: ROUTES.home, element: <HomePage /> }],
    },
    { path: ROUTES.login, element: <Login /> },
    { path: ROUTES.signUp, element: <SignUp /> },
    { path: ROUTES.manageVehicle, element: <ManageVehicle /> },
  ]);
  return element;
};

export default Routes;

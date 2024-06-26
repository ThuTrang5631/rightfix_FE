import { useRoutes } from "react-router-dom";
import { ROUTES } from "../../utils/constants";
import Login from "../../pages/Login";
import SignUp from "../../pages/Signup";
import HomePage from "../../pages/Homepage";

const Routes = () => {
  const element = useRoutes([
    { path: ROUTES.login, element: <Login /> },
    { path: ROUTES.signUp, element: <SignUp /> },
    { path: ROUTES.home, element: <HomePage /> },
  ]);
  return element;
};

export default Routes;

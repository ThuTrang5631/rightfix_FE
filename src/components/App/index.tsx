import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { ROUTES } from "../../utils/constants";
import Routes from "./Routes";

const App = () => {
  const { accessToken } = useAuth();

  useEffect(() => {
    if (accessToken) {
      window.location.replace(ROUTES.home);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default App;

import { Outlet } from "react-router-dom";
import Header from "../Header";

export const LayoutClient = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AppLayout = ({ onLogout }) => {
  return (
    <>
      <Navbar onLogout={onLogout} />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;

import React from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../components/Navbar";
import PortalHeader from "../components/PortalHeader";

const PrivateLayout = ({ children }) => {
  const location = useLocation();
  const isPortalPage = location.pathname === "/portal-institucional" || location.pathname === "/proyectos-investigacion" || location.pathname === "/guardar-proyectos";

  return (
    <>
      {isPortalPage ? <PortalHeader /> : <NavBar />}
      <div className="container mt-5">{children}</div>
    </>
  );
};

export default PrivateLayout;

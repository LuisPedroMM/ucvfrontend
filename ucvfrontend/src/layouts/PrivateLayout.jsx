import React from "react";
import NavBar from "../components/Navbar";

const PrivateLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className="container mt-5">{children}</div>
    </>
  );
};

export default PrivateLayout;

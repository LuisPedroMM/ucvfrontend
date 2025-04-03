import React from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
      <div className="container-fluid d-flex justify-content-between">
        <span
          className="navbar-brand"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/dashboard")}
        >
          📘 ICTA - Sistema
        </span>

        {user && (
          <div className="d-flex align-items-center gap-3">
            <span className="text-white me-2">
              👋 Hola, <strong>{user.nombre}</strong>
            </span>

            <button
              className="btn btn-outline-light btn-sm"
              onClick={() => navigate("/perfil")}
            >
              👤 Perfil
            </button>

            {user.rol === "admin" && (
              <button
                className="btn btn-outline-warning btn-sm"
                onClick={() => navigate("/usuarios")}
              >
                🧑‍💼 Usuarios
              </button>
            )}

            <button className="btn btn-light btn-sm" onClick={handleLogout}>
              🚪 Salir
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;

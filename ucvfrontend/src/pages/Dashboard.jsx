import React from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowRightSquareFill } from "react-icons/bs";


const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) return <p>No estás autenticado.</p>;

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const role = user.rol.toLowerCase();
  const isAdmin = role === "admin";

  return (
    <div className="card p-4 shadow text-center">
      <h2 className="mb-3">¡Bienvenido, {user.nombre}!</h2>

      <p><strong>Correo:</strong> {user.email}</p>
      <p><strong>Rol:</strong> {user.rol}</p>

      <hr />

      {isAdmin ? (
        <>
          <h5>Acciones disponibles:</h5>
          <div className="d-flex justify-content-center flex-wrap gap-2">
            <button
              className="btn btn-outline-success px-3 py-2 ..."
              onClick={() => navigate("/usuarios")}
            >
              <i className="bi bi-person"></i>
               Gestión de usuarios
            </button>

            <button
              className="btn btn-outline-success px-3 py-2 ..."
              onClick={() => navigate("/portal-institucional")}
            >
              <i className="bi bi-arrow-right-square-fill"></i>
              Portal Institucional
            </button>
          </div>
        </>
      ) : (
        <>
          <h5>Acciones disponibles:</h5>
          <div className="d-flex justify-content-center flex-wrap gap-2">
            <button
              className="btn btn-outline-success btn-sm"
              onClick={() => navigate("/portal-institucional")}
            >
              <i className="bi bi-arrow-right-square-fill"></i>
                Portal Institucional
            </button>
          </div>
        </>
      )}

      <hr />
      <div className="d-flex justify-content-center">
        <button className="btn btn-danger px-3 py-2 ..." onClick={handleLogout}>
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default Dashboard;

import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) return <p>No estás autenticado.</p>;

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="card p-4 shadow">
      <h2 className="mb-3">¡Bienvenido, {user.nombre}!</h2>

      <p><strong>Correo:</strong> {user.email}</p>
      <p><strong>Rol:</strong> {user.rol}</p>

      <hr />

      {user.rol === "admin" ? (
        <>
          <h5>Acciones para administrador:</h5>
          <button
            className="btn btn-outline-primary me-2 mb-2"
            onClick={() => navigate("/usuarios")}
          >
            🧑‍💼 Gestión de usuarios
          </button>
          <button className="btn btn-outline-secondary mb-2">
            📊 Ver reportes
          </button>
        </>
      ) : (
        <>
          <h5>Acciones disponibles:</h5>
          <button className="btn btn-outline-success me-2 mb-2" onClick={() => navigate("/perfil")}>
            👤 Ver perfil
          </button>
          <button className="btn btn-outline-warning mb-2">
            🔐 Cambiar contraseña
          </button>
        </>
      )}

      <hr />
      <button className="btn btn-danger" onClick={handleLogout}>
        Cerrar sesión
      </button>
    </div>
  );
};

export default Dashboard;

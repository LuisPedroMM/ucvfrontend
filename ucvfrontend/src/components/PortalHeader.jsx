import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/icta.png";

const PortalHeader = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const irAInicio = () => {
    navigate("/portal-institucional");
  };

  const irAProyectos = () => {
    navigate("/proyectos-investigacion");
  };

  const irAEjecucionInfra = () => {
    navigate("/ejecucion-financiera-proyectos-infraestructura");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("hasVisitedPortal");
    navigate("/login");
  };

  return (
    <header className="navbar-icta py-4">
      <div className="container position-relative d-flex align-items-center justify-content-between">
        <img src={logo} alt="ICTA" className="logo-icta me-3" />
        <div className="header-titles position-absolute top-50 start-50 translate-middle text-center">
          <h5 className="fw-bold text-success mb-0">
            Instituto de Ciencia y Tecnología Agrícolas
          </h5>
          <small className="text-muted">Unidad de Cooperación y Vinculación</small>
        </div>
        {user && (
          <div className="d-flex align-items-center gap-3">
            <span className="text-dark me-2">
              👋 Hola, <strong>{user.nombre}</strong>
            </span>
            <button className="btn btn-outline-dark btn-sm" onClick={handleLogout}>
              Cerrar Sesión
            </button>
          </div>
        )}
      </div>

      {/* Menú de navegación */}
      <nav className="nav-links mt-3">
        <ul className="nav justify-content-center bg-dark rounded-pill p-2">
          <li className="nav-item">
            <button className="nav-link text-white" onClick={irAInicio}>
              Inicio
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link text-white" onClick={irAProyectos}>
              Proyectos de Investigación
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link text-white" onClick={() => navigate("/ejecucion-financiera-proyectos-investigacion")}>
              Ejecución Financiera Proyectos de Investigación
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link text-white" onClick={irAEjecucionInfra}>
              Ejecución Financiera Proyectos de Infraestructura
            </button>
          </li>
          <li className="nav-item"><a className="nav-link text-white" href="#">Proyectos Generados ICTA</a></li>
          <li className="nav-item"><a className="nav-link text-white" href="#">Presupuesto de Cooperación Externa</a></li>
          <li className="nav-item"><a className="nav-link text-white" href="#">Formatos</a></li>
          <li className="nav-item"><a className="nav-link text-white" href="#">Contáctanos</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default PortalHeader;
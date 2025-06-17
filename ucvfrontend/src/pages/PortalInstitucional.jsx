import React from "react";
import "./PortalInstitucional.css"; // Asegúrate de que este archivo exista y tenga los estilos necesarios
import logo from "../assets/icta.png";

const PortalInstitucional = () => {
  return (
    <div className="portal-container">
      {/* Encabezado */}
      <header className="navbar-icta py-4">
        <div className="container position-relative d-flex align-items-center justify-content-start">
          <img src={logo} alt="ICTA" className="logo-icta me-3" />

          <div className="header-titles position-absolute top-50 start-50 translate-middle text-center">
            <h5 className="fw-bold text-success mb-0">
              Instituto de Ciencia y Tecnología Agrícolas
            </h5>
            <small className="text-muted">Unidad de Cooperación y Vinculación</small>
          </div>
        </div>
        
        {/* Menú de navegación */}
        <nav className="nav-links mt-3">
          <ul className="nav justify-content-center bg-dark rounded-pill p-2">
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Proyectos de investigación</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Proyectos de Infraestructura</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Proyectos Generados ICTA</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Presupuesto de Cooperación Externa</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Formatos KolFaci</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Formatos Administrativos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Contáctanos</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Carrusel (sin imágenes reales aún) */}
      <main className="portal-contenido container mt-4">
        <div id="carouselBanner" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner rounded shadow">
            <div className="carousel-item active">
              <div
                className="d-block w-100 bg-secondary text-white d-flex align-items-center justify-content-center"
                style={{ height: "300px", fontSize: "1.5rem" }}
              >
                Aquí irá la imagen del carrusel 1
              </div>
            </div>
            <div className="carousel-item">
              <div
                className="d-block w-100 bg-dark text-white d-flex align-items-center justify-content-center"
                style={{ height: "300px", fontSize: "1.5rem" }}
              >
                Aquí irá la imagen del carrusel 2
              </div>
            </div>
            <div className="carousel-item">
              <div
                className="d-block w-100 bg-primary text-white d-flex align-items-center justify-content-center"
                style={{ height: "300px", fontSize: "1.5rem" }}
              >
                Aquí irá la imagen del carrusel 3
              </div>
            </div>
          </div>
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselBanner" data-bs-slide-to="0" className="active" />
            <button type="button" data-bs-target="#carouselBanner" data-bs-slide-to="1" />
            <button type="button" data-bs-target="#carouselBanner" data-bs-slide-to="2" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default PortalInstitucional;

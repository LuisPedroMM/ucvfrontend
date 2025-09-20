import React from "react";
import { useNavigate } from "react-router-dom";
import "./PortalInstitucional.css";
import logo from "../assets/icta.png";


const PortalInstitucional = () => {
  const navigate = useNavigate();

  const irAProyectos = () => {
    navigate("/proyectos-investigacion");
  };

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
            <li className="nav-item"><a className="nav-link text-white" href="#">Inicio</a></li>
            <li className="nav-item">
              <button className="nav-link text-white" onClick={irAProyectos}>
                Proyectos de Investigación
              </button>
            </li>
            <li className="nav-item"><a className="nav-link text-white" href="#">Ejecución Financiera Proyectos de Investigación</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#">Ejecución Financiera Proyectos de Infraestructura</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#">Proyectos Generados ICTA</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#">Presupuesto de Cooperación Externa</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#">Formatos</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#">Contáctanos</a></li>
          </ul>
        </nav>
      </header>

      {/* Carrusel */}
      <main className="portal-contenido container mt-4">
        <div
          id="carouselBanner"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="4500"
          data-bs-pause="hover"
        >
          {/* Indicadores */}
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselBanner" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselBanner" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselBanner" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>

          {/* Slides */}
          <div className="carousel-inner rounded-4 shadow" style={{ overflow: "hidden" }}>
            <div className="carousel-item active">
              <img
                src="/carrusel/slide1.png"
                className="d-block w-100"
                style={{ height: 360, objectFit: "cover" }}
                alt="Carrusel 1"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/carrusel/slide2.png"
                className="d-block w-100"
                style={{ height: 360, objectFit: "cover" }}
                alt="Carrusel 2"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/carrusel/slide3.png"
                className="d-block w-100"
                style={{ height: 360, objectFit: "cover" }}
                alt="Carrusel 3"
              />
            </div>
          </div>

          {/* Flechas */}
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselBanner" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselBanner" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Siguiente</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default PortalInstitucional;

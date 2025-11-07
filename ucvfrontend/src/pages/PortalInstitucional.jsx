import React from "react";
import PortalHeader from "../components/PortalHeader";
import "./PortalInstitucional.css";


const PortalInstitucional = () => {
  return (
    <div className="portal-container">
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
                src="/carrusel/slid1.jpeg"
                className="d-block w-100"
                style={{ height: 400, objectFit: "fill" }}
                alt="Carrusel 1"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/carrusel/slid2.jpg"
                className="d-block w-100"
                style={{ height: 400, objectFit: "fill" }}
                alt="Carrusel 2"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/carrusel/slid3.jpeg"
                className="d-block w-100"
                style={{ height: 400, objectFit: "fill" }}
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

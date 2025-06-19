import React from "react";
import "./ProyectosInvestigacion.css"; // Asegúrate de tener este archivo si necesitas estilos personalizados

const proyectos = [
  {
    numero: "Pcol-01-2025",
    coordinador: "Leopoldo Calel Mus",
    asociados: "Edilsar Mazariegos Hernández",
    nombre: "Enriqueciendo la productividad, calidad, y resiliencia de los sistemas agrícolas en ambientes de los trópicos americanos en América Latina",
    cadena: "Cacao",
    region: "Norte/Sur",
    cooperante: "KolFACI",
    entidad: "FUNDIT",
  },
  {
    numero: "Pcol-02-2025",
    coordinador: "Aroldo Roderico García Vásquez",
    asociados: "Edilsar Mazariegos Hernández, Leopoldo Calel Mus",
    nombre: "Evaluación del germoplasma de café para la identificación de variedades resistentes al cambio climático en América Latina",
    cadena: "Café",
    region: "Norte/Centro/Sur",
    cooperante: "KolFACI",
    entidad: "FUNDIT",
  },
  {
    numero: "Pcol-03-2025",
    coordinador: "Edilsar Mazariegos Hernández",
    asociados: "-",
    nombre: "Evaluación de la variabilidad forrajera resistente a Fusarium oxysporum f. sp. cubense raza tropical 4-Foc RT4",
    cadena: "-",
    region: "Sur",
    cooperante: "Misión Técnica de Taiwán",
    entidad: "Taiwán",
  },
  {
    numero: "Pcol-04-2025",
    coordinador: "Carlos Raúl Maldonado Mota",
    asociados: "Oscar Emir Barrios Coyoy, Jackeline Andrea Montes de Oca Córdova",
    nombre: "Investigación y fortalecimiento en la base de producción de semilla de papa",
    cadena: "Papa",
    region: "Occidente",
    cooperante: "KOPIA",
    entidad: "KOPIA",
  },
  // [...continuar con los 18 proyectos restantes, ya definidos previamente...]
  {
    numero: "Pcol-22-2025",
    coordinador: "Anidar Xavier Orantes Salguero",
    asociados: "-",
    nombre: "Reducción de las emisiones de gases efecto invernadero en los suelos agrícolas (KoLFACI Optimo)",
    cadena: "-",
    region: "-",
    cooperante: "KoLFACI",
    entidad: "IICA",
  },
];

const ProyectosInvestigacion = () => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-primary">📚 Proyectos Interinstitucionales 2025</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-striped table-hover align-middle shadow-sm">
          <thead className="table-dark">
            <tr>
              <th>No. Proyecto</th>
              <th>Coordinador / Investigador Principal</th>
              <th>Investigadores Asociados</th>
              <th>Nombre del Proyecto</th>
              <th>Cadena</th>
              <th>Región</th>
              <th>Cooperante</th>
              <th>Entidad que Administra Fondos</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {proyectos.map((p, i) => (
              <tr key={i}>
                <td>{p.numero}</td>
                <td>{p.coordinador}</td>
                <td>{p.asociados}</td>
                <td>{p.nombre}</td>
                <td>{p.cadena}</td>
                <td>{p.region}</td>
                <td>{p.cooperante}</td>
                <td>{p.entidad}</td>
                <td>
                  <button className="btn btn-sm btn-outline-primary">
                    Ver Proyecto
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProyectosInvestigacion;

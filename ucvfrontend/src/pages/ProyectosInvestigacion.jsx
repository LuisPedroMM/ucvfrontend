import React from "react";
import "./ProyectosInvestigacion.css";

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
  {
    numero: "Pcol-05-2025",
    coordinador: "Carlos Raúl Maldonado Mota",
    asociados: "María de los Ángeles Mérida Guzmán",
    nombre: "Evaluación de material vegetal por medios de vías de regeneración celulares en ambientes saludables en la región de América Latina y el Caribe por OPUS SEED LLC",
    cadena: "Tomate y chile pimiento",
    region: "Occidente",
    cooperante: "Worldveg",
    entidad: "ICTA",
  },
  {
    numero: "Pcol-06-2025",
    coordinador: "Carlos Raúl Maldonado Mota",
    asociados: "-",
    nombre: "Estudio de la tolerancia y adaptabilidad de líneas de arveja introducidas por OPUS SEED LLC",
    cadena: "Arveja",
    region: "Occidente",
    cooperante: "OPUS SEED LLC",
    entidad: "IICA",
  },
  {
    numero: "Pcol-07-2025",
    coordinador: "Carlos Raúl Maldonado Mota",
    asociados: "-",
    nombre: "Validación del efecto de la resistencia del frijol ejotero a la mosca blanca",
    cadena: "Ejote",
    region: "Occidente",
    cooperante: "AGROSIMSA S.A.",
    entidad: "AGROSIMSA S.A.",
  },
  {
    numero: "Pcol-08-2025",
    coordinador: "Oscar Emir Barrios Coyoy",
    asociados: "Carlos Raúl Maldonado Mota",
    nombre: "Selección y evaluación de clones de papa con tolerancia a plagas, bacterias y temperaturas en el altiplano occidental de Guatemala",
    cadena: "Papa",
    region: "Occidente",
    cooperante: "IICA/CRIA",
    entidad: "IICA/CRIA",
  },
  {
    numero: "Pcol-09-2025",
    coordinador: "Rodolfo Antonio Rodríguez Menjívar",
    asociados: "Carlos Raúl Maldonado Mota",
    nombre: "Evaluación de 18 líneas experimentales de chile cachoanero bajo la metodología participativa con poblaciones segregantes",
    cadena: "Chile Cachoanero",
    region: "Norte",
    cooperante: "IICA-CRIA",
    entidad: "IICA-CRIA",
  },
  {
    numero: "Pcol-10-2025",
    coordinador: "Rodolfo Antonio Rodríguez Menjívar",
    asociados: "-",
    nombre: "Validación de dos líneas de chile cachoanero en colaboración con IICA-CRIA en Cahabón, Alta Verapaz",
    cadena: "Chile Cachoanero",
    region: "Norte",
    cooperante: "IICA-CRIA",
    entidad: "IICA-CRIA",
  },
  {
    numero: "Pcol-11-2025",
    coordinador: "Luis Miguel Salguero Morales",
    asociados: "José Luis Sagüil Barrera, Rodolfo Antonio Rodríguez Menjívar",
    nombre: "Proyecto Triangular KolFACI para Fortalecer la Capacitación en Innovación Hortícola en Zacapa, Guatemala (HORTINNOVA)",
    cadena: "-",
    region: "Oriente",
    cooperante: "INTA Costa Rica/KOICA",
    entidad: "FITTACORI Costa Rica",
  },
  {
    numero: "Pcol-12-2025",
    coordinador: "Angela Nadezhda Nicte Miranda Mijangos",
    asociados: "Jessica Raquel Moscoso Alfaro",
    nombre: "Evaluación de materiales en el Programa Mundial de Alimentos (PMA) por el Centro Internacional de Agricultura Tropical (CIAT)",
    cadena: "-",
    region: "Occidente",
    cooperante: "CIAT",
    entidad: "FUNDIT",
  },
  {
    numero: "Pcol-13-2025",
    coordinador: "Edgar Edgardo Carrillo Ramos",
    asociados: "-",
    nombre: "Investigación con variedades de frijol negro (Phaseolus vulgaris L.) frente al cambio climático.",
    cadena: "Frijol",
    region: "-",
    cooperante: "KoLFACI",
    entidad: "FUNDIT",
  },
  {
    numero: "Pcol-14-2025",
    coordinador: "Moises Orlando Pacheco Son",
    asociados: "Orsy Franklin Chávez Martínez, Erick Ricardo Aguilar Castillo",
    nombre: "Caracterización morfológica, calidad de grano y producción en semilla certificada para promoción y liberación de una nueva variedad de grano amarillo para el Altiplano de Guatemala (Fase I y II)",
    cadena: "Maíz",
    region: "Occidente",
    cooperante: "IICA-CRIA",
    entidad: "IICA-CRIA",
  },
  {
    numero: "Pcol-15-2025",
    coordinador: "Orsy Franklin Chávez Martínez",
    asociados: "Marcelino Chub Choc",
    nombre: "Caracterización morfológica, calidad de grano y producción en semilla certificada para promoción y liberación de una nueva variedad de grano amarillo para el Trópico de Guatemala (ICTA SUPREMA)",
    cadena: "Maíz",
    region: "Oriente/Norte",
    cooperante: "IICA-CRIA",
    entidad: "IICA-CRIA",
  },
  {
    numero: "Pcol-16-2025",
    coordinador: "Erick Ricardo Aguilar Castillo",
    asociados: "-",
    nombre: "Promoción para el consumo de frijol biofortificado en Guatemala",
    cadena: "Frijol",
    region: "Oriente",
    cooperante: "IICA-CRIA",
    entidad: "IICA-CRIA",
  },
  {
    numero: "Pcol-17-2025",
    coordinador: "Astrid Judith Racancoj Coyoy",
    asociados: "Angela Nadezhda Nicte Miranda Mijangos",
    nombre: "Fortalecimiento poblacional de Megalurithrips frijol y generación de tecnología para su manejo.",
    cadena: "Frijol",
    region: "Occidente",
    cooperante: "IICA-CRIA",
    entidad: "IICA-CRIA",
  },
  {
    numero: "Pcol-18-2025",
    coordinador: "Orsy Franklin Chávez Martínez",
    asociados: "Eddy Rodolfo Icetoxcoy Cabrera",
    nombre: "Evaluación de híbridos de maíz biofortificado de los trópicos de Guatemala hacia el norte, oriente y occidente de América Latina y del Caribe",
    cadena: "Maíz",
    region: "Norte/Oriente, Sur/Occidente",
    cooperante: "USAID-Semilla Nueva",
    entidad: "FUNDIT",
  },
  {
    numero: "Pcol-19-2025",
    coordinador: "Luis Antonio Huinca Barrios",
    asociados: "Orsy Franklin Chávez Martínez",
    nombre: "AgriLAC Resiliente: investigación agroalimentaria inclusiva para el desarrollo alimentario, reducción de la migración en Centroamérica y del cambio climático (ALC).",
    cadena: "Arroz, frijol y maíz",
    region: "Norte/Oriente, Sur/Occidente",
    cooperante: "CIAT",
    entidad: "FUNDIT",
  },
  {
    numero: "Pcol-20-2025",
    coordinador: "Delmy Sayury Castillo Crisóstomo",
    asociados: "-",
    nombre: "Fondos de emergencia para Bancos de Germoplasma",
    cadena: "-",
    region: "-",
    cooperante: "FAO",
    entidad: "FAO",
  },
  {
    numero: "Pcol-21-2025",
    coordinador: "Anidar Xavier Orantes Salguero",
    asociados: "-",
    nombre: "Investigación para mejorar la fertilidad del suelo",
    cadena: "-",
    region: "-",
    cooperante: "KoLFACI",
    entidad: "FUNDIT",
  },
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

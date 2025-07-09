import React from "react";
import "./ProyectosInvestigacion.css";

const proyectos = [
  {
    numero: "Pcol-01-2025",
    coordinador: "Leopoldo Calel Mus",
    asociados: "Edilsar Mazariegos Hernández",
    nombre: "Enfrentando retos para mejorar la productividad, calidad, genética y contribuciones ambientales de los sistemas modernos de cacao en América Latina",
    cadena: "Cacao",
    region: "Norte/Sur",
    cooperante: "KolFACI",
    entidad: "FUNDIT",
  },
  {
    numero: "Pcol-02-2025",
    coordinador: "Aroldo Roderico García Vásquez",
    asociados: "Edilsar Mazariegos Hernández, Leopoldo Calel Mus",
    nombre: "Evaluación de tecnologías de poda e identificación de materiales promisorios de café frente al cambio climático en América Latina",
    cadena: "Café",
    region: "Norte/Centro/Sur",
    cooperante: "KolFACI",
    entidad: "FUNDIT",
  },
  {
    numero: "Pcol-03-2025",
    coordinador: "Edilsar Mazariegos Hernández",
    asociados: "-",
    nombre: "Ensayo de validación de la variedad formosana resistente a Fusarium oxisporum f. sp. cubense raza tropical 4-Foc RT4",
    cadena: "-",
    region: "Sur",
    cooperante: "Misión Técnica de Taiwán",
    entidad: "Misión Técnica de Taiwán",
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
    nombre: "Promoción de la diversidad vegetal para medios de vida más resilientes y dietas más saludables en la región de América Látina y el Caribe",
    cadena: "Tomate y chile pimiento",
    region: "Occidente",
    cooperante: "Worldveg",
    entidad: "ICTA",
  },
  {
    numero: "Pcol-06-2025",
    coordinador: "Carlos Raúl Maldonado Mota",
    asociados: "-",
    nombre: "Evaluación de ensayo de adaptabilidad de líneas arvejas desarrolladas  por OPUS SEED LLC",
    cadena: "Arveja",
    region: "Occidente",
    cooperante: "OPUS SEED LLC",
    entidad: "IICA",
  },
  {
    numero: "Pcol-07-2025",
    coordinador: "Carlos Raúl Maldonado Mota",
    asociados: "-",
    nombre: "Estudio de Resistencia de frijol ejotero",
    cadena: "Ejote",
    region: "Occidente",
    cooperante: "AGROSIMA S.A.",
    entidad: "AGROSIMA S.A.",
  },
  {
    numero: "Pcol-08-2025",
    coordinador: "Oscar Emiro Barrios Coyoy",
    asociados: "Carlos Raúl Maldonado Mota",
    nombre: "Selección y evaluación de clones de papa con tolerancia a bajas temperaturas para el altiplano occidental de Guatemala",
    cadena: "Papa",
    region: "Occidente",
    cooperante: "IICA/CRIA",
    entidad: "IICA/CRIA",
  },
  {
    numero: "Pcol-09-2025",
    coordinador: "Rodolfo Antonio Rodríguez Menjívar",
    asociados: "Carlos Raúl Maldonado Mota",
    nombre: "Evaluación de 18 líneas experimentales de chile cahabonero (Capsicum annuum L). Generación de poblaciones segregaste para el mejoramiento del cultivo de chile cahabonero en Guatemala",
    cadena: "Chile Cahabonero",
    region: "Norte",
    cooperante: "IICA-CRIA",
    entidad: "IICA-CRIA",
  },
  {
    numero: "Pcol-10-2025",
    coordinador: "Rodolfo Antonio Rodríguez Menjívar",
    asociados: "-",
    nombre: "Validación de dos líneas avanzadas de chile cahabonero en la localidad de Santa María Cahabon, Alta Verapaz",
    cadena: "Chile Cahabonero",
    region: "Norte",
    cooperante: "IICA-CRIA",
    entidad: "IICA-CRIA",
  },
  {
    numero: "Pcol-11-2025",
    coordinador: "Luis Miguel Salguero Morales",
    asociados: "José Luis Sagüil Barrera, Rodolfo Antonio Rodríguez Menjívar, Virginia Adelsuvia Piril Gaitán",
    nombre: "Proyecto Triangular Fase ll para Fortalecer la Capacitación en Tecnología Hortícola en Zacapa, Guatemala (HORTINNOVA)",
    cadena: "-",
    region: "Oriente",
    cooperante: "INTA Costa Rica/KOICA",
    entidad: "FITTACORI Costa Rica",
  },
  {
    numero: "Pcol-12-2025",
    coordinador: "Angela Nadezhda Nicte Miranda Mijangos",
    asociados: "Jessica Raquel Moscoso Alfaro",
    nombre: "Acuerdo sobre el terreno entre el Programa Mundial de Alimentos (PMA) y el Centro Internacional de Agricultura Tropical (CIAT)",
    cadena: "-",
    region: "Occidente",
    cooperante: "CIAT",
    entidad: "FUNDIT",
  },
  {
    numero: "Pcol-13-2025",
    coordinador: "Edgar Edgardo Carrillo Ramos",
    asociados: "-",
    nombre: "Investigación sobre la tolerancia a la sequía del frijol común (Phaseolus vulgaris L.) frente al cambio climático.",
    cadena: "Frijol",
    region: "Oriente",
    cooperante: "KoLFACI",
    entidad: "FUNDIT",
  },
  {
    numero: "Pcol-14-2025",
    coordinador: "Moises Orlando Pacheco Son",
    asociados: "Orsy Franklin Chávez Martínez, Erick Ricardo Aguilar Castillo",
    nombre: "Caracterización agromorfológica, calidad de grano y tortilla, y producción de semilla para promoción y liberación de una nueva variedad de grano blanco para el Altiplano de Guatemala (Fase I y II)",
    cadena: "Maíz",
    region: "Occidente",
    cooperante: "IICA-CRIA",
    entidad: "IICA-CRIA",
  },
  {
    numero: "Pcol-15-2025",
    coordinador: "Orsy Franklin Chávez Martínez",
    asociados: "Marcelino Chub Choc, Erick Ricardo Aguilar Castillo",
    nombre: "Caracterización agromorfológica, calidad de grano y producción de semilla certificada para promoción y liberación de una nueva variedad de maíz de grano amarillo para el Trópico de Guatemala (ICTA SUPREMA)",
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
    asociados: "Angela Nadezhda Nicte Miranda Mijangos,",
    nombre: "Diagnóstico del comportamiento poblacional de Megalurothripsusitatus en el cultivo del frijol y generación de tecnología para su manejo.",
    cadena: "Frijol",
    region: "Occidente",
    cooperante: "IICA-CRIA",
    entidad: "IICA-CRIA",
  },
  {
    numero: "Pcol-18-2025",
    coordinador: "Orsy Franklin Chávez Martínez",
    asociados: "Eddy Rodolfo Ixcotoyac Cabrera",
    nombre: "Evaluación y validación de híbridos de maíz biofortificado, en localidades del norte, oriente y occidente de Guatemala en campos de agricultores y en programas de alimentación escolar",
    cadena: "Maíz",
    region: "Norte/Oriente, Sur/Occidente",
    cooperante: "USAID-Semilla Nueva",
    entidad: "FUNDIT",
  },
  {
    numero: "Pcol-19-2025",
    coordinador: "Luis Antonio Huinac Barrios",
    asociados: "Angela Nadezhda Nicte Miranda Mijangos, Orsy Franklin Chávez Martínez",
    nombre: "AgriLAC Resiliente: Sistemas de innovación agroalimentaria resilientes que impulsan la seguridad alimentaria, el crecimiento inclusivo y la reducción de la emigración en América Latina y el Caribe (ALC).",
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
    nombre: "Investigación para mejorar la fertilidad del suelo mediante la aplicación de tecnología de transformación del estiércol en abono",
    cadena: "-",
    region: "-",
    cooperante: "KoLFACI",
    entidad: "FUNDIT",
  },
  {
    numero: "Pcol-22-2025",
    coordinador: "Anidar Xavier Orantes Salguero",
    asociados: "-",
    nombre: "Reducción de las emisiones de gases de efecto invernadero en los suelos agrícolas (KoLFACI Optimo)",
    cadena: "-",
    region: "-",
    cooperante: "KoLFACI",
    entidad: "IICA",
  },
];

const ProyectosInvestigacion = () => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-dark">Proyectos por Colaboración Interinstitucional 2025</h2>
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

import React, { useState, useEffect } from "react";
import axios from "axios";
import html2pdf from "html2pdf.js";
import "./EjecucionFinancieraProyectosInvestigacion.css";

const EjecucionFinancieraProyectosInvestigacion = () => {
  const [registros, setRegistros] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [paginaActual, setPaginaActual] = useState(1);
  const registrosPorPagina = 10;
  const [registroActual, setRegistroActual] = useState(null);
  const [modo, setModo] = useState("agregar");
  const [cargando, setCargando] = useState(true);
  const [formData, setFormData] = useState({
    fuente: "",
    descripcion: "",
    investigador: "",
    region: "",
    ejec_total: "",
    anio: "",
    presupuesto_asignado: ""
  });

  // Cargar registros desde la BD al montar el componente
  useEffect(() => {
    cargarRegistros();
  }, []);

  const cargarRegistros = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/ejecucion-financiera");
      setRegistros(response.data);
    } catch (error) {
      console.error("Error al cargar registros:", error);
      alert("Error al cargar registros desde la base de datos.");
    } finally {
      setCargando(false);
    }
  };

  const abrirModal = (modo, registro = null) => {
    setModo(modo);
    setRegistroActual(registro);
    if (modo === "agregar") {
      setFormData({
        fuente: "",
        descripcion: "",
        investigador: "",
        region: "",
        ejec_total: "",
        anio: "",
        presupuesto_asignado: ""
      });
    } else if (modo === "editar" && registro) {
      setFormData({
        fuente: registro.fuente || "",
        descripcion: registro.descripcion || "",
        investigador: registro.investigador || "",
        region: registro.region || "",
        ejec_total: registro.ejec_total || "",
        anio: registro.anio || "",
        presupuesto_asignado: registro.presupuesto_asignado || ""
      });
    }
    const modal = new bootstrap.Modal(document.getElementById("modalRegistro"));
    modal.show();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const datos = Object.fromEntries(new FormData(e.target).entries());

    // Convertir valores vacíos a undefined para que el backend los maneje como valores por defecto
    const datosLimpios = {};
    for (const [key, value] of Object.entries(datos)) {
      datosLimpios[key] = value === "" ? undefined : value;
    }

    try {
      if (modo === "editar") {
        await axios.put(`http://localhost:5000/api/ejecucion-financiera/${registroActual.id}`, datosLimpios);
        alert("✅ Registro actualizado correctamente.");
      } else {
        await axios.post("http://localhost:5000/api/ejecucion-financiera", datosLimpios);
        alert("✅ Registro creado correctamente.");
      }
      cargarRegistros();
      bootstrap.Modal.getInstance(document.getElementById("modalRegistro")).hide();
    } catch (error) {
      console.error("Error al guardar registro:", error);
      alert("❌ Error al guardar el registro.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const eliminarRegistro = async (id) => {
    if (confirm("¿Eliminar este registro?")) {
      try {
        await axios.delete(`http://localhost:5000/api/ejecucion-financiera/${id}`);
        alert("✅ Registro eliminado correctamente.");
        cargarRegistros();
      } catch (error) {
        console.error("Error al eliminar registro:", error);
        alert("❌ Error al eliminar el registro.");
      }
    }
  };

  const exportarPDF = () => {
    const acciones = document.querySelectorAll(".col-acciones");
    acciones.forEach(el => el.classList.add("d-none"));

    const element = document.getElementById("tabla-registros");
    html2pdf().from(element).set({
      margin: 0.3,
      filename: "ejecucion-financiera-proyectos-investigacion.pdf",
      html2canvas: { scale: 2 },
      jsPDF: { format: "a3", orientation: "landscape" }
    }).save().then(() => {
      acciones.forEach(el => el.classList.remove("d-none"));
    });
  };

  const filtrarRegistros = registros.filter(r =>
    Object.values(r).some(valor =>
      valor?.toString().toLowerCase().includes(busqueda.toLowerCase())
    )
  );

  const totalPaginas = Math.ceil(filtrarRegistros.length / registrosPorPagina);
  const registrosPagina = filtrarRegistros.slice(
    (paginaActual - 1) * registrosPorPagina,
    paginaActual * registrosPorPagina
  );


  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-dark">Ejecución Financiera Proyectos de Investigación</h2>

      <div className="d-flex justify-content-between mb-3 align-items-center flex-wrap gap-2">
        <button className="btn btn-success" onClick={() => abrirModal("agregar")}>Agregar Registro</button>
        <input
          type="text"
          placeholder="🔎 Buscar por cualquier campo..."
          className="form-control w-50"
          value={busqueda}
          onChange={(e) => {
            setBusqueda(e.target.value);
            setPaginaActual(1);
          }}
        />
        <div>
          <button className="btn btn-outline-primary me-2" onClick={exportarPDF}>Exportar PDF</button>
        </div>
      </div>

      <div className="table-responsive" id="tabla-registros">
        <table className="table table-bordered table-striped table-hover align-middle shadow-sm">
          <thead className="table-dark text-center">
            <tr>
              <th>Proyecto</th>
              <th>Presupuesto Asignado</th>
              <th>Porcentaje</th>
              <th>Fuente Financiamiento</th>
              <th>Año</th>
              <th>Investigador</th>
              <th>Región</th>
              <th className="col-acciones">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {registrosPagina.map((r, i) => (
              <tr key={i}>
                <td>{r.descripcion}</td>
                <td className="text-end">Q {r.presupuesto_asignado.toLocaleString()}</td>
                <td className="text-center">{r.ejec_total}</td>
                <td>{r.fuente}</td>
                <td className="text-center">{r.anio}</td>
                <td>{r.investigador}</td>
                <td>{r.region}</td>
                <td className="col-acciones">
                  <button className="btn btn-sm btn-primary me-2" onClick={() => abrirModal("editar", r)}>Editar</button>
                  <button className="btn btn-sm btn-danger" onClick={() => eliminarRegistro(r.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Paginación */}
      <nav className="mt-3 d-flex justify-content-center">
        <ul className="pagination">
          {[...Array(totalPaginas)].map((_, i) => (
            <li key={i} className={`page-item ${paginaActual === i + 1 ? "active" : ""}`}>
              <button className="page-link" onClick={() => setPaginaActual(i + 1)}>
                {i + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Modal */}
      <div className="modal fade" id="modalRegistro" tabIndex="-1">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <div className="modal-header">
                <h5 className="modal-title">
                  {modo === "editar" ? "Editar Registro" : "Agregar Registro"}
                </h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" />
              </div>
              <div className="modal-body">
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Fuente</label>
                    <input name="fuente" value={formData.fuente} onChange={handleInputChange} className="form-control" required />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Descripción (Proyecto)</label>
                    <textarea name="descripcion" value={formData.descripcion} onChange={handleInputChange} className="form-control" rows={2} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Investigador</label>
                    <input name="investigador" value={formData.investigador} onChange={handleInputChange} className="form-control" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Región</label>
                    <input name="region" value={formData.region} onChange={handleInputChange} className="form-control" />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Porcentaje</label>
                    <input name="ejec_total" type="number" step="0.01" value={formData.ejec_total} onChange={handleInputChange} className="form-control" />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Año</label>
                    <input name="anio" type="number" value={formData.anio} onChange={handleInputChange} className="form-control" />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Presupuesto Asignado</label>
                    <input name="presupuesto_asignado" type="text" value={formData.presupuesto_asignado} onChange={handleInputChange} className="form-control" />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" type="button" data-bs-dismiss="modal">Cancelar</button>
                <button className="btn btn-primary" type="submit">
                  {modo === "editar" ? "Actualizar" : "Guardar"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EjecucionFinancieraProyectosInvestigacion;
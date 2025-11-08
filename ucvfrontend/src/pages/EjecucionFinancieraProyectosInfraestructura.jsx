import React, { useState, useEffect } from "react";
import axios from "axios";
import html2pdf from "html2pdf.js";
import "./EjecucionFinancieraProyectosInfraestructura.css";

const EjecucionFinancieraProyectosInfraestructura = () => {
  const [registros, setRegistros] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [paginaActual, setPaginaActual] = useState(1);
  const registrosPorPagina = 10;
  const [registroActual, setRegistroActual] = useState(null);
  const [modo, setModo] = useState("agregar");
  const [cargando, setCargando] = useState(true);
  const [formData, setFormData] = useState({
    fuente: "",
    proyecto_descrip: "",
    anio: "",
    presupuesto: "",
    imagenes: []
  });
  const [imagenesPreview, setImagenesPreview] = useState([]);
  const [imagenesActuales, setImagenesActuales] = useState([]);
  const [imagenesSeleccionadas, setImagenesSeleccionadas] = useState([]);

  // Cargar registros desde la BD al montar el componente
  useEffect(() => {
    cargarRegistros();
  }, []);

  const cargarRegistros = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/ejecucion-financiera-infra");
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
        proyecto_descrip: "",
        anio: "",
        presupuesto: "",
        imagenes: []
      });
      setImagenesPreview([]);
      setImagenesSeleccionadas([]);
    } else if (modo === "editar" && registro) {
      setFormData({
        fuente: registro.fuente || "",
        proyecto_descrip: registro.proyecto_descrip || "",
        anio: registro.anio || "",
        presupuesto: registro.presupuesto || "",
        imagenes: registro.imagenes || []
      });
      setImagenesActuales(registro.imagenes || []);
      setImagenesPreview([]);
      setImagenesSeleccionadas([]);
    }
    const modal = new bootstrap.Modal(document.getElementById("modalRegistro"));
    modal.show();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();

    // Agregar campos de texto
    formDataToSend.append("fuente", formData.fuente);
    formDataToSend.append("proyecto_descrip", formData.proyecto_descrip);
    formDataToSend.append("anio", formData.anio);
    formDataToSend.append("presupuesto", formData.presupuesto);

    // Agregar imágenes nuevas
    imagenesSeleccionadas.forEach((file, index) => {
      formDataToSend.append("imagenes", file);
    });

    try {
      if (modo === "editar") {
        await axios.put(`http://localhost:5000/api/ejecucion-financiera-infra/${registroActual.id}`, formDataToSend, {
          headers: { "Content-Type": "multipart/form-data" }
        });
        alert("✅ Registro actualizado correctamente.");
      } else {
        await axios.post("http://localhost:5000/api/ejecucion-financiera-infra", formDataToSend, {
          headers: { "Content-Type": "multipart/form-data" }
        });
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

  const handleImagenesChange = (e) => {
    const files = Array.from(e.target.files);
    setImagenesSeleccionadas(files);
    const previews = files.map(file => URL.createObjectURL(file));
    setImagenesPreview(previews);
  };

  const eliminarRegistro = async (id) => {
    if (confirm("¿Eliminar este registro?")) {
      try {
        await axios.delete(`http://localhost:5000/api/ejecucion-financiera-infra/${id}`);
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
      filename: "ejecucion-financiera-proyectos-infraestructura.pdf",
      html2canvas: { scale: 2 },
      jsPDF: { format: "a3", orientation: "landscape" }
    }).save().then(() => {
      acciones.forEach(el => el.classList.remove("d-none"));
    });
  };

  const abrirGaleriaImagenes = (imagenes) => {
    setImagenesActuales(imagenes);
    const modal = new bootstrap.Modal(document.getElementById("modalGaleria"));
    modal.show();
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

  if (cargando) {
    return <div className="text-center mt-5">Cargando...</div>;
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-dark">Ejecución Financiera Proyectos de Infraestructura</h2>

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
              <th>Presupuesto</th>
              <th>Fuente Financiamiento</th>
              <th>Año</th>
              <th>Imágenes</th>
              <th className="col-acciones">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {registrosPagina.map((r, i) => (
              <tr key={i}>
                <td>{r.proyecto_descrip}</td>
                <td className="text-end">Q {(r.presupuesto || 0).toLocaleString()}</td>
                <td>{r.fuente}</td>
                <td className="text-center">{r.anio}</td>
                <td className="text-center">
                  {r.imagenes && r.imagenes.length > 0 ? (
                    <button
                      className="btn btn-sm btn-info"
                      onClick={() => abrirGaleriaImagenes(r.imagenes)}
                    >
                      Ver ({r.imagenes.length})
                    </button>
                  ) : (
                    <span className="text-muted">Sin imágenes</span>
                  )}
                </td>
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

      {/* Modal para agregar/editar */}
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
                    <textarea name="proyecto_descrip" value={formData.proyecto_descrip} onChange={handleInputChange} className="form-control" rows={2} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Año</label>
                    <input name="anio" type="number" value={formData.anio} onChange={handleInputChange} className="form-control" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Presupuesto</label>
                    <input name="presupuesto" type="text" value={formData.presupuesto} onChange={handleInputChange} className="form-control" />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Imágenes</label>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleImagenesChange}
                      className="form-control"
                    />
                    {modo === "editar" && imagenesActuales.length > 0 && (
                      <div className="mt-2">
                        <small className="text-muted">Imágenes actuales:</small>
                        <div className="d-flex flex-wrap gap-2 mt-1">
                          {imagenesActuales.map((img, idx) => (
                            <img key={idx} src={`http://localhost:5000${img}`} alt={`Imagen ${idx + 1}`} style={{ width: "60px", height: "60px", objectFit: "cover" }} />
                          ))}
                        </div>
                      </div>
                    )}
                    {imagenesPreview.length > 0 && (
                      <div className="mt-2">
                        <small className="text-muted">Nuevas imágenes:</small>
                        <div className="d-flex flex-wrap gap-2 mt-1">
                          {imagenesPreview.map((preview, idx) => (
                            <img key={idx} src={preview} alt={`Preview ${idx + 1}`} style={{ width: "60px", height: "60px", objectFit: "cover" }} />
                          ))}
                        </div>
                      </div>
                    )}
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

      {/* Modal para galería de imágenes */}
      <div className="modal fade" id="modalGaleria" tabIndex="-1">
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Imágenes del Proyecto</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" />
            </div>
            <div className="modal-body">
              <div className="row g-3">
                {imagenesActuales.map((img, idx) => (
                  <div key={idx} className="col-md-4">
                    <img
                      src={`http://localhost:5000${img}`}
                      alt={`Imagen ${idx + 1}`}
                      className="img-fluid rounded"
                      style={{ width: "100%", height: "200px", objectFit: "cover" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EjecucionFinancieraProyectosInfraestructura;
import React, { useEffect, useState, useRef } from "react";
import { FaTrashAlt, FaUserEdit, FaUserShield } from "react-icons/fa";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Asegura el JS de Bootstrap



const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);
  const [formData, setFormData] = useState({ nombre: "", rol: "", estado: "" });
  const modalRef = useRef();

  useEffect(() => {
    obtenerUsuarios();
  }, []);

  const obtenerUsuarios = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/usuarios");
      const data = await res.json();
      setUsuarios(data);
    } catch {
      alert("Error al obtener usuarios.");
    }
  };

  const eliminarUsuario = async (id) => {
    if (!window.confirm("¿Seguro que deseas eliminar este usuario?")) return;
    try {
      const res = await fetch(`http://localhost:5000/api/auth/usuarios/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (res.ok) {
        alert(data.message);
        obtenerUsuarios();
      } else {
        alert("Error: " + data.message);
      }
    } catch {
      alert("Error de red");
    }
  };

  const abrirModalEditar = (usuario) => {
    setUsuarioSeleccionado(usuario);
    setFormData({
      nombre: usuario.Nomb_Usuario,
      rol: usuario.Rol,
      estado: usuario.Estado_Usuario,
    });

    const modal = new window.bootstrap.Modal(modalRef.current);
    modal.show();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const guardarCambios = async () => {
    const { nombre, rol, estado } = formData;
    if (!nombre || !rol || !estado) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    try {
      const res = await fetch(`http://localhost:5000/api/auth/usuarios/${usuarioSeleccionado.Id_Usuario}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre,
          rol,
          estado,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        alert(data.message);
        obtenerUsuarios();
        const modal = window.bootstrap.Modal.getInstance(modalRef.current);
        modal.hide();
      } else {
        alert(data.message);
      }
    } catch {
      alert("Error al guardar cambios.");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-primary mb-4">
        <FaUserShield className="me-2" />
        Usuarios Registrados
      </h2>

      <div className="table-responsive">
        <table className="table table-hover align-middle shadow-sm">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>👤 Nombre</th>
              <th>📧 Correo</th>
              <th>🎖 Rol</th>
              <th>📌 Estado</th>
              <th>⚙️ Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center">
                  No hay usuarios registrados.
                </td>
              </tr>
            ) : (
              usuarios.map((u, index) => (
                <tr key={u.Id_Usuario}>
                  <td>{index + 1}</td>
                  <td>{u.Nomb_Usuario}</td>
                  <td>{u.Correo_Usuario}</td>
                  <td>
                    <span className={`badge bg-${u.Rol === "admin" ? "warning" : "info"}`}>{u.Rol}</span>
                  </td>
                  <td>
                    <span className={`badge bg-${u.Estado_Usuario === "activo" ? "success" : "secondary"}`}>
                      {u.Estado_Usuario}
                    </span>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-outline-primary me-2" onClick={() => abrirModalEditar(u)}>
                      <FaUserEdit /> Editar
                    </button>
                    <button className="btn btn-sm btn-outline-danger" onClick={() => eliminarUsuario(u.Id_Usuario)}>
                      <FaTrashAlt /> Eliminar
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* MODAL DE EDICIÓN */}
      <div className="modal fade" ref={modalRef} tabIndex="-1" id="editarModal">
        <div className="modal-dialog">
          <div className="modal-content shadow">
            <div className="modal-header bg-dark text-white">
              <h5 className="modal-title">✏️ Editar Usuario</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <label className="form-label">Nombre</label>
              <input type="text" className="form-control mb-2" name="nombre" value={formData.nombre} onChange={handleChange} />

              <label className="form-label">Rol</label>
              <select className="form-select mb-2" name="rol" value={formData.rol} onChange={handleChange}>
                <option value="usuario">Usuario</option>
                <option value="admin">Admin</option>
              </select>

              <label className="form-label">Estado</label>
              <select className="form-select" name="estado" value={formData.estado} onChange={handleChange}>
                <option value="activo">Activo</option>
                <option value="inactivo">Inactivo</option>
              </select>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              <button className="btn btn-success" onClick={guardarCambios}>Guardar cambios</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usuarios;

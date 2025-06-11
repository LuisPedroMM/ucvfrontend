import React, { useEffect, useState } from "react";

const ListaUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    cargarUsuarios();
  }, []);

  const cargarUsuarios = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/usuarios");
      const data = await res.json();

      if (res.ok) {
        setUsuarios(data);
      } else {
        alert("⚠️ Error al obtener usuarios.");
      }
    } catch (err) {
      alert("❌ Error de red al obtener usuarios.");
    } finally {
      setCargando(false);
    }
  };

  const eliminarUsuario = async (id) => {
    if (!window.confirm("¿Estás seguro de que deseas eliminar este usuario?")) return;

    try {
      const res = await fetch(`http://localhost:5000/api/auth/usuarios/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!res.ok) {
        alert("❌ " + (data.message || "Error al eliminar usuario."));
      } else {
        alert("✅ Usuario eliminado correctamente.");
        cargarUsuarios();
      }
    } catch (err) {
      alert("❌ Error de red al intentar eliminar.");
    }
  };

  return (
    <div className="container mt-5">
      <h3 className="mb-4">👥 Usuarios Registrados</h3>

      {cargando ? (
        <p>Cargando usuarios...</p>
      ) : (
        <table className="table table-bordered table-striped">
          <thead className="table-light">
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Rol</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.length === 0 ? (
              <tr>
                <td colSpan="6">No hay usuarios registrados.</td>
              </tr>
            ) : (
              usuarios.map((usuario, index) => (
                <tr key={usuario.Id_Usuario}>
                  <td>{index + 1}</td>
                  <td>{usuario.Nomb_Usuario}</td>
                  <td>{usuario.Correo_Usuario}</td>
                  <td>{usuario.Rol}</td>
                  <td>{usuario.Estado_Usuario}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => eliminarUsuario(usuario.Id_Usuario)}
                    >
                      🗑️ Eliminar
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ListaUsuarios;

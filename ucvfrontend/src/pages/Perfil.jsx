import React, { useState } from "react";
import defaultAvatar from "../assets/avatar-default.png";

const Perfil = () => {
  const usuarioGuardado = JSON.parse(localStorage.getItem("user"));
  const [userData, setUserData] = useState({
    nombre: usuarioGuardado?.nombre || "",
    direccion: "",
    telefono: "",
    notificacionesCorreo: true,
    notificacionesSistema: true,
  });

  const [fotoPerfil, setFotoPerfil] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUserData({
      ...userData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFotoPerfil(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:5000/api/usuarios/${usuarioGuardado.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
  
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Error al actualizar");
  
      alert("✅ Cambios guardados en la base de datos.");
    } catch (err) {
      alert("❌ Error: " + err.message);
    }
  };

  const cambiarContraseña = () => {
    alert("Redirigir a formulario de cambio de contraseña");
    // Aquí podrías abrir un modal o redirigir a una vista
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h3 className="mb-4">👤 Mi perfil</h3>

        <div className="d-flex align-items-center mb-4">
          <img
            src={fotoPerfil || defaultAvatar}
            alt="Foto de perfil"
            className="rounded-circle"
            style={{ width: "100px", height: "100px", objectFit: "cover" }}
          />
          <div className="ms-3">
            <label className="form-label">
              Cambiar foto de perfil:
              <input type="file" accept="image/*" onChange={handleFotoChange} className="form-control mt-1" />
            </label>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nombre completo</label>
            <input
              type="text"
              className="form-control"
              name="nombre"
              value={userData.nombre}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Dirección</label>
            <input
              type="text"
              className="form-control"
              name="direccion"
              value={userData.direccion}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Teléfono</label>
            <input
              type="text"
              className="form-control"
              name="telefono"
              value={userData.telefono}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <h5 className="mb-2">🔔 Preferencias de notificación</h5>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="notificacionesCorreo"
                checked={userData.notificacionesCorreo}
                onChange={handleChange}
              />
              <label className="form-check-label">Recibir notificaciones por correo</label>
            </div>
            <div className="form-check mt-1">
              <input
                type="checkbox"
                className="form-check-input"
                name="notificacionesSistema"
                checked={userData.notificacionesSistema}
                onChange={handleChange}
              />
              <label className="form-check-label">Mostrar notificaciones en el sistema</label>
            </div>
          </div>

          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-success">
              💾 Guardar cambios
            </button>
            <button type="button" className="btn btn-warning" onClick={cambiarContraseña}>
              🔐 Cambiar contraseña
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Perfil;

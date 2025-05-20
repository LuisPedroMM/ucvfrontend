import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import defaultAvatar from "../assets/avatar-default.png";

const Perfil = () => {
  const navigate = useNavigate();
  const usuarioGuardado = JSON.parse(localStorage.getItem("user"));

  const [userData, setUserData] = useState({
    nombre: "",
    direccion: "",
    telefono: "",
    notificacionesCorreo: true,
    notificacionesSistema: true,
  });

  const [fotoPerfil, setFotoPerfil] = useState(null);

  useEffect(() => {
    if (usuarioGuardado) {
      // Obtener datos del backend si deseas precargarlos desde base
      setUserData((prev) => ({
        ...prev,
        nombre: usuarioGuardado.nombre,
        
      }));

      // Construir ruta de foto si existe
      if (usuarioGuardado.fotoPerfil) {
        setFotoPerfil(`http://localhost:5000${usuarioGuardado.fotoPerfil}`);
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUserData({
      ...userData,
      [name]: type === "checkbox" ? checked : value,
    });
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

      const text = await res.text();
      const data = text ? JSON.parse(text) : {};
      if (!res.ok) throw new Error(data.message || "Error al actualizar");
      alert("✅ Cambios guardados en la base de datos.");
    } catch (err) {
      alert("❌ Error: " + err.message);
    }
  };

  const handleFotoUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("fotoPerfil", file);

    try {
      const res = await fetch(`http://localhost:5000/api/auth/usuarios/${usuarioGuardado.id}/foto`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        setFotoPerfil("http://localhost:5000" + data.ruta);
        alert("✅ Foto actualizada");
      } else {
        alert("❌ Error al subir imagen: " + data.message);
      }
    } catch (err) {
      alert("❌ Error de red al subir imagen");
    }
  };

  const cambiarContraseña = () => {
    navigate("/cambiar-contraseña");
  };

  const handleGuardarCambios = async (e) => {
    e.preventDefault();
  
    try {
      const res = await fetch(`http://localhost:5000/api/auth/usuarios/${usuarioGuardado.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: fullName,
          direccion: direccion,
          telefono: telefono,
          notificacionesCorreo: notificarCorreo,
          notificacionesSistema: notificarSistema,
        }),
      });
  
      const contentType = res.headers.get("content-type");
  
      if (!res.ok) {
        const text = await res.text();
        console.error("❌ Error al guardar perfil:", text);
        alert("Error al guardar los cambios.");
        return;
      }
  
      if (contentType && contentType.includes("application/json")) {
        const data = await res.json();
        alert(data.message || "Cambios guardados correctamente.");
      } else {
        alert("Respuesta inesperada del servidor.");
      }
    } catch (error) {
      console.error("❌ Error de red:", error);
      alert("Ocurrió un error al intentar guardar.");
    }
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
            style={{ width: "100px", height: "100px", objectFit: "cover", border: "2px solid #ccc" }}
          />
          <div className="ms-3">
            <label className="form-label">
              Cambiar foto de perfil:
              <input type="file" accept="image/*" onChange={handleFotoUpload} className="form-control mt-1" />
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
          <button className="btn btn-success" onClick={handleGuardarCambios}>
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

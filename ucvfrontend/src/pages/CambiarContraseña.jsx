import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const CambiarContraseña = () => {
  const usuario = JSON.parse(localStorage.getItem("user"));
  const [actual, setActual] = useState("");
  const [nueva, setNueva] = useState("");
  const [confirmar, setConfirmar] = useState("");

  const [verActual, setVerActual] = useState(false);
  const [verNueva, setVerNueva] = useState(false);
  const [verConfirmar, setVerConfirmar] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!actual || !nueva || !confirmar) {
      return alert("⚠️ Todos los campos son obligatorios.");
    }

    if (nueva !== confirmar) {
      return alert("⚠️ Las contraseñas no coinciden.");
    }

    try {
      const res = await fetch(`http://localhost:5000/api/auth/usuarios/${usuario.id}/cambiar-contrasena`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ actual, nueva }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Error al actualizar.");

      alert("✅ Contraseña actualizada correctamente.");
      setActual("");
      setNueva("");
      setConfirmar("");
    } catch (err) {
      alert("❌ " + err.message);
    }
  };

  const inputStyle = { position: "relative" };
  const iconBtnStyle = {
    position: "absolute",
    top: "50%",
    right: 10,
    transform: "translateY(-50%)",
    background: "none",
    border: "none",
    cursor: "pointer"
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h3 className="mb-4">🔐 Cambiar contraseña</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3" style={inputStyle}>
            <input
              type={verActual ? "text" : "password"}
              className="form-control"
              placeholder="Contraseña actual"
              value={actual}
              onChange={(e) => setActual(e.target.value)}
            />
            <button type="button" onClick={() => setVerActual(!verActual)} style={iconBtnStyle}>
              {verActual ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <div className="mb-3" style={inputStyle}>
            <input
              type={verNueva ? "text" : "password"}
              className="form-control"
              placeholder="Nueva contraseña"
              value={nueva}
              onChange={(e) => setNueva(e.target.value)}
            />
            <button type="button" onClick={() => setVerNueva(!verNueva)} style={iconBtnStyle}>
              {verNueva ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <div className="mb-3" style={inputStyle}>
            <input
              type={verConfirmar ? "text" : "password"}
              className="form-control"
              placeholder="Confirmar nueva contraseña"
              value={confirmar}
              onChange={(e) => setConfirmar(e.target.value)}
            />
            <button type="button" onClick={() => setVerConfirmar(!verConfirmar)} style={iconBtnStyle}>
              {verConfirmar ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <button type="submit" className="btn btn-primary w-100">Actualizar</button>
        </form>
      </div>
    </div>
  );
};

export default CambiarContraseña;

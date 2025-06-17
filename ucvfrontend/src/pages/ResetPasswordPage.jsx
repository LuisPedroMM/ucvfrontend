import React, { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const ResetPasswordPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get("token");

  const [nueva, setNueva] = useState("");
  const [confirmar, setConfirmar] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nueva || !confirmar) {
      setMensaje("⚠️ Todos los campos son obligatorios.");
      return;
    }

    if (nueva !== confirmar) {
      setMensaje("⚠️ Las contraseñas no coinciden.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, nueva }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("✅ Contraseña actualizada. Ahora inicia sesión.");
        navigate("/login");
      } else {
        setMensaje(data.message || "❌ Error al restablecer la contraseña.");
      }
    } catch (error) {
      setMensaje("❌ Error de red.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: "100%", maxWidth: "400px" }}>
        <h4 className="text-center mb-3">🔒 Restablecer contraseña</h4>
        {mensaje && <div className="alert alert-danger">{mensaje}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Nueva contraseña</label>
            <input
              type="password"
              className="form-control"
              value={nueva}
              onChange={(e) => setNueva(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label>Confirmar nueva contraseña</label>
            <input
              type="password"
              className="form-control"
              value={confirmar}
              onChange={(e) => setConfirmar(e.target.value)}
              required
            />
          </div>
          <button className="btn btn-primary w-100">Restablecer</button>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordPage;

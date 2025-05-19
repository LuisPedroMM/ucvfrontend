import React, { useState } from "react";

const CambiarContraseña = () => {
  const [actual, setActual] = useState("");
  const [nueva, setNueva] = useState("");
  const [confirmar, setConfirmar] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (nueva !== confirmar) return alert("Las contraseñas no coinciden");

    try {
      const res = await fetch("http://localhost:5000/api/auth/change-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: user.id,
          actual,
          nueva,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      alert("✅ Contraseña actualizada con éxito");
    } catch (err) {
      alert("❌ " + err.message);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow">
        <h3 className="mb-4">🔐 Cambiar contraseña</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Contraseña actual</label>
            <input type="password" className="form-control" value={actual} onChange={(e) => setActual(e.target.value)} />
          </div>
          <div className="mb-3">
            <label>Nueva contraseña</label>
            <input type="password" className="form-control" value={nueva} onChange={(e) => setNueva(e.target.value)} />
          </div>
          <div className="mb-3">
            <label>Confirmar nueva contraseña</label>
            <input type="password" className="form-control" value={confirmar} onChange={(e) => setConfirmar(e.target.value)} />
          </div>
          <button className="btn btn-primary">Actualizar</button>
        </form>
      </div>
    </div>
  );
};

export default CambiarContraseña;

import React, { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const ResetPasswordPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get("token");

  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/auth/reset-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, newPassword }),
    });

    const data = await res.json();

    if (res.ok) {
      alert(data.message);
      navigate("/login");
    } else {
      setMessage(data.message || "Error al restablecer contraseña.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: "22rem" }}>
        <h3 className="text-center mb-3">Restablecer contraseña</h3>
        {message && <div className="alert alert-danger">{message}</div>}
        <form onSubmit={handleReset}>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Nueva contraseña"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <button className="btn btn-primary w-100" type="submit">
            Restablecer
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordPage;

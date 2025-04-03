import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/icta.png";
import "bootstrap/dist/css/bootstrap.min.css";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");

  const handleResetPassword = async (e) => {
    e.preventDefault();
  
    try {
      const res = await fetch("http://localhost:5000/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
  
      const data = await res.json();
  
      if (res.ok) {
        alert("Correo de recuperación enviado.");
      } else {
        alert(data.message || "Error al enviar el correo.");
      }
    } catch (error) {
      alert("Error de conexión con el servidor.");
      console.error(error);
    }
  };
  

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="text-center">
        <img src={logo} alt="ICTA Logo" style={{ width: "150px", marginBottom: "20px" }} />
        <div className="card p-4 shadow" style={{ width: "22rem" }}>
          <h3 className="text-center mb-3">Recuperar Contraseña</h3>
          <p className="text-center">Ingresa tu correo y te enviaremos instrucciones.</p>
          <form onSubmit={handleResetPassword}>
            <div className="mb-3">
              <label className="form-label">Correo Electrónico</label>
              <input
                type="email"
                className="form-control"
                placeholder="usuario@ejemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-warning w-100">
              Enviar Correo
            </button>
          </form>
          <div className="text-center mt-3">
            <Link to="/login" className="fw-bold">Volver al Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;

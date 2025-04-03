import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/icta.png";

const AuthForm = ({ isLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    // Validación simple
    if (!email || !password || (!isLogin && !fullName)) {
      setError("Por favor, completa todos los campos.");
      return;
    }

    const url = isLogin
      ? "http://localhost:5000/api/auth/login"
      : "http://localhost:5000/api/auth/register";

    const payload = isLogin
      ? { email, password }
      : { fullName, email, password };

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Error en la solicitud.");
        return;
      }

      if (isLogin) {
        // Guardar token si se recibió
        if (data.token) {
          localStorage.setItem("token", data.token);
          alert("Inicio de sesión exitoso");
          navigate("/dashboard"); // o la ruta que uses
        } else {
          setError("No se recibió token del servidor.");
        }
      } else {
        alert("Registro exitoso. Ahora puedes iniciar sesión.");
        navigate("/login");
      }
    } catch (err) {
      console.error(err);
      setError("No se pudo conectar con el servidor.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="text-center">
        <img
          src={logo}
          alt="ICTA Logo"
          style={{ width: "150px", marginBottom: "20px" }}
        />
        <div className="card p-4 shadow" style={{ width: "22rem" }}>
          <h3 className="text-center mb-3">
            {isLogin ? "Iniciar sesión" : "Regístrate"}
          </h3>

          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre completo"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
            )}
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              {isLogin ? "Entrar" : "Registrarse"}
            </button>
          </form>

          <div className="mt-3">
            {isLogin ? (
              <p>
                ¿No tienes una cuenta? <Link to="/register">Regístrate</Link>
              </p>
            ) : (
              <p>
                ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    setGeneralError("");
    const response = await login(email, password);
    setLoading(false);
    if (response.success && response.data) {
      navigate("/usuarios");
    } else if (response.errors && Array.isArray(response.errors)) {
      // Errores de validación
      const fieldErrors = {};
      response.errors.forEach(err => {
        fieldErrors[err.code.toLowerCase()] = err.errorMessages.join(" ");
      });
      setErrors(fieldErrors);
    } else if (!response.success && response.message) {
      setGeneralError(response.message);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center section-padding"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/Escudo%20con%20fondo.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: '#0b0c10',
      }}
    >
      <div className="container-custom w-full max-w-lg bg-[#0b0c10]/70 backdrop-blur-md rounded-xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-200">Inicio de Sesión</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-blue-200 font-semibold mb-2">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-blue-900 bg-blue-900/80 text-blue-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-blue-300"
              placeholder="Ingresa tu email"
              autoComplete="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-red-300 text-sm mt-1 drop-shadow-md">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="password" className="block text-blue-200 font-semibold mb-2">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border border-blue-900 bg-blue-900/80 text-blue-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-blue-300"
              placeholder="Ingresa tu contraseña"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="text-red-300 text-sm mt-1 drop-shadow-md">{errors.password}</p>}
          </div>
          {generalError && <p className="text-red-300 text-center text-sm mb-2 drop-shadow-md">{generalError}</p>}
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 text-blue-100 font-semibold px-5 py-2 rounded shadow transition w-full disabled:opacity-60"
            disabled={loading}
          >
            {loading ? "Ingresando..." : "Ingresar"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

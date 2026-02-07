import React from "react";

function Login() {
  return (
    <div
      className="min-h-screen flex items-center justify-center section-padding"
      style={{
        backgroundImage: "url('/Escudo%20con%20fondo.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="card w-full max-w-md bg-white/90 backdrop-blur-md p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-primary-600">Inicio de Sesión</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">Usuario</label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-4 py-2 border border-primary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
              placeholder="Ingresa tu usuario"
              autoComplete="username"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border border-primary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
              placeholder="Ingresa tu contraseña"
              autoComplete="current-password"
            />
          </div>
          <button
            type="submit"
            className="btn-primary w-full"
            disabled
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

import React from "react";

export default function UsersTable({ users, loading, sortBy, handleSort, setModalOpen }) {
  return (
    <div className="overflow-x-auto rounded-lg shadow mt-4 relative">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-blue-900/70 backdrop-blur-sm z-10">
          <span className="text-blue-200 text-lg font-semibold">Buscando...</span>
        </div>
      )}
      <table className="min-w-full bg-slate-950 text-blue-100">
        <thead>
          <tr>
            <th className="px-4 py-3 text-left font-semibold tracking-wider">Nombre</th>
            <th className="px-4 py-3 text-left font-semibold tracking-wider">Apellido</th>
            <th className="px-4 py-3 text-left font-semibold tracking-wider">Documento</th>
            <th className="px-4 py-3 text-left font-semibold tracking-wider">Género</th>
            <th className="px-4 py-3 text-left font-semibold tracking-wider">Nacimiento</th>
            <th className="px-4 py-3 text-left font-semibold tracking-wider">EPS</th>
            <th className="px-4 py-3 text-left font-semibold tracking-wider">Dirección</th>
            <th className="px-4 py-3 text-left font-semibold tracking-wider">Nivel educativo</th>
            <th className="px-4 py-3 text-left font-semibold tracking-wider">Contacto emergencia</th>
            <th className="px-4 py-3 text-left font-semibold tracking-wider">Seguro</th>
            <th className="px-2 py-3 w-10"></th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 && !loading ? (
            <tr>
              <td colSpan={11} className="text-center py-8 text-blue-300">No hay registros.</td>
            </tr>
          ) : (
            users.map((user, idx) => (
              <tr
                key={user.id}
                className={`!text-white transition-colors ${idx % 2 === 0 ? 'bg-slate-900' : 'bg-blue-950'} hover:bg-blue-900`}
              >
                <td className="px-4 py-4 whitespace-nowrap">{user.name}</td>
                <td className="px-4 py-4 whitespace-nowrap">{user.lastName}</td>
                <td className="px-4 py-4 whitespace-nowrap">{user.document}</td>
                <td className="px-4 py-4 whitespace-nowrap">{user.gender === 0 ? 'Masculino' : user.gender === 1 ? 'Femenino' : '-'}</td>
                <td className="px-4 py-4 whitespace-nowrap">{user.birthdate ? new Date(user.birthdate).toLocaleDateString() : '-'}</td>
                <td className="px-4 py-4 whitespace-nowrap">{user.eps}</td>
                <td className="px-4 py-4 whitespace-nowrap">{user.fullAddress}</td>
                <td className="px-4 py-4 whitespace-nowrap">{user.educationLevel}</td>
                <td className="px-4 py-4 whitespace-nowrap">{user.emergencyContactName} ({user.emergencyContactPhone})</td>
                <td className="px-4 py-4 whitespace-nowrap">{user.insuranceName || '-'}</td>
                <td className="px-2 py-4 text-center">
                  <button
                    className="p-1 rounded hover:bg-blue-700 focus:outline-none"
                    title="Editar"
                    onClick={() => setModalOpen(user)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487a2.1 2.1 0 1 1 2.97 2.97L8.466 18.823a4.2 4.2 0 0 1-1.768 1.06l-3.18.954a.6.6 0 0 1-.741-.741l.954-3.18a4.2 4.2 0 0 1 1.06-1.768L16.862 4.487Zm0 0a2.1 2.1 0 0 1 2.97 2.97" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

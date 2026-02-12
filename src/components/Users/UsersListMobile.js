import React from "react";

export default function UsersListMobile({ users, onEdit }) {
  return (
    <ul className="bg-[#0b0c10]/60 rounded-xl overflow-hidden shadow">
      {users.length === 0 ? (
        <li className="py-8 text-center text-blue-300">No hay registros.</li>
      ) : (
        users.map((user, idx) => {
          const bgColor = idx % 2 === 0 ? 'bg-slate-900' : 'bg-blue-950';
          return (
            <li
              key={user.id}
              className={`flex items-center justify-between px-4 py-4 transition-colors ${bgColor} hover:bg-blue-900`}
            >
              <div>
                <div className="text-blue-100 font-semibold text-base">{user.name} {user.lastName}</div>
                <div className="text-blue-300 text-sm">Documento: {user.document}</div>
                <div className="text-blue-400 text-xs mt-1">Seguro: {user.insuranceName || '-'}</div>
                <div className="text-blue-400 text-xs mt-1">Contacto: {user.emergencyContactName} ({user.emergencyContactPhone})</div>
              </div>
              <button
                className="p-2 ml-4 rounded-full hover:bg-blue-700 focus:outline-none"
                title="Editar"
                onClick={() => onEdit(user)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-100">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487a2.1 2.1 0 1 1 2.97 2.97L8.466 18.823a4.2 4.2 0 0 1-1.768 1.06l-3.18.954a.6.6 0 0 1-.741-.741l.954-3.18a4.2 4.2 0 0 1 1.06-1.768L16.862 4.487Zm0 0a2.1 2.1 0 0 1 2.97 2.97" />
                </svg>
              </button>
            </li>
          );
        })
      )}
    </ul>
  );
}

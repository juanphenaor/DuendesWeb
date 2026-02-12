import React from "react";

export default function UsersListMobile({ users, onEdit }) {
  return (
    <ul className="bg-[#0b0c10]/60 rounded-xl overflow-hidden shadow">
      {users.length === 0 ? (
        <li className="py-8 text-center text-blue-300">No hay registros.</li>
      ) : (
        users.map((user, idx) => {
          const bgColor = idx % 2 === 0 ? 'bg-slate-900' : 'bg-blue-950';
          const tooltipMsg = user.validInsurance
            ? 'Usuario al día y con seguro vigente'
            : 'Usuario sin seguro vigente';
          return (
            <li
              key={user.id}
              className={`flex items-center justify-between px-4 py-4 transition-colors ${bgColor} hover:bg-blue-900 cursor-pointer`}
              onClick={() => onEdit(user)}
            >
              <div className="relative group mr-4">
                <span
                  className={`inline-block w-6 h-6 rounded-full border-2 shadow-lg ${user.validInsurance ? 'bg-blue-400 border-blue-700' : 'bg-red-400 border-red-700'}`}
                  style={{
                    boxShadow: user.validInsurance
                      ? '0 0 12px 4px #3b82f6, 0 0 2px 1px #60a5fa'
                      : '0 0 12px 4px #ef4444, 0 0 2px 1px #f87171',
                    display: 'inline-block'
                  }}
                ></span>
                <div className="absolute left-8 top-1/2 -translate-y-1/2 bg-slate-800 text-white text-xs rounded px-2 py-1 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20">
                  {tooltipMsg}
                </div>
              </div>
              <div className="flex-1">
                <div className="text-blue-100 font-semibold text-base">{user.name} {user.lastName}</div>
                <div className="text-blue-300 text-sm">Documento: {user.document}</div>
                <div className="text-blue-400 text-xs mt-1">Seguro: {user.insuranceName || '-'}</div>
                <div className="text-blue-400 text-xs mt-1">Contacto: {user.emergencyContactName} ({user.emergencyContactPhone})</div>
              </div>
            </li>
          );
        })
      )}
    </ul>
  );
}

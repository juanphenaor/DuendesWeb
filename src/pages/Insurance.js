import React, { useState, useCallback, useEffect } from "react";
import InsuranceModal from "../components/InsuranceModal/InsuranceModal";
import apiService from "../services/apiService";

export default Insurance;

function Insurance() {
  const [seguros, setSeguros] = useState([]);
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState("Name");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasNext, setHasNext] = useState(false);
  const [hasPrevious, setHasPrevious] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const fetchSeguros = useCallback(async (params) => {
    setLoading(true);
    const query = new URLSearchParams({
      Filter: params.filter || "",
      SortBy: params.sortBy || "Name",
      Page: params.page || 1,
    }).toString();
    const response = await apiService.request(`/Insurance?${query}`);
    if (response.success && Array.isArray(response.data)) {
      setSeguros(response.data);
      setTotalPages(response.totalPages || 1);
      setHasNext(response.hasNext || false);
      setHasPrevious(response.hasPrevious || false);
    } else {
      setSeguros([]);
      setTotalPages(1);
      setHasNext(false);
      setHasPrevious(false);
    }
    setLoading(false);
  }, []);
  useEffect(() => {
    fetchSeguros({ filter, sortBy, page });
    // eslint-disable-next-line
  }, [fetchSeguros, sortBy, page]);

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilter(value);
    setPage(1);
    if (typingTimeout) clearTimeout(typingTimeout);
    setTypingTimeout(
      setTimeout(() => {
        fetchSeguros({ filter: value, sortBy, page: 1 });
      }, 800)
    );
  };

  const handleSort = (column) => {
    setSortBy(column);
    setPage(1);
    fetchSeguros({ filter, sortBy: column, page: 1 });
  };

  const handleNext = () => {
    if (hasNext) setPage((p) => p + 1);
  };
  const handlePrevious = () => {
    if (hasPrevious) setPage((p) => p - 1);
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
      <InsuranceModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSuccess={() => fetchSeguros({ filter, sortBy, page })}
        initialData={modalOpen && typeof modalOpen === 'object' ? modalOpen : null}
      />
      <div className="container-custom w-full max-w-4xl bg-[#0b0c10]/40 backdrop-blur-sm rounded-xl p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-blue-200 mb-6 text-center">Seguros</h1>
        <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <input
            type="text"
            className="w-full sm:w-72 px-4 py-2 border border-blue-900 bg-blue-900/80 text-blue-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-blue-300"
            placeholder="Buscar por nombre, número..."
            value={filter}
            onChange={handleFilterChange}
          />
          <button
            className="bg-blue-700 hover:bg-blue-800 text-blue-100 font-semibold px-5 py-2 rounded shadow transition disabled:opacity-60 ml-auto"
            onClick={() => setModalOpen(true)}
            disabled={loading}
          >
            + Agregar
          </button>
        </div>
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
                <th className="px-4 py-3 text-left font-semibold tracking-wider">Número</th>
                <th className="px-4 py-3 text-left font-semibold tracking-wider">Teléfono</th>
                <th className="px-4 py-3 text-left font-semibold tracking-wider">Monto</th>
                <th className="px-4 py-3 text-left font-semibold tracking-wider cursor-pointer select-none" onClick={() => handleSort('ExpirationDate')}>Fecha de Expiración {sortBy === 'ExpirationDate' && <span className="text-blue-400">▲</span>}</th>
                <th className="px-2 py-3 w-10"></th>
              </tr>
            </thead>
            <tbody>
              {seguros.length === 0 && !loading ? (
                <tr>
                  <td colSpan={6} className="text-center py-8 text-blue-300">No hay registros.</td>
                </tr>
              ) : (
                seguros.map((seguro, idx) => (
                  <tr
                    key={seguro.id}
                    className={`!text-white transition-colors ${idx % 2 === 0 ? 'bg-slate-900' : 'bg-blue-950'} hover:bg-blue-900`}
                  >
                    <td className="px-4 py-4 whitespace-nowrap">{seguro.name}</td>
                    <td className="px-4 py-4 whitespace-nowrap">{seguro.number}</td>
                    <td className="px-4 py-4 whitespace-nowrap">{seguro.contactPhone}</td>
                    <td className="px-4 py-4 whitespace-nowrap">${seguro.coverageAmount.toLocaleString('es-AR')}</td>
                    <td className="px-4 py-4 whitespace-nowrap">{new Date(seguro.expirationDate).toLocaleDateString()}</td>
                    <td className="px-2 py-4 text-center">
                      <button
                        className="p-1 rounded hover:bg-blue-700 focus:outline-none"
                        title="Editar"
                        onClick={() => setModalOpen(seguro)}
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
        <div className="flex items-center justify-between mt-6">
          <button
            className="btn-outline border-blue-400 text-blue-200 hover:bg-blue-400 hover:text-white cursor-pointer"
            onClick={handlePrevious}
            disabled={!hasPrevious || loading}
            style={{ display: (!hasPrevious || loading) ? 'none' : undefined }}
          >
            Anterior
          </button>
          <span className="text-blue-200"
            style={{ display: (loading) ? 'none' : undefined }}>
            Página {page} de {totalPages}
          </span>
          <button
            className="btn-outline border-blue-400 text-blue-200 hover:bg-blue-400 hover:text-white cursor-pointer"
            onClick={handleNext}
            disabled={!hasNext || loading}
            style={{ display: (!hasNext || loading) ? 'none' : undefined }}
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
}


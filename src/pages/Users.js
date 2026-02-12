
import React, { useState, useCallback, useEffect } from "react";
import UserModal from "../components/Users/UserModal";
import UsersListMobile from "../components/Users/UsersListMobile";
import UsersTable from "../components/Users/UsersTable";
import useIsMobile from "../hooks/useIsMobile";
import apiService from "../services/apiService";

function Users() {
  const isMobile = useIsMobile();
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState("Name");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasNext, setHasNext] = useState(false);
  const [hasPrevious, setHasPrevious] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const fetchUsers = useCallback(async (params) => {
    setLoading(true);
    const query = new URLSearchParams({
      Filter: params.filter || "",
      SortBy: params.sortBy || "Name",
      Page: params.page || 1,
    }).toString();
    const response = await apiService.request(`/Users?${query}`);
    if (response.success && Array.isArray(response.data)) {
      setUsers(response.data);
      setTotalPages(response.totalPages || 1);
      setHasNext(response.hasNext || false);
      setHasPrevious(response.hasPrevious || false);
    } else {
      setUsers([]);
      setTotalPages(1);
      setHasNext(false);
      setHasPrevious(false);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchUsers({ filter, sortBy, page });
    // eslint-disable-next-line
  }, [fetchUsers, sortBy, page]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilter(value);
    setPage(1);
    if (typingTimeout) clearTimeout(typingTimeout);
    setTypingTimeout(
      setTimeout(() => {
        fetchUsers({ filter: value, sortBy, page: 1 });
      }, 800)
    );
  };

  const handleSort = (column) => {
    setSortBy(column);
    setPage(1);
    fetchUsers({ filter, sortBy: column, page: 1 });
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
      <UserModal
        open={!!modalOpen}
        onClose={() => setModalOpen(false)}
        onSuccess={() => fetchUsers({ filter, sortBy, page })}
        initialData={modalOpen && typeof modalOpen === 'object' ? modalOpen : null}
      />
      <div className="container-custom w-full max-w-4xl bg-[#0b0c10]/40 backdrop-blur-sm rounded-xl p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-blue-200 mb-6 text-center">Usuarios</h1>
        <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <input
            type="text"
            className="w-full sm:w-72 px-4 py-2 border border-blue-900 bg-blue-900/80 text-blue-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-blue-300"
            placeholder="Buscar por nombre, documento..."
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
        {isMobile ? (
          <div className="mt-4 relative">
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-blue-900/70 backdrop-blur-sm z-10 rounded-xl">
                <span className="text-blue-200 text-lg font-semibold">Buscando...</span>
              </div>
            )}
            <UsersListMobile users={users} onEdit={setModalOpen} />
          </div>
        ) : (
          <UsersTable
            users={users}
            loading={loading}
            sortBy={sortBy}
            handleSort={handleSort}
            setModalOpen={setModalOpen}
          />
        )}
        <div className={`flex items-center mt-6 ${(!hasPrevious && !hasNext) || loading ? 'justify-center' : 'justify-around'}`}>
          {hasPrevious && !loading ? (
            <button
              className="p-2 rounded-full border border-blue-400 text-blue-200 hover:bg-blue-400 hover:text-white transition disabled:opacity-60"
              onClick={handlePrevious}
              disabled={!hasPrevious || loading}
              aria-label="Anterior"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
          ) : <div className="w-10" />}
          <span className="text-blue-200 text-base font-medium" style={{ display: loading ? 'none' : undefined }}>
            Página {page} de {totalPages}
          </span>
          {hasNext && !loading ? (
            <button
              className="p-2 rounded-full border border-blue-400 text-blue-200 hover:bg-blue-400 hover:text-white transition disabled:opacity-60"
              onClick={handleNext}
              disabled={!hasNext || loading}
              aria-label="Siguiente"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          ) : <div className="w-10" />}
        </div>
      </div>
    </div>
  );
}

export default Users;

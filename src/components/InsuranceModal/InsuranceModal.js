import React, { useEffect, useState } from "react";
import apiService from "../../services/apiService";

function InsuranceModal({ open, onClose, onSuccess, initialData }) {
  const isEdit = !!initialData;
  const [form, setForm] = useState({
    name: initialData?.name || "",
    number: initialData?.number || "",
    contactPhone: initialData?.contactPhone || "",
    coverageAmount: initialData?.coverageAmount || "",
    expirationDate: initialData?.expirationDate ? initialData.expirationDate.slice(0, 10) : "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState("");

  useEffect(() => {
    if (open) {
      setForm({
        name: initialData?.name || "",
        number: initialData?.number || "",
        contactPhone: initialData?.contactPhone || "",
        coverageAmount: initialData?.coverageAmount || "",
        expirationDate: initialData?.expirationDate ? initialData.expirationDate.slice(0, 10) : "",
      });
      setErrors({});
      setGeneralError("");
    }
    // eslint-disable-next-line
  }, [open, initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    setGeneralError("");
    try {
      const payload = {
        ...form,
        coverageAmount: Number(form.coverageAmount),
        expirationDate: form.expirationDate ? new Date(form.expirationDate).toISOString() : null,
      };
      let url = "/Insurance";
      let method = "post";
      if (isEdit && initialData && initialData.id) {
        url = `/Insurance/${initialData.id}`;
        method = "put";
      }
      const options = {
        method,
        body: JSON.stringify(payload),
      };
      const response = await apiService.request(url, options);
      if (response.success) {
        onSuccess();
        onClose();
      } else if (response.errors) {
        // Mapear errores de validación
        const fieldErrors = {};
        response.errors.forEach((err) => {
          if (err.code && err.errorMessages) {
            fieldErrors[err.code.charAt(0).toLowerCase() + err.code.slice(1)] = err.errorMessages[0];
          }
        });
        setErrors(fieldErrors);
        if (!response.errors.length && response.message) setGeneralError(response.message);
      } else if (response.message) {
        setGeneralError(response.message);
      }
    } catch (err) {
      console.error("[InsuranceModal] Error en request:", err);
      setGeneralError("Error de red o inesperado.");
    }
    setLoading(false);
  };

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-blue-950/70 backdrop-blur-sm">
      <div className="bg-slate-900 rounded-xl shadow-lg p-8 w-full max-w-md relative">
        <button
          className="absolute top-3 right-3 text-blue-200 hover:text-blue-400 text-2xl font-bold"
          onClick={onClose}
          disabled={loading}
          aria-label="Cerrar"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold text-blue-100 mb-4">
          {isEdit ? "Editar Seguro" : "Agregar Seguro"}
        </h2>
        {generalError && (
          <div className="mb-2 text-red-400 text-sm text-center">{generalError}</div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-blue-200 mb-1">Nombre</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className={`w-full rounded px-3 py-2 bg-blue-900 text-blue-100 border ${errors.name ? "border-red-400" : "border-blue-700"}`}
              disabled={loading}
              required
            />
            {errors.name && <div className="text-red-400 text-xs mt-1">{errors.name}</div>}
          </div>
          <div>
            <label className="block text-blue-200 mb-1">Número</label>
            <input
              type="text"
              name="number"
              value={form.number}
              onChange={handleChange}
              className={`w-full rounded px-3 py-2 bg-blue-900 text-blue-100 border ${errors.number ? "border-red-400" : "border-blue-700"}`}
              disabled={loading}
              required
            />
            {errors.number && <div className="text-red-400 text-xs mt-1">{errors.number}</div>}
          </div>
          <div>
            <label className="block text-blue-200 mb-1">Teléfono de Contacto</label>
            <input
              type="text"
              name="contactPhone"
              value={form.contactPhone}
              onChange={handleChange}
              className={`w-full rounded px-3 py-2 bg-blue-900 text-blue-100 border ${errors.contactPhone ? "border-red-400" : "border-blue-700"}`}
              disabled={loading}
              required
            />
            {errors.contactPhone && <div className="text-red-400 text-xs mt-1">{errors.contactPhone}</div>}
          </div>
          <div>
            <label className="block text-blue-200 mb-1">Monto de Cobertura</label>
            <input
              type="number"
              name="coverageAmount"
              value={form.coverageAmount}
              onChange={handleChange}
              className={`w-full rounded px-3 py-2 bg-blue-900 text-blue-100 border ${errors.coverageAmount ? "border-red-400" : "border-blue-700"}`}
              disabled={loading}
              required
              min={0}
            />
            {errors.coverageAmount && <div className="text-red-400 text-xs mt-1">{errors.coverageAmount}</div>}
          </div>
          <div>
            <label className="block text-blue-200 mb-1">Fecha de Expiración</label>
            <input
              type="date"
              name="expirationDate"
              value={form.expirationDate}
              onChange={handleChange}
              className={`w-full rounded px-3 py-2 bg-blue-900 text-blue-100 border ${errors.expirationDate ? "border-red-400" : "border-blue-700"} date-white-icon`}
              disabled={loading}
              required
            />
            {errors.expirationDate && <div className="text-red-400 text-xs mt-1">{errors.expirationDate}</div>}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-blue-100 font-semibold py-2 rounded mt-2 disabled:opacity-60"
            disabled={loading}
          >
            {loading ? (isEdit ? "Guardando..." : "Agregando...") : (isEdit ? "Guardar Cambios" : "Agregar Seguro")}
          </button>
        </form>
      </div>
    </div>
  );
}

export default InsuranceModal;

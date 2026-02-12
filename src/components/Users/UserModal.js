import React, { useEffect, useState } from "react";
import apiService from "../../services/apiService";

function UserModal({ open, onClose, onSuccess, initialData }) {
  const isEdit = !!initialData;
  const [form, setForm] = useState({
    email: initialData?.email || "",
    name: initialData?.name || "",
    lastName: initialData?.lastName || "",
    document: initialData?.document || "",
    documentType: initialData?.documentType ?? 0,
    birthdate: initialData?.birthdate ? initialData.birthdate.slice(0, 10) : "",
    phoneNumber: initialData?.phoneNumber || "",
    eps: initialData?.eps || "",
    fullAddress: initialData?.fullAddress || "",
    neighborhood: initialData?.neighborhood || "",
    educationLevel: initialData?.educationLevel ?? 0,
    gender: initialData?.gender ?? 0,
    emergencyContactName: initialData?.emergencyContactName || "",
    emergencyContactPhone: initialData?.emergencyContactPhone || "",
    emergencyContactRelationship: initialData?.emergencyContactRelationship || "",
    insuranceId: initialData?.insuranceId || "",
    nickname: initialData?.nickname || "",
  });
  const [insurances, setInsurances] = useState([]);
  const [loading, setLoading] = useState(false);
  const [generalError, setGeneralError] = useState("");

  useEffect(() => {
    if (open) {
      setForm({
        email: initialData?.email || "",
        name: initialData?.name || "",
        lastName: initialData?.lastName || "",
        document: initialData?.document || "",
        documentType: initialData?.documentType ?? 0,
        birthdate: initialData?.birthdate ? initialData.birthdate.slice(0, 10) : "",
        phoneNumber: initialData?.phoneNumber || "",
        eps: initialData?.eps || "",
        fullAddress: initialData?.fullAddress || "",
        neighborhood: initialData?.neighborhood || "",
        educationLevel: initialData?.educationLevel ?? 0,
        gender: initialData?.gender ?? 0,
        emergencyContactName: initialData?.emergencyContactName || "",
        emergencyContactPhone: initialData?.emergencyContactPhone || "",
        emergencyContactRelationship: initialData?.emergencyContactRelationship || "",
        insuranceId: initialData?.insuranceId || "",
        nickname: initialData?.nickname || "",
      });
      setGeneralError("");
      apiService.request("/Insurance", { method: "get" }).then(res => {
        if (res && Array.isArray(res)) setInsurances(res);
      });
    }
  }, [open, initialData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setGeneralError("");
    try {
      const payload = {
        ...form,
        educationLevel: Number(form.educationLevel),
        documentType: Number(form.documentType),
        gender: Number(form.gender),
        birthdate: form.birthdate ? new Date(form.birthdate).toISOString() : null,
      };
      let url = "/Users";
      let method = "post";
      if (isEdit && initialData && initialData.id) {
        url = `/Users/${initialData.id}`;
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
      } else {
        setGeneralError(response.message || "Error al guardar usuario");
      }
    } catch (err) {
      setGeneralError("Error inesperado al guardar usuario");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-blue-950/70 backdrop-blur-sm">
      <div className="bg-slate-900 rounded-xl shadow-lg p-8 w-full max-w-2xl relative flex flex-col" style={{ maxHeight: '90vh' }}>
        <button
          className="absolute top-3 right-3 text-blue-200 hover:text-blue-400 text-2xl font-bold"
          onClick={onClose}
          disabled={loading}
          aria-label="Cerrar"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold text-blue-100 mb-4">{isEdit ? "Editar Usuario" : "Agregar Usuario"}</h2>
        {generalError && (
          <div className="mb-2 text-red-400 text-sm text-center">{generalError}</div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4 overflow-y-auto user-modal-scroll pr-4" style={{ maxHeight: '70vh' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <label className="block text-blue-200 mb-1">Correo electrónico</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded px-3 py-2 bg-blue-900 text-blue-100 border border-blue-700"
                disabled={loading}
                required
              />
            </div>
            <div>
              <label className="block text-blue-200 mb-1">Nombre</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full rounded px-3 py-2 bg-blue-900 text-blue-100 border border-blue-700"
                disabled={loading}
                required
              />
            </div>
            <div>
              <label className="block text-blue-200 mb-1">Apellido</label>
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                className="w-full rounded px-3 py-2 bg-blue-900 text-blue-100 border border-blue-700"
                disabled={loading}
                required
              />
            </div>
            <div>
              <label className="block text-blue-200 mb-1">Apodo</label>
              <input
                type="text"
                name="nickname"
                value={form.nickname}
                onChange={handleChange}
                className="w-full rounded px-3 py-2 bg-blue-900 text-blue-100 border border-blue-700"
                disabled={loading}
              />
            </div>
            <div>
              <label className="block text-blue-200 mb-1">Documento</label>
              <input
                type="text"
                name="document"
                value={form.document}
                onChange={handleChange}
                className="w-full rounded px-3 py-2 bg-blue-900 text-blue-100 border border-blue-700"
                disabled={loading}
                required
              />
            </div>
            <div>
              <label className="block text-blue-200 mb-1">Tipo de documento</label>
              <select
                name="documentType"
                value={form.documentType}
                onChange={handleChange}
                className="w-full rounded px-3 py-2 bg-blue-900 text-blue-100 border border-blue-700"
                disabled={loading}
                required
              >
                <option value={0}>Tarjeta de Identidad</option>
                <option value={1}>Cédula de Ciudadanía</option>
                <option value={2}>Cédula de Extranjería</option>
                <option value={3}>Pasaporte</option>
              </select>
            </div>
            <div>
              <label className="block text-blue-200 mb-1">Nacimiento</label>
              <input
                type="date"
                name="birthdate"
                value={form.birthdate}
                onChange={handleChange}
                className="w-full rounded px-3 py-2 bg-blue-900 text-blue-100 border border-blue-700"
                disabled={loading}
                required
              />
            </div>
            <div>
              <label className="block text-blue-200 mb-1">Teléfono</label>
              <input
                type="text"
                name="phoneNumber"
                value={form.phoneNumber}
                onChange={handleChange}
                className="w-full rounded px-3 py-2 bg-blue-900 text-blue-100 border border-blue-700"
                disabled={loading}
                required
              />
            </div>
            <div>
              <label className="block text-blue-200 mb-1">Género</label>
              <select
                name="gender"
                value={form.gender}
                onChange={handleChange}
                className="w-full rounded px-3 py-2 bg-blue-900 text-blue-100 border border-blue-700"
                disabled={loading}
                required
              >
                <option value={0}>Masculino</option>
                <option value={1}>Femenino</option>
              </select>
            </div>
            <div>
              <label className="block text-blue-200 mb-1">EPS</label>
              <input
                type="text"
                name="eps"
                value={form.eps}
                onChange={handleChange}
                className="w-full rounded px-3 py-2 bg-blue-900 text-blue-100 border border-blue-700"
                disabled={loading}
              />
            </div>
            <div>
              <label className="block text-blue-200 mb-1">Dirección</label>
              <input
                type="text"
                name="fullAddress"
                value={form.fullAddress}
                onChange={handleChange}
                className="w-full rounded px-3 py-2 bg-blue-900 text-blue-100 border border-blue-700"
                disabled={loading}
              />
            </div>
            <div>
              <label className="block text-blue-200 mb-1">Barrio</label>
              <input
                type="text"
                name="neighborhood"
                value={form.neighborhood}
                onChange={handleChange}
                className="w-full rounded px-3 py-2 bg-blue-900 text-blue-100 border border-blue-700"
                disabled={loading}
              />
            </div>
            <div>
              <label className="block text-blue-200 mb-1">Nivel educativo</label>
              <select
                name="educationLevel"
                value={form.educationLevel}
                onChange={handleChange}
                className="w-full rounded px-3 py-2 bg-blue-900 text-blue-100 border border-blue-700"
                disabled={loading}
                required
              >
                <option value={0}>Sin especificar</option>
                <option value={1}>Primaria</option>
                <option value={2}>Secundaria</option>
                <option value={3}>Técnico</option>
                <option value={4}>Tecnólogo</option>
                <option value={5}>Universitario</option>
                <option value={6}>Posgrado</option>
              </select>
            </div>
            <div>
              <label className="block text-blue-200 mb-1">Nombre contacto emergencia</label>
              <input
                type="text"
                name="emergencyContactName"
                value={form.emergencyContactName}
                onChange={handleChange}
                className="w-full rounded px-3 py-2 bg-blue-900 text-blue-100 border border-blue-700"
                disabled={loading}
              />
            </div>
            <div>
              <label className="block text-blue-200 mb-1">Teléfono contacto emergencia</label>
              <input
                type="text"
                name="emergencyContactPhone"
                value={form.emergencyContactPhone}
                onChange={handleChange}
                className="w-full rounded px-3 py-2 bg-blue-900 text-blue-100 border border-blue-700"
                disabled={loading}
              />
            </div>
            <div>
              <label className="block text-blue-200 mb-1">Parentesco contacto emergencia</label>
              <input
                type="text"
                name="emergencyContactRelationship"
                value={form.emergencyContactRelationship}
                onChange={handleChange}
                className="w-full rounded px-3 py-2 bg-blue-900 text-blue-100 border border-blue-700"
                disabled={loading}
              />
            </div>
            <div>
              <label className="block text-blue-200 mb-1">Seguro</label>
              <select
                name="insuranceId"
                value={form.insuranceId}
                onChange={handleChange}
                className="w-full rounded px-3 py-2 bg-blue-900 text-blue-100 border border-blue-700"
                disabled={loading}
                required
              >
                <option value="">Seleccione seguro</option>
                {insurances.map(ins => (
                  <option key={ins.id} value={ins.id}>{ins.name}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-6">
            <button
              type="button"
              className="bg-blue-700 hover:bg-blue-800 text-blue-100 font-semibold py-2 px-4 rounded disabled:opacity-60"
              onClick={onClose}
              disabled={loading}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-800 text-blue-100 font-semibold py-2 px-4 rounded disabled:opacity-60"
              disabled={loading}
            >
              {loading ? "Guardando..." : "Guardar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserModal;

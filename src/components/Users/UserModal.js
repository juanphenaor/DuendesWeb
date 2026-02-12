import React, { useEffect, useState } from "react";
import apiService from "../../services/apiService";

function UserModal({ open, onClose, onSuccess, initialData }) {
  const isEdit = !!initialData;
  const [form, setForm] = useState({
    name: initialData?.name || "",
    lastName: initialData?.lastName || "",
    document: initialData?.document || "",
    documentType: initialData?.documentType || 0,
    birthdate: initialData?.birthdate ? initialData.birthdate.slice(0, 10) : "",
    eps: initialData?.eps || "",
    fullAddress: initialData?.fullAddress || "",
    neighborhood: initialData?.neighborhood || "",
    educationLevel: initialData?.educationLevel || 0,
    gender: initialData?.gender || 0,
    nickname: initialData?.nickname || "",
    emergencyContactName: initialData?.emergencyContactName || "",
    emergencyContactPhone: initialData?.emergencyContactPhone || "",
    emergencyContactRelationship: initialData?.emergencyContactRelationship || "",
    insuranceName: initialData?.insuranceName || "",
    validInsurance: initialData?.validInsurance || false,
    insuranceId: initialData?.insuranceId || null,
  });
  const [loading, setLoading] = useState(false);
  const [generalError, setGeneralError] = useState("");

  useEffect(() => {
    if (open) {
      setForm({
        name: initialData?.name || "",
        lastName: initialData?.lastName || "",
        document: initialData?.document || "",
        documentType: initialData?.documentType || 0,
        birthdate: initialData?.birthdate ? initialData.birthdate.slice(0, 10) : "",
        eps: initialData?.eps || "",
        fullAddress: initialData?.fullAddress || "",
        neighborhood: initialData?.neighborhood || "",
        educationLevel: initialData?.educationLevel || 0,
        gender: initialData?.gender || 0,
        nickname: initialData?.nickname || "",
        emergencyContactName: initialData?.emergencyContactName || "",
        emergencyContactPhone: initialData?.emergencyContactPhone || "",
        emergencyContactRelationship: initialData?.emergencyContactRelationship || "",
        insuranceName: initialData?.insuranceName || "",
        validInsurance: initialData?.validInsurance || false,
        insuranceId: initialData?.insuranceId || null,
      });
      setGeneralError("");
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <form onSubmit={handleSubmit} className="bg-slate-900 p-6 rounded-lg shadow-lg w-full max-w-lg relative">
        <h2 className="text-2xl font-bold mb-4 text-blue-100">{isEdit ? "Editar Usuario" : "Nuevo Usuario"}</h2>
        {generalError && <div className="mb-2 text-red-400">{generalError}</div>}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="input" name="name" placeholder="Nombre" value={form.name} onChange={handleChange} required />
          <input className="input" name="lastName" placeholder="Apellido" value={form.lastName} onChange={handleChange} required />
          <input className="input" name="document" placeholder="Documento" value={form.document} onChange={handleChange} required />
          <select className="input" name="documentType" value={form.documentType} onChange={handleChange} required>
            <option value={0}>Cédula</option>
            <option value={1}>Tarjeta de Identidad</option>
            <option value={2}>Pasaporte</option>
          </select>
          <input className="input" name="birthdate" type="date" placeholder="Nacimiento" value={form.birthdate} onChange={handleChange} required />
          <input className="input" name="eps" placeholder="EPS" value={form.eps} onChange={handleChange} />
          <input className="input" name="fullAddress" placeholder="Dirección" value={form.fullAddress} onChange={handleChange} />
          <input className="input" name="neighborhood" placeholder="Barrio" value={form.neighborhood} onChange={handleChange} />
          <select className="input" name="educationLevel" value={form.educationLevel} onChange={handleChange}>
            <option value={0}>Sin especificar</option>
            <option value={1}>Primaria</option>
            <option value={2}>Secundaria</option>
            <option value={3}>Técnico</option>
            <option value={4}>Universitario</option>
          </select>
          <select className="input" name="gender" value={form.gender} onChange={handleChange}>
            <option value={0}>Masculino</option>
            <option value={1}>Femenino</option>
            <option value={2}>Otro</option>
          </select>
          <input className="input" name="nickname" placeholder="Apodo" value={form.nickname} onChange={handleChange} />
          <input className="input" name="emergencyContactName" placeholder="Nombre contacto emergencia" value={form.emergencyContactName} onChange={handleChange} />
          <input className="input" name="emergencyContactPhone" placeholder="Teléfono contacto emergencia" value={form.emergencyContactPhone} onChange={handleChange} />
          <input className="input" name="emergencyContactRelationship" placeholder="Parentesco contacto emergencia" value={form.emergencyContactRelationship} onChange={handleChange} />
          <input className="input" name="insuranceName" placeholder="Seguro" value={form.insuranceName} onChange={handleChange} />
          <label className="flex items-center gap-2 text-blue-200">
            <input type="checkbox" name="validInsurance" checked={form.validInsurance} onChange={handleChange} />
            Seguro válido
          </label>
        </div>
        <div className="flex justify-end gap-2 mt-6">
          <button type="button" className="btn-secondary" onClick={onClose} disabled={loading}>Cancelar</button>
          <button type="submit" className="btn-primary" disabled={loading}>{loading ? "Guardando..." : "Guardar"}</button>
        </div>
      </form>
    </div>
  );
}

export default UserModal;

import React, { useState } from 'react';

const Registration = () => {
  const [formData, setFormData] = useState({
    nombreCompleto: '',
    fechaNacimiento: '',
    edad: '',
    telefono: '',
    email: '',
    direccion: '',
    ciudad: '',
    codigoPostal: '',
    categoria: '',
    experienciaPrevia: '',
    contactoEmergencia: '',
    telefonoEmergencia: '',
    condicionesMedicas: '',
    aceptaTerminos: false,
    aceptaImagenes: false,
    newsletter: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const categorias = [
    { value: 'pre-rugby', label: 'Pre-Rugby (6-8 años)', precio: '25€/mes' },
    { value: 'infantil', label: 'Rugby Infantil (9-12 años)', precio: '35€/mes' },
    { value: 'juvenil', label: 'Rugby Juvenil (13-17 años)', precio: '45€/mes' },
    { value: 'senior', label: 'Primer Equipo (18+ años)', precio: '55€/mes' },
    { value: 'veteranos', label: 'Veteranos (35+ años)', precio: '40€/mes' }
  ];

  const experienciaOpciones = [
    { value: 'ninguna', label: 'Sin experiencia previa' },
    { value: 'principiante', label: 'Principiante (menos de 1 año)' },
    { value: 'intermedio', label: 'Intermedio (1-3 años)' },
    { value: 'avanzado', label: 'Avanzado (más de 3 años)' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Calcular edad automáticamente si cambia la fecha de nacimiento
    if (name === 'fechaNacimiento' && value) {
      const today = new Date();
      const birthDate = new Date(value);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      
      setFormData(prev => ({
        ...prev,
        edad: age.toString()
      }));
    }

    // Limpiar errores al escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Campos obligatorios
    if (!formData.nombreCompleto.trim()) {
      newErrors.nombreCompleto = 'El nombre completo es obligatorio';
    }

    if (!formData.fechaNacimiento) {
      newErrors.fechaNacimiento = 'La fecha de nacimiento es obligatoria';
    }

    if (!formData.telefono.trim()) {
      newErrors.telefono = 'El teléfono es obligatorio';
    } else if (!/^[+]?[0-9\s\-()]{9,}$/.test(formData.telefono)) {
      newErrors.telefono = 'El teléfono no es válido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es obligatorio';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'El email no es válido';
    }

    if (!formData.categoria) {
      newErrors.categoria = 'Debes seleccionar una categoría';
    }

    if (!formData.contactoEmergencia.trim()) {
      newErrors.contactoEmergencia = 'El contacto de emergencia es obligatorio';
    }

    if (!formData.telefonoEmergencia.trim()) {
      newErrors.telefonoEmergencia = 'El teléfono de emergencia es obligatorio';
    } else if (!/^[+]?[0-9\s\-()]{9,}$/.test(formData.telefonoEmergencia)) {
      newErrors.telefonoEmergencia = 'El teléfono de emergencia no es válido';
    }

    if (!formData.aceptaTerminos) {
      newErrors.aceptaTerminos = 'Debes aceptar los términos y condiciones';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Scroll al primer error
      const firstErrorField = Object.keys(newErrors)[0];
      document.getElementById(firstErrorField)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      // Simular envío del formulario
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      setSubmitStatus('success');
      // No limpiar el formulario en caso de éxito para que el usuario pueda ver los datos enviados
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getCategoriaSeleccionada = () => {
    return categorias.find(cat => cat.value === formData.categoria);
  };

  if (submitStatus === 'success') {
    return (
      <div className="min-h-screen pt-20 bg-gray-50 flex items-center justify-center">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto card p-8 text-center">
            <div className="text-6xl mb-6">🎉</div>
            <h1 className="text-3xl font-sport font-bold text-dark-900 mb-4">
              ¡Inscripción Completada!
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              ¡Bienvenido/a a la familia Duendes Rugby Club! Hemos recibido tu inscripción correctamente.
            </p>
            <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-primary-800 mb-3">Próximos pasos:</h3>
              <ul className="text-left text-primary-700 space-y-2">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">1.</span>
                  Revisaremos tu solicitud en las próximas 24 horas
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">2.</span>
                  Te enviaremos un email con los detalles de pago y documentación
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">3.</span>
                  Podrás asistir a tu primer entrenamiento
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setSubmitStatus(null)}
                className="btn-primary"
              >
                Nueva Inscripción
              </button>
              <a href="/" className="btn-outline">
                Volver al Inicio
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="hero-gradient text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-sport font-bold mb-6">
              Únete a los <span className="text-secondary-400">Duendes</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              Completa este formulario para formar parte de nuestra familia rugbier
            </p>
          </div>
        </div>
      </section>

      {/* Formulario */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="card p-8 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Información Personal */}
                <div>
                  <h2 className="text-2xl font-sport font-bold text-dark-900 mb-6 flex items-center">
                    <span className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">1</span>
                    Información Personal
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label htmlFor="nombreCompleto" className="block text-sm font-semibold text-gray-700 mb-2">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        id="nombreCompleto"
                        name="nombreCompleto"
                        value={formData.nombreCompleto}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                          errors.nombreCompleto ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Escribe tu nombre completo"
                      />
                      {errors.nombreCompleto && <p className="text-red-500 text-sm mt-1">{errors.nombreCompleto}</p>}
                    </div>

                    <div>
                      <label htmlFor="fechaNacimiento" className="block text-sm font-semibold text-gray-700 mb-2">
                        Fecha de nacimiento *
                      </label>
                      <input
                        type="date"
                        id="fechaNacimiento"
                        name="fechaNacimiento"
                        value={formData.fechaNacimiento}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                          errors.fechaNacimiento ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.fechaNacimiento && <p className="text-red-500 text-sm mt-1">{errors.fechaNacimiento}</p>}
                    </div>

                    <div>
                      <label htmlFor="edad" className="block text-sm font-semibold text-gray-700 mb-2">
                        Edad
                      </label>
                      <input
                        type="number"
                        id="edad"
                        name="edad"
                        value={formData.edad}
                        readOnly
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600"
                        placeholder="Se calcula automáticamente"
                      />
                    </div>

                    <div>
                      <label htmlFor="telefono" className="block text-sm font-semibold text-gray-700 mb-2">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                          errors.telefono ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="+34 123 456 789"
                      />
                      {errors.telefono && <p className="text-red-500 text-sm mt-1">{errors.telefono}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="tu@email.com"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                  </div>
                </div>

                {/* Dirección */}
                <div>
                  <h2 className="text-2xl font-sport font-bold text-dark-900 mb-6 flex items-center">
                    <span className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">2</span>
                    Dirección
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <label htmlFor="direccion" className="block text-sm font-semibold text-gray-700 mb-2">
                        Dirección
                      </label>
                      <input
                        type="text"
                        id="direccion"
                        name="direccion"
                        value={formData.direccion}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        placeholder="Calle, número, piso..."
                      />
                    </div>

                    <div>
                      <label htmlFor="codigoPostal" className="block text-sm font-semibold text-gray-700 mb-2">
                        Código Postal
                      </label>
                      <input
                        type="text"
                        id="codigoPostal"
                        name="codigoPostal"
                        value={formData.codigoPostal}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        placeholder="12345"
                      />
                    </div>

                    <div className="md:col-span-2 lg:col-span-3">
                      <label htmlFor="ciudad" className="block text-sm font-semibold text-gray-700 mb-2">
                        Ciudad
                      </label>
                      <input
                        type="text"
                        id="ciudad"
                        name="ciudad"
                        value={formData.ciudad}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        placeholder="Tu ciudad"
                      />
                    </div>
                  </div>
                </div>

                {/* Información Deportiva */}
                <div>
                  <h2 className="text-2xl font-sport font-bold text-dark-900 mb-6 flex items-center">
                    <span className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">3</span>
                    Información Deportiva
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="categoria" className="block text-sm font-semibold text-gray-700 mb-2">
                        Categoría *
                      </label>
                      <select
                        id="categoria"
                        name="categoria"
                        value={formData.categoria}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                          errors.categoria ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Selecciona una categoría</option>
                        {categorias.map((categoria) => (
                          <option key={categoria.value} value={categoria.value}>
                            {categoria.label} - {categoria.precio}
                          </option>
                        ))}
                      </select>
                      {errors.categoria && <p className="text-red-500 text-sm mt-1">{errors.categoria}</p>}
                      {getCategoriaSeleccionada() && (
                        <div className="mt-2 p-3 bg-primary-50 border border-primary-200 rounded-lg">
                          <p className="text-primary-800 text-sm">
                            <strong>Cuota mensual:</strong> {getCategoriaSeleccionada().precio}
                          </p>
                        </div>
                      )}
                    </div>

                    <div>
                      <label htmlFor="experienciaPrevia" className="block text-sm font-semibold text-gray-700 mb-2">
                        Experiencia en rugby
                      </label>
                      <select
                        id="experienciaPrevia"
                        name="experienciaPrevia"
                        value={formData.experienciaPrevia}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      >
                        <option value="">Selecciona tu nivel</option>
                        {experienciaOpciones.map((opcion) => (
                          <option key={opcion.value} value={opcion.value}>
                            {opcion.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="condicionesMedicas" className="block text-sm font-semibold text-gray-700 mb-2">
                        Condiciones médicas o lesiones relevantes
                      </label>
                      <textarea
                        id="condicionesMedicas"
                        name="condicionesMedicas"
                        rows={3}
                        value={formData.condicionesMedicas}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                        placeholder="Describe cualquier condición médica, lesión o medicación que debamos conocer (opcional)"
                      />
                    </div>
                  </div>
                </div>

                {/* Contacto de Emergencia */}
                <div>
                  <h2 className="text-2xl font-sport font-bold text-dark-900 mb-6 flex items-center">
                    <span className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">4</span>
                    Contacto de Emergencia
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contactoEmergencia" className="block text-sm font-semibold text-gray-700 mb-2">
                        Nombre del contacto *
                      </label>
                      <input
                        type="text"
                        id="contactoEmergencia"
                        name="contactoEmergencia"
                        value={formData.contactoEmergencia}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                          errors.contactoEmergencia ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Nombre completo"
                      />
                      {errors.contactoEmergencia && <p className="text-red-500 text-sm mt-1">{errors.contactoEmergencia}</p>}
                    </div>

                    <div>
                      <label htmlFor="telefonoEmergencia" className="block text-sm font-semibold text-gray-700 mb-2">
                        Teléfono de emergencia *
                      </label>
                      <input
                        type="tel"
                        id="telefonoEmergencia"
                        name="telefonoEmergencia"
                        value={formData.telefonoEmergencia}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                          errors.telefonoEmergencia ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="+34 123 456 789"
                      />
                      {errors.telefonoEmergencia && <p className="text-red-500 text-sm mt-1">{errors.telefonoEmergencia}</p>}
                    </div>
                  </div>
                </div>

                {/* Términos y Condiciones */}
                <div>
                  <h2 className="text-2xl font-sport font-bold text-dark-900 mb-6 flex items-center">
                    <span className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">5</span>
                    Términos y Condiciones
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="aceptaTerminos"
                        name="aceptaTerminos"
                        checked={formData.aceptaTerminos}
                        onChange={handleInputChange}
                        className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                      />
                      <label htmlFor="aceptaTerminos" className="ml-3 text-sm text-gray-700">
                        Acepto los <a href="#" className="text-primary-600 hover:text-primary-700 font-semibold">términos y condiciones</a> del club y autorizo el procesamiento de mis datos personales para fines deportivos y administrativos. *
                      </label>
                    </div>
                    {errors.aceptaTerminos && <p className="text-red-500 text-sm">{errors.aceptaTerminos}</p>}

                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="aceptaImagenes"
                        name="aceptaImagenes"
                        checked={formData.aceptaImagenes}
                        onChange={handleInputChange}
                        className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                      />
                      <label htmlFor="aceptaImagenes" className="ml-3 text-sm text-gray-700">
                        Autorizo el uso de mi imagen en fotografías y videos para promoción del club en redes sociales y página web.
                      </label>
                    </div>

                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="newsletter"
                        name="newsletter"
                        checked={formData.newsletter}
                        onChange={handleInputChange}
                        className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                      />
                      <label htmlFor="newsletter" className="ml-3 text-sm text-gray-700">
                        Quiero recibir noticias y actualizaciones del club por email.
                      </label>
                    </div>
                  </div>
                </div>

                {/* Botón de envío */}
                <div className="pt-6 border-t border-gray-200">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full btn-primary text-lg py-4 ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Procesando inscripción...
                      </div>
                    ) : (
                      'Completar Inscripción'
                    )}
                  </button>
                  
                  <p className="text-center text-sm text-gray-500 mt-4">
                    Al enviar este formulario, recibirás un email de confirmación con los siguientes pasos.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Registration;

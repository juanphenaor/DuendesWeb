import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../config/emailConfig';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpiar error cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es obligatorio';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es obligatorio';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'El email no es válido';
    }

    if (!formData.mensaje.trim()) {
      newErrors.mensaje = 'El mensaje es obligatorio';
    } else if (formData.mensaje.trim().length < 10) {
      newErrors.mensaje = 'El mensaje debe tener al menos 10 caracteres';
    }

    if (formData.telefono && !/^[+]?[0-9\s\-()]{9,}$/.test(formData.telefono)) {
      newErrors.telefono = 'El teléfono no es válido';
    }

    // Validar asunto seleccionado
    const asuntoOptions = {
      'informacion-general': 'Información general',
      'inscripcion': 'Inscripción',
      'entrenamientos': 'Entrenamientos',
      'eventos': 'Eventos',
      'patrocinio': 'Patrocinio',
      'otro': 'Otro'
    };
    if (!formData.asunto || !asuntoOptions[formData.asunto]) {
      newErrors.asunto = 'Debes seleccionar un asunto válido';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Obtener el título del asunto seleccionado
    const asuntoOptions = {
      'informacion-general': 'Información general',
      'inscripcion': 'Inscripción',
      'entrenamientos': 'Entrenamientos',
      'eventos': 'Eventos',
      'patrocinio': 'Patrocinio',
      'otro': 'Otro'
    };
    const asuntoTitle = asuntoOptions[formData.asunto];

    setIsSubmitting(true);
    setErrors({});

    try {
      // Preparar los datos para el template formal de EmailJS
      const templateParams = {
        // Variables principales del template
        title: 'Nuevo mensaje de contacto',
        contact_name: formData.nombre,
        contact_email: formData.email,
        contact_phone: formData.telefono || 'No proporcionado',
        contact_date: new Date().toLocaleString('es-ES', {
          weekday: 'long',
          year: 'numeric',
          month: 'long', 
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          timeZone: 'America/Bogota'
        }),
        inquiry_subject: asuntoTitle,
        inquiry_message: formData.mensaje
      };

      // Enviar el email usando EmailJS
      await emailjs.send(
        emailConfig.serviceID, 
        emailConfig.templateID, 
        templateParams, 
        emailConfig.publicKey
      );
      
      setSubmitStatus('success');
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        asunto: '',
        mensaje: ''
      });
    } catch (error) {
      console.error('Error al enviar el email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  }

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Ubicación',
      details: [
        'Cancha La López',
        'Manrique, Medellín',
        'Colombia'
      ]
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Teléfono',
      details: [
        '312 7885615'
      ]
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      details: [
        'corporacionduendesrc@gmail.com'
      ]
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Horarios',
      details: [
        'Juveniles y Femeninos:',
        'Martes y Jueves 5:00 pm',
        'Masculino Adultos:',
        'Martes y Jueves 6:30 pm'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-[#0b0c10]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-sport font-bold mb-6 text-blue-400">
              Contacta con <span className="text-white">Nosotros</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              ¿Tienes preguntas? ¿Quieres más información? ¡Estamos aquí para ayudarte!
            </p>
          </div>
        </div>
      </section>

      {/* Formulario de contacto y información */}
      <section className="section-padding bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulario */}
            <div className="card p-8 bg-primaryCard text-white border border-blue-400 shadow-lg">
              <h2 className="text-3xl font-sport font-bold text-blue-400 mb-6">
                Envíanos un <span className="text-white">Mensaje</span>
              </h2>

              {submitStatus === 'success' && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    ¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    Error al enviar el mensaje. Por favor, inténtalo de nuevo.
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-semibold text-blue-400 mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-colors bg-primaryCard text-white border-blue-400 placeholder-blue-300 ${errors.nombre ? 'border-red-500' : 'border-blue-400'}`}
                      placeholder="Tu nombre completo"
                    />
                    {errors.nombre && <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-blue-400 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-colors bg-primaryCard text-white border-blue-400 placeholder-blue-300 ${errors.email ? 'border-red-500' : 'border-blue-400'}`}
                      placeholder="tu@email.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-semibold text-blue-400 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-colors bg-primaryCard text-white border-blue-400 placeholder-blue-300 ${errors.telefono ? 'border-red-500' : 'border-blue-400'}`}
                      placeholder="+34 123 456 789"
                    />
                    {errors.telefono && <p className="text-red-500 text-sm mt-1">{errors.telefono}</p>}
                  </div>

                  <div>
                    <label htmlFor="asunto" className="block text-sm font-semibold text-blue-400 mb-2">
                      Asunto
                    </label>
                    <select
                      id="asunto"
                      name="asunto"
                      value={formData.asunto}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-blue-400 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-colors bg-primaryCard text-white placeholder-blue-300"
                    >
                      <option value="">Selecciona un asunto</option>
                      <option value="informacion-general">Información general</option>
                      <option value="inscripcion">Inscripción</option>
                      <option value="entrenamientos">Entrenamientos</option>
                      <option value="eventos">Eventos</option>
                      <option value="patrocinio">Patrocinio</option>
                      <option value="otro">Otro</option>
                    </select>
                    {errors.asunto && <p className="text-red-500 text-sm mt-1">{errors.asunto}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-semibold text-blue-400 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={6}
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-colors resize-none bg-primaryCard text-white placeholder-blue-300 ${errors.mensaje ? 'border-red-500' : 'border-blue-400'}`}
                    placeholder="Escribe tu mensaje aquí..."
                  />
                  {errors.mensaje && <p className="text-red-500 text-sm mt-1">{errors.mensaje}</p>}
                  <p className="text-blue-300 text-sm mt-1">
                    Mínimo 10 caracteres. {formData.mensaje.length}/500
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn-primary bg-blue-400 text-white font-bold hover:bg-blue-500 ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </div>
                  ) : (
                    'Enviar Mensaje'
                  )}
                </button>
              </form>
            </div>

            {/* Información de contacto */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                let link = null;
                let ariaLabel = '';
                if (info.title === 'Ubicación') {
                  link = 'https://www.google.com/maps/place/Cancha+La+L%C3%B3pez/@6.2617875,-75.5550768,19z/data=!4m6!3m5!1s0x8e4428ecf530838b:0x30da1f416b12f693!8m2!3d6.2616683!4d-75.5544985!16s%2Fg%2F1ptywfcqm?entry=ttu&g_ep=EgoyMDI1MDcyOS4wIKXMDSoASAFQAw%3D%3D';
                  ariaLabel = 'Abrir ubicación en Google Maps';
                } else if (info.title === 'Teléfono') {
                  link = 'https://wa.me/573127885615';
                  ariaLabel = 'Contactar por WhatsApp';
                } else if (info.title === 'Email') {
                  link = 'mailto:corporacionduendesrc@gmail.com';
                  ariaLabel = 'Enviar correo a corporacionduendesrc@gmail.com';
                }
                if (link) {
                  return (
                    <a
                      key={index}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={ariaLabel}
                      className="block"
                      style={{ textDecoration: 'none' }}
                    >
                      <div className="card p-6 bg-primaryCard text-white border border-blue-400 hover:shadow-xl transition-all duration-300">
                        <div className="flex items-start space-x-4">
                          <div className="mt-1">
                            {info.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-sport font-semibold text-xl text-blue-400 mb-3">
                              {info.title}
                            </h3>
                            <div className="space-y-1">
                              {info.details.map((detail, detailIndex) => (
                                <p key={detailIndex} className="text-white text-sm">
                                  {detail}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  );
                } else {
                  return (
                    <div key={index} className="card p-6 bg-primaryCard text-white border border-blue-400 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="mt-1">
                          {info.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-sport font-semibold text-xl text-blue-400 mb-3">
                            {info.title}
                          </h3>
                          <div className="space-y-1">
                            {info.details.map((detail, detailIndex) => (
                              <p key={detailIndex} className="text-white text-sm">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

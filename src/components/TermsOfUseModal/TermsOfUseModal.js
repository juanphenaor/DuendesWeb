import React from 'react';
import Modal from '../Modal/Modal';

const TermsOfUseModal = ({ isOpen, onClose }) => {
  const titleStyle = {
    fontFamily: '"Montserrat", "Nunito Sans", "Inter", "Segoe UI", sans-serif',
    fontWeight: '600'
  };

  const headerTitleStyle = {
    fontFamily: '"Poppins", "Montserrat", "Inter", "Segoe UI", sans-serif',
    fontWeight: '600',
    letterSpacing: '0.025em',
    textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
  };

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Términos de Uso - Duendes Rugby Club"
      titleStyle={headerTitleStyle}
      maxWidth="max-w-4xl"
    >
      <div className="prose prose-lg max-w-none">
        <div className="text-sm text-gray-700 mb-6" style={{ fontFamily: '"Inter", sans-serif' }}>
          <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-ES', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </div>

        <section className="mb-8">
          <h3 className="text-xl text-gray-800 mb-4" style={titleStyle}>
            1. Aceptación de los Términos
          </h3>
          <div className="space-y-4 text-gray-800" style={{ fontFamily: '"Inter", "Segoe UI", sans-serif' }}>
            <p>
              Al acceder y utilizar el sitio web de Duendes Rugby Club, usted acepta 
              estar sujeto a estos términos de uso y a todas las leyes y regulaciones 
              aplicables. Si no está de acuerdo con alguno de estos términos, 
              le prohibimos usar o acceder a este sitio.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl text-gray-800 mb-4" style={titleStyle}>
            2. Uso del Sitio Web
          </h3>
          <div className="space-y-4 text-gray-800" style={{ fontFamily: '"Inter", "Segoe UI", sans-serif' }}>
            <p>Este sitio web está destinado para:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Proporcionar información sobre el Duendes Rugby Club</li>
              <li>Facilitar la comunicación entre miembros y el club</li>
              <li>Permitir el registro e inscripción a actividades</li>
              <li>Compartir noticias y eventos del club</li>
              <li>Promover los valores y actividades del rugby</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl text-gray-800 mb-4" style={titleStyle}>
            3. Conducta del Usuario
          </h3>
          <div className="space-y-4 text-gray-800" style={{ fontFamily: '"Inter", "Segoe UI", sans-serif' }}>
            <p>Al usar este sitio, usted se compromete a:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Proporcionar información veraz y precisa</li>
              <li>No usar el sitio para actividades ilegales o no autorizadas</li>
              <li>Respetar los derechos de propiedad intelectual</li>
              <li>No transmitir virus, malware o código dañino</li>
              <li>No acosar, intimidar o amenazar a otros usuarios</li>
              <li>Mantener la confidencialidad de sus credenciales de acceso</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl text-gray-800 mb-4" style={titleStyle}>
            4. Membresía y Participación
          </h3>
          <div className="space-y-4 text-gray-800" style={{ fontFamily: '"Inter", "Segoe UI", sans-serif' }}>
            <p>
              La membresía en Duendes Rugby Club requiere:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Completar el proceso de registro oficial</li>
              <li>Cumplir con los requisitos de edad según la categoría</li>
              <li>Presentar documentación médica requerida</li>
              <li>Pagar las cuotas de membresía correspondientes</li>
              <li>Seguir el reglamento interno del club</li>
              <li>Participar con espíritu deportivo y respeto</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl text-gray-800 mb-4" style={titleStyle}>
            5. Responsabilidades y Riesgos
          </h3>
          <div className="space-y-4 text-gray-800" style={{ fontFamily: '"Inter", "Segoe UI", sans-serif' }}>
            <p>
              <strong>El rugby es un deporte de contacto que conlleva riesgos inherentes.</strong>
            </p>
            <p>Al participar en actividades del club, usted:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Acepta los riesgos asociados con la práctica del rugby</li>
              <li>Se compromete a seguir las reglas de seguridad</li>
              <li>Debe mantener un seguro médico vigente</li>
              <li>Exime al club de responsabilidad por lesiones durante el juego normal</li>
              <li>Se compromete a informar sobre condiciones médicas relevantes</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl text-gray-800 mb-4" style={titleStyle}>
            6. Propiedad Intelectual
          </h3>
          <div className="space-y-4 text-gray-800" style={{ fontFamily: '"Inter", "Segoe UI", sans-serif' }}>
            <p>
              Todo el contenido de este sitio web, incluyendo pero no limitado a:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Textos, imágenes, logos y gráficos</li>
              <li>Videos y material audiovisual</li>
              <li>Diseño y estructura del sitio</li>
              <li>Marcas registradas del club</li>
            </ul>
            <p>
              Es propiedad de Duendes Rugby Club y está protegido por las leyes de 
              derechos de autor. No puede ser reproducido sin autorización expresa.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl text-gray-800 mb-4" style={titleStyle}>
            7. Pagos y Reembolsos
          </h3>
          <div className="space-y-4 text-gray-800" style={{ fontFamily: '"Inter", "Segoe UI", sans-serif' }}>
            <p>
              Las cuotas de membresía y pagos por servicios están sujetos a:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Políticas de pago establecidas por el club</li>
              <li>Fechas límite para pagos</li>
              <li>Penalidades por pagos tardíos</li>
              <li>Políticas específicas de reembolso según el servicio</li>
            </ul>
            <p>
              Los reembolsos se evalúan caso por caso según las circunstancias 
              y políticas vigentes del club.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl text-gray-800 mb-4" style={titleStyle}>
            8. Terminación de Membresía
          </h3>
          <div className="space-y-4 text-gray-800" style={{ fontFamily: '"Inter", "Segoe UI", sans-serif' }}>
            <p>
              El club se reserva el derecho de terminar la membresía por:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Violación de estos términos de uso</li>
              <li>Comportamiento inapropiado o antideportivo</li>
              <li>Falta de pago de cuotas</li>
              <li>Incumplimiento del reglamento interno</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl text-gray-800 mb-4" style={titleStyle}>
            9. Modificaciones
          </h3>
          <div className="space-y-4 text-gray-800" style={{ fontFamily: '"Inter", "Segoe UI", sans-serif' }}>
            <p>
              Duendes Rugby Club puede revisar estos términos en cualquier momento 
              sin previo aviso. Al continuar usando este sitio web después de que 
              se publiquen dichos cambios, usted acepta estar sujeto a la versión revisada.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl text-gray-800 mb-4" style={titleStyle}>
            10. Ley Aplicable
          </h3>
          <div className="space-y-4 text-gray-800" style={{ fontFamily: '"Inter", "Segoe UI", sans-serif' }}>
            <p>
              Estos términos se rigen por las leyes de Colombia. Cualquier disputa 
              relacionada con estos términos será resuelta en los tribunales competentes 
              de [Ciudad del Club].
            </p>
          </div>
        </section>

        <section className="mb-6">
          <h3 className="text-xl text-gray-800 mb-4" style={titleStyle}>
            11. Contacto
          </h3>
          <div className="space-y-4 text-gray-800" style={{ fontFamily: '"Inter", "Segoe UI", sans-serif' }}>
            <p>
              Para preguntas sobre estos términos de uso, contáctenos:
            </p>
            <div className="bg-gray-100 p-4 rounded-lg border border-gray-200">
              <div className="flex items-center space-x-3 mb-2">
                <svg className="w-5 h-5 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a
                  href="https://wa.me/573127885615"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-300 hover:text-primary-600 transition-colors"
                >
                  +57 312 7885615
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a
                  href="mailto:corporacionduendesrc@gmail.com"
                  className="text-dark-300 hover:text-primary-600 transition-colors"
                >
                  corporacionduendesrc@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Modal>
  );
};

export default TermsOfUseModal;

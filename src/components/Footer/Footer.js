import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PrivacyPolicyModal from '../PrivacyPolicyModal/PrivacyPolicyModal';
import TermsOfUseModal from '../TermsOfUseModal/TermsOfUseModal';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  return (
    <footer className="bg-dark-950 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Logo y texto */}
          <div>
            <Link to="/" className="inline-block mb-4 hover:opacity-80 transition-opacity duration-300">
              <div className="text-white">
                {/* Título principal "Duendes" - estilo del escudo */}
                <div className="font-black text-2xl lg:text-3xl tracking-wider uppercase text-blue-400" 
                     style={{
                       fontFamily: 'Impact, "Arial Black", "Helvetica Condensed", sans-serif',
                       textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                       letterSpacing: '0.1em'
                     }}>
                  DUENDES
                </div>
                {/* Subtítulo "Rugby Club" - estilo del escudo */}
                <div className="font-bold text-sm lg:text-base tracking-widest uppercase text-gray-200 -mt-1" 
                     style={{
                       fontFamily: 'Impact, "Arial Black", "Helvetica Condensed", sans-serif',
                       letterSpacing: '0.2em'
                     }}>
                  RUGBY CLUB
                </div>
              </div>
            </Link>
            <p className="text-dark-300 mb-4 max-w-md">
              Club deportivo dedicado al rugby con categorías para todas las edades. 
              Únete a nuestra familia rugbier y vive la pasión del deporte oval.
            </p>
          </div>

          {/* Información de contacto */}
          <div>
            <h3 className="font-sport font-semibold text-lg mb-4 text-secondary-500">
              Contacto
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-secondary-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="text-dark-300">
                  <p>Cancha La López</p>
                  <p>Manrique, Medellín</p>
                  <p>Colombia</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a
                  href="https://wa.me/573127885615"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-300 hover:underline focus:underline"
                  aria-label="Contactar por WhatsApp"
                >
                  312 7885615
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a
                  href="mailto:corporacionduendesrc@gmail.com"
                  className="text-dark-300 hover:underline focus:underline"
                  aria-label="Enviar correo a corporacionduendesrc@gmail.com"
                >
                  corporacionduendesrc@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mapa de ubicación - fila separada para que ocupe todo el ancho */}
        <div className="mt-8">
          <h3 className="font-sport font-semibold text-lg mb-4 text-secondary-500">
            Nuestra Ubicación
          </h3>
          <div className="relative rounded-lg overflow-hidden border-2 border-dark-700 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497.20372426147734!2d-75.55507684368896!3d6.261787524999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428ecf530838b%3A0x30da1f416b12f693!2sCancha%20La%20L%C3%B3pez!5e0!3m2!1ses!2sco!4v1643721234567!5m2!1ses!2sco"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Cancha La López - Manrique, Medellín"
              className="transition-all duration-300"
            />
            {/* Botón para ampliar mapa */}
            <div className="absolute top-4 right-4">
              <a
                href="https://www.google.com/maps/place/Cancha+La+L%C3%B3pez/@6.2617875,-75.5550768,19z/data=!4m6!3m5!1s0x8e4428ecf530838b:0x30da1f416b12f693!8m2!3d6.2616683!4d-75.5544985!16s%2Fg%2F1ptywfcqm?entry=ttu&g_ep=EgoyMDI1MDcyOS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/90 hover:bg-white text-gray-800 px-3 py-2 rounded-lg shadow-lg transition-all duration-300 flex items-center space-x-2 text-sm font-medium hover:shadow-xl"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <span>Ampliar mapa</span>
              </a>
            </div>
            {/* Mensaje informativo sobre interacción */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-black/70 text-white px-3 py-2 rounded-lg text-xs text-center backdrop-blur-sm">
                Haz clic en "Ampliar mapa" para ver más detalles y navegar
              </div>
            </div>
          </div>
        </div>

        {/* Línea divisoria y copyright */}
        <div className="border-t border-dark-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-dark-300 text-sm">
              &copy; {currentYear} Duendes Rugby Club. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button 
                onClick={() => setIsPrivacyModalOpen(true)}
                className="text-dark-300 hover:text-primary-500 transition-colors duration-300 text-sm cursor-pointer"
              >
                Política de Privacidad
              </button>
              <button 
                onClick={() => setIsTermsModalOpen(true)}
                className="text-dark-300 hover:text-primary-500 transition-colors duration-300 text-sm cursor-pointer"
              >
                Términos de Uso
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modales */}
      <PrivacyPolicyModal 
        isOpen={isPrivacyModalOpen} 
        onClose={() => setIsPrivacyModalOpen(false)} 
      />
      <TermsOfUseModal 
        isOpen={isTermsModalOpen} 
        onClose={() => setIsTermsModalOpen(false)} 
      />
    </footer>
  );
};

export default Footer;

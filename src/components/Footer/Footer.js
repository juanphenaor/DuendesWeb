import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-950 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y texto */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4 hover:opacity-80 transition-opacity duration-300">
              <div className="text-white">
                {/* Título principal "Duendes" - estilo del escudo */}
                <div className="font-black text-2xl lg:text-3xl tracking-wider uppercase" 
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

          {/* Enlaces rápidos */}
          <div>
            <h3 className="font-sport font-semibold text-lg mb-4 text-secondary-500">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-dark-300 hover:text-primary-500 transition-colors duration-300">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-dark-300 hover:text-primary-500 transition-colors duration-300">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/galeria" className="text-dark-300 hover:text-primary-500 transition-colors duration-300">
                  Galería
                </Link>
              </li>
              <li>
                <Link to="/inscripcion" className="text-dark-300 hover:text-primary-500 transition-colors duration-300">
                  Inscripción
                </Link>
              </li>
            </ul>
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
                  <p>Estadio Municipal</p>
                  <p>Calle Principal 123</p>
                  <p>Ciudad, País</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-dark-300">+34 123 456 789</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-dark-300">info@duendesrugby.com</span>
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
              <a href="#" className="text-dark-300 hover:text-primary-500 transition-colors duration-300 text-sm">
                Política de Privacidad
              </a>
              <a href="#" className="text-dark-300 hover:text-primary-500 transition-colors duration-300 text-sm">
                Términos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

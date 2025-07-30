import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Contenido principal */}
          <div className="text-white animate-fade-in">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-secondary-500 text-dark-900 rounded-full text-sm font-semibold uppercase tracking-wide">
                Club Deportivo
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-sport font-bold leading-tight mb-6">
              DUENDES
              <span className="block text-secondary-400">RUGBY CLUB</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-lg leading-relaxed">
              Pasión, garra y compañerismo. Únete a nuestra familia rugbier y vive 
              la emoción del deporte oval.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/inscripcion" className="btn-primary text-center">
                Únete al Club
              </Link>
              <Link to="/nosotros" className="btn-outline text-center">
                Conoce Más
              </Link>
            </div>

            {/* Estadísticas */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-600">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-sport font-bold text-secondary-400">15+</div>
                <div className="text-sm text-gray-300 uppercase tracking-wide">Años de Historia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-sport font-bold text-secondary-400">120+</div>
                <div className="text-sm text-gray-300 uppercase tracking-wide">Jugadores</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-sport font-bold text-secondary-400">5</div>
                <div className="text-sm text-gray-300 uppercase tracking-wide">Categorías</div>
              </div>
            </div>
          </div>

          {/* Imagen/Video placeholder */}
          <div className="relative animate-slide-up">
            <div className="relative">
              {/* Imagen principal */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="/api/placeholder/600/800"
                  alt="Duendes Rugby Club en acción"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent" />
              </div>
              
              {/* Elementos decorativos */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary-500 rounded-full opacity-80 animate-bounce-slow" />
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary-500 rounded-full opacity-80 animate-bounce-slow" style={{animationDelay: '1s'}} />
            </div>

            {/* Video de fondo alternativo */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-dark-900">En vivo</span>
              </div>
              <p className="text-xs text-gray-600 mt-1">Entrenamiento del día</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

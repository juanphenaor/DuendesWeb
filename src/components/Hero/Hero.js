import React from 'react';

const Hero = () => {
  // Función para verificar si hoy es martes (2) o jueves (4)
  const isTrainingDay = () => {
    const today = new Date().getDay();
    return today === 2 || today === 4; // 2 = martes, 4 = jueves
  };

  return (
    <section 
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(11, 12, 16, 0.8), rgba(11, 12, 16, 0.6)), url('./Escudo con fondo.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className={`grid grid-cols-1 ${isTrainingDay() ? 'lg:grid-cols-2' : 'lg:grid-cols-2'} gap-12 items-center min-h-screen py-20`}>
          {/* Contenido principal */}
          <div className="text-white animate-fade-in">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full text-sm font-semibold uppercase tracking-wide shadow-lg">
                Club Deportivo
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-sport font-bold leading-tight mb-6">
              DUENDES
              <span className="block text-blue-400">RUGBY CLUB</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-lg leading-relaxed">
              Pasión, garra y compañerismo. Únete a nuestra familia rugbier y vive 
              la emoción del deporte oval.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
                Únete al Club
              </button>
              <button className="border-2 border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 text-center">
                Conoce Más
              </button>
            </div>

            {/* Estadísticas */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-600">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-sport font-bold text-blue-400">15+</div>
                <div className="text-sm text-white uppercase tracking-wide font-medium">Años de Historia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-sport font-bold text-blue-400">120+</div>
                <div className="text-sm text-white uppercase tracking-wide font-medium">Jugadores</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-sport font-bold text-blue-400">5</div>
                <div className="text-sm text-white uppercase tracking-wide font-medium">Categorías</div>
              </div>
            </div>
          </div>

          {/* Imagen de entrenamientos - Solo visible martes y jueves */}
          {isTrainingDay() && (
            <div className="relative animate-fade-in-down">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="./Entrenamientos.jpg"
                  alt="Entrenamientos Duendes Rugby Club"
                  className="w-full h-auto object-cover"
                />
               
              </div>
            </div>
          )}
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

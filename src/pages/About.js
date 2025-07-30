import React from 'react';

const About = () => {
  const achievements = [
    {
      year: "2023",
      title: "Campeones Liga Regional",
      description: "Primer equipo logra el título de la Liga Regional después de una temporada excepcional."
    },
    {
      year: "2022",
      title: "Finalistas Copa Nacional",
      description: "Histórica participación en la final de la Copa Nacional, demostrando nuestro crecimiento."
    },
    {
      year: "2021",
      title: "Mejor Cantera del Año",
      description: "Reconocimiento a nuestro trabajo formativo con las categorías juveniles."
    },
    {
      year: "2020",
      title: "Nuevas Instalaciones",
      description: "Inauguración de nuestras modernas instalaciones deportivas."
    }
  ];

  const categories = [
    {
      name: "Pre-Rugby",
      age: "6-8 años",
      description: "Iniciación lúdica al rugby con énfasis en diversión y valores básicos del deporte.",
      icon: "🏃‍♂️",
      color: "bg-green-100 border-green-500 text-green-700"
    },
    {
      name: "Rugby Infantil",
      age: "9-12 años",
      description: "Fundamentos técnicos y tácticos del rugby adaptados a estas edades.",
      icon: "🏈",
      color: "bg-blue-100 border-blue-500 text-blue-700"
    },
    {
      name: "Rugby Juvenil",
      age: "13-17 años",
      description: "Desarrollo avanzado con participación en competiciones juveniles.",
      icon: "🏆",
      color: "bg-purple-100 border-purple-500 text-purple-700"
    },
    {
      name: "Primer Equipo",
      age: "18+ años",
      description: "Equipo senior que compite en la Liga Regional de Rugby.",
      icon: "⭐",
      color: "bg-yellow-100 border-yellow-500 text-yellow-700"
    },
    {
      name: "Veteranos",
      age: "35+ años",
      description: "Rugby social para jugadores con experiencia que buscan mantenerse activos.",
      icon: "🎖️",
      color: "bg-red-100 border-red-500 text-red-700"
    }
  ];

  const values = [
    {
      title: "Respeto",
      description: "Hacia compañeros, rivales, árbitros y las reglas del juego.",
      icon: "🤝"
    },
    {
      title: "Trabajo en Equipo",
      description: "La fuerza del grupo por encima del individualismo.",
      icon: "👥"
    },
    {
      title: "Disciplina",
      description: "Compromiso con el entrenamiento y la mejora constante.",
      icon: "💪"
    },
    {
      title: "Integridad",
      description: "Juego limpio y honestidad en todas nuestras acciones.",
      icon: "⚖️"
    },
    {
      title: "Pasión",
      description: "Amor por el rugby y entrega total en cada partido.",
      icon: "❤️"
    },
    {
      title: "Solidaridad",
      description: "Apoyo mutuo dentro y fuera del campo de juego.",
      icon: "🤗"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="hero-gradient text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-sport font-bold mb-6">
              Conoce a los <span className="text-secondary-400">Duendes</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              Más que un club de rugby, somos una familia unida por la pasión, 
              el respeto y el amor por este hermoso deporte.
            </p>
          </div>
        </div>
      </section>

      {/* Historia del Club */}
      <section className="section-padding bg-dark-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-sport font-bold text-dark-950 mb-6">
                Nuestra <span className="text-gradient">Historia</span>
              </h2>
              <div className="space-y-6 text-dark-950 leading-relaxed">
                <p>
                  El Duendes Rugby Club nació en 2008 de la mano de un grupo de apasionados 
                  del rugby que soñaban con crear un espacio donde los valores del deporte oval 
                  pudieran florecer en nuestra comunidad.
                </p>
                <p>
                  Lo que comenzó como un pequeño grupo de amigos entrenando en un campo prestado, 
                  se ha convertido en uno de los clubes de rugby más respetados de la región, 
                  con más de 120 jugadores distribuidos en todas las categorías.
                </p>
                <p>
                  A lo largo de estos años, hemos construido no solo un equipo competitivo, 
                  sino una verdadera familia rugbier que trasciende las edades y los niveles 
                  de experiencia. Nuestro compromiso es formar personas íntegras a través del rugby.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/api/placeholder/600/400"
                alt="Historia del Duendes Rugby Club"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-secondary-500 text-dark-900 p-6 rounded-2xl shadow-lg">
                <div className="text-3xl font-sport font-bold">15+</div>
                <div className="text-sm font-semibold">Años de Historia</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categorías */}
      <section className="section-padding bg-dark-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-sport font-bold text-dark-950 mb-4">
              Nuestras <span className="text-gradient">Categorías</span>
            </h2>
            <p className="text-lg text-dark-300 max-w-2xl mx-auto">
              Ofrecemos rugby para todas las edades y niveles, desde la iniciación 
              hasta la competición de alto nivel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div key={index} className={`card p-6 border-l-4 ${category.color}`}>
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{category.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-sport font-bold text-lg text-dark-900 mb-2">
                      {category.name}
                    </h3>
                    <div className="text-sm font-semibold text-gray-600 mb-3">
                      {category.age}
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-sport font-bold text-dark-900 mb-4">
              Nuestros <span className="text-gradient">Valores</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Los principios que nos guían dentro y fuera del campo de juego.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div key={index} className="card p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="font-sport font-bold text-xl text-dark-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logros */}
      <section className="section-padding bg-dark-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-sport font-bold mb-4">
              Nuestros <span className="text-secondary-400">Logros</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Hitos importantes que marcan nuestro crecimiento y evolución como club.
            </p>
          </div>

          <div className="relative">
            {/* Línea temporal */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-secondary-500 transform md:-translate-x-1/2" />
            
            <div className="space-y-8">
              {achievements.map((achievement, index) => (
                <div key={index} className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Punto en la línea temporal */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-secondary-500 rounded-full transform md:-translate-x-1/2 z-10" />
                  
                  {/* Contenido */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} pl-12 md:pl-0`}>
                    <div className={`card bg-dark-800 border border-gray-700 p-6 ${
                      index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                    }`}>
                      <div className="flex items-center space-x-4 mb-3">
                        <span className="text-2xl font-sport font-bold text-secondary-400">
                          {achievement.year}
                        </span>
                        <h3 className="font-sport font-bold text-lg">
                          {achievement.title}
                        </h3>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-sport font-bold mb-6">
            ¿Listo para unirte a los Duendes?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Forma parte de nuestra familia rugbier. No importa tu edad o experiencia, 
            tenemos un lugar para ti.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/inscripcion" className="btn-secondary">
              Inscríbete Ahora
            </a>
            <a href="/contacto" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
              Más Información
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

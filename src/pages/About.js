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
      color: "bg-green-50 border-green-400 text-green-800"
    },
    {
      name: "Rugby Infantil",
      age: "9-12 años",
      description: "Fundamentos técnicos y tácticos del rugby adaptados a estas edades.",
      icon: "🏈",
      color: "bg-blue-50 border-blue-400 text-blue-800"
    },
    {
      name: "Rugby Juvenil",
      age: "13-17 años",
      description: "Desarrollo avanzado con participación en competiciones juveniles.",
      icon: "🏆",
      color: "bg-purple-50 border-purple-400 text-purple-800"
    },
    {
      name: "Equipo A",
      age: "18+ años",
      description: "Compite en la Primera División de la Liga Antioqueña de Rugby y en el Torneo Nacional de Clubes.",
      icon: "🅰️",
      color: "bg-yellow-50 border-yellow-400 text-yellow-800"
    },
    {
      name: "Equipo B",
      age: "18+ años",
      description: "Compite en la Segunda División de la Liga Antioqueña de Rugby.",
      icon: "🅱️",
      color: "bg-yellow-50 border-yellow-400 text-yellow-800"
    },
    {
      name: "Femenino A",
      age: "16+ años",
      description: "Compite en la Primera Femenina de la Liga Antioqueña de Rugby.",
      icon: "👩‍🦰",
      color: "bg-pink-50 border-pink-400 text-pink-800"
    },
    {
      name: "Femenino B",
      age: "16+ años",
      description: "Compite en la Segunda Femenina de la Liga Antioqueña de Rugby.",
      icon: "👩‍🦱",
      color: "bg-pink-50 border-pink-400 text-pink-800"
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-[#0b0c10]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-sport font-bold mb-6 text-blue-400">
              Conoce a los <span className="text-white">Duendes</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Más que un club de rugby, somos una familia unida por la pasión, 
              el respeto y el amor por este hermoso deporte.
            </p>
          </div>
        </div>
      </section>

      {/* Historia del Club */}
      <section className="section-padding bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-sport font-bold text-blue-400 mb-6">
                Nuestra <span className="text-gray-800">Historia</span>
              </h2>
              <div className="space-y-6 text-gray-800 leading-relaxed">
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
                src={`${process.env.PUBLIC_URL}/Cover.JPG`}
                alt="Historia de Duendes Rugby Club"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-400 text-white p-6 rounded-2xl shadow-lg">
                <div className="text-3xl font-sport font-bold">15+</div>
                <div className="text-sm font-semibold">Años de Historia</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categorías */}
      <section className="section-padding bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-sport font-bold text-blue-400 mb-4">
              Nuestras <span className="text-gray-800">Categorías</span>
            </h2>
            <p className="text-lg text-gray-800 max-w-2xl mx-auto">
              Ofrecemos rugby para todas las edades y niveles, desde la iniciación 
              hasta la competición de alto nivel.
            </p>
          </div>

          <div className="flex flex-wrap justify-center">
            {categories.map((category, index) => (
              <div key={index} className="card p-4 bg-primaryCard text-white border border-blue-400 hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center h-[170px] w-[190px] m-2">
                <h3 className="font-sport font-semibold text-lg text-blue-400 mb-1 text-center">
                  {category.name}
                </h3>
                <div className="text-xs font-semibold text-gray-300 mb-1 text-center">
                  {category.age}
                </div>
                <p className="text-xs text-white leading-snug text-center">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="section-padding bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-sport font-bold text-blue-400 mb-4">
              Nuestros <span className="text-gray-800">Valores</span>
            </h2>
            <p className="text-lg text-gray-800 max-w-2xl mx-auto">
              Los principios que nos guían dentro y fuera del campo de juego.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div key={index} className="card p-6 bg-primaryCard text-white border border-blue-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="font-sport font-bold text-xl text-blue-400 mb-3">
                  {value.title}
                </h3>
                <p className="text-white leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logros */}
      <section className="section-padding bg-[#0b0c10]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-sport font-bold mb-4 text-blue-400">
              Nuestros <span className="text-white">Logros</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Hitos importantes que marcan nuestro crecimiento y evolución como club.
            </p>
          </div>

          <div className="relative">
            {/* Línea temporal */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-400 transform md:-translate-x-1/2" />
            
            <div className="space-y-8">
              {achievements.map((achievement, index) => (
                <div key={index} className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Punto en la línea temporal */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-400 rounded-full transform md:-translate-x-1/2 z-10" />
                  
                  {/* Contenido */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} pl-12 md:pl-0`}>
                    <div className={`card bg-primaryCard border border-blue-400 text-white p-6 ${
                      index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                    }`}>
                      <div className="flex items-center space-x-4 mb-3">
                        <span className="text-2xl font-sport font-bold text-blue-400">
                          {achievement.year}
                        </span>
                        <h3 className="font-sport font-semibold text-xl">
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
      <section className="section-padding bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-sport font-bold mb-6 text-blue-400">
            ¿Listo para unirte a los <span className="text-gray-800">Duendes</span>?
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            Forma parte de nuestra familia rugbier. No importa tu edad o experiencia, 
            tenemos un lugar para ti.
          </p>
          <div className="flex justify-center">
            <a href="/contacto" className="btn-primary bg-primaryCard text-white border border-blue-400 hover:bg-blue-500 font-bold">
              Contáctanos
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

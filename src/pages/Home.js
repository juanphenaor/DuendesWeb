import React, { useState } from 'react';
import Hero from '../components/Hero/Hero';
import NewsCard from '../components/NewsCard/NewsCard';
import NewsModal from '../components/NewsModal/NewsModal';

const Home = () => {
  const [selectedNews, setSelectedNews] = useState(null);

  // Datos de ejemplo para las noticias
  const newsData = [
    {
      id: 1,
      title: "Victoria épica contra Los Leones RFC",
      excerpt: "En un partido emocionante, nuestro equipo senior logró una victoria por 24-18 contra Los Leones RFC en el estadio municipal.",
      fullContent: `En un encuentro que mantuvo a todos los aficionados al borde de sus asientos, el Duendes Rugby Club se enfrentó a Los Leones RFC en lo que muchos consideran el partido del año.

El encuentro comenzó con una intensa presión por parte de Los Leones, quienes lograron anotar los primeros puntos del partido con un drop goal a los 8 minutos. Sin embargo, nuestros Duendes no tardaron en responder con una jugada magistral que culminó con un try de nuestro capitán, Juan Martínez.

El segundo tiempo fue una demostración de garra y determinación. A pesar de estar perdiendo 18-12 a los 60 minutos, el equipo no bajó los brazos. Una serie de jugadas perfectamente ejecutadas permitió remontar el marcador, con tries de Carlos Rodríguez y Miguel Ángel Fernández.

La victoria no solo nos acerca a los playoffs, sino que también demuestra el excelente trabajo que se está realizando en el club. El entrenador destacó el espíritu de equipo y la dedicación de todos los jugadores.

¡Próximo partido el sábado contra Gladiadores RC!`,
      image: "/api/placeholder/800/400",
      date: "2025-01-25",
      category: "Primer Equipo"
    },
    {
      id: 2,
      title: "Nuevas instalaciones de entrenamiento",
      excerpt: "El club inaugura nuevas instalaciones que incluyen un gimnasio moderno y vestuarios renovados para mejorar la experiencia de todos nuestros jugadores.",
      fullContent: `El Duendes Rugby Club ha dado un gran paso adelante con la inauguración de sus nuevas instalaciones de entrenamiento, que marcan un hito importante en la historia del club.

Las nuevas instalaciones incluyen:
- Gimnasio completamente equipado con maquinaria de última generación
- Vestuarios renovados con taquillas individuales
- Sala de fisioterapia y recuperación
- Área de análisis de video para estudiar jugadas
- Zona de hidratación y nutrición

Estas mejoras han sido posibles gracias al esfuerzo conjunto de socios, patrocinadores y la junta directiva del club. La inversión de más de 150,000 euros refleja nuestro compromiso con la excelencia deportiva.

"Estas instalaciones no solo beneficiarán a nuestros jugadores actuales, sino que también nos permitirán atraer nuevos talentos y ofrecer un mejor servicio a toda la comunidad rugbier", comentó el presidente del club.

La inauguración oficial será el próximo viernes con la presencia de autoridades locales y exjugadores del club.`,
      image: "/api/placeholder/800/400",
      date: "2025-01-22",
      category: "Club"
    },
    {
      id: 3,
      title: "Escuela de Rugby: Abierta la inscripción",
      excerpt: "Ya está abierta la inscripción para la escuela de rugby dirigida a niños y niñas de 6 a 16 años. ¡Únete y descubre la pasión por el rugby!",
      fullContent: `¡La Escuela de Rugby Duendes abre sus puertas para una nueva temporada llena de diversión, aprendizaje y valores deportivos!

Nuestra escuela está dirigida a niños y niñas de 6 a 16 años, divididos en las siguientes categorías:
- Pre-rugby (6-8 años): Iniciación lúdica al deporte
- Infantil (9-12 años): Fundamentos básicos del rugby
- Juvenil (13-16 años): Técnica avanzada y competición

¿Qué ofrecemos?
✓ Entrenadores titulados y con experiencia
✓ Entrenamientos 3 veces por semana
✓ Participación en torneos regionales
✓ Equipamiento completo incluido
✓ Seguro médico deportivo
✓ Valores como respeto, trabajo en equipo y disciplina

Los entrenamientos se realizan en nuestras instalaciones los martes, jueves y sábados. Incluimos clases de inglés deportivo para familiarizar a los jóvenes con la terminología internacional del rugby.

Precio especial de lanzamiento: 45€/mes (incluye todo el material)
Descuentos especiales para hermanos y familias numerosas.

¡No pierdas esta oportunidad de formar parte de la familia Duendes!`,
      image: "/api/placeholder/800/400",
      date: "2025-01-20",
      category: "Cantera"
    },
    {
      id: 4,
      title: "Torneo benéfico 'Rugby por la Esperanza'",
      excerpt: "El próximo mes organizaremos un torneo benéfico para recaudar fondos destinados a organizaciones locales de ayuda social.",
      fullContent: `El Duendes Rugby Club se enorgullece de anunciar la organización del torneo benéfico "Rugby por la Esperanza", que se celebrará el próximo 15 de febrero en nuestras instalaciones.

Este evento especial tiene como objetivo recaudar fondos para tres organizaciones benéficas locales:
- Fundación Niños del Futuro
- Asociación de Ayuda a Personas Mayores
- Centro de Acogida San Francisco

El torneo contará con la participación de 8 equipos de la región, incluyendo:
- Equipos veteranos (mayores de 35 años)
- Equipos femeninos
- Equipos juveniles
- Exhibición de rugby infantil

Programa del día:
- 9:00h: Inauguración y desayuno solidario
- 10:00h: Inicio de partidos juveniles
- 12:00h: Partidos femeninos
- 14:00h: Comida popular (paella gigante)
- 16:00h: Partidos veteranos
- 18:00h: Final y entrega de premios
- 19:30h: Cena de confraternización

Entrada solidaria: 5€ adultos, 2€ niños
Los fondos recaudados se destinarán íntegramente a las organizaciones beneficiarias.

¡Te esperamos para vivir una jornada inolvidable de rugby y solidaridad!`,
      image: "/api/placeholder/800/400",
      date: "2025-01-18",
      category: "Eventos"
    }
  ];

  const openNewsModal = (news) => {
    setSelectedNews(news);
  };

  const closeNewsModal = () => {
    setSelectedNews(null);
  };

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Sección Historia - UN TRY A LA VIDA */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Imagen QR */}
            <div className="flex justify-center lg:justify-start">
              <a 
                href="https://www.instagram.com/stories/highlights/18072344384480167/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block transform transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-2xl rounded-lg overflow-hidden max-w-lg"
              >
                <img
                  src="/QR-Duendes.jpeg"
                  alt="Código QR - Un Try a la Vida"
                  className="w-full h-auto object-contain rounded-lg"
                />
              </a>
            </div>

            {/* Contenido de texto */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-primary-600 uppercase tracking-wide mb-2">
                  Historia
                </h3>
                <h2 className="text-4xl md:text-5xl font-sport font-bold text-dark-900 mb-4">
                  UN TRY A LA VIDA
                </h2>
                <p className="text-xl text-dark-600 font-medium italic mb-6">
                  "Impulsando transformación social a través del rugby en Manrique, Medellín"
                </p>
              </div>

              <div className="prose prose-lg text-dark-700 leading-relaxed space-y-4">
                <p>
                  En el corazón de la Comuna 3 de Medellín, una de las zonas con mayores desafíos sociales y económicos de la ciudad, la Corporación Duendes Rugby Club se ha consolidado como un motor de cambio, resiliencia y esperanza.
                </p>

                <p>
                  Este proyecto comunitario, sin ánimo de lucro, utiliza el rugby como una herramienta de desarrollo humano, inclusión y liderazgo juvenil. Cada semana, más de 60 niños, niñas y adolescentes entre los 10 y 20 años acceden a un entorno seguro, estructurado y orientado al crecimiento personal, donde fortalecen habilidades como la disciplina, la comunicación asertiva, la gestión emocional, el trabajo colaborativo y la toma de decisiones.
                </p>

                <p>
                  Muchos de estos jóvenes enfrentan diariamente barreras estructurales que limitan su acceso a condiciones dignas de formación, recreación y desarrollo integral. A pesar de ello, perseveran con compromiso y pasión, demostrando que el deporte puede ser un vehículo poderoso para transformar realidades y construir tejido social.
                </p>

                <p>
                  Hoy queremos llevar este impacto aún más lejos. Por eso, hemos lanzado una campaña de recaudación de fondos con una <strong className="text-primary-600">meta de 100.000.000 COP</strong>
                </p>

                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary-600">
                  <p className="font-semibold text-dark-800 mb-3">
                    Este fondo permitirá cubrir, durante un año, aspectos fundamentales para la sostenibilidad del programa:
                  </p>
                  <ul className="space-y-2 text-dark-700">
                    <li>• Uniformes y dotación deportiva de calidad</li>
                    <li>• Transporte para la asistencia regular a entrenamientos y torneos</li>
                    <li>• Planes de nutrición básica y bienestar</li>
                    <li>• Cobertura de pólizas de seguridad y salud</li>
                    <li>• Acompañamiento académico y psicosocial</li>
                    <li>• Participación en competencias locales y nacionales que amplían horizontes y motivaciones</li>
                  </ul>
                </div>

                <p className="text-primary-700 font-semibold">
                  Tu aporte no es solo económico: es un acto de corresponsabilidad social.
                </p>

                <p>
                  Es contribuir a un modelo de transformación que apuesta por el talento, el esfuerzo colectivo y el empoderamiento de comunidades tradicionalmente excluidas.
                </p>

                <p>
                  Cada aporte, por pequeño que parezca, suma a una visión más amplia: formar ciudadanos íntegros, conscientes y comprometidos con su entorno. Si no puedes donar, puedes apoyar compartiendo esta campaña y convirtiéndote en un embajador de esta causa.
                </p>

                <p className="text-xl font-bold text-primary-600 text-center bg-primary-50 p-4 rounded-lg">
                  Hagamos equipo por el futuro y hagamos un try por la vida. Apoya, comparte, transforma.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Divisor sutil */}
      <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      
      {/* Sección de Noticias */}
      <section className="section-padding bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-sport font-semibold text-dark-900 mb-4">
              Últimas <span className="text-primary-600">Noticias</span>
            </h2>
            <p className="text-lg text-dark-600 max-w-2xl mx-auto">
              Mantente al día con todas las novedades del club, resultados de partidos, 
              eventos especiales y mucho más.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {newsData.map((news) => (
              <NewsCard
                key={news.id}
                news={news}
                onClick={() => openNewsModal(news)}
              />
            ))}
          </div>

          {/* Ver más noticias */}
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Ver más noticias
            </button>
          </div>
        </div>
      </section>

      {/* Modal de noticias */}
      {selectedNews && (
        <NewsModal
          news={selectedNews}
          onClose={closeNewsModal}
        />
      )}
    </div>
  );
};

export default Home;

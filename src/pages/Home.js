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

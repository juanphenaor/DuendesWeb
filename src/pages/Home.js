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
      title: "🏖️ Primer Torneo de Rugby Playa - 10 de Agosto",
      excerpt: "¡Los invitamos a TODOS a disfrutar de nuestro primer torneo de Rugby Playa! Habrá premiación, hidratación y snacks para todos los equipos.",
      fullContent: `¡Prepárense para vivir el rugby como nunca antes! 🏉🏖️

Este 10 de agosto los invitamos a TODOS a disfrutar de nuestro primer torneo de Rugby Playa 🏖️🏉

¿Qué incluye el evento?
✓ Habrá premiación para los equipos ganadores
✓ Hidratación gratuita durante todo el torneo
✓ Snacks para todos los equipos participantes
✓ Ambiente familiar y divertido
✓ Música y entretenimiento

¿Quieres ser parte? ¡Escríbenos en nuestras redes y asegura tu cupo! 💬

Modalidades de participación:
- Rugby Playa masculino
- Rugby Playa femenino  
- Rugby Playa mixto
- Categorías juveniles

El rugby playa es una variante emocionante que combina la técnica del rugby tradicional con la diversión y agilidad que aporta jugar en la arena. ¡Es perfecto para todos los niveles!

Lugar: Playa Municipal
Hora: 9:00 AM - 6:00 PM
Inscripciones: A través de nuestras redes sociales

¡Vamos a vivir el rugby como nunca antes! 💥

Más información en: https://www.instagram.com/p/DMdf3maRiv6/`,
      image: "./RugbyPlaya.png",
      date: "2025-08-10",
      category: "Torneo Especial"
    },
    {
      id: 2,
      title: "💙 Adopta a un Duendón",
      excerpt: "Ayúdanos a que ninguno de nuestros jóvenes se quede fuera del rugby por falta de recursos. Con tu aporte, cubrimos mensualidades e implementos deportivos.",
      fullContent: `¡Únete a nuestra causa y transforma vidas! 💙

Adopta a un Duendón 🏉

Ayúdanos a que ninguno de nuestros jóvenes se quede fuera del rugby por falta de recursos.

¿Qué significa adoptar a un Duendón?
✓ Cubrir mensualidades de entrenamiento
✓ Proporcionar implementos deportivos necesarios
✓ Garantizar acceso a uniformes y equipamiento
✓ Apoyar el transporte a entrenamientos y torneos
✓ Brindar oportunidades de desarrollo integral

Con tu aporte mensual, le das la oportunidad a un joven de:
- Desarrollar habilidades deportivas y personales
- Fortalecer valores como disciplina y trabajo en equipo
- Acceder a un entorno seguro y estructurado
- Participar en torneos y competencias
- Construir un futuro mejor a través del deporte

Tu contribución no solo impacta la vida de un joven, sino que fortalece toda nuestra comunidad rugby. Cada Duendón adoptado es una vida transformada, una familia apoyada y un futuro más prometedor.

¿Cómo puedes ser parte?
📩 Escríbenos y sé parte de esta causa

Juntos podemos hacer que el rugby sea accesible para todos. ¡Adopta a un Duendón hoy y sé parte de esta transformación social!

💬 Contáctanos a través de nuestras redes sociales o escríbenos directamente.

¡Tu apoyo hace la diferencia! 🌟`,
      image: "./AdoptaUnDuendon.png",
      date: "2025-01-25",
      category: "Causa Social"
    },
    {
      id: 3,
      title: "🏆 ¡Campeonas! Equipo Femenino Duendes",
      excerpt: "¡Celebramos con orgullo! Nuestro equipo femenino se coronó campeón del torneo Primera Femenino el 9 de julio. ¡Únete a nuestro equipo!",
      fullContent: `¡CAMPEONAS! 🏆👑

El 9 de julio de 2025 será una fecha histórica para el Duendes Rugby Club 💜

Nuestro equipo femenino se coronó CAMPEÓN del torneo Primera Femenino en una final emocionante que demostró la garra, técnica y espíritu de nuestras guerreras.

🌟 Un triunfo que representa mucho más que un título:
✓ Meses de entrenamiento dedicado y disciplina
✓ Trabajo en equipo y hermandad inquebrantable  
✓ Superación de desafíos y crecimiento personal
✓ Inspiración para toda nuestra comunidad
✓ Demostración del talento femenino en el rugby

Este logro no solo nos llena de orgullo, sino que refuerza nuestro compromiso con el rugby femenino y la igualdad en el deporte.

🚀 ¿Eres mujer y quieres ser parte de esta historia?

¡TE INVITAMOS A UNIRTE A NUESTRO EQUIPO FEMENINO! 

Buscamos mujeres adultas y jóvenes que quieran:
- Aprender y disfrutar del rugby
- Formar parte de una familia deportiva
- Desarrollar fuerza, técnica y estrategia
- Competir en torneos locales y nacionales
- Vivir la experiencia del rugby femenino

No importa tu nivel de experiencia:
✓ Principiantes: Te enseñamos desde cero con paciencia y dedicación
✓ Con experiencia: Perfecciona tu técnica y crece con nosotras
✓ Jóvenes: Desarrolla tu potencial en un ambiente seguro
✓ Adultas: Nunca es tarde para empezar una nueva pasión

🏉 ¿Qué ofrecemos?
- Entrenamientos profesionales 3 veces por semana
- Ambiente inclusivo y de apoyo mutuo
- Participación en competencias oficiales
- Equipamiento y uniformes
- Acompañamiento integral

💬 ¿Lista para ser la próxima campeona?

Escríbenos por nuestras redes sociales o ven directamente a conocer nuestras instalaciones. ¡Te esperamos con los brazos abiertos!

¡El rugby femenino está creciendo y TÚ puedes ser parte de esta revolución! 🌟

#RugbyFemenino #CampeonasDE #DuendesRugby #MujeresEnElDeporte`,
      image: "./FemeninoCampeon.png",
      date: "2025-07-09",
      category: "Rugby Femenino"
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
                  src={`${process.env.PUBLIC_URL}/QR-Duendes.jpeg`}
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

          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
              {newsData.map((news) => (
                <NewsCard
                  key={news.id}
                  news={news}
                  onClick={() => openNewsModal(news)}
                />
              ))}
            </div>
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

import React, { useState } from 'react';
import Lightbox from '../components/Lightbox/Lightbox';

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  // Datos de ejemplo para la galería
  const mediaData = [
    {
      id: 1,
      type: 'image',
      src: '/api/placeholder/600/400',
      thumbnail: '/api/placeholder/300/200',
      title: 'Victoria contra Los Leones RFC',
      category: 'partidos',
      date: '2025-01-25'
    },
    {
      id: 2,
      type: 'video',
      src: '/api/placeholder/600/400',
      thumbnail: '/api/placeholder/300/200',
      title: 'Mejores jugadas de la temporada',
      category: 'entrenamientos',
      date: '2025-01-20'
    },
    {
      id: 3,
      type: 'image',
      src: '/api/placeholder/600/400',
      thumbnail: '/api/placeholder/300/200',
      title: 'Inauguración nuevas instalaciones',
      category: 'eventos',
      date: '2025-01-22'
    },
    {
      id: 4,
      type: 'image',
      src: '/api/placeholder/600/400',
      thumbnail: '/api/placeholder/300/200',
      title: 'Entrenamiento juvenil',
      category: 'entrenamientos',
      date: '2025-01-18'
    },
    {
      id: 5,
      type: 'video',
      src: '/api/placeholder/600/400',
      thumbnail: '/api/placeholder/300/200',
      title: 'Resumen partido vs Gladiadores',
      category: 'partidos',
      date: '2025-01-15'
    },
    {
      id: 6,
      type: 'image',
      src: '/api/placeholder/600/400',
      thumbnail: '/api/placeholder/300/200',
      title: 'Escuela de Rugby - Día de la familia',
      category: 'eventos',
      date: '2025-01-12'
    },
    {
      id: 7,
      type: 'image',
      src: '/api/placeholder/600/400',
      thumbnail: '/api/placeholder/300/200',
      title: 'Celebración título liga regional',
      category: 'eventos',
      date: '2024-12-20'
    },
    {
      id: 8,
      type: 'video',
      src: '/api/placeholder/600/400',
      thumbnail: '/api/placeholder/300/200',
      title: 'Tutorial: Técnicas de placaje',
      category: 'entrenamientos',
      date: '2024-12-15'
    },
    {
      id: 9,
      type: 'image',
      src: '/api/placeholder/600/400',
      thumbnail: '/api/placeholder/300/200',
      title: 'Tercer tiempo post partido',
      category: 'eventos',
      date: '2024-12-10'
    }
  ];

  const filters = [
    { id: 'all', name: 'Todas', icon: '🏈' },
    { id: 'partidos', name: 'Partidos', icon: '⚡' },
    { id: 'entrenamientos', name: 'Entrenamientos', icon: '💪' },
    { id: 'eventos', name: 'Eventos', icon: '🎉' }
  ];

  const filteredMedia = activeFilter === 'all' 
    ? mediaData 
    : mediaData.filter(item => item.category === activeFilter);

  const openLightbox = (media) => {
    setSelectedMedia(media);
  };

  const closeLightbox = () => {
    setSelectedMedia(null);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-[#0b0c10]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-sport font-bold mb-6 text-blue-400">
              Galería <span className="text-white">Duendes</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Revive los mejores momentos, partidos épicos y celebraciones 
              que hacen único a nuestro club.
            </p>
          </div>
        </div>
      </section>

      {/* Filtros */}
      <section className="section-padding bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-blue-400 text-white shadow-lg'
                    : 'bg-primaryCard text-white border border-blue-400 hover:bg-blue-500'
                }`}
              >
                <span className="text-lg">{filter.icon}</span>
                <span>{filter.name}</span>
                <span className="text-sm opacity-75">
                  ({filter.id === 'all' ? mediaData.length : mediaData.filter(item => item.category === filter.id).length})
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Galería */}
      <section className="section-padding bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200">
        <div className="container-custom">
          {filteredMedia.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📷</div>
              <h3 className="text-2xl font-sport font-bold text-gray-600 mb-2">
                No hay contenido disponible
              </h3>
              <p className="text-gray-500">
                Prueba con otro filtro o vuelve más tarde.
              </p>
            </div>
          ) : (
            <>
              {/* Estadísticas */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="card p-6 bg-primaryCard text-white border border-blue-400 shadow-lg text-center">
                  <div className="text-3xl font-sport font-bold text-blue-400 mb-2">
                    {mediaData.filter(item => item.type === 'image').length}
                  </div>
                  <div className="text-white font-semibold">Fotografías</div>
                </div>
                <div className="card p-6 bg-primaryCard text-white border border-blue-400 shadow-lg text-center">
                  <div className="text-3xl font-sport font-bold text-blue-400 mb-2">
                    {mediaData.filter(item => item.type === 'video').length}
                  </div>
                  <div className="text-white font-semibold">Videos</div>
                </div>
                <div className="card p-6 bg-primaryCard text-white border border-blue-400 shadow-lg text-center">
                  <div className="text-3xl font-sport font-bold text-blue-400 mb-2">
                    {mediaData.length}
                  </div>
                  <div className="text-white font-semibold">Total</div>
                </div>
              </div>

              {/* Grid de medios */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredMedia.map((media) => (
                  <div
                    key={media.id}
                    className="card bg-primaryCard text-white border border-blue-400 hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 group overflow-hidden"
                    onClick={() => openLightbox(media)}
                  >
                    <div className="relative">
                      <img
                        src={media.thumbnail}
                        alt={media.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Tipo de medio */}
                      <div className="absolute top-3 right-3">
                        {media.type === 'video' ? (
                          <div className="bg-red-500 text-white rounded-full p-2">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                          </div>
                        ) : (
                          <div className="bg-gray-800/50 text-white rounded-full p-2">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                      </div>

                      {/* Botón de reproducir para videos */}
                      {media.type === 'video' && (
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      )}

                      {/* Información */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="font-semibold text-sm mb-1 line-clamp-2 text-blue-400">
                          {media.title}
                        </h3>
                        <p className="text-xs text-gray-200">
                          {new Date(media.date).toLocaleDateString('es-ES', { 
                            year: 'numeric', 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Botón cargar más */}
              <div className="text-center mt-12">
                <button className="btn-primary bg-blue-400 text-white font-bold hover:bg-blue-500">
                  Cargar más contenido
                </button>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedMedia && (
        <Lightbox
          media={selectedMedia}
          onClose={closeLightbox}
          allMedia={filteredMedia}
          currentIndex={filteredMedia.findIndex(item => item.id === selectedMedia.id)}
          onNavigate={(index) => setSelectedMedia(filteredMedia[index])}
        />
      )}
    </div>
  );
};

export default Gallery;

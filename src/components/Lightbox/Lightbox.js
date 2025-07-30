import React, { useEffect } from 'react';

const Lightbox = ({ media, onClose, allMedia, currentIndex, onNavigate }) => {
  useEffect(() => {
    // Bloquear scroll del body cuando el lightbox está abierto
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          if (currentIndex > 0) {
            onNavigate(currentIndex - 1);
          }
          break;
        case 'ArrowRight':
          if (currentIndex < allMedia.length - 1) {
            onNavigate(currentIndex + 1);
          }
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, allMedia.length, onClose, onNavigate]);

  const goToPrevious = () => {
    if (currentIndex > 0) {
      onNavigate(currentIndex - 1);
    }
  };

  const goToNext = () => {
    if (currentIndex < allMedia.length - 1) {
      onNavigate(currentIndex + 1);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getCategoryLabel = (category) => {
    const labels = {
      partidos: 'Partidos',
      entrenamientos: 'Entrenamientos',
      eventos: 'Eventos'
    };
    return labels[category] || category;
  };

  const getCategoryColor = (category) => {
    const colors = {
      partidos: 'bg-red-500',
      entrenamientos: 'bg-blue-500',
      eventos: 'bg-green-500'
    };
    return colors[category] || 'bg-gray-500';
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center">
      {/* Overlay para cerrar */}
      <div className="absolute inset-0" onClick={onClose} />
      
      {/* Contenido principal */}
      <div className="relative max-w-6xl max-h-[90vh] w-full mx-4 flex items-center justify-center">
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-colors duration-300"
          aria-label="Cerrar lightbox"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Navegación anterior */}
        {currentIndex > 0 && (
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-colors duration-300"
            aria-label="Imagen anterior"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Navegación siguiente */}
        {currentIndex < allMedia.length - 1 && (
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-colors duration-300"
            aria-label="Imagen siguiente"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

        {/* Contenido media */}
        <div className="relative">
          {media.type === 'video' ? (
            <div className="relative bg-black rounded-lg overflow-hidden max-w-4xl max-h-[70vh]">
              <video
                controls
                autoPlay
                className="w-full h-full"
                poster={media.thumbnail}
              >
                <source src={media.src} type="video/mp4" />
                Tu navegador no soporta el elemento video.
              </video>
            </div>
          ) : (
            <img
              src={media.src}
              alt={media.title}
              className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
            />
          )}

          {/* Información del media */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white rounded-b-lg">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <span className={`${getCategoryColor(media.category)} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                    {getCategoryLabel(media.category)}
                  </span>
                  <span className="text-sm text-gray-300">
                    {formatDate(media.date)}
                  </span>
                </div>
                <h3 className="text-lg font-sport font-bold mb-1">
                  {media.title}
                </h3>
                <p className="text-sm text-gray-300">
                  {currentIndex + 1} de {allMedia.length}
                </p>
              </div>

              {/* Botones de acción */}
              <div className="flex items-center space-x-2">
                <button
                  className="bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-colors duration-300"
                  aria-label="Compartir"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                </button>
                <button
                  className="bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-colors duration-300"
                  aria-label="Descargar"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicadores de navegación */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {allMedia.map((_, index) => (
          <button
            key={index}
            onClick={() => onNavigate(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>

      {/* Información de controles */}
      <div className="absolute top-4 left-4 bg-black/50 text-white text-sm rounded-lg p-3">
        <div className="space-y-1">
          <div>ESC: Cerrar</div>
          <div>← →: Navegar</div>
          <div>Click fuera: Cerrar</div>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;

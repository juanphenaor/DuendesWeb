import React, { useEffect } from 'react';

const NewsModal = ({ news, onClose }) => {
  useEffect(() => {
    // Bloquear scroll del body cuando el modal está abierto
    document.body.style.overflow = 'hidden';
    
    // Restaurar scroll cuando se cierre
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    // Cerrar modal con tecla Escape
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString('es-ES', options);
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Primer Equipo': 'bg-primary-500',
      'Club': 'bg-secondary-500',
      'Cantera': 'bg-green-500',
      'Eventos': 'bg-purple-500',
    };
    return colors[category] || 'bg-gray-500';
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-slide-up">
          {/* Header con imagen */}
          <div className="relative h-64 md:h-80">
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent" />
            
            {/* Botón cerrar */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full p-2 transition-colors duration-300"
              aria-label="Cerrar modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Categoría y fecha */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center justify-between">
                <span className={`${getCategoryColor(news.category)} text-white text-sm font-semibold px-4 py-2 rounded-full`}>
                  {news.category}
                </span>
                <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                  <span className="text-sm font-medium text-dark-900">
                    {formatDate(news.date)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contenido */}
          <div className="p-6 md:p-8 overflow-y-auto max-h-96">
            <h1 className="font-sport font-bold text-2xl md:text-3xl text-dark-900 mb-6 leading-tight">
              {news.title}
            </h1>
            
            <div className="prose prose-lg max-w-none">
              {news.fullContent.split('\n\n').map((paragraph, index) => {
                // Si el párrafo contiene viñetas (✓), renderizarlo como lista
                if (paragraph.includes('✓')) {
                  const items = paragraph.split('\n').filter(item => item.trim());
                  return (
                    <ul key={index} className="space-y-2 mb-6">
                      {items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-2">
                          <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{item.replace('✓ ', '')}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                
                // Si el párrafo contiene guiones, renderizarlo como lista con viñetas
                if (paragraph.includes('- ')) {
                  const items = paragraph.split('\n').filter(item => item.trim() && item.includes('- '));
                  return (
                    <ul key={index} className="list-disc list-inside space-y-1 mb-6 text-gray-700">
                      {items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item.replace('- ', '')}</li>
                      ))}
                    </ul>
                  );
                }
                
                // Párrafo normal
                return (
                  <p key={index} className="text-gray-700 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-gray-200">
              <button className="btn-primary flex-1">
                Compartir noticia
              </button>
              <button 
                onClick={onClose}
                className="btn-outline flex-1"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsModal;

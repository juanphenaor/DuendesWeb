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
      'Torneo Especial': 'bg-orange-500',
      'Causa Social': 'bg-pink-500',
      'Rugby Femenino': 'bg-purple-600',
    };
    return colors[category] || 'bg-gray-500';
  };

  const handleShare = async () => {
    const shareData = {
      title: news.title,
      text: `${news.title} - Duendes Rugby Club`,
      url: window.location.href
    };

    try {
      // Verificar si el navegador soporta Web Share API
      if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        await navigator.share(shareData);
      } else {
        // Fallback: copiar al portapapeles
        await navigator.clipboard.writeText(window.location.href);
        
        // Mostrar notificación temporal
        const notification = document.createElement('div');
        notification.textContent = '¡Enlace copiado al portapapeles!';
        notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-bounce';
        document.body.appendChild(notification);
        
        setTimeout(() => {
          document.body.removeChild(notification);
        }, 3000);
      }
    } catch (error) {
      console.log('Error al compartir:', error);
      
      // Fallback adicional si clipboard también falla
      const shareUrl = window.location.href;
      const shareText = `Te comparto esta noticia: ${news.title} - ${shareUrl}`;
      
      // Intentar abrir el selector de apps nativo en móviles
      if (navigator.userAgent.match(/Android|iPhone|iPad|iPod/i)) {
        window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`, '_blank');
      } else {
        // En escritorio, mostrar el enlace en un alert
        window.prompt('Copia este enlace para compartir:', shareUrl);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-0 sm:p-4 sm:py-8">
        <div className="relative bg-white rounded-none sm:rounded-2xl shadow-2xl w-full max-w-4xl animate-slide-up h-full sm:h-auto max-h-full overflow-hidden">
          {/* Header con imagen */}
          <div className="relative bg-white flex-shrink-0 rounded-none sm:rounded-t-2xl overflow-hidden p-0">
            <img
              src={news.image}
              alt={news.title}
              className="w-full object-cover max-h-[50vh] sm:object-contain sm:max-h-[70vh] block"
              style={{ display: 'block', marginTop: 0 }}
            />
            
            {/* Botón cerrar - flotando sobre la imagen */}
            <button
              onClick={onClose}
              className="absolute top-2 right-2 bg-black/40 backdrop-blur-sm hover:bg-black/60 text-white rounded-full p-2 transition-colors duration-300 shadow-lg z-20"
              aria-label="Cerrar modal"
              style={{ zIndex: 20 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Contenido - scrolleable en mobile */}
          <div className="flex-1 p-4 sm:p-6 overflow-y-auto max-h-[50vh] sm:max-h-none">
            <h1 className="font-sport font-bold text-xl sm:text-2xl md:text-3xl text-dark-900 mb-4 leading-tight">
              {news.title}
            </h1>
            
            <div className="prose prose-base max-w-none pb-20">
              {news.fullContent.split('\n\n').map((paragraph, index) => {
                // Si el párrafo contiene viñetas (✓), renderizarlo como lista
                if (paragraph.includes('✓')) {
                  const items = paragraph.split('\n').filter(item => item.trim());
                  return (
                    <ul key={index} className="space-y-2 mb-4">
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
                    <ul key={index} className="list-disc list-inside space-y-1 mb-4 text-gray-700">
                      {items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item.replace('- ', '')}</li>
                      ))}
                    </ul>
                  );
                }
                
                // Si el párrafo contiene un enlace de Instagram, renderizarlo como enlace
                if (paragraph.includes('https://www.instagram.com/')) {
                  const parts = paragraph.split('https://www.instagram.com/');
                  return (
                    <p key={index} className="text-gray-700 leading-relaxed mb-3">
                      {parts[0]}
                      <a 
                        href={`https://www.instagram.com/${parts[1]}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline font-medium"
                      >
                        https://www.instagram.com/{parts[1]}
                      </a>
                    </p>
                  );
                }
                
                // Párrafo normal
                return (
                  <p key={index} className="text-gray-700 leading-relaxed mb-3">
                    {paragraph}
                  </p>
                );
              })}
            </div>


          </div>

          {/* Botón flotante de compartir */}
          <button 
            onClick={handleShare}
            className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-primary-500 hover:bg-primary-600 text-white rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base font-medium z-30 backdrop-blur-sm"
            style={{ zIndex: 30 }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
            </svg>
            Compartir noticia
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsModal;

import React from 'react';

const NewsCard = ({ news, onClick }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
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
    <article 
      className="bg-dark-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:scale-105 group"
      onClick={onClick}
    >
      {/* Imagen */}
      <div className="relative overflow-hidden">
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 to-transparent" />
        
        {/* Categoría */}
        <div className="absolute top-4 left-4">
          <span className={`${getCategoryColor(news.category)} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
            {news.category}
          </span>
        </div>

        {/* Fecha */}
        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
          <span className="text-xs font-medium text-dark-950">
            {formatDate(news.date)}
          </span>
        </div>
      </div>

      {/* Contenido */}
      <div className="p-6">
        <h3 className="font-sport font-bold text-lg text-white mb-3 group-hover:text-secondary-500 transition-colors duration-300 line-clamp-2">
          {news.title}
        </h3>
        
        <p className="text-dark-300 text-sm leading-relaxed line-clamp-3 mb-4">
          {news.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <button className="text-secondary-500 hover:text-secondary-400 font-semibold text-sm flex items-center space-x-1 transition-colors duration-300">
            <span>Leer más</span>
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="flex items-center space-x-2 text-dark-300">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <span className="text-xs">Ver detalles</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;

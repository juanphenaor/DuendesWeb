import React, { useEffect } from 'react';

const Modal = ({ isOpen, onClose, title, children, maxWidth = 'max-w-4xl', titleStyle }) => {
  // Cerrar modal con tecla Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevenir scroll del body
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div 
          className={`relative bg-gray-800 rounded-lg shadow-2xl w-full ${maxWidth} max-h-[90vh] flex flex-col border border-gray-600`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-600 bg-gradient-to-r from-gray-900 via-gray-800 to-blue-900 rounded-t-lg">
            <h2 className="text-xl text-white" style={titleStyle || { 
              fontFamily: '"Montserrat", "Inter", "Segoe UI", sans-serif', 
              fontWeight: '600' 
            }}>
              {title}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-300 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
              aria-label="Cerrar modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Content - Flexible and scrollable */}
          <div className="flex-1 p-6 overflow-y-auto min-h-0 rounded-b-lg bg-gray-50">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

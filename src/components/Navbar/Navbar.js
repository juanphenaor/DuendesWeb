import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth/AuthProvider';
import { getUserEmail, getUserRoles } from '../../auth/jwtUtils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const location = useLocation();
  // Extraer email y roles del usuario autenticado
  const email = getUserEmail();
  const roles = getUserRoles();

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const navItems = [
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Galería', path: '/galeria' },
    { name: 'Contacto', path: '/contacto' },
  ];
  const privateNavItems = [
    { name: 'Seguros', path: '/seguros' },
    { name: 'Usuarios', path: '/usuarios' },
  ];
  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed w-full z-50  ${
      isOpen ? 'bg-[#0b0c10] shadow-lg' : (isTop ? 'bg-transparent' : 'bg-[#0b0c10]/60 shadow-lg')
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo + Email */}
          <div className="flex items-center">
            <Link to="/" className="hover:opacity-80 transition-opacity duration-300">
              <img 
                src="icon.PNG" 
                alt="Duendes Rugby Club" 
                className="w-10 h-10 lg:w-12 lg:h-12 object-contain"
              />
            </Link>
            {email && (
              <span className="ml-2 text-white text-sm font-medium">{email}</span>
            )}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-colors duration-300 hover:text-blue-400 ${
                  isActive(item.path) 
                    ? 'text-blue-400 border-b-2 border-blue-400' 
                    : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            {user && privateNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-colors duration-300 hover:text-blue-400 ${
                  isActive(item.path) 
                    ? 'text-blue-400 border-b-2 border-blue-400' 
                    : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            {!user ? (
              <Link
                to="/login"
                className={`font-medium transition-colors duration-300 hover:text-blue-400 ${
                  isActive('/login') ? 'text-blue-400 border-b-2 border-blue-400' : 'text-white'
                }`}
              >
                Ya soy un duende
              </Link>
            ) : (
              <button
                onClick={handleLogout}
                className="font-medium text-red-600 border-b-2 border-transparent hover:border-red-600 transition-colors duration-300 ml-4"
              >
                Cerrar sesión
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-blue-400 transition-colors duration-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-[#0b0c10]">
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-base font-medium hover:text-blue-400 ${
                    isActive(item.path) 
                      ? 'text-blue-400 bg-[#0b0c10]/50' 
                      : 'text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              {user && privateNavItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-base font-medium hover:text-blue-400 ${
                    isActive(item.path) 
                      ? 'text-blue-400 bg-[#0b0c10]/50' 
                      : 'text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              {!user ? (
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-base font-medium hover:text-blue-400 ${
                    isActive('/login') ? 'text-blue-400 bg-[#0b0c10]/50' : 'text-white'
                  }`}
                >
                  Ya soy un duende
                </Link>
              ) : (
                <button
                  onClick={() => { setIsOpen(false); handleLogout(); }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-red-600 border-b-2 border-transparent hover:border-red-600"
                >
                  Cerrar sesión
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

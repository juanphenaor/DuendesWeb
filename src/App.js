import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Users from './pages/Users';
import { AuthProvider } from './auth/AuthProvider';
import PrivateRoute from './auth/PrivateRoute';
import Insurance from './pages/Insurance';
import Contact from './pages/Contact';
import Registration from './pages/Registration';
import Footer from './components/Footer/Footer';
import SocialMediaFloat from './components/SocialMediaFloat/SocialMediaFloat';
import Login from './pages/Login';
import './index.css';

function App() {
  // Configuración de basename según el entorno
  const basename = process.env.NODE_ENV === 'production' ? '/DuendesWeb' : '/';
  
  return (
    <AuthProvider>
      <Router basename={basename}>
        <div className="App min-h-screen bg-gray-50">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/nosotros" element={<About />} />
              <Route path="/galeria" element={<Gallery />} />
              <Route path="/contacto" element={<Contact />} />
              <Route path="/inscripcion" element={<Registration />} />
              <Route path="/login" element={<Login />} />
              <Route path="/usuarios" element={
                <PrivateRoute>
                  <Users />
                </PrivateRoute>
              } />
              <Route path="/seguros" element={
                <PrivateRoute>
                  <Insurance />
                </PrivateRoute>
              } />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
          <SocialMediaFloat />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

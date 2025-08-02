import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Registration from './pages/Registration';
import Footer from './components/Footer/Footer';
import SocialMediaFloat from './components/SocialMediaFloat/SocialMediaFloat';
import './index.css';

function App() {
  // Configuración de basename según el entorno
  const basename = process.env.NODE_ENV === 'production' ? '/DuendesWeb' : '/';
  
  return (
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
          </Routes>
        </main>
        <Footer />
        <SocialMediaFloat />
      </div>
    </Router>
  );
}

export default App;

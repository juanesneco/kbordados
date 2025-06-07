import React, { useState } from "react";
import logo from "../assets/logo.png";
import clientLogos from "../assets/logos";

const LOGOS_PER_PAGE = 12;

function ClientsPage() {
  const [startIdx, setStartIdx] = useState(0);
  const endIdx = startIdx + LOGOS_PER_PAGE;
  const canSlideLeft = startIdx > 0;
  const canSlideRight = endIdx < clientLogos.length;

  const handleSlideLeft = () => {
    setStartIdx((prev) => Math.max(prev - LOGOS_PER_PAGE, 0));
  };
  const handleSlideRight = () => {
    setStartIdx((prev) => Math.min(prev + LOGOS_PER_PAGE, clientLogos.length - LOGOS_PER_PAGE));
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      <header className="bg-white shadow-md p-6 sticky top-0 z-50">
        <nav className="flex justify-between items-center max-w-6xl mx-auto">
          <div className="flex items-center space-x-4">
            <img src={logo} alt="Kbordados Logo" className="h-16" />
            <span className="text-2xl font-bold text-[#2C345C]">Kbordados</span>
          </div>
          <a href="/" className="bg-[#D48C54] hover:bg-[#2C345C] text-white px-4 py-2 rounded-md transition-colors">Inicio</a>
        </nav>
      </header>
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-[#2C345C] mb-12">Nuestros Clientes</h1>
        <div className="relative flex items-center justify-center">
          <button
            onClick={handleSlideLeft}
            disabled={!canSlideLeft}
            className="absolute left-0 z-10 px-4 py-6 rounded-full bg-[#2C345C] text-white text-2xl shadow-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            style={{ top: '50%', transform: 'translateY(-50%)' }}
          >
            &#8592;
          </button>
          <div className="w-full">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-10 justify-items-center">
              {clientLogos.slice(startIdx, endIdx).map((logoSrc, idx) => (
                <div key={startIdx + idx} className="flex items-center justify-center bg-white rounded-lg shadow p-6 h-48 w-48">
                  <img
                    src={logoSrc}
                    alt={`Cliente ${startIdx + idx + 1}`}
                    className="max-h-36 max-w-36 w-auto h-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={handleSlideRight}
            disabled={!canSlideRight}
            className="absolute right-0 z-10 px-4 py-6 rounded-full bg-[#2C345C] text-white text-2xl shadow-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            style={{ top: '50%', transform: 'translateY(-50%)' }}
          >
            &#8594;
          </button>
        </div>
      </main>
      <footer className="bg-[#2C345C] text-white p-6 mt-12">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <img src={logo} alt="Kbordados Logo" className="h-10" />
            <p className="mt-2 text-sm">© 2025 Kbordados. Todos los derechos reservados.</p>
          </div>
          <div className="flex space-x-6">
            <a href="/" className="hover:text-[#D48C54] transition-colors">Inicio</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ClientsPage; 
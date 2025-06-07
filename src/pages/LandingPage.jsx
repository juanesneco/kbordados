import React, { useState } from "react";
import ContactForm from "../components/ContactForm";
import logo from "../assets/logo.png";
import bordadoImg from "../assets/services/bordado.jpg";
import serigrafiaImg from "../assets/services/serigrafia.webp";
import sublimacionImg from "../assets/services/sublimacion.jpg";
import grabadoImg from "../assets/services/grabado.jpg";
import backgroundImg from "../assets/background.jpg";
import clientLogos from "../assets/logos";
import whatsappIcon from "../assets/whatsapp.webp";
import FormspreeContactForm from "../components/FormspreeContactForm";

const services = [
  {
    id: 1,
    title: "Bordado",
    description: "Ofrecemos bordados profesionales para uniformes y prendas.",
    image: bordadoImg,
  },
  {
    id: 2,
    title: "Serigrafía",
    description: "Impresiones de alta calidad para camisetas y materiales textiles.",
    image: serigrafiaImg,
  },
  {
    id: 3,
    title: "Sublimación",
    description: "Técnicas avanzadas de sublimación para lograr diseños únicos.",
    image: sublimacionImg,
  },
  {
    id: 4,
    title: "Grabado",
    description: "Grabados precisos para botones, insignias y más.",
    image: grabadoImg,
  },
];

const testimonials = [
  {
    id: 1,
    name: "Iris Capital",
    review:
      "Nos encantaron los sombreros que escogimos y sobre todo el bordado. Fueron justo lo que buscábamos, ¡muchas gracias!",
  },
  {
    id: 2,
    name: "South Baja Constructora",
    review:
      "Kbordados es nuestro proveedor de playeras de confianza, siempre entregan a tiempo y con excelente calidad.",
  },
  {
    id: 3,
    name: "N23 Constructora",
    review:
      "Me encantaron las gorras que mandé a hacer con ustedes. Le atinaron a la calidad, el bordado y el color que buscaba",
  },
];

const LOGOS_PER_PAGE = 12;

function LandingPage() {
  const [startIdx, setStartIdx] = useState(0);
  const endIdx = startIdx + LOGOS_PER_PAGE;
  const total = clientLogos.length;

  const handleSlideLeft = () => {
    if (startIdx === 0) {
      setStartIdx(total - LOGOS_PER_PAGE < 0 ? 0 : total - LOGOS_PER_PAGE);
    } else {
      setStartIdx((prev) => Math.max(prev - LOGOS_PER_PAGE, 0));
    }
  };
  const handleSlideRight = () => {
    if (endIdx >= total) {
      setStartIdx(0);
    } else {
      setStartIdx((prev) => Math.min(prev + LOGOS_PER_PAGE, total - LOGOS_PER_PAGE));
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Header */}
      <header className="bg-white shadow-md p-6 sticky top-0 z-50">
        <nav className="flex items-center max-w-6xl mx-auto justify-between">
          <div className="flex items-center space-x-4 flex-shrink-0">
            <img src={logo} alt="Kbordados Logo" className="h-12" />
          </div>
          <ul className="hidden md:flex space-x-6 text-gray-800 flex-grow justify-center">
            <li><a href="#inicio" className="hover:text-[#2C345C] transition-colors">Inicio</a></li>
            <li><a href="#servicios" className="hover:text-[#2C345C] transition-colors">Servicios</a></li>
            <li><a href="#clientes" className="hover:text-[#2C345C] transition-colors">Clientes</a></li>
            <li><a href="#trabajos" className="hover:text-[#2C345C] transition-colors">Testimonios</a></li>
            <li><a href="#contacto" className="hover:text-[#2C345C] transition-colors">Contacto</a></li>
          </ul>
          <div className="flex items-center space-x-2 flex-shrink-0">
            <a href="#contacto" className="bg-[#D48C54] hover:bg-[#2C345C] text-white px-4 py-2 rounded-md transition-colors">Contáctanos</a>
            <a
              href="https://api.whatsapp.com/send/?phone=526241295649&text=%F0%9F%91%8B+Hola+Kbordados%2C+me+comunico+para+solicitar+una+cotizaci%C3%B3n+de+productos.+%0A%0AEstos+son+los+productos+que+necesito%3A%0A-+%5BEjemplo+de+producto+1%5D%0A-+%5BEjemplo+de+producto+2%5D%0A%0ALa+fecha+l%C3%ADmite+para+recibirlos+es%3A+%5Bdd%2Fmm%2Faaaa%5D%0A%0AQuedo+atento+a+su+respuesta.+Gracias.%0A&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 flex items-center justify-center bg-green-500 hover:bg-green-600 rounded-full p-2 shadow transition-colors"
              title="Contáctanos por WhatsApp"
            >
              <img src={whatsappIcon} alt="WhatsApp" className="h-7 w-7" />
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="bg-cover bg-center h-screen flex items-center justify-center relative" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Kbordados</h1>
          <p className="text-xl mb-8">Convertimos tu idea en productos físicos de alta calidad</p>
          <a href="#contacto" className="bg-[#D48C54] hover:bg-[#2C345C] text-white px-6 py-3 rounded-md transition-colors">Obtén tu cotización ahora</a>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div key={service.id} className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Carousel Section */}
      <section id="clientes" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Nuestros Clientes</h2>
          <div className="relative flex items-center justify-center">
            <button
              onClick={handleSlideLeft}
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
              className="absolute right-0 z-10 px-4 py-6 rounded-full bg-[#2C345C] text-white text-2xl shadow-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              style={{ top: '50%', transform: 'translateY(-50%)' }}
            >
              &#8594;
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="trabajos" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Lo que dicen nuestros clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white shadow-md p-4 rounded-lg border border-gray-200">
                <p className="text-gray-700 italic mb-2">"{testimonial.review}"</p>
                <p className="text-gray-800 font-bold">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contacto" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-8">Contáctanos</h2>
          <FormspreeContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C345C] text-white p-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <img src={logo} alt="Kbordados Logo" className="h-10" />
            <p className="mt-2 text-sm">© 2025 Kbordados. Todos los derechos reservados.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#inicio" className="hover:text-[#D48C54] transition-colors">Inicio</a>
            <a href="#servicios" className="hover:text-[#D48C54] transition-colors">Servicios</a>
            <a href="#clientes" className="hover:text-[#D48C54] transition-colors">Clientes</a>
            <a href="#trabajos" className="hover:text-[#D48C54] transition-colors">Testimonios</a>
            <a href="#contacto" className="hover:text-[#D48C54] transition-colors">Contacto</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage; 
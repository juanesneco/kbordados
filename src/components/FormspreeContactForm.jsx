import React, { useState } from "react";

// Replace this with your real Formspree endpoint
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mvgrgnee";

const SERVICE_OPTIONS = [
  "Bordados",
  "Serigrafía",
  "Sublimación",
  "Grabado",
  "Otro",
];

function FormspreeContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "", services: [] });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      // Only allow numbers and max 10 digits
      const cleaned = value.replace(/\D/g, "").slice(0, 10);
      setForm({ ...form, [name]: cleaned });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleServiceTag = (option) => {
    setForm((prev) => {
      const services = prev.services.includes(option)
        ? prev.services.filter((s) => s !== option)
        : [...prev.services, option];
      return { ...prev, services };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...form,
          services: form.services.join(", "),
        }),
      });
      const data = await response.json();
      if (data.ok) {
        setStatus("SUCCESS");
        setForm({ name: "", email: "", phone: "", message: "", services: [] });
      } else {
        setStatus("ERROR");
      }
    } catch (err) {
      setStatus("ERROR");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block text-gray-700 font-bold mb-1">Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D48C54]"
          placeholder="Tu nombre completo"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-gray-700 font-bold mb-1">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D48C54]"
          placeholder="tu@email.com"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-gray-700 font-bold mb-1">Teléfono</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          required
          pattern="\d{10}"
          maxLength={10}
          inputMode="numeric"
          className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D48C54]"
          placeholder="10 dígitos"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-bold mb-1">¿Qué tipo de servicio buscas?</label>
        <div className="flex flex-wrap gap-2">
          {SERVICE_OPTIONS.map((option) => (
            <button
              type="button"
              key={option}
              onClick={() => handleServiceTag(option)}
              className={`px-4 py-2 rounded-full border transition-colors text-sm font-medium
                ${form.services.includes(option)
                  ? 'bg-[#D48C54] text-white border-[#D48C54]'
                  : 'bg-white text-[#2C345C] border-[#2C345C] hover:bg-[#2C345C] hover:text-white'}
              `}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-gray-700 font-bold mb-1">Instrucciones para los productos a cotizar</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D48C54]"
          placeholder="Describe los productos, cantidades, colores, fechas, etc."
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-[#D48C54] hover:bg-[#2C345C] text-white px-6 py-3 rounded-md w-full transition-colors"
        disabled={loading}
      >
        {loading ? "Enviando..." : "Enviar mensaje"}
      </button>
      {status === "SUCCESS" && (
        <p className="text-green-600 text-center mt-4">¡Gracias! Tu mensaje fue enviado correctamente.</p>
      )}
      {status === "ERROR" && (
        <p className="text-red-600 text-center mt-4">Hubo un error al enviar el mensaje. Intenta de nuevo.</p>
      )}
    </form>
  );
}

export default FormspreeContactForm; 
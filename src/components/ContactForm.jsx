import React, { useState } from "react";

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Integration with Formspree or similar can be added here
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
        <label htmlFor="message" className="block text-gray-700 font-bold mb-1">Cuéntanos qué necesitas</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D48C54]"
          placeholder="¿Qué tipo de servicio buscas?"
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-[#D48C54] hover:bg-[#2C345C] text-white px-6 py-3 rounded-md w-full transition-colors"
      >
        Enviar mensaje
      </button>
      {submitted && (
        <p className="text-green-600 text-center mt-4">¡Gracias! Te responderemos pronto.</p>
      )}
    </form>
  );
}

export default ContactForm; 
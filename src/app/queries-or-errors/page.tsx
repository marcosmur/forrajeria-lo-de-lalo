'use client'
import { useState } from 'react'

export default function Contacto() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = () => {
    setTimeout(() => {
      setFormSubmitted(true)
    }, 500)
  }

  return (
    <div className="min-h-screen bg-white text-black p-8">
      <h2 className="text-3xl font-bold mb-6">Consultas o errores</h2>

      <form
        action="https://formsubmit.co/marcosmurphy11@gmail.com"
        method="POST"
        onSubmit={handleSubmit}
        target="_blank"
        className="space-y-6 max-w-xl"
      >
        {/* Evitar captcha y redirección */}
        <input type="hidden" name="_captcha" value="false" />
        

        {/* Nombre */}
        <div>
          <label className="block mb-2 font-semibold">Nombre</label>
          <input
            type="text"
            name="nombre"
            required
            className="w-full p-2 border rounded bg-white text-black"
          />
        </div>

        {/* Correo electrónico */}
        <div>
          <label className="block mb-2 font-semibold">Correo electrónico</label>
          <input
            type="email"
            name="email"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            className="w-full p-2 border rounded bg-white text-black"
          />
        </div>

        {/* Teléfono */}
        <div>
          <label className="block mb-2 font-semibold">Número de teléfono</label>
          <input
            type="tel"
            name="telefono"
            required
            pattern="[0-9]{8,15}"
            className="w-full p-2 border rounded bg-white text-black"
          />
        </div>

        {/* Consulta */}
        <div>
          <label className="block mb-2 font-semibold">Consulta o duda</label>
          <textarea
            name="mensaje"
            required
            maxLength={500}
            rows={5}
            className="w-full p-2 border rounded bg-white text-black"
          ></textarea>
        </div>

        {/* Botón de envío */}
        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded transition"
        >
          Enviar consulta
        </button>
      </form>

      {/* Mensaje de éxito */}
      {formSubmitted && (
        <div className="mt-6 p-4 bg-green-100 text-green-700 rounded">
          ¡Tu consulta fue enviada con éxito!
        </div>
      )}
    </div>
  )
}

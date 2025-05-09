'use client';

import Image from 'next/image';
import fondo from '@/assets/programacion.jpeg';

export default function AboutPage() {
  return (
    <main className="relative min-h-screen text-white">
      {/* Imagen de fondo */}
      <Image
        src={fondo}
        alt="Fondo programación"
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0 w-full h-full z-0 brightness-75"
        priority
      />

      {/* Contenido */}
      <section className="relative z-10 px-6 py-16 flex flex-col items-center justify-center text-center">
        <div className="bg-black bg-opacity-60 p-8 rounded-xl max-w-3xl">
          <h1 className="text-4xl font-bold mb-6 text-red-400">Sobre mí</h1>

          <p className="mb-4 text-lg">
            Soy <strong>Marcos Murphy</strong>, desarrollador web Full Stack egresado de Soy Henry. Me apasiona la tecnología y crear soluciones digitales para la vida real.
          </p>

          <p className="mb-4 text-lg">
            Esta página fue construida con <strong>Next.js</strong> y <strong>Tailwind CSS</strong>, pensada para representar a nuestra forrajería de forma clara, moderna y profesional.
          </p>

          <p className="mb-6 text-lg">
            Podés contactarme si tenés consultas o necesitás una web personalizada.
          </p>

          <a
            href="https://wa.me/542324468941"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl text-lg shadow-lg transition"
          >
            📲 Escribime por WhatsApp
          </a>

          <div className="mt-8 text-sm text-gray-300">
            <p>📧 marcosmurphy11@gmail.com</p>
            <p>📍 Mercedes, Buenos Aires</p>
          </div>
        </div>
      </section>
    </main>
  );
}

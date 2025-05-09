'use client'
import Image from 'next/image'
import fondo from '@/assets/fondo-forrajeria.jpg'

export default function Home() {
return (
    <main className="bg-white min-h-screen">
    

      {/* Hero Section */}
    <section className="relative w-full h-[70vh] flex items-center justify-center text-center">
        {/* Imagen de fondo */}
        <Image
        src={fondo}
        alt="Fondo forrajería"
        layout="fill"
        objectFit="cover"
        className="z-0 brightness-75"
        />
        {/* Texto sobre la imagen */}
        <div className="z-10 text-white px-4">
        <h2 className="text-4xl md:text-5xl font-bold drop-shadow-lg">Todo para tus animales, en un solo lugar</h2>
        <p className="mt-4 text-xl md:text-2xl drop-shadow-lg">Alimentos, accesorios y más, con atención personalizada</p>
        <div className="mt-6 flex gap-4 justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-xl shadow-lg transition">Ver productos</button>
            <button className="border border-white hover:bg-white hover:text-red-600 px-6 py-2 rounded-xl transition">Hacenos tu pedido</button>
        </div>
        </div>
    </section>

      {/* Galería de fotos */}
    <section className="py-12 px-6">
        <h3 className="text-2xl text-black font-semibold text-center mb-8">Nuestra forrajería</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <p className="text-center text-gray-700 mt-6 max-w-3xl mx-auto">
  Desde hace más de 10 años, brindamos productos y atención personalizada para el bienestar de tus mascotas y animales de granja. Somos una forrajería familiar comprometida con la calidad y la cercanía con nuestros clientes.
</p>
<p className="text-center text-gray-700 mt-6 max-w-3xl mx-auto">
  Nos destacamos por la atención personalizada, la confianza y la variedad de productos. Creemos en el trato cercano y en ayudar a nuestros clientes a encontrar exactamente lo que necesitan.
</p>
<p className="text-center text-gray-700 mt-6 max-w-3xl mx-auto">
  Te invitamos a conocernos en persona. Nuestro local está abierto todos los días con un equipo dispuesto a asesorarte y ayudarte a elegir lo mejor para tus animales.
</p>
        </div>
    </section>
    </main>
)
}

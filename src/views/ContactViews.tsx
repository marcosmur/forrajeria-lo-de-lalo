import Image from "next/image";
import Link from "next/link";
import perroArrugado from "@/assets/perroArrugado.jpg";

export default function Contacto() {
return (
    <div className="relative min-h-screen flex flex-col md:flex-row items-center justify-center p-8 overflow-hidden">
      {/* Imagen de fondo */}
    <Image
        src={perroArrugado}
        alt="Fondo perro"
        fill
        priority
        className="object-cover z-0 brightness-75"
    />

      {/* Contenido sobre la imagen */}
    <div className="relative z-10 md:w-1/2 text-center md:text-left mb-10 md:mb-0 text-white">
        <h1 className="text-5xl font-extrabold mb-4">Contáctanos</h1>
        <p className="text-lg mb-6">
        ¡Gracias por visitarnos! Si tenés alguna duda o consulta, escribinos por WhatsApp y te responderemos lo antes posible.
        </p>
        <Link
        href="https://wa.me/5492324468941?text=Hola!%20Quisiera%20hacer%20una%20consulta"
        target="_blank"
        className="inline-block bg-green-500 text-white px-8 py-3 rounded-full shadow-md hover:bg-green-600 transition"
        >
        Escribir por WhatsApp
        </Link>
    </div>

      {/* GIF a la derecha */}
    <div className="relative z-10 md:w-1/2 hidden md:flex justify-center">
        <img
        src="https://i.gifer.com/7do.gif"
        alt="Contacto"
        className="w-72 h-auto rounded-xl shadow-lg"
        />
    </div>
    </div>
);
}

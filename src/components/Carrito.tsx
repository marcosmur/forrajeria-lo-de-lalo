"use client";

import { useCart } from "@/context/CartContext";

export default function Carrito() {
  const { carrito, eliminarDelCarrito, limpiarCarrito } = useCart();

  if (carrito.length === 0) {
    return (
      <aside className="p-4 bg-gray-100 text-black fixed right-4 top-20 w-64 shadow-lg rounded">
        <h2 className="font-bold text-lg">Carrito</h2>
        <p className="text-sm mt-2">El carrito está vacío.</p>
      </aside>
    );
  }

  return (
    <aside className="p-4 bg-gray-100 text-black fixed right-4 top-20 w-64 shadow-lg rounded">
      <h2 className="font-bold text-lg mb-2">Carrito</h2>

      <ul className="space-y-2 max-h-60 overflow-y-auto">
        {carrito.map((p) => (
          <li key={p.id} className="flex justify-between items-center text-sm">
            <span>{p.nombre}</span>
            <button
              onClick={() => eliminarDelCarrito(p.id)}
              className="text-red-600 hover:underline"
            >
              X
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-col gap-2">
        <button
          onClick={limpiarCarrito}
          className="bg-gray-300 text-black px-3 py-1 rounded hover:bg-gray-400"
        >
          Vaciar
        </button>
        <button
          onClick={() => {
            const mensaje = carrito
              .map((p) => `- ${p.nombre}`)
              .join("%0A"); // salto de línea en WhatsApp
            const url = `https://wa.me/5492324519732?text=Quiero consultar el precio de:%0A${mensaje}`;
            window.open(url, "_blank");
            limpiarCarrito();
          }}
          className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
        >
          Comprar
        </button>
      </div>
    </aside>
  );
}

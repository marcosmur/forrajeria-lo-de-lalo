"use client";
import React from "react";

type Product = {
  id: number;
  nombre: string;
  categoria: string;
  imagen: string;
  precio: number;
};

type Props = {
  producto: Product;
  onAddToCart?: (producto: Product) => void;
};

export default function Card({ producto, onAddToCart }: Props) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center">
      <img
        src={producto.imagen || "/placeholder.png"}
        alt={producto.nombre}
        className="w-32 h-32 object-contain"
      />
      <h2 className="mt-4 font-bold text-white text-center">{producto.nombre}</h2>
      <p className="text-gray-300">${producto.precio}</p>
      <button
        onClick={() => {
          console.log("Card -> click agregar:", producto);
          console.log("Card -> onAddToCart existe?", !!onAddToCart);
          onAddToCart?.(producto);
        }}
        className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 pointer-events-auto"
      >
        Agregar
      </button>
    </div>
  );
}

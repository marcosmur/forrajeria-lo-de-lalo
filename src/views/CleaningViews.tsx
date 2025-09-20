"use client";

import { useEffect, useState } from "react";
import Card from "@/components/Card";
import SearchBar from "@/components/SearchBar"; // 🔹 Agregado: importamos la barra de búsqueda
import { useCart } from "@/context/CartContext"; // 🔹 CAMBIO: importamos el contexto

type Product = {
  id: number;
  nombre: string;
  categoria: string;
  imagen: string;
  precio: number;
};

const CleaningViews = () => {
  const [productos, setProductos] = useState<Product[]>([]);
  const [filtro, setFiltro] = useState(""); // 🔹 Agregado: estado para la búsqueda

  // 🔹 CAMBIO: obtenemos la función del contexto
  const { agregarAlCarrito } = useCart(); 

  useEffect(() => {
    fetch("/data/productos.json")
      .then((res) => res.json())
      .then((data) => {
        // 🔹 Normaliza categorías a minúsculas y filtra solo los de "limpieza"
        const filtrados = data.filter(
          (p: Product) => p.categoria.toLowerCase() === "limpieza"
        );
        setProductos(filtrados);
      })
      .catch((err) => console.error("Error:", err));
  }, []);

  // 🔹 Filtrar productos según la búsqueda (además de la categoría)
  const productosFiltrados = productos.filter((p) =>
    p.nombre.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Productos de Limpieza</h1>

      {/* 🔹 Agregado: Barra de búsqueda */}
      <SearchBar onSearch={setFiltro} />

      {/* 🔹 Modificado: ahora pasamos onAddToCart a cada Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {productosFiltrados.map((producto) => (
          <Card
            key={producto.id}
            producto={producto}
            onAddToCart={agregarAlCarrito} // 🔹 CAMBIO: PASAMOS LA FUNCIÓN DEL CONTEXTO
          />
        ))}
      </div>
    </div>
  );
};

export default CleaningViews;

"use client";

import { useEffect, useState } from "react";
import Card from "@/components/Card";
import SearchBar from "@/components/SearchBar";
import { useCart } from "@/context/CartContext"; 




type Product = {
  id: number;
  nombre: string; 
  categoria: string;
  imagen: string;  
  precio: number;  
};

const DiversViews = () => {
  const [productos, setProductos] = useState<Product[]>([]);
   const [filtro, setFiltro] = useState(""); // 🔹 Agregado: estado para la búsqueda

   // 🔹 CAMBIO: obtenemos la función del contexto
const { agregarAlCarrito } = useCart();


  useEffect(() => {
    fetch("/data/productos.json")
      .then((res) => res.json())
      .then((data) => {
        // Normaliza las categorías a minúsculas para comparar
        const filtrados = data.filter((p: Product) => 
          p.categoria.toLowerCase() === "varios"
        );
        console.log("Productos filtrados:", filtrados); // Verifica en consola
        setProductos(filtrados);
      })
      .catch((err) => console.error("Error:", err));
  }, []);
  const productosFiltrados = productos.filter((p) =>
  p.nombre.toLowerCase().includes(filtro.toLowerCase())
);


 return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Productos varios</h1>

      {/* 🔹 Agregado: Barra de búsqueda */}
      <SearchBar onSearch={setFiltro} />

      {/* 🔹 Modificado: ahora mostramos productosFiltrados en vez de productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {productosFiltrados.map((producto) => (
          <Card
                    key={producto.id}
                    producto={producto}
                    onAddToCart={agregarAlCarrito} 
                    />
        ))}
      </div>
    </div>
  );
};

export default DiversViews;
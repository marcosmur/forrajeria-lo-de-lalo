 "use client";

import { useEffect, useState } from "react";
import Card from "@/components/Card";


type Product = {
  id: number;
  nombre: string;  // Cambiado de 'name' a 'nombre'
  categoria: string;
  imagen: string;  // Cambiado de 'image' a 'imagen'
  precio: number;  // Cambiado de 'price' a 'precio'
};

const DogsandcatsViews  = () => {
  const [productos, setProductos] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/data/productos.json")
      .then((res) => res.json())
      .then((data) => {
        // Normaliza las categorías a minúsculas para comparar
        const filtrados = data.filter((p: Product) => 
          p.categoria.toLowerCase() === "perro y gato"
        );
        console.log("Productos filtrados:", filtrados); // Verifica en consola
        setProductos(filtrados);
      })
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {productos.map((producto) => (
        <Card 
          key={producto.id} 
          producto={{
            ...producto,
            nombre: producto.nombre,    // Mapea nombre -> name
            imagen: producto.imagen,   // Mapea imagen -> image
            precio: producto.precio    // Mapea precio -> price
          }} 
        />
      ))}
    </div>
  );
};

export default DogsandcatsViews ;
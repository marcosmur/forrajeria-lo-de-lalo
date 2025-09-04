"use client";

import { useEffect, useState } from "react";
import Card from "@/components/Card";
import SearchBar from "@/components/SearchBar";
import CategoryFilter from "@/components/CategoryFilter";

type Product = {
  id: number;
  nombre: string;
  categoria: string;
  imagen: string;
  precio: number;
};

export default function ProductosPage() {
  const [productos, setProductos] = useState<Product[]>([]);
  const [filtro, setFiltro] = useState("");
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string | null>(null);

  // Cargar productos desde JSON
  useEffect(() => {
    fetch("/data/productos.json")
      .then((res) => res.json())
      .then((data: Product[]) => {
        setProductos(data);
      })
      .catch((err) => console.error("Error al cargar productos:", err));
  }, []);

  // Obtener categorías únicas dinámicamente
  const categorias = Array.from(new Set(productos.map((p) => p.categoria)));

  // Filtrar productos por búsqueda y categoría
  const productosFiltrados = productos.filter((p) => {
    const coincideCategoria = categoriaSeleccionada ? p.categoria === categoriaSeleccionada : true;
    const coincideNombre = p.nombre.toLowerCase().includes(filtro.toLowerCase());
    return coincideCategoria && coincideNombre;
  });

  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar filtros */}
      <aside className="md:w-64 p-4">
        <CategoryFilter
          categorias={categorias}
          onFilter={setCategoriaSeleccionada}
          categoriaSeleccionada={categoriaSeleccionada}
        />
      </aside>

      {/* Contenido principal */}
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">Todos los productos</h1>

        {/* Barra de búsqueda */}
        <SearchBar onSearch={setFiltro} />

        {/* Grid de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {productosFiltrados.map((p) => (
            <Card key={p.id} producto={p} />
          ))}
        </div>
      </main>
    </div>
  );
}

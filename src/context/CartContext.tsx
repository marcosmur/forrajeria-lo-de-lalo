"use client";

import { createContext, useState, useContext, ReactNode } from "react";

type Product = { id: number; nombre: string; categoria: string; imagen: string; precio: number; };

type CartContextType = {
  carrito: Product[];
  agregarAlCarrito: (producto: Product) => void;
  eliminarDelCarrito: (id: number) => void;
  limpiarCarrito: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [carrito, setCarrito] = useState<Product[]>([]);

  const agregarAlCarrito = (producto: Product) => {
    setCarrito((prev) => {
      const next = [...prev, producto];
      console.log("CartContext -> agregarAlCarrito:", producto);
      console.log("CartContext -> carrito ahora:", next);
      return next;
    });
  };

  const eliminarDelCarrito = (id: number) => {
    setCarrito((prev) => prev.filter((p) => p.id !== id));
  };

  const limpiarCarrito = () => setCarrito([]);

  return (
    <CartContext.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito, limpiarCarrito }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart debe usarse dentro de un CartProvider");
  return context;
};

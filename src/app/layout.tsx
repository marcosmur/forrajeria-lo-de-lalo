import type { Metadata } from "next";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Carrito from "@/components/Carrito";
import Footer from "@/components/Footer"; // 👈 importar Footer
import "./globals.css";

export const metadata: Metadata = {
  title: "Forrajería",
  description: "Tienda de productos para animales",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <CartProvider>
          <Navbar />
          <Carrito />
          <main className="min-h-screen">{children}</main>
          <Footer /> {/* 👈 acá se renderiza el footer en todas las páginas */}
        </CartProvider>
      </body>
    </html>
  );
}

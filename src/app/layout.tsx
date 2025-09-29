import type { Metadata } from "next";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Carrito from "@/components/Carrito";
import Footer from "@/components/footer";
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
      <body className="amp-mask">
  <CartProvider>
    <Navbar />
    <Carrito />
    <main className="min-h-screen">{children}</main>
    <Footer />
  </CartProvider>
</body>
    </html>
  );
}

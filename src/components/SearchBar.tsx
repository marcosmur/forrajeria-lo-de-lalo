"use client";
import { useState } from "react";

export default function SearchBar({ onSearch }: { onSearch: (value: string) => void }) {
const [busqueda, setBusqueda] = useState("");

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setBusqueda(value);
    onSearch(value);
};

return (
    <input
    type="text"
    placeholder="Buscar productos..."
    value={busqueda}
    onChange={handleChange}
    className="w-full p-3 border rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
);
}

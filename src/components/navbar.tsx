'use client'
import { useState } from 'react'
import Image from 'next/image'
import logo from '@/assets/logo.png'

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false) // para menú responsive principal
  const [dropdownOtrosOpen, setDropdownOtrosOpen] = useState(false) // "Otros productos"
  const [dropdownMascotasOpen, setDropdownMascotasOpen] = useState(false) // "Mascotas"

  return (
    <nav className="bg-red-700 shadow">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/home" className="flex items-center space-x-3">
          <Image src={logo} alt="" className="h-8 w-8" />
          <span className="text-white text-2xl font-semibold">Forrajería Lo de Lalo</span>
        </a>

        {/* Botón responsive */}
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 text-white rounded-lg md:hidden"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Menú completo */}
        <div className={`${dropdownOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}>
          <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 text-white">
            <li><a href="/divers" className="block py-2 px-3 hover:underline">varios</a></li>

            {/* Dropdown "Otros productos" */}
            <li className="relative">
              <button
                onClick={() => setDropdownOtrosOpen(!dropdownOtrosOpen)}
                className="flex items-center justify-between w-full py-2 px-3 hover:underline"
              >
                Otros productos
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 10 6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M1 1l4 4 4-4" />
                </svg>
              </button>
              {dropdownOtrosOpen && (
                <div className="absolute mt-2 bg-red-800 rounded shadow w-44 z-10">
                  <ul className="text-white text-sm">
                    <li>
                      <a href="/poison" className="block px-4 py-2 hover:bg-red-600">
                        Venenos
                      </a>
                    </li>
                    <li>
                      <a href="/gardening" className="block px-4 py-2 hover:bg-red-600">
                        Jardinería
                      </a>
                    </li>
                    <li>
                      <a href="/incense" className="block px-4 py-2 hover:bg-red-600">
                        Sahumerio
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            {/* Dropdown "Mascotas" */}
            <li className="relative">
              <button
                onClick={() => setDropdownMascotasOpen(!dropdownMascotasOpen)}
                className="flex items-center justify-between w-full py-2 px-3 hover:underline"
              >
                Mascotas
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 10 6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M1 1l4 4 4-4" />
                </svg>
              </button>
              {dropdownMascotasOpen && (
                <div className="absolute mt-2 bg-red-800 rounded shadow w-44 z-10">
                  <ul className="text-white text-sm">
                    <li><a href="/pets-dogs" className="block px-4 py-2 hover:bg-red-600">Perros</a></li>
                    <li><a href="/pets-cats" className="block px-4 py-2 hover:bg-red-600">Gatos</a></li>
                    <li><a href="/pets-cats" className="block px-4 py-2 hover:bg-red-600">Perros y gatos</a></li>
                  </ul>
                </div>
              )}
            </li>

            <li><a href="/location-hours" className="block py-2 px-3 hover:underline">Ubicación y horarios</a></li>
            <li><a href="/contac" className="block py-2 px-3 hover:underline">Contacto</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

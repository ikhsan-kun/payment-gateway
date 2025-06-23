import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-blue-600 shadow">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <a href="/" className="text-white font-extrabold text-2xl tracking-tight">
          JualBeliKita
        </a>
        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block h-1 w-6 bg-white rounded transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block h-1 w-6 bg-white rounded my-1 transition-all duration-300 ${open ? "opacity-0" : ""}`}></span>
          <span className={`block h-1 w-6 bg-white rounded transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
        {/* Menu */}
        <ul className="hidden md:flex space-x-8 items-center">
          <li>
            <a href="/" className="text-white hover:text-blue-200 font-medium transition">Home</a>
          </li>
          <li>
            <a href="#produk" className="text-white hover:text-blue-200 font-medium transition">Produk</a>
          </li>
          <li>
            <a href="#testimoni" className="text-white hover:text-blue-200 font-medium transition">Testimoni</a>
          </li>
          <li>
            <a href="#kontak" className="bg-white text-blue-600 px-4 py-2 rounded font-semibold hover:bg-blue-100 transition">Kontak</a>
          </li>
        </ul>
      </div>
     {/* mobile menu */}
      {open && (
        <ul className="md:hidden bg-blue-600 px-4 pb-4 space-y-2 animate-fade-in-down">
          <li>
            <a href="/" className="block text-white py-2 px-2 rounded hover:bg-blue-500 transition" onClick={() => setOpen(false)}>Home</a>
          </li>
          <li>
            <a href="#produk" className="block text-white py-2 px-2 rounded hover:bg-blue-500 transition" onClick={() => setOpen(false)}>Produk</a>
          </li>
          <li>
            <a href="#testimoni" className="block text-white py-2 px-2 rounded hover:bg-blue-500 transition" onClick={() => setOpen(false)}>Testimoni</a>
          </li>
          <li>
            <a href="#kontak" className="block bg-white text-blue-600 py-2 px-2 rounded font-semibold hover:bg-blue-100 transition" onClick={() => setOpen(false)}>Kontak</a>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;

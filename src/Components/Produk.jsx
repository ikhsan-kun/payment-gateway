import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const produkList = [
  {
    order_id: "PROD001",
    nama: "Smartphone Modern",
    deskripsi: "Teknologi terbaru, harga terjangkau.",
    harga: "Rp 2.500.000",
    gambar: "https://images.unsplash.com/photo-1513708927688-890fe8c7b8c3?auto=format&fit=crop&w=400&q=80",
  },
  {
    order_id: "PROD002",
    nama: "Headphone Wireless",
    deskripsi: "Suara jernih, desain stylish.",
    harga: "Rp 750.000",
    gambar: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
  },
  {
    order_id: "PROD003",
    nama: "Jam Tangan Elegan",
    deskripsi: "Tampil percaya diri setiap saat.",
    harga: "Rp 1.200.000",
    gambar: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  },
  {
    order_id: "PROD004",
    nama: "Laptop Pro",
    deskripsi: "Performa tinggi untuk produktivitas.",
    harga: "Rp 8.500.000",
    gambar: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80",
  },
  {
    order_id: "PROD005",
    nama: "Kamera DSLR",
    deskripsi: "Hasil foto profesional.",
    harga: "Rp 5.000.000",
    gambar: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
  },
  {
    order_id: "PROD006",
    nama: "Smartwatch Canggih",
    deskripsi: "Fitur kesehatan dan kebugaran lengkap.",
    harga: "Rp 2.000.000",
    gambar: "https://images.unsplash.com/photo-1517841905240-4729888e3b2e?auto=format&fit=crop&w=400&q=80",
  }
];

const SLIDE_COUNT = 3;

function Produk() {
  const [slide, setSlide] = useState(0);
  const [direction, setDirection] = useState(0); // 1 = next, -1 = prev

  const maxSlide = Math.ceil(produkList.length / SLIDE_COUNT);
  const startIdx = slide * SLIDE_COUNT;
  const currentProduk = produkList.slice(startIdx, startIdx + SLIDE_COUNT);

  const handlePrev = () => {
    setDirection(-1);
    setSlide((prev) => (prev === 0 ? maxSlide - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setSlide((prev) => (prev === maxSlide - 1 ? 0 : prev + 1));
  };

  return (
    <section id="produk" className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
          Produk Unggulan
        </h2>
        <div className="relative overflow-hidden">
          {/* Tombol prev */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-blue-600 text-white rounded-full p-2 shadow hover:bg-blue-700 transition z-10 hidden md:block"
            aria-label="Sebelumnya"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Produk */}
          <div className="relative h-[420px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={slide}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 absolute w-full"
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                transition={{ duration: 0.5 }}
              >
                {currentProduk.map((produk, idx) => (
                  <div key={idx} className="bg-gray-100 rounded-lg shadow hover:shadow-lg transition p-6 flex flex-col items-center">
                    <img
                      src={produk.gambar}
                      alt={produk.nama}
                      className="w-32 h-32 object-cover rounded mb-4"
                    />
                    <h3 className="font-semibold text-lg mb-2">{produk.nama}</h3>
                    <p className="text-gray-600 mb-4 text-center">{produk.deskripsi}</p>
                    <span className="font-bold text-blue-600 mb-2">{produk.harga}</span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition w-full">
                      Beli Sekarang
                    </button>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Tombol next */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-600 text-white rounded-full p-2 shadow hover:bg-blue-700 transition z-10 hidden md:block"
            aria-label="Selanjutnya"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Navigasi mobile */}
        <div className="flex justify-center mt-6 md:hidden gap-2">
          <button
            onClick={handlePrev}
            className="bg-blue-600 text-white rounded-full p-2 shadow hover:bg-blue-700 transition"
            aria-label="Sebelumnya"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="bg-blue-600 text-white rounded-full p-2 shadow hover:bg-blue-700 transition"
            aria-label="Selanjutnya"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Indikator */}
        <div className="flex justify-center mt-4 gap-2">
          {Array.from({ length: maxSlide }).map((_, idx) => (
            <span
              key={idx}
              className={`w-3 h-3 rounded-full ${slide === idx ? "bg-blue-600" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Produk;
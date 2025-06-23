function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 py-16 max-w-6xl mx-auto">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Temukan Barang Impianmu di <span className="text-blue-600">JualBeliKita</span>
          </h1>
          <p className="text-gray-600 mb-6">
            Platform jual beli terpercaya, mudah, dan cepat. Dapatkan produk terbaik dengan harga terjangkau!
          </p>
          <a
            href="#produk"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition"
          >
            Mulai Belanja
          </a>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/image_jb.png"
            alt="Belanja Online"
            className="rounded-xl shadow-lg w-full max-w-md"
          />
        </div>
      </section>

      {/* Kategori */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 text-center">
            Kategori Populer
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium">
              Elektronik
            </span>
            <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full font-medium">
              Fashion
            </span>
            <span className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full font-medium">
              Rumah Tangga
            </span>
            <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full font-medium">
              Kecantikan
            </span>
            <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-medium">
              Olahraga
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
function Testimoni() {
  return (
    <section id="testimoni" className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-8 text-center">Testimoni Pelanggan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 rounded-lg p-6 shadow flex flex-col items-center">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="user" className="w-16 h-16 rounded-full mb-3" />
            <p className="text-gray-600 text-center mb-2">Proses belanja sangat mudah dan cepat. Barang sampai dengan aman!</p>
            <span className="font-semibold text-blue-600">Andi, Jakarta</span>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 shadow flex flex-col items-center">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="user" className="w-16 h-16 rounded-full mb-3" />
            <p className="text-gray-600 text-center mb-2">Produk original dan harga bersaing. Sangat puas belanja di sini.</p>
            <span className="font-semibold text-blue-600">Siti, Bandung</span>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 shadow flex flex-col items-center">
            <img src="https://randomuser.me/api/portraits/men/54.jpg" alt="user" className="w-16 h-16 rounded-full mb-3" />
            <p className="text-gray-600 text-center mb-2">Customer service responsif dan ramah. Recomended!</p>
            <span className="font-semibold text-blue-600">Budi, Surabaya</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimoni;
function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <span className="font-semibold">&copy; 2025 JualBeliKita. All rights reserved.</span>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:underline">Tentang Kami</a>
          <a href="#" className="hover:underline">Kontak</a>
          <a href="#" className="hover:underline">Kebijakan Privasi</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
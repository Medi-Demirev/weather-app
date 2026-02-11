import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full h-24 bg-gradient-to-r from-indigo-600/40 via-purple-600/30 to-pink-600/30 backdrop-blur-lg border-b border-white/20 px-6 py-4 flex items-center justify-between z-50">
      <h1 className="text-xl font-bold text-white drop-shadow-lg">Weather  ☁️</h1>
      <div className="flex gap-4">
        <Link to="/" className="text-white hover:text-yellow-300 transition">Home</Link>
        <Link to="/forecast" className="text-white hover:text-yellow-300 transition">Forecast</Link>
      </div>
    </nav>
  );
}

export default Navbar;

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full bg-black/30 backdrop-blur-lg border-t border-white/20 px-6 py-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-white text-sm opacity-80">
          &copy; {new Date().getFullYear()} Weather App. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link to="/" className="text-white hover:text-yellow-300 transition text-sm">Home</Link>
          <Link to="/forecast" className="text-white hover:text-yellow-300 transition text-sm">Forecast</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin } from "lucide-react";

function Footer({ weatherCode }) {
  const footerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Fade-in
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  // 🎨 Dynamic accent logic
  const getAccentColor = () => {
    if (!weatherCode) return "cyan-400";

    if (weatherCode === 0) return "yellow-400"; // clear sky
    if (weatherCode >= 1 && weatherCode <= 3) return "slate-400"; // cloudy
    if (weatherCode >= 51 && weatherCode <= 67) return "blue-400"; // rain
    if (weatherCode >= 71 && weatherCode <= 77) return "sky-300"; // snow

    return "cyan-400";
  };

  const accent = getAccentColor();

  return (
    <footer
      ref={footerRef}
      className={`relative w-full px-6 py-16 bg-black/60 backdrop-blur-2xl overflow-hidden transition-all duration-1000 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Dynamic divider */}
      <div
        className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-${accent} to-transparent animate-pulse`}
      ></div>

      {/* Glow */}
      <div
        className={`absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-${accent}/10 blur-[150px] rounded-full`}
      ></div>

      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">

        {/* Brand */}
        <div className="text-center md:text-left space-y-4">
          <h2
            className={`text-2xl font-semibold tracking-[0.3em] uppercase bg-gradient-to-r from-${accent} via-white to-${accent} bg-[length:200%] bg-clip-text text-transparent animate-[shine_6s_linear_infinite]`}
          >
            Weatherly
          </h2>

          <p className="text-white/60 text-sm tracking-wide max-w-xs">
            Real-time weather intelligence crafted with modern web technologies.
          </p>

          <p className="text-white/40 text-xs tracking-wide">
            © {new Date().getFullYear()} Weatherly. Powered by Open-Meteo API.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex gap-12">
          <Link
            to="/"
            className={`relative text-white/70 hover:text-white text-sm tracking-wide transition duration-300 after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-${accent} after:transition-all after:duration-300 hover:after:w-full`}
          >
            Home
          </Link>

          <Link
            to="/forecast"
            className={`relative text-white/70 hover:text-white text-sm tracking-wide transition duration-300 after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-${accent} after:transition-all after:duration-300 hover:after:w-full`}
          >
            Forecast
          </Link>
        </div>

        {/* Social */}
        <div className="flex gap-8">
         <a
  href="https://github.com/Medi-Demirev"
  target="_blank"
  rel="noopener noreferrer"
  className="transition duration-300 hover:scale-110"
  style={{
    color: accent,
    filter: `drop-shadow(0 0 6px ${accent}80)`
  }}
>
  <Github size={20} />
</a>
<a
  href="https://www.linkedin.com/in/medi-demirev-1b227a250/"  
  target="_blank"
  rel="noopener noreferrer"
  className="group relative transition duration-300 hover:scale-110"
  style={{ color: accent }} 
>
  <Linkedin size={20} />

</a>

        </div>
      </div>
    </footer>
  );
}

export default Footer;

import { Link } from "react-router-dom";

function Navbar({ weatherCode }) {
  const getAccent = () => {
    if (!weatherCode) return "#22d3ee";
    if (weatherCode === 0) return "#facc15";
    if (weatherCode >= 1 && weatherCode <= 3) return "#94a3b8";
    if (weatherCode >= 51 && weatherCode <= 67) return "#60a5fa";
    if (weatherCode >= 71 && weatherCode <= 77) return "#7dd3fc";
    return "#22d3ee";
  };
  const accent = getAccent();

  return (
    <nav
      className="fixed top-0 left-0 w-full h-24 backdrop-blur-2xl border-b border-white/20 px-6 flex items-center justify-between z-50"
      style={{
        background: "linear-gradient(90deg, rgba(99,102,241,0.6), rgba(139,92,246,0.3), rgba(236,72,153,0.3))"
      }}
    >
      <h1
        className="text-xl font-bold drop-shadow-lg tracking-wide bg-clip-text text-transparent"
        style={{
          backgroundImage: `linear-gradient(to right, ${accent}, white, ${accent})`,
          backgroundSize: "200%",
          animation: "shine 6s linear infinite"
        }}
      >
        Weather ☁️
      </h1>

      <div className="flex gap-6">
        {["Home", "Forecast"].map((text) => (
          <Link
            key={text}
            to={text === "Home" ? "/" : "/forecast"}
            className="relative text-white/80 font-medium tracking-wide transition duration-300 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
            style={{ color: accent }}
          >
            {text}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;

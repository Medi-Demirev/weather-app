import { useState } from "react";

function SearchBar({ onSearch, loading }) {
  const [city, setCity] = useState("");

  const handleSubmit = () => {
    if (!city.trim()) return;
    onSearch(city);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="w-full flex justify-center mb-10 px-4">
      <div className="flex w-full max-w-xl bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl overflow-hidden">

        <input
          type="text"
          placeholder="Search city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 px-5 py-4 bg-transparent text-white placeholder-white/60 focus:outline-none"
        />

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="px-6 bg-white text-indigo-600 font-semibold hover:bg-indigo-100 transition disabled:opacity-50"
        >
          {loading ? "..." : "Search"}
        </button>

      </div>
    </div>
  );
}

export default SearchBar;

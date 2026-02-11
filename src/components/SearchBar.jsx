function SearchBar() {
  return (
    <div className="flex flex-col sm:flex-row gap-3 w-full">
      <input
        type="text"
        placeholder="Enter city..."
        className="flex-1 px-4 py-2 rounded-xl bg-white/30 placeholder-white/80 text-white focus:outline-none focus:ring-2 focus:ring-white transition"
      />
      <button className="px-4 py-2 rounded-xl bg-yellow-400 text-indigo-900 font-semibold hover:bg-yellow-300 transition">
        Search
      </button>
    </div>
  );
}

export default SearchBar;

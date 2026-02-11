import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";

function Home() {
  return (
    <div className="flex flex-col flex-grow bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4 sm:p-6 md:p-10">
      {/* Заглавие */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 text-center drop-shadow-lg">
        SkyCast ☁️
      </h1>

      {/* Съдържание разпънато вертикално до footer */}
      <div className="flex flex-col flex-grow justify-center items-center w-full max-w-md mx-auto">
        <SearchBar />
        <WeatherCard />
      </div>
    </div>
  );
}

export default Home;

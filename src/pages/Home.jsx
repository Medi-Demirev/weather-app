import { useState } from "react";
import SearchBar from "../components/SearchBar";
import { fetchCoordinates, fetchForecast } from "../api/weatherApi";

import {
  Sun,
  Cloud,
  CloudRain,
  CloudSnow,
  CloudLightning,
  CloudFog,
} from "lucide-react";

function Home() {
  const [weatherData, setWeatherData] = useState(null);
  const [cityName, setCityName] = useState("");
  const [loading, setLoading] = useState(false);

  // Функция за анимирани и оцветени иконки според weathercode
  const getWeatherIcon = (code) => {
    if (code === 0)
      return <Sun size={42} className="text-yellow-300 animate-spin-slow" />;

    if (code >= 1 && code <= 3)
      return <Cloud size={42} className="text-gray-200 animate-float" />;

    if (code >= 45 && code <= 48)
      return <CloudFog size={42} className="text-gray-300 animate-pulse" />;

    if (code >= 51 && code <= 67)
      return <CloudRain size={42} className="text-blue-300 animate-bounce-soft" />;

    if (code >= 71 && code <= 77)
      return <CloudSnow size={42} className="text-cyan-200 animate-pulse" />;

    if (code >= 80 && code <= 82)
      return <CloudRain size={42} className="text-blue-400 animate-bounce-soft" />;

    if (code >= 95)
      return <CloudLightning size={42} className="text-purple-300 animate-pulse" />;

    return <Cloud size={42} className="text-gray-200 animate-float" />;
  };

  // Функция за динамичен background според weathercode
  const getBackgroundClass = () => {
    if (!weatherData || weatherData.length === 0)
      return "from-indigo-600 via-purple-600 to-blue-500";

    const code = weatherData[0].weathercode;

    if (code === 0) return "from-yellow-400 via-yellow-300 to-orange-400";
    if (code >= 1 && code <= 3) return "from-gray-400 via-gray-300 to-gray-500";
    if (code >= 45 && code <= 48) return "from-gray-500 via-gray-400 to-gray-600";
    if (code >= 51 && code <= 67) return "from-blue-400 via-blue-300 to-blue-500";
    if (code >= 71 && code <= 77) return "from-cyan-300 via-cyan-200 to-blue-300";
    if (code >= 80 && code <= 82) return "from-blue-500 via-blue-400 to-indigo-500";
    if (code >= 95) return "from-purple-500 via-purple-400 to-indigo-600";

    return "from-indigo-600 via-purple-600 to-blue-500";
  };

  // Търсене по град
  const handleSearch = async (city) => {
    try {
      setLoading(true);

      const coords = await fetchCoordinates(city);
      if (!coords) {
        alert("City not found");
        return;
      }

      const forecast = await fetchForecast(coords.latitude, coords.longitude);

      const now = new Date();
      const currentHour = now.getHours();

      // филтриране от текущия час до края на деня
      const filtered = forecast.hourly.time
  .map((time, index) => ({
    time,
    temp: forecast.hourly.temperature_2m[index],
    weathercode: forecast.hourly.weathercode[index],
    wind: forecast.hourly.windspeed_10m[index],
    humidity: forecast.hourly.relativehumidity_2m[index],
    cloud: forecast.hourly.cloudcover[index],
  }))
  .filter((item) => {
    const date = new Date(item.time);
    return date.getHours() >= currentHour && date.getDate() === now.getDate();
  });


      setWeatherData(filtered);
      setCityName(coords.name);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`flex flex-col flex-grow min-h-screen bg-gradient-to-br ${getBackgroundClass()} text-white pt-28 transition-colors duration-1000`}
    >
      <h1 className="text-4xl font-bold text-center mb-6">Weather Forecast</h1>

      <SearchBar onSearch={handleSearch} loading={loading} />

      {cityName && (
        <h2 className="text-2xl font-semibold text-center mb-10">{cityName}</h2>
      )}

<div className="flex flex-col items-center px-4 pb-16">
  {weatherData && weatherData.length > 0 && (
    <div className="text-center mb-4 text-white text-sm drop-shadow-md">
      💨 Wind (km/h) | 💧 Humidity (%) | ☁️ Cloud cover (%)
    </div>
  )}

  <div className="flex flex-wrap justify-center gap-8 max-w-5xl">
    {weatherData &&
      weatherData.map((item, index) => (
        <div
          key={index}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 w-44 text-center shadow-xl hover:scale-105 transition-transform duration-300"
        >
          <div className="flex justify-center mb-3">
            {getWeatherIcon(item.weathercode)}
          </div>

          <p className="text-lg font-semibold">
            {new Date(item.time).getHours()}:00
          </p>

          <p className="text-2xl font-bold mt-2">{item.temp}°C</p>

          <p className="text-sm mt-1">💨 {item.wind} km/h</p>
          <p className="text-sm">💧 {item.humidity}%</p>
          <p className="text-sm">☁️ {item.cloud}%</p>
        </div>
      ))}
  </div>
</div>


    </div>
  );
}

export default Home;

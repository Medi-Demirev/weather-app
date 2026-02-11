import { forecastData } from "../data/forecastData";

function Forecast() {
  return (
    <div className="flex flex-col flex-grow bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4 sm:p-6 md:p-10">
      <h1 className="text-4xl font-bold text-white mb-6 text-center drop-shadow-lg">
        5-Day Forecast 🌤️
      </h1>

      {/* Контейнер за картите */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 flex-grow">
        {forecastData.map((day, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-40 bg-white/20 backdrop-blur-xl rounded-3xl p-4 text-white shadow-lg"
          >
            <p className="text-xl font-semibold">{day.day}</p>
            <p className="text-5xl mt-2">{day.icon}</p>
            <p className="text-3xl font-bold mt-2">{day.temp}°C</p>
            <p className="mt-1 text-sm opacity-80">{day.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;

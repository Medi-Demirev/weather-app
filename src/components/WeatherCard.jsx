// src/components/WeatherCard.jsx

function WeatherCard({ day, tempMax, tempMin, icon }) {
  return (
    <div className="flex flex-col items-center justify-center w-24 sm:w-32 bg-white/20 backdrop-blur-xl rounded-3xl p-4 text-white shadow-lg">
      <p className="text-sm sm:text-base font-semibold">{day}</p>
      <p className="text-3xl sm:text-4xl mt-1">{icon}</p>
      <p className="text-xl font-bold mt-1">{tempMax}°C</p>
      {tempMin !== undefined && (
        <p className="mt-1 text-xs opacity-80">Min: {tempMin}°C</p>
      )}
    </div>
  );
}

export default WeatherCard;

function WeatherCard() {
  return (
    <div className="w-full bg-white/20 backdrop-blur-xl p-6 rounded-3xl text-center text-white shadow-lg mt-6">
      <p className="text-5xl sm:text-6xl font-bold drop-shadow-md">25°C</p>
      <p className="mt-2 text-lg sm:text-xl opacity-80 drop-shadow-md">Sofia</p>
      <p className="mt-4 text-sm sm:text-base opacity-70 drop-shadow-sm">
        Partly Cloudy | Wind 5 km/h | Humidity 60%
      </p>
    </div>
  );
}

export default WeatherCard;

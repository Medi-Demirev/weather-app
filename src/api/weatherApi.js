// Fetch coordinates by city name
export async function fetchCoordinates(city) {
  const res = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`
  );

  const data = await res.json();

  if (!data.results || data.results.length === 0) {
    return null;
  }

  return {
    latitude: data.results[0].latitude,
    longitude: data.results[0].longitude,
    name: data.results[0].name,
  };
}

// Fetch hourly forecast with weather codes
export async function fetchForecast(lat, lon) {
  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,weathercode,windspeed_10m,relativehumidity_2m,cloudcover`
  );

  const data = await res.json();
  return data;
}



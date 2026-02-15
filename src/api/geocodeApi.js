// src/api/geocodeApi.js

export async function fetchCoordinates(city) {
  // encodeURIComponent ще преведе кирилица и други символи в безопасен за URL формат
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch coordinates");
    const data = await res.json();

    if (!data.results || data.results.length === 0) return null;

    const { latitude, longitude, name, country } = data.results[0];
    return { latitude, longitude, name, country };
  } catch (err) {
    console.error("Geocode API error:", err);
    return null;
  }
}

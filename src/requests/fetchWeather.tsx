export default async function fetchWeather(location: string) {
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${
    import.meta.env.VITE_OPEN_WEATHER_KEY
  }`;
  const response = await fetch(url);
  return response.json();
}

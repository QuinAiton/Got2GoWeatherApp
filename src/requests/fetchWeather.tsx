import cleanWeatherData from "../utils/cleanWeatherData";

export default async function fetchWeather(location: string) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${location}&limit=5&appid=${
      import.meta.env.VITE_OPEN_WEATHER_KEY
    }`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }

    const weatherData = await response.json();
    return cleanWeatherData(weatherData);
  } catch (error) {
    // Handle the error
    console.error(error);
    throw error; // Rethrow the error or handle it accordingly
  }
}

import getDate from "./getDate";
import { rawWeatherData } from "src/types/rawWeatherData";
export default function cleanWeatherData(rawWeatherData: rawWeatherData) {
  const { weather, main, wind, name, dt, timezone } = rawWeatherData;
  const [{ description, icon }] = weather;
  const { temp, feels_like, humidity } = main;
  const { speed: wind_speed } = wind;
  const date = getDate(dt, timezone);
  return {
    description,
    icon,
    temp,
    feels_like,
    humidity,
    wind_speed,
    date,
    name,
  };
}

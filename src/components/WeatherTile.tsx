import React from "react";
import { weatherData } from "../types/weatherData";

type PropTypes = {
  weatherData: weatherData;
};

export default function WeatherTile({ weatherData }: PropTypes) {
  const {
    description,
    icon,
    feels_like,
    humidity,
    temp,
    wind_speed,
    date,
    name,
  } = weatherData || "";
  return (
    <div className=" flex items-center justify-center">
      <div className="flex flex-col bg-white rounded p-4 w-full max-w-xs">
        <div className="font-bold text-xl">{name}</div>
        <div className="mt-6 text-6xl self-center flex items-center justify-evenly gap-4 rounded-lg text-black ">
          <div className="text-2xl uppercase">{description}</div>
          <div className="bg-indigo-300 rounded-xl">
            <img
              src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
              alt=""
              className="w-20 rounded-xl"
            />
          </div>
        </div>
        <div className="flex flex-row items-center justify-center mt-6">
          <div className="">
            <p className="">Feels Like:</p>
            <div className="font-medium text-6xl text-indigo-500">
              {feels_like}°C
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between mt-6 border-t-gray-100 border-t-2 ">
          <div className="flex flex-col items-center  pt-5">
            <div className="font-medium text-sm">Wind</div>
            <div className="text-sm text-gray-500">{wind_speed}k/h</div>
          </div>
          <div className="flex flex-col items-center pt-5">
            <div className="font-medium text-sm">Humidity</div>
            <div className="text-sm text-gray-500">{humidity}%</div>
          </div>
          <div className="flex flex-col items-center pt-5">
            <div className="font-medium text-sm">Temp</div>
            <div className="text-sm text-gray-500">{temp}°C</div>
          </div>
        </div>
      </div>
    </div>
  );
}

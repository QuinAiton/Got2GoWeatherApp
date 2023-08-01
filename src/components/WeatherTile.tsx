import React from "react";
import { weatherData } from "../types/weatherData";

type PropTypes = {
  weatherData: weatherData;
  selectedLocation: string;
};

export default function WeatherTile({
  weatherData,
  selectedLocation,
}: PropTypes) {
  const { description, icon, feels_like, humidity, temp, wind_speed, date } =
    weatherData || "";
  return (
    <div className=" flex items-center justify-center">
      <div className="flex flex-col bg-white rounded p-4 w-full max-w-xs">
        <div className="font-bold text-xl">{selectedLocation}</div>
        <div className="text-sm text-gray-500">{date}</div>
        <div className="mt-6 text-6xl self-center flex items-center justify-evenly rounded-lg text-indigo-400 ">
          <div className="text-2xl">{description}</div>
          <img
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt=""
            className="w-20"
          />
        </div>
        <div className="flex flex-row items-center justify-center mt-6">
          <div>
            <p className="text-indigo-400">Feels Like</p>
            <div className="font-medium text-6xl">{feels_like}°C</div>
          </div>
        </div>
        <div className="flex flex-row justify-between mt-6 border-t-gray-100 border-t-2 ">
          <div className="flex flex-col items-center pt-5">
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

import LocationDropDown from "components/LocationDropDown";
import React from "react";
import Spinner from "components/Spinner";
import WeatherTile from "components/WeatherTile";
import fetchWeather from "./requests/fetchWeather";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
export default function App() {
  const [selectLocation, setSelectedLocation] = useState("Miami");

  const { isLoading, error, data } = useQuery(["weather", selectLocation], () =>
    fetchWeather(selectLocation)
  );

  if (error) return <div>Something went wrong</div>;

  return (
    <div className="bg-[url('/public/assets/background.jpg')] bg-center w-screen h-screen flex justify-center items-center p-20">
      {isLoading && <Spinner />}
      {data && (
        <div className="flex flex-col gap-20 ">
          <LocationDropDown
            setSelectedLocation={setSelectedLocation}
            selectLocation={selectLocation}
          />
          <WeatherTile weatherData={data} selectedLocation={selectLocation} />
        </div>
      )}
    </div>
  );
}

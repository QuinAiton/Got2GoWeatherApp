import React, { ReactNode, useEffect, useState } from "react";

import LocationDropDown from "components/LocationDropDown";
import Spinner from "components/Spinner";
import WeatherTile from "components/WeatherTile";
import fetchWeather from "./requests/fetchWeather";
import useCurrentCity from "hooks/useCurrentCity";
import { useQuery } from "@tanstack/react-query";

export default function App() {
  const { city, error: cityError } = useCurrentCity();
  const [selectLocation, setSelectedLocation] = useState("Miami");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (city) {
      setSelectedLocation(city);
      setIsLoading(false);
    }
  }, [city]);

  const {
    isLoading: fetchingWeather,
    error: weatherError,
    data,
  } = useQuery(["weather", selectLocation], () => fetchWeather(selectLocation));

  if (weatherError) return <div>Something went wrong</div>;

  return (
    <div className="bg-[url('/public/assets/background.jpg')] bg-center w-screen h-screen flex justify-center items-center p-20">
      {(fetchingWeather || isLoading) && <Spinner />}
      {!fetchingWeather && !isLoading && data && (
        <div className="flex flex-col gap-10">
          <LocationDropDown
            setSelectedLocation={setSelectedLocation}
            selectLocation={selectLocation}
            city={city}
          />
          <WeatherTile weatherData={data} />
        </div>
      )}
      {(weatherError as ReactNode) && (
        <div className="flex justify-center items-center">
          Unable to fetch weather data..
        </div>
      )}
    </div>
  );
}

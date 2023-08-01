import LocationDropDown from "components/LocationDropDown";
import React from "react";
import fetchWeather from "./requests/fetchWeather";
import { useQuery } from "@tanstack/react-query";

export default function App() {
  const { data, error } = useQuery(["weather", "london"], () =>
    fetchWeather("london")
  );

  return (
    <div className="bg-[url('/public/assets/background.jpg')] bg-center w-screen h-screen flex justify-center items-center p-20">
      <LocationDropDown />
    </div>
  );
}

import React from "react";
import fetchWeather from "./requests/fetchWeather";
import { useQuery } from "@tanstack/react-query";
export default function App() {
  const { data, error } = useQuery(["weather", "london"], () =>
    fetchWeather("london")
  );

  return <div className="text-black">App start</div>;
}

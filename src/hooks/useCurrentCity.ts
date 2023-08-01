import { useEffect, useState } from "react";

type CurrentCityData = {
  city: string | null;
  error: Error | null;
};

export default function useCurrentCity(): CurrentCityData {
  const [city, setCity] = useState<string | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const getCurrentCity = async (): Promise<void> => {
      try {
        if (!navigator.geolocation) {
          throw new Error("Geolocation is not supported by your browser");
        }

        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;

            const response = await fetch(
              `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${
                import.meta.env.VITE_GEOCODE_API_KEY
              }`
            );
            const data = await response.json();

            if (response.ok && data.results.length > 0) {
              const city = data.results[0].components.city;
              setCity(city);
            } else {
              throw new Error("City not found");
            }
          },
          (error) => {
            throw error;
          }
        );
      } catch (error) {
        setError(error as Error);
      }
    };

    getCurrentCity().catch((error) => {
      setError(error as Error);
      setCity("Miami");
    });
  }, []);

  return { city: city || "Miami", error };
}

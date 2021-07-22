import React, { createContext, useEffect, useState } from "react";
import { WeatherResponse } from "../interfaces/weatherResponse";
import useGeoLocation from "../hooks/useGeoLocation";

export interface WeatherConfig {
  weather?: WeatherResponse;
  onRefresh: () => void;
}

export const WeatherContext = createContext<WeatherConfig | undefined>(
  undefined
);

const WeatherContextProvider: React.FunctionComponent = (props) => {
  const [weather, setWeather] = useState<WeatherConfig | undefined>();
  const location = useGeoLocation();

  useEffect(() => {
    if (location) {
      fetchWeather();
    }
  }, [location]);

  const fetchWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${location?.coordinates?.lat}&lon=${location?.coordinates?.lng}&appid=53f9d8e4213222cf517d86dc406d67fc`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setWeather((current) => data);
      });
  };

  const handleRefresh = () => {
    fetchWeather();
  };

  return (
    <WeatherContext.Provider value={{ ...weather, onRefresh: handleRefresh }}>
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherContextProvider;

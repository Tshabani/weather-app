import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import ForecastList from "./components/forecastList";
import LocationDate from "./components/locationDate";
import RefreshButton from "./components/refreshButton";
import WeatherCard from "./components/weatherCard";
import WeatherContextProvider from "./context/weatherContext";
import { WeatherResponse } from "./interfaces/weatherResponse";

export default function Home() {
  const [model, setModel] = useState<WeatherResponse>();

  return (
    <WeatherContextProvider>
      <div className="w-100">
        <RefreshButton />
        <LocationDate />
        <WeatherCard />
        <ForecastList />
      </div>
    </WeatherContextProvider>
  );
}

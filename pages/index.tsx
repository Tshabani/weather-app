import React from "react";
import ForecastList from "./components/forecastList";
import LocationDate from "./components/locationDate";
import RefreshButton from "./components/refreshButton";
import WeatherCard from "./components/weatherCard";
import WeatherContextProvider from "./context/weatherContext";

export default function Home() {
	return (
		<WeatherContextProvider>
			<div className="w-100 container">
				<RefreshButton />
				<LocationDate />
				<WeatherCard />
				<ForecastList />
			</div>
		</WeatherContextProvider>
	);
}

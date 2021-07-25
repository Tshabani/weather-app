import React from "react";
import WeatherContextProvider from "../context/weatherContext";
import HomeScreen from "./homeScreen/HomeScreen";

export default function Home() {
	return (
		<WeatherContextProvider>
			<div className="w-100">
				<HomeScreen />
			</div>
		</WeatherContextProvider>
	);
}

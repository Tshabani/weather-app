import React, { createContext, useEffect, useState } from "react";
import { WeatherResponse } from "../interfaces/weatherResponse";
import Spinner from "../components/Spinner";
import { useGeolocation } from "rooks";
export interface WeatherConfig {
	weather?: WeatherResponse;
	onRefresh: () => void;
}

export const WeatherContext = createContext<WeatherConfig | undefined>(
	undefined
);

const WeatherContextProvider: React.FunctionComponent = (props) => {
	const [weather, setWeather] = useState<WeatherConfig>();
	const location = useGeolocation();

	useEffect(() => {
		if (location && !location.isError) {
			fetchWeather();
		} else {
			alert(
				"There was a problem trying to get your location please fix your location and try again."
			);
		}
	}, [location]);

	const fetchWeather = () => {
		fetch(
			`https://api.openweathermap.org/data/2.5/weather?lat=${location?.lat}&lon=${location?.lng}&units=metric&appid=53f9d8e4213222cf517d86dc406d67fc`
		)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setWeather((current) => data);
			})
			.catch((error) => {
				alert(error);
			});
	};

	const handleRefresh = () => {
		setWeather(undefined);
		if (location) {
			fetchWeather();
		}
	};

	return (
		<WeatherContext.Provider value={{ ...weather, onRefresh: handleRefresh }}>
			{weather ? props.children : <Spinner />}
		</WeatherContext.Provider>
	);
};

export default WeatherContextProvider;

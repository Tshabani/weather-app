import React, { useContext } from "react";
import LocationDate from "../components/locationDate";
import RefreshButton from "../components/refreshButton";
import WeatherCard from "../components/weatherCard";
import { WeatherContext } from "../context/weatherContext";

export interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
	const data = useContext(WeatherContext);
	return (
		<>
			<LocationDate />
			<WeatherCard />
			<RefreshButton />
		</>
	);
};

export default HomeScreen;

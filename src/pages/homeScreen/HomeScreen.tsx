import React from "react";
import LocationDate from "../../components/locationDate";
import RefreshButton from "../../components/refreshButton";
import WeatherCard from "../../components/weatherCard";

const HomeScreen = () => {
	return (
		<>
			<LocationDate />
			<WeatherCard />
			<RefreshButton />
		</>
	);
};

export default HomeScreen;

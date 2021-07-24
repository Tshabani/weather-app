import { WeatherContext } from "../context/weatherContext";
import { useContext, useEffect } from "react";
import Image from "next/image";

export interface WeatherCardProps {}

const WeatherCard: React.FC<WeatherCardProps> = () => {
	const data = useContext(WeatherContext);
	const { name, main, weather } = data as any;

	useEffect(() => {
		console.log(weather && weather[0]);
	}, [weather]);

	return (
		<section className="w-100 container flex justify-center text-center mx-auto mt-10">
			<div className="shadow-lg border border-gray-100 w-96 p-10">
				<h1>Weather: {weather ? weather[0].main : null}</h1>
				<h1>
					Temperature: {main?.temp} <sup>&deg;C</sup>{" "}
				</h1>
				<h1>
					Minimum Temperature: {main?.temp_max}
					<sup>&deg;C</sup>
				</h1>
				<h1>
					Maximum Temperature: {main?.temp_min}
					<sup>&deg;C</sup>
				</h1>
				<h1>Humidity: {main?.humidity}</h1>
				<div className="info">
					<Image
						src={`https://openweathermap.org/img/wn/${
							weather && weather[0].icon
						}@2x.png`}
						alt="Landscape picture"
						width={100}
						height={100}
					/>
					<p>{weather && weather[0].description}</p>
				</div>
			</div>
		</section>
	);
};

export default WeatherCard;

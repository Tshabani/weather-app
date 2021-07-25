import { WeatherContext } from "../context/weatherContext";
import React, { useContext } from "react";
import Image from "next/image";

export interface WeatherCardProps {}

const WeatherCard: React.FC<WeatherCardProps> = () => {
	const data = useContext(WeatherContext);

	return (
		<section className="w-100 container flex justify-center text-center mx-auto mt-10">
			<div className="shadow-lg border border-gray-100 w-96 p-10">
				<h1>
					Weather: {data?.weather ? (data as any)?.weather[0].main : null}
				</h1>
				<h1>
					Temperature: {data?.weather?.main?.temp} <sup>&deg;C</sup>{" "}
				</h1>
				<h1>
					Minimum Temperature: {data?.weather?.main?.temp_max}
					<sup>&deg;C</sup>
				</h1>
				<h1>
					Maximum Temperature: {data?.weather?.main?.temp_min}
					<sup>&deg;C</sup>
				</h1>
				<h1>Humidity: {data?.weather?.main?.humidity}</h1>
				<div className="info">
					<Image
						src={`https://openweathermap.org/img/wn/${
							data?.weather && (data as any)?.weather[0].icon
						}@2x.png`}
						alt="Landscape picture"
						width={100}
						height={100}
					/>
					<p>{data?.weather && (data as any)?.weather[0].description}</p>
				</div>
			</div>
		</section>
	);
};

export default WeatherCard;

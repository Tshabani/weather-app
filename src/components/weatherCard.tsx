/* eslint-disable @next/next/no-img-element */
import { WeatherContext } from "../context/weatherContext";
import { useContext, useEffect } from "react";

export interface WeatherCardProps {}

const WeatherCard: React.FC<WeatherCardProps> = () => {
	const data: any = useContext(WeatherContext);
	// const { weather, main } = data as any;

	useEffect(() => {
		console.log(data);
	}),
		[data];

	return (
		<section className="w-100 container flex justify-center text-center mx-auto mt-10">
			<div className="shadow-lg border border-gray-100 w-96 p-10">
				<h1>
					Weather: {data?.weather ? (data as any)?.weather[0].main : null}
				</h1>
				<h1>
					Temperature: {data?.main?.temp} <sup>&deg;C</sup>{" "}
				</h1>
				<h1>
					Minimum Temperature: {data?.main?.temp_max}
					<sup>&deg;C</sup>
				</h1>
				<h1>
					Maximum Temperature: {data?.main?.temp_min}
					<sup>&deg;C</sup>
				</h1>
				<h1>Humidity: {data?.main?.humidity}</h1>
				<div className="info w-100 flex text-center justify-center">
					<img
						src={`https://openweathermap.org/img/wn/${
							data?.weather && (data as any)?.weather[0].icon
						}@2x.png`}
						alt="Landscape picture"
						width={100}
						height={100}
						className="text-center w-100"
					/>
				</div>
				<p>{data?.weather && (data as any)?.weather[0].description}</p>
			</div>
		</section>
	);
};

export default WeatherCard;

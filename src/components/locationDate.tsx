import { useContext } from "react";
import { WeatherContext } from "../context/weatherContext";

export interface LocationDateProps {}

const LocationDate: React.FC<LocationDateProps> = () => {
	const data = useContext(WeatherContext);

	return (
		<section className="w-100 container flex justify-center text-center mx-auto mt-10 font-semibold text-3xl text-gray-700">
			<div>{(data as any)?.name}</div>
		</section>
	);
};

export default LocationDate;

import { useContext, useEffect } from "react";
import { WeatherContext } from "../context/weatherContext";
import { WeatherResponse } from "../interfaces/weatherResponse";

export interface LocationDateProps {}

const LocationDate: React.FC<LocationDateProps> = () => {
  const data = useContext(WeatherContext);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <section className="w-100 container flex justify-center text-center mx-auto mt-10 font-semibold text-3xl text-gray-700">
      <div>{(data as any)?.name}</div>
    </section>
  );
};

export default LocationDate;

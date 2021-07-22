export interface WeatherCardProps {}

const WeatherCard: React.FC<WeatherCardProps> = () => {
  return (
    <section className="w-100 container flex justify-center text-center mx-auto mt-10">
      <div className="shadow-lg border border-gray-100 w-96 p-10">
        <h1>Temp</h1>
        <h1>Icon here</h1>
        <h1>Other text</h1>
      </div>
    </section>
  );
};

export default WeatherCard;

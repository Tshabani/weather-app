export interface ForecastListProps {}

const ForecastList: React.FC<ForecastListProps> = () => {
	return (
		<section className="w-100 container flex justify-center text-center mx-auto mt-10">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
				<div className="shadow-lg border border-gray-100 w-60 p-10">
					<h1>Temp</h1>
					<h1>Icon here</h1>
					<h1>Other text</h1>
				</div>
				<div className="shadow-lg border border-gray-100 w-60 p-10">
					<h1>Temp</h1>
					<h1>Icon here</h1>
					<h1>Other text</h1>
				</div>
				<div className="shadow-lg border border-gray-100 w-60 p-10">
					<h1>Temp</h1>
					<h1>Icon here</h1>
					<h1>Other text</h1>
				</div>
				<div className="shadow-lg border border-gray-100 w-60 p-10">
					<h1>Temp</h1>
					<h1>Icon here</h1>
					<h1>Other text</h1>
				</div>
			</div>
		</section>
	);
};

export default ForecastList;

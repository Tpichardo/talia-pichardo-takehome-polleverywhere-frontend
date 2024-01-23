import { useQuery } from "@tanstack/react-query";
import getAllRaffles from "../../getAllRaffles";

const AllRaffles = () => {
	const { isLoading, isError, data } = useQuery({
		queryKey: ["raffles"],
		queryFn: getAllRaffles,
	});

	if (isLoading) {
		return (
			<div>
				<h1>Getting Raffles...</h1>
			</div>
		);
	}

	if (isError) {
		console.log("error");
		return <h1>Hmmm, We are having trouble getting the raffles</h1>;
	}

	const raffle = data;

	return (
		<div>
			<h1>All Rafles:</h1>
			<ul>
				{raffle?.map((raffle) => {
					return <li key={raffle.id}>{raffle.raffle_name}</li>;
				})}
			</ul>
		</div>
	);
};

export default AllRaffles;

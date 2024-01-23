import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Button, Card } from "react-bootstrap";
import { format } from "date-fns";

import getAllRaffles from "../../getAllRaffles";
import "./AllRaffles.css";

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
		<div className="rafflesContainer">
			<h1>Raffles</h1>
			<ul>
				{raffle?.map((raffle) => {
					const formattedDate = format(
						raffle.date_created,
						"EEEE MMMM d, yyyy 'at' h:mm a"
					);
					return (
						<li key={raffle.id}>
							<Card
								border="info"
								className="text-center">
								<Card.Body>
									<Card.Title>{raffle.raffle_name}'s Raffle</Card.Title>
									<Card.Text>{formattedDate}</Card.Text>
									<Link to="/raffles/new">
										<Button variant="primary">Join Raffle</Button>
									</Link>
								</Card.Body>
							</Card>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default AllRaffles;

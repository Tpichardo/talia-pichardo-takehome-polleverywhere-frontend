import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { useState } from "react";
import { Link } from "react-router-dom";

import { Card, Button } from "react-bootstrap";

import getAllRaffles from "../../getAllRaffles";
import "./AllRaffles.css";

const AllRaffles = () => {
	const [allRaffles, setAllRaffles] = useState([]);

	const { data, isLoading, isError } = useQuery({
		queryKey: ["raffles"],
		queryFn: getAllRaffles,
		staleTime: Infinity,
	});

	if (data !== allRaffles) {
		setAllRaffles(data);
	}

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

	return (
		<div className="rafflesContainer">
			<h1>Raffles</h1>
			<ul>
				{allRaffles?.map((raffle) => {
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
									<Link to={`/raffles/${raffle.id}`}>
										<Button variant="primary">Join Raffle</Button>
									</Link>
									<Link to={`/raffles/${raffle.id}/participants`}>
										<Button
											className="m-3"
											variant="primary">
											Paticipants
										</Button>
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

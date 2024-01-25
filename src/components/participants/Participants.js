import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Card, Button } from "react-bootstrap";

import participantIcon from "../../Assets/participantIcon.png";

import getAllParticipants from "../functions/getAllParticipants";
import "./Participants.css";

const Participants = () => {
	const { id } = useParams();
	const [participants, setParticipants] = useState([]);

	useEffect(() => {
		getAllParticipants(id).then((result) => {
			setParticipants(result);
		});
	}, [id]);

	return (
		<div className="participantsContainer">
			{participants?.length !== 0 ? (
				<div>
					<h1>Raffle Participants:</h1>
					<ul>
						{participants?.map((participant) => {
							return (
								<li key={participant.id}>
									<Card
										border="info"
										className="text-center">
										<Card.Body>
											<img
												src={participantIcon}
												alt="icon of blue cartoon figure smiling"
											/>
											<Card.Title>
												{participant.first_name} {participant.last_name}
											</Card.Title>
											<Card.Text>#{participant.id}</Card.Text>
											<Card.Text>{participant.email}</Card.Text>
										</Card.Body>
									</Card>
								</li>
							);
						})}
					</ul>
				</div>
			) : (
				<div>
					<h1>There Are No Participants. Be the First to Join!</h1>
					<Link to={`/raffles/${id}/`}>
						<Button
							className="m-3"
							variant="primary">
							Join Now!
						</Button>
					</Link>
				</div>
			)}
		</div>
	);
};

export default Participants;

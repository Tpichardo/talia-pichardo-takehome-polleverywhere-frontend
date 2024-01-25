import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { Form, Button } from "react-bootstrap";

import getOneRaffle from "../../getOneRaffle";
import postParticipant from "../../postParticipant";

import "./RaffleDetails.css";

const RaffleDetails = () => {
	const { id } = useParams();
	let navigate = useNavigate();
	const [raffle, setRaffle] = useState("");
	const [newParticipant, setNewParticipant] = useState({
		first_name: "",
		last_name: "",
		email: "",
		phone: "",
		raffle_id: id,
	});

	useEffect(() => {
		getOneRaffle(id).then((result) => {
			setRaffle(result);
		});
	}, [id]);

	const handleChange = (e) => {
		setNewParticipant({ ...newParticipant, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await postParticipant({ id, newParticipant });
		navigate(`/raffles/${id}/participants`);
	};

	return (
		<div className="raffleDetailsContainer">
			<h1>Join {raffle.raffle_name}'s Raffle!</h1>
			<Form onSubmit={handleSubmit}>
				<Form.Group>
					<Form.Label>First Name:</Form.Label>
					<Form.Control
						name="first_name"
						value={newParticipant.first_name}
						required
						onChange={handleChange}
						className="mb-3"
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Last Name:</Form.Label>
					<Form.Control
						name="last_name"
						value={newParticipant.last_name}
						required
						onChange={handleChange}
						className="mb-3"
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Email address:</Form.Label>
					<Form.Control
						name="email"
						value={newParticipant.email}
						required
						onChange={handleChange}
						className="mb-3"
						type="email"
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Phone:</Form.Label>
					<Form.Control
						name="phone"
						value={newParticipant.phone}
						onChange={handleChange}
						className="mb-3"
						type="tel"
					/>
				</Form.Group>
				<div className="btnContainer">
					<Button
						style={{ width: "85px", height: "35px" }}
						variant="primary"
						type="submit">
						Submit
					</Button>
					<Button
						style={{ width: "85px", height: "35px" }}
						variant="light"
						type="reset">
						Clear
					</Button>
				</div>
			</Form>
		</div>
	);
};

export default RaffleDetails;

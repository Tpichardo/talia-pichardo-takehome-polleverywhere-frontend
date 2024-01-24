import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import AddNewRaffle from "../../AddNewRaffle";
import "./NewRaffleForm.css";

const NewRaffleForm = () => {
	let navigate = useNavigate();
	const [newRaffleData, setNewRaffleData] = useState({
		raffle_name: "",
		secret_token: "",
	});

	const queryClient = useQueryClient();
	const mutation = useMutation({
		mutationFn: AddNewRaffle,
		onSuccess: (data) => {
			queryClient.invalidateQueries({ queryKey: ["raffles"] });
			navigate(`/raffles/${data.id}`);
		},
	});

	const handleChange = (e) => {
		setNewRaffleData({ ...newRaffleData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		mutation.mutateAsync(newRaffleData);
	};
	return (
		<div className="formContainer">
			<h1>Create New Raffle</h1>
			<Form onSubmit={handleSubmit}>
				<Form.Group
					md="4"
					controlId="raffle_name">
					<Form.Label>Raffle Name</Form.Label>
					<Form.Control
						required
						type="text"
						value={newRaffleData.raffle_name}
						name="raffle_name"
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group
					className="mb-3"
					controlId="secret_token">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						value={newRaffleData.secret_token}
						name="secret_token"
						onChange={handleChange}
					/>
				</Form.Group>
				<Button
					variant="primary"
					type="submit">
					Submit
				</Button>
			</Form>
		</div>
	);
};

export default NewRaffleForm;

import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./AddNewRaffle.css";

const AddNewRaffle = () => {
	return (
		<div className="formContainer">
			<h1>Create New Raffle</h1>
			<Form>
				<Form.Group
					md="4"
					controlId="raffle_name">
					<Form.Label>Raffle Name</Form.Label>
					<Form.Control
						required
						type="text"
						defaultValue=""
					/>
				</Form.Group>
				<Form.Group
					className="mb-3"
					controlId="secret_token">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" />
				</Form.Group>
				<Link to="">
					<Button
						variant="primary"
						type="submit">
						Submit
					</Button>
				</Link>
			</Form>
		</div>
	);
};

export default AddNewRaffle;

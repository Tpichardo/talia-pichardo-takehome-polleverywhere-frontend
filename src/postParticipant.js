import axios from "axios";

const postParticipant = async ({ id, newParticipant }) => {
	try {
		const participant = await axios.post(
			`http://localhost:3001/raffles/${id}/participants`,
			newParticipant
		);
		const { data } = participant;
		return data;
	} catch (error) {
		console.log(error);
	}
};

export default postParticipant;

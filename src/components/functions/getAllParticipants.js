import axios from "axios";

const getAllParticipants = async (id) => {
	try {
		const participants = await axios.get(
			`http://localhost:3001/raffles/${id}/participants`
		);
		const { data } = participants;
		return data;
	} catch (error) {
		console.log(error);
	}
};

export default getAllParticipants;

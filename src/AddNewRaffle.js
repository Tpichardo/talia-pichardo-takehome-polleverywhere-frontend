import axios from "axios";

const AddNewRaffle = async (newRaffleData) => {
	try {
		const newRaffle = await axios.post(
			"http://localhost:3001/raffles",
			newRaffleData
		);
		const { data } = newRaffle;
		return data;
	} catch (error) {
		console.log(error);
	}
};

export default AddNewRaffle;

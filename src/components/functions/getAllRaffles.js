import axios from "axios";

const getAllRaffles = async () => {
	try {
		const allRaffles = await axios.get("http://localhost:3001/raffles");
		const { data } = allRaffles;
		return data;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

export default getAllRaffles;

import axios from "axios";

const getAllRaffles = async () => {
	try {
		const allRaffles = await axios.get("http://localhost:3001/raffles");
		return allRaffles.data;
	} catch (error) {
		console.log(error);
	}
};

export default getAllRaffles;

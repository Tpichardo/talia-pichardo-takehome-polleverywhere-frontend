import axios from "axios";

const getOneRaffle = async (id) => {
	try {
		const oneRaffle = await axios.get(`http://localhost:3001/raffles/${id}`);
		const { data } = oneRaffle;
		return data;
	} catch (error) {
		console.log(error);
	}
};

export default getOneRaffle;

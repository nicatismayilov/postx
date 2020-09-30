import axios from "axios";

const Axios = axios.create({
	baseURL: "https://jsonplaceholder.typicode.com/",
	responseType: "json",
	headers: {
		"Content-type": "application/json",
	},
});

export default Axios;

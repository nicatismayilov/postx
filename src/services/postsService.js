import axios from "../axios";

export const getAllPosts = async () => {
	try {
		const res = await axios.get("posts");
		return res;
	} catch (err) {
		return err;
	}
};

import axios from "../axios";

export const getAllPosts = async () => {
	try {
		const res = await axios.get("posts");
		return res;
	} catch (err) {
		return err;
	}
};

export const addPost = async (post) => {
	try {
		const res = await axios.post("posts", post);
		return res.data;
	} catch (err) {
		return err;
	}
};

export const deletePost = async (id) => {
	try {
		await axios.delete(`posts/${id}`);
		return id;
	} catch (err) {
		return err;
	}
};

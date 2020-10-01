import axios from "../axios";
import eventBus from "eventBus";

export const getAllPosts = async () => {
	try {
		const res = await axios.get("posts");
		return res;
	} catch (err) {
		eventBus.dispatch("error", "Error occured while loading posts");
	}
};

export const addPost = async (post) => {
	try {
		const res = await axios.post("posts", post);
		return res.data;
	} catch (err) {
		eventBus.dispatch("error", "Error occured while creating new post");
	}
};

export const deletePost = async (id) => {
	try {
		await axios.delete(`posts/${id}`);
		return id;
	} catch (err) {
		eventBus.dispatch("error", "Error occured while deleting the post");
	}
};

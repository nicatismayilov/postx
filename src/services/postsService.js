import axios from "../axios";

export const getAllPosts = async () => {
	return await axios.get("posts");
};

export const addPost = async (post) => {
	return await axios.post("posts", post);
};

export const updatePost = async (post) => {
	return await axios.put(`posts/${post.id}`, post);
};

export const deletePost = async (id) => {
	return await axios.delete(`posts/${id}`);
};

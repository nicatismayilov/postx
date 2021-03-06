import * as actionTypes from "./actionTypes";

export const fetchPostsStart = () => ({
	type: actionTypes.FETCH_POSTS_START,
});

export const fetchPostsSuccess = (posts) => ({
	type: actionTypes.FETCH_POSTS_SUCCESS,
	payload: posts,
});

export const fetchPostsFailure = (err) => ({
	type: actionTypes.FETCH_POSTS_FAILURE,
	payload: err,
});

export const addPostStart = (post) => ({
	type: actionTypes.ADD_POST_START,
	payload: post,
});

export const addPostSuccess = (post) => ({
	type: actionTypes.ADD_POST_SUCCESS,
	payload: post,
});

export const addPostFailure = (err) => ({
	type: actionTypes.ADD_POST_FAILURE,
	payload: err,
});

export const updatePostStart = (post) => ({
	type: actionTypes.UPDATE_POST_START,
	payload: post,
});

export const updatePostSuccess = (post) => ({
	type: actionTypes.UPDATE_POST_SUCCESS,
	payload: post,
});

export const updatePostFailure = (err) => ({
	type: actionTypes.UPDATE_POST_FAILURE,
	payload: err,
});

export const deletePostStart = (id) => ({
	type: actionTypes.DELETE_POST_START,
	payload: id,
});

export const deletePostSuccess = (id) => ({
	type: actionTypes.DELETE_POST_SUCCESS,
	payload: id,
});

export const deletePostFailure = (err) => ({
	type: actionTypes.DELETE_POST_FAILURE,
	payload: err,
});

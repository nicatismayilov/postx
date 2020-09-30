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

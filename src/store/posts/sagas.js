import { takeLatest, call, put } from "redux-saga/effects";

import { FETCH_POSTS_START, ADD_POST_START } from "./actionTypes";

import { fetchPostsSuccess, fetchPostsFailure, addPostSuccess, addPostFailure } from "./actions";

import { getAllPosts, addPost } from "services/postsService";

import convertArrayToMap from "utils/convertArrayToMap";

export function* fetchPostsStart() {
	yield takeLatest(FETCH_POSTS_START, fetchPostsStartAsync);
}

export function* addPostStart() {
	yield takeLatest(ADD_POST_START, addPostAsync);
}

function* fetchPostsStartAsync() {
	try {
		const { data } = yield call(getAllPosts);
		yield put(fetchPostsSuccess(convertArrayToMap(data)));
	} catch (err) {
		yield put(fetchPostsFailure(err.message));
	}
}

function* addPostAsync({ payload }) {
	console.log(payload);
	try {
		const data = yield call(addPost, payload);
		yield put(addPostSuccess(data));
	} catch (err) {
		yield put(addPostFailure(err.message));
	}
}

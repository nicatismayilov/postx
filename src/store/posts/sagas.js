import { takeLatest, call, put } from "redux-saga/effects";

import { FETCH_POSTS_START, ADD_POST_START, DELETE_POST_START } from "./actionTypes";

import {
	fetchPostsSuccess,
	fetchPostsFailure,
	addPostSuccess,
	addPostFailure,
	deletePostSuccess,
	deletePostFailure,
} from "./actions";

import { getAllPosts, addPost, deletePost } from "services/postsService";

import convertArrayToMap from "utils/convertArrayToMap";

export function* fetchPostsStart() {
	yield takeLatest(FETCH_POSTS_START, fetchPostsStartAsync);
}

export function* addPostStart() {
	yield takeLatest(ADD_POST_START, addPostAsync);
}

export function* deletePostStart() {
	yield takeLatest(DELETE_POST_START, deletePostAsync);
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
	try {
		const data = yield call(addPost, payload);
		yield put(addPostSuccess(data));
	} catch (err) {
		yield put(addPostFailure(err.message));
	}
}

function* deletePostAsync({ payload }) {
	try {
		const id = yield call(deletePost, payload);
		yield put(deletePostSuccess(id));
	} catch (err) {
		yield put(deletePostFailure(err.message));
	}
}

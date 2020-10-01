import { takeLatest, call, put } from "redux-saga/effects";

import eventBus from "eventBus";

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
		const res = yield call(getAllPosts);
		yield put(fetchPostsSuccess(convertArrayToMap(res.data)));
	} catch (err) {
		yield put(fetchPostsFailure("Error occured while loading posts"));
	}
}

function* addPostAsync({ payload }) {
	try {
		const res = yield call(addPost, payload);
		yield put(addPostSuccess(res.data));
		eventBus.dispatch("success", "Post was created succesfully");
	} catch (err) {
		yield put(addPostFailure("Error occured while creating a new post"));
	}
}

function* deletePostAsync({ payload }) {
	try {
		yield call(deletePost, payload);
		yield put(deletePostSuccess(payload));
		eventBus.dispatch("success", "Post was deleted succesfully");
	} catch (err) {
		yield put(deletePostFailure("Error occured while deleting the post"));
	}
}

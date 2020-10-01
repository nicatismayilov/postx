import { takeLatest, call, put } from "redux-saga/effects";

import eventBus from "eventBus";

import { FETCH_POSTS_START, ADD_POST_START, UPDATE_POST_START, DELETE_POST_START } from "./actionTypes";

import {
	fetchPostsSuccess,
	fetchPostsFailure,
	addPostSuccess,
	addPostFailure,
	updatePostSuccess,
	updatePostFailure,
	deletePostSuccess,
	deletePostFailure,
} from "./actions";

import { getAllPosts, addPost, updatePost, deletePost } from "services/postsService";

import convertArrayToMap from "utils/convertArrayToMap";

export function* fetchPostsStart() {
	yield takeLatest(FETCH_POSTS_START, fetchPostsStartAsync);
}

export function* addPostStart() {
	yield takeLatest(ADD_POST_START, addPostAsync);
}

export function* updatePostStart() {
	yield takeLatest(UPDATE_POST_START, updatePostAsync);
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

function* updatePostAsync({ payload }) {
	try {
		const res = yield call(updatePost, payload);
		yield put(updatePostSuccess(res.data));
		eventBus.dispatch("success", "The post was updated succesfully");
	} catch (err) {
		yield put(updatePostFailure("Error occured while updating the post"));
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

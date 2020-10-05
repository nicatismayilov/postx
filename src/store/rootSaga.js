import { all, call } from "redux-saga/effects";

import { fetchPostsStart, addPostStart, updatePostStart, deletePostStart } from "./posts/sagas";

export default function* rootSaga() {
	yield all([call(fetchPostsStart), call(addPostStart), call(updatePostStart), call(deletePostStart)]);
}

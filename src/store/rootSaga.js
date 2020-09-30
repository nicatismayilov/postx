import { all, call } from "redux-saga/effects";

import { fetchPostsStart, addPostStart } from "./posts/sagas";

export default function* rootSaga() {
	yield all([call(fetchPostsStart), call(addPostStart)]);
}

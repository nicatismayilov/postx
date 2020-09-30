import * as actionTypes from "./actionTypes";

const init = {
	posts: {},
	loading: false,
	err: "",
};

const reducer = (state = init, action) => {
	switch (action.type) {
		case actionTypes.FETCH_POSTS_START:
			return {
				...state,
				loading: true,
			};

		case actionTypes.FETCH_POSTS_SUCCESS:
			return {
				...state,
				posts: action.payload,
				loading: false,
			};

		case actionTypes.FETCH_POSTS_FAILURE:
			return {
				...state,
				err: action.payload,
				loading: false,
			};

		default:
			return state;
	}
};

export default reducer;

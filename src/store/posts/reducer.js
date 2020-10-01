import * as actionTypes from "./actionTypes";

const init = {
	posts: {},
	getLoading: false,
	postLoading: false,
	putLoading: false,
	deleteLoading: false,
	err: "",
};

const reducer = (state = init, action) => {
	switch (action.type) {
		case actionTypes.FETCH_POSTS_START:
			return {
				...state,
				getLoading: true,
				err: "",
			};

		case actionTypes.FETCH_POSTS_SUCCESS:
			return {
				...state,
				posts: action.payload,
				getLoading: false,
			};

		case actionTypes.FETCH_POSTS_FAILURE:
			return {
				...state,
				err: action.payload,
				getLoading: false,
			};

		case actionTypes.ADD_POST_START:
			return {
				...state,
				postLoading: true,
				err: "",
			};

		case actionTypes.ADD_POST_SUCCESS: {
			const { id } = action.payload;
			return {
				...state,
				posts: { ...state.posts, [id]: action.payload },
				postLoading: false,
			};
		}

		case actionTypes.ADD_POST_FAILURE:
			return {
				...state,
				err: action.payload,
				postLoading: false,
			};

		case actionTypes.UPDATE_POST_START:
			return {
				...state,
				putLoading: true,
				err: "",
			};

		case actionTypes.UPDATE_POST_SUCCESS: {
			const { id } = action.payload;
			return {
				...state,
				posts: { ...state.posts, [id]: action.payload },
				putLoading: false,
			};
		}

		case actionTypes.UPDATE_POST_FAILURE:
			return {
				...state,
				err: action.payload,
				putLoading: false,
			};

		case actionTypes.DELETE_POST_START:
			return {
				...state,
				deleteLoading: true,
				err: "",
			};

		case actionTypes.DELETE_POST_SUCCESS:
			const newPosts = state.posts;
			newPosts[action.payload] = undefined;
			return {
				...state,
				posts: newPosts,
				deleteLoading: false,
			};

		case actionTypes.DELETE_POST_FAILURE:
			return {
				...state,
				err: action.payload,
				deleteLoading: false,
			};

		default:
			return state;
	}
};

export default reducer;

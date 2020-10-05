import * as actionTypes from "./actionTypes";

const init = {
	categories: {
		1: {
			id: 1,
			name: "category 1",
			features: [
				{
					name: "something",
					type: "number",
				},
				{
					name: "bla bla bla",
					type: "string",
				},
			],
		},
		2: {
			id: 2,
			name: "category 2",
			features: [
				{
					name: "lorem ipsum",
					type: "number",
				},
			],
		},
	},
};

const reducer = (state = init, action) => {
	switch (action.type) {
		case actionTypes.ADD_CATEGORY: {
			const { id } = action.payload;
			return {
				...state,
				categories: {
					...state.categories,
					[id]: action.payload,
				},
			};
		}

		default:
			return state;
	}
};

export default reducer;

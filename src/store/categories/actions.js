import * as actionTypes from "./actionTypes";

export const addCategory = (newCategory) => ({
	type: actionTypes.ADD_CATEGORY,
	payload: newCategory,
});

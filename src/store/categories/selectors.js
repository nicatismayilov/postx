import { createSelector } from "reselect";

const categoriesState = (state) => state.categories;

export const selectCategoriesList = createSelector([categoriesState], (state) => Object.values(state.categories));

export const selectCategoriesLastId = createSelector([categoriesState], (state) => {
	const ids = Object.keys(state.categories);
	return ids[ids.length - 1];
});

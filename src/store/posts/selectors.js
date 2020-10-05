import { createSelector } from "reselect";

const selectPostsState = (state) => state.posts;

export const selectPosts = createSelector([selectPostsState], (state) => Object.values(state.posts));

export const selectPostsFiltered = (category) =>
	createSelector([selectPosts], (posts) => posts.filter((post) => post.category === category));

export const selectGetPostsLoading = createSelector([selectPostsState], (state) => state.getLoading);

export const selectAddPostLoading = createSelector([selectPostsState], (state) => state.postLoading);

export const selectUpdatePostLoading = createSelector([selectPostsState], (state) => state.putLoading);

export const selectDeletePostLoading = createSelector([selectPostsState], (state) => state.deleteLoading);

export const selectPostsError = createSelector([selectPostsState], (state) => state.err);

export const selectPost = (postId) => createSelector([selectPostsState], (state) => state.posts[postId]);

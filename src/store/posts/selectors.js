import { createSelector } from "reselect";

const selectPostsState = (state) => state.posts;

export const selectPosts = createSelector([selectPostsState], (postsState) => Object.values(postsState.posts));

export const selectPostsLoading = createSelector([selectPostsState], (postsState) => postsState.loading);
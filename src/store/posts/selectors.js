import { createSelector } from "reselect";

const selectPostsState = (state) => state.posts;

export const selectPosts = createSelector([selectPostsState], (postsState) => Object.values(postsState.posts));

export const selectGetPostsLoading = createSelector([selectPostsState], (postsState) => postsState.getLoading);

export const selectAddPostLoading = createSelector([selectPostsState], (postsState) => postsState.postLoading);

export const selectUpdatePostLoading = createSelector([selectPostsState], (postsState) => postsState.putLoading);

export const selectDeletePostLoading = createSelector([selectPostsState], (postsState) => postsState.deleteLoading);

export const selectPostsError = createSelector([selectPostsState], (postsState) => postsState.err);

export const selectPost = (postId) => createSelector([selectPostsState], (postsState) => postsState.posts[postId]);

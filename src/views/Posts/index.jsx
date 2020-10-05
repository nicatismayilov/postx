import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectPosts, selectGetPostsLoading } from "store/posts/selectors";

import Spinner from "components/Spinner";
import PostOverview from "components/PostOverview";
import AddPostPopUp from "components/AddPostPopUp";
import AddCategoryPopUp from "components/AddCategoryPopUp";

import "./styles.scss";

const Posts = (props) => {
	const { posts, loading } = props;

	const [popUpVisible, setPopUpVisible] = useState(false);
	const [categoryPopUpVisible, setCategoryPopUpVisible] = useState(false);

	return (
		<div className="posts-page">
			<div className="container">
				<div className="d-flex justify-content-between">
					<h2 className="posts-page__title">Posts</h2>

					<div className="d-flex align-items-center">
						<button className="posts-page__btn" onClick={() => setCategoryPopUpVisible(true)}>
							Add category
						</button>

						<button className="posts-page__btn" onClick={() => setPopUpVisible(true)}>
							Add post
						</button>
					</div>
				</div>

				<div className="posts-page__content">{loading ? <Spinner /> : renderPosts(posts)}</div>
			</div>

			{popUpVisible && <AddPostPopUp closePopUp={() => setPopUpVisible(false)} />}

			{categoryPopUpVisible && <AddCategoryPopUp closePopUp={() => setCategoryPopUpVisible(false)} />}
		</div>
	);
};

const renderPosts = (posts) => {
	return (
		<div className="row">
			{posts.map(
				(post, idx) =>
					post && (
						<div key={idx} className="col-3">
							<PostOverview title={post.title} body={post.body} id={post.id} />
						</div>
					)
			)}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	posts: selectPosts,
	loading: selectGetPostsLoading,
});

export default connect(mapStateToProps)(Posts);

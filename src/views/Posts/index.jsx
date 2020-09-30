import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectPosts, selectPostsLoading } from "store/posts/selectors";

import Spinner from "components/Spinner";
import PostOverview from "components/PostOverview";

import "./styles.scss";

const Posts = (props) => {
	const { posts, loading } = props;

	return (
		<div className="posts-page">
			<div className="container">
				<h2 className="posts-page__title">Posts</h2>

				<div className="posts-page__content">{loading ? <Spinner /> : renderPosts(posts)}</div>
			</div>
		</div>
	);
};

const renderPosts = (posts) => {
	return (
		<div className="row">
			{posts.map((post, idx) => (
				<div key={idx} className="col-3">
					<PostOverview title={post.title} body={post.body} />
				</div>
			))}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	posts: selectPosts,
	loading: selectPostsLoading,
});

export default connect(mapStateToProps)(Posts);

import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectPosts } from "store/posts/selectors";

import "./styles.scss";

const Posts = (props) => {
	const { posts } = props;

	return (
		<div className="posts-page">
			{posts.map((post) => (
				<div>{post.title}</div>
			))}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	posts: selectPosts,
});

export default connect(mapStateToProps)(Posts);

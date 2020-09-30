import React, { useEffect } from "react";

import { connect } from "react-redux";

import { fetchPostsStart } from "store/posts/actions";

import "./styles/index.scss";

const App = (props) => {
	const { fetchPosts } = props;

	useEffect(() => {
		fetchPosts();
	}, [fetchPosts]);

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-5">col 5</div>
				<div className="col-md-6">col 6</div>
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	fetchPosts: () => dispatch(fetchPostsStart()),
});

export default connect(null, mapDispatchToProps)(App);

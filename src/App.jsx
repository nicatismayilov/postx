import React, { useEffect } from "react";

import { connect } from "react-redux";

import { fetchPostsStart } from "store/posts/actions";

const App = (props) => {
	const { fetchPosts } = props;

	useEffect(() => {
		fetchPosts();
	}, [fetchPosts]);

	return <div className="App">Product App Demo</div>;
};

const mapDispatchToProps = (dispatch) => ({
	fetchPosts: () => dispatch(fetchPostsStart()),
});

export default connect(null, mapDispatchToProps)(App);

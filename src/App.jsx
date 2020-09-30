import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";

import { fetchPostsStart } from "store/posts/actions";

import Header from "components/Header";

import Home from "views/Home";
import Posts from "views/Posts";

import "./styles/index.scss";

const App = (props) => {
	const { fetchPosts } = props;

	useEffect(() => {
		fetchPosts();
	}, [fetchPosts]);

	return (
		<div className="app">
			<Header />

			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/posts" component={Posts} />
			</Switch>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	fetchPosts: () => dispatch(fetchPostsStart()),
});

export default connect(null, mapDispatchToProps)(App);

import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";

import eventBus from "eventBus";

import { fetchPostsStart } from "store/posts/actions";

import Home from "views/Home";
import Posts from "views/Posts";
import PostView from "views/PostView";

import Header from "components/Header";
import Alert from "components/Alert";

import "./styles/index.scss";

const App = (props) => {
	const { fetchPosts } = props;

	const [alertActive, setAlertActive] = useState(false);
	const [alertInfo, setAlertInfo] = useState({
		type: "",
		text: "",
	});

	useEffect(() => {
		eventBus.on("post deleted", (info) => {
			const { type, text } = info;
			setAlertInfo({ type, text });
			setAlertActive(true);
		});
	}, []);

	useEffect(() => {
		fetchPosts();
	}, [fetchPosts]);

	return (
		<div className="app">
			<Header />

			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/posts" component={Posts} />
				<Route path="/posts/:id" component={PostView} />
			</Switch>

			<Alert type={alertInfo.type} text={alertInfo.text} onDeactivate={() => setAlertActive(false)} active={alertActive} />
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	fetchPosts: () => dispatch(fetchPostsStart()),
});

export default connect(null, mapDispatchToProps)(App);

import React, { useEffect } from "react";
import { connect } from "react-redux";

import eventBus from "eventBus";

import { deletePostStart } from "store/posts/actions";

import { selectPost } from "store/posts/selectors";

import "./styles.scss";

const PostView = (props) => {
	const { post, history, match } = props;
	const { deletePost } = props;

	useEffect(() => {
		if (!post) {
			history.push(match.url.split(`/${match.params.id}`)[0]);
			eventBus.dispatch("post deleted", { type: "success", text: "Post was deleted succesfully" });
		}
	}, [post, history, match]);

	const handleDelete = () => {
		deletePost(post.id);
	};

	return (
		<div className="post-view">
			{post && (
				<div className="post">
					<h2 className="post__title">
						{post.title} - <span className="post__id">{post.id}</span>
					</h2>

					<p className="post__body">{post.body}</p>

					<div className="post__btn-group">
						<button className="post__btn post__btn--delete" onClick={handleDelete}>
							Delete
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

const mapStateToProps = (state, props) => ({
	post: selectPost(props.match.params.id)(state),
});

const mapDispatchToProps = (dispatch) => ({
	deletePost: (id) => dispatch(deletePostStart(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostView);

import React from "react";
import { connect } from "react-redux";

import { deletePostStart } from "store/posts/actions";

import { selectPost } from "store/posts/selectors";

import "./styles.scss";

const PostView = (props) => {
	const { post } = props;
	const { deletePost } = props;

	return (
		<div className="post-view">
			{post && (
				<div className="post">
					<h2 className="post__title">
						{post.title} - <span className="post__id">{post.id}</span>
					</h2>

					<p className="post__body">{post.body}</p>

					<div className="post__btn-group">
						<button className="post__btn post__btn--delete" onClick={() => deletePost(post)}>
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

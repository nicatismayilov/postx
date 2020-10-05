import React, { useEffect } from "react";
import { connect } from "react-redux";

import eventBus from "eventBus";

import { updatePostStart, deletePostStart } from "store/posts/actions";

import { selectPost } from "store/posts/selectors";

import EditIcon from "img-components/editIcon";

import "./styles.scss";

const PostView = (props) => {
	const { post, history, match } = props;
	const { updatePost, deletePost } = props;

	// const [title, setTitle] = useState(post.title);
	// const [body, setBody] = useState(post.body);
	// const [isEditMode, setIsEditMode] = useState(false);

	useEffect(() => {
		if (!post) {
			history.push(match.url.split(`/${match.params.id}`)[0]);
		} else {
			// setTitle(post.title);
			// setBody(post.body);
		}
	}, [post, history, match]);

	const handleUpdate = () => {
		if (false) updatePost({});
		else eventBus.dispatch("info", "Update fucntionality has not been implemented yet");
	};

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

					<div className="mb-5">{post.category}</div>

					<div className="post__btn-group">
						<button className="post__btn">
							<EditIcon size={20} color="#000" />
						</button>

						<button className="post__btn post__btn--update" onClick={handleUpdate}>
							Update
						</button>

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
	updatePost: (post) => dispatch(updatePostStart(post)),
	deletePost: (id) => dispatch(deletePostStart(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostView);

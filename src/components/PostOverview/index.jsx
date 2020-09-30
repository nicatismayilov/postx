import React from "react";

import "./styles.scss";

const PostOverview = (props) => {
	const { title, body } = props;

	return (
		<div className="post-overview">
			<div className="post-overview__title">{title}</div>

			<div className="post-overview__body">{body}</div>
		</div>
	);
};

export default PostOverview;

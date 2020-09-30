import React from "react";
import { withRouter } from "react-router-dom";

import "./styles.scss";

const PostOverview = (props) => {
	const { title, body, id, history, match } = props;

	const handleClick = () => history.push(`${match.path}/${id}`);

	return (
		<div className="post-overview" onClick={handleClick}>
			<div className="post-overview__title">{title}</div>

			<div className="post-overview__body">{body}</div>
		</div>
	);
};

export default withRouter(PostOverview);

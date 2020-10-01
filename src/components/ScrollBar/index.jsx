import React from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { PropTypes } from "prop-types";

import "./styles.scss";

const ScrollBar = (props) => {
	const { renderHorizontal } = props;
	return (
		<Scrollbars
			autoHide={props.hide}
			style={{
				height: "100%",
				width: "100%",
			}}
			renderThumbVertical={(props) => <div {...props} className="scrollbar-thumb-vertical" />}
			renderThumbHorizontal={(props) => <div {...props} className="scrollbar-thumb-horizontal" />}
			renderView={(props) =>
				renderHorizontal ? (
					<div {...props} className={`scrollbar-view-horizontal`} />
				) : (
					<div {...props} className={`scrollbar-view-vertical`} />
				)
			}
			hideTracksWhenNotNeeded={true}
		>
			{props.children}
		</Scrollbars>
	);
};

ScrollBar.propTypes = {
	hide: PropTypes.bool,
	renderHorizontal: PropTypes.bool,
};

ScrollBar.defaultProps = {
	hide: false,
	renderHorizontal: false,
};

export default ScrollBar;

import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import debounce from "utils/debounce";

import successIcon from "assets/img/success.svg";
import infoIcon from "assets/img/info.svg";
import warningIcon from "assets/img/warning.svg";
import errorIcon from "assets/img/error.svg";
import dismissIcon from "assets/img/dismiss.svg";

import "./styles.scss";

const Alert = (props) => {
	const { type, text, active } = props;
	const { onDeactivate } = props;

	useEffect(() => {
		if (active) debounce(onDeactivate, 1500)();
	}, [active, onDeactivate]);

	return ReactDOM.createPortal(
		<div className={`alert alert--${type} ${(active && "alert--active") || ""}`}>
			<div className="row justify-content-between align-items-center">
				<div className="col-9 d-flex align-items-center">
					<img className="alert__icon" src={renderIcon(type)} alt={type} />

					<div className="alert__text">{text}</div>
				</div>

				<div className="col-2 d-flex justify-content-end">
					<button className="alert__btn" onClick={onDeactivate}>
						<img src={dismissIcon} alt="x" />
					</button>
				</div>
			</div>
		</div>,
		document.getElementById("alert-root")
	);
};

const renderIcon = (type) => {
	switch (type) {
		case "success":
			return successIcon;
		case "info":
			return infoIcon;
		case "warning":
			return warningIcon;
		case "error":
			return errorIcon;
		default:
			return "";
	}
};

export default Alert;

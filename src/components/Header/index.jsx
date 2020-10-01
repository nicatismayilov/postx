import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

const Header = () => (
	<div className="header">
		<div className="container">
			<Link to="/" className="header__link">
				Home
			</Link>

			<Link to="/posts" className="header__link">
				Posts
			</Link>
		</div>
	</div>
);

export default Header;

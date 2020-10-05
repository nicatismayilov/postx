import React, { useState } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import eventBus from "eventBus";

import { addPostStart } from "store/posts/actions";

import { selectCategoriesList } from "store/categories/selectors";

import "./styles.scss";

const AddPostPopUp = (props) => {
	const { closePopUp, addPost } = props;
	const { categories } = props;

	const [category, setCategory] = useState(categories[0].name);
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");

	const handleChange = (e) => {
		const { name, value } = e.target;
		switch (name) {
			case "category":
				setCategory(value);
				break;
			case "title":
				setTitle(value);
				break;
			case "body":
				setBody(value);
				break;
			default:
				return;
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!title || !body) {
			eventBus.dispatch("warning", "Please fill the required fields");
			return;
		}

		const post = {
			category,
			title,
			body,
			userId: 1,
		};

		await addPost(post);
		closePopUp();
	};

	return ReactDOM.createPortal(
		<div className="add-post-popup" onClick={closePopUp}>
			<div className="add-post-card" onClick={(e) => e.stopPropagation()}>
				<h4 className="add-post-card__title">Add Post</h4>

				<div className="add-post-card__content">
					<form className="add-post-form" onSubmit={handleSubmit}>
						<div className="add-post-form__group">
							<select
								type="text"
								id="category"
								name="category"
								className="add-post-form__input"
								value={category}
								onChange={handleChange}
							>
								{categories.map((category, idx) => (
									<option key={idx} value={category.name}>
										{category.name}
									</option>
								))}
							</select>

							<label htmlFor="category" className="add-post-form__label">
								Category
							</label>
						</div>

						<div className="add-post-form__group">
							<input
								type="text"
								id="title"
								name="title"
								className="add-post-form__input"
								value={title}
								onChange={handleChange}
							/>

							<label htmlFor="title" className="add-post-form__label">
								Title
							</label>
						</div>

						<div className="add-post-form__group">
							<input
								type="text"
								id="body"
								name="body"
								className="add-post-form__input"
								value={body}
								onChange={handleChange}
							/>

							<label htmlFor="body" className="add-post-form__label">
								Body
							</label>
						</div>

						<button type="submit" className="add-post-form__btn">
							Add
						</button>
					</form>
				</div>
			</div>
		</div>,
		document.getElementById("popup-root")
	);
};

const mapStateToProps = createStructuredSelector({
	categories: selectCategoriesList,
});

const mapDispatchToProps = (dispatch) => ({
	addPost: (post) => dispatch(addPostStart(post)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPostPopUp);

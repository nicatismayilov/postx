import React, { useState } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import eventBus from "eventBus";

import { addCategory } from "store/categories/actions";

import { selectCategoriesLastId } from "store/categories/selectors";

import "./styles.scss";

const AddCategoryPopUp = (props) => {
	const { closePopUp, addCategory } = props;
	const { lastId } = props;

	const [name, setName] = useState("");
	const [features, setFeatures] = useState([]);

	const addFeature = () => {
		setFeatures([...features, { name: "", type: "" }]);
	};

	const handleFeatureChange = (e, idx) => {
		const { name, value } = e.target;
		let newFeatures = [...features];
		newFeatures[idx][name] = value;
		setFeatures(newFeatures);
	};

	const handleNameChange = (e) => {
		const { value } = e.target;
		setName(value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (name) {
			const id = Number(+lastId + 1);

			const newCategory = {
				id,
				name,
				features,
			};

			addCategory(newCategory);
			eventBus.dispatch("success", "New category has been added");
		} else eventBus.dispatch("error", "Category name cannot be empty");
	};

	return ReactDOM.createPortal(
		<div className="add-category-popup" onClick={closePopUp}>
			<div className="add-category-card" onClick={(e) => e.stopPropagation()}>
				<h4 className="add-category-card__title">Add Category</h4>

				<div className="add-category-card__content">
					<form className="add-post-form" onSubmit={handleSubmit}>
						<div className="add-post-form__group">
							<input
								type="text"
								id="name"
								name="name"
								className="add-post-form__input"
								value={name}
								onChange={handleNameChange}
							/>

							<label htmlFor="name" className="add-post-form__label">
								Name
							</label>
						</div>

						<div className="features mb-3">
							<h5>Features</h5>

							<div className="d-flex flex-column">
								{features &&
									features.map((feature, idx) => (
										<div key={idx} className="feature d-flex">
											<input type="text" value={feature.name} name="name" onChange={(e) => handleFeatureChange(e, idx)} />

											<select name="type" id="" value={feature.type} onChange={(e) => handleFeatureChange(e, idx)}>
												<option value="" disabled hidden></option>
												<option value="number">number</option>
												<option value="string">string</option>
											</select>
										</div>
									))}
							</div>

							<button onClick={() => addFeature()}>Add Feature</button>
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
	lastId: selectCategoriesLastId,
});

const mapDispatchToProps = (dispatch) => ({
	addCategory: (newCategory) => dispatch(addCategory(newCategory)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCategoryPopUp);

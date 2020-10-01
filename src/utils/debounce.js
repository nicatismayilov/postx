const debounce = (func, wait) => {
	let timeout;

	return function executedFunc(...args) {
		const later = () => {
			clearTimeout(timeout);
			func(...args);
		};

		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
	};
};

export default debounce;

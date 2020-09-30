const convertArrayToMap = (arr) =>
	arr.reduce((acc, elem) => {
		acc[elem.id] = elem;
		return acc;
	}, {});

export default convertArrayToMap;

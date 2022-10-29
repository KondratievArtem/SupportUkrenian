const getDataLS = () => {
	const data = localStorage.getItem('cart');
	return data ? JSON.parse(data) : [];
};

export default getDataLS;

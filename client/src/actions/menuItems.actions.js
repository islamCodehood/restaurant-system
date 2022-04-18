import * as api from '../api';

export const getMenuItems = () => async dispatch => {
	try {
		const { data } = await api.getMenuItems();
		console.log(data)
		dispatch({ type: 'FETCH_ALL', payload: data });
	} catch (err) {
		console.log(err);
	}
};

export const incrementItem = id => {
	
	return {
		type: 'INCREMENT_ITEM',
		payload: {
			id,
		},
	};
};

export const decrementItem = id => {
	return {
		type: 'DECREMENT_ITEM',
		payload: {
			id,
		},
	};
};

export const deleteItem = id => {
	return {
		type: 'DELETE_ITEM',
		payload: {
			id,
		},
	};
};

export const resetCart = () => {
	return {
		type: 'RESET_CART',
	};
};

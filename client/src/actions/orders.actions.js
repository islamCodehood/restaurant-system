import * as api from '../api';

export const addOrder = order => async (dispatch) => {
	try {
		console.log(order);
		const { data } = await api.addOrder(order);
		dispatch({ type: 'ADD_ORDER', payload: data });
		} catch(err) {
		console.log(err);
	}
};

export const getOrders = () => async (dispatch) => {
	try {
		const { data } = await api.getOrders();
		console.log(data);
		dispatch({ type: 'FETCH_ORDERS', payload: data });
	} catch(err) {
		console.log(err);
	}
}

export const changeOrderStatus = (updatedOrder) => async (dispatch) => {
	
	try {
		const { data } = await api.changeOrderStatus(updatedOrder);
		console.log(data);
		dispatch({ type: 'CHANGE_ORDER_STATUS', payload: data });
	} catch(err) {
		console.log(err);
	}
}
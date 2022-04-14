const reducer = (state = [], action) => {
	switch (action.type) {
		case 'ADD_ORDER':
			return [...state, action.payload ];
		case 'FETCH_ORDERS':
			return action.payload;
		case 'CHANGE_ORDER_STATUS':
			return state.map(order => {
				if (order.id === action.payload.id) {
					return {...order, pending: false};
				} else {
					return order;
				}
			});
		default:
			return state;
	}
};

export default reducer;

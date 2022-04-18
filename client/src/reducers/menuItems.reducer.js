import { randomize } from '../utils/randomize';

// const initialMenuItems = [
// 	{
// 		id: 1,
// 		itemName: 'seafood pizza',
// 		ingredients: ['snail', 'fish', 'shrimp'],
// 		price: 140,
// 		orderQty: 0,
// 		category: 'pizza',
// 		popular: true,
// 	},
// 	{
// 		id: 2,
// 		itemName: 'chicken ranch pizza',
// 		ingredients: ['chicken', 'ranch sauce'],
// 		price: 120,
// 		orderQty: 0,
// 		category: 'pizza',
// 		popular: true,
// 	},
// 	{
// 		id: 3,
// 		itemName: 'Cheese mix pizza',
// 		ingredients: ['snail', 'fish', 'shrimp'],
// 		price: 140,
// 		orderQty: 0,
// 		category: 'pizza',
// 		popular: true,
// 	},
// 	{
// 		id: 4,
// 		itemName: 'chicken ranch pizza',
// 		ingredients: ['chicken', 'ranch sauce'],
// 		price: 120,
// 		orderQty: 0,
// 		category: 'pizza',
// 		popular: true,
// 	},
// 	{
// 		id: 5,
// 		itemName: 'beef burger',
// 		ingredients: ['beef', 'cheese', 'lattice'],
// 		price: 45,
// 		orderQty: 0,
// 		category: 'burger',
// 		popular: true,
// 	},
// 	{
// 		id: 6,
// 		itemName: 'beef burger',
// 		ingredients: ['beef', 'cheese', 'lattice'],
// 		price: 45,
// 		orderQty: 0,
// 		category: 'burger',
// 		popular: true,
// 	},
// 	{
// 		id: 7,
// 		itemName: 'beef burger',
// 		ingredients: ['beef', 'cheese', 'lattice'],
// 		price: 45,
// 		orderQty: 0,
// 		category: 'burger',
// 		popular: true,
// 	},
// 	{
// 		id: 8,
// 		itemName: 'beef burger',
// 		ingredients: ['beef', 'cheese', 'lattice'],
// 		price: 45,
// 		orderQty: 0,
// 		category: 'burger',
// 		popular: true,
// 	},
// 	{
// 		id: 9,
// 		itemName: 'espresso',
// 		ingredients: ['coffee'],
// 		price: 35,
// 		orderQty: 0,
// 		category: 'drinks',
// 		popular: false,
// 	},
// 	{
// 		id: 10,
// 		itemName: 'mocha',
// 		ingredients: ['coffee', 'chocolate'],
// 		price: 55,
// 		orderQty: 0,
// 		category: 'drinks',
// 		popular: true,
// 	},
// 	{
// 		id: 11,
// 		itemName: 'espresso',
// 		ingredients: ['coffee'],
// 		price: 35,
// 		orderQty: 0,
// 		category: 'drinks',
// 		popular: false,
// 	},
// 	{
// 		id: 12,
// 		itemName: 'mocha',
// 		ingredients: ['coffee', 'chocolate'],
// 		price: 55,
// 		orderQty: 0,
// 		category: 'drinks',
// 		popular: true,
// 	},
// ];

const reducer = (state = [], action) => {
	switch (action.type) {
		case 'FETCH_ALL':
			return action.payload;
		case 'INCREMENT_ITEM':
			console.log(state)
			return state.map(item => {
				if (item._id === action.payload.id) {
					return {
						...item,
						orderQty: item.orderQty + 1,
					};
				}
				return item;
			});
		case 'DECREMENT_ITEM':
			return state.map(item => {
				if (item._id === action.payload.id) {
					return {
						...item,
						orderQty: item.orderQty - 1,
					};
				}
				return item;
			});
		case 'DELETE_ITEM':
			return state.map(item => {
				if (item._id === action.payload.id) {
					return {
						...item,
						orderQty: 0,
					};
				}
				return item;
			});
		case 'RESET_CART':
			return state.map(item => {
				return {
					...item,
					orderQty: 0,
				};
			});
		default:
			return state;
	}
};

export default reducer;

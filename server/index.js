import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import menuRoutes from './routes/menu.routes.js';
import ordersRoutes from './routes/orders.routes.js';
import dotenv from 'dotenv';

const app = express();

dotenv.config();

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));

app.use(cors());

app.use('/menu', menuRoutes);
app.use('/orders', ordersRoutes);

mongoose
	.connect(process.env.CONNECTION_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() =>
		app.listen(process.env.PORT, () =>
			console.log(`server running at port: ${process.env.PORT}`)
		)
	)
	.catch(err => {
		console.log(err.message);
	});

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
// 		itemName: 'chicken pizza',
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
// 		itemName: 'chicken burger',
// 		ingredients: ['beef', 'cheese', 'lattice'],
// 		price: 45,
// 		orderQty: 0,
// 		category: 'burger',
// 		popular: true,
// 	},
// 	{
// 		id: 7,
// 		itemName: 'cheese burger',
// 		ingredients: ['beef', 'cheese', 'lattice'],
// 		price: 45,
// 		orderQty: 0,
// 		category: 'burger',
// 		popular: true,
// 	},
// 	{
// 		id: 8,
// 		itemName: 'double beef burger',
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
// 		itemName: 'latte',
// 		ingredients: ['coffee'],
// 		price: 35,
// 		orderQty: 0,
// 		category: 'drinks',
// 		popular: false,
// 	},
// 	{
// 		id: 12,
// 		itemName: 'hot chocolate',
// 		ingredients: ['coffee', 'chocolate'],
// 		price: 55,
// 		orderQty: 0,
// 		category: 'drinks',
// 		popular: true,
// 	},
// ];

// let orders = [
// 	{
// 		id: 12543,
// 		userDetails: {
// 			address: 'Obour City',
// 			city: 'Cairo',
// 			mobile: '01202226308',
// 			name: 'Islam Sayed',
// 		},
// 		orderItems: [
// 			{
// 				itemName: 'beef burger',
// 				orderQty: 2,
// 			},
// 		],
// 		pending: false,
// 	},
// ];

// app.get('/menu', (req, res) => {
// 	res.status(200).json(initialMenuItems);
// });

// app.post('/orders', async (req, res) => {
// 	const { id, userDetails, pending, orderItems, orderedAt } = req.body;
// 	const newOrder = {
// 		id,
// 		userDetails,
// 		pending,
// 		orderItems,
// 		orderedAt,
// 	};
// 	orders.push(newOrder);
// 	res.status(200).json(newOrder);
// });

// app.get('/orders', (req, res) => {
// 	res.status(200).json(orders);
// });

// app.patch('/orders', (req, res) => {
// 	const updatedOrder = req.body;

// 	orders = orders.map(order => {
// 		if (order.id === updatedOrder.id) {
// 			return { ...order, pending: updatedOrder.pending };
// 		} else {
// 			return order;
// 		}
// 	});

// 	res.status(200).json(updatedOrder);
// });

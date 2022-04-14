import Orders from '../models/orders.model.js';

export const getOrders = async (req, res) => {
	try {
		const orders = await Orders.find();
		res.status(200).json({ orders });
	} catch (error) {
		res.status(404).json({
			message: error.message,
		});
	}
};

export const addOrder = async (req, res) => {
	const order = req.body;
	const newOrder = new Order({ ...order });
	try {
		await newOrder.save();
		res.status(201).json({ newOrder });
	} catch (error) {
		res.status(409).json({
			message: error.message,
		});
	}
};

export const changeOrderStatus = async (req, res) => {
	const { id: _id } = req.params;
	const order = req.body;
	try {
		const updatedOrder = await Orders.findByIdAndUpdate(_id, order, {
			new: true,
		});
		res.status(200).json({ updatedOrder });
	} catch (error) {
		res.status(404).json({
			message: error.message,
		});
	}
};

import mongoose from 'mongoose';

const ordersSchema = mongoose.Schema({
	userDetails: {
		type: Object,
		required: true,
	},
	orderItems: [Object],
	pending: {
		type: Boolean,
		default: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

export default mongoose.model('Orders', ordersSchema);

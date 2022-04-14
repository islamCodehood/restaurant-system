import mongoose from 'mongoose';

const menuSchema = mongoose.Schema({
	id: String,
	itemName: String,
	ingredients: [String],
	price: Number,
	orderQty: {
		type: Number,
		default: 0,
	},
	category: String,
	popular: {
		type: Boolean,
		default: false,
	},
});

export default mongoose.model('Menu', menuSchema);

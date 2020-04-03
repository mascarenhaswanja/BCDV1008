const mongoose = require('mongoose')

const ordersSchema = new mongoose.Schema({
	order: {
		type: String,
		require: true
	},
	customer_name: {
		type: String,
		require: true
	}
});
const Orders = mongoose.model('Restaurants', ordersSchema, 'Orders');
module.exports = Orders;
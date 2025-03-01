const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    customerName: { type: String, required: true },
    customerAddress: { type: String, required: true },
    phone: { type: String, required: true },
    items: [
        {
            foodItemId: { type: mongoose.Schema.Types.ObjectId, ref: 'FoodItem', required: true },
            quantity: { type: Number, required: true }
        }
    ],
    totalAmount: { type: Number, required: true },
    status: { type: String, default: 'Pending' }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);

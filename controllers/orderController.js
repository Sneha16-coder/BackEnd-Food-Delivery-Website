const Order = require('../models/Order');

// Place a new order
exports.placeOrder = async (req, res) => {
    try {
        const { customerName, customerAddress, phone, items, totalAmount } = req.body;
        
        const newOrder = new Order({
            customerName,
            customerAddress,
            phone,
            items,
            totalAmount
        });

        await newOrder.save();
        res.status(201).json({ message: 'Order placed successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Error placing order' });
    }
};

// Get all orders (optional, for admin use)
exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate('items.foodItemId');
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching orders' });
    }
};

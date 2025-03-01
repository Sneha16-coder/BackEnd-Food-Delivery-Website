const FoodItem = require('../models/FoodItem');

// Get all food items
exports.getMenu = async (req, res) => {
    try {
        const foodItems = await FoodItem.find();
        res.json(foodItems);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching menu items' });
    }
};

// Add new food item (optional, for admin use)
exports.addFoodItem = async (req, res) => {
    try {
        const { name, description, price, imageUrl } = req.body;
        const newItem = new FoodItem({ name, description, price, imageUrl });
        await newItem.save();
        res.status(201).json({ message: 'Food item added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error adding food item' });
    }
};

const mongoose = require('mongoose');

// Creating Schema for Items 
const ItemSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'Please enter a name'],
    },

    price: {
        type: Number,
        required: [true, 'Please enter  Price']
    },

    description: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    quantity: {
        type: Number,
        required: true,
        default: 0
    },
    
    isActive: {
        type: Boolean,
        default: true
    },

}, { timestamps: true });

module.exports = mongoose.model('Item', ItemSchema)
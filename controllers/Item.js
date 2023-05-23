const Item = require('../models/Item'); // importing schema from models 


// Creating a Item in databse 
exports.createItem = async (req, res) => {
    try {

        // Taking all the required fields from the req.body
        const { name, email, price, description, category, quantity, isActive } = req.body;

        // creating a item in database 
        const item = await Item.create({
            name,
            email,
            price,
            description,
            category,
            quantity,
            isActive,
        });

        // showing successfull response and sending created item in json 
        res.status(201).json({
            success: true,
            item,
        })


    } catch (error) {

        // catch the errors from try block generic errors
        res.status(500).json({
            success: false,
            message: "Failed to create item. Please try again later.",
            Error: error.message
        })

    }

}

// Updating a item in a database using id params
exports.updateItem = async (req, res) => {
    try {

        // find the perticular item from database using the params id
        const item = await Item.findById(req.params.id);

        // If the item is not present in the database throw a error with status code 404
        if (!item) {
            return res.status(404).json({
                success: false,
                message: "Item not found",
            });
        }

        // finding item and updating with req.body 
        const updateItem = await Item.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true });


         // showing successfull response and sending updated item in json 
        res.status(200).json({
            success: true,
            updateItem,
        })


    } catch (error) {

        // catch the errors from try block generic errors
        res.status(500).json({
            success: false,
            massage: "Failed to update item. Please try again later.",
            Error: error.message
        })

    }

}

// Deleting a perticular item from database 
exports.deleteItem = async (req, res) => {
    try {

         // find the perticular item from database using the params id
        const item = await Item.findById(req.params.id);

        // If the item is not present in the database throw a error with status code 404
        if (!item) {
            return res.status(404).json({
                success: false,
                message: "Item not found",
            });
        }

        // finding the item and deleting 
        await Item.findByIdAndDelete(req.params.id)


        // showing successfull response and sending deleted message in json 
        res.status(200).json({
            success: true,
            message: 'Item has been deleted....'
        })


    } catch (error) {

        // catch the errors from try block generic errors
        res.status(500).json({
            success: false,
            massage: "Failed to delete item. Please try again later.",
            Error: error.message

        })

    }

}

// Getting a perticular item from database using params id
exports.getItem = async (req, res) => {
    try {

        // find the perticular item from database using the params id
        const item = await Item.findById(req.params.id);

        // If the item is not present in the database throw a error with status code 404
        if (!item) {
            return res.status(404).json({
                success: false,
                message: "Item not found",
            });
        }


        // showing successfull response and sending perticular item in json 
        res.status(200).json({
            success: true,
            item,
        })

    } catch (error) {

        // catch the errors from try block generic errors
        res.status(500).json({
            success: false,
            message: "Failed to fetch item. Please try again later.",
            Error: error.message
        })

    }
}

// Getting all the items from database 
exports.getAllItems = async (req, res) => {
    try {
        // Getting page number from params or default page number is 1
        const page = parseInt(req.query.page) || 1;
        // Getting limit from params or default limit is 10
        const limit = parseInt(req.query.limit) || 10;

        // calculating start index 
        const startIndex = (page - 1) * limit;

        // getting all items from database
        const totalItems = await Item.countDocuments();

        // setting total pages count with ceil value
        const totalPages = Math.ceil(totalItems / limit);

        //getting all the items from database with pagination 
        const items = await Item.find()
            .sort({ createdAt: -1 })
            .skip(startIndex)
            .limit(limit);

        // showing successfull response and sending all the items in json with current page and total pages of pagination
        res.status(200).json({
            success: true,
            items,
            currentPage: page,
            totalPages,
        });
    } catch (error) {

        // catch the errors from try block generic errors
        res.status(500).json({
            success: false,
            message: "Failed to fetch items. Please try again later.",
            Error: error.message
        });
    }
};

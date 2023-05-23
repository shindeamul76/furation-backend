const express = require('express'); // importing express module
const app = express(); 
const connectDB = require('./database/connection') // importing connectDB function 
require('dotenv').config() // importing dotenv to access the .env variables
const cors = require('cors') // importing cors for ralaxing cross origin policy
const logger = require('./logger') // importing logger from logger file from winston


// Middlewares
app.use(express.json()); // parses incoming requests 
app.use(express.urlencoded({ extented: true })); //  parse URL-encoded data sent in the request body
app.use(cors()) // relaxing cross origin policy

const itemRoutes = require('./routes/Item');

app.use('/api/items', itemRoutes); // setting a common route for all api of items


// connecting to database and showing connected message
const start = async () => {

    try {

        await connectDB(process.env.MONGO_URL)
        app.listen(process.env.PORT, () => logger.info(`server is running on port ${process.env.PORT}...`))

    } catch (error) {
        logger.error(error);
    }
}

start()
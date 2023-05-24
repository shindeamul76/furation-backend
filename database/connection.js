const mongoose = require('mongoose');


// conneting to the Mongodb database with mongoose 
const connectDB = (url) => {

    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}

module.exports = connectDB
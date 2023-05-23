
const itemsLogger = require('./itemLogger')
const productionItemsLogger = require('./productionItemsLogger')

let logger = null

// if our NODE_ENV is not equal to production we can use itemsLoggers which logs in console
if (process.env.NODE_ENV !== 'production') {   
    logger = itemsLogger()
}

// if our NODE_ENV is equal to production we can use productionItemsLogger which logs in console and in error files 
if (process.env.NODE_ENV === 'production') { 
    logger = productionItemsLogger()
}


module.exports = logger
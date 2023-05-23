const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf } = format;


const myFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} ${level}: ${message}`;
  });

const itemsLogger = () => {
    return createLogger({
        level: 'debug', // level is upto debug 
        format: combine(
            format.colorize(), // show the colors for logs
            timestamp({format: "HH:mm:ss"}), // timestamp in hour min and second 
            myFormat // format of showing logs in console
          ),
        transports: [
         
          new transports.Console() // showing logs in console
        ],
      });

}

module.exports = itemsLogger
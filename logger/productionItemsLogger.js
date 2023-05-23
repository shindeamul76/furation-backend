const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf } = format;


const myFormat = printf(({ level, message, timestamp }) => {
    return ` [${level}] ${timestamp} : ${message}`;
  });

const itemsLogger = () => {
    return createLogger({
        level: 'info',
        format: combine(
            timestamp(),
            myFormat
          ),
        transports: [
          new transports.Console(),
          new transports.File({ filename: 'error.log', level: 'error' }), // showing logs in error.log file
          new transports.File({ filename: 'combined.log' }), // showing logs in combined.log file
        ],
      });

}

module.exports = itemsLogger